import type { Review } from "../data/academies";
import { demoReviews } from "../data/reviews";
import { getReviewLikeCount, getStoredReviews } from "./storage";

type ReviewQueryOptions = {
  includePending?: boolean;
};

export function getAllReviews(options: ReviewQueryOptions = {}): Review[] {
  const reviews = [...getStoredReviews(), ...demoReviews];
  if (options.includePending) return reviews;
  return reviews.filter((review) => review.status === "public");
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

export function getAcademyAggregatedInsights(academyId: string) {
  const reviews = getAllReviews().filter((review) => review.academyId === academyId);

  return {
    preparedTypeCounts: countLabels(reviews.flatMap((review) => review.preparedTypes || [])),
    strongTypeCounts: countLabels(reviews.flatMap((review) => review.strongTypes || [])),
    schoolTagCounts: countLabels(reviews.flatMap((review) => review.reviewSchoolTags || [])),
    topKeywordCounts: countLabels(reviews.flatMap(getReviewKeywordLabels)),
  };
}

export function getReviewKeywordLabels(review: Review) {
  // 추후 자세한 후기의 자주 등장하는 표현을 분석해 키워드를 확장할 수 있습니다.
  // 지금은 사용자가 선택한 태그만 해시태그 후보로 사용합니다.
  return [
    ...(review.feedbackTags || []),
    ...(review.goodTags || []),
    ...(review.concernTags || []),
    ...(review.cautionTags || []),
    ...(review.teachingStyleTags || []),
  ];
}

export function createHashtag(label: string) {
  const normalized = label.replace(/[\s·/(),.!?'"“”‘’<>[\]{}:;|\\]+/g, "");
  return normalized ? `#${normalized}` : "";
}

export function getRepresentativeReview(reviews: Review[]) {
  if (reviews.length === 0) return null;
  const sortedByLikes = [...reviews].sort((a, b) => {
    const likeGap = getReviewLikeCount(b) - getReviewLikeCount(a);
    if (likeGap !== 0) return likeGap;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const topReview = sortedByLikes[0];
  const hasLikes = getReviewLikeCount(topReview) > 0;

  return {
    review: topReview,
    title: hasLikes ? "가장 도움이 된 리뷰" : "최근 등록된 리뷰",
    preview: getReviewPreview(topReview),
  };
}

export function getReviewPreview(review: Review, length = 60) {
  const text = review.detail || "";
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

function countLabels(labels: string[]) {
  const counts = new Map<string, number>();

  labels.filter(Boolean).forEach((label) => {
    counts.set(label, (counts.get(label) || 0) + 1);
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"))
    .map(([label, count]) => ({ label, count }));
}
