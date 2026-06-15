import { FormEvent, useState } from "react";
import type { Review } from "../data/academies";
import { addReviewReaction, getReviewReactionCount, hasReactedToReview, saveReviewReport, type ReviewReactionType } from "../utils/storage";
import { createHashtag, getReviewDisplayDetail, getReviewPreview, type KeywordTone } from "../utils/reviewStats";

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

export default function ReviewCard({ review, onLike }: { review: Review; onLike?: () => void }) {
  const preview = getReviewPreview(review, 90);
  const displayDetail = getReviewDisplayDetail(review);
  const tagGroups = getReviewTagGroups(review);
  const metaText = getReviewMetaText(review);
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportDone, setReportDone] = useState(false);
  const [reportForm, setReportForm] = useState({ reason: reportReasons[0], description: "" });

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

  function handleReportSubmit(event: FormEvent) {
    event.preventDefault();
    saveReviewReport({ reviewId: review.id, reason: reportForm.reason, description: reportForm.description });
    setReportDone(true);
  }

  return (
    <article className="review-card">
      <div className="review-head">
        {metaText && <strong>{metaText}</strong>}
        {review.status === "pending" && <span className="status-pill">검토 대기</span>}
        {review.status === "held" && <span className="status-pill muted-pill">보류</span>}
        {(review.status === "rejected" || review.status === "hidden") && <span className="status-pill muted-pill">제외됨</span>}
      </div>
      <div className="heart-readout" aria-label={`만족도 ${review.rating || 0}점`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < (review.rating || 0) ? "filled" : ""} aria-hidden="true">♥</span>
        ))}
      </div>
      <div className="review-metrics">
        {review.atmosphere && <span>분위기 · {review.atmosphere}</span>}
        {review.homeworkLoad && <span>과제량 · {review.homeworkLoad}</span>}
        {review.classLevel && <span>난이도 · {review.classLevel}</span>}
      </div>
      {preview && <p className="review-summary">“{preview}”</p>}
      <div className="review-body">
        {tagGroups.map((group) => (
          <div className="review-tag-question" key={group.title}>
            <span>{group.title}</span>
            <div className="review-tags review-tags-inline">
              {group.items.map((tag) => <span className={`review-tag ${tag.tone}`} key={`${group.title}-${tag.label}`}>{tag.label}</span>)}
            </div>
          </div>
        ))}
        {displayDetail && (
          <div className="review-detail-preview">
            {isExpanded && (
              <>
                <b>자세한 후기</b>
                <p>{displayDetail}</p>
              </>
            )}
            <button type="button" className="text-button" onClick={() => setIsExpanded((value) => !value)}>
              {isExpanded ? "접기" : "자세히 보기"}
            </button>
            {review.admissionResult && <small className="review-meta-note">합격 여부: {review.admissionResult}</small>}
          </div>
        )}
      </div>
      <div className="review-reaction-row" aria-label="리뷰 반응">
        <button
          className={`review-reaction-button ${reactionState.helpful.active ? "active" : ""}`}
          type="button"
          onClick={() => handleReaction("helpful")}
          disabled={reactionState.helpful.active}
          aria-pressed={reactionState.helpful.active}
        >
          따봉 {reactionState.helpful.count}
        </button>
        <button
          className={`review-reaction-button ${reactionState.downvote.active ? "active" : ""}`}
          type="button"
          onClick={() => handleReaction("downvote")}
          disabled={reactionState.downvote.active}
          aria-pressed={reactionState.downvote.active}
        >
          따봉 아래로 {reactionState.downvote.count}
        </button>
        <button className="review-report-button" type="button" onClick={() => setIsReportOpen(true)}>신고</button>
      </div>
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

function getReviewMetaText(review: Review) {
  return [
    review.writerStatus,
    review.attendedYear ? `${review.attendedYear} 수강` : "",
    review.attendedPeriod,
  ].filter(Boolean).join(" · ");
}

function getReviewTagGroups(review: Review) {
  return [
    { title: "좋았던 점", items: uniqueTags(review.goodTags || [], "positive") },
    { title: "확인할 점", items: uniqueTags([...(review.concernTags || []), ...(review.cautionTags || [])], "negative") },
    { title: "기타", items: uniqueTags(review.feedbackTags || [], "neutral") },
  ].filter((group) => group.items.length > 0);
}

function uniqueTags(labels: string[], tone: KeywordTone) {
  const items = labels.map((label) => ({ label: createHashtag(label), tone })).filter((item) => item.label);
  return Array.from(new Map(items.map((item) => [item.label, item])).values());
}
