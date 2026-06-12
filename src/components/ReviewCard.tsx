import { useState } from "react";
import type { Review } from "../data/academies";
import { addReviewLike, getReviewLikeCount } from "../utils/storage";
import { createHashtag, getReviewPreview } from "../utils/reviewStats";

export default function ReviewCard({ review, onLike }: { review: Review; onLike?: () => void }) {
  const strongTypes = review.strongTypes?.join(", ") || "전형 미입력";
  const preview = getReviewPreview(review, 90);
  const hashtags = getReviewTagItems(review).slice(0, 10);
  const [likes, setLikes] = useState(() => getReviewLikeCount(review));

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
        {review.detail && <p><b>자세한 후기</b>{review.detail}</p>}
      </div>
      <button className="review-like-button" type="button" onClick={handleLike}>
        좋아요 {likes}
      </button>
    </article>
  );
}

function getReviewTagItems(review: Review) {
  const items = [
    ...(review.feedbackTags || []).map((label) => ({ label: createHashtag(label), tone: "feedback" })),
    ...(review.goodTags || []).map((label) => ({ label: createHashtag(label), tone: "positive" })),
    ...(review.concernTags || []).map((label) => ({ label: createHashtag(label), tone: "concern" })),
    ...(review.cautionTags || []).map((label) => ({ label: createHashtag(label), tone: "caution" })),
    ...(review.teachingStyleTags || []).map((label) => ({ label: createHashtag(label), tone: "feedback" })),
  ].filter((item) => item.label);

  return Array.from(new Map(items.map((item) => [item.label, item])).values());
}
