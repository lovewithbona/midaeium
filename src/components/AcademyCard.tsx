import { useNavigate } from "react-router-dom";
import { type Academy } from "../data/academies";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats, getReviewPreview } from "../utils/reviewStats";

export default function AcademyCard({ academy }: { academy: Academy }) {
  const navigate = useNavigate();
  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const insights = getAcademyAggregatedInsights(academy.id);
  const strongTypes = insights.strongTypeCounts.length > 0 ? insights.strongTypeCounts.map((item) => item.label) : academy.strongTypes;
  const previewReview = reviews[0];
  const typeTags = uniqueTags([...strongTypes.slice(0, 2), ...insights.schoolTagCounts.slice(0, 2).map((item) => item.label)]);
  const reviewTags = uniqueTags(insights.topKeywordCounts.slice(0, 2).map((item) => item.label));
  const detailUrl = `/academies/${academy.id}`;

  function openDetail() {
    navigate(detailUrl);
  }

  return (
    <article
      className="academy-card"
      onClick={openDetail}
      onKeyDown={(event) => {
        if (event.key === "Enter") openDetail();
      }}
      role="link"
      tabIndex={0}
      aria-label={`${academy.name} 상세 보기`}
    >
      <div className="card-top">
        <div>
          <h3>{academy.name}</h3>
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
        {typeTags.length === 0 && reviewTags.length === 0 && <span className="tag tag-type">#전형확인중</span>}
      </div>
      <div className="academy-review-preview">
        <p>{previewReview ? getReviewPreview(previewReview, 80) : "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨 주세요."}</p>
      </div>
      {academy.typeConfidence === "이름 기반 1차 분류" && <p className="type-note">1차 분류</p>}
      {academy.typeConfidence === "확인 필요" && <p className="type-note">전형 확인 필요</p>}
      <div className="card-footer">
        <span>리뷰 {reviewCount}개</span>
        <span>평균 ♥ {averageRating ? averageRating.toFixed(1) : "0.0"}</span>
      </div>
    </article>
  );
}

function uniqueTags(labels: string[]) {
  return Array.from(new Set(labels.map(createHashtag).filter(Boolean))).slice(0, 4);
}
