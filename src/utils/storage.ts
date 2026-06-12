import type { Review, ReviewStatus } from "../data/academies";

const REVIEWS_KEY = "midaeieum_pending_reviews";
const REVIEW_LIKES_KEY = "midaeieum_review_likes";
const REVIEW_REACTIONS_KEY = "midaeieum_review_reactions";
const REVIEW_MODERATION_KEY = "midaeieum_review_moderation_status";
const USER_KEY = "midaeieum_fake_user";
export type ReviewReactionType = "empathy" | "helpful";

export const DEMO_ADMIN_EMAIL = "admin@midaeium.kr";
export const DEMO_ADMIN_PASSWORD = "midaeium2026";

export function getStoredReviews(): Review[] {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]") as Review[];
  } catch {
    return [];
  }
}

export function saveStoredReview(review: Review) {
  const reviews = getStoredReviews();
  localStorage.setItem(REVIEWS_KEY, JSON.stringify([review, ...reviews]));
}

export function getReviewLikesMap(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_LIKES_KEY) || "{}") as Record<string, number>;
  } catch {
    return {};
  }
}

export function getReviewLikeCount(review: Review) {
  const likes = getReviewLikesMap();
  return (review.likes || 0) + (likes[review.id] || 0);
}

export function addReviewLike(reviewId: string) {
  const likes = getReviewLikesMap();
  const nextCount = (likes[reviewId] || 0) + 1;
  localStorage.setItem(REVIEW_LIKES_KEY, JSON.stringify({ ...likes, [reviewId]: nextCount }));
  return nextCount;
}

export function getReviewReactionsMap(): Record<string, Partial<Record<ReviewReactionType, boolean>>> {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_REACTIONS_KEY) || "{}") as Record<string, Partial<Record<ReviewReactionType, boolean>>>;
  } catch {
    return {};
  }
}

export function hasReactedToReview(reviewId: string, type: ReviewReactionType) {
  return Boolean(getReviewReactionsMap()[reviewId]?.[type]);
}

export function getReviewReactionCount(review: Review, type: ReviewReactionType) {
  const reacted = hasReactedToReview(review.id, type) ? 1 : 0;
  const baseCount = type === "empathy" ? review.empathy ?? review.likes ?? 0 : review.helpful ?? 0;
  const legacyLikeCount = type === "empathy" ? getReviewLikesMap()[review.id] || 0 : 0;
  return baseCount + legacyLikeCount + reacted;
}

export function addReviewReaction(reviewId: string, type: ReviewReactionType) {
  const reactions = getReviewReactionsMap();
  const current = reactions[reviewId] || {};
  if (current[type]) return false;

  localStorage.setItem(REVIEW_REACTIONS_KEY, JSON.stringify({
    ...reactions,
    [reviewId]: {
      ...current,
      [type]: true,
    },
  }));
  return true;
}

export function getModerationStatusMap(): Record<string, ReviewStatus> {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_MODERATION_KEY) || "{}") as Record<string, ReviewStatus>;
  } catch {
    return {};
  }
}

export function getModerationStatusOverride(reviewId: string) {
  return getModerationStatusMap()[reviewId];
}

export function saveModerationStatus(reviewId: string, status: ReviewStatus) {
  const statuses = getModerationStatusMap();
  localStorage.setItem(REVIEW_MODERATION_KEY, JSON.stringify({ ...statuses, [reviewId]: status }));
}

export function getFakeUser() {
  return localStorage.getItem(USER_KEY);
}

export function saveFakeUser(email: string) {
  localStorage.setItem(USER_KEY, email);
}

export function clearFakeUser() {
  localStorage.removeItem(USER_KEY);
}
