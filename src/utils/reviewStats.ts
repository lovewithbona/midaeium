import type { Review } from "../data/academies";
import { demoReviews } from "../data/reviews";
import { getReviewLikeCount, getStoredReviews } from "./storage";

export function getAllReviews(): Review[] {
  return [...getStoredReviews(), ...demoReviews];
}

export function getAcademyReviewStats(academyId: string) {
  const reviews = getAllReviews()
    .filter((review) => review.academyId === academyId)
    .sort((a, b) => {
      const likeGap = getReviewLikeCount(b) - getReviewLikeCount(a);
      if (likeGap !== 0) return likeGap;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  const ratingSum = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
  const averageRating = reviews.length > 0 ? ratingSum / reviews.length : 0;

  return {
    averageRating,
    reviewCount: reviews.length,
    reviews,
  };
}
