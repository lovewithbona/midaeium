import type { Review } from "../data/academies";
import { demoReviews } from "../data/reviews";
import { getStoredReviews } from "./storage";

export function getAllReviews(): Review[] {
  return [...getStoredReviews(), ...demoReviews];
}

export function getAcademyReviewStats(academyId: string) {
  const reviews = getAllReviews().filter((review) => review.academyId === academyId);
  const ratingSum = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
  const averageRating = reviews.length > 0 ? ratingSum / reviews.length : 0;

  return {
    averageRating,
    reviewCount: reviews.length,
    reviews,
  };
}
