import { Link } from "react-router-dom";
import { type Academy } from "../data/academies";
import { getAcademyDisplayLocation, getAcademyDisplayName } from "../utils/academyDisplay";
import { getAcademyCardTags, getAcademyReviewStats, getReviewDisplayDetail, type CardTag } from "../utils/reviewStats";

export default function AcademyCard({ academy }: { academy: Academy }) {
  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const previewReview = reviews[0];
  const cardTags = getAcademyCardTags(academy.id, academy.schoolTags.map((item) => item.schoolName));
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
      <div className="academy-card__tags" aria-label="학원 특징">
        {cardTags.map((tag) => (
          <span
            className={`academy-card-tag academy-card-tag--${tag.tone}`}
            key={`${tag.tone}-${tag.label}`}
            aria-label={getTagAriaLabel(tag)}
            title={getTagAriaLabel(tag)}
          >
            {tag.displayLabel}
          </span>
        ))}
      </div>
      <div className="academy-card__review-preview">
        <p className="academy-card__review-preview-text">{previewText || "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨 주세요."}</p>
      </div>
      {academy.typeConfidence === "이름 기반 1차 분류" && <p className="type-note">1차 분류</p>}
      <div className="card-footer">
        <span>리뷰 {reviewCount}개</span>
      </div>
    </Link>
  );
}

function getTagAriaLabel(tag: CardTag) {
  const label = tag.displayLabel.replace(/^#/u, "");
  const toneLabels: Record<CardTag["tone"], string> = {
    school: "주요 대비 대학",
    feedback: "피드백 스타일",
    good: "좋았던 점",
    concern: "확인할 점",
    caution: "주의할 점",
    neutral: "기타",
  };

  return `${toneLabels[tag.tone]} ${label}`;
}
