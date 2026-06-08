import type { Review } from "../data/academies";

const REVIEWS_KEY = "midaeieum_pending_reviews";
const USER_KEY = "midaeieum_fake_user";

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

export function getFakeUser() {
  return localStorage.getItem(USER_KEY);
}

export function saveFakeUser(email: string) {
  localStorage.setItem(USER_KEY, email);
}
