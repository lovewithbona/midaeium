import { useState } from "react";
import type { Review } from "../data/academies";
import { addReviewLike, getReviewLikeCount } from "../utils/storage";

export default function ReviewCard({ review, onLike }: { review: Review; onLike?: () => void }) {
  const strongTypes = review.strongTypes?.join(", ") || "전형 미입력";
  const goodTags = review.goodTags?.length ? review.goodTags : review.pros ? [review.pros] : [];
  const concernTags = review.concernTags?.length ? review.concernTags : review.cons ? [review.cons] : [];
  const cautionTags = review.cautionTags || [];
  const feedbackTags = review.feedbackTags || [];
  const summary = review.summary || review.pros;
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
      {summary && <p className="review-summary">“{summary}”</p>}
      <div className="review-body">
        {feedbackTags.length > 0 && <TagGroup title="피드백 스타일" icon="*" tags={feedbackTags} tone="feedback" />}
        {goodTags.length > 0 && <TagGroup title="좋았던 점" icon="+" tags={goodTags} tone="positive" />}
        {concernTags.length > 0 && <TagGroup title="아쉬웠던 점" icon="!" tags={concernTags} tone="concern" />}
        {cautionTags.length > 0 && <TagGroup title="주의할 점" icon="?" tags={cautionTags} tone="caution" />}
        {review.detail && <p><b>자세한 후기</b>{review.detail}</p>}
      </div>
      <button className="review-like-button" type="button" onClick={handleLike}>
        좋아요 {likes}
      </button>
    </article>
  );
}

function TagGroup({ title, icon, tags, tone = "" }: { title: string; icon: string; tags: string[]; tone?: string }) {
  return (
    <div className="review-tag-group">
      <b>{icon} {title}</b>
      <div className="review-tags">
        {tags.map((tag) => <span className={`review-tag ${tone}`} key={tag}>{tag}</span>)}
      </div>
    </div>
  );
}
