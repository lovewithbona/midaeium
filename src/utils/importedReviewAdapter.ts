import { academies, type Academy, type Review, type ReviewStatus } from "../data/academies";
import { reviewedImportedReviews, reviewedReviewOverrides } from "../data/adminReviewedData";
import { importedReviewsFromGoogleForm, type ImportedFormReview } from "../data/importedReviews";
import { normalizeUniversityName } from "../data/universities";
import { getAdminAcademyDrafts, getModerationStatusOverride, getReviewAcademyMatchOverride, getReviewDetailPublicOverride, getReviewSchoolTagsOverride } from "./storage";

type MatchResult = {
  academyId: string;
  confidence: "alias" | "exact" | "fuzzy" | "unmatched";
};

const academyAliases: Record<string, string> = {
  선릉네오캣: "neocat-art-hongdae",
  선릉네오켓: "neocat-art-hongdae",
  홍대네오캣: "neocat-art-hongdae",
  한티그린섬: "hongdae-greenseom-art",
  선릉메타코드학원: "gangnam-metacode-ssam-art",
  선릉오원한국화: "gangnam-owon-korean-art",
  선릉클라우드: "gangnam-cloud-art",
  선릉클라우드학원: "gangnam-cloud-art",
  선릉안테나: "gangnam-antenna-art",
  선릉천년의미소기디: "gangnam-thousand-smile-art",
  부산동래비투비미술학원파사드반기초소양반: "busan-myeongryun-b2b",
  씨앤씨미술학원분당야탑캠퍼스: "gyeonggi-seongnam-yatap-cnc",
  홍대유니온: "hongdae-union-art",
  광주에이맥스: "gwangju-suwandong-amax",
  부산더끌림선릉더끌림미술학원: "gangnam-thekkeullim",
  대구아트포엠: "seolleung-gangnam-artpoem",
  대구수성클라우드학원: "daegu-suseong-cloud",
  대구창조의아침: "daegu-suseong-changa",
};

export function getImportedReviewsAsReviews(): Review[] {
  return importedReviewsFromGoogleForm.map(convertImportedReview);
}

export function getImportedReviewMatch(review: ImportedFormReview) {
  return matchAcademy(review);
}

function convertImportedReview(review: ImportedFormReview): Review {
  const match = matchAcademy(review);
  const reviewedImportedReview = reviewedImportedReviews.find((item) => item.id === review.id);
  const reviewedOverride = reviewedReviewOverrides.find((item) => item.reviewId === review.id);
  const localStatus = getModerationStatusOverride(review.id);
  const localDetailPublic = getReviewDetailPublicOverride(review.id);
  const localSchoolTagOverride = getReviewSchoolTagsOverride(review.id);
  const academyId = getReviewAcademyMatchOverride(review.id) || reviewedOverride?.academyId || reviewedImportedReview?.academyId || match.academyId;
  const matchedAcademy = getAllAcademyCandidates().find((academy) => academy.id === academyId);
  const reviewSchoolTags = localSchoolTagOverride || reviewedOverride?.reviewSchoolTags || reviewedImportedReview?.reviewSchoolTags || normalizeReviewSchoolTags(review.reviewSchoolTags);

  return {
    ...reviewedImportedReview,
    id: review.id,
    academyId,
    academyName: reviewedOverride?.academyName || matchedAcademy?.name || reviewedImportedReview?.academyName || review.academyName,
    academyNameRaw: review.academyNameRaw,
    writerStatus: review.writerStatus,
    attendedYear: review.attendedYear,
    attendedPeriod: review.attendedPeriod,
    admissionResult: review.admissionResult,
    preparedTypes: review.preparedTypes,
    strongTypes: review.strongTypes,
    reviewSchoolTags,
    reviewSchoolTagsRaw: reviewedImportedReview?.reviewSchoolTagsRaw || review.reviewSchoolTags,
    schoolTextRaw: review.schoolTextRaw,
    atmosphere: review.atmosphere,
    rating: review.rating,
    feedbackStyle: review.feedbackTags.join(", "),
    feedbackTags: review.feedbackTags,
    teachingStyleTags: review.teachingStyleTags,
    homeworkLoad: review.assignmentAmount,
    classLevel: review.difficulty,
    goodTags: review.goodTags,
    concernTags: review.concernTags,
    cautionTags: review.cautionTags,
    summary: review.summary,
    detailOriginal: review.detailOriginal,
    detail: review.detail,
    detailPublic: localDetailPublic || reviewedImportedReview?.detailPublic || review.detailPublic,
    likes: review.likes,
    pros: review.goodTags.join(", "),
    cons: review.concernTags.join(", "),
    recommendedFor: review.cautionTags.join(", ") || "상세 후기를 참고해 주세요.",
    teacherStyle: review.feedbackTags.join(", "),
    createdAt: review.createdAt,
    status: (localStatus || reviewedOverride?.status || reviewedImportedReview?.status || review.status) as ReviewStatus,
    source: review.source,
    sourceRow: review.sourceRow,
    moderationFlags: review.moderationFlags,
    consent: review.consent,
  };
}

function normalizeReviewSchoolTags(tags: string[]) {
  return Array.from(new Set(tags.map((tag) => normalizeUniversityName(tag)).filter(Boolean)));
}

function matchAcademy(review: ImportedFormReview): MatchResult {
  const allAcademies = getAllAcademyCandidates();
  const overrideAcademyId = getReviewAcademyMatchOverride(review.id);
  if (overrideAcademyId && allAcademies.some((academy) => academy.id === overrideAcademyId)) {
    return { academyId: overrideAcademyId, confidence: "alias" };
  }

  const rawKey = normalizeName(review.academyNameRaw);
  const nameKey = normalizeName(review.academyName);
  const aliasId = academyAliases[rawKey] || academyAliases[nameKey];

  if (aliasId && allAcademies.some((academy) => academy.id === aliasId)) {
    return { academyId: aliasId, confidence: "alias" };
  }

  const exact = allAcademies.find((academy) => {
    const academyKey = normalizeName(academy.name);
    return academyKey === nameKey || academyKey === rawKey;
  });

  if (exact) return { academyId: exact.id, confidence: "exact" };

  const fuzzy = allAcademies.find((academy) => isFuzzyMatch(review, academy));
  if (fuzzy) return { academyId: fuzzy.id, confidence: "fuzzy" };

  return { academyId: `unmatched-${review.id}`, confidence: "unmatched" };
}

function getAllAcademyCandidates() {
  return [...academies, ...getAdminAcademyDrafts()];
}

function isFuzzyMatch(review: ImportedFormReview, academy: Academy) {
  const reviewKey = normalizeName(`${review.academyNameRaw} ${review.academyName}`);
  const academyKey = normalizeName(`${academy.name} ${academy.location} ${academy.district} ${academy.region}`);

  if (reviewKey.length < 3 || academyKey.length < 3) return false;
  return academyKey.includes(reviewKey) || reviewKey.includes(normalizeName(academy.name)) || sharedKeywordScore(reviewKey, academyKey) >= 2;
}

function sharedKeywordScore(left: string, right: string) {
  const keywords = ["네오캣", "네오켓", "그린섬", "메타코드", "오원", "클라우드", "안테나", "천년의미소", "비투비", "씨앤씨", "창조의아침", "유니온", "아트포엠", "더끌림", "피플", "한국화"];
  return keywords.filter((keyword) => left.includes(keyword) && right.includes(keyword)).length;
}

function normalizeName(value: string) {
  return value
    .replace(/\([^)]*\)/g, "")
    .replace(/->.*$/g, "")
    .replace(/\/\/.*$/g, "")
    .replace(/미술학원|학원|미술|캠퍼스|본원|앞|반/g, "")
    .replace(/서울|선릉|한티|홍대|부산|동래|울산|분당|야탑|대전|대구|수성구|수성|일산|광주|강남/g, "")
    .replace(/[^가-힣a-zA-Z0-9]/g, "")
    .trim();
}
