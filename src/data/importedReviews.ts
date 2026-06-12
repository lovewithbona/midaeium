// 미대이음 구글폼 응답 정리본
// 생성 기준: 사용자가 공유한 구글폼 응답 시트의 2~27행 중 실제 응답이 있는 행
// 개인정보/연락처/배포 링크 수신 여부는 포함하지 않았습니다.
// 모든 리뷰는 운영자 검수 전 상태이므로 status: "pending"으로 저장했습니다.

export type ImportedFormReview = {
  id: string;
  sourceRow: number;
  academyId: string | null;
  academyNameRaw: string;
  academyName: string;
  writerStatus: string;
  attendedYear?: string;
  attendedPeriod?: string;
  admissionResult?: string;
  preparedTypes: string[];
  strongTypes: string[];
  reviewSchoolTags: string[];
  schoolTextRaw: string;
  rating: number;
  atmosphere: string;
  atmosphereScore: number;
  assignmentAmount: string;
  assignmentAmountScore: number;
  difficulty: string;
  feedbackTags: string[];
  goodTags: string[];
  concernTags: string[];
  cautionTags: string[];
  teachingStyleTags: string[];
  summary: string;
  detail: string;
  likes: number;
  createdAt: string;
  status: "pending" | "public" | "held" | "rejected" | "hidden";
  source: "google-form";
  consent: { publish: boolean; moderation: boolean };
  moderationFlags: string[];
};

export const importedReviewsFromGoogleForm: ImportedFormReview[] = [];
