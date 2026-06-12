import { useState } from "react";
import type { Review } from "../data/academies";
import { addReviewLike, getReviewLikeCount } from "../utils/storage";
import { createHashtag, getReviewKeywordItems, getReviewPreview } from "../utils/reviewStats";

export default function ReviewCard({ review, onLike }: { review: Review; onLike?: () => void }) {
  const strongTypes = review.strongTypes?.join(", ") || "전형 미입력";
  const preview = getReviewPreview(review, 90);
  const hashtags = getReviewTagItems(review).slice(0, 10);
  const [likes, setLikes] = useState(() => getReviewLikeCount(review));
  const [isExpanded, setIsExpanded] = useState(false);

  function handleLike() {
    setLikes(addReviewLike(review.id) + (review.likes || 0));
    onLike?.();
  }

  return (
    <article className="review-card">
      <div className="review-head">
        <strong>익명 · {review.writerStatus} · {strongTypes}</strong>
        {review.status === "pending" && <span className="status-pill">검토 대기</span>}
      </div>
      <div className="heart-readout" aria-label={`만족도 ${review.rating || 0}점`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < (review.rating || 0) ? "filled" : ""}>♥</span>
        ))}
      </div>
      <div className="review-metrics">
        {review.atmosphere && <span>분위기 · {review.atmosphere}</span>}
        {review.homeworkLoad && <span>과제량 · {review.homeworkLoad}</span>}
        {review.classLevel && <span>난이도 · {review.classLevel}</span>}
      </div>
      {preview && <p className="review-summary">“{preview}”</p>}
      <div className="review-body">
        {hashtags.length > 0 && (
          <div className="review-tags review-tags-inline">
            {hashtags.map((tag) => <span className={`review-tag ${tag.tone}`} key={`${tag.tone}-${tag.label}`}>{tag.label}</span>)}
          </div>
        )}
        {review.detail && (
          <div className="review-detail-preview">
            <b>자세한 후기</b>
            <p className={isExpanded ? "" : "clamped"}>{review.detail}</p>
            {review.detail.length > 90 && (
              <button type="button" className="text-button" onClick={() => setIsExpanded((value) => !value)}>
                {isExpanded ? "접기" : "자세히 보기"}
              </button>
            )}
          </div>
        )}
      </div>
      <button className="review-like-button" type="button" onClick={handleLike}>
        좋아요 {likes}
      </button>
    </article>
  );
}

function getReviewTagItems(review: Review) {
  const items = getReviewKeywordItems(review).map((item) => ({ label: createHashtag(item.label), tone: item.tone }));

  return Array.from(new Map(items.map((item) => [item.label, item])).values());
}
