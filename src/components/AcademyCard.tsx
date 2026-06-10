import { useNavigate } from "react-router-dom";
import { type Academy, type Review } from "../data/academies";
import { getAcademyReviewStats } from "../utils/reviewStats";

export default function AcademyCard({ academy }: { academy: Academy }) {
  const navigate = useNavigate();
  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);
  const entranceTypes = academy.entranceTypes.length > 0 ? academy.entranceTypes : ["준비 가능 전형 확인 중"];
  const strongTypes = academy.strongTypes.length > 0 ? academy.strongTypes : ["강점 전형 확인 중"];
  const previewReview = reviews[0];
  const hashtags = buildAcademyHashtags(academy, reviews);
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
        {buildTypeHashtags(entranceTypes, strongTypes).map((tag) => (
          <span className="tag" key={tag}>#{tag}</span>
        ))}
        {hashtags.map((tag) => (
          <span className="tag tag-strong" key={tag}>#{tag}</span>
        ))}
      </div>
      <div className="academy-review-preview">
        <span>리뷰 미리보기</span>
        <p>{previewReview?.summary || "아직 등록된 리뷰가 없습니다. 첫 리뷰를 남겨 주세요."}</p>
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

function buildTypeHashtags(entranceTypes: string[], strongTypes: string[]) {
  const uniqueTags = new Set<string>();
  [...entranceTypes.slice(0, 2), ...strongTypes.slice(0, 1)].forEach((type) => {
    uniqueTags.add(formatTypeHashtag(type));
  });
  return [...uniqueTags].slice(0, 3);
}

function buildAcademyHashtags(academy: Academy, reviews: Review[]) {
  const counts = new Map<string, number>();
  const add = (value: string) => {
    const tag = normalizeReviewTag(value);
    if (!tag) return;
    counts.set(tag, (counts.get(tag) || 0) + 1);
  };

  reviews.forEach((review) => {
    review.feedbackTags?.forEach(add);
    review.goodTags?.forEach(add);
    review.concernTags?.forEach(add);
    review.cautionTags?.forEach(add);
  });

  if (academy.strongTypes.includes("기초디자인")) counts.set("기디강점", (counts.get("기디강점") || 0) + 1);

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([tag]) => tag);
}

function formatTypeHashtag(type: string) {
  if (type.includes("확인")) return type.replace(/\s/g, "");
  if (type === "기초디자인") return "기초디자인";
  if (type === "발상과 표현") return "발상과표현";
  if (type === "만화·애니") return "만화애니";
  return type.replace(/[\s·/]/g, "");
}

function normalizeReviewTag(tag: string) {
  const manual: Record<string, string> = {
    "꼼꼼하게 설명함": "꼼꼼한설명",
    "꼼꼼하게 설명해줘요": "꼼꼼한설명",
    "피드백이 꼼꼼함": "꼼꼼한설명",
    "초보자가 따라가기 어려움": "초보자비추",
    "상급자에게 적합해요 (초보자 비추)": "초보자비추",
    "너무 경쟁적인 분위기": "경쟁적임",
    "분위기가 너무 경쟁적임": "경쟁적임",
    "과장된 입결 광고": "과장된입결",
    "입시 정보가 많음": "입시정보많음",
    "질문하기 편함": "질문편함",
    "스스로 생각하게 유도함": "스스로생각",
    "스스로 생각하게 유도해요": "스스로생각",
  };

  return manual[tag] || tag.replace(/[()\s·/,]+/g, "").slice(0, 8);
}
