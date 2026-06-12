import type { Review } from "../data/academies";

const REVIEWS_KEY = "midaeieum_pending_reviews";
const REVIEW_LIKES_KEY = "midaeieum_review_likes";
const USER_KEY = "midaeieum_fake_user";

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

export function getFakeUser() {
  return localStorage.getItem(USER_KEY);
}

export function saveFakeUser(email: string) {
  localStorage.setItem(USER_KEY, email);
}

export function clearFakeUser() {
  localStorage.removeItem(USER_KEY);
}
