import type { Review } from "../data/academies";
import { demoReviews } from "../data/reviews";
import { getImportedReviewsAsReviews } from "./importedReviewAdapter";
import { getModerationStatusOverride, getReviewReactionCount, getStoredReviews } from "./storage";

type ReviewQueryOptions = {
  includePending?: boolean;
};

export type KeywordTone = "positive" | "negative" | "neutral";
type KeywordSource = "feedbackTags" | "goodTags" | "concernTags" | "cautionTags" | "teachingStyleTags";
const excludedKeywordLabels = new Set(["특별히 없음", "해당 없음", "잘 모르겠음", "선택 안 함"]);

export function getAllReviews(options: ReviewQueryOptions = {}): Review[] {
  const reviews = [...getStoredReviews(), ...getImportedReviewsAsReviews(), ...demoReviews].map((review) => ({
    ...review,
    status: getModerationStatusOverride(review.id) || review.status,
  }));
  if (options.includePending) return reviews;
  return reviews.filter((review) => review.status === "public");
}

export function getAcademyReviewStats(academyId: string) {
  const reviews = getAllReviews()
    .filter((review) => review.academyId === academyId)
    .sort((a, b) => {
      const helpfulGap = getReviewReactionCount(b, "helpful") - getReviewReactionCount(a, "helpful");
      if (helpfulGap !== 0) return helpfulGap;
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
    topKeywordCounts: countKeywordItems(reviews.flatMap(getReviewKeywordItems)),
  };
}

export function getReviewKeywordLabels(review: Review) {
  // 추후 자세한 후기의 자주 등장하는 표현을 분석해 키워드를 확장할 수 있습니다.
  // 지금은 사용자가 선택한 태그만 해시태그 후보로 사용합니다.
  return getReviewKeywordItems(review).map((item) => item.label);
}

export function getReviewKeywordItems(review: Review) {
  return [
    ...(review.feedbackTags || []).map((label) => createKeywordItem(label, "feedbackTags")),
    ...(review.goodTags || []).map((label) => createKeywordItem(label, "goodTags")),
    ...(review.concernTags || []).map((label) => createKeywordItem(label, "concernTags")),
    ...(review.cautionTags || []).map((label) => createKeywordItem(label, "cautionTags")),
    ...(review.teachingStyleTags || []).map((label) => createKeywordItem(label, "teachingStyleTags")),
  ].filter((item) => item.label && !excludedKeywordLabels.has(item.label));
}

export function getKeywordTone(label: string, source?: string): KeywordTone {
  if (source === "goodTags") return "positive";
  if (source === "concernTags" || source === "cautionTags") return "negative";

  const negativeHints = ["부담", "어려움", "부족", "차이", "과장", "비용", "맞지", "빠름", "압박", "소리", "비하", "창피", "위협", "폭언", "모욕"];
  const positiveHints = ["꼼꼼", "자세", "편함", "잘 잡아줌", "좋음", "체계적", "만족", "관리가 잘됨", "정보가 많음"];

  if (negativeHints.some((hint) => label.includes(hint))) return "negative";
  if (positiveHints.some((hint) => label.includes(hint))) return "positive";
  return "neutral";
}

export function createHashtag(label: string) {
  const normalized = label.replace(/[\s·/(),.!?'"“”‘’<>[\]{}:;|\\]+/g, "");
  return normalized ? `#${normalized}` : "";
}

export function getRepresentativeReview(reviews: Review[]) {
  if (reviews.length === 0) return null;
  const sortedByLikes = [...reviews].sort((a, b) => {
    const helpfulGap = getReviewReactionCount(b, "helpful") - getReviewReactionCount(a, "helpful");
    if (helpfulGap !== 0) return helpfulGap;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  const topReview = sortedByLikes[0];
  const hasHelpful = getReviewReactionCount(topReview, "helpful") > 0;

  return {
    review: topReview,
    title: hasHelpful ? "가장 도움이 된 리뷰" : "최근 등록된 리뷰",
    preview: getReviewPreview(topReview),
  };
}

export function getReviewPreview(review: Review, length = 60) {
  const displayDetail = getReviewDisplayDetail(review);
  const text = review.summary || displayDetail || "";
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

export function getReviewDisplayDetail(review: Review) {
  return review.detailPublic || review.detailOriginal || review.detail || "";
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

function createKeywordItem(label: string, source: KeywordSource) {
  return { label, source, tone: getKeywordTone(label, source) };
}

function countKeywordItems(items: { label: string; tone: KeywordTone }[]) {
  const counts = new Map<string, { label: string; count: number; tone: KeywordTone }>();

  items.forEach((item) => {
    const current = counts.get(item.label);
    if (current) current.count += 1;
    else counts.set(item.label, { label: item.label, count: 1, tone: item.tone });
  });

  return [...counts.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ko"));
}
