import type { Academy, Review, ReviewStatus } from "../data/academies";

const REVIEWS_KEY = "midaeieum_pending_reviews";
const REVIEW_LIKES_KEY = "midaeieum_review_likes";
const REVIEW_REACTIONS_KEY = "midaeieum_review_reactions";
const REVIEW_MODERATION_KEY = "midaeieum_review_moderation_status";
const REVIEW_ACADEMY_MATCH_KEY = "midaeieum_review_academy_match_overrides";
const REVIEW_DETAIL_PUBLIC_KEY = "midaeieum_review_detail_public_overrides";
const REVIEW_SCHOOL_TAGS_KEY = "midaeieum_review_school_tag_overrides";
const ADMIN_ACADEMY_DRAFTS_KEY = "midaeieum_admin_academy_drafts";
const REVIEW_RESET_VERSION_KEY = "midaeieum_review_reset_version";
const REVIEW_RESET_VERSION = "2026-06-13-clear-all-reviews";
const USER_KEY = "midaeieum_fake_user";
export type ReviewReactionType = "empathy" | "helpful";

export const DEMO_ADMIN_EMAIL = "admin@midaeium.kr";
export const DEMO_ADMIN_PASSWORD = "midaeium2026";

export function resetReviewStorageIfNeeded() {
  if (typeof localStorage === "undefined") return;
  if (localStorage.getItem(REVIEW_RESET_VERSION_KEY) === REVIEW_RESET_VERSION) return;

  localStorage.removeItem(REVIEWS_KEY);
  localStorage.removeItem(REVIEW_LIKES_KEY);
  localStorage.removeItem(REVIEW_REACTIONS_KEY);
  localStorage.removeItem(REVIEW_MODERATION_KEY);
  localStorage.removeItem(REVIEW_ACADEMY_MATCH_KEY);
  localStorage.removeItem(REVIEW_DETAIL_PUBLIC_KEY);
  localStorage.removeItem(REVIEW_SCHOOL_TAGS_KEY);
  localStorage.setItem(REVIEW_RESET_VERSION_KEY, REVIEW_RESET_VERSION);
}

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

export function getReviewAcademyMatchMap(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_ACADEMY_MATCH_KEY) || "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

export function getReviewAcademyMatchOverride(reviewId: string) {
  return getReviewAcademyMatchMap()[reviewId];
}

export function saveReviewAcademyMatch(reviewId: string, academyId: string) {
  const matches = getReviewAcademyMatchMap();
  const next = { ...matches };
  if (academyId) next[reviewId] = academyId;
  else delete next[reviewId];
  localStorage.setItem(REVIEW_ACADEMY_MATCH_KEY, JSON.stringify(next));
}

export function getReviewDetailPublicMap(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_DETAIL_PUBLIC_KEY) || "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

export function getReviewDetailPublicOverride(reviewId: string) {
  return getReviewDetailPublicMap()[reviewId];
}

export function saveReviewDetailPublic(reviewId: string, detailPublic: string) {
  const details = getReviewDetailPublicMap();
  const next = { ...details };
  const trimmed = detailPublic.trim();
  if (trimmed) next[reviewId] = detailPublic;
  else delete next[reviewId];
  localStorage.setItem(REVIEW_DETAIL_PUBLIC_KEY, JSON.stringify(next));
}

export function getReviewSchoolTagsMap(): Record<string, string[]> {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_SCHOOL_TAGS_KEY) || "{}") as Record<string, string[]>;
  } catch {
    return {};
  }
}

export function getReviewSchoolTagsOverride(reviewId: string) {
  return getReviewSchoolTagsMap()[reviewId];
}

export function saveReviewSchoolTags(reviewId: string, schoolTags: string[]) {
  const schoolTagMap = getReviewSchoolTagsMap();
  const next = { ...schoolTagMap };
  if (schoolTags.length > 0) next[reviewId] = schoolTags;
  else delete next[reviewId];
  localStorage.setItem(REVIEW_SCHOOL_TAGS_KEY, JSON.stringify(next));
}

export function getAdminAcademyDrafts(): Academy[] {
  try {
    return JSON.parse(localStorage.getItem(ADMIN_ACADEMY_DRAFTS_KEY) || "[]") as Academy[];
  } catch {
    return [];
  }
}

export function saveAdminAcademyDraft(academy: Academy) {
  const drafts = getAdminAcademyDrafts();
  const next = [academy, ...drafts.filter((item) => item.id !== academy.id)];
  localStorage.setItem(ADMIN_ACADEMY_DRAFTS_KEY, JSON.stringify(next));
  return academy;
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
