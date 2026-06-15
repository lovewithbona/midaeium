import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import AcademyMapSection from "../components/AcademyMapSection";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies } from "../data/academies";
import type { Review } from "../data/academies";
import { getAcademyDisplayName } from "../utils/academyDisplay";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats } from "../utils/reviewStats";
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
  const hasReviews = reviewCount > 0;
  const displayName = getAcademyDisplayName(academy);
  const preparedLabels = insights.preparedTypeCounts.length > 0 ? insights.preparedTypeCounts : academy.entranceTypes.map((label) => ({ label, count: 0 }));
  const strongLabels = insights.strongTypeCounts.length > 0 ? insights.strongTypeCounts : academy.strongTypes.map((label) => ({ label, count: 0 }));
  const schoolLabels = insights.schoolTagCounts.length > 0
    ? insights.schoolTagCounts.map((item) => item.label)
    : academy.schoolTags.map((tag) => tag.schoolName);
  const schoolInfoNote = getSchoolInfoNote(insights.schoolTagCounts.length > 0, academy.schoolTags.length > 0);
  const keywordGroups = getKeywordGroups(reviews);
  const reviewAverages = getReviewAverages(reviews);
  const sortedReviews = [...reviews].sort((a, b) => {
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
        </div>
        <Link className="primary-button detail-review-cta" to={`/review/new?academyId=${academy.id}`}>이 학원 리뷰 등록하기</Link>
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
              <span><InfoIcon name="address" />지역 및 주소</span>
              <strong>{academy.region} {academy.district} · {academy.address}</strong>
            </div>
            <div>
              <span><InfoIcon name="check" />준비 가능 전형</span>
              <strong>{preparedLabels.length > 0 ? preparedLabels.slice(0, 4).map((item) => item.label).join(", ") : "기본 등록 정보 업데이트 예정"}</strong>
            </div>
            <div>
              <span><InfoIcon name="fire" />강점 입시 유형</span>
              <strong>{strongLabels.length > 0 ? strongLabels.slice(0, 4).map((item) => item.label).join(", ") : "기본 등록 정보 업데이트 예정"}</strong>
            </div>
            <div>
              <span><InfoIcon name="school" />주요 대비 대학</span>
              <strong>{schoolLabels.length > 0 ? schoolLabels.slice(0, 4).join(", ") : "리뷰와 추가 조사를 통해 업데이트 예정입니다."}</strong>
            </div>
          </div>
          <p className="type-note">{schoolInfoNote}</p>
          <p className="type-note">주요 대비 대학은 공개 자료와 지금까지 등록된 리뷰를 바탕으로 정리한 참고 정보입니다. 학원의 공식 합격률이나 성과를 의미하지 않습니다.</p>
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
          <AcademyMapSection academy={academy} />
          <div className="report-link-box">
            <p>정보가 다르다면 제보해 주세요.</p>
            <Link className="secondary-button" to={`/report-info?academyId=${academy.id}`}>정보 수정 제보</Link>
          </div>
        </div>
        )}
        {activeTab === "reviews" && (
        <div className="detail-card review-panel">
          <div className="review-summary-panel">
            <p className="eyebrow">리뷰 요약</p>
            <h2>등록된 리뷰 {reviewCount}개</h2>
            <div className="review-average-grid" aria-label="리뷰 평균 요약">
              <ReviewAverageCard title="분위기" summary={reviewAverages.atmosphere} />
              <ReviewAverageCard title="과제량" summary={reviewAverages.homeworkLoad} />
              <ReviewAverageCard title="난이도" summary={reviewAverages.classLevel} />
            </div>
            <p className="type-note">리뷰는 학생 개인의 경험을 바탕으로 작성되며, 모든 학원에 동일하게 적용되는 평가가 아닐 수 있습니다.</p>
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
                <option value="helpful">도움순</option>
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

function InfoIcon({ name }: { name: "address" | "check" | "fire" | "school" }) {
  const paths = {
    address: (
      <>
        <path d="M12 21s7-4.7 7-11a7 7 0 0 0-14 0c0 6.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    check: <path d="m5 12 4 4 10-10" />,
    fire: (
      <>
        <path d="M12 22c4 0 7-2.7 7-6.8 0-2.7-1.5-5.1-4.2-7.2.1 2-1 3.1-2.1 3.8.4-3-1-5.5-3.8-7.8.2 3.8-3.9 6.3-3.9 11.1C5 19.2 8 22 12 22Z" />
        <path d="M12 18c1.5 0 2.5-1 2.5-2.4 0-1.1-.6-2-1.7-2.9 0 1-.6 1.6-1.4 2.1-.1-1.3-.7-2.3-1.8-3.2.1 2-1.6 3-1.6 4.7C8 17.4 9.7 18 12 18Z" />
      </>
    ),
    school: (
      <>
        <path d="M3 10.5 12 5l9 5.5" />
        <path d="M5 10v9h14v-9" />
        <path d="M9 19v-5h6v5" />
        <path d="M8 12h1M15 12h1" />
      </>
    ),
  };

  return (
    <svg className="info-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function getSchoolInfoNote(hasReviewSchoolTags: boolean, hasInitialSchoolTags: boolean) {
  if (hasReviewSchoolTags) return "지금까지 등록된 리뷰를 바탕으로 정리한 정보입니다.";
  if (hasInitialSchoolTags) return "공개 자료를 바탕으로 정리한 1차 정보입니다. 리뷰가 쌓이면 자동으로 업데이트됩니다.";
  return "기본 등록 정보를 보여 주고 있습니다. 리뷰가 쌓이면 데이터가 업데이트됩니다.";
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

type ReviewAverageSummary = {
  label: string;
  averageText: string;
  count: number;
};

const atmosphereScale = ["매우 진지해요", "진지한 편이에요", "보통이에요", "자유로운 편이에요", "매우 자유로워요"];
const homeworkLoadScale = ["없어요", "적은 편이에요", "적당해요", "많은 편이에요", "매우 많아요"];
const classLevelScale = ["입문자도 가능해요", "기본기가 있으면 좋아요", "어느 정도 실력이 필요해요", "상급자에게 적합해요 (초보자 비추)"];

function ReviewAverageCard({ title, summary }: { title: string; summary: ReviewAverageSummary }) {
  return (
    <div className="review-average-card">
      <span>{title}</span>
      <strong>{summary.label}</strong>
      <small>{summary.count > 0 ? `${summary.averageText} · 리뷰 ${summary.count}개 기준` : "공개 리뷰가 쌓이면 표시됩니다."}</small>
    </div>
  );
}

function getReviewAverages(reviews: Review[]) {
  return {
    atmosphere: summarizeReviewScale(reviews.map((review) => review.atmosphere), atmosphereScale),
    homeworkLoad: summarizeReviewScale(reviews.map((review) => review.homeworkLoad), homeworkLoadScale),
    classLevel: summarizeReviewScale(reviews.map((review) => review.classLevel), classLevelScale),
  };
}

function summarizeReviewScale(values: Array<string | undefined>, labels: string[]): ReviewAverageSummary {
  const scores = values
    .map((value) => getScaleScore(value, labels))
    .filter((score): score is number => score !== null);

  if (scores.length === 0) {
    return {
      label: "아직 데이터 없음",
      averageText: "",
      count: 0,
    };
  }

  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const labelIndex = Math.min(labels.length - 1, Math.max(0, Math.round(average) - 1));

  return {
    label: labels[labelIndex],
    averageText: `평균 ${average.toFixed(1)} / ${labels.length}`,
    count: scores.length,
  };
}

function getScaleScore(value: string | undefined, labels: string[]) {
  if (!value) return null;

  const numericValue = Number(value);
  if (Number.isFinite(numericValue) && numericValue >= 1 && numericValue <= labels.length) return numericValue;

  const index = labels.findIndex((label) => label === value || label.replace(/\s+/g, "") === value.replace(/\s+/g, ""));
  return index >= 0 ? index + 1 : null;
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
