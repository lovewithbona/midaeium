import type { Academy, Review, ReviewStatus } from "./academies";

export type ReviewedReviewOverride = {
  reviewId: string;
  academyId?: string;
  academyName?: string;
  reviewSchoolTags?: string[];
  status?: ReviewStatus;
  adminMemo?: string;
  updatedAt?: string;
};

export type ReviewedAcademyDraft = Pick<
  Academy,
  "id" | "name" | "region" | "district" | "address" | "officialWebsiteUrl" | "instagramUrl" | "naverBlogUrl" | "verifiedStatus"
> & {
  createdAt?: string;
};

// 서버 없는 프로토타입용 정적 검수 반영 데이터입니다.
// /mypage에서 내보낸 midaeium_review_admin_export.ts 내용을 이 파일에 붙여넣으면
// 다시 배포했을 때 모든 사용자에게 검수 결과가 반영됩니다.
export const reviewedReviewOverrides: ReviewedReviewOverride[] = [];
export const reviewedAcademyDrafts: ReviewedAcademyDraft[] = [];
export const reviewedImportedReviews: Review[] = [];
