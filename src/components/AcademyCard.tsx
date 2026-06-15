import { Link } from "react-router-dom";
import { type Academy } from "../data/academies";
import { findUniversityByName } from "../data/universities";
import { getAcademyDisplayLocation, getAcademyDisplayName } from "../utils/academyDisplay";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats, getReviewDisplayDetail } from "../utils/reviewStats";

type CardTag = {
  label: string;
  tone: "school" | "feedback" | "good" | "concern" | "caution";
};

export default function AcademyCard({ academy }: { academy: Academy }) {
  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const insights = getAcademyAggregatedInsights(academy.id);
  const previewReview = reviews[0];
  const schoolLabels = insights.schoolTagCounts.length > 0
    ? insights.schoolTagCounts.slice(0, 3).map((item) => item.label)
    : academy.schoolTags.slice(0, 3).map((item) => item.schoolName);
  const schoolTags: CardTag[] = uniqueTags(schoolLabels.map(getShortSchoolLabel)).map((label) => ({ label, tone: "school" }));
  const detailUrl = `/academies/${academy.id}`;
  const displayName = getAcademyDisplayName(academy);
  const displayLocation = getAcademyDisplayLocation(academy);
  const ratingText = reviewCount > 0 ? `${averageRating.toFixed(1)}(리뷰 ${reviewCount}개)` : "리뷰 없음";
  const previewText = previewReview ? getReviewDisplayDetail(previewReview) : "";

  return (
    <Link
      className="academy-card"
      to={detailUrl}
      aria-label={`${displayName} 상세 보기`}
    >
      <div className="card-top">
        <div>
          <h3>{displayName}</h3>
          <p className="academy-location-rating">{displayLocation} · {ratingText}</p>
        </div>
      </div>
      <div className="academy-hashtags" aria-label="학원 특징">
        {schoolTags.map((tag) => (
          <span className={`tag tag--${tag.tone}`} key={tag.label}>{tag.label}</span>
        ))}
        {schoolTags.length === 0 && <span className="academy-hashtag-placeholder">주요 대비 대학 업데이트 예정</span>}
      </div>
      <div className="academy-review-preview">
        <p>{previewText || "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨 주세요."}</p>
      </div>
      {academy.typeConfidence === "이름 기반 1차 분류" && <p className="type-note">1차 분류</p>}
      <div className="card-footer">
        <span>리뷰 {reviewCount}개</span>
      </div>
    </Link>
  );
}

function uniqueTags(labels: string[]) {
  return Array.from(new Set(labels.map(createHashtag).filter(Boolean))).slice(0, 3);
}

function getShortSchoolLabel(label: string) {
  return findUniversityByName(label)?.shortName || label;
}
