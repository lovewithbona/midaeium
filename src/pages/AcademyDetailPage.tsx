import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies, getAcademyMapUrl } from "../data/academies";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats, getRepresentativeReview } from "../utils/reviewStats";
import { getReviewLikeCount } from "../utils/storage";

export default function AcademyDetailPage() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const [, setLikeTick] = useState(0);
  const [reviewSort, setReviewSort] = useState("likes");
  const activeTab = params.get("tab") === "reviews" ? "reviews" : "info";
  const academy = academies.find((item) => item.id === id);

  if (!academy) {
    return (
      <PageLayout>
        <div className="empty-state">
          <h1>학원을 찾을 수 없어요.</h1>
          <Link className="primary-button" to="/academies">학원 찾기로 돌아가기</Link>
        </div>
      </PageLayout>
    );
  }

  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const insights = getAcademyAggregatedInsights(academy.id);
  const representativeReview = getRepresentativeReview(reviews);
  const preparedLabels = insights.preparedTypeCounts.length > 0 ? insights.preparedTypeCounts : academy.entranceTypes.map((label) => ({ label, count: 0 }));
  const strongLabels = insights.strongTypeCounts.length > 0 ? insights.strongTypeCounts : academy.strongTypes.map((label) => ({ label, count: 0 }));
  const sortedReviews = [...reviews].sort((a, b) => {
    if (reviewSort === "recent") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (reviewSort === "old") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    return getReviewLikeCount(b) - getReviewLikeCount(a) || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const homepageLabel = getHomepageLabel(academy.officialWebsiteUrl);
  const hasChannel = Boolean(academy.officialWebsiteUrl || academy.instagramUrl || academy.naverBlogUrl);

  return (
    <PageLayout>
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{academy.region} {academy.district}</p>
          <h1>{academy.name}</h1>
          <p>{academy.location}</p>
          <div className="detail-rating-line">
            <strong>평균 하트 {averageRating.toFixed(1)} / 5</strong>
            <span>리뷰 {reviewCount}개</span>
          </div>
          {representativeReview && (
            <div className="featured-review-box">
              <span>{representativeReview.title}</span>
              <p>“{representativeReview.preview}”</p>
              <small>익명 · {representativeReview.review.writerStatus} · {representativeReview.review.strongTypes?.[0] || "전형 미입력"}</small>
            </div>
          )}
        </div>
        <Link className="primary-button" to="/review/new">리뷰 등록하기</Link>
      </section>
      <div className="detail-tabs" role="tablist" aria-label="학원 상세 보기">
        <button
          type="button"
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setParams({})}
          role="tab"
          aria-selected={activeTab === "info"}
        >
          학원 정보
        </button>
        <button
          type="button"
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setParams({ tab: "reviews" })}
          role="tab"
          aria-selected={activeTab === "reviews"}
        >
          리뷰 {reviewCount}개
        </button>
      </div>
      <section className="detail-grid">
        {activeTab === "info" && (
        <div className="detail-card">
          <h2>학원 정보</h2>
          <div className="detail-summary-grid">
            <div>
              <span>지역</span>
              <strong>{academy.region} {academy.district}</strong>
            </div>
            <div>
              <span>주소</span>
              <strong>{academy.address}</strong>
            </div>
            <div>
              <span>준비 가능 전형</span>
              <strong>{preparedLabels.length > 0 ? preparedLabels.slice(0, 4).map(formatCountLabel).join(", ") : "확인 중"}</strong>
            </div>
            <div>
              <span>강점 입시 유형</span>
              <strong>{strongLabels.length > 0 ? strongLabels.slice(0, 4).map(formatCountLabel).join(", ") : "확인 중"}</strong>
            </div>
            <div>
              <span>주요 대비 대학</span>
              <strong>{insights.schoolTagCounts.length > 0 ? insights.schoolTagCounts.slice(0, 4).map(formatCountLabel).join(", ") : academy.schoolTags.length > 0 ? academy.schoolTags.map((tag) => tag.schoolName).join(", ") : "리뷰와 추가 조사를 통해 업데이트 예정입니다."}</strong>
            </div>
          </div>
          <p className="type-note">리뷰 기반 정보이며, 초기 등록 정보와 함께 참고해 주세요.</p>
          {hasChannel && (
            <dl className="detail-list compact">
              {academy.officialWebsiteUrl && (
                <>
                  <dt>공식 홈페이지</dt>
                  <dd><a href={academy.officialWebsiteUrl} target="_blank" rel="noreferrer">{homepageLabel}</a></dd>
                </>
              )}
              {academy.instagramUrl && (
                <>
                  <dt>인스타그램</dt>
                  <dd><a href={academy.instagramUrl} target="_blank" rel="noreferrer">인스타그램 보기</a></dd>
                </>
              )}
              {academy.naverBlogUrl && (
                <>
                  <dt>네이버 블로그</dt>
                  <dd><a href={academy.naverBlogUrl} target="_blank" rel="noreferrer">네이버 블로그 보기</a></dd>
                </>
              )}
            </dl>
          )}
          <div className="map-link-card">
            <span>{academy.region} {academy.district}</span>
            <strong>{academy.address}</strong>
            <p>웹사이트 안에서 바로 보는 지도 기능은 추후 제공 예정입니다.</p>
            <a href={getAcademyMapUrl(academy)} target="_blank" rel="noreferrer">네이버 지도에서 위치 보기</a>
          </div>
        </div>
        )}
        {activeTab === "reviews" && (
        <div className="detail-card review-panel">
          <div className="review-summary-panel">
            <p className="eyebrow">리뷰 요약</p>
            <h2>등록된 리뷰 {reviewCount}개</h2>
            <p className="muted">리뷰에서 많이 선택된 태그를 먼저 확인해 보세요.</p>
          </div>
          <div className="keyword-summary">
            <strong>많이 언급된 키워드</strong>
            <div className="review-tags review-tags-inline">
              {insights.topKeywordCounts.length > 0 ? insights.topKeywordCounts.slice(0, 10).map((item) => (
                <span className="review-tag" key={item.label}>{createHashtag(item.label)} {item.count}</span>
              )) : <span className="muted">아직 충분한 키워드가 없습니다.</span>}
            </div>
          </div>
          <div className="review-sort-row">
            <label>리뷰 정렬
              <select value={reviewSort} onChange={(event) => setReviewSort(event.target.value)}>
                <option value="likes">좋아요순</option>
                <option value="recent">최근순</option>
                <option value="old">오래된순</option>
              </select>
            </label>
          </div>
          <div className="review-list">
            {sortedReviews.length > 0 ? sortedReviews.map((review) => <ReviewCard key={review.id} review={review} onLike={() => setLikeTick((value) => value + 1)} />) : <p className="muted">아직 이 학원에 등록된 리뷰가 없어요.</p>}
          </div>
        </div>
        )}
      </section>
    </PageLayout>
  );
}

function formatCountLabel(item: { label: string; count: number }) {
  return item.count > 0 ? `${item.label} ${item.count}` : item.label;
}

function getHomepageLabel(url: string | null) {
  if (!url) return "";

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "공식 홈페이지";
  }
}
