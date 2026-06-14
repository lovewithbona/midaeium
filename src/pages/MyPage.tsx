import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { academies, regions, type Academy, type Review, type ReviewStatus } from "../data/academies";
import { getSchoolTagResearchByAcademyId } from "../data/academySchoolTagsInitial152";
import { surveyUnresolvedAcademyNames20260614 } from "../data/surveyAcademyMatchPlan";
import { findUniversityByName, searchUniversities, suggestUniversitiesFromRawText } from "../data/universities";
import { downloadAdminReviewExport } from "../utils/adminExport";
import { getAllReviews, getReviewDisplayDetail } from "../utils/reviewStats";
import {
  clearFakeUser,
  getAdminAcademyDrafts,
  getAdminInboxStatus,
  getContactRequests,
  getFakeUser,
  getInfoReports,
  getReviewReports,
  saveAdminAcademyDraft,
  saveAdminInboxStatus,
  saveModerationStatus,
  saveReviewAcademyMatch,
  saveReviewDetailPublic,
  saveReviewSchoolTags,
  type AdminInboxStatus,
  type ContactRequest,
  type InfoReport,
  type ReviewReport,
} from "../utils/storage";

type AdminFilter = "all" | "pending" | "match" | "school" | "content" | "public" | "held" | "hidden";
type AdminSection = "reviews" | "infoReports" | "reviewReports" | "contacts";

const filterLabels: Record<AdminFilter, string> = {
  all: "전체",
  pending: "검수 대기",
  match: "학원 매칭 필요",
  school: "대학명 정리 필요",
  content: "내용 검토 필요",
  public: "공개 완료",
  held: "보류",
  hidden: "제외",
};

const emptyDraft = {
  name: "",
  region: "서울",
  district: "",
  address: "",
  officialWebsiteUrl: "",
  instagramUrl: "",
  naverBlogUrl: "",
};

export default function MyPage() {
  const navigate = useNavigate();
  const user = getFakeUser();
  const [tick, setTick] = useState(0);
  const [adminSection, setAdminSection] = useState<AdminSection>("reviews");
  const [activeFilter, setActiveFilter] = useState<AdminFilter>("pending");
  const [selectedReviewId, setSelectedReviewId] = useState("");
  const [academyKeyword, setAcademyKeyword] = useState("");
  const [schoolKeyword, setSchoolKeyword] = useState("");
  const [customSchool, setCustomSchool] = useState("");
  const [selectedSchoolTags, setSelectedSchoolTags] = useState<string[]>([]);
  const [detailPublicDraft, setDetailPublicDraft] = useState("");
  const [isAddingAcademy, setIsAddingAcademy] = useState(false);
  const [academyDraft, setAcademyDraft] = useState(emptyDraft);

  const allAcademies = useMemo(() => [...academies, ...getAdminAcademyDrafts()], [tick]);
  const reviews = useMemo(() => getAllReviews({ includePending: true }), [tick]);
  const infoReports = useMemo(() => getInfoReports(), [tick]);
  const reviewReports = useMemo(() => getReviewReports(), [tick]);
  const contactRequests = useMemo(() => getContactRequests(), [tick]);
  const enrichedReviews = useMemo(() => reviews.map((review) => enrichReview(review, allAcademies)), [reviews, allAcademies]);
  const filteredReviews = useMemo(() => filterReviews(enrichedReviews, activeFilter), [enrichedReviews, activeFilter]);
  const selectedReview = filteredReviews.find((review) => review.id === selectedReviewId) || filteredReviews[0] || enrichedReviews[0];
  const selectedAcademy = selectedReview ? allAcademies.find((academy) => academy.id === selectedReview.academyId) : undefined;
  const selectedAcademySchoolResearch = selectedAcademy ? getSchoolTagResearchByAcademyId(selectedAcademy.id) : null;

  const summary = useMemo(() => {
    const hiddenCount = enrichedReviews.filter((review) => review.status === "hidden" || review.status === "rejected").length;
    return {
      all: enrichedReviews.length,
      pending: enrichedReviews.filter((review) => review.status === "pending").length,
      match: enrichedReviews.filter((review) => review.needsAcademyMatch).length,
      school: enrichedReviews.filter((review) => review.needsSchoolNormalize).length,
      content: enrichedReviews.filter((review) => review.needsContentReview).length,
      public: enrichedReviews.filter((review) => review.status === "public").length,
      held: enrichedReviews.filter((review) => review.status === "held").length,
      hidden: hiddenCount,
    };
  }, [enrichedReviews]);

  const academyResults = useMemo(() => {
    const keyword = academyKeyword.trim();
    if (!keyword) return [];
    return allAcademies
      .filter((academy) => [academy.name, academy.location, academy.address, academy.region, academy.district].some((text) => text.includes(keyword)))
      .slice(0, 8);
  }, [academyKeyword, allAcademies]);

  const schoolResults = useMemo(() => searchUniversities(schoolKeyword, 8), [schoolKeyword]);
  const suggestedSchools = useMemo(() => {
    if (!selectedReview) return [];
    return suggestUniversitiesFromRawText(`${selectedReview.schoolTextRaw || ""} ${(selectedReview.reviewSchoolTagsRaw || []).join(" ")}`);
  }, [selectedReview]);

  useEffect(() => {
    if (!selectedReview) return;
    setSelectedReviewId(selectedReview.id);
    setSelectedSchoolTags(selectedReview.reviewSchoolTags || []);
    setDetailPublicDraft(selectedReview.detailPublic || "");
    setAcademyKeyword("");
    setSchoolKeyword("");
    setCustomSchool("");
    setIsAddingAcademy(false);
    setAcademyDraft(emptyDraft);
  }, [selectedReview?.id]);

  function handleLogout() {
    clearFakeUser();
    navigate("/login");
  }

  function refresh() {
    setTick((value) => value + 1);
  }

  function updateInboxStatus(itemId: string, status: AdminInboxStatus) {
    saveAdminInboxStatus(itemId, status);
    refresh();
  }

  function updateReviewStatus(reviewId: string, status: ReviewStatus) {
    saveModerationStatus(reviewId, status);
    refresh();
  }

  function updateReviewAcademyMatch(reviewId: string, academyId: string) {
    saveReviewAcademyMatch(reviewId, academyId);
    setAcademyKeyword("");
    refresh();
  }

  function saveSchoolTags(reviewId: string, tags = selectedSchoolTags) {
    saveReviewSchoolTags(reviewId, tags);
    refresh();
  }

  function addSchoolTag(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    const canonicalName = findUniversityByName(trimmed)?.name || trimmed;
    setSelectedSchoolTags((current) => current.includes(canonicalName) ? current : [...current, canonicalName]);
    setSchoolKeyword("");
    setCustomSchool("");
  }

  function removeSchoolTag(value: string) {
    setSelectedSchoolTags((current) => current.filter((item) => item !== value));
  }

  function saveDetailPublic(reviewId: string) {
    saveReviewDetailPublic(reviewId, detailPublicDraft);
    refresh();
  }

  function createAcademyDraft(reviewId: string) {
    const name = academyDraft.name.trim();
    const district = academyDraft.district.trim();
    const address = academyDraft.address.trim();
    if (!name || !district || !address) return;

    const academy: Academy = {
      id: `custom-academy-${Date.now()}`,
      name,
      region: academyDraft.region,
      district,
      location: `${academyDraft.region} ${district}`,
      address,
      homepageUrl: academyDraft.officialWebsiteUrl.trim() || null,
      mapSearchQuery: `${name} ${address}`,
      sourceUrl: null,
      verifiedStatus: "확인 필요",
      entranceTypes: [],
      strongTypes: [],
      typeSourceUrl: null,
      typeConfidence: "확인 필요",
      typeMemo: "운영자 검수 화면에서 임시 추가된 학원입니다.",
      schoolTags: [],
      officialWebsiteUrl: academyDraft.officialWebsiteUrl.trim() || null,
      instagramUrl: academyDraft.instagramUrl.trim() || null,
      naverBlogUrl: academyDraft.naverBlogUrl.trim() || null,
      channelConfidence: "확인 필요",
      channelMemo: "운영자 검수 화면에서 임시 추가된 채널 정보입니다.",
      channelSourceUrls: [
        academyDraft.officialWebsiteUrl,
        academyDraft.instagramUrl,
        academyDraft.naverBlogUrl,
      ].filter(Boolean),
      createdAt: new Date().toISOString(),
    };

    saveAdminAcademyDraft(academy);
    saveReviewAcademyMatch(reviewId, academy.id);
    refresh();
  }

  if (!user) {
    return (
      <PageLayout>
        <section className="empty-state">
          <h1>로그인이 필요합니다.</h1>
          <p>관리자 계정으로 로그인하면 검수 페이지를 확인할 수 있습니다.</p>
          <Link className="primary-button" to="/login">로그인하기</Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="mypage-page">
      <section className="mypage-hero">
        <div>
          <p className="eyebrow">관리자</p>
          <h1>운영자 검수 페이지</h1>
          <p>구글폼으로 수집된 리뷰를 확인하고, 학원 매칭과 주요 대비 대학 정보를 사이트 기준에 맞게 정리합니다.</p>
        </div>
        <div className="admin-hero-actions">
          <button className="primary-button" type="button" onClick={downloadAdminReviewExport}>검수 결과 내보내기</button>
          <button className="secondary-button" type="button" onClick={handleLogout}>로그아웃</button>
        </div>
      </section>

      <section className="admin-export-notice">
        <strong>현재 검수 결과는 이 브라우저에 임시 저장됩니다.</strong>
        <p>다른 기기나 다른 브라우저에서는 보이지 않으며, 사이트에 실제 반영하려면 검수 결과를 내보낸 뒤 데이터 파일에 추가해야 합니다.</p>
      </section>

      <section className="mypage-summary">
        <SummaryItem label="전체 리뷰" value={summary.all} />
        <SummaryItem label="검수 대기" value={summary.pending} />
        <SummaryItem label="학원 매칭 필요" value={summary.match} />
        <SummaryItem label="대학명 정리 필요" value={summary.school} />
        <SummaryItem label="공개 완료" value={summary.public} />
        <SummaryItem label="보류/제외" value={summary.held + summary.hidden} />
      </section>

      <section className="admin-main-tabs" aria-label="운영자 메뉴">
        <button type="button" className={adminSection === "reviews" ? "active" : ""} onClick={() => setAdminSection("reviews")}>리뷰 검수</button>
        <button type="button" className={adminSection === "infoReports" ? "active" : ""} onClick={() => setAdminSection("infoReports")}>정보 수정 제보 <b>{infoReports.length}</b></button>
        <button type="button" className={adminSection === "reviewReports" ? "active" : ""} onClick={() => setAdminSection("reviewReports")}>리뷰 신고 <b>{reviewReports.length}</b></button>
        <button type="button" className={adminSection === "contacts" ? "active" : ""} onClick={() => setAdminSection("contacts")}>문의 내역 <b>{contactRequests.length}</b></button>
      </section>

      {adminSection === "reviews" && (
      <>
        <section className="admin-unresolved-panel">
          <div>
            <p className="eyebrow">지점 확인 필요</p>
            <h2>구글폼 학원명 중 운영자 확인이 필요한 항목</h2>
          </div>
          <div className="admin-unresolved-list">
            {surveyUnresolvedAcademyNames20260614.map((item) => (
              <article key={item.academyNameRaw}>
                <strong>{item.academyNameRaw}</strong>
                <p>{item.reason}</p>
                {item.candidateAcademyIds.length > 0 && <span>후보: {item.candidateAcademyIds.join(", ")}</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="admin-workspace">
          <aside className="admin-sidebar">
          <div className="admin-filter-list" aria-label="검수 목록 필터">
            {(Object.keys(filterLabels) as AdminFilter[]).map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedReviewId("");
                }}
              >
                <span>{filterLabels[filter]}</span>
                <b>{summary[filter]}</b>
              </button>
            ))}
          </div>
          <div className="admin-review-list compact">
            {filteredReviews.length > 0 ? filteredReviews.map((review) => (
              <button
                type="button"
                key={review.id}
                className={selectedReview?.id === review.id ? "active" : ""}
                onClick={() => setSelectedReviewId(review.id)}
              >
                <strong>{review.academyNameRaw || review.academyName || "학원명 없음"}</strong>
                <span>{review.writerStatus || "작성자 정보 없음"} · {review.rating || 0}/5</span>
                <small>{getStatusLabel(review.status)}{review.needsAcademyMatch ? " · 매칭 필요" : ""}</small>
              </button>
            )) : (
              <p className="admin-empty-text">이 목록에 해당하는 리뷰가 없습니다.</p>
            )}
          </div>
        </aside>

          <div className="admin-detail-panel">
          {selectedReview ? (
            <>
              <div className="admin-detail-head">
                <div>
                  <span className={`status-badge status-${selectedReview.status}`}>{getStatusLabel(selectedReview.status)}</span>
                  <h2>{selectedReview.academyNameRaw || selectedReview.academyName || "학원명 없음"}</h2>
                  <p>{selectedReview.source === "google-form" ? `구글폼 ${selectedReview.sourceRow}행` : "사이트 등록 리뷰"}</p>
                </div>
                {selectedReview.moderationFlags && selectedReview.moderationFlags.length > 0 && (
                  <div className="moderation-flags">
                    {selectedReview.moderationFlags.map((flag) => <span key={flag}>{flag}</span>)}
                  </div>
                )}
              </div>

              <section className="admin-editor-section">
                <h3>매칭 학원</h3>
                <p className="admin-raw-line">원문 학원명: <b>{selectedReview.academyNameRaw || selectedReview.academyName || "없음"}</b></p>
                <p className="admin-raw-line">현재 매칭: <b>{selectedAcademy?.name || "확인 필요"}</b></p>
                <input value={academyKeyword} onChange={(event) => setAcademyKeyword(event.target.value)} placeholder="학원명을 검색해 매칭하세요." />
                {academyResults.length > 0 && (
                  <div className="admin-search-results">
                    {academyResults.map((academy) => (
                      <button type="button" key={academy.id} onClick={() => updateReviewAcademyMatch(selectedReview.id, academy.id)}>
                        <strong>{academy.name}</strong>
                        <span>{academy.region} {academy.district} · {academy.address}</span>
                      </button>
                    ))}
                  </div>
                )}
                <button type="button" className="text-button" onClick={() => setIsAddingAcademy((value) => !value)}>새 학원 추가하기</button>
                {isAddingAcademy && (
                  <div className="admin-academy-draft-form">
                    <label>학원명<input value={academyDraft.name} onChange={(event) => setAcademyDraft({ ...academyDraft, name: event.target.value })} /></label>
                    <label>지역<select value={academyDraft.region} onChange={(event) => setAcademyDraft({ ...academyDraft, region: event.target.value })}>{regions.filter((region) => region !== "전체").map((region) => <option key={region}>{region}</option>)}</select></label>
                    <label>세부 지역<input value={academyDraft.district} onChange={(event) => setAcademyDraft({ ...academyDraft, district: event.target.value })} placeholder="예: 강남구" /></label>
                    <label className="wide">주소<input value={academyDraft.address} onChange={(event) => setAcademyDraft({ ...academyDraft, address: event.target.value })} /></label>
                    <label>공식 홈페이지 URL<input value={academyDraft.officialWebsiteUrl} onChange={(event) => setAcademyDraft({ ...academyDraft, officialWebsiteUrl: event.target.value })} /></label>
                    <label>인스타그램 URL<input value={academyDraft.instagramUrl} onChange={(event) => setAcademyDraft({ ...academyDraft, instagramUrl: event.target.value })} /></label>
                    <label>네이버 블로그 URL<input value={academyDraft.naverBlogUrl} onChange={(event) => setAcademyDraft({ ...academyDraft, naverBlogUrl: event.target.value })} /></label>
                    <button type="button" className="secondary-button wide" onClick={() => createAcademyDraft(selectedReview.id)}>새 학원으로 등록하고 매칭하기</button>
                  </div>
                )}
              </section>

              <section className="admin-editor-section">
                <h3>주요 대비 대학</h3>
                <p className="admin-raw-line">원문 강점 학교: <b>{selectedReview.schoolTextRaw || selectedReview.reviewSchoolTagsRaw?.join(", ") || "없음"}</b></p>
                {selectedAcademySchoolResearch && (
                  <div className="admin-school-research-box">
                    <strong>초기 조사 데이터</strong>
                    <p>조사 상태: {selectedAcademySchoolResearch.researchStatus}</p>
                    <p>{selectedAcademySchoolResearch.researchMemo}</p>
                    {selectedAcademySchoolResearch.schoolTags.length > 0 && (
                      <div className="admin-school-research-list">
                        {selectedAcademySchoolResearch.schoolTags.map((tag) => (
                          <a key={`${tag.schoolName}-${tag.sourceUrl || tag.source}`} href={tag.sourceUrl || undefined} target="_blank" rel="noreferrer">
                            <b>{tag.schoolName}</b>
                            <span>{tag.source}</span>
                            {tag.memo && <small>{tag.memo}</small>}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {suggestedSchools.length > 0 && (
                  <div className="admin-suggestion-row">
                    <span>추천 대학</span>
                    {suggestedSchools.map((university) => (
                      <button type="button" key={university.id} onClick={() => addSchoolTag(university.name)}>{university.name}</button>
                    ))}
                  </div>
                )}
                <input value={schoolKeyword} onChange={(event) => setSchoolKeyword(event.target.value)} placeholder="대학명이나 약칭을 검색해 주세요" />
                {schoolResults.length > 0 && (
                  <div className="admin-search-results small">
                    {schoolResults.map((university) => (
                      <button type="button" key={university.id} onClick={() => addSchoolTag(university.name)}>
                        <strong>{university.shortName}</strong>
                        <span>{university.name}</span>
                      </button>
                    ))}
                  </div>
                )}
                <div className="selected-university-chips">
                  {selectedSchoolTags.map((school) => (
                    <button type="button" key={school} onClick={() => removeSchoolTag(school)}>{school} ×</button>
                  ))}
                </div>
                <div className="custom-university-row">
                  <input value={customSchool} onChange={(event) => setCustomSchool(event.target.value)} placeholder="기타 직접 입력" />
                  <button type="button" className="secondary-button" onClick={() => addSchoolTag(customSchool)}>추가</button>
                </div>
                <button type="button" className="secondary-button" onClick={() => saveSchoolTags(selectedReview.id)}>주요 대비 대학 저장</button>
              </section>

              <section className="admin-editor-section">
                <h3>작성자/수강 정보</h3>
                <div className="admin-review-facts">
                  <span>작성자 상태: {selectedReview.writerStatus || "없음"}</span>
                  <span>만족도: {selectedReview.rating || 0}/5</span>
                  {selectedReview.attendedYear && <span>다닌 시기: {selectedReview.attendedYear}</span>}
                  {selectedReview.attendedPeriod && <span>다닌 기간: {selectedReview.attendedPeriod}</span>}
                  {selectedReview.admissionResult && <span>합격 여부: {selectedReview.admissionResult}</span>}
                  {selectedReview.atmosphere && <span>분위기: {selectedReview.atmosphere}</span>}
                  {selectedReview.homeworkLoad && <span>과제량: {selectedReview.homeworkLoad}</span>}
                  {selectedReview.classLevel && <span>난이도: {selectedReview.classLevel}</span>}
                </div>
              </section>

              <section className="admin-editor-section">
                <h3>태그</h3>
                <div className="admin-review-tags">
                  {getAllReviewTags(selectedReview).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </section>

              <section className="admin-editor-section">
                <h3>후기 원문</h3>
                <p className="admin-review-body">{getAdminReviewBody(selectedReview) || "원문이 없습니다."}</p>
                <label>
                  공개용 원문 수정
                  <textarea value={detailPublicDraft} onChange={(event) => setDetailPublicDraft(event.target.value)} placeholder="비워두면 원문을 그대로 사용합니다." />
                </label>
                <div className="moderation-actions">
                  <button type="button" className="secondary-button" onClick={() => saveDetailPublic(selectedReview.id)}>수정본 저장</button>
                  <button type="button" className="secondary-button" onClick={() => {
                    setDetailPublicDraft("");
                    saveReviewDetailPublic(selectedReview.id, "");
                    refresh();
                  }}>수정본 비우기</button>
                </div>
              </section>

              <div className="moderation-actions sticky-actions">
                <button type="button" className="primary-button" onClick={() => updateReviewStatus(selectedReview.id, "public")}>공개 처리</button>
                <button type="button" className="secondary-button" onClick={() => updateReviewStatus(selectedReview.id, "pending")}>검수 대기</button>
                <button type="button" className="secondary-button" onClick={() => updateReviewStatus(selectedReview.id, "held")}>보류 처리</button>
                <button type="button" className="secondary-button danger-button" onClick={() => updateReviewStatus(selectedReview.id, "hidden")}>제외 처리</button>
              </div>
            </>
          ) : (
            <div className="empty-state compact-empty">
              <h2>검수할 리뷰가 없습니다.</h2>
              <p>새 리뷰가 들어오면 이곳에서 학원 매칭과 대학명을 정리할 수 있습니다.</p>
            </div>
          )}
          </div>
        </section>
      </>
      )}

      {adminSection === "infoReports" && (
        <AdminInboxPanel
          title="정보 수정 제보"
          description="잘못된 학원 정보, 링크, 주소, 전형 정보 제보를 확인합니다."
          items={infoReports}
          emptyText="아직 접수된 정보 수정 제보가 없습니다."
          onStatusChange={updateInboxStatus}
        />
      )}

      {adminSection === "reviewReports" && (
        <AdminInboxPanel
          title="리뷰 신고"
          description="사용자가 신고한 리뷰를 확인하고 필요한 조치를 기록합니다."
          items={reviewReports}
          emptyText="아직 접수된 리뷰 신고가 없습니다."
          onStatusChange={updateInboxStatus}
        />
      )}

      {adminSection === "contacts" && (
        <AdminInboxPanel
          title="문의 내역"
          description="서비스 문의, 개인정보 삭제 요청, 학원 정보 추가 요청을 확인합니다."
          items={contactRequests}
          emptyText="아직 접수된 문의가 없습니다."
          onStatusChange={updateInboxStatus}
        />
      )}
    </PageLayout>
  );
}

function SummaryItem({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}개</strong>
    </div>
  );
}

function AdminInboxPanel({
  title,
  description,
  items,
  emptyText,
  onStatusChange,
}: {
  title: string;
  description: string;
  items: Array<InfoReport | ReviewReport | ContactRequest>;
  emptyText: string;
  onStatusChange: (itemId: string, status: AdminInboxStatus) => void;
}) {
  return (
    <section className="admin-inbox-panel">
      <div className="admin-inbox-head">
        <div>
          <p className="eyebrow">운영함</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <strong>{items.length}건</strong>
      </div>

      {items.length > 0 ? (
        <div className="admin-inbox-list">
          {items.map((item) => (
            <article className="admin-inbox-card" key={item.id}>
              <div className="admin-inbox-card-head">
                <div>
                  <span>{formatDate(item.createdAt)}</span>
                  <h3>{getInboxTitle(item)}</h3>
                </div>
                <label>
                  상태
                  <select value={getAdminInboxStatus(item.id)} onChange={(event) => onStatusChange(item.id, event.target.value as AdminInboxStatus)}>
                    {(["접수", "검토 중", "반영 완료", "보류", "제외"] as AdminInboxStatus[]).map((status) => <option key={status}>{status}</option>)}
                  </select>
                </label>
              </div>
              <div className="admin-inbox-content">
                {"academyKeyword" in item && (
                  <>
                    <InfoLine label="대상 학원" value={item.academyKeyword || item.academyId || "입력 없음"} />
                    <InfoLine label="문제가 있는 정보" value={item.problematicInfo} />
                    <InfoLine label="수정이 필요한 내용" value={item.requestedChange} />
                    <InfoLine label="참고 링크" value={item.referenceUrl} />
                    <InfoLine label="연락 수단" value={item.contact} />
                  </>
                )}
                {"reviewId" in item && (
                  <>
                    <InfoLine label="리뷰 ID" value={item.reviewId} />
                    <InfoLine label="신고 사유" value={item.reason} />
                    <InfoLine label="추가 설명" value={item.description || "없음"} />
                  </>
                )}
                {"body" in item && (
                  <>
                    <InfoLine label="문의 유형" value={item.type} />
                    <InfoLine label="제목" value={item.title} />
                    <InfoLine label="내용" value={item.body} />
                    <InfoLine label="관련 학원명" value={item.academyName} />
                    <InfoLine label="참고 링크" value={item.referenceUrl} />
                    <InfoLine label="연락 수단" value={item.contact} />
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state compact-empty">
          <h2>{emptyText}</h2>
          <p>접수된 항목이 생기면 이곳에서 상태를 관리할 수 있습니다.</p>
        </div>
      )}
    </section>
  );
}

function InfoLine({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value || "입력 없음"}</dd>
    </div>
  );
}

function getInboxTitle(item: InfoReport | ReviewReport | ContactRequest) {
  if ("academyKeyword" in item) return item.type;
  if ("reviewId" in item) return item.reason;
  return item.title || item.type;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("ko-KR", { dateStyle: "medium", timeStyle: "short" });
}

function enrichReview(review: Review, allAcademies: Academy[]) {
  const needsAcademyMatch = review.academyId.startsWith("unmatched-") || !allAcademies.some((academy) => academy.id === review.academyId);
  const suggestedSchools = suggestUniversitiesFromRawText(`${review.schoolTextRaw || ""} ${(review.reviewSchoolTagsRaw || []).join(" ")}`);
  const normalizedTags = (review.reviewSchoolTagsRaw || []).map((tag) => findUniversityByName(tag)?.name).filter(Boolean);
  const needsSchoolNormalize = Boolean((review.schoolTextRaw || review.reviewSchoolTagsRaw?.length) && suggestedSchools.length > 0 && (review.reviewSchoolTags || []).length === 0)
    || normalizedTags.some((tag) => tag && !(review.reviewSchoolTags || []).includes(tag));
  const needsContentReview = Boolean(review.moderationFlags?.length);

  return {
    ...review,
    needsAcademyMatch,
    needsSchoolNormalize,
    needsContentReview,
  };
}

function filterReviews<T extends Review & { needsAcademyMatch: boolean; needsSchoolNormalize: boolean; needsContentReview: boolean }>(reviews: T[], filter: AdminFilter) {
  if (filter === "all") return reviews;
  if (filter === "match") return reviews.filter((review) => review.needsAcademyMatch);
  if (filter === "school") return reviews.filter((review) => review.needsSchoolNormalize);
  if (filter === "content") return reviews.filter((review) => review.needsContentReview);
  if (filter === "hidden") return reviews.filter((review) => review.status === "hidden" || review.status === "rejected");
  return reviews.filter((review) => review.status === filter);
}

function getStatusLabel(status: ReviewStatus) {
  if (status === "public") return "공개";
  if (status === "held") return "보류";
  if (status === "hidden" || status === "rejected") return "제외";
  return "검수 대기";
}

function getAllReviewTags(review: Review) {
  return Array.from(new Set([
    ...(review.feedbackTags || []),
    ...(review.goodTags || []),
    ...(review.concernTags || []),
    ...(review.cautionTags || []),
    ...(review.teachingStyleTags || []),
  ]));
}

function getAdminReviewBody(review: Review) {
  return review.detailPublic || review.detailOriginal || getReviewDisplayDetail(review) || review.detail || "";
}
