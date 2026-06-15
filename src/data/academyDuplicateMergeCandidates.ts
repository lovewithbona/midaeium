// 학원명 정규화 결과 같은 표시명으로 묶이는 중복 후보입니다.
// 실제로 같은 학원인지 주소/지도 검수 후 병합하세요.

export type AcademyDuplicateMergeCandidate = {
  normalizedName: string;
  canonicalAcademyId: string;
  duplicateAcademyIds: string[];
  originalNames: { academyId: string; originalName: string }[];
  action: "운영자 확인 후 병합 권장";
};

export const academyDuplicateMergeCandidates: AcademyDuplicateMergeCandidate[] = [
  {
    "normalizedName": "베테랑미술학원 선릉",
    "canonicalAcademyId": "gangnam-veteran-art",
    "duplicateAcademyIds": [
      "extra-020-seoul"
    ],
    "originalNames": [
      {
        "academyId": "gangnam-veteran-art",
        "originalName": "강남 베테랑미술학원"
      },
      {
        "academyId": "extra-020-seoul",
        "originalName": "베테랑 미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "애니포스미술학원 선릉",
    "canonicalAcademyId": "gangnam-anyforce",
    "duplicateAcademyIds": [
      "extra-018-seoul"
    ],
    "originalNames": [
      {
        "academyId": "gangnam-anyforce",
        "originalName": "강남 애니포스"
      },
      {
        "academyId": "extra-018-seoul",
        "originalName": "애니포스 미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "더끌림미술학원 선릉",
    "canonicalAcademyId": "gangnam-thekkeullim",
    "duplicateAcademyIds": [
      "extra-021-seoul"
    ],
    "originalNames": [
      {
        "academyId": "gangnam-thekkeullim",
        "originalName": "강남 더끌림"
      },
      {
        "academyId": "extra-021-seoul",
        "originalName": "더끌림 미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "멘토미술학원 수지",
    "canonicalAcademyId": "gyeonggi-yongin-mentor-suji",
    "duplicateAcademyIds": [
      "extra-085-gyeonggi"
    ],
    "originalNames": [
      {
        "academyId": "gyeonggi-yongin-mentor-suji",
        "originalName": "멘토미술학원 수지"
      },
      {
        "academyId": "extra-085-gyeonggi",
        "originalName": "멘토미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "그린섬미술학원 화명",
    "canonicalAcademyId": "busan-hwamyeong-greensum",
    "duplicateAcademyIds": [
      "extra-099-busan"
    ],
    "originalNames": [
      {
        "academyId": "busan-hwamyeong-greensum",
        "originalName": "그린섬미술학원 화명"
      },
      {
        "academyId": "extra-099-busan",
        "originalName": "부산 그린섬미술학원 화명"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "클라우드미술학원 수성",
    "canonicalAcademyId": "daegu-suseong-cloud",
    "duplicateAcademyIds": [
      "daegu-suseong-cloud-click-art"
    ],
    "originalNames": [
      {
        "academyId": "daegu-suseong-cloud",
        "originalName": "수성클라우드미술학원"
      },
      {
        "academyId": "daegu-suseong-cloud-click-art",
        "originalName": "대구 수성클라우드미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "디자인스타미술학원 목포",
    "canonicalAcademyId": "jeonnam-mokpo-designstar",
    "duplicateAcademyIds": [
      "extra-008-jeonnam"
    ],
    "originalNames": [
      {
        "academyId": "jeonnam-mokpo-designstar",
        "originalName": "디자인스타미술학원 목포"
      },
      {
        "academyId": "extra-008-jeonnam",
        "originalName": "목포 디자인스타 미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "디자인유에프오미술학원 내포",
    "canonicalAcademyId": "hongseong-design-ufo-art",
    "duplicateAcademyIds": [
      "extra-007-chungnam"
    ],
    "originalNames": [
      {
        "academyId": "extra-007-chungnam",
        "originalName": "디자인ufo 미술학원"
      },
      {
        "academyId": "hongseong-design-ufo-art",
        "originalName": "디자인유에프오미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  },
  {
    "normalizedName": "오투미술학원 선릉",
    "canonicalAcademyId": "gangnam-o2-art",
    "duplicateAcademyIds": [
      "extra-023-seoul"
    ],
    "originalNames": [
      {
        "academyId": "extra-023-seoul",
        "originalName": "뉴오투 미술학원"
      },
      {
        "academyId": "gangnam-o2-art",
        "originalName": "오투미술학원"
      }
    ],
    "action": "운영자 확인 후 병합 권장"
  }
];
