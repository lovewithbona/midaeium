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
export const reviewedReviewOverrides: ReviewedReviewOverride[] = [
  {
    reviewId: "google-form-review-004",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-005",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-011",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-006",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-010",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-012",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-020",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-021",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-026",
    academyName: "",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-001",
    academyId: "gangnam-neocat-art",
    academyName: "네오캣미술학원 강남",
    reviewSchoolTags: [
      "서울대학교",
      "고려대학교",
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-002",
    academyId: "gangnam-greensum-art",
    academyName: "그린섬미술학원 강남본원",
    reviewSchoolTags: [
      "건국대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-003",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-004",
    academyId: "gangnam-owon-korean-art",
    academyName: "강남 오원한국화미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-005",
    academyId: "gangnam-cloud-art",
    academyName: "강남 클라우드미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-006",
    academyId: "seolleung-study-and-art",
    academyName: "스터디앤아트미술학원",
    reviewSchoolTags: [
      "국민대학교",
      "홍익대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-007",
    academyId: "busan-archive-art",
    academyName: "아카이브미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-008",
    academyId: "busan-myeongryun-b2b",
    academyName: "비투비미술학원 명륜",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-010",
    academyId: "gangnam-antenna-art",
    academyName: "강남 안테나미술학원",
    reviewSchoolTags: [
      "이화여자대학교",
      "성균관대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-009",
    academyId: "hongdae-cheong-art",
    academyName: "홍대앞 청미술학원",
    reviewSchoolTags: [
      "서울대학교",
      "이화여자대학교",
      "성균관대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-011",
    academyId: "gangnam-thousand-smile-art",
    academyName: "강남 천년의미소미술학원",
    reviewSchoolTags: [
      "건국대학교",
      "경희대학교",
      "한양대학교",
      "서경대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-012",
    academyId: "gangnam-neocat-art",
    academyName: "네오캣미술학원 강남",
    reviewSchoolTags: [
      "서울대학교",
      "고려대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-013",
    academyId: "ulsan-b2b-art",
    academyName: "울산 비투비미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-014",
    academyId: "gyeonggi-seongnam-yatap-cnc",
    academyName: "야탑씨앤씨미술학원",
    reviewSchoolTags: [
      "경희대학교",
      "한양대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-015",
    academyId: "gangnam-neocat-art",
    academyName: "네오캣미술학원 강남",
    reviewSchoolTags: [
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-016",
    academyId: "daejeon-cloud-art",
    academyName: "대전 클라우드미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-017",
    academyId: "daegu-beomeo-aiwon-art",
    academyName: "에이아이원미술학원",
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교",
      "서울과학기술대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-018",
    academyId: "ilsan-changa-juyeop-art",
    academyName: "일산 창조의아침미술학원",
    reviewSchoolTags: [
      "중앙대학교",
      "동덕여자대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-019",
    academyId: "hongdae-union-art",
    academyName: "홍대 유니온미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-020",
    academyId: "neocat-art-hongdae",
    academyName: "네오캣미술학원 홍대앞",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-022",
    academyId: "gangnam-thekkeullim",
    academyName: "강남 더끌림",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-023",
    academyId: "daegu-artpoem-art",
    academyName: "대구 아트포엠미술학원",
    reviewSchoolTags: [
      "국민대학교",
      "서울과학기술대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-024",
    academyId: "daegu-suseong-cloud",
    academyName: "수성클라우드미술학원",
    reviewSchoolTags: [
      "국민대학교",
      "한국예술종합학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-021",
    academyId: "unmatched-google-form-20260614-review-021",
    academyName: "광주 에이맥스",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "held",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-025",
    academyId: "gangnam-cloud-art",
    academyName: "강남 클라우드미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-027",
    academyId: "busan-saha-b2b",
    academyName: "사하 비투비미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-026",
    academyId: "gangnam-creation-morning-art",
    academyName: "강남 창조의아침미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "held",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-028",
    academyId: "gangnam-godo-art",
    academyName: "강남 고도미술학원",
    reviewSchoolTags: [
      "서울대학교",
      "이화여자대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-029",
    academyId: "gangdong-cloud-art",
    academyName: "강동 클라우드미술학원",
    reviewSchoolTags: [],
    status: "hidden",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-030",
    academyId: "ipsami-art",
    academyName: "입사미 미술학원",
    reviewSchoolTags: [
      "홍익대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-031",
    academyId: "gyeonggi-yongin-dongbaek-greensum",
    academyName: "용인 동백 그린섬 미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-032",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    reviewSchoolTags: [
      "국민대학교",
      "건국대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-033",
    academyId: "gangnam-godo-art",
    academyName: "강남 고도미술학원",
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-034",
    academyId: "seolleung-study-and-art",
    academyName: "스터디앤아트미술학원",
    reviewSchoolTags: [
      "홍익대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-035",
    academyId: "mokwoo-art-suwon",
    academyName: "목우미술학원",
    reviewSchoolTags: [
      "국민대학교",
      "경희대학교",
      "단국대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-037",
    academyId: "dongdaemun-changa-art",
    academyName: "동대문 창조의아침미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-036",
    academyId: "unmatched-google-form-20260614-review-036",
    academyName: "선릉 디자인학원",
    reviewSchoolTags: [
      "국민대학교",
      "건국대학교"
    ],
    status: "held",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-038",
    academyId: "lab-seolleung-art",
    academyName: "랩미술선릉학원",
    reviewSchoolTags: [
      "건국대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-039",
    academyId: "bundang-neocat-art",
    academyName: "분당 네오캣미술학원",
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교",
      "서울과학기술대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-040",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-041",
    academyId: "extra-069-gyeonggi",
    academyName: "분당서현 바우하우스 미술학원",
    reviewSchoolTags: [
      "고려대학교",
      "국민대학교",
      "성균관대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-042",
    academyId: "hongdae-greenseom-art",
    academyName: "홍대앞 그린섬미술학원",
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-043",
    academyId: "gangnam-creation-morning-art",
    academyName: "강남 창조의아침미술학원",
    reviewSchoolTags: [
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-044",
    academyId: "seolleung-artm-art",
    academyName: "아트엠미술학원",
    reviewSchoolTags: [
      "고려대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-045",
    academyId: "noryangjin-changa-art",
    academyName: "노량진 창조의아침미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-046",
    academyId: "seolleung-iam-art",
    academyName: "아이엠미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-047",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260614-review-048",
    academyId: "gangdong-cloud-art",
    academyName: "강동 클라우드미술학원",
    reviewSchoolTags: [
      "국민대학교",
      "동덕여자대학교",
      "상명대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-050",
    academyId: "gangnam-seoha-art",
    academyName: "서하미술학원",
    reviewSchoolTags: [
      "이화여자대학교",
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-049",
    academyId: "yangjae-gy-art",
    academyName: "지와이아트 미술학원",
    reviewSchoolTags: [
      "이화여자대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-051",
    academyId: "daejeon-migong-art",
    academyName: "미공미술학원",
    reviewSchoolTags: [
      "한국예술종합학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-052",
    academyId: "neocat-art-hongdae",
    academyName: "네오캣미술학원 홍대앞",
    reviewSchoolTags: [
      "고려대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-053",
    academyId: "incheon-gyeyang-cnc-art",
    academyName: "계양C&C미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-054",
    academyId: "gangnam-godo-art",
    academyName: "강남 고도미술학원",
    reviewSchoolTags: [
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-055",
    academyId: "daegu-suseong-cloud-click-art",
    academyName: "대구 수성클라우드미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-056",
    academyId: "sinsa-kima-art",
    academyName: "키마미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-057",
    academyId: "gangnam-o2-art",
    academyName: "오투미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-058",
    academyId: "gangnam-pharaoh-art",
    academyName: "강남 파라오미술학원",
    reviewSchoolTags: [
      "이화여자대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-059",
    academyId: "seolleung-study-and-art",
    academyName: "스터디앤아트미술학원",
    reviewSchoolTags: [
      "홍익대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-060",
    academyId: "busan-sigak-art",
    academyName: "시각미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-061",
    academyId: "gangnam-godo-art",
    academyName: "강남 고도미술학원",
    reviewSchoolTags: [
      "이화여자대학교",
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-062",
    academyId: "gangnam-antenna-art",
    academyName: "강남 안테나미술학원",
    reviewSchoolTags: [
      "성균관대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-063",
    academyId: "hongdae-greenseom-art",
    academyName: "홍대앞 그린섬미술학원",
    reviewSchoolTags: [
      "국민대학교",
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-064",
    academyId: "daejeon-dunsan-cnc-art",
    academyName: "씨앤씨미술학원 대전둔산캠퍼스",
    reviewSchoolTags: [
      "이화여자대학교",
      "국민대학교",
      "서울대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-065",
    academyId: "hongseong-design-ufo-art",
    academyName: "디자인유에프오미술학원",
    reviewSchoolTags: [
      "건국대학교",
      "상명대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-066",
    academyId: "seolleung-iam-art",
    academyName: "아이엠미술학원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-067",
    academyId: "gangnam-godo-art",
    academyName: "강남 고도미술학원",
    reviewSchoolTags: [
      "이화여자대학교",
      "국민대학교",
      "서울대학교",
      "고려대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-068",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    reviewSchoolTags: [
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-069",
    academyId: "daegu-artpoem-art",
    academyName: "대구 아트포엠미술학원",
    reviewSchoolTags: [
      "서울과학기술대학교",
      "국민대학교"
    ],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-20260615-new-review-070",
    academyId: "gangnam-cnc-art",
    academyName: "강남 씨앤씨미술학원",
    reviewSchoolTags: [],
    status: "public",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  },
  {
    reviewId: "google-form-review-002",
    academyId: "hongdae-greenseom-art",
    academyName: "홍대앞 그린섬미술학원",
    reviewSchoolTags: [],
    status: "pending",
    adminMemo: "학원명/대학명/상태 검수 export",
    updatedAt: "2026-06-15T17:52:58.007Z"
  }
];

export const reviewedAcademyDrafts: ReviewedAcademyDraft[] = [];

export const reviewedImportedReviews: Review[] = [
  {
    id: "google-form-20260614-review-001",
    academyId: "gangnam-neocat-art",
    academyName: "네오캣미술학원 강남",
    academyNameRaw: "선릉네오캣",
    writerStatus: "대학생",
    attendedYear: "2023~2025",
    attendedPeriod: "3년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "고려대학교",
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "고려대학교",
      "국민대학교"
    ],
    schoolTextRaw: "성적이 높은학교!(서울대, 고대, 국민대 등)",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "학원도 좋고 선생님들이나 보조강사들의 역량도 좋지만 커리큘럼이 너무 틀에 박힌 것 같아요",
    detail: "학원도 좋고 선생님들이나 보조강사들의 역량도 좋지만 커리큘럼이 너무 틀에 박힌 것 같아요",
    likes: 0,
    pros: "피드백이 꼼꼼함, 학원 분위기가 좋음, 집중이 잘되는 분위기임",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T22:27:18+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 2,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-002",
    academyId: "gangnam-greensum-art",
    academyName: "그린섬미술학원 강남본원",
    academyNameRaw: "한티 그린섬",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "1년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "건국대학교"
    ],
    reviewSchoolTagsRaw: [
      "건국대학교"
    ],
    schoolTextRaw: "건대(?)",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함, 말투가 직설적인 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "학원 내부도 깔끔하고 관리도 잘 됩니다! 선생님들 친절하시고 무엇보다 담당하시는 선생님이 쓰신 학생들에게 가르칠 때의 메뉴얼?이 존재해서 선생님들 가르침에 일관성이 있습니다.다만 입결이 엄청 좋은지는 잘~..ㅜㅜ그림실력 향상에 있어서는 학생 개인의 의지와 노력이 더 중요한 학원입니다",
    detail: "학원 내부도 깔끔하고 관리도 잘 됩니다! 선생님들 친절하시고 무엇보다 담당하시는 선생님이 쓰신 학생들에게 가르칠 때의 메뉴얼?이 존재해서 선생님들 가르침에 일관성이 있습니다.다만 입결이 엄청 좋은지는 잘~..ㅜㅜ그림실력 향상에 있어서는 학생 개인의 의지와 노력이 더 중요한 학원입니다",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 자료/시범이 도움됨",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함, 말투가 직설적인 편임",
    createdAt: "2026-06-12T22:30:23+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 3,
    moderationFlags: [
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-003",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    academyNameRaw: "선릉 메타코드 학원",
    writerStatus: "대학생",
    attendedYear: "2025",
    attendedPeriod: "6개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "저는 2년정도 다른 미술학원에서 실력을 쌓다가 고3 중반에 들어가서 큰 어려움이 없었지만, 그래도 학원에 적응하기에 난이도가 좀 어려웠던 것 같습니다. 아에 입시를 처음부터 시작하는 사람은 적응하기 어려운 분위기였습니다. 선생님께서 방치형(?)으로 학생들을 가르치시고 직접 열정을 가지고 열심히 질문하지 않는 이상 특별히 따로 집중적으로 봐주시지는 않았습니다.",
    detail: "저는 2년정도 다른 미술학원에서 실력을 쌓다가 고3 중반에 들어가서 큰 어려움이 없었지만, 그래도 학원에 적응하기에 난이도가 좀 어려웠던 것 같습니다. 아에 입시를 처음부터 시작하는 사람은 적응하기 어려운 분위기였습니다. 선생님께서 방치형(?)으로 학생들을 가르치시고 직접 열정을 가지고 열심히 질문하지 않는 이상 특별히 따로 집중적으로 봐주시지는 않았습니다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 초보자가 따라가기 어려움",
    recommendedFor: "스스로 질문해야 놓치지 않음, 체험 수업 후 결정 추천",
    teacherStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T22:31:51+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 4,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-004",
    academyId: "gangnam-owon-korean-art",
    academyName: "오원한국화미술학원 강남",
    academyNameRaw: "선릉 오원한국화",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "서울권 중하위대학교",
    atmosphere: "5",
    rating: 2,
    feedbackStyle: "선생님마다 편차가 심함",
    feedbackTags: [
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "학원 분위기가 좋음"
    ],
    concernTags: [
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "선생님 감정기복심함",
    detail: "선생님 감정기복심함",
    detailPublic: "선생님 감정 기복이 심한 편이세요",
    likes: 0,
    pros: "학원 분위기가 좋음",
    cons: "상담과 실제 수업에서 차이가 느껴짐, 입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "선생님마다 편차가 심함",
    createdAt: "2026-06-12T22:32:12+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 5,
    moderationFlags: [
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-005",
    academyId: "gangnam-cloud-art",
    academyName: "클라우드미술학원 강남",
    academyNameRaw: "선릉 클라우드",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "고3 3월부터 2개월 정도..?",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "4",
    rating: 2,
    feedbackStyle: "학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "상급자에게 적합해요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "저는 그림 못그리고 소심한 현역이였는데 삼수 사수생이 좀 점령한 느낌이였습니다... 질문 못하고 소심하면 비추 학생이 많아서 봐주기 힘들어요",
    detail: "저는 그림 못그리고 소심한 현역이였는데 삼수 사수생이 좀 점령한 느낌이였습니다... 질문 못하고 소심하면 비추 학생이 많아서 봐주기 힘들어요",
    likes: 0,
    pros: "특별히 없음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음",
    teacherStyle: "학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T22:35:16+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 6,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-006",
    academyId: "seolleung-study-and-art",
    academyName: "스터디앤아트미술학원",
    academyNameRaw: "선릉 스터디앤아트",
    writerStatus: "대학생",
    attendedYear: "고3 5월~정특",
    attendedPeriod: "",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "홍익대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "홍익대학교"
    ],
    schoolTextRaw: "국민대/홍대",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "정특때 거의 멘탈 나간 상태로 수업 들었었는데 너무 좋았어요.. 쌤들도 다 너무 좋고 기본기를 탄탄하게 잡아주시려고 노력해주시는게 보였어요",
    detail: "정특때 거의 멘탈 나간 상태로 수업 들었었는데 너무 좋았어요.. 쌤들도 다 너무 좋고 기본기를 탄탄하게 잡아주시려고 노력해주시는게 보였어요",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 입시 정보가 많음, 자료/시범이 도움됨, 개별 관리가 잘됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함",
    createdAt: "2026-06-12T22:37:04+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 7,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-007",
    academyId: "busan-archive-art",
    academyName: "아카이브미술학원",
    academyNameRaw: "부산 아카이브 미술학원",
    writerStatus: "N수생",
    attendedYear: "2026",
    attendedPeriod: "4~5개월",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "모든 기초디자인 학교",
    atmosphere: "2",
    rating: 5,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "4",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "과제량이 부담스러움",
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "과제 시간을 확보해야 함"
    ],
    summary: "",
    detailOriginal: "다른 미술학원 원장선생님보다 훨씬 더 젊으시고 직접 색과 구도 연구를 하시기 때문에 입시미술 트렌드 캐치가 항상 좋으신 편입니다 또한 아카이브 미술학원 안 모든 보조 선생님들이 매우 많은 편에 속하며 대부분 인서울이나 수시 실기 강점인 인서울, 건글에 다니시고 있거나 졸업,휴학생 선생님들이십니다(모든 선생님은 대부분 3~4년동안 원장선생님과 지내심).\n또한 그 선생님들마다 맞는 연구작과 입시시절 성적과 그림 모든 것을 아카이브 학생들에게만 공개합니다. 다른 미술학원 원장들과 결합하여 교수평가로 기간마다 3~4회 자기 실력을 알 수 있는 기회가 제공됩니다. 또한 학생들에게 맞는 공부법을 알려주시고 학생 개개인에 맞게 커리큘럼을 짜주시는 게 가장 큰 장점입니다(한 달에 한 번씩 학생과 부모님 개개인 상담) 이번 대학에서 따로 본상~입선까지 많이 나와 따로 교육자 상까지 받으셨으며 직접 실기대회 그림장 공개가 되는 대학들은 싹 다 분석하고 연구 하시며 합격작 그림과 불합격 그림까지 차이점을 알려주십니다. 학생들마다 개개인 차이가 있는 걸 존중해주시고 저희를 많이 사랑해주시는 걸 많이 느껴지는 미술학원입니다.",
    detail: "다른 미술학원 원장선생님보다 훨씬 더 젊으시고 직접 색과 구도 연구를 하시기 때문에 입시미술 트렌드 캐치가 항상 좋으신 편입니다 또한 아카이브 미술학원 안 모든 보조 선생님들이 매우 많은 편에 속하며 대부분 인서울이나 수시 실기 강점인 인서울, 건글에 다니시고 있거나 졸업,휴학생 선생님들이십니다(모든 선생님은 대부분 3~4년동안 원장선생님과 지내심).\n또한 그 선생님들마다 맞는 연구작과 입시시절 성적과 그림 모든 것을 아카이브 학생들에게만 공개합니다. 다른 미술학원 원장들과 결합하여 교수평가로 기간마다 3~4회 자기 실력을 알 수 있는 기회가 제공됩니다. 또한 학생들에게 맞는 공부법을 알려주시고 학생 개개인에 맞게 커리큘럼을 짜주시는 게 가장 큰 장점입니다(한 달에 한 번씩 학생과 부모님 개개인 상담) 이번 대학에서 따로 본상~입선까지 많이 나와 따로 교육자 상까지 받으셨으며 직접 실기대회 그림장 공개가 되는 대학들은 싹 다 분석하고 연구 하시며 합격작 그림과 불합격 그림까지 차이점을 알려주십니다. 학생들마다 개개인 차이가 있는 걸 존중해주시고 저희를 많이 사랑해주시는 걸 많이 느껴지는 미술학원입니다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 자료/시범이 도움됨, 개별 관리가 잘됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "과제량이 부담스러움, 초보자가 따라가기 어려움",
    recommendedFor: "멘탈 관리가 필요함, 과제 시간을 확보해야 함",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    createdAt: "2026-06-12T22:42:46+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 8,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-008",
    academyId: "busan-myeongryun-b2b",
    academyName: "비투비미술학원 명륜",
    academyNameRaw: "부산 동래 비투비 미술학원 - 파사드반(기초소양반)",
    writerStatus: "N수생",
    attendedYear: "2023.2024.2025",
    attendedPeriod: "",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "크게 국민대/고대/이대로 테이블이 나뉘며\n공통진도를 나갈 때도 있고\n각 대학별 진도를 나갈 때도 있습니다.\n6모 이후 9모 이후 등 학생들 멘탈이 흔들리는 시점이면 원장님께서 여러 얘기를 해주시며\n마음을 다잡을 수 있게 해주십니다.\n특히 저같은 경우는 9모 직후 멘탈이 크게 흔들려 그게 수업을 제대로 듣지 못하는 수준까지 갔으며\n그림에도 영향이 미쳤는데 이때 원장님이\n개인적으로 제 문제를 해결할 방법을 많이 알려주셨고\n수능 직후에도 제 성향과 성적에 맞추어 여러 조언을 해주셨는데 이게 약한 멘탈을 가진 저에겐 큰 도움이 되었습니다.\n\n직설적으로 답을 제시해주시기 보다는\n저 스스로 답을 찾아갈 수 있게 해주시는 편이셨으며\n중간중간 힌트?느낌으로 던지시는 말들이\n도움 됐었습니다!\n\n강평때도 국민대반은 약 20명가량 됐는데\n한명한명 피드백 해주실만큼 열정적이고 친절하십니다!\n말을 하실 때에도 늘 둥글게 말해주십니다\n또한 학원이 나름 경남권에선 대형학원이라\n어플도 나와있으며\n그 어플 안에서 각 수업 내용, 자료, 합격작 등을\n볼 수 있어 편리했습니다!\n\n수업 분위기도 밝고 다같이 으쌰으쌰 해보자는 분위기였어서 저는 마음 편하게 그림 그리며\n미술학원 가는 날이 공부만 하다가 힐링하러 가는 날처럼\n느껴질 정도였습니다\n\n또한 지방 학원치고 기초소양을 준비하는 학생들이 꽤 많아서 실력을 비교하기에 좋았고\n서울 학원과 교류를 하며 주기적으로 서울 유명 미술 학원 원장님께서 특강을 와주시는 것도 큰 도움이 되었습니다.",
    detail: "크게 국민대/고대/이대로 테이블이 나뉘며\n공통진도를 나갈 때도 있고\n각 대학별 진도를 나갈 때도 있습니다.\n6모 이후 9모 이후 등 학생들 멘탈이 흔들리는 시점이면 원장님께서 여러 얘기를 해주시며\n마음을 다잡을 수 있게 해주십니다.\n특히 저같은 경우는 9모 직후 멘탈이 크게 흔들려 그게 수업을 제대로 듣지 못하는 수준까지 갔으며\n그림에도 영향이 미쳤는데 이때 원장님이\n개인적으로 제 문제를 해결할 방법을 많이 알려주셨고\n수능 직후에도 제 성향과 성적에 맞추어 여러 조언을 해주셨는데 이게 약한 멘탈을 가진 저에겐 큰 도움이 되었습니다.\n\n직설적으로 답을 제시해주시기 보다는\n저 스스로 답을 찾아갈 수 있게 해주시는 편이셨으며\n중간중간 힌트?느낌으로 던지시는 말들이\n도움 됐었습니다!\n\n강평때도 국민대반은 약 20명가량 됐는데\n한명한명 피드백 해주실만큼 열정적이고 친절하십니다!\n말을 하실 때에도 늘 둥글게 말해주십니다\n또한 학원이 나름 경남권에선 대형학원이라\n어플도 나와있으며\n그 어플 안에서 각 수업 내용, 자료, 합격작 등을\n볼 수 있어 편리했습니다!\n\n수업 분위기도 밝고 다같이 으쌰으쌰 해보자는 분위기였어서 저는 마음 편하게 그림 그리며\n미술학원 가는 날이 공부만 하다가 힐링하러 가는 날처럼\n느껴질 정도였습니다\n\n또한 지방 학원치고 기초소양을 준비하는 학생들이 꽤 많아서 실력을 비교하기에 좋았고\n서울 학원과 교류를 하며 주기적으로 서울 유명 미술 학원 원장님께서 특강을 와주시는 것도 큰 도움이 되었습니다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨, 개별 관리가 잘됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-12T22:44:17+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 9,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-009",
    academyId: "hongdae-cheong-art",
    academyName: "홍대앞 청미술학원",
    academyNameRaw: "홍대 한국화 청 미술학원",
    writerStatus: "고3",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "이화여자대학교",
      "성균관대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "이화여자대학교",
      "성균관대학교"
    ],
    schoolTextRaw: "서울대 이대 성대 (정시권 최상위 학교)",
    atmosphere: "3",
    rating: 2,
    feedbackStyle: "빠르게 핵심만 짚어줌, 선생님마다 편차가 심함",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "상담과 실제 수업에서 차이가 느껴짐",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "(저는 직설적으로 쓰겠습니다 순화 부탁드려요 ㅜㅜ)\n현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게 나타납니다.\n상담 중 내용에선 단순히 눈앞의 입시뿐만 아니라 미래의 작가로서의 자질을 길러준다고 했는데 실제 수업 내용에선 획일화된 방식에 이질감이 들었습니다.\n그렇지만 대형학원답게 입시 정보가 압도적으로 많은 편이고 서울대 정원 16명중 15명이 이 학원에서 진학하는 절대적인 통계치가, 이 학원의 방향성을 증명해주는 것 같습니다.",
    detail: "(저는 직설적으로 쓰겠습니다 순화 부탁드려요 ㅜㅜ)\n현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게 나타납니다.\n상담 중 내용에선 단순히 눈앞의 입시뿐만 아니라 미래의 작가로서의 자질을 길러준다고 했는데 실제 수업 내용에선 획일화된 방식에 이질감이 들었습니다.\n그렇지만 대형학원답게 입시 정보가 압도적으로 많은 편이고 서울대 정원 16명중 15명이 이 학원에서 진학하는 절대적인 통계치가, 이 학원의 방향성을 증명해주는 것 같습니다.",
    detailPublic: "현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게 나타납니다.\n상담 중 내용에선 단순히 눈앞의 입시뿐만 아니라 미래의 작가로서의 자질을 길러준다고 했는데 실제 수업 내용은 그것보다는 획일화된 느낌이었습니다. 그렇지만 대형학원답게 입시 정보가 압도적으로 많은 편이고 서울대 정원 16명중 15명이 이 학원에서 진학하는 절대적인 통계치가 이 학원의 방향성을 증명해주는 것 같습니다!",
    likes: 0,
    pros: "입시 정보가 많음, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 상담과 실제 수업에서 차이가 느껴짐, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "스스로 질문해야 놓치지 않음",
    teacherStyle: "빠르게 핵심만 짚어줌, 선생님마다 편차가 심함",
    createdAt: "2026-06-12T22:49:14+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 10,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-010",
    academyId: "gangnam-antenna-art",
    academyName: "안테나미술학원 강남",
    academyNameRaw: "선릉 안테나",
    writerStatus: "고3",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교",
      "성균관대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교",
      "성균관대학교"
    ],
    schoolTextRaw: "성균관대 이대",
    atmosphere: "3",
    rating: 3,
    feedbackStyle: "빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "상급자에게 적합해요",
    goodTags: [
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "특별히 없음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "수업 속도가 빠르게 느껴졌음",
      "초보자가 따라가기 어려움",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "고3이 느끼기엔 성이대반에 소속이 될때 커리큘럼을 자세하게 알지못해 어려움을 느낄 수 있음\n각자도생하는 분위기여서 으쌰으쌰? 이런건 아닌거같음\n재수,n수생이 많은 반이기때문에 속도가 빠른 현역들과는 진도차이가 나 좀 어렵기도함\n조교쌤들이 잘 봐주심 하지만 질문을 잘해야함\n질문을 잘 못하는 소심한 성격은 이학원과 맞지않을 수 있음.\n초보자가 수업따라가기에는 한계가있음\n하나부터 열까지 다 알려주는건 아니긴함\n기초디자인과는 다르게 자기가 생각해서 아이디어를 내야하는 경우가 많은데 이걸 시간제한을 두지않아 그냥 딴생각하고 와도 모를거같음\n엄청 빡빡한 편은 아닌거같음 아직 6월이여서 그런진 모르겠지만",
    detail: "고3이 느끼기엔 성이대반에 소속이 될때 커리큘럼을 자세하게 알지못해 어려움을 느낄 수 있음\n각자도생하는 분위기여서 으쌰으쌰? 이런건 아닌거같음\n재수,n수생이 많은 반이기때문에 속도가 빠른 현역들과는 진도차이가 나 좀 어렵기도함\n조교쌤들이 잘 봐주심 하지만 질문을 잘해야함\n질문을 잘 못하는 소심한 성격은 이학원과 맞지않을 수 있음.\n초보자가 수업따라가기에는 한계가있음\n하나부터 열까지 다 알려주는건 아니긴함\n기초디자인과는 다르게 자기가 생각해서 아이디어를 내야하는 경우가 많은데 이걸 시간제한을 두지않아 그냥 딴생각하고 와도 모를거같음\n엄청 빡빡한 편은 아닌거같음 아직 6월이여서 그런진 모르겠지만",
    likes: 0,
    pros: "집중이 잘되는 분위기임, 자료/시범이 도움됨, 특별히 없음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 수업 속도가 빠르게 느껴졌음, 초보자가 따라가기 어려움, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T22:55:17+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 11,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-011",
    academyId: "gangnam-thousand-smile-art",
    academyName: "천년의미소미술학원 강남",
    academyNameRaw: "선릉 천년의미소 기디",
    writerStatus: "N수생",
    attendedYear: "2026",
    attendedPeriod: "약 3개월",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "건국대학교",
      "경희대학교",
      "한양대학교",
      "서경대학교"
    ],
    reviewSchoolTagsRaw: [
      "건국대학교",
      "경희대학교",
      "한양대학교",
      "서경대학교"
    ],
    schoolTextRaw: "기디. 경희 한양 서경 건국 등",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "진짜 정말 괜찮습니다 그림도 좋구요 눈이 떠진 느낌? 그림이 4d고 구도틀이 있어서 따라오기 쉬워요 정말 초보자도 잘 따라올수있어요 선생님들이 정말 친절하십니다.... 동물의숲같아요 ㅋㅋㅋ 정말 힐링됩니다 학생 하나하나 잘 신경써주시구요 저는 진짜 마음에 들었습니다 꼭 상담받아보고 체험수업해보세요!",
    detail: "진짜 정말 괜찮습니다 그림도 좋구요 눈이 떠진 느낌? 그림이 4d고 구도틀이 있어서 따라오기 쉬워요 정말 초보자도 잘 따라올수있어요 선생님들이 정말 친절하십니다.... 동물의숲같아요 ㅋㅋㅋ 정말 힐링됩니다 학생 하나하나 잘 신경써주시구요 저는 진짜 마음에 들었습니다 꼭 상담받아보고 체험수업해보세요!",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "체험 수업 후 결정 추천",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-12T22:57:13+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 12,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-012",
    academyId: "gangnam-neocat-art",
    academyName: "네오캣미술학원 강남",
    academyNameRaw: "선릉 네오켓(실기)//선릉 스카이미술학원(내신)->설문은 네오켓 기준입니다",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "1-2년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "고려대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "고려대학교"
    ],
    schoolTextRaw: "서울대 고대 중심 강점 따위없는 학우ㅜㄴ임",
    atmosphere: "2",
    rating: 1,
    feedbackStyle: "말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "학원 분위기가 좋음",
      "특별히 없음"
    ],
    concernTags: [
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요",
      "비용/수업 방식으로 상담 때 확인 추천"
    ],
    summary: "",
    detailOriginal: "음..일단 겉보김랑 실제랑 달라요 뭔가 높은대학교 무조건 붙일수있을것같지만실상은 아예못붙임..;;;심저 제 수시붙은것도 실기로 붙은척 가짜정보올림..;;;그리고 내신도 못하게함",
    detail: "음..일단 겉보김랑 실제랑 달라요 뭔가 높은대학교 무조건 붙일수있을것같지만실상은 아예못붙임..;;;심저 제 수시붙은것도 실기로 붙은척 가짜정보올림..;;;그리고 내신도 못하게함",
    likes: 0,
    pros: "학원 분위기가 좋음, 특별히 없음",
    cons: "상담과 실제 수업에서 차이가 느껴짐, 입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요, 비용/수업 방식으로 상담 때 확인 추천",
    teacherStyle: "말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-12T23:02:42+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 13,
    moderationFlags: [
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-013",
    academyId: "ulsan-b2b-art",
    academyName: "비투비미술학원 울산",
    academyNameRaw: "울산 비투비",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "잘 모르겠습니다",
    atmosphere: "4",
    rating: 2,
    feedbackStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "4",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "과제량이 부담스러움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "선생님께서 정말 감정적입니다... 공개적으로 학생들에게 모욕을 주거나 비난하는 경우도 있습니다 상담도 자주 받고 받을 때마다 30분 이상씩 합니다 ㅠ 다른 학원들 욕하는 경우도 허다해요...",
    detail: "선생님께서 정말 감정적입니다... 공개적으로 학생들에게 모욕을 주거나 비난하는 경우도 있습니다 상담도 자주 받고 받을 때마다 30분 이상씩 합니다 ㅠ 다른 학원들 욕하는 경우도 허다해요...",
    likes: 0,
    pros: "특별히 없음",
    cons: "과제량이 부담스러움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    teacherStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T23:04:00+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 14,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-014",
    academyId: "gyeonggi-seongnam-yatap-cnc",
    academyName: "야탑씨앤씨미술학원",
    academyNameRaw: "씨앤씨 미술학원 분당야탑캠퍼스",
    writerStatus: "대학생",
    attendedYear: "2023",
    attendedPeriod: "학생으로 1년, 강사로 2년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "경희대학교",
      "한양대학교"
    ],
    reviewSchoolTagsRaw: [
      "경희대학교",
      "한양대학교"
    ],
    schoolTextRaw: "기초디자인 기반 일반대, 한양대, 경희대 등",
    atmosphere: "4",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "특정 강사 한분이 굉장히 유명하셨는데, 그것때문에 멀리서 찾아오는 경우도 있을만큼 유명했습니다. 확실히 실력은 있으셔서 좋았고, 기초디자인 기반의 학원이지만 극소수의 기초소양 학생들의 경우 거의 유명 전임선생님께서 전담마크해주시는 느낌을 받았습니다. 그리고 학원에 학생수가 굉장히 많아서 서로 참고하고 경쟁하며 공부할 수 있습니다. 자료도 많고, 이것저것 채색법이나 구도 연구를 많이 하셔서 조금 선도적인 느낌이 있었습니다",
    detail: "특정 강사 한분이 굉장히 유명하셨는데, 그것때문에 멀리서 찾아오는 경우도 있을만큼 유명했습니다. 확실히 실력은 있으셔서 좋았고, 기초디자인 기반의 학원이지만 극소수의 기초소양 학생들의 경우 거의 유명 전임선생님께서 전담마크해주시는 느낌을 받았습니다. 그리고 학원에 학생수가 굉장히 많아서 서로 참고하고 경쟁하며 공부할 수 있습니다. 자료도 많고, 이것저것 채색법이나 구도 연구를 많이 하셔서 조금 선도적인 느낌이 있었습니다",
    likes: 0,
    pros: "피드백이 꼼꼼함, 학원 분위기가 좋음, 자료/시범이 도움됨",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 초보자가 따라가기 어려움",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T23:30:34+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 15,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-015",
    academyId: "gangnam-neocat-art",
    academyName: "네오캣미술학원 강남",
    academyNameRaw: "선릉 네오캣",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교"
    ],
    schoolTextRaw: "서울대 중심",
    atmosphere: "2",
    rating: 2,
    feedbackStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "입시 정보가 많음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "상담과 실제 수업에서 차이가 느껴짐",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "대형학원의 단점을 모두 가지고 있음 학생별 관리가 잘 이뤄지지 않음. 대형이라 더욱 시험 위주로 돌아가기 때문에 실력이 있는 학생들이 가야 효과를 볼 수 있음\n1등급임에도 국민대학교에 지원하지 못 한다고 학원 측에서 확신함\n선생님들부터 담배 냄새가 너무 심하기 때문네 학생들의 흡연까지 관리가 되지 않음. 보조 강사들의 언행 또한 관리가 잘 되지 않음 등등",
    detail: "대형학원의 단점을 모두 가지고 있음 학생별 관리가 잘 이뤄지지 않음. 대형이라 더욱 시험 위주로 돌아가기 때문에 실력이 있는 학생들이 가야 효과를 볼 수 있음\n1등급임에도 국민대학교에 지원하지 못 한다고 학원 측에서 확신함\n선생님들부터 담배 냄새가 너무 심하기 때문네 학생들의 흡연까지 관리가 되지 않음. 보조 강사들의 언행 또한 관리가 잘 되지 않음 등등",
    likes: 0,
    pros: "입시 정보가 많음, 실전 감각을 키우기 좋음",
    cons: "상담과 실제 수업에서 차이가 느껴짐, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음",
    teacherStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-12T23:42:01+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 16,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-016",
    academyId: "daejeon-cloud-art",
    academyName: "클라우드미술학원 대전",
    academyNameRaw: "대전 클라우드 미술학원",
    writerStatus: "고3",
    attendedYear: "",
    attendedPeriod: "약 5년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "중위권 기디 + 여대..? (기디 학교는 잘 보내는 거 같아요)",
    atmosphere: "2",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "아주 어릴때 부터 현재 현역때까지 다니는 중인 학원인데 매우 만족하며 다니는 중입니다. 인원이 대전에 있는 학원 치고는 많긴한데 그럼에도 전임쌤과의 피드백이 문제 없이 잘 이어집니다. 그리고 꼼꼼히 저의 부족한 부분을 잘 지적해주셔서 입시반을 시작한 3월부터 현재 6월까지 월마다 시간이 지날 수록 실력이 늘고 있다는게 체감 됩니다. 기디로 가는 대학 뿐만 아니라 기소 반도 운영하고 있어요. 그 유명한 기소학원인 강남 클라우드에서 전임쌤이 내려오셔서 수업해서 이 점도 좋은 점 같습니다!",
    detail: "아주 어릴때 부터 현재 현역때까지 다니는 중인 학원인데 매우 만족하며 다니는 중입니다. 인원이 대전에 있는 학원 치고는 많긴한데 그럼에도 전임쌤과의 피드백이 문제 없이 잘 이어집니다. 그리고 꼼꼼히 저의 부족한 부분을 잘 지적해주셔서 입시반을 시작한 3월부터 현재 6월까지 월마다 시간이 지날 수록 실력이 늘고 있다는게 체감 됩니다. 기디로 가는 대학 뿐만 아니라 기소 반도 운영하고 있어요. 그 유명한 기소학원인 강남 클라우드에서 전임쌤이 내려오셔서 수업해서 이 점도 좋은 점 같습니다!",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨",
    cons: "특별히 없음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-12T23:42:05+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 17,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-017",
    academyId: "daegu-beomeo-aiwon-art",
    academyName: "에이아이원미술학원",
    academyNameRaw: "대구 수성구 범어피플 학원 -> 현재는 에이아이원으로 네임변경",
    writerStatus: "N수생",
    attendedYear: "2023 6월~ 2025 10월 15일",
    attendedPeriod: "2~3년 가까이",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교",
      "서울과학기술대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "국민대학교",
      "서울과학기술대학교"
    ],
    schoolTextRaw: "기초디자인에도 강점이 있으나, 서울대,국민대,과기대 등 기초소양, 발상과 표현에 특히 최적화 되어있으십니다.",
    atmosphere: "4",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "발상과 표현, 즉 응용력이 필요한 수업에서 문제에 접근하는 방식과 방향을 섬세하게 잡아주십니다.\n혼자서 고민하여 아이디어를 낼 수 있도록 그림작 또는 실제 제품디자인이나 생활디자인 등등 여러 예시자료를 풍부하게 제공해주시고, 깔끔한 시범을 통해 문제에서 대응했어야 하는 부분 및 아쉬운 지점등을 명확히 체크하여 학생의 관점에서 어떠한 태도를 지녀야 할 지를 명확하게 잡아주셔서 도움이 정말 많이 되었습니다. 창의력이 아예 없는 학생도 정답에 가까워질 수 있도록 수업에서 얻어가는 부분이 정말 많고, 홍익대학교 출신 학원 원장선생님께서 1대1로 수업도 해주시기 때문에 일관된 피드백과 매시간 소홀함이 없는 환경입니다. 특히 발상뿐만 아니라 소묘,건식재료에서 표현력,기교등이 매우 뛰어나신 선생님이셔서 상위권 대학준비에 최적화 되어있으니 실력에 의심 하나 없이 3년간 한 선생님을 바라보게 만들 수 밖에 없더라구요, 학원위치도 수성구여서 바로앞에 대구러셀이 있습니다. 공부와 실기를 같이 챙길 수 있는 구조로 더욱 유리할 수 있을 거 같다고 생각이 듭니다.\n친절하시고 친해지면 가끔 엉뚱미(?)로 재밌으신 선생님이라 수업도 재밌으실겁니다. (이건 매우 주관적인 제 생각입니다ㅎㅎ) 또한 서울대,홍익대,국민대,고려대,과기대,시립대 등등 상위권 대학을 많이 보낸 경력이 있으시니 학원에 믿고 맡기셔도 좋을 것 같습니다. 현재 저는 실기를 하고 있진 않지만 취미로 다시 이 학원을 다니고 싶다는 생각도 정말 자주 들었습니다!",
    detail: "발상과 표현, 즉 응용력이 필요한 수업에서 문제에 접근하는 방식과 방향을 섬세하게 잡아주십니다.\n혼자서 고민하여 아이디어를 낼 수 있도록 그림작 또는 실제 제품디자인이나 생활디자인 등등 여러 예시자료를 풍부하게 제공해주시고, 깔끔한 시범을 통해 문제에서 대응했어야 하는 부분 및 아쉬운 지점등을 명확히 체크하여 학생의 관점에서 어떠한 태도를 지녀야 할 지를 명확하게 잡아주셔서 도움이 정말 많이 되었습니다. 창의력이 아예 없는 학생도 정답에 가까워질 수 있도록 수업에서 얻어가는 부분이 정말 많고, 홍익대학교 출신 학원 원장선생님께서 1대1로 수업도 해주시기 때문에 일관된 피드백과 매시간 소홀함이 없는 환경입니다. 특히 발상뿐만 아니라 소묘,건식재료에서 표현력,기교등이 매우 뛰어나신 선생님이셔서 상위권 대학준비에 최적화 되어있으니 실력에 의심 하나 없이 3년간 한 선생님을 바라보게 만들 수 밖에 없더라구요, 학원위치도 수성구여서 바로앞에 대구러셀이 있습니다. 공부와 실기를 같이 챙길 수 있는 구조로 더욱 유리할 수 있을 거 같다고 생각이 듭니다.\n친절하시고 친해지면 가끔 엉뚱미(?)로 재밌으신 선생님이라 수업도 재밌으실겁니다. (이건 매우 주관적인 제 생각입니다ㅎㅎ) 또한 서울대,홍익대,국민대,고려대,과기대,시립대 등등 상위권 대학을 많이 보낸 경력이 있으시니 학원에 믿고 맡기셔도 좋을 것 같습니다. 현재 저는 실기를 하고 있진 않지만 취미로 다시 이 학원을 다니고 싶다는 생각도 정말 자주 들었습니다!",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-12T23:46:35+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 18,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-018",
    academyId: "ilsan-changa-juyeop-art",
    academyName: "창조의아침미술학원 일산",
    academyNameRaw: "일산 창조의 아침",
    writerStatus: "N수생",
    attendedYear: "2025학년도",
    attendedPeriod: "3년",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "중앙대학교",
      "동덕여자대학교"
    ],
    reviewSchoolTagsRaw: [
      "중앙대학교",
      "동덕여자대학교"
    ],
    schoolTextRaw: "중앙대, 동덕여대, 기타 지방대 등 일반기초디자인",
    atmosphere: "3",
    rating: 3,
    feedbackStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "입시반 한정 담당 선생님이 개개인의 특성을 잘 알고 계십니다 설명도 초보자 맞춤으로 잘하시긴 하지만 입시반 커리큘럼 완성도?가 부족한것같아요 구도에 대한 이해가 좀 떨어져요 상위권 학교 준비도 어려워요",
    detail: "입시반 한정 담당 선생님이 개개인의 특성을 잘 알고 계십니다 설명도 초보자 맞춤으로 잘하시긴 하지만 입시반 커리큘럼 완성도?가 부족한것같아요 구도에 대한 이해가 좀 떨어져요 상위권 학교 준비도 어려워요",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 개별 관리가 잘됨",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "스스로 질문해야 놓치지 않음",
    teacherStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-13T01:05:58+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 19,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-019",
    academyId: "hongdae-union-art",
    academyName: "유니온미술학원 홍대",
    academyNameRaw: "홍대 유니온",
    writerStatus: "N수생",
    attendedYear: "2026학년도",
    attendedPeriod: "3개월",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "일반 기초디자인",
    atmosphere: "2",
    rating: 4,
    feedbackStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "선생님이랑 친해지셔야합니다... 학생들 엄청 많은데 한시간 강평동안 피드백 한줄 받고 끝날 수 있음\n다만 일반기디는 시간 내에 정말 잘 그릴 수 있게 됩니다 체계적인 시간관리 및 자료 제공은 좋았어요\n저는 상위권반이었는데 막 좋다? 는 못느꼈어요 소묘 기초도 별로고 정특 전에는 학교별로 분반도 안돼서 내가 준비하고 싶은 학교 중점으로 배울 수 없어요\n웬만하면 국민대 과기대로 보내려는 느낌이 강해요",
    detail: "선생님이랑 친해지셔야합니다... 학생들 엄청 많은데 한시간 강평동안 피드백 한줄 받고 끝날 수 있음\n다만 일반기디는 시간 내에 정말 잘 그릴 수 있게 됩니다 체계적인 시간관리 및 자료 제공은 좋았어요\n저는 상위권반이었는데 막 좋다? 는 못느꼈어요 소묘 기초도 별로고 정특 전에는 학교별로 분반도 안돼서 내가 준비하고 싶은 학교 중점으로 배울 수 없어요\n웬만하면 국민대 과기대로 보내려는 느낌이 강해요",
    likes: 0,
    pros: "학원 분위기가 좋음, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 초보자가 따라가기 어려움, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 체험 수업 후 결정 추천",
    teacherStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-13T01:11:13+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 20,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-020",
    academyId: "neocat-art-hongdae",
    academyName: "네오캣미술학원 홍대앞",
    academyNameRaw: "홍대 네오캣",
    writerStatus: "N수생",
    attendedYear: "2026학년도",
    attendedPeriod: "6개월",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "상위권 학교 중심",
    atmosphere: "3",
    rating: 2,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "상위권 학교만 준비했어서 그 기준으로 말씀드리면\n초보자는 비추천해요 그 학교로 입시했던 경험 있는 n수들은 추천 소수정예라 개개인 관리가 되는게 가장 큰 장점입니다\n다만 스스로 생각하게 시키는게 좀 과할때도 있어서 저는 힘들었어요 한 문제로 몇타임을 고민했는데 계속 빠꾸먹어서 멘탈 나갔습니다\n선생님들 실력은 있어요 본인이 많이 질문해서 빼먹어야해요",
    detail: "상위권 학교만 준비했어서 그 기준으로 말씀드리면\n초보자는 비추천해요 그 학교로 입시했던 경험 있는 n수들은 추천 소수정예라 개개인 관리가 되는게 가장 큰 장점입니다\n다만 스스로 생각하게 시키는게 좀 과할때도 있어서 저는 힘들었어요 한 문제로 몇타임을 고민했는데 계속 빠꾸먹어서 멘탈 나갔습니다\n선생님들 실력은 있어요 본인이 많이 질문해서 빼먹어야해요",
    likes: 0,
    pros: "피드백이 꼼꼼함, 질문하기 편함, 개별 관리가 잘됨",
    cons: "초보자가 따라가기 어려움",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-13T01:15:47+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 21,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-021",
    academyId: "unmatched-google-form-20260614-review-021",
    academyName: "광주 에이맥스",
    academyNameRaw: "광주 에이맥스",
    writerStatus: "대학생",
    attendedYear: "2021년",
    attendedPeriod: "2년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심 반은 국민대 위주로 수업",
    atmosphere: "1",
    rating: 2,
    feedbackStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "자료/시범이 도움됨",
      "특별히 없음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "진짜 비추합니다.. 선생님들이 너무 감정적이세요 그리고 원생 숫자도 적어서 국민대 반을 10명이서 준비했고 마지막에는 3명이서 입시했어요….. 다 도망갔습니다 저빼고 전 어찌저찌 버텨서 왔지만 다른 좋은 학원 많습니다 그냥 광주에서 학원 다니지 마세요… 서울 학교릉 목표를 하면 특히~~",
    detail: "진짜 비추합니다.. 선생님들이 너무 감정적이세요 그리고 원생 숫자도 적어서 국민대 반을 10명이서 준비했고 마지막에는 3명이서 입시했어요….. 다 도망갔습니다 저빼고 전 어찌저찌 버텨서 왔지만 다른 좋은 학원 많습니다 그냥 광주에서 학원 다니지 마세요… 서울 학교릉 목표를 하면 특히~~",
    likes: 0,
    pros: "자료/시범이 도움됨, 특별히 없음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-13T01:17:30+09:00",
    status: "held",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 22,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-022",
    academyId: "gangnam-thekkeullim",
    academyName: "더끌림 강남",
    academyNameRaw: "부산 더끌림 -> 선릉 더끌림 미술학원",
    writerStatus: "대학생",
    attendedYear: "2021-2023",
    attendedPeriod: "3년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "기초소양 중심반이 탄탄했어요, 원생이 많지않아서 그만큼 보조쌤이 잘 봐주심",
    atmosphere: "2",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 선생님마다 편차가 심함",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "5",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "질문하기 편함",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "과제량이 부담스러움",
      "초보자가 따라가기 어려움",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "일단 저는 부산에 있는 학원에 다니다가 정시특강 시즌에는 본원으로 이동하여 실기를 진행했습니다. 분원과 본원 간의 수업 퀄 차이가 많이 나요. 정보력도 분원이 많이 밀리는게 느껴졌습니다… 본원의 피드백과 수업스타일은 저와 잘 맞아서 3수 내내 학원을 옮기지 않고 쭉 다녔어요!",
    detail: "일단 저는 부산에 있는 학원에 다니다가 정시특강 시즌에는 본원으로 이동하여 실기를 진행했습니다. 분원과 본원 간의 수업 퀄 차이가 많이 나요. 정보력도 분원이 많이 밀리는게 느껴졌습니다… 본원의 피드백과 수업스타일은 저와 잘 맞아서 3수 내내 학원을 옮기지 않고 쭉 다녔어요!",
    likes: 0,
    pros: "질문하기 편함, 자료/시범이 도움됨, 개별 관리가 잘됨, 실전 감각을 키우기 좋음",
    cons: "과제량이 부담스러움, 초보자가 따라가기 어려움, 입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 선생님마다 편차가 심함",
    createdAt: "2026-06-13T01:18:16+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 23,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-023",
    academyId: "daegu-artpoem-art",
    academyName: "아트포엠미술학원 대구",
    academyNameRaw: "대구아트포엠",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "6개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "서울과학기술대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "서울과학기술대학교"
    ],
    schoolTextRaw: "국민대 과기대",
    atmosphere: "4",
    rating: 4,
    feedbackStyle: "차분하고 존중하는 분위기였음, 친절하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "소수정예 수업으로 이루어졌고 개인의 부족한 역량을 세심하게 피드백 받아 발전시킬 수 있었다. 스스로 생각하는 힘을 기를 수 있었으며 전체적인 학원 분위기도 자유로움과 동시에 집중할 수 있었다. 다양한 자료와 문제를 통해서 역량을 키울 수 있었던 학원이였다.",
    detail: "소수정예 수업으로 이루어졌고 개인의 부족한 역량을 세심하게 피드백 받아 발전시킬 수 있었다. 스스로 생각하는 힘을 기를 수 있었으며 전체적인 학원 분위기도 자유로움과 동시에 집중할 수 있었다. 다양한 자료와 문제를 통해서 역량을 키울 수 있었던 학원이였다.",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음",
    teacherStyle: "차분하고 존중하는 분위기였음, 친절하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-13T02:15:58+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 24,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-024",
    academyId: "daegu-suseong-cloud",
    academyName: "수성클라우드미술학원",
    academyNameRaw: "대구 수성 클라우드 학원",
    writerStatus: "대학생",
    attendedYear: "2022-2024",
    attendedPeriod: "3년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "한국예술종합학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "한국예술종합학교"
    ],
    schoolTextRaw: "국민대 한예종 / but 기디인원이 훨씬 많음",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "2학년때 아이디어를 열어줄 수 있는 방향으로 수업이 진행돼서 좋다. 틀에박힌 사고만할 줄 알아서 기소를 처음 할 때 너무 힘들었는데 지금생각해보니 엄청 입시스러운 수업이 아니라 어느정도 실험적인 연습도 시켜서 전반적인 조형감각을 키우는데 도움이 됐다. 3학년으로 넘어와서는 서로간의 그림을 많이 볼 수 있게 그림을 강평이후에도 깔아두는 등의 경우가 많아서 서로서로의 그림을 보면서 실력이 많이늘었다.",
    detail: "2학년때 아이디어를 열어줄 수 있는 방향으로 수업이 진행돼서 좋다. 틀에박힌 사고만할 줄 알아서 기소를 처음 할 때 너무 힘들었는데 지금생각해보니 엄청 입시스러운 수업이 아니라 어느정도 실험적인 연습도 시켜서 전반적인 조형감각을 키우는데 도움이 됐다. 3학년으로 넘어와서는 서로간의 그림을 많이 볼 수 있게 그림을 강평이후에도 깔아두는 등의 경우가 많아서 서로서로의 그림을 보면서 실력이 많이늘었다.",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음",
    cons: "특별히 없음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-13T02:16:07+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 25,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-025",
    academyId: "gangnam-cloud-art",
    academyName: "클라우드미술학원 강남",
    academyNameRaw: "선릉 클라우드 학원",
    writerStatus: "대학생",
    attendedYear: "2024-2025초",
    attendedPeriod: "정특기간 (2개월)",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대",
    atmosphere: "2",
    rating: 5,
    feedbackStyle: "빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "집중이 잘되는 분위기임",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "정시특강때만 다녔어서 그런지 비교적 템포가 빠른 수업. 시험을치는게 대부분이었다. 실기력이 어느정도 올라온 상태에서 실전감각을 잡기에는 좋았다. 재수n수가 많아서 실전감각을 뺏어오기 좋음. 인원수가 확실히 많다보니 많은 사례를 볼 수 있다는게 장점. 선생님마다 스타일이 다르다. 맞는 스타일의 선생님 수업을 듣게 중요할 것 같다. 지친 정특기간에 강평을 재밌게 해주셔서 나름 숨통이 트였던 학원이고 실제 실기장에서도 멘탈이 흔들리지 않게 확실한 풀이 루틴이 있어서 도움이 많이됐다",
    detail: "정시특강때만 다녔어서 그런지 비교적 템포가 빠른 수업. 시험을치는게 대부분이었다. 실기력이 어느정도 올라온 상태에서 실전감각을 잡기에는 좋았다. 재수n수가 많아서 실전감각을 뺏어오기 좋음. 인원수가 확실히 많다보니 많은 사례를 볼 수 있다는게 장점. 선생님마다 스타일이 다르다. 맞는 스타일의 선생님 수업을 듣게 중요할 것 같다. 지친 정특기간에 강평을 재밌게 해주셔서 나름 숨통이 트였던 학원이고 실제 실기장에서도 멘탈이 흔들리지 않게 확실한 풀이 루틴이 있어서 도움이 많이됐다",
    likes: 0,
    pros: "집중이 잘되는 분위기임, 실전 감각을 키우기 좋음",
    cons: "초보자가 따라가기 어려움",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    createdAt: "2026-06-13T02:21:58+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 26,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-026",
    academyId: "gangnam-creation-morning-art",
    academyName: "창조의아침미술학원 강남",
    academyNameRaw: "대구창조의아침",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "그림의 기본기를 탄탄하게 다질 수 있었던 학원이였다. 원장님께서 직접 시범과 수정을 해 주시며 크리틱도 꼼꼼하게 봐주셔서 많은 도움이 되었다. 특히 소묘하는 법과 연필 선을 살리는 법 등 그림을 그리는 방법을 제대로 배울 수 있었던 학원이였다.\n수업 분위기는 자유로운 편이고 칭찬을 많이 해주시며 북돋아주는 분위기이다. 다른 아이디어나 정답을 먼저 보기보다는 스스로 생각하는 힘을 강하게 기르는 수업이였다.",
    detail: "그림의 기본기를 탄탄하게 다질 수 있었던 학원이였다. 원장님께서 직접 시범과 수정을 해 주시며 크리틱도 꼼꼼하게 봐주셔서 많은 도움이 되었다. 특히 소묘하는 법과 연필 선을 살리는 법 등 그림을 그리는 방법을 제대로 배울 수 있었던 학원이였다.\n수업 분위기는 자유로운 편이고 칭찬을 많이 해주시며 북돋아주는 분위기이다. 다른 아이디어나 정답을 먼저 보기보다는 스스로 생각하는 힘을 강하게 기르는 수업이였다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 자료/시범이 도움됨",
    cons: "특별히 없음",
    recommendedFor: "체험 수업 후 결정 추천",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    createdAt: "2026-06-13T02:24:14+09:00",
    status: "held",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 27,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-027",
    academyId: "busan-saha-b2b",
    academyName: "비투비미술학원 사하",
    academyNameRaw: "부산 사하 비투비학원",
    writerStatus: "대학생",
    attendedYear: "2021-2023",
    attendedPeriod: "약 2-3년",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "기디 중심",
    atmosphere: "3",
    rating: 1,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 피드백이 감정적으로 느껴질 때가 있음",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "피드백이 감정적으로 느껴질 때가 있음"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "기초디자인 중심이라 기초소양 수업은 굉장히 부실함. 학원에서 학생의 실기력을 올려준다는 느낌보다는 원래 잘하는 학생만 계속 잘 따라가는 느낌임. 기초소양에 대한 입시정보, 입결정보가 많이 없다보니 허황된 무언가를 따라가는 느낌이라 심적으로 많이 힘들었음. 괜찮은 유명한 학원들은 거리가 몇시간 걸렸기에 체력적, 시간적 관리가 힘들 것 같아 옮기지 못했으나 옮길 수만 있었다면 빠르게 옮겼을 것 같은 학원임. 하지만 기초디자인 수업은 체계적인 편.",
    detail: "기초디자인 중심이라 기초소양 수업은 굉장히 부실함. 학원에서 학생의 실기력을 올려준다는 느낌보다는 원래 잘하는 학생만 계속 잘 따라가는 느낌임. 기초소양에 대한 입시정보, 입결정보가 많이 없다보니 허황된 무언가를 따라가는 느낌이라 심적으로 많이 힘들었음. 괜찮은 유명한 학원들은 거리가 몇시간 걸렸기에 체력적, 시간적 관리가 힘들 것 같아 옮기지 못했으나 옮길 수만 있었다면 빠르게 옮겼을 것 같은 학원임. 하지만 기초디자인 수업은 체계적인 편.",
    likes: 0,
    pros: "특별히 없음",
    cons: "입결·합격 사례 설명이 과장되어 보였음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 피드백이 감정적으로 느껴질 때가 있음",
    createdAt: "2026-06-13T02:29:00+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 28,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-028",
    academyId: "gangnam-godo-art",
    academyName: "고도미술학원 강남",
    academyNameRaw: "강남 강남고도미술학원",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "약 6개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "이화여자대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "이화여자대학교"
    ],
    schoolTextRaw: "서울대, 이대 중심",
    atmosphere: "4",
    rating: 4,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "정말 필수적인 기본기를 잘 알려주심. 잘 따라가지 못한다 싶으면 바로 피드백을 주시고 이를 어떻게 해야할 지에 대해 명확히 설명해주셔서 실력 향상이 빠르게 됨. 또한 커리큘럼이 명확히 있어 항상 목적의식을 지니고 열심히 실기에 임할 수 있었음. 대학입시 준비임에도 무언가를 배운다는 느낌을 받았었음.",
    detail: "정말 필수적인 기본기를 잘 알려주심. 잘 따라가지 못한다 싶으면 바로 피드백을 주시고 이를 어떻게 해야할 지에 대해 명확히 설명해주셔서 실력 향상이 빠르게 됨. 또한 커리큘럼이 명확히 있어 항상 목적의식을 지니고 열심히 실기에 임할 수 있었음. 대학입시 준비임에도 무언가를 배운다는 느낌을 받았었음.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    createdAt: "2026-06-13T02:48:33+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 29,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-029",
    academyId: "gangdong-cloud-art",
    academyName: "클라우드미술학원 강동",
    academyNameRaw: "강동 클라우드",
    writerStatus: "대학생",
    attendedYear: "2025",
    attendedPeriod: "2년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "기초디자인 중심",
    atmosphere: "4",
    rating: 3,
    feedbackStyle: "학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함"
    ],
    concernTags: [
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: ".",
    detail: ".",
    likes: 0,
    pros: "질문하기 편함",
    cons: "학원 분위기가 나와 맞지 않았음",
    recommendedFor: "스스로 질문해야 놓치지 않음",
    teacherStyle: "학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-13T07:09:28+09:00",
    status: "hidden",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 30,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-030",
    academyId: "ipsami-art",
    academyName: "입사미 미술학원",
    academyNameRaw: "선정릉 입사미",
    writerStatus: "대학생",
    attendedYear: "2022~2023",
    attendedPeriod: "2년",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "홍익대학교"
    ],
    reviewSchoolTagsRaw: [
      "홍익대학교"
    ],
    schoolTextRaw: "홍익대",
    atmosphere: "4",
    rating: 3,
    feedbackStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 말투가 직설적인 편임",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "입시 정보가 많음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "홍대 위주 관리식이라 나머지 학교에 대한 부분은 여타 학원들과 비슷한 것 같음. 전형적인 상담 시스템으로 고객 유입 (이정도면 할 수 있디 등등) 선생님들은 정 많고 친절하심. 인력이 실기보다 서류 면접 집중되어있어서 이 점 유의해야함",
    detail: "홍대 위주 관리식이라 나머지 학교에 대한 부분은 여타 학원들과 비슷한 것 같음. 전형적인 상담 시스템으로 고객 유입 (이정도면 할 수 있디 등등) 선생님들은 정 많고 친절하심. 인력이 실기보다 서류 면접 집중되어있어서 이 점 유의해야함",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 입시 정보가 많음",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 체험 수업 후 결정 추천",
    teacherStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 말투가 직설적인 편임",
    createdAt: "2026-06-13T10:22:53+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 31,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-031",
    academyId: "gyeonggi-yongin-dongbaek-greensum",
    academyName: "용인 동백 그린섬 미술학원",
    academyNameRaw: "동백그린섬",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대",
    atmosphere: "4",
    rating: 5,
    feedbackStyle: "빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "기초소양을 처음 배우신다면 정말 추천하는 곳입니다. 입시를 위해 학원을 다니시려고 한다면 그 목적에 정말 적합한 곳이라고 할 수 있을 것 같습니다. 다른 것들은 조금 제쳐두더라도 시험에 필요한 부분들을 잘 골라 가르쳐주시고 미흡한 부분은 간단명료하게 집어 고쳐나갈 수 있게 도와주십니다.",
    detail: "기초소양을 처음 배우신다면 정말 추천하는 곳입니다. 입시를 위해 학원을 다니시려고 한다면 그 목적에 정말 적합한 곳이라고 할 수 있을 것 같습니다. 다른 것들은 조금 제쳐두더라도 시험에 필요한 부분들을 잘 골라 가르쳐주시고 미흡한 부분은 간단명료하게 집어 고쳐나갈 수 있게 도와주십니다.",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨, 개별 관리가 잘됨",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    createdAt: "2026-06-13T10:40:49+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 32,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-032",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    academyNameRaw: "선릉 메타코드 학원",
    writerStatus: "대학생",
    attendedYear: "2024년",
    attendedPeriod: "10개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "건국대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "건국대학교"
    ],
    schoolTextRaw: "국민대 건대 중심",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "꼼꼼하게 설명함",
    feedbackTags: [
      "꼼꼼하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "4",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "커리큘럼이 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "과제 시간을 확보해야 함"
    ],
    summary: "",
    detailOriginal: "개인적으로 느끼기에는 국민대 시험 스타일에 최적화된 커리큘럼이라 열심히 따라가면 배울게 많고 안정적으로 합격할 수 있는 것 같습니다. 내용을 반복적으로 설명해주셔서 기억에도 잘 남습니다. 그런데 스스로 더 질문하거나 연습하지 않으면 따라가기 어려울 수도 있습니다",
    detail: "개인적으로 느끼기에는 국민대 시험 스타일에 최적화된 커리큘럼이라 열심히 따라가면 배울게 많고 안정적으로 합격할 수 있는 것 같습니다. 내용을 반복적으로 설명해주셔서 기억에도 잘 남습니다. 그런데 스스로 더 질문하거나 연습하지 않으면 따라가기 어려울 수도 있습니다",
    likes: 0,
    pros: "기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 커리큘럼이 좋음",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 과제 시간을 확보해야 함",
    teacherStyle: "꼼꼼하게 설명함",
    createdAt: "2026-06-13T12:51:32+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 33,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-033",
    academyId: "gangnam-godo-art",
    academyName: "고도미술학원 강남",
    academyNameRaw: "양재 고도 미술학원",
    writerStatus: "대학생",
    attendedYear: "2023",
    attendedPeriod: "10개월",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "국민대학교"
    ],
    schoolTextRaw: "국민대 서울대중심",
    atmosphere: "2",
    rating: 2,
    feedbackStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "입시 정보가 많음"
    ],
    concernTags: [
      "초보자가 따라가기 어려움",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "정특때 시험보는 실전연습을 거의 안하는 이상한 학원…. 선생님께서 화가 엄청많으시고 소리지르고 장난아닙니다. 답답하신 마음은 알겠는데 설명도 없이 냅다 윽박지르기를 시전하셔서 우는 학생들도 많았습니다. (심어 조교쌤들 한테도 똑같이 화내셔서 쌤들도 우셨음) 물론 애정이 많으셔서 그러신거겠지만 기본 실력없으면 쌤 말을 이해하고 화내신거 반영해서 발전하기가 좀 어렵습니다.",
    detail: "정특때 시험보는 실전연습을 거의 안하는 이상한 학원…. 선생님께서 화가 엄청많으시고 소리지르고 장난아닙니다. 답답하신 마음은 알겠는데 설명도 없이 냅다 윽박지르기를 시전하셔서 우는 학생들도 많았습니다. (심어 조교쌤들 한테도 똑같이 화내셔서 쌤들도 우셨음) 물론 애정이 많으셔서 그러신거겠지만 기본 실력없으면 쌤 말을 이해하고 화내신거 반영해서 발전하기가 좀 어렵습니다.",
    likes: 0,
    pros: "입시 정보가 많음",
    cons: "초보자가 따라가기 어려움, 입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    teacherStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-13T13:06:35+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 34,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요",
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-034",
    academyId: "seolleung-study-and-art",
    academyName: "스터디앤아트미술학원",
    academyNameRaw: "선릉 대치스터디앤아트",
    writerStatus: "대학생",
    attendedYear: "2023",
    attendedPeriod: "2년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "홍익대학교"
    ],
    reviewSchoolTagsRaw: [
      "홍익대학교"
    ],
    schoolTextRaw: "홍익대 중심",
    atmosphere: "4",
    rating: 4,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 선생님마다 편차가 심함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "4",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "선생님들이 편차가 심하다는 선택을 했는데 심한게 아니고 좀 서로 다른 분들이 많았습니다. 꼼꼼하게 알려주시는 선생님도 계셨고, 학생이 추후에 스스로 문제 해결을 잘 수 있도록 유도하는 선생님도 계셨습니다.",
    detail: "선생님들이 편차가 심하다는 선택을 했는데 심한게 아니고 좀 서로 다른 분들이 많았습니다. 꼼꼼하게 알려주시는 선생님도 계셨고, 학생이 추후에 스스로 문제 해결을 잘 수 있도록 유도하는 선생님도 계셨습니다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 질문하기 편함, 학원 분위기가 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 선생님마다 편차가 심함",
    createdAt: "2026-06-13T13:26:12+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 35,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-035",
    academyId: "mokwoo-art-suwon",
    academyName: "목우미술학원",
    academyNameRaw: "목우 미술학원",
    writerStatus: "대학생",
    attendedYear: "2023",
    attendedPeriod: "3년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "경희대학교",
      "단국대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "경희대학교",
      "단국대학교"
    ],
    schoolTextRaw: "경희대, 단국대 등 기초디자인 실기전형 학교 중심",
    atmosphere: "2",
    rating: 3,
    feedbackStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "기본기를 잘 잡아줌",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "선생님마다 스타일 편차가 심해서 원하는 선생님께 수업을 못 받을 수도 있음. 나는 다른 전형 준비를 위해 반 이동을 했고 본인 선택에 따라 반 이동이 가능하지만 전형 변동이 아닌 이상 기존 선생님의 스타일을 적용시킬 수 있어야 발전 가능함. 선생님에 따라 입결이 다를 수 있다는 점 또한 학생들의 불안 요소들 중 하나였음.",
    detail: "선생님마다 스타일 편차가 심해서 원하는 선생님께 수업을 못 받을 수도 있음. 나는 다른 전형 준비를 위해 반 이동을 했고 본인 선택에 따라 반 이동이 가능하지만 전형 변동이 아닌 이상 기존 선생님의 스타일을 적용시킬 수 있어야 발전 가능함. 선생님에 따라 입결이 다를 수 있다는 점 또한 학생들의 불안 요소들 중 하나였음.",
    likes: 0,
    pros: "기본기를 잘 잡아줌, 자료/시범이 도움됨",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-13T14:37:18+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 36,
    moderationFlags: [
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-036",
    academyId: "unmatched-google-form-20260614-review-036",
    academyName: "선릉 디자인학원",
    academyNameRaw: "선릉 디자인학원",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "3개월 미만, 보조강사로 1년 6개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "건국대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "건국대학교"
    ],
    schoolTextRaw: "건국대 중심",
    atmosphere: "2",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "집중이 잘되는 분위기임",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "학생들 각자의 아이디어를 엄청 존중해주고 살리려고 노력하는 학원이었습니다! 타 학원도 다녀봤는데 비교적 아이디어를 선생님께 말하기 쉬운 분위기였고 선생님들도 적극적으로 질문하셨어요 덕분에 다양한 그림을 그릴 수 있었습니다",
    detail: "학생들 각자의 아이디어를 엄청 존중해주고 살리려고 노력하는 학원이었습니다! 타 학원도 다녀봤는데 비교적 아이디어를 선생님께 말하기 쉬운 분위기였고 선생님들도 적극적으로 질문하셨어요 덕분에 다양한 그림을 그릴 수 있었습니다",
    likes: 0,
    pros: "질문하기 편함, 집중이 잘되는 분위기임, 실전 감각을 키우기 좋음",
    cons: "입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 체험 수업 후 결정 추천",
    teacherStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함",
    createdAt: "2026-06-13T14:47:30+09:00",
    status: "held",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 37,
    moderationFlags: [
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-037",
    academyId: "dongdaemun-changa-art",
    academyName: "창조의아침미술학원 동대문",
    academyNameRaw: "동대문 창조의 아침",
    writerStatus: "N수생",
    attendedYear: "2024",
    attendedPeriod: "2년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "골고루 하는것같아요",
    atmosphere: "2",
    rating: 3,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 빠르게 핵심만 짚어줌",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "특정 대학만을 목표로 하기보다는 여러 대학의 입시 정보를 다양하게 접할 수 있어서 좋았습니다. 상담도 필요할 때마다 편하게 받을 수 있어 궁금한 점을 바로 해결할 수 있었고, 학습 방향을 잡는 데 많은 도움이 되었습니다. 무엇보다 보조 선생님과 원장님께서 항상 친절하게 대해주시고 재치 있게 분위기를 이끌어 주셔서 학원에 오는 시간이 부담스럽지 않고 즐겁게 느껴졌습니다.",
    detail: "특정 대학만을 목표로 하기보다는 여러 대학의 입시 정보를 다양하게 접할 수 있어서 좋았습니다. 상담도 필요할 때마다 편하게 받을 수 있어 궁금한 점을 바로 해결할 수 있었고, 학습 방향을 잡는 데 많은 도움이 되었습니다. 무엇보다 보조 선생님과 원장님께서 항상 친절하게 대해주시고 재치 있게 분위기를 이끌어 주셔서 학원에 오는 시간이 부담스럽지 않고 즐겁게 느껴졌습니다.",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임",
    cons: "특별히 없음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 빠르게 핵심만 짚어줌",
    createdAt: "2026-06-13T15:19:06+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 38,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-038",
    academyId: "lab-seolleung-art",
    academyName: "랩미술선릉학원",
    academyNameRaw: "선릉 랩 미술학원",
    writerStatus: "대학생",
    attendedYear: "2023",
    attendedPeriod: "1년",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "건국대학교"
    ],
    reviewSchoolTagsRaw: [
      "건국대학교"
    ],
    schoolTextRaw: "건대",
    atmosphere: "1",
    rating: 1,
    feedbackStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "5",
    classLevel: "상급자에게 적합해요 (초보자 비추)",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "과제량이 부담스러움",
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "과제 시간을 확보해야 함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "시험 전 날까지 풀 시험 한번도 본 적 없고 학생들한테 못 하는 말도 없고.. 원장님이 가르치는곳이라서 컴플레인 걸어도 학생들한테 컴플레인 건 부모님 욕하고.. 학생 몰래 데려가서 멱살잡고 , 학생들이 그림 못 그리면 애들앞에서 자기 강간당하는거 같다고 범죄관련된 욕도 하시고 .. 욕은 진짜 상상이상 이에요. 이거 말고 등등 그래서 학원 다니면서 우울증생긴애들도 꽤많고 공황장애온 친구도 있었어요.. 도움이 되셨으면 좋겠습니다!!\n추가적으로 결과에 대해서 더 말하자면.. 합격률은 10퍼센트 그 언저리고.. 건대 커디 중점 학원이라면서 커디는 한 명도 붙지 못했어요 . 리빙 , 산업도요.. 학원 같이 다니던 학생들도 욕먹으면서 다니면 합격할수있을거같아서 다녔는데 결국 건대 영상영화과 성적 1234\n등만 합격했어요 피드백도 한 번 없었어요..! 특히 일반대는 그냥 진짜 방치시킵니다.. 또 구도에대해 자기들은 특별한 이론이 있다고 그러지만 결국 그냥 패턴에 끼워맞추던거였어요 욕은 진짜 상상이상으로 하고 학교 비하도 서슴없이하고 인격모독도 엄청 심해요 ..",
    detail: "시험 전 날까지 풀 시험 한번도 본 적 없고 학생들한테 못 하는 말도 없고.. 원장님이 가르치는곳이라서 컴플레인 걸어도 학생들한테 컴플레인 건 부모님 욕하고.. 학생 몰래 데려가서 멱살잡고 , 학생들이 그림 못 그리면 애들앞에서 자기 강간당하는거 같다고 범죄관련된 욕도 하시고 .. 욕은 진짜 상상이상 이에요. 이거 말고 등등 그래서 학원 다니면서 우울증생긴애들도 꽤많고 공황장애온 친구도 있었어요.. 도움이 되셨으면 좋겠습니다!!\n추가적으로 결과에 대해서 더 말하자면.. 합격률은 10퍼센트 그 언저리고.. 건대 커디 중점 학원이라면서 커디는 한 명도 붙지 못했어요 . 리빙 , 산업도요.. 학원 같이 다니던 학생들도 욕먹으면서 다니면 합격할수있을거같아서 다녔는데 결국 건대 영상영화과 성적 1234\n등만 합격했어요 피드백도 한 번 없었어요..! 특히 일반대는 그냥 진짜 방치시킵니다.. 또 구도에대해 자기들은 특별한 이론이 있다고 그러지만 결국 그냥 패턴에 끼워맞추던거였어요 욕은 진짜 상상이상으로 하고 학교 비하도 서슴없이하고 인격모독도 엄청 심해요 ..",
    likes: 0,
    pros: "특별히 없음",
    cons: "과제량이 부담스러움, 상담과 실제 수업에서 차이가 느껴짐, 입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 과제 시간을 확보해야 함, 선생님 스타일 확인 필요",
    teacherStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-13T17:32:40+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 39,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요",
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-039",
    academyId: "bundang-neocat-art",
    academyName: "네오캣미술학원 분당",
    academyNameRaw: "분당 정자 네오켓 미술학원",
    writerStatus: "대학생",
    attendedYear: "2023-2025",
    attendedPeriod: "1년6개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교",
      "서울과학기술대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "국민대학교",
      "서울과학기술대학교"
    ],
    schoolTextRaw: "서울대,국민대,과기대",
    atmosphere: "5",
    rating: 3,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "학원 내 분위기는 매우 자유로웠고 학생과 강사가 친빌하게 지내는 분위기였습니다. 보조강사가 돌아다니면서 학생들의 그림에 피드백과 시범을 하고 전임강사는 전체 피드백을 하는 분위기였습니다",
    detail: "학원 내 분위기는 매우 자유로웠고 학생과 강사가 친빌하게 지내는 분위기였습니다. 보조강사가 돌아다니면서 학생들의 그림에 피드백과 시범을 하고 전임강사는 전체 피드백을 하는 분위기였습니다",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 자료/시범이 도움됨",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    createdAt: "2026-06-13T18:08:45+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 40,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-040",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    academyNameRaw: "강남 메타코드",
    writerStatus: "N수생",
    attendedYear: "25",
    attendedPeriod: "1년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "쌤들 수업 분위기나 커리큘럼이 너무 좋았습니다\n기소를 처음시작했는데도 단기간만에 좋은 성적을 낼 수 있었어요! 쌤들도 다 너무 친절하시고 좋아용",
    detail: "쌤들 수업 분위기나 커리큘럼이 너무 좋았습니다\n기소를 처음시작했는데도 단기간만에 좋은 성적을 낼 수 있었어요! 쌤들도 다 너무 친절하시고 좋아용",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음",
    teacherStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함",
    createdAt: "2026-06-13T19:06:28+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 41,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-041",
    academyId: "extra-069-gyeonggi",
    academyName: "분당서현 바우하우스 미술학원",
    academyNameRaw: "미금 바우하우스, 서현 바우하우스",
    writerStatus: "N수생",
    attendedYear: "202,420,252,026",
    attendedPeriod: "2~3년",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "고려대학교",
      "국민대학교",
      "성균관대학교"
    ],
    reviewSchoolTagsRaw: [
      "고려대학교",
      "국민대학교",
      "성균관대학교"
    ],
    schoolTextRaw: "국민대, 고려대, 성균관대",
    atmosphere: "4",
    rating: 1,
    feedbackStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "수업 속도가 빠르게 느껴졌음",
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "서현 바우하우스의 경우, 기초소양 선생님의 기본 실력 자체나 설명 능력은 좋다고 느꼈습니다. 다만 수업 운영 방식에서는 아쉬운 점이 있었습니다.\n\n소수정예 학원이라는 특성 때문인지 대형학원과는 달리 학생 개개인을 봐주시는 장점이 있는 반면, 그만큼 학생마다 받는 관심과 피드백의 편차도 크게 느껴졌습니다.\n저는 개인적인 사정(금전적 문제)으로 ’매일의 모든 수업’에 전부는 참여하지 못한 기간이 있었는데, (정특이 주 7회 매일 있다고 하면 주 4회 이렇게 나갔었습니다.) 참여하지 못한 수업에서 놓친 기본 개념이나 진행 내용을 여쭤봐도 다시 설명받기 어려웠습니다.\n그리고 물론 학원 입장에서 출석률과 성실성을 중요하게 보는 것은 이해하지만, ’수업 참여율’을 ’성실도’와 같게 취급하시고, 이로 학생의 태도나 의지를 판단하는 분위기가 느껴져 속상했습니다.\n\n당시 저는 부족한 부분을 따라가기 위해 질문도 많이 드리고 혼자 학원에 남아 개인 작업도 꾸준히 했지만, 다소 부족한 성적에 점차 ‘이 학생은 붙이기 어렵다’는 전제를 두고 지도받는 느낌 또한 받았었습니다. 반대로 성적이 좋은 일부 학생들에게는 적극적으로 방향을 제시하고 ‘붙여야겠다‘ 하는 마음으로 밀어주는 모습이 보여 상대적인 박탈감을 느끼기도 했습니다.\n특히 피드백 과정에서 학생별 응답의 구체성이나 밀도 차이가 체감되었습니다. 제 경우에는 명확한 개선 방향이나 실질적인 피드백을 받기 어려웠고, 어떤 때는 한 주 정도의 일정 기간 동안 제 그림 자체를 전혀 봐주시지 않은 적도 있었습니다. 당시 특강 수업은 비용 부담도 적지 않았기에, 지도 없이 혼자 작업하는 시간이 길어질수록 나 혼자 그림 그리려고 비싼 돈 내서 학원을 다녀야되나? 싶은 답답함이 컸고 실제로 학원 측에도 관련 내용을 전달한 적이 있습니다.\n또 입시 측면에서는 학교별 전략이나 유형별 전문성이 강하게 느껴지지는 않았습니다. 성균관대 국민대 고려대 정도가 적합한 곳이고, 다른 대학(건대 등)목표로 하는 경우에는 다른 학원이 더 적합할 수도 있겠다는 생각이 들었습니다. 이전에 건국대 유형들을 겉핥기식으로 전문성 없이 준비했다가 학원 학생들 모두 광탈한 경험이 있네요.\n전반적으로는 ‘대학 입시 합격을 위한 곳’보다는 기초소양의 기초 실력과 기본기를 다지는 데 강점이 있는 학원이라는 인상을 받았습니다.\n입시 상담 자체도 ‘대학에 대한 자세한 정보‘라던가, ‘변화한 입시 정보‘ 등을 상세하게 알려주시지 않으셨습니다. 잘 모르시는 것도 같았고, 대충 대답하시는 느낌을 지울 수 없습니다. 한 번은 이번년도에 00대 입시가 조금 않았는지 여쭈어보니 아니라고, 전과 같으니 성적만 잘 챙기라고 하셨었는데, 역시 제 스스로 어렵게 다시 정보를 찾아보니 ’성적 산출 비율‘과 ‘배수‘와 관련해 큰 변화가 있었습니다. 소수정예였지만 개인별 입시 전략도 체계적이지 못했고, 넣었을때 100% 떨어지는 학과나 학교도 너가 원하면 쓰라고 하시며 ‘실질적인 입시 성공’으로 학생을 이끌 생각이 없어 보였습니다. 이와 비슷한 경험이 반복되면서 학원에 대한 신뢰가 점점 떨어졌습니다.\n결론적으로 선생님의 실력 자체를 부정하는 것은 아니지만, 학생마다 체감하는 지도 경험의 차이가 크고 출석이나 현재 성과에 따라 지원 강도가 달라질 수 있다는 점은 등록 전에 고려해보면 좋겠습니다.",
    detail: "서현 바우하우스의 경우, 기초소양 선생님의 기본 실력 자체나 설명 능력은 좋다고 느꼈습니다. 다만 수업 운영 방식에서는 아쉬운 점이 있었습니다.\n\n소수정예 학원이라는 특성 때문인지 대형학원과는 달리 학생 개개인을 봐주시는 장점이 있는 반면, 그만큼 학생마다 받는 관심과 피드백의 편차도 크게 느껴졌습니다.\n저는 개인적인 사정(금전적 문제)으로 ’매일의 모든 수업’에 전부는 참여하지 못한 기간이 있었는데, (정특이 주 7회 매일 있다고 하면 주 4회 이렇게 나갔었습니다.) 참여하지 못한 수업에서 놓친 기본 개념이나 진행 내용을 여쭤봐도 다시 설명받기 어려웠습니다.\n그리고 물론 학원 입장에서 출석률과 성실성을 중요하게 보는 것은 이해하지만, ’수업 참여율’을 ’성실도’와 같게 취급하시고, 이로 학생의 태도나 의지를 판단하는 분위기가 느껴져 속상했습니다.\n\n당시 저는 부족한 부분을 따라가기 위해 질문도 많이 드리고 혼자 학원에 남아 개인 작업도 꾸준히 했지만, 다소 부족한 성적에 점차 ‘이 학생은 붙이기 어렵다’는 전제를 두고 지도받는 느낌 또한 받았었습니다. 반대로 성적이 좋은 일부 학생들에게는 적극적으로 방향을 제시하고 ‘붙여야겠다‘ 하는 마음으로 밀어주는 모습이 보여 상대적인 박탈감을 느끼기도 했습니다.\n특히 피드백 과정에서 학생별 응답의 구체성이나 밀도 차이가 체감되었습니다. 제 경우에는 명확한 개선 방향이나 실질적인 피드백을 받기 어려웠고, 어떤 때는 한 주 정도의 일정 기간 동안 제 그림 자체를 전혀 봐주시지 않은 적도 있었습니다. 당시 특강 수업은 비용 부담도 적지 않았기에, 지도 없이 혼자 작업하는 시간이 길어질수록 나 혼자 그림 그리려고 비싼 돈 내서 학원을 다녀야되나? 싶은 답답함이 컸고 실제로 학원 측에도 관련 내용을 전달한 적이 있습니다.\n또 입시 측면에서는 학교별 전략이나 유형별 전문성이 강하게 느껴지지는 않았습니다. 성균관대 국민대 고려대 정도가 적합한 곳이고, 다른 대학(건대 등)목표로 하는 경우에는 다른 학원이 더 적합할 수도 있겠다는 생각이 들었습니다. 이전에 건국대 유형들을 겉핥기식으로 전문성 없이 준비했다가 학원 학생들 모두 광탈한 경험이 있네요.\n전반적으로는 ‘대학 입시 합격을 위한 곳’보다는 기초소양의 기초 실력과 기본기를 다지는 데 강점이 있는 학원이라는 인상을 받았습니다.\n입시 상담 자체도 ‘대학에 대한 자세한 정보‘라던가, ‘변화한 입시 정보‘ 등을 상세하게 알려주시지 않으셨습니다. 잘 모르시는 것도 같았고, 대충 대답하시는 느낌을 지울 수 없습니다. 한 번은 이번년도에 00대 입시가 조금 않았는지 여쭈어보니 아니라고, 전과 같으니 성적만 잘 챙기라고 하셨었는데, 역시 제 스스로 어렵게 다시 정보를 찾아보니 ’성적 산출 비율‘과 ‘배수‘와 관련해 큰 변화가 있었습니다. 소수정예였지만 개인별 입시 전략도 체계적이지 못했고, 넣었을때 100% 떨어지는 학과나 학교도 너가 원하면 쓰라고 하시며 ‘실질적인 입시 성공’으로 학생을 이끌 생각이 없어 보였습니다. 이와 비슷한 경험이 반복되면서 학원에 대한 신뢰가 점점 떨어졌습니다.\n결론적으로 선생님의 실력 자체를 부정하는 것은 아니지만, 학생마다 체감하는 지도 경험의 차이가 크고 출석이나 현재 성과에 따라 지원 강도가 달라질 수 있다는 점은 등록 전에 고려해보면 좋겠습니다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 자료/시범이 도움됨",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 수업 속도가 빠르게 느껴졌음, 초보자가 따라가기 어려움",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-13T22:01:36+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 42,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-042",
    academyId: "hongdae-greenseom-art",
    academyName: "홍대앞 그린섬미술학원",
    academyNameRaw: "홍대 그린섬",
    writerStatus: "대학생",
    attendedYear: "2021",
    attendedPeriod: "약 6개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교",
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교",
      "국민대학교"
    ],
    schoolTextRaw: "국민대, 서울대",
    atmosphere: "2",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "선생님마다 많이 다른데, 저는 노수인쌤 반에서 수강했었고 학생들을 정말 존중해주시고 상호 존댓말을 사용하십니다. 절대 감정적이지 않으셔서 좋았습니다. 피드백과 커리큘럼은 당연히 너무 좋습니다!\n혜지쌤 반에선 학생이 아니라 보조강사로 일해봤는데, 일단 일하는걸 귀찮아 하신다고 느껴진게 보조강사들만 일하게 해놓고 본인과 부담임쌤은 방에 들어가서 몇시간동안 떠들다가 애들 그림 다 그릴때쯤 피드백만 하러 나오심… 피드백도 학생 개인마다 봐주기보단 전체적으로 얘기하고 좀 못그리는 학생거는 자세한 피드백 없이 못그린다고만 말하는 느낌..? 종종 지각도 하시고… 비추!!",
    detail: "선생님마다 많이 다른데, 저는 노수인쌤 반에서 수강했었고 학생들을 정말 존중해주시고 상호 존댓말을 사용하십니다. 절대 감정적이지 않으셔서 좋았습니다. 피드백과 커리큘럼은 당연히 너무 좋습니다!\n혜지쌤 반에선 학생이 아니라 보조강사로 일해봤는데, 일단 일하는걸 귀찮아 하신다고 느껴진게 보조강사들만 일하게 해놓고 본인과 부담임쌤은 방에 들어가서 몇시간동안 떠들다가 애들 그림 다 그릴때쯤 피드백만 하러 나오심… 피드백도 학생 개인마다 봐주기보단 전체적으로 얘기하고 좀 못그리는 학생거는 자세한 피드백 없이 못그린다고만 말하는 느낌..? 종종 지각도 하시고… 비추!!",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    createdAt: "2026-06-13T23:17:38+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 43,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-043",
    academyId: "gangnam-creation-morning-art",
    academyName: "창조의아침미술학원 강남",
    academyNameRaw: "홍대 창조의 아침",
    writerStatus: "대학생",
    attendedYear: "2020-2021",
    attendedPeriod: "고2 가을 - 고3 여름 약 1년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교"
    ],
    schoolTextRaw: "서울대 중심인 것 같지만 합격률은 모르겠습니다",
    atmosphere: "1",
    rating: 1,
    feedbackStyle: "스스로 생각하게 유도함, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "스스로 생각하게 유도함",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "4",
    classLevel: "상급자에게 적합해요 (초보자 비추)",
    goodTags: [
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "과제량이 부담스러움",
      "초보자가 따라가기 어려움",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "수완쌤 반에서 들었습니다! 장점은 원장쌤 담임쌤 부담임쌤 모두 그림을 정말정말 잘 그리십니다. 그러나 입시처럼 빠르게 그려야 하는 상황에 맞는지는 모르겠습니다.\n그림 실력 자체는 정말 좋으나 입시엔 맞지 않고 커리큘럼도 좋지 않습니다. 제가 다녔던 년도엔 수완쌤 반 거의 전체가 불합격했고 2명 정도는 극하향으로 합격했다고 들었습니다.\n단점은 수완쌤(담임)이 너무 감정적입니다. 질문하는 것도 눈치가 보입니다… 학생들이 숙제 관련해서 수업 없는 날에 카톡으로 질문을 하면 그냥 수업날까지 답장을 안 하십니다. 멘탈 관리에는 도움이 전혀 안 되고 선생님이 예민하고 감정적이다 보니 학생들도 눈치만 보고 같이 멘탈이 약해지는 느낌! 등원하면 선생님 기분부터 살피는게 루틴이었습니다\n\n그리고 제가 학원을 옮긴 계기는… 수완쌤이 개인 상담시간에 제 친구들에게 제가 싸가지없다고 욕을 하고 다녔기 때문에…… 제가 옮길 때 다른 친구들까지 옮겨서 학생 절반이 빠지는 사건이 있었습니다",
    detail: "수완쌤 반에서 들었습니다! 장점은 원장쌤 담임쌤 부담임쌤 모두 그림을 정말정말 잘 그리십니다. 그러나 입시처럼 빠르게 그려야 하는 상황에 맞는지는 모르겠습니다.\n그림 실력 자체는 정말 좋으나 입시엔 맞지 않고 커리큘럼도 좋지 않습니다. 제가 다녔던 년도엔 수완쌤 반 거의 전체가 불합격했고 2명 정도는 극하향으로 합격했다고 들었습니다.\n단점은 수완쌤(담임)이 너무 감정적입니다. 질문하는 것도 눈치가 보입니다… 학생들이 숙제 관련해서 수업 없는 날에 카톡으로 질문을 하면 그냥 수업날까지 답장을 안 하십니다. 멘탈 관리에는 도움이 전혀 안 되고 선생님이 예민하고 감정적이다 보니 학생들도 눈치만 보고 같이 멘탈이 약해지는 느낌! 등원하면 선생님 기분부터 살피는게 루틴이었습니다\n\n그리고 제가 학원을 옮긴 계기는… 수완쌤이 개인 상담시간에 제 친구들에게 제가 싸가지없다고 욕을 하고 다녔기 때문에…… 제가 옮길 때 다른 친구들까지 옮겨서 학생 절반이 빠지는 사건이 있었습니다",
    likes: 0,
    pros: "자료/시범이 도움됨",
    cons: "과제량이 부담스러움, 초보자가 따라가기 어려움, 입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요, 체험 수업 후 결정 추천",
    teacherStyle: "스스로 생각하게 유도함, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-13T23:33:38+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 44,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요",
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-044",
    academyId: "seolleung-artm-art",
    academyName: "아트엠미술학원",
    academyNameRaw: "선릉 아트엠",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "고려대학교"
    ],
    reviewSchoolTagsRaw: [
      "고려대학교"
    ],
    schoolTextRaw: "고려대 중심",
    atmosphere: "2",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 친절하게 설명함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "비용/수업 방식으로 상담 때 확인 추천"
    ],
    summary: "",
    detailOriginal: "학생들이 각자 잘하는 것은 살리고, 단점은 보완할 수 있는 방향으로 피드백을 잘해주십니다. 또 고려대 그림 특성상 특색있는 포인트를 주어 구도를 짜는 것이 핵심인데 정물에 스토리를 넣어 그리는 방향으로 가르쳐주신 점이 좋았고 잘 맞았습니다.",
    detail: "학생들이 각자 잘하는 것은 살리고, 단점은 보완할 수 있는 방향으로 피드백을 잘해주십니다. 또 고려대 그림 특성상 특색있는 포인트를 주어 구도를 짜는 것이 핵심인데 정물에 스토리를 넣어 그리는 방향으로 가르쳐주신 점이 좋았고 잘 맞았습니다.",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음",
    cons: "특별히 없음",
    recommendedFor: "비용/수업 방식으로 상담 때 확인 추천",
    teacherStyle: "차분하고 존중하는 분위기였음, 친절하게 설명함",
    createdAt: "2026-06-13T23:41:43+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 45,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-045",
    academyId: "noryangjin-changa-art",
    academyName: "창조의아침미술학원 노량진",
    academyNameRaw: "노량진 창조의 아침",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "4년 반",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "없어요",
    atmosphere: "5",
    rating: 2,
    feedbackStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "중1-고2 까지 길게 다녔습니다!\n3명의 선생님을 거쳤는데 담임쌤과 보조쌤 대체로 다들 그림 실력이 좋지 않으십니다. 고3은 안 다녀서 잘 모르겠지만… 딱히 커리큘럼도 없습니다. 당시 상위권 대학을 준비하는 학생들이 몇명 없었고 반도 따로 없었습니다. 절 위해 반을 개설(?)해준다고 해서 다른 학원으로 ㅌㅌ했습니다\n\n그냥 놀러가는 느낌으로 다녔습니다 제일 재밌긴 했습니다… 보조쌤들도 같이 놀았습니다…\n\n종종 중위권 대학 합격시키고 젤많이 가는건 하위권&전문대인것 같습니다\n\n장점이 아예 없으므로 모두에게 비추합니다!",
    detail: "중1-고2 까지 길게 다녔습니다!\n3명의 선생님을 거쳤는데 담임쌤과 보조쌤 대체로 다들 그림 실력이 좋지 않으십니다. 고3은 안 다녀서 잘 모르겠지만… 딱히 커리큘럼도 없습니다. 당시 상위권 대학을 준비하는 학생들이 몇명 없었고 반도 따로 없었습니다. 절 위해 반을 개설(?)해준다고 해서 다른 학원으로 ㅌㅌ했습니다\n\n그냥 놀러가는 느낌으로 다녔습니다 제일 재밌긴 했습니다… 보조쌤들도 같이 놀았습니다…\n\n종종 중위권 대학 합격시키고 젤많이 가는건 하위권&전문대인것 같습니다\n\n장점이 아예 없으므로 모두에게 비추합니다!",
    likes: 0,
    pros: "특별히 없음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요, 체험 수업 후 결정 추천",
    teacherStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-13T23:43:05+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 46,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-046",
    academyId: "seolleung-iam-art",
    academyName: "아이엠미술학원",
    academyNameRaw: "선릉 아이엠",
    writerStatus: "대학생",
    attendedYear: "2020",
    attendedPeriod: "1년 반",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "2",
    rating: 1,
    feedbackStyle: "빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "대형학원이라 관리도 안 되는데 학원장이 사탕발림해서 묶어두는 케이스. 국민대 합격률이 높지만 그건 그만큼 학생수가 많아서 그렇고요. 옛날에야 잘 붙였지 이제는 또 아닌 듯한... 정특 때 많은 학생들의 그림을 보며 보는 눈은 기를 수 있지만, 감정적인 교사진 때문에 스트레스 받았습니다. 당시 담임이었던 선생님께서 관두셨다고는 들었지만 처음부터 끝까지 좋은 기억이라고는 하나도 없네요..",
    detail: "대형학원이라 관리도 안 되는데 학원장이 사탕발림해서 묶어두는 케이스. 국민대 합격률이 높지만 그건 그만큼 학생수가 많아서 그렇고요. 옛날에야 잘 붙였지 이제는 또 아닌 듯한... 정특 때 많은 학생들의 그림을 보며 보는 눈은 기를 수 있지만, 감정적인 교사진 때문에 스트레스 받았습니다. 당시 담임이었던 선생님께서 관두셨다고는 들었지만 처음부터 끝까지 좋은 기억이라고는 하나도 없네요..",
    likes: 0,
    pros: "입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 체험 수업 후 결정 추천",
    teacherStyle: "빠르게 핵심만 짚어줌, 스스로 생각하게 유도함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-14T04:38:53+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 47,
    moderationFlags: [
      "민감한 지도/언어 표현 검토 필요",
      "개인 식별 가능 표현 검토 필요",
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-047",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    academyNameRaw: "선릉 메타코드",
    writerStatus: "대학생",
    attendedYear: "2025",
    attendedPeriod: "4개월",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대중심",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음"
    ],
    concernTags: [
      "수업 속도가 빠르게 느껴졌음",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "처음에 갔을 땐 입시결과가 굉장히 과장되었다고 생각해서 의심하면서 들어갔는데, 막상 들어가니 입시결과가 대부분 진짜임을 알게되었다. 또 학원 다닐 때 가장 좋았던 점은 무엇보다 주변 친구들의 실력이었다. 아무리 선생님들이 시범과 수업을 잘해주셔도 친구들의 좋은 실력만큼 동기부여가 되고 또 도움이 되는 건 없는 것 같다. 메타코드 다니면서 확실히 왜 합격자가 많이 나오는지 알게되었다.\n일단 잘하는 애들이 기본기가 쌓인 상태에서 들어가기도 하고, n수도 많고, 또 그 잘하는 애들을 보며 실력이 같이 늘고, 많은 입시 정보량 때문인 것 같다.",
    detail: "처음에 갔을 땐 입시결과가 굉장히 과장되었다고 생각해서 의심하면서 들어갔는데, 막상 들어가니 입시결과가 대부분 진짜임을 알게되었다. 또 학원 다닐 때 가장 좋았던 점은 무엇보다 주변 친구들의 실력이었다. 아무리 선생님들이 시범과 수업을 잘해주셔도 친구들의 좋은 실력만큼 동기부여가 되고 또 도움이 되는 건 없는 것 같다. 메타코드 다니면서 확실히 왜 합격자가 많이 나오는지 알게되었다.\n일단 잘하는 애들이 기본기가 쌓인 상태에서 들어가기도 하고, n수도 많고, 또 그 잘하는 애들을 보며 실력이 같이 늘고, 많은 입시 정보량 때문인 것 같다.",
    likes: 0,
    pros: "기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 입시 정보가 많음",
    cons: "수업 속도가 빠르게 느껴졌음, 입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    createdAt: "2026-06-14T06:13:13+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 48,
    moderationFlags: [
      "입결/성과 관련 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260614-review-048",
    academyId: "gangdong-cloud-art",
    academyName: "클라우드미술학원 강동",
    academyNameRaw: "강동 클라우드 미술학원",
    writerStatus: "고3",
    attendedYear: "2025-2026",
    attendedPeriod: "1년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "동덕여자대학교",
      "상명대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "동덕여자대학교",
      "상명대학교"
    ],
    schoolTextRaw: "상명대, 국민대, 동덕여대 등..",
    atmosphere: "4",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "과제 시간을 확보해야 함",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "일단 학원 제일 큰 장점은 서로 경쟁하는 분위기가 아닌 모두다 친해서 다같이 으쌰으쌰하는 분위기가 큰것같습니다 사람이 적은편이 아닌데도 안친한 사람 하나없이 모두 친하게 지내는것이 좋다고생각합니다 선생님들도 학생들 한명한명 다 친하고 선생님들끼리도 다 친하셔서 좋습니다! 조교쌤들을 실제로 학원에서 입시를 다 끝내신분들로만 모집하셔서 친밀감이 있고 학원에 대해 잘 아신다는 점이 좋습니다 상담을 자주하고 선생님들이 입시에 대해 항상 같이 고민을 해주십니다! 그림도 진짜 너무 잘그리시는거같아서 너무 만족해요!!",
    detail: "일단 학원 제일 큰 장점은 서로 경쟁하는 분위기가 아닌 모두다 친해서 다같이 으쌰으쌰하는 분위기가 큰것같습니다 사람이 적은편이 아닌데도 안친한 사람 하나없이 모두 친하게 지내는것이 좋다고생각합니다 선생님들도 학생들 한명한명 다 친하고 선생님들끼리도 다 친하셔서 좋습니다! 조교쌤들을 실제로 학원에서 입시를 다 끝내신분들로만 모집하셔서 친밀감이 있고 학원에 대해 잘 아신다는 점이 좋습니다 상담을 자주하고 선생님들이 입시에 대해 항상 같이 고민을 해주십니다! 그림도 진짜 너무 잘그리시는거같아서 너무 만족해요!!",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 과제 시간을 확보해야 함, 체험 수업 후 결정 추천",
    teacherStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 스스로 생각하게 유도함",
    createdAt: "2026-06-14T18:44:24+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-14",
    sourceRow: 49,
    moderationFlags: [
      "개인 식별 가능 표현 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-049",
    academyId: "yangjae-gy-art",
    academyName: "지와이아트 미술학원",
    academyNameRaw: "양재 지와이학원",
    writerStatus: "고3",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교"
    ],
    schoolTextRaw: "이화여대중심",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 친절하게 설명함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "학원 분위기가 좋음",
      "커리큘럼이 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "진짜 쌤들이 너무 친절하시고 예고 준비했던 학원이랑은 분위기가 너무 달라서 좋았어요 ㅠㅠ",
    detail: "진짜 쌤들이 너무 친절하시고 예고 준비했던 학원이랑은 분위기가 너무 달라서 좋았어요 ㅠㅠ",
    likes: 0,
    pros: "피드백이 꼼꼼함, 학원 분위기가 좋음, 커리큘럼이 좋음",
    cons: "특별히 없음",
    recommendedFor: "체험 수업 후 결정 추천",
    teacherStyle: "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 친절하게 설명함",
    createdAt: "2026-06-14T19:06:39+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 50,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-050",
    academyId: "gangnam-seoha-art",
    academyName: "서하미술학원",
    academyNameRaw: "서하미술학원",
    writerStatus: "대학생",
    attendedYear: "2025년",
    attendedPeriod: "",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교",
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교",
      "서울대학교"
    ],
    schoolTextRaw: "이대, 서울대중심",
    atmosphere: "1",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "상급자에게 적합해요 (초보자 비추)",
    goodTags: [
      "피드백이 꼼꼼함",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음"
    ],
    concernTags: [
      "초보자가 따라가기 어려움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "회화미술학원이고 성적이 낮은 친구들도 이대를 굉장히 잘 보냅니다! 근데 원장님이 좀 무서우시고 못그리는 친구들에게는 좀 지적을 많이 하셔서 무서워요..하지만 학원 다니면서 쌤 말대로만하면 무조건 붙을것같다는 생각이들었어요! 커리큘럼이 매우 잘 짜여있고 학생이 많은데도 불구하고 전부 다 잘 챙겨주세요!",
    detail: "회화미술학원이고 성적이 낮은 친구들도 이대를 굉장히 잘 보냅니다! 근데 원장님이 좀 무서우시고 못그리는 친구들에게는 좀 지적을 많이 하셔서 무서워요..하지만 학원 다니면서 쌤 말대로만하면 무조건 붙을것같다는 생각이들었어요! 커리큘럼이 매우 잘 짜여있고 학생이 많은데도 불구하고 전부 다 잘 챙겨주세요!",
    likes: 0,
    pros: "피드백이 꼼꼼함, 입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음",
    cons: "초보자가 따라가기 어려움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    teacherStyle: "꼼꼼하게 설명함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-14T20:20:24+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 51,
    moderationFlags: [
      "민감한 지도 방식 표현 포함"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-051",
    academyId: "daejeon-migong-art",
    academyName: "미공미술학원",
    academyNameRaw: "대전 미공미술학원",
    writerStatus: "N수생",
    attendedYear: "",
    attendedPeriod: "5년정도(중1-재수)",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "한국예술종합학교"
    ],
    reviewSchoolTagsRaw: [
      "한국예술종합학교"
    ],
    schoolTextRaw: "한예종 중심",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "친절하게 설명함, 스스로 생각하게 유도함, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "피드백이 감정적으로 느껴질 때가 있음",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "학원 분위기가 좋음",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "일반 미술학원처럼 “입시”에 치중하는 느낌보단, 앞으로 향후 “예술”을 하는 삶을 생각하며 지도하는 느낌이 강함. 때문에 한예종 유형의 입시(포트폴리오 유형)을 준비한다면 큰 도움을 받을 수 있음. 인체수채화처럼 정형적인 입시 유형에서는 “소수 정예”라는 학원의 특징이 강점이 될 수도 단점이 될 수도 있음.3까지 도달할 수 있는 학생을 단기간에 5로 만드는 학원은 아님.단순 대학을 넘우 내가 왜 미술을 해야하지? 따위의 생각이나 근본적인 질문을 하는 것에 선호한다면 추천함. 학원비가 매우 싼 편임.체계적인 커리큘럼이 없음.\n때문에 년도마다 분위기,방향,수업 방식이 달라 확고히 규정해 말할 수 없음",
    detail: "일반 미술학원처럼 “입시”에 치중하는 느낌보단, 앞으로 향후 “예술”을 하는 삶을 생각하며 지도하는 느낌이 강함. 때문에 한예종 유형의 입시(포트폴리오 유형)을 준비한다면 큰 도움을 받을 수 있음. 인체수채화처럼 정형적인 입시 유형에서는 “소수 정예”라는 학원의 특징이 강점이 될 수도 단점이 될 수도 있음.3까지 도달할 수 있는 학생을 단기간에 5로 만드는 학원은 아님.단순 대학을 넘우 내가 왜 미술을 해야하지? 따위의 생각이나 근본적인 질문을 하는 것에 선호한다면 추천함. 학원비가 매우 싼 편임.체계적인 커리큘럼이 없음.\n때문에 년도마다 분위기,방향,수업 방식이 달라 확고히 규정해 말할 수 없음",
    likes: 0,
    pros: "학원 분위기가 좋음, 개별 관리가 잘됨",
    cons: "학생별 관리나 피드백 차이가 느껴졌음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "친절하게 설명함, 스스로 생각하게 유도함, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-14T21:30:17+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 52,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-052",
    academyId: "neocat-art-hongdae",
    academyName: "네오캣미술학원 홍대앞",
    academyNameRaw: "홍대 네오캣 학원",
    writerStatus: "N수생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "고려대학교"
    ],
    reviewSchoolTagsRaw: [
      "고려대학교"
    ],
    schoolTextRaw: "고대중심",
    atmosphere: "3",
    rating: 3,
    feedbackStyle: "친절하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "친절하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    concernTags: [
      "상담과 실제 수업에서 차이가 느껴짐"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "고려대 준비하면 추천 작년 홍대지구 연합시험에서 우리 학원만 A+받았음 그 외 학교는 굳이? 커리큘럼이 탄탄한 것도 아님 고대>기소>기디 순서로 추천하고 실제로 그쪽을 밀어줌 가군 주력으로 하기 때문에 기소하는 사람들은 성적 관리 잘하길 선생님들 다 편하고 분위기 좋음",
    detail: "고려대 준비하면 추천 작년 홍대지구 연합시험에서 우리 학원만 A+받았음 그 외 학교는 굳이? 커리큘럼이 탄탄한 것도 아님 고대>기소>기디 순서로 추천하고 실제로 그쪽을 밀어줌 가군 주력으로 하기 때문에 기소하는 사람들은 성적 관리 잘하길 선생님들 다 편하고 분위기 좋음",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음",
    cons: "상담과 실제 수업에서 차이가 느껴짐",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "친절하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-14T22:12:49+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 53,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-053",
    academyId: "incheon-gyeyang-cnc-art",
    academyName: "계양C&C미술학원",
    academyNameRaw: "계양 c&c",
    writerStatus: "고3",
    attendedYear: "24-26",
    attendedPeriod: "약 3년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "2",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 친절하게 설명함",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "기본기를 잘 잡아줌",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "학생 개별 피드백이 되게 잘 되어있어용 약 3년 가량 다녔는데 시범도 잘 보여주셔서 되게 많이 도움이 되었구 쌩초보부터 시작했는데 잘 맞춰서 지도해주셔서 되게 좋았어요! 쌤들 친절하시구 분위기 조금 자유로운 편이예요 참고하시면 좋겠습니당",
    detail: "학생 개별 피드백이 되게 잘 되어있어용 약 3년 가량 다녔는데 시범도 잘 보여주셔서 되게 많이 도움이 되었구 쌩초보부터 시작했는데 잘 맞춰서 지도해주셔서 되게 좋았어요! 쌤들 친절하시구 분위기 조금 자유로운 편이예요 참고하시면 좋겠습니당",
    likes: 0,
    pros: "기본기를 잘 잡아줌, 개별 관리가 잘됨",
    cons: "학원 분위기가 나와 맞지 않았음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "꼼꼼하게 설명함, 친절하게 설명함",
    createdAt: "2026-06-14T22:17:04+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 54,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-054",
    academyId: "gangnam-godo-art",
    academyName: "고도미술학원 강남",
    academyNameRaw: "강남 고도",
    writerStatus: "대학생",
    attendedYear: "2022 2023",
    attendedPeriod: "1년 반",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울대학교"
    ],
    schoolTextRaw: "서울대",
    atmosphere: "1",
    rating: 2,
    feedbackStyle: "말투가 직설적인 편임, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "말투가 직설적인 편임",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "예비반은 꼼꼼하고 관리가 좋으나, 입시반에 가게 되었을 때 선생님마다 편차가 심했으며, 학생들이 스스로 미친듯이 따라가야만 속도를 맞출 수 있습니다 시험정보나 자료는 감각있고 좋다는 생각을 했습니다 다만 성적에 따른 차별도 분명히 존재해서 거의 안 봐주는 학생들도 존재했었습니다 (강평 시간차이등)본인이 성적대가 좋고 실기실력이 상위권이라면 도움을 받을 거 같습니다",
    detail: "예비반은 꼼꼼하고 관리가 좋으나, 입시반에 가게 되었을 때 선생님마다 편차가 심했으며, 학생들이 스스로 미친듯이 따라가야만 속도를 맞출 수 있습니다 시험정보나 자료는 감각있고 좋다는 생각을 했습니다 다만 성적에 따른 차별도 분명히 존재해서 거의 안 봐주는 학생들도 존재했었습니다 (강평 시간차이등)본인이 성적대가 좋고 실기실력이 상위권이라면 도움을 받을 거 같습니다",
    likes: 0,
    pros: "입시 정보가 많음, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 초보자가 따라가기 어려움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "말투가 직설적인 편임, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-14T22:53:17+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 55,
    moderationFlags: [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-055",
    academyId: "daegu-suseong-cloud-click-art",
    academyName: "수성클라우드미술학원 대구",
    academyNameRaw: "대구 클라우드클릭학원",
    writerStatus: "N수생",
    attendedYear: "작년에는 비실기 대학 준비로 현재 미술학원에서 실기학원을 다니지 않아서 불합격 사유가 현재 학원 때문은 아닙니다!",
    attendedPeriod: "",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "2",
    rating: 2,
    feedbackStyle: "피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 선생님마다 편차가 심함",
    feedbackTags: [
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "실전 감각을 키우기 좋음",
      "특별히 없음"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "반마다 다르고 선생님마다 다름. 같은 반이었어도 선생님들이 매번 바뀌어서 해마다 분위기가 다름. 기초디자인은 몰라도 기초소양은 색연필로 대학에 간 선생님들이 한명도 없어서 전임선생님 한 분과 선릉에서 출강하시는 선생님 수업과 기초소양 보조선생님을 1년 이상 하신 선생님 빼고 나머지 보조쌤들의 실력은 좋지 않음. 기초소양으로 n수하는 학생들이 그 보조쌤들보다 실력이 훨씬 좋은 정도이고 기디에서 기소로 넘어온 사람들 같은 경우에는 기본기를 다지지 못한채로 진도를 따라가고 있음.\n기초소양을 준비하는 학생의 성적이 너무 안 좋아도 공부를 위한 수업 시간 조정에 어려움이 있고 방학특강을 강요함. 정시 실기를 준비하면서 수시로 비실기 대학을 준비해도 방학특강 시수 조정에 어려움이 있음.",
    detail: "반마다 다르고 선생님마다 다름. 같은 반이었어도 선생님들이 매번 바뀌어서 해마다 분위기가 다름. 기초디자인은 몰라도 기초소양은 색연필로 대학에 간 선생님들이 한명도 없어서 전임선생님 한 분과 선릉에서 출강하시는 선생님 수업과 기초소양 보조선생님을 1년 이상 하신 선생님 빼고 나머지 보조쌤들의 실력은 좋지 않음. 기초소양으로 n수하는 학생들이 그 보조쌤들보다 실력이 훨씬 좋은 정도이고 기디에서 기소로 넘어온 사람들 같은 경우에는 기본기를 다지지 못한채로 진도를 따라가고 있음.\n기초소양을 준비하는 학생의 성적이 너무 안 좋아도 공부를 위한 수업 시간 조정에 어려움이 있고 방학특강을 강요함. 정시 실기를 준비하면서 수시로 비실기 대학을 준비해도 방학특강 시수 조정에 어려움이 있음.",
    likes: 0,
    pros: "실전 감각을 키우기 좋음, 특별히 없음",
    cons: "입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    teacherStyle: "피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 선생님마다 편차가 심함",
    createdAt: "2026-06-14T23:09:54+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 56,
    moderationFlags: [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-056",
    academyId: "sinsa-kima-art",
    academyName: "키마미술학원",
    academyNameRaw: "신사 키마미술학원",
    writerStatus: "고3",
    attendedYear: "2024년-2025년",
    attendedPeriod: "1년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "여러 학교 가능",
    atmosphere: "5",
    rating: 2,
    feedbackStyle: "학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "선화예고 내신 실기를 위한 학원으로는그래도 나쁘다고 생각하지는 않았지만 대입에는 적합하다고 생각하지않았어요. 커리큘럼이 짜여져 있는 것이 아닌 즉흥적이였던 것 같아서 힘들었던 것 같고요. 그리고 원장님은 대부분 방에만 계셨던 것 같은데 돈이 그 대비 너무 부담스러웠던 것 같습니다.",
    detail: "선화예고 내신 실기를 위한 학원으로는그래도 나쁘다고 생각하지는 않았지만 대입에는 적합하다고 생각하지않았어요. 커리큘럼이 짜여져 있는 것이 아닌 즉흥적이였던 것 같아서 힘들었던 것 같고요. 그리고 원장님은 대부분 방에만 계셨던 것 같은데 돈이 그 대비 너무 부담스러웠던 것 같습니다.",
    likes: 0,
    pros: "특별히 없음",
    cons: "입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-14T23:19:41+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 57,
    moderationFlags: [
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-057",
    academyId: "gangnam-o2-art",
    academyName: "오투미술학원",
    academyNameRaw: "선릉 오투미술학원",
    writerStatus: "N수생",
    attendedYear: "2024",
    attendedPeriod: "3개월",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 중심",
    atmosphere: "5",
    rating: 4,
    feedbackStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임",
    feedbackTags: [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "5",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "기본기를 잘 잡아줌",
      "학원 분위기가 좋음",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "과제량이 부담스러움"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "가장 좋은점은 비교적 학원비가 가장 저렴한 학원이었어요!\n그럼에도 불구하고 선생님들이 엄청 많고 학생수가 적은 학원이어서 거의 1대3 과외받듯 수업이 진행되었어요\n엄청엄청 과제량이 많았어요 그래서 정시특강때는 오전 9시부터 밤10시까지 학원에서 있다가 11시부터 새벽 3시까지 과제를 해야했습니다\n과제진행방식은 학원 선생님들이 관리해주시는 학생개인 피드백방이 있고 그 피드백방에 학생이 하루그린그림에대한 강평내용이나 이것저것 알게된내용과 다음시험을 위한 스케치 연습, 아이디어스케치를 제출하고 선생님들께서 그 내용을 보시고 하나하나 답변해주시고 아이디어스케치를 수정해주시기도하시며 새벽까지 열심히 해주세요\n원장선생님께서 직접 강평과 수업 피드백 전부 해주시는데 새벽4시까지 주무시지못하시고 저희 한명한명읗 케어해주셨습니다\n이외 선생님들 5분께서 하나하나 꼼꼼히 봐주신 덕에 금방금방 실력이 늘수 있었습니다\n오전에 일찍나와서 그림을 더 예습하는것을 추천하셔서 학원생들이 7시부터 나와서 그림을 그리기도합니다\n소수라서 자유로운 분위기임에도 진지하게 임하게 지도해주시고 가끔 재밌는 이야기와 맛있는 음식도 사주셔서 좋았습니다\n정말 가족같은 분위기에 학원입니다\n지금은 이학원을 잠깐 나와있는데 그럼에도불구하고 저를 오투인으로 소속감을 느끼게해주시는 말들과 메세지들을 가끔 보내주십니다\n힘든 시간속에서도 응원으로 일어서게해주시는 선생님들이 있는\n좋은 학원입니다!!",
    detail: "가장 좋은점은 비교적 학원비가 가장 저렴한 학원이었어요!\n그럼에도 불구하고 선생님들이 엄청 많고 학생수가 적은 학원이어서 거의 1대3 과외받듯 수업이 진행되었어요\n엄청엄청 과제량이 많았어요 그래서 정시특강때는 오전 9시부터 밤10시까지 학원에서 있다가 11시부터 새벽 3시까지 과제를 해야했습니다\n과제진행방식은 학원 선생님들이 관리해주시는 학생개인 피드백방이 있고 그 피드백방에 학생이 하루그린그림에대한 강평내용이나 이것저것 알게된내용과 다음시험을 위한 스케치 연습, 아이디어스케치를 제출하고 선생님들께서 그 내용을 보시고 하나하나 답변해주시고 아이디어스케치를 수정해주시기도하시며 새벽까지 열심히 해주세요\n원장선생님께서 직접 강평과 수업 피드백 전부 해주시는데 새벽4시까지 주무시지못하시고 저희 한명한명읗 케어해주셨습니다\n이외 선생님들 5분께서 하나하나 꼼꼼히 봐주신 덕에 금방금방 실력이 늘수 있었습니다\n오전에 일찍나와서 그림을 더 예습하는것을 추천하셔서 학원생들이 7시부터 나와서 그림을 그리기도합니다\n소수라서 자유로운 분위기임에도 진지하게 임하게 지도해주시고 가끔 재밌는 이야기와 맛있는 음식도 사주셔서 좋았습니다\n정말 가족같은 분위기에 학원입니다\n지금은 이학원을 잠깐 나와있는데 그럼에도불구하고 저를 오투인으로 소속감을 느끼게해주시는 말들과 메세지들을 가끔 보내주십니다\n힘든 시간속에서도 응원으로 일어서게해주시는 선생님들이 있는\n좋은 학원입니다!!",
    likes: 0,
    pros: "기본기를 잘 잡아줌, 학원 분위기가 좋음, 입시 정보가 많음, 자료/시범이 도움됨, 개별 관리가 잘됨",
    cons: "과제량이 부담스러움",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임",
    createdAt: "2026-06-15T01:02:33+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 58,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-058",
    academyId: "gangnam-pharaoh-art",
    academyName: "파라오미술학원 강남",
    academyNameRaw: "선릉 파라오",
    writerStatus: "N수생",
    attendedYear: "2024",
    attendedPeriod: "2년",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교"
    ],
    schoolTextRaw: "이대",
    atmosphere: "1",
    rating: 4,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    concernTags: [
      "초보자가 따라가기 어려움"
    ],
    cautionTags: [
      "과제 시간을 확보해야 함"
    ],
    summary: "",
    detailOriginal: "소형학원이라서 개별관리는 매우좋지만 인원수가 작아서 비교할 그림이 부족함",
    detail: "소형학원이라서 개별관리는 매우좋지만 인원수가 작아서 비교할 그림이 부족함",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨",
    cons: "초보자가 따라가기 어려움",
    recommendedFor: "과제 시간을 확보해야 함",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    createdAt: "2026-06-15T07:07:51+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 59,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-059",
    academyId: "seolleung-study-and-art",
    academyName: "스터디앤아트미술학원",
    academyNameRaw: "선릉 대치스터디앤아트",
    writerStatus: "N수생",
    attendedYear: "2024",
    attendedPeriod: "6개월",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "홍익대학교"
    ],
    reviewSchoolTagsRaw: [
      "홍익대학교"
    ],
    schoolTextRaw: "홍대",
    atmosphere: "4",
    rating: 3,
    feedbackStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "자유로운 느낌이 강했습니다. 기본기를 다지면서도 원장님 영향인지 자유로운 느낌이 강한게 장점이자 단점이었습니다. 밀도를 무조건적으로 올리는 스타일은 아닌 것 같아용 그림의 밀도는 어느정도 있어야하지만 밀도만 요구하는게 아니라 전체적인 조화를 추구하는 느낌.. 근데 지금은 담당 쌤이 바뀌셨다고 들어서 잘 모르겠습니당",
    detail: "자유로운 느낌이 강했습니다. 기본기를 다지면서도 원장님 영향인지 자유로운 느낌이 강한게 장점이자 단점이었습니다. 밀도를 무조건적으로 올리는 스타일은 아닌 것 같아용 그림의 밀도는 어느정도 있어야하지만 밀도만 요구하는게 아니라 전체적인 조화를 추구하는 느낌.. 근데 지금은 담당 쌤이 바뀌셨다고 들어서 잘 모르겠습니당",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임",
    cons: "학생별 관리나 피드백 차이가 느껴졌음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함",
    createdAt: "2026-06-15T09:25:12+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 60,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-060",
    academyId: "busan-sigak-art",
    academyName: "시각미술학원",
    academyNameRaw: "부산 시각미술학원",
    writerStatus: "N수생",
    attendedYear: "2022~2025",
    attendedPeriod: "3년반",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "기소반은 국민대(지금은 모르겠으나 국민대말고다른학교는 어쩌다 한번 함)기디반은 잘 모르겠으나 부산안에있는대학에 강함",
    atmosphere: "3",
    rating: 2,
    feedbackStyle: "선생님마다 편차가 심함",
    feedbackTags: [
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "고2때부터 기소반에 있었고 정특도 1번함. 입시반은 전임쌤 두명이서 매해 기소기디 번갈아가면서 하시는거같은데 두 쌤 스타일 차이가 너무큼.(한분은 부족한부분 있더라도 일단 넘어가고 다음그림에 보완 / 한분은 무조건 이 그림에서 완벽하게 한다음 넘어감) 같은그림을 두쌤한테물어보면 피드백이 다르고 한쌤 말대로하면 다른쌤은 다르게 하라 함. 이 두전임쌤과 원장의 말이 또 다름 그러면 이제 피드백 3개가 다 말이달라서 학생입장에서는 혼란스러움. 모의고사보면 기소대학쓸수있는 성적아닌데 기소반이면 성적떨어져도 기디반 안보내고 기디병행도 안시키고 성적상담 한번도 안함.\n결국 수능치고 성적떨어져서 정특때 기디하는 애들많음. 장점은 학원에 애들이 많아서 볼수있는 그림이 많고(기소반은 20명정도?기디반은 60명?정도됐던거같음) 서울에서 3주에 1번인가 원장이나 전임쌤 내려와서 그림평가하고 설명해줌.서울학원과 커리큘럼 똑같음.(연계학원) 기본기를 잘 잡아주지도 않고 (ex)그림자 설명 한적없는데 당연히 아는거아니냐고 함))(본인 밑에학년부터 2학년담당쌤이 바뀌어서 이젠 아닐수도있음) 입결만 보면 좋은데 이건 정특때 서울연계학원가서 정특하는거랑 그냥 그림을 잘그리는 사람이라서 입결이 좋은거지 학원덕분은 아님. 추천하지않아요...가깝고 부산에 대형학원이랑 기소하는애들이 많이 없어서,서울연계학원때문에 다닌거지 다녔던 그리고 다니면서 모두가 욕함",
    detail: "고2때부터 기소반에 있었고 정특도 1번함. 입시반은 전임쌤 두명이서 매해 기소기디 번갈아가면서 하시는거같은데 두 쌤 스타일 차이가 너무큼.(한분은 부족한부분 있더라도 일단 넘어가고 다음그림에 보완 / 한분은 무조건 이 그림에서 완벽하게 한다음 넘어감) 같은그림을 두쌤한테물어보면 피드백이 다르고 한쌤 말대로하면 다른쌤은 다르게 하라 함. 이 두전임쌤과 원장의 말이 또 다름 그러면 이제 피드백 3개가 다 말이달라서 학생입장에서는 혼란스러움. 모의고사보면 기소대학쓸수있는 성적아닌데 기소반이면 성적떨어져도 기디반 안보내고 기디병행도 안시키고 성적상담 한번도 안함.\n결국 수능치고 성적떨어져서 정특때 기디하는 애들많음. 장점은 학원에 애들이 많아서 볼수있는 그림이 많고(기소반은 20명정도?기디반은 60명?정도됐던거같음) 서울에서 3주에 1번인가 원장이나 전임쌤 내려와서 그림평가하고 설명해줌.서울학원과 커리큘럼 똑같음.(연계학원) 기본기를 잘 잡아주지도 않고 (ex)그림자 설명 한적없는데 당연히 아는거아니냐고 함))(본인 밑에학년부터 2학년담당쌤이 바뀌어서 이젠 아닐수도있음) 입결만 보면 좋은데 이건 정특때 서울연계학원가서 정특하는거랑 그냥 그림을 잘그리는 사람이라서 입결이 좋은거지 학원덕분은 아님. 추천하지않아요...가깝고 부산에 대형학원이랑 기소하는애들이 많이 없어서,서울연계학원때문에 다닌거지 다녔던 그리고 다니면서 모두가 욕함",
    likes: 0,
    pros: "특별히 없음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 입결·합격 사례 설명이 과장되어 보였음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "선생님마다 편차가 심함",
    createdAt: "2026-06-15T10:37:51+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 61,
    moderationFlags: [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-061",
    academyId: "gangnam-godo-art",
    academyName: "고도미술학원 강남",
    academyNameRaw: "양재 고도학원",
    writerStatus: "고3",
    attendedYear: "2025",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교",
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교",
      "서울대학교"
    ],
    schoolTextRaw: "서울대 중심, 이화여대 중심",
    atmosphere: "4",
    rating: 2,
    feedbackStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임, 선생님마다 편차가 심함",
    feedbackTags: [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "어느 정도 실력이 필요해요",
    goodTags: [
      "집중이 잘되는 분위기임",
      "특별히 없음"
    ],
    concernTags: [
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "체험 수업 후 결정 추천"
    ],
    summary: "",
    detailOriginal: "처음에는 서울대 입결이 매우 좋다하여 학원에 갔지만, 오히려 실제 합격은 N수생이 대부분이고 고3은 거의 없었음. 또한 학생별로 신경을 많이 써주지 않고 공부가 중요한 상위권 입시임에도 윈터스쿨은 절대 가지 말고 실기를 절대 빠지지 말라는 등 실기에 힘을 줬음. 그렇게 해서 정특때 한 학생의 수능성적 하락으로 기소에서 기디로 갑자기 바꾸게 했다는 사례를 말하며 무책임한 태도를 보임.수업 중에도 학생들에게 미술에 관한 얘기를 하다가도 중간중간에 용어나 예시들이 교육적이지 못하고 매우 부적절했음.\n장점은 그래도 직접 그림을 그리도록 원리를 설명해주고, 비교군이 많아서 평가때 객관적 위치 파악에 도움이 되었다.. 정도 있다.",
    detail: "처음에는 서울대 입결이 매우 좋다하여 학원에 갔지만, 오히려 실제 합격은 N수생이 대부분이고 고3은 거의 없었음. 또한 학생별로 신경을 많이 써주지 않고 공부가 중요한 상위권 입시임에도 윈터스쿨은 절대 가지 말고 실기를 절대 빠지지 말라는 등 실기에 힘을 줬음. 그렇게 해서 정특때 한 학생의 수능성적 하락으로 기소에서 기디로 갑자기 바꾸게 했다는 사례를 말하며 무책임한 태도를 보임.수업 중에도 학생들에게 미술에 관한 얘기를 하다가도 중간중간에 용어나 예시들이 교육적이지 못하고 매우 부적절했음.\n장점은 그래도 직접 그림을 그리도록 원리를 설명해주고, 비교군이 많아서 평가때 객관적 위치 파악에 도움이 되었다.. 정도 있다.",
    likes: 0,
    pros: "집중이 잘되는 분위기임, 특별히 없음",
    cons: "상담과 실제 수업에서 차이가 느껴짐, 입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 체험 수업 후 결정 추천",
    teacherStyle: "스스로 생각하게 유도함, 말투가 직설적인 편임, 선생님마다 편차가 심함",
    createdAt: "2026-06-15T14:38:45+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 62,
    moderationFlags: [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-062",
    academyId: "gangnam-antenna-art",
    academyName: "안테나미술학원 강남",
    academyNameRaw: "선릉 안테나",
    writerStatus: "N수생",
    attendedYear: "2025",
    attendedPeriod: "정특",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "성균관대학교"
    ],
    reviewSchoolTagsRaw: [
      "성균관대학교"
    ],
    schoolTextRaw: "성균관대",
    atmosphere: "2",
    rating: 3,
    feedbackStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음",
    feedbackTags: [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "입시 정보가 많음"
    ],
    concernTags: [
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "정특때 급하게 성대 준비하러 갔었는데 일단 원래 있던 학생들이 기본기가 안잡혀잇는 느낌이 있엇고 미술을 가르친다기보단 학교에 특화된.. 학교에 갈수 있는 팁? 같은걸 배우는 느낌이었습니다",
    detail: "정특때 급하게 성대 준비하러 갔었는데 일단 원래 있던 학생들이 기본기가 안잡혀잇는 느낌이 있엇고 미술을 가르친다기보단 학교에 특화된.. 학교에 갈수 있는 팁? 같은걸 배우는 느낌이었습니다",
    likes: 0,
    pros: "피드백이 꼼꼼함, 질문하기 편함, 입시 정보가 많음",
    cons: "학원 분위기가 나와 맞지 않았음",
    recommendedFor: "선생님 스타일 확인 필요",
    teacherStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음",
    createdAt: "2026-06-15T21:31:15+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 63,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-063",
    academyId: "hongdae-greenseom-art",
    academyName: "홍대앞 그린섬미술학원",
    academyNameRaw: "홍대 그린섬",
    writerStatus: "대학생",
    attendedYear: "2024",
    attendedPeriod: "1",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교",
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교",
      "서울대학교"
    ],
    schoolTextRaw: "제가 입시할 땐 국민대 중심이었는데.. 올해 서울대 파티더라고요",
    atmosphere: "3",
    rating: 4,
    feedbackStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 말투가 직설적인 편임",
    feedbackTags: [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "기본기가 있으면 좋아요",
    goodTags: [
      "커리큘럼이 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "엄… 학교는 떨어졌지만 디자인적 사고를 잘 가르쳐주셨습니다",
    detail: "엄… 학교는 떨어졌지만 디자인적 사고를 잘 가르쳐주셨습니다",
    likes: 0,
    pros: "커리큘럼이 좋음",
    cons: "특별히 없음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 말투가 직설적인 편임",
    createdAt: "2026-06-15T21:31:47+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 64,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-064",
    academyId: "daejeon-dunsan-cnc-art",
    academyName: "씨앤씨미술학원 대전둔산캠퍼스",
    academyNameRaw: "대전 C&C 학원",
    writerStatus: "대학생",
    attendedYear: "2023년, 2024년",
    attendedPeriod: "1년 반",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교",
      "국민대학교",
      "서울대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교",
      "국민대학교",
      "서울대학교"
    ],
    schoolTextRaw: "국민대, 이화여대, 서울대",
    atmosphere: "4",
    rating: 3,
    feedbackStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "특별히 없음"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    summary: "",
    detailOriginal: "기본기를 배우고 숙지하는 데에는 도움이 되었지만, 멘탈이 약한 친구들에게는 추천하지 않습니다. 하지만 학교 중심으로 준비할 때에는 집중 관리를 받는 점이 좋았습니다.",
    detail: "기본기를 배우고 숙지하는 데에는 도움이 되었지만, 멘탈이 약한 친구들에게는 추천하지 않습니다. 하지만 학교 중심으로 준비할 때에는 집중 관리를 받는 점이 좋았습니다.",
    likes: 0,
    pros: "특별히 없음",
    cons: "입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    teacherStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-15T21:41:33+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 65,
    moderationFlags: [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-065",
    academyId: "hongseong-design-ufo-art",
    academyName: "디자인유에프오미술학원",
    academyNameRaw: "홍성 디자인유에프오",
    writerStatus: "N수생",
    attendedYear: "",
    attendedPeriod: "1년",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "건국대학교",
      "상명대학교"
    ],
    reviewSchoolTagsRaw: [
      "건국대학교",
      "상명대학교"
    ],
    schoolTextRaw: "상명대, 건대",
    atmosphere: "4",
    rating: 4,
    feedbackStyle: "친절하게 설명함, 스스로 생각하게 유도함, 학생마다 관리 차이가 느껴짐",
    feedbackTags: [
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "학생마다 관리 차이가 느껴짐"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음",
      "과제 시간을 확보해야 함"
    ],
    summary: "",
    detailOriginal: "수업 분위기는 편안하며 선생님들도 대부분 착하셨다. 하라는 방향대로 하지 않고 다른 방향으로 가면 가끔 화를 내신다. 그 외에는 화를 내려고 하지 않으신다. 그러나 전문적인 입시를 다루기에 수도권 또는 유명 학원과는 수업의 전문성 부분에서 차이가 느껴졌음",
    detail: "수업 분위기는 편안하며 선생님들도 대부분 착하셨다. 하라는 방향대로 하지 않고 다른 방향으로 가면 가끔 화를 내신다. 그 외에는 화를 내려고 하지 않으신다. 그러나 전문적인 입시를 다루기에 수도권 또는 유명 학원과는 수업의 전문성 부분에서 차이가 느껴졌음",
    likes: 0,
    pros: "질문하기 편함, 학원 분위기가 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음",
    recommendedFor: "스스로 질문해야 놓치지 않음, 과제 시간을 확보해야 함",
    teacherStyle: "친절하게 설명함, 스스로 생각하게 유도함, 학생마다 관리 차이가 느껴짐",
    createdAt: "2026-06-15T21:52:27+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 66,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-066",
    academyId: "seolleung-iam-art",
    academyName: "아이엠미술학원",
    academyNameRaw: "강남 아이엠",
    writerStatus: "대학생",
    attendedYear: "2023",
    attendedPeriod: "고2-고3",
    admissionResult: "불합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대",
    atmosphere: "4",
    rating: 2,
    feedbackStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    feedbackTags: [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "3",
    classLevel: "상급자에게 적합해요 (초보자 비추)",
    goodTags: [
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요",
      "비용/수업 방식으로 상담 때 확인 추천"
    ],
    summary: "",
    detailOriginal: "현역 때 다녔던 미술학원이었는데 , 국민대반은 좋은 편이지만 기디반이 정말 별로였습니다. 담당쌤은 ( 아마 지금 없으신걸로 알고있긴한데) 거의 안들어오시고 주로 보조쌤들이 가르치시는데 다들 의견도 제각각이고 입시에 진심으로 다해주지 않는 느낌이었습니다. 감정적인 쌤도 있고 불편한쌤도 있고..\n보조쌤이 나쁜건 아니지만 갓합격한 분들보다는 베테랑 담임쌤과 더 수업하고싶었던 터라 불만족스러웠습니다. 제가 본 년도엔 건대가 딱 두명 붙었는데, 공홈에는 15명 이라고 적어놓고 합격자 명단을 공개하지 않았던거같기도합니다. 아마 지방 아이엠이랑 섞어서 발표한거같긴한데 명단자 발표 안한 이상 불투명한 입시학원이라고 생각했습니다. 지금 제가 수업 받았던 쌤이 안계시더라도 , 분위기나 입시 커리등은 바뀌지 않았을거라 생각해 정보 남깁니다. 국민대반은 엄격하게 관리되어있어서 나름 잘 보내는 편이라고 볼 수 있지만 기디반은 관리도 안되고 진짜 별로라고 생각합니다...",
    detail: "현역 때 다녔던 미술학원이었는데 , 국민대반은 좋은 편이지만 기디반이 정말 별로였습니다. 담당쌤은 ( 아마 지금 없으신걸로 알고있긴한데) 거의 안들어오시고 주로 보조쌤들이 가르치시는데 다들 의견도 제각각이고 입시에 진심으로 다해주지 않는 느낌이었습니다. 감정적인 쌤도 있고 불편한쌤도 있고..\n보조쌤이 나쁜건 아니지만 갓합격한 분들보다는 베테랑 담임쌤과 더 수업하고싶었던 터라 불만족스러웠습니다. 제가 본 년도엔 건대가 딱 두명 붙었는데, 공홈에는 15명 이라고 적어놓고 합격자 명단을 공개하지 않았던거같기도합니다. 아마 지방 아이엠이랑 섞어서 발표한거같긴한데 명단자 발표 안한 이상 불투명한 입시학원이라고 생각했습니다. 지금 제가 수업 받았던 쌤이 안계시더라도 , 분위기나 입시 커리등은 바뀌지 않았을거라 생각해 정보 남깁니다. 국민대반은 엄격하게 관리되어있어서 나름 잘 보내는 편이라고 볼 수 있지만 기디반은 관리도 안되고 진짜 별로라고 생각합니다...",
    likes: 0,
    pros: "집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨",
    cons: "입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    recommendedFor: "멘탈 관리가 필요함, 선생님 스타일 확인 필요, 비용/수업 방식으로 상담 때 확인 추천",
    teacherStyle: "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    createdAt: "2026-06-15T21:56:08+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 67,
    moderationFlags: [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-067",
    academyId: "gangnam-godo-art",
    academyName: "고도미술학원 강남",
    academyNameRaw: "강남 양재고도",
    writerStatus: "N수생",
    attendedYear: "2025",
    attendedPeriod: "",
    admissionResult: "",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "이화여자대학교",
      "국민대학교",
      "서울대학교",
      "고려대학교"
    ],
    reviewSchoolTagsRaw: [
      "이화여자대학교",
      "국민대학교",
      "서울대학교",
      "고려대학교"
    ],
    schoolTextRaw: "서울대고려대이대국민대",
    atmosphere: "1",
    rating: 4,
    feedbackStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "1",
    classLevel: "상급자에게 적합해요 (초보자 비추)",
    goodTags: [
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "수업 속도가 빠르게 느껴졌음",
      "초보자가 따라가기 어려움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "정특이라 예민할 시기긴 합니다만\n못그리는 친구들, 선생님이 서로 싫어하는게 느껴졌습니다\n멘탈약하다 - 다른 학원가세요\n다른 반이지만 학원에서 가끔 큰소리로 욕이 들리고 좀 놀랄때가 있었습니다\n그림을 잘그린다면 큰 문제 없을겁니다 잘그리면 혼나지 않아요\n선생님들 그림 잘그리십니다 좋습니다",
    detail: "정특이라 예민할 시기긴 합니다만\n못그리는 친구들, 선생님이 서로 싫어하는게 느껴졌습니다\n멘탈약하다 - 다른 학원가세요\n다른 반이지만 학원에서 가끔 큰소리로 욕이 들리고 좀 놀랄때가 있었습니다\n그림을 잘그린다면 큰 문제 없을겁니다 잘그리면 혼나지 않아요\n선생님들 그림 잘그리십니다 좋습니다",
    likes: 0,
    pros: "집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨, 실전 감각을 키우기 좋음",
    cons: "수업 속도가 빠르게 느껴졌음, 초보자가 따라가기 어려움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    createdAt: "2026-06-15T21:56:55+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 68,
    moderationFlags: [
      "민감한 지도 방식 표현 포함"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-068",
    academyId: "gangnam-metacode-ssam-art",
    academyName: "메타코드쌤미술학원 강남본원",
    academyNameRaw: "선릉 메타코드",
    writerStatus: "대학생",
    attendedYear: "2025",
    attendedPeriod: "1년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "국민대학교"
    ],
    schoolTextRaw: "국민대 위주",
    atmosphere: "4",
    rating: 5,
    feedbackStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "말투가 직설적인 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "4",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "특별히 없음"
    ],
    cautionTags: [],
    summary: "",
    detailOriginal: "기본기 있다고 생각했던 사람인데도 불구하고 배울점이 많은 학원이라고 생각합니다 일단 원장님이 그림을 잘 그리시니 배울 게 많습니다",
    detail: "기본기 있다고 생각했던 사람인데도 불구하고 배울점이 많은 학원이라고 생각합니다 일단 원장님이 그림을 잘 그리시니 배울 게 많습니다",
    likes: 0,
    pros: "기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    cons: "특별히 없음",
    recommendedFor: "상세 후기를 참고해 주세요.",
    teacherStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    createdAt: "2026-06-15T22:09:53+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 69,
    moderationFlags: [],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-069",
    academyId: "daegu-artpoem-art",
    academyName: "아트포엠미술학원 대구",
    academyNameRaw: "대구 아트포엠학원",
    writerStatus: "대학생",
    attendedYear: "",
    attendedPeriod: "",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [
      "서울과학기술대학교",
      "국민대학교"
    ],
    reviewSchoolTagsRaw: [
      "서울과학기술대학교",
      "국민대학교"
    ],
    schoolTextRaw: "국민대, 과기대",
    atmosphere: "3",
    rating: 5,
    feedbackStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임, 칭찬보다 지적이 많은 편임",
    feedbackTags: [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "칭찬보다 지적이 많은 편임"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    cautionTags: [
      "멘탈 관리가 필요함"
    ],
    summary: "",
    detailOriginal: "학원은 다 그렇지만 반 별 분위기 차이가 있었음\n성적이 낮으면 그만큼 인원수별로 할당된 선생님이 적었고 주입식으로 거르치는 느낌이 있었음",
    detail: "학원은 다 그렇지만 반 별 분위기 차이가 있었음\n성적이 낮으면 그만큼 인원수별로 할당된 선생님이 적었고 주입식으로 거르치는 느낌이 있었음",
    likes: 0,
    pros: "피드백이 꼼꼼함, 질문하기 편함, 학원 분위기가 좋음, 실전 감각을 키우기 좋음",
    cons: "학생별 관리나 피드백 차이가 느껴졌음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    recommendedFor: "멘탈 관리가 필요함",
    teacherStyle: "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임, 칭찬보다 지적이 많은 편임",
    createdAt: "2026-06-15T22:49:59+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 70,
    moderationFlags: [
      "민감한 지도 방식 표현 포함"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  },
  {
    id: "google-form-20260615-new-review-070",
    academyId: "gangnam-cnc-art",
    academyName: "씨앤씨미술학원 강남",
    academyNameRaw: "야탑 씨앤씨 미술학원",
    writerStatus: "대학생",
    attendedYear: "2025",
    attendedPeriod: "1년",
    admissionResult: "합격",
    preparedTypes: [],
    strongTypes: [],
    reviewSchoolTags: [],
    reviewSchoolTagsRaw: [],
    schoolTextRaw: "일반대 중심",
    atmosphere: "3",
    rating: 3,
    feedbackStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함",
    feedbackTags: [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함"
    ],
    teachingStyleTags: [],
    homeworkLoad: "2",
    classLevel: "입문자도 가능해요",
    goodTags: [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    concernTags: [
      "입결·합격 사례 설명이 과장되어 보였음",
      "특별히 없음"
    ],
    cautionTags: [
      "스스로 질문해야 놓치지 않음"
    ],
    summary: "",
    detailOriginal: "예비반에서 입시반으로 올라올 때, 아이들끼리 차이가 있다는 것을 아시고 아주 기초적인 것부터 진행합니다. 따라서 사람에 따라 초반에는 진도가 느리다고 생각할 수 있습니다. 그러나 수시 시즌부터 슬슬 시험을 치며 그리는 속도가 빨라집니다. 뒤로 갈수록 개인의 역량에 따라 그림의 진도가 달라지니 초반에 다른 미술학원의 커리큘럼과 비교하며 느리단 걱정 안해도 됩니다!! 선생님들 무지 착하시고 꼼꼼하게 피드백 해주십니다.\n다만 기소소양 전문 학원이 아니라 특정 학교 입시 진행이 어려울 수 있습니다.",
    detail: "예비반에서 입시반으로 올라올 때, 아이들끼리 차이가 있다는 것을 아시고 아주 기초적인 것부터 진행합니다. 따라서 사람에 따라 초반에는 진도가 느리다고 생각할 수 있습니다. 그러나 수시 시즌부터 슬슬 시험을 치며 그리는 속도가 빨라집니다. 뒤로 갈수록 개인의 역량에 따라 그림의 진도가 달라지니 초반에 다른 미술학원의 커리큘럼과 비교하며 느리단 걱정 안해도 됩니다!! 선생님들 무지 착하시고 꼼꼼하게 피드백 해주십니다.\n다만 기소소양 전문 학원이 아니라 특정 학교 입시 진행이 어려울 수 있습니다.",
    likes: 0,
    pros: "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 입시 정보가 많음, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    cons: "입결·합격 사례 설명이 과장되어 보였음, 특별히 없음",
    recommendedFor: "스스로 질문해야 놓치지 않음",
    teacherStyle: "빠르게 핵심만 짚어줌, 친절하게 설명함",
    createdAt: "2026-06-15T23:04:53+09:00",
    status: "public",
    source: "google-form",
    sourceBatch: "Google Form 2026-06-15",
    sourceRow: 71,
    moderationFlags: [
      "입결/합격 사례 관련 주장 검토 필요"
    ],
    consent: {
      publish: true,
      moderation: true
    }
  }
];

