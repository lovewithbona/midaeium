import { academies, type Academy, type Review } from "../data/academies";
import { getImportedReviewsAsReviews } from "./importedReviewAdapter";
import {
  getAdminAcademyDrafts,
  getModerationStatusMap,
  getReviewAcademyMatchMap,
  getReviewDetailPublicMap,
  getReviewSchoolTagsMap,
} from "./storage";

type ExportedAcademyDraft = {
  id: string;
  name: string;
  region: string;
  district: string;
  address: string;
  officialWebsiteUrl: string | null;
  instagramUrl: string | null;
  naverBlogUrl: string | null;
  verifiedStatus: "확인 필요" | "확인 완료";
  createdAt: string;
};

export function downloadAdminReviewExport() {
  const content = createAdminReviewExportContent();
  const blob = new Blob([content], { type: "text/typescript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "midaeium_review_admin_export.ts";
  anchor.click();
  URL.revokeObjectURL(url);
}

export function createAdminReviewExportContent() {
  const updatedAt = new Date().toISOString();
  const statusMap = getModerationStatusMap();
  const academyMatchMap = getReviewAcademyMatchMap();
  const schoolTagsMap = getReviewSchoolTagsMap();
  const detailPublicMap = getReviewDetailPublicMap();
  const reviewIds = Array.from(new Set([
    ...Object.keys(statusMap),
    ...Object.keys(academyMatchMap),
    ...Object.keys(schoolTagsMap),
    ...Object.keys(detailPublicMap),
  ]));
  const finalImportedReviews = getImportedReviewsAsReviews();
  const adminAcademyDrafts = getAdminAcademyDrafts();
  const allAcademies = [...academies, ...adminAcademyDrafts];

  const reviewedReviewOverrides = reviewIds.map((reviewId) => {
    const review = finalImportedReviews.find((item) => item.id === reviewId);
    const academyId = academyMatchMap[reviewId] || review?.academyId;
    const academy = academyId ? allAcademies.find((item) => item.id === academyId) : undefined;

    return {
      reviewId,
      academyId,
      academyName: academy?.name || review?.academyName || "",
      reviewSchoolTags: schoolTagsMap[reviewId] || review?.reviewSchoolTags || [],
      status: statusMap[reviewId] || review?.status || "pending",
      adminMemo: "학원명/대학명/상태 검수 export",
      updatedAt,
    };
  });

  const reviewedAcademyDrafts = adminAcademyDrafts.map((academy) => sanitizeAcademyDraft(academy, updatedAt));
  const reviewedImportedReviews = finalImportedReviews
    .filter((review) => review.source === "google-form")
    .map(sanitizeReviewForExport);

  return [
    "// 미대이음 서버 없는 프로토타입용 검수 결과 export입니다.",
    "// 전화번호, 이메일, 연락처 등 개인정보성 데이터는 포함하지 않습니다.",
    "// 이 파일의 배열 내용을 src/data/adminReviewedData.ts에 붙여넣고 다시 배포하면 정적 데이터로 반영됩니다.",
    "",
    `export const reviewedReviewOverrides = ${formatExportValue(reviewedReviewOverrides)};`,
    "",
    `export const reviewedAcademyDrafts = ${formatExportValue(reviewedAcademyDrafts)};`,
    "",
    `export const reviewedImportedReviews = ${formatExportValue(reviewedImportedReviews)};`,
    "",
  ].join("\n");
}

function sanitizeAcademyDraft(academy: Academy, updatedAt: string): ExportedAcademyDraft {
  return {
    id: academy.id,
    name: academy.name,
    region: academy.region,
    district: academy.district,
    address: academy.address,
    officialWebsiteUrl: academy.officialWebsiteUrl,
    instagramUrl: academy.instagramUrl,
    naverBlogUrl: academy.naverBlogUrl,
    verifiedStatus: academy.verifiedStatus,
    createdAt: academy.createdAt || updatedAt,
  };
}

function sanitizeReviewForExport(review: Review) {
  const {
    contact,
    contactMethod,
    verificationChecks,
    ...safeReview
  } = review;

  return safeReview;
}

function formatExportValue(value: unknown) {
  return JSON.stringify(value, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"([^"]+)"/g, (_match, text: string) => JSON.stringify(text));
}
