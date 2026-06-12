import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies, type ReviewStatus } from "../data/academies";
import type { Review } from "../data/academies";
import { getAllReviews, getReviewDisplayDetail } from "../utils/reviewStats";
import { clearFakeUser, getFakeUser, saveModerationStatus, saveReviewAcademyMatch, saveReviewDetailPublic } from "../utils/storage";

const moderationSections: { status: ReviewStatus; title: string; description: string }[] = [
  { status: "pending", title: "검토 대기", description: "아직 공개 여부를 결정하지 않은 리뷰입니다." },
  { status: "public", title: "공개 처리", description: "일반 사용자 화면에 노출되는 리뷰입니다." },
  { status: "held", title: "보류 처리", description: "추가 확인이 필요해서 잠시 보류한 리뷰입니다." },
  { status: "hidden", title: "제외 처리", description: "일반 화면에서 제외한 리뷰입니다." },
];

export default function MyPage() {
  const navigate = useNavigate();
  const user = getFakeUser();
  const [, setModerationTick] = useState(0);
  const reviewCandidates = getAllReviews({ includePending: true })
    .sort((a, b) => {
      const statusOrder = { pending: 0, public: 1, held: 2, hidden: 3, rejected: 3 };
      return statusOrder[a.status] - statusOrder[b.status] || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  const pendingReviews = getReviewsByStatus(reviewCandidates, "pending");
  const publicReviews = getReviewsByStatus(reviewCandidates, "public");
  const heldReviews = getReviewsByStatus(reviewCandidates, "held");
  const hiddenReviews = reviewCandidates.filter((review) => review.status === "hidden" || review.status === "rejected");
  const flaggedReviews = reviewCandidates.filter((review) => review.moderationFlags?.length);

  function handleLogout() {
    clearFakeUser();
    navigate("/login");
  }

  function updateReviewStatus(reviewId: string, status: ReviewStatus) {
    saveModerationStatus(reviewId, status);
    setModerationTick((value) => value + 1);
  }

  function updateReviewAcademyMatch(reviewId: string, academyId: string) {
    saveReviewAcademyMatch(reviewId, academyId);
    setModerationTick((value) => value + 1);
  }

  function updateReviewDetailPublic(reviewId: string, detailPublic: string) {
    saveReviewDetailPublic(reviewId, detailPublic);
    setModerationTick((value) => value + 1);
  }

  if (!user) {
    return (
      <PageLayout>
        <section className="empty-state">
          <h1>로그인이 필요합니다.</h1>
          <p>관리자 계정으로 로그인하면 마이페이지 예시를 확인할 수 있습니다.</p>
          <Link className="primary-button" to="/login">로그인하기</Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="mypage-page">
      <section className="mypage-hero">
        <div>
          <p className="eyebrow">관리자 마이페이지</p>
          <h1>리뷰 검수 현황</h1>
          <p>리뷰 상태를 나눠서 확인하고 공개 여부를 관리합니다.</p>
        </div>
        <button className="secondary-button" type="button" onClick={handleLogout}>로그아웃</button>
      </section>

      <section className="mypage-summary">
        <div>
          <span>로그인 계정</span>
          <strong>{user}</strong>
        </div>
        <div>
          <span>검수 대기 리뷰</span>
          <strong>{pendingReviews.length}개</strong>
        </div>
        <div>
          <span>공개 리뷰</span>
          <strong>{publicReviews.length}개</strong>
        </div>
        <div>
          <span>보류 리뷰</span>
          <strong>{heldReviews.length}개</strong>
        </div>
        <div>
          <span>제외 리뷰</span>
          <strong>{hiddenReviews.length}개</strong>
        </div>
        <div>
          <span>주의 플래그</span>
          <strong>{flaggedReviews.length}개</strong>
        </div>
        <div>
          <span>학원 후보</span>
          <strong>{academies.length}개</strong>
        </div>
      </section>

      <section className="mypage-panel">
        <div className="section-title-row">
          <div>
            <h2>리뷰 검수함</h2>
            <p className="muted">검토 대기, 공개, 보류, 제외 상태를 따로 확인할 수 있습니다.</p>
          </div>
          <Link className="secondary-button" to="/review/new">리뷰 등록 테스트</Link>
        </div>
        {reviewCandidates.length > 0 ? (
          <div className="admin-section-list">
            {moderationSections.map((section) => (
              <AdminModerationSection
                key={section.status}
                status={section.status}
                title={section.title}
                description={section.description}
                reviews={section.status === "hidden" ? hiddenReviews : getReviewsByStatus(reviewCandidates, section.status)}
                onChangeStatus={updateReviewStatus}
                onChangeAcademyMatch={updateReviewAcademyMatch}
                onSaveDetailPublic={updateReviewDetailPublic}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state compact-empty">
            <h2>현재 등록된 리뷰가 없습니다.</h2>
            <p>기존 리뷰 데이터는 삭제되었습니다. 새 리뷰가 들어오면 상태별로 이곳에 표시됩니다.</p>
            <Link className="primary-button" to="/review/new">리뷰 등록하기</Link>
          </div>
        )}
      </section>
    </PageLayout>
  );
}

function AdminModerationSection({ status, title, description, reviews, onChangeStatus, onChangeAcademyMatch, onSaveDetailPublic }: {
  status: ReviewStatus;
  title: string;
  description: string;
  reviews: Review[];
  onChangeStatus: (reviewId: string, status: ReviewStatus) => void;
  onChangeAcademyMatch: (reviewId: string, academyId: string) => void;
  onSaveDetailPublic: (reviewId: string, detailPublic: string) => void;
}) {
  return (
    <section className="admin-status-section">
      <div className="admin-status-head">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <strong>{reviews.length}개</strong>
      </div>
      {reviews.length > 0 ? (
        <div className="admin-review-list">
          {reviews.map((review) => (
            <AdminReviewItem
              key={review.id}
              review={review}
              status={status}
              onChangeStatus={onChangeStatus}
              onChangeAcademyMatch={onChangeAcademyMatch}
              onSaveDetailPublic={onSaveDetailPublic}
            />
          ))}
        </div>
      ) : (
        <p className="admin-empty-text">해당 상태의 리뷰가 없습니다.</p>
      )}
    </section>
  );
}

function AdminReviewItem({ review, status, onChangeStatus, onChangeAcademyMatch, onSaveDetailPublic }: {
  review: Review;
  status: ReviewStatus;
  onChangeStatus: (reviewId: string, status: ReviewStatus) => void;
  onChangeAcademyMatch: (reviewId: string, academyId: string) => void;
  onSaveDetailPublic: (reviewId: string, detailPublic: string) => void;
}) {
  const [detailPublicDraft, setDetailPublicDraft] = useState(review.detailPublic || "");
  const matchedAcademyId = review.academyId.startsWith("unmatched-") ? "" : review.academyId;

  return (
    <article className={`admin-review-item ${review.moderationFlags?.length ? "flagged" : ""}`}>
      <div className="admin-review-meta">
        <div>
          <strong>{review.academyNameRaw || review.academyName}</strong>
          <p className="muted">
            {review.source === "google-form" ? `구글폼 ${review.sourceRow}행` : "사이트 등록 리뷰"} · 상태 {getStatusLabel(review.status)}
          </p>
          <p className="muted">{getMatchedAcademyLabel(review.academyId)}</p>
        </div>
        {review.moderationFlags && review.moderationFlags.length > 0 && (
          <div className="moderation-flags" aria-label="검수 주의 플래그">
            {review.moderationFlags.map((flag) => <span key={flag}>{flag}</span>)}
          </div>
        )}
      </div>
      <div className="admin-edit-grid">
        <label>
          매칭 학원 수정
          <select value={matchedAcademyId} onChange={(event) => onChangeAcademyMatch(review.id, event.target.value)}>
            <option value="">매칭 학원 선택</option>
            {academies.map((academy) => (
              <option value={academy.id} key={academy.id}>{academy.name} · {academy.region} {academy.district}</option>
            ))}
          </select>
        </label>
        <label>
          공개용 후기 수정
          <textarea value={detailPublicDraft} onChange={(event) => setDetailPublicDraft(event.target.value)} placeholder="비워두면 원문을 그대로 사용합니다." />
        </label>
        <div className="moderation-actions admin-edit-actions">
          <button type="button" className="secondary-button" onClick={() => onSaveDetailPublic(review.id, detailPublicDraft)}>공개용 후기 저장</button>
          <button type="button" className="secondary-button" onClick={() => {
            setDetailPublicDraft("");
            onSaveDetailPublic(review.id, "");
          }}>수정본 비우기</button>
        </div>
      </div>
      <div className="admin-review-facts">
        <span>학원명: {review.academyName}</span>
        {review.writerStatus && <span>작성자: {review.writerStatus}</span>}
        {review.attendedYear && <span>다닌 년도: {review.attendedYear}</span>}
        {review.attendedPeriod && <span>다닌 기간: {review.attendedPeriod}</span>}
        {review.admissionResult && <span>합격 여부: {review.admissionResult}</span>}
        {review.rating > 0 && <span>만족도: {review.rating}/5</span>}
        {review.atmosphere && <span>분위기: {review.atmosphere}</span>}
        {review.homeworkLoad && <span>과제량: {review.homeworkLoad}</span>}
        {review.classLevel && <span>난이도: {review.classLevel}</span>}
      </div>
      {review.reviewSchoolTags && review.reviewSchoolTags.length > 0 && (
        <div className="admin-review-tags">
          <b>주요 대비 대학</b>
          <p>{review.reviewSchoolTags.join(", ")}</p>
        </div>
      )}
      {review.schoolTextRaw && (
        <div className="raw-note">
          <b>강점 학교 원문</b>
          <p>{review.schoolTextRaw}</p>
        </div>
      )}
      <div className="raw-note">
        <b>자세한 후기 원문</b>
        <p>{review.detailOriginal || getReviewDisplayDetail(review) || "원문이 없습니다."}</p>
      </div>
      {review.detailPublic && (
        <div className="raw-note public-note">
          <b>공개용 수정본</b>
          <p>{review.detailPublic}</p>
        </div>
      )}
      <ReviewCard review={review} />
      <div className="moderation-actions">
        <button type="button" className="primary-button" onClick={() => onChangeStatus(review.id, "public")} disabled={status === "public"}>공개 처리</button>
        <button type="button" className="secondary-button" onClick={() => onChangeStatus(review.id, "held")} disabled={status === "held"}>보류 처리</button>
        <button type="button" className="secondary-button" onClick={() => onChangeStatus(review.id, "pending")} disabled={status === "pending"}>검토 대기</button>
        <button type="button" className="secondary-button danger-button" onClick={() => onChangeStatus(review.id, "hidden")} disabled={status === "hidden"}>제외 처리</button>
      </div>
    </article>
  );
}

function getStatusLabel(status: ReviewStatus) {
  if (status === "public") return "공개";
  if (status === "held") return "보류";
  if (status === "hidden" || status === "rejected") return "제외";
  return "검수 대기";
}

function getReviewsByStatus(reviews: Review[], status: ReviewStatus) {
  return reviews.filter((review) => review.status === status);
}

function getMatchedAcademyLabel(academyId: string) {
  if (academyId.startsWith("unmatched-")) return "매칭 학원: 확인 필요";
  const academy = academies.find((item) => item.id === academyId);
  return academy ? `매칭 학원: ${academy.name}` : "매칭 학원: 확인 필요";
}
