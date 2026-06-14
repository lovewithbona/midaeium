// 미대이음 초기 152개 학원 주요 대비 대학 1차 조사본
// 생성일: 2026-06-13
// 원칙:
// - 공식 홈페이지/공식 인스타그램/공식 블로그/공개 합격 인터뷰/입시미술 전문 매체에서 대학명이 확인된 경우만 schoolTags를 채웠습니다.
// - 지점별로 공식 확인이 어려운 브랜드형 학원은 source를 "보조 출처 확인"으로 두었습니다.
// - 근거가 부족한 학원은 schoolTags: []로 두고 researchStatus: "근거 부족"으로 표시했습니다.
// - 화면에서는 “강점 대학”이 아니라 “주요 대비 대학”으로 표시하세요.
// - 이 정보는 합격률이나 성과 보장이 아니라, 공개 자료와 리뷰를 함께 참고하는 초기 분류입니다.

export type AcademySchoolTagSource =
  | "공식 확인"
  | "보조 출처 확인"
  | "리뷰 기반"
  | "운영자 입력"
  | "확인 필요";

export type AcademySchoolTag = {
  schoolName: string;
  source: AcademySchoolTagSource;
  sourceUrl?: string | null;
  memo?: string;
};

export type AcademySchoolTagResearchResult = {
  academyId: string;
  academyName: string;
  region: string;
  district: string;
  schoolTags: AcademySchoolTag[];
  researchStatus: "근거 확인" | "근거 부족";
  researchMemo: string;
  updatedAt: string;
};

export const academySchoolTagResearchInitial152: AcademySchoolTagResearchResult[] = [
  {
    "academyId": "gangnam-veteran-art",
    "academyName": "강남 베테랑미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-creation-morning-art",
    "academyName": "강남 창조의아침미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-godo-art",
    "academyName": "강남 고도미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://godoart.com/default/essay_2025_3.php",
        "memo": "고도 공식/공개 합격 후기에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://godoart.com/default/essay_2025_3.php",
        "memo": "고도 공식/공개 합격 후기에서 확인한 대학입니다."
      },
      {
        "schoolName": "홍익대학교",
        "source": "공식 확인",
        "sourceUrl": "https://godoart.com/default/essay_2025_3.php",
        "memo": "고도 공식/공개 합격 후기에서 확인한 대학입니다."
      },
      {
        "schoolName": "고려대학교",
        "source": "공식 확인",
        "sourceUrl": "https://godoart.com/default/essay_2025_3.php",
        "memo": "고도 공식/공개 합격 후기에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://godoart.com/default/essay_2025_3.php",
        "memo": "고도 공식/공개 합격 후기에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "고도 공식/공개 합격 후기에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-thousand-smile-art",
    "academyName": "강남 천년의미소미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-heracles-art",
    "academyName": "강남 헤라클레스미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-whiteworld-art",
    "academyName": "강남 하얀세상미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://midaeipsi.com/art/board.php?board=knowhow1&command=body&no=1789",
        "memo": "미대입시닷컴 실기연재에서 국민대·서울과기대 관련 자료가 확인됩니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://midaeipsi.com/art/board.php?board=knowhow1&command=body&no=1789",
        "memo": "미대입시닷컴 실기연재에서 국민대·서울과기대 관련 자료가 확인됩니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "미대입시닷컴 실기연재에서 국민대·서울과기대 관련 자료가 확인됩니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-irum-art",
    "academyName": "이룸미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-geunad-art",
    "academyName": "강남 그나드미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-people-art",
    "academyName": "강남 피플미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-lion-art",
    "academyName": "리온미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-egamdong-art",
    "academyName": "이감동미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-antenna-art",
    "academyName": "강남 안테나미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "성균관대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "서울대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      },
      {
        "schoolName": "중앙대학교",
        "source": "공식 확인",
        "sourceUrl": "https://antenna-art.com/gallery",
        "memo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "안테나 공식 갤러리/공개 자료에서 합격·전문 클래스가 확인된 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-dohwaseon-korean-art",
    "academyName": "강남 도화선한국화미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-gaon-art",
    "academyName": "강남 가온미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-saramin-art",
    "academyName": "강남 사람인미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-owon-korean-art",
    "academyName": "강남 오원한국화미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-modus-comic-animation",
    "academyName": "강남 모두스만화애니전문학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-tium-art",
    "academyName": "강남 티움미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-anyforce",
    "academyName": "강남 애니포스",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-ipche",
    "academyName": "강남 입체",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-thekkeullim",
    "academyName": "강남 더끌림",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daechi-thebom",
    "academyName": "대치 더봄",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-transfer-creation",
    "academyName": "강남 미대편입창조 강남캠퍼스",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-bareun-art",
    "academyName": "강남 바른미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-cnc-art",
    "academyName": "강남 씨앤씨미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-dots-art",
    "academyName": "강남 닷츠미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-gaudi-art",
    "academyName": "강남 가우디미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-pharaoh-art",
    "academyName": "강남 파라오미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "hongdae-design-soul-art",
    "academyName": "홍대 디자인쏘울미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "hongdae-union-art",
    "academyName": "홍대 유니온미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/watch?v=HLpU0oSomXA",
        "memo": "홍대 유니온 합격 인터뷰 공개 자료에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/watch?v=HLpU0oSomXA",
        "memo": "홍대 유니온 합격 인터뷰 공개 자료에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/watch?v=HLpU0oSomXA",
        "memo": "홍대 유니온 합격 인터뷰 공개 자료에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "홍대 유니온 합격 인터뷰 공개 자료에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "art-rang-art",
    "academyName": "아트랑미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "hongdae-white-stone-art",
    "academyName": "홍대앞 하얀돌미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "design-gogh-art",
    "academyName": "디자인고흐미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "g1-art-hongdae-main",
    "academyName": "G1미술학원 홍대본원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "transfer-creation-hongdae",
    "academyName": "미대편입창조 홍대캠퍼스",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "cnc-art-hongdae-main",
    "academyName": "씨앤씨미술학원 홍대본원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "artigen-art",
    "academyName": "아티젠미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "art-in-nature",
    "academyName": "아트인네이처",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "neocat-art-hongdae",
    "academyName": "네오캣미술학원 홍대앞",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      },
      {
        "schoolName": "홍익대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      },
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      },
      {
        "schoolName": "고려대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      },
      {
        "schoolName": "성균관대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
        "memo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "네오캣 공식 사이트의 연도별 합격 결과에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "hongdae-greenseom-art",
    "academyName": "홍대앞 그린섬미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "hongdae-cheong-art",
    "academyName": "홍대앞 청미술학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "hongdae-dohwaseon-korean-art",
    "academyName": "홍대 도화선한국화학원",
    "region": "서울",
    "district": "마포구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "nowon-veteran-art",
    "academyName": "노원 베테랑미술학원",
    "region": "서울",
    "district": "노원구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "nowon-creation-morning-art",
    "academyName": "노원 창조의아침미술학원",
    "region": "서울",
    "district": "노원구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "nowon-thousand-smile-art",
    "academyName": "노원 천년의미소미술학원",
    "region": "서울",
    "district": "노원구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "design-k-art",
    "academyName": "디자인K미술학원",
    "region": "서울",
    "district": "노원구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "nowon-dna-art",
    "academyName": "노원디앤에이미술학원",
    "region": "서울",
    "district": "노원구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "north-anyforce",
    "academyName": "북부 애니포스",
    "region": "서울",
    "district": "노원구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "nokji-art",
    "academyName": "녹지미술학원",
    "region": "서울",
    "district": "서초구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "songpa-metacode-art",
    "academyName": "송파 메타코드미술학원",
    "region": "서울",
    "district": "송파구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-park-sam-david-sculpture",
    "academyName": "박샘다비드조소학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-artforce-study-abroad-art",
    "academyName": "아트포스유학미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-iam-art",
    "academyName": "아이엠미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-ace-art",
    "academyName": "에이스미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-pentone-art",
    "academyName": "펜톤미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-artm-art",
    "academyName": "아트엠미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-gangnam-artpoem",
    "academyName": "강남아트포엠미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-yein-art-school",
    "academyName": "예중예고예인학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-design-gogh-main",
    "academyName": "디자인고흐본관미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.youtube.com/playlist?list=PL8qk7Xen2x07rbKWyWQxv0KCjImAcDFig",
        "memo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "디자인고흐 합격 인터뷰/공개 기사에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "seolleung-cnc-art",
    "academyName": "선릉씨앤씨미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-metacode-ssam-art",
    "academyName": "메타코드쌤미술학원 강남본원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "중앙대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "성신여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "서경대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      },
      {
        "schoolName": "경희대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2424",
        "memo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "아트앤디자인 학원 정보의 합격생 인터뷰 목록 및 공개 채널 소개에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangnam-cloud-art",
    "academyName": "강남 클라우드미술학원",
    "region": "서울",
    "district": "강남구",
    "schoolTags": [
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.cloudart.co.kr/html/sub5_10.html",
        "memo": "강남 클라우드 공식 합격 인터뷰/합격후기에서 확인한 대학입니다."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.cloudart.co.kr/html/sub5_10.html",
        "memo": "강남 클라우드 공식 합격 인터뷰/합격후기에서 확인한 대학입니다."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.cloudart.co.kr/html/sub5_10.html",
        "memo": "강남 클라우드 공식 합격 인터뷰/합격후기에서 확인한 대학입니다."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "강남 클라우드 공식 합격 인터뷰/합격후기에서 확인한 대학입니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-suwon-realmotion",
    "academyName": "수원 리얼모션 미술학원",
    "region": "경기",
    "district": "수원시 장안구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-suwon-people",
    "academyName": "수원 피플 미술학원",
    "region": "경기",
    "district": "수원시 장안구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-suwon-point",
    "academyName": "수원 포인트 미술학원",
    "region": "경기",
    "district": "수원시 영통구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-yongin-mentor-suji",
    "academyName": "멘토미술학원 수지",
    "region": "경기",
    "district": "용인시 수지구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-yongin-suji-changa",
    "academyName": "수지 창조의아침 미술학원",
    "region": "경기",
    "district": "용인시 수지구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-yongin-dongbaek-greensum",
    "academyName": "용인 동백 그린섬 미술학원",
    "region": "경기",
    "district": "용인시 기흥구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-yongin-anipop",
    "academyName": "애니팝만화학원",
    "region": "경기",
    "district": "용인시 수지구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-gwangmyeong-highfive",
    "academyName": "광명 하이파이브미술학원",
    "region": "경기",
    "district": "광명시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-gwangmyeong-haan-highfive",
    "academyName": "하안 하이파이브미술학원",
    "region": "경기",
    "district": "광명시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-bucheon-main-highfive",
    "academyName": "부천 입시본원 하이파이브미술학원",
    "region": "경기",
    "district": "부천시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-bucheon-beombak-hi5-anihi",
    "academyName": "부천 범박 Hi5.ANiHi 미술학원",
    "region": "경기",
    "district": "부천시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-seongnam-bundang-migeum-changa",
    "academyName": "분당미금 창조의아침 미술학원",
    "region": "경기",
    "district": "성남시 분당구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-seongnam-yatap-cnc",
    "academyName": "야탑씨앤씨미술학원",
    "region": "경기",
    "district": "성남시 분당구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-seongnam-sunae-cnc",
    "academyName": "분당 수내역씨앤씨미술학원",
    "region": "경기",
    "district": "성남시 분당구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-seongnam-bundang-forever-smile",
    "academyName": "분당 영원한미소 미술학원",
    "region": "경기",
    "district": "성남시 분당구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-ansan-greensum",
    "academyName": "안산 그린섬미술학원",
    "region": "경기",
    "district": "안산시 단원구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-ansan-kuna",
    "academyName": "안산 쿠나 미술학원",
    "region": "경기",
    "district": "안산시 단원구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-ansan-gojan-cnc",
    "academyName": "안산 고잔신도시 씨앤씨미술학원",
    "region": "경기",
    "district": "안산시 단원구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-paju-unjeong-cnc",
    "academyName": "씨앤씨미술학원 파주운정",
    "region": "경기",
    "district": "파주시",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeonggi-gimpo-changa",
    "academyName": "김포 창조의아침 미술학원",
    "region": "경기",
    "district": "김포시",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-myeongryun-designbox",
    "academyName": "디자인박스미술학원 명륜",
    "region": "부산",
    "district": "동래구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-daesin-greensum",
    "academyName": "그린섬미술학원 부산대신동캠퍼스",
    "region": "부산",
    "district": "서구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-haeundae-b2b",
    "academyName": "해운대 비투비미술학원",
    "region": "부산",
    "district": "해운대구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경희대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "한양대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "중앙대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성신여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성균관대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "단국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "덕성여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "세종대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "상명대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경북대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부산대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부경대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동아대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-dangri-changa",
    "academyName": "당리 창조의아침미술학원",
    "region": "부산",
    "district": "사하구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-saha-b2b",
    "academyName": "사하 비투비미술학원",
    "region": "부산",
    "district": "사하구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경희대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "한양대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "중앙대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성신여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성균관대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "단국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "덕성여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "세종대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "상명대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경북대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부산대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부경대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동아대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-yangjeong-b2b",
    "academyName": "양정 비투비미술학원",
    "region": "부산",
    "district": "부산진구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경희대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "한양대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "중앙대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성신여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성균관대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "단국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "덕성여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "세종대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "상명대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경북대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부산대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부경대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동아대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-myeongryun-gaudi",
    "academyName": "명륜 가우디미술학원",
    "region": "부산",
    "district": "동래구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-seogu-jang-art",
    "academyName": "장미술학원",
    "region": "부산",
    "district": "서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-hwamyeong-greensum",
    "academyName": "그린섬미술학원 화명",
    "region": "부산",
    "district": "북구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "busan-myeongryun-b2b",
    "academyName": "비투비미술학원 명륜",
    "region": "부산",
    "district": "동래구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경희대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "한양대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "서울여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "중앙대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "숙명여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성신여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "성균관대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "단국대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동덕여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "덕성여자대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "세종대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "상명대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "경북대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부산대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "부경대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      },
      {
        "schoolName": "동아대학교",
        "source": "공식 확인",
        "sourceUrl": "https://www.beetwobee.com/BTB-PASS",
        "memo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "비투비 공식 합격결과 페이지에서 확인한 대학입니다. 지점별 결과는 추후 세부 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-designpida",
    "academyName": "디자인피다입시미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-tint",
    "academyName": "울산틴트미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-anisoop",
    "academyName": "애니숲미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-design-z",
    "academyName": "디자인제트앤잔미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-dna-art",
    "academyName": "울산디앤에이미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-hwan-art",
    "academyName": "환미술학원",
    "region": "울산",
    "district": "동구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-flower-art",
    "academyName": "플라워입시미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-choi-byungmoon",
    "academyName": "최병문미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-jangjiwon-greensum",
    "academyName": "울산그린섬·장지원그린섬미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "ulsan-artinshop",
    "academyName": "아트인샵미술학원",
    "region": "울산",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-seongseo-dreamworks",
    "academyName": "성서 드림웍스 미술학원",
    "region": "대구",
    "district": "달서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-design-dalli",
    "academyName": "디자인달리 미술학원",
    "region": "대구",
    "district": "달서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-myeongdeok-soonsoo",
    "academyName": "순수미술학원 명덕",
    "region": "대구",
    "district": "중구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-suseong-cloud",
    "academyName": "수성클라우드미술학원",
    "region": "대구",
    "district": "수성구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-siji-changa",
    "academyName": "창조의아침미술학원 시지",
    "region": "대구",
    "district": "수성구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-suseong-changa",
    "academyName": "창조의아침미술학원 수성",
    "region": "대구",
    "district": "수성구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-siji-clickintro",
    "academyName": "클릭인트로미술학원 시지",
    "region": "대구",
    "district": "수성구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-sangin-clickjeonwon",
    "academyName": "클릭전원미술학원 상인",
    "region": "대구",
    "district": "달서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-myeongdeok-intro",
    "academyName": "인트로미술학원 명덕",
    "region": "대구",
    "district": "중구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daegu-suseong-cnc",
    "academyName": "씨앤씨미술학원 수성",
    "region": "대구",
    "district": "수성구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-cheomdan-greensum",
    "academyName": "그린섬미술학원 첨단",
    "region": "광주",
    "district": "광산구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-highfive",
    "academyName": "하이파이브미술학원 광주",
    "region": "광주",
    "district": "북구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-jinwol-cnc",
    "academyName": "씨앤씨미술학원 진월",
    "region": "광주",
    "district": "남구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-suwandong-amax",
    "academyName": "에이맥스미술학원 수완동",
    "region": "광주",
    "district": "광산구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-jinwol-amax",
    "academyName": "에이맥스미술학원 진월",
    "region": "광주",
    "district": "남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-suwan-cnc",
    "academyName": "수완 씨앤씨미술학원",
    "region": "광주",
    "district": "광산구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gwangju-animax",
    "academyName": "애니맥스미술학원",
    "region": "광주",
    "district": "동구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daejeon-dunsan-highfive",
    "academyName": "둔산 하이파이브미술학원",
    "region": "대전",
    "district": "서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daejeon-songchon-thekkeullim",
    "academyName": "더끌림미술학원 송촌",
    "region": "대전",
    "district": "대덕구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daejeon-noeun-highfive",
    "academyName": "하이파이브미술학원 노은",
    "region": "대전",
    "district": "유성구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daejeon-dunsan-designpeople",
    "academyName": "디자인피플미술학원 둔산",
    "region": "대전",
    "district": "서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daejeon-tomato",
    "academyName": "토마토미술학원",
    "region": "대전",
    "district": "서구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "daejeon-nadaum",
    "academyName": "나다움미술학원 대전",
    "region": "대전",
    "district": "중구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonbuk-gunsan-im-janus",
    "academyName": "아이엠야누스미술학원",
    "region": "전북",
    "district": "군산시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonbuk-gunsan-gooddesign",
    "academyName": "굿디자인미술학원 수송",
    "region": "전북",
    "district": "군산시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonbuk-jeonju-seobu-greensum",
    "academyName": "그린섬미술학원 전주서부",
    "region": "전북",
    "district": "전주시 완산구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonbuk-jeonju-songcheon-greensum",
    "academyName": "그린섬미술학원 전주송천",
    "region": "전북",
    "district": "전주시 덕진구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "고려대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "가천대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://www.greensum.com/gallery?sca=%ED%95%A9%EA%B2%A9%EC%9E%91",
        "memo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "그린섬 공식 합격작/합격 인터뷰 페이지에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonbuk-jeonju-gyeongwon-changa",
    "academyName": "창조의아침미술학원 전주경원",
    "region": "전북",
    "district": "전주시 완산구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonbuk-jeonju-seosin-lightshadow",
    "academyName": "빛과그림자미술학원 서신",
    "region": "전북",
    "district": "전주시 완산구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonnam-yeosu-hongik",
    "academyName": "홍익입시미술학원 여수",
    "region": "전남",
    "district": "여수시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonnam-gwangyang-cnc-jungdong",
    "academyName": "씨앤씨미술학원 광양중동",
    "region": "전남",
    "district": "광양시",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonnam-gwangyang-cnc",
    "academyName": "씨앤씨미술학원 광양",
    "region": "전남",
    "district": "광양시",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://cncart.co.kr/awards",
        "memo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "C&C 브랜드 합격자 및 수상자 페이지와 캠퍼스 소개에서 확인한 대학입니다. 지점별 차이는 검수 필요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonnam-suncheon-anistar",
    "academyName": "애니스타미술학원 순천",
    "region": "전남",
    "district": "순천시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonnam-suncheon-otoo",
    "academyName": "오투미술학원 순천",
    "region": "전남",
    "district": "순천시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeonnam-mokpo-designstar",
    "academyName": "디자인스타미술학원 목포",
    "region": "전남",
    "district": "목포시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeju-define-ido",
    "academyName": "디파인미술학원 이도",
    "region": "제주",
    "district": "제주시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "jeju-cubic",
    "academyName": "큐빅미술학원 제주",
    "region": "제주",
    "district": "제주시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "chungnam-asan-forever-smile",
    "academyName": "영원한미소미술학원 아산",
    "region": "충남",
    "district": "아산시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "chungnam-dangjin-designtalk",
    "academyName": "디자인톡미술학원 당진",
    "region": "충남",
    "district": "당진시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "chungnam-dangjin-jq",
    "academyName": "제이큐미술학원 당진",
    "region": "충남",
    "district": "당진시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "chungnam-cheonan-designstar",
    "academyName": "디자인스타미술학원 천안",
    "region": "충남",
    "district": "천안시 동남구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "chungbuk-cheongju-grid",
    "academyName": "그리드미술학원 청주",
    "region": "충북",
    "district": "청주시 상당구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "chungbuk-cheongju-changa",
    "academyName": "창조의아침미술학원 청주",
    "region": "충북",
    "district": "청주시 상당구",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "sejong-anihi",
    "academyName": "애니하이만화학원 세종",
    "region": "세종",
    "district": "세종특별자치시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangwon-donghae-sun",
    "academyName": "선미술학원 동해",
    "region": "강원",
    "district": "동해시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangwon-donghae-hongik-ars",
    "academyName": "홍익아르스입시미술학원 동해",
    "region": "강원",
    "district": "동해시",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gangwon-gangneung-changa",
    "academyName": "창조의아침미술학원 강릉",
    "region": "강원",
    "district": "강릉시",
    "schoolTags": [
      {
        "schoolName": "서울대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "한국예술종합학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "국민대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "건국대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "홍익대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "이화여자대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      },
      {
        "schoolName": "서울과학기술대학교",
        "source": "보조 출처 확인",
        "sourceUrl": "https://changa.net/art/board.php?board=changapass1",
        "memo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요."
      }
    ],
    "researchStatus": "근거 확인",
    "researchMemo": "창조의아침 브랜드 합격자 명단에서 확인한 대학입니다. 지점별 데이터는 추후 리뷰 기반으로 보강하세요.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeongnam-changwon-coco",
    "academyName": "코코미술학원 창원",
    "region": "경남",
    "district": "창원시 성산구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeongnam-changwon-designstar",
    "academyName": "디자인스타미술학원 창원",
    "region": "경남",
    "district": "창원시 성산구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  },
  {
    "academyId": "gyeongbuk-pohang-nadaum",
    "academyName": "나다움미술학원 포항",
    "region": "경북",
    "district": "포항시 북구",
    "schoolTags": [],
    "researchStatus": "근거 부족",
    "researchMemo": "공식 채널·합격 인터뷰·보조 출처에서 특정 대학명을 충분히 확인하지 못해 빈 배열로 유지했습니다.",
    "updatedAt": "2026-06-13T00:00:00.000Z"
  }
];

export const academySchoolTagOverrides = academySchoolTagResearchInitial152
  .filter((item) => item.schoolTags.length > 0)
  .map((item) => ({
    academyId: item.academyId,
    schoolTags: item.schoolTags,
    updatedAt: item.updatedAt,
  }));

export const getSchoolTagResearchByAcademyId = (academyId: string) => {
  return academySchoolTagResearchInitial152.find((item) => item.academyId === academyId) ?? null;
};

export const applyAcademySchoolTagResearch = <T extends { id: string; schoolTags?: AcademySchoolTag[] }>(
  academies: T[],
) => {
  return academies.map((academy) => {
    const research = getSchoolTagResearchByAcademyId(academy.id);
    if (!research || research.schoolTags.length === 0) {
      return {
        ...academy,
        schoolTags: academy.schoolTags ?? [],
        schoolTagResearchStatus: research?.researchStatus ?? "근거 부족",
        schoolTagResearchMemo: research?.researchMemo ?? "주요 대비 대학 조사 전입니다.",
      };
    }

    return {
      ...academy,
      schoolTags: research.schoolTags,
      schoolTagResearchStatus: research.researchStatus,
      schoolTagResearchMemo: research.researchMemo,
    };
  });
};
