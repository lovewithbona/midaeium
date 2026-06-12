import { useNavigate } from "react-router-dom";
import { type Academy } from "../data/academies";
import { createHashtag, getAcademyAggregatedInsights, getAcademyReviewStats, getReviewPreview } from "../utils/reviewStats";

export default function AcademyCard({ academy }: { academy: Academy }) {
  const navigate = useNavigate();
  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const insights = getAcademyAggregatedInsights(academy.id);
  const preparedTypes = insights.preparedTypeCounts.length > 0 ? insights.preparedTypeCounts.map((item) => item.label) : academy.entranceTypes;
  const strongTypes = insights.strongTypeCounts.length > 0 ? insights.strongTypeCounts.map((item) => item.label) : academy.strongTypes;
  const previewReview = reviews[0];
  const hashtags = [
    ...preparedTypes.slice(0, 2),
    ...strongTypes.slice(0, 1),
    ...insights.schoolTagCounts.slice(0, 1).map((item) => item.label),
    ...insights.topKeywordCounts.slice(0, 2).map((item) => item.label),
  ].map(createHashtag).filter(Boolean).slice(0, 5);
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
        {hashtags.map((tag) => (
          <span className="tag tag-strong" key={tag}>{tag}</span>
        ))}
        {hashtags.length === 0 && <span className="tag">#전형확인중</span>}
      </div>
      <div className="academy-review-preview">
        <span>리뷰 미리보기</span>
        <p>{previewReview ? getReviewPreview(previewReview, 80) : "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨 주세요."}</p>
      </div>
      <p className="type-note">리뷰 기반 정보이며, 초기 등록 정보와 함께 참고해 주세요.</p>
      {academy.typeConfidence === "이름 기반 1차 분류" && <p className="type-note">1차 분류</p>}
      {academy.typeConfidence === "확인 필요" && <p className="type-note">전형 확인 필요</p>}
      <div className="card-footer">
        <span>리뷰 {reviewCount}개</span>
        <span>평균 ♥ {averageRating ? averageRating.toFixed(1) : "0.0"}</span>
      </div>
    </article>
  );
}
