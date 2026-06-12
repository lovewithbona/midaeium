import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies, getAcademyMapUrl } from "../data/academies";
import type { Review } from "../data/academies";
import { getAcademyDisplayName } from "../utils/academyDisplay";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats, getRepresentativeReview } from "../utils/reviewStats";
import { getReviewReactionCount } from "../utils/storage";

export default function AcademyDetailPage() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const [, setLikeTick] = useState(0);
  const [reviewSort, setReviewSort] = useState("helpful");
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
  const hasReviews = reviewCount > 0;
  const displayName = getAcademyDisplayName(academy);
  const preparedLabels = insights.preparedTypeCounts.length > 0 ? insights.preparedTypeCounts : academy.entranceTypes.map((label) => ({ label, count: 0 }));
  const strongLabels = insights.strongTypeCounts.length > 0 ? insights.strongTypeCounts : academy.strongTypes.map((label) => ({ label, count: 0 }));
  const keywordGroups = getKeywordGroups(reviews);
  const sortedReviews = [...reviews].sort((a, b) => {
    if (reviewSort === "empathy") return getReviewReactionCount(b, "empathy") - getReviewReactionCount(a, "empathy") || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (reviewSort === "helpful") return getReviewReactionCount(b, "helpful") - getReviewReactionCount(a, "helpful") || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (reviewSort === "recent") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (reviewSort === "old") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    return getReviewReactionCount(b, "helpful") - getReviewReactionCount(a, "helpful") || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const homepageLabel = getHomepageLabel(academy.officialWebsiteUrl);
  const instagramLabel = getInstagramLabel(academy.instagramUrl);
  const hasChannel = Boolean(academy.officialWebsiteUrl || academy.instagramUrl || academy.naverBlogUrl);

  return (
    <PageLayout>
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{academy.region} {academy.district}</p>
          <h1>{displayName}</h1>
          <div className="detail-rating-line">
            {hasReviews ? <strong>평균 하트 {averageRating.toFixed(1)} / 5</strong> : <strong>아직 하트 평가가 없어요.</strong>}
            <span>리뷰 {reviewCount}개</span>
          </div>
          <div className="featured-review-box">
            {representativeReview ? (
              <>
                <span>{representativeReview.title}</span>
                <p>“{representativeReview.preview}”</p>
                <small>{representativeReview.review.writerStatus || "작성자"}</small>
              </>
            ) : (
              <>
                <span>대표 리뷰</span>
                <p>아직 대표 리뷰가 없어요. 첫 리뷰를 남겨 주세요.</p>
              </>
            )}
          </div>
        </div>
        <Link className="primary-button" to="/review/new">리뷰 등록하기</Link>
      </section>
      <div className="detail-tabs" aria-label="학원 상세 보기">
        <button
          type="button"
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setParams({})}
          aria-pressed={activeTab === "info"}
        >
          학원 정보
        </button>
        <button
          type="button"
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setParams({ tab: "reviews" })}
          aria-pressed={activeTab === "reviews"}
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
              <span><i className="info-icon region" aria-hidden="true" />지역</span>
              <strong>{academy.region} {academy.district}</strong>
            </div>
            <div>
              <span><i className="info-icon address" aria-hidden="true" />주소</span>
              <strong>{academy.address}</strong>
            </div>
            <div>
              <span><i className="info-icon location" aria-hidden="true" />위치 설명</span>
              <strong>{academy.location}</strong>
            </div>
            <div>
              <span><i className="info-icon type" aria-hidden="true" />준비 가능 전형</span>
              <strong>{preparedLabels.length > 0 ? preparedLabels.slice(0, 4).map((item) => item.label).join(", ") : "확인 중"}</strong>
            </div>
            <div>
              <span><i className="info-icon strength" aria-hidden="true" />강점 입시 유형</span>
              <strong>{strongLabels.length > 0 ? strongLabels.slice(0, 4).map((item) => item.label).join(", ") : "확인 중"}</strong>
            </div>
            <div>
              <span><i className="info-icon school" aria-hidden="true" />주요 대비 대학</span>
              <strong>{insights.schoolTagCounts.length > 0 ? insights.schoolTagCounts.slice(0, 4).map((item) => item.label).join(", ") : academy.schoolTags.length > 0 ? academy.schoolTags.map((tag) => tag.schoolName).join(", ") : "리뷰와 추가 조사를 통해 업데이트 예정입니다."}</strong>
            </div>
          </div>
          <p className="type-note">{hasReviews ? "지금까지 등록된 리뷰를 바탕으로 정리한 정보입니다." : "아직 리뷰가 충분하지 않아 기본 등록 정보를 보여주고 있습니다."}</p>
          {hasChannel && (
            <dl className="detail-list compact">
              {academy.officialWebsiteUrl && (
                <>
                  <dt>공식 홈페이지</dt>
                  <dd><a className="external-link" href={academy.officialWebsiteUrl} target="_blank" rel="noreferrer">{homepageLabel}</a></dd>
                </>
              )}
              {academy.instagramUrl && (
                <>
                  <dt>인스타그램</dt>
                  <dd><a className="external-link" href={academy.instagramUrl} target="_blank" rel="noreferrer">{instagramLabel}</a></dd>
                </>
              )}
              {academy.naverBlogUrl && (
                <>
                  <dt>네이버 블로그</dt>
                  <dd><a className="external-link" href={academy.naverBlogUrl} target="_blank" rel="noreferrer">네이버 블로그</a></dd>
                </>
              )}
            </dl>
          )}
          <div className="map-link-card">
            <span>{academy.region} {academy.district}</span>
            <strong>{academy.address}</strong>
            <a href={getAcademyMapUrl(academy)} target="_blank" rel="noreferrer">네이버 지도 바로보기</a>
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
            {keywordGroups.length > 0 ? (
              <div className="keyword-group-list">
                {keywordGroups.map((group) => (
                  <div className="keyword-group" key={group.title}>
                    <span>{group.title}</span>
                    <div className="review-tags review-tags-inline">
                      {group.items.map((item) => (
                        <span className={`review-tag ${item.tone}`} key={`${group.title}-${item.label}`}>{createHashtag(item.label)} {item.count}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : <span className="muted">아직 충분한 키워드가 없습니다.</span>}
          </div>
          <div className="review-sort-row">
            <label>리뷰 정렬
              <select value={reviewSort} onChange={(event) => setReviewSort(event.target.value)}>
                <option value="helpful">도움되는순</option>
                <option value="empathy">공감순</option>
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

function getHomepageLabel(url: string | null) {
  if (!url) return "";

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "공식 홈페이지";
  }
}

function getInstagramLabel(url: string | null) {
  if (!url) return "인스타그램";

  try {
    const pathname = new URL(url).pathname.split("/").filter(Boolean)[0];
    return pathname ? `@${pathname}` : "인스타그램";
  } catch {
    return "인스타그램";
  }
}

function getKeywordGroups(reviews: Review[]) {
  return [
    { title: "피드백 스타일", labels: reviews.flatMap((review) => review.feedbackTags || []), tone: "feedback" },
    { title: "좋았던 점", labels: reviews.flatMap((review) => review.goodTags || []), tone: "positive" },
    { title: "아쉬웠던 점", labels: reviews.flatMap((review) => review.concernTags || []), tone: "negative" },
    { title: "주의할 점", labels: reviews.flatMap((review) => review.cautionTags || []), tone: "caution" },
  ].map((group) => ({
    title: group.title,
    tone: group.tone,
    items: countLabels(group.labels).slice(0, 6).map((item) => ({ ...item, tone: group.tone })),
  })).filter((group) => group.items.length > 0);
}

function countLabels(labels: string[]) {
  const counts = new Map<string, number>();

  labels.filter(Boolean).forEach((label) => {
    counts.set(label, (counts.get(label) || 0) + 1);
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"))
    .map(([label, count]) => ({ label, count }));
}
