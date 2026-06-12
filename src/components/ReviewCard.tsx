import { useState } from "react";
import type { Review } from "../data/academies";
import { addReviewReaction, getReviewReactionCount, hasReactedToReview, type ReviewReactionType } from "../utils/storage";
import { createHashtag, getReviewPreview, type KeywordTone } from "../utils/reviewStats";

export default function ReviewCard({ review, onLike }: { review: Review; onLike?: () => void }) {
  const preview = getReviewPreview(review, 90);
  const hashtags = getReviewTagItems(review).slice(0, 10);
  const [reactionState, setReactionState] = useState(() => ({
    empathy: {
      active: hasReactedToReview(review.id, "empathy"),
      count: getReviewReactionCount(review, "empathy"),
    },
    helpful: {
      active: hasReactedToReview(review.id, "helpful"),
      count: getReviewReactionCount(review, "helpful"),
    },
  }));
  const [isExpanded, setIsExpanded] = useState(false);

  function handleReaction(type: ReviewReactionType) {
    const didAdd = addReviewReaction(review.id, type);
    if (!didAdd) return;

    setReactionState((current) => ({
      ...current,
      [type]: {
        active: true,
        count: current[type].count + 1,
      },
    }));
    onLike?.();
  }

  return (
    <article className="review-card">
      <div className="review-head">
        <strong>익명 · {review.writerStatus || "작성자"}</strong>
        {review.status === "pending" && <span className="status-pill">검토 대기</span>}
        {(review.status === "rejected" || review.status === "hidden") && <span className="status-pill muted-pill">제외됨</span>}
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
      <div className="review-reaction-row" aria-label="리뷰 반응">
        <button
          className={`review-reaction-button ${reactionState.empathy.active ? "active" : ""}`}
          type="button"
          onClick={() => handleReaction("empathy")}
          disabled={reactionState.empathy.active}
        >
          공감해요 {reactionState.empathy.count}
        </button>
        <button
          className={`review-reaction-button ${reactionState.helpful.active ? "active" : ""}`}
          type="button"
          onClick={() => handleReaction("helpful")}
          disabled={reactionState.helpful.active}
        >
          도움돼요 {reactionState.helpful.count}
        </button>
      </div>
    </article>
  );
}

function getReviewTagItems(review: Review) {
  return [
    ...uniqueTags(review.feedbackTags || [], "feedback"),
    ...uniqueTags(review.goodTags || [], "positive"),
    ...uniqueTags(review.concernTags || [], "negative"),
    ...uniqueTags(review.cautionTags || [], "caution"),
  ];
}

function uniqueTags(labels: string[], tone: KeywordTone | "feedback" | "caution") {
  const items = labels.map((label) => ({ label: createHashtag(label), tone })).filter((item) => item.label);
  return Array.from(new Map(items.map((item) => [item.label, item])).values());
}
