import { Link } from "react-router-dom";
import { type Academy } from "../data/academies";
import { findUniversityByName } from "../data/universities";
import { getAcademyDisplayName } from "../utils/academyDisplay";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats, getReviewPreview } from "../utils/reviewStats";

export default function AcademyCard({ academy }: { academy: Academy }) {
  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const insights = getAcademyAggregatedInsights(academy.id);
  const strongTypes = insights.strongTypeCounts.length > 0 ? insights.strongTypeCounts.map((item) => item.label) : academy.strongTypes;
  const previewReview = reviews[0];
  const schoolLabels = insights.schoolTagCounts.length > 0
    ? insights.schoolTagCounts.slice(0, 3).map((item) => item.label)
    : academy.schoolTags.slice(0, 3).map((item) => item.schoolName);
  const schoolShortLabels = schoolLabels.map((label) => findUniversityByName(label)?.shortName || label);
  const typeTags = uniqueTags(strongTypes.slice(0, 2));
  const reviewTags = uniqueTags(insights.topKeywordCounts.slice(0, 2).map((item) => item.label));
  const detailUrl = `/academies/${academy.id}`;
  const displayName = getAcademyDisplayName(academy);

  return (
    <Link
      className="academy-card"
      to={detailUrl}
      aria-label={`${displayName} 상세 보기`}
    >
      <div className="card-top">
        <div>
          <h3>{displayName}</h3>
          <p className="muted">{academy.region} {academy.district} · {academy.location}</p>
        </div>
      </div>
      <div className="academy-hashtags" aria-label="학원 특징">
        {typeTags.map((tag) => (
          <span className="tag tag-type" key={tag}>{tag}</span>
        ))}
        {reviewTags.map((tag) => (
          <span className="tag tag-review" key={tag}>{tag}</span>
        ))}
        {typeTags.length === 0 && reviewTags.length === 0 && <span className="tag tag-type">#기본정보업데이트예정</span>}
      </div>
      <div className="academy-review-preview">
        <p>{previewReview ? getReviewPreview(previewReview, 80) : "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨 주세요."}</p>
      </div>
      {schoolShortLabels.length > 0 && (
        <p className="academy-school-line">주요 대비 대학: {schoolShortLabels.join(" · ")}</p>
      )}
      {academy.typeConfidence === "이름 기반 1차 분류" && <p className="type-note">1차 분류</p>}
      <div className="card-footer">
        <span>리뷰 {reviewCount}개</span>
        <span>{reviewCount > 0 ? `평균 ♥ ${averageRating.toFixed(1)}` : "아직 하트 평가가 없어요."}</span>
      </div>
    </Link>
  );
}

function uniqueTags(labels: string[]) {
  return Array.from(new Set(labels.map(createHashtag).filter(Boolean))).slice(0, 4);
}
