import { FormEvent, useState } from "react";
import type { Review } from "../data/academies";
import { getReviewDisplayDetail } from "../utils/reviewStats";
import { addReviewReaction, getReviewReactionCount, hasReactedToReview, saveReviewReport, type ReviewReactionType } from "../utils/storage";

const reportReasons = [
  "허위 리뷰로 의심돼요",
  "학원 관계자가 작성한 것 같아요",
  "특정인을 비방하는 내용이 있어요",
  "개인정보가 포함되어 있어요",
  "욕설 또는 모욕적인 표현이 있어요",
  "광고성 내용이에요",
  "학원과 관련 없는 내용이에요",
  "기타",
];

export default function SimpleReviewCard({ review, onReact }: { review: Review; onReact?: () => void }) {
  const [reactionState, setReactionState] = useState(() => ({
    helpful: {
      active: hasReactedToReview(review.id, "helpful"),
      count: getReviewReactionCount(review, "helpful"),
    },
    downvote: {
      active: hasReactedToReview(review.id, "downvote"),
      count: getReviewReactionCount(review, "downvote"),
    },
  }));
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportDone, setReportDone] = useState(false);
  const [reportForm, setReportForm] = useState({ reason: reportReasons[0], description: "" });
  const detail = getReviewDisplayDetail(review);
  const metaText = getReviewMetaText(review);

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
    onReact?.();
  }

  function handleReportSubmit(event: FormEvent) {
    event.preventDefault();
    saveReviewReport({ reviewId: review.id, reason: reportForm.reason, description: reportForm.description });
    setReportDone(true);
  }

  return (
    <article className="simple-review-card">
      <div className="simple-review-top">
        <div>
          {metaText && <strong>{metaText}</strong>}
          <div className="heart-readout" aria-label={`만족도 ${review.rating || 0}점`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={index < (review.rating || 0) ? "filled" : ""} aria-hidden="true">♥</span>
            ))}
          </div>
        </div>
        <div className="simple-reaction-buttons" aria-label="리뷰 반응">
          <button
            type="button"
            className={reactionState.helpful.active ? "active" : ""}
            onClick={() => handleReaction("helpful")}
            disabled={reactionState.helpful.active}
            aria-label={`이 리뷰가 도움이 돼요 ${reactionState.helpful.count}`}
            aria-pressed={reactionState.helpful.active}
          >
            <span aria-hidden="true">👍</span>
          </button>
          <button
            type="button"
            className={reactionState.downvote.active ? "active" : ""}
            onClick={() => handleReaction("downvote")}
            disabled={reactionState.downvote.active}
            aria-label={`이 리뷰가 도움이 되지 않아요 ${reactionState.downvote.count}`}
            aria-pressed={reactionState.downvote.active}
          >
            <span aria-hidden="true">👎</span>
          </button>
        </div>
      </div>
      {detail && <p className="review-full-text">{detail}</p>}
      <button className="review-report-button simple-report-button" type="button" onClick={() => setIsReportOpen(true)}>신고</button>
      {isReportOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="리뷰 신고">
          <div className="report-modal">
            {reportDone ? (
              <>
                <h2>신고가 접수되었습니다.</h2>
                <p>운영자가 내용을 확인한 뒤 필요한 경우 리뷰를 수정, 비공개 또는 제외 처리할 수 있습니다.</p>
                <button type="button" className="primary-button" onClick={() => setIsReportOpen(false)}>확인</button>
              </>
            ) : (
              <form onSubmit={handleReportSubmit}>
                <h2>리뷰 신고</h2>
                <label>신고 사유<select value={reportForm.reason} onChange={(event) => setReportForm((current) => ({ ...current, reason: event.target.value }))}>{reportReasons.map((reason) => <option key={reason}>{reason}</option>)}</select></label>
                <label>추가 설명<textarea value={reportForm.description} onChange={(event) => setReportForm((current) => ({ ...current, description: event.target.value }))} /></label>
                <div className="button-row">
                  <button type="submit" className="primary-button">제출하기</button>
                  <button type="button" className="secondary-button" onClick={() => setIsReportOpen(false)}>취소</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export function getReviewMetaText(review: Review) {
  const parts = [];

  if (review.writerStatus) parts.push(review.writerStatus);

  if (review.attendedYear && review.attendedPeriod) {
    parts.push(`${review.attendedYear}(${review.attendedPeriod}) 수강`);
  } else if (review.attendedYear) {
    parts.push(`${review.attendedYear} 수강`);
  } else if (review.attendedPeriod) {
    parts.push(`${review.attendedPeriod} 수강`);
  }

  if (review.admissionResult) parts.push(review.admissionResult);

  return parts.join(", ");
}
