// 미대이음 278개 학원명/지역명 정규화 데이터
// 목적: 학원명 표기 흔들림(C&C/씨앤씨, 강남/선릉, 띄어쓰기 등)을 통일한다.
// 원칙: 화면 표시명은 "미술학원명 지역명" 형태를 기본으로 한다. 예: 랩미술학원 선릉

export type AcademyNameNormalizationConfidence = "자동 정규화" | "운영자 확인 필요";

export type AcademyNameNormalization = {
  academyId: string;
  originalName: string;
  normalizedName: string;
  baseName: string;
  branchName: string;
  displayLocation: string;
  canonicalBrand: string;
  aliases: string[];
  confidence: AcademyNameNormalizationConfidence;
  memo?: string | null;
};

export const academyNameNormalizations: AcademyNameNormalization[] = [
  {
    "academyId": "gangnam-veteran-art",
    "originalName": "강남 베테랑미술학원",
    "normalizedName": "베테랑미술학원 선릉",
    "baseName": "베테랑미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "베테랑",
    "aliases": [
      "강남 베테랑미술학원",
      "베테랑 미술학원 선릉",
      "베테랑미술학원",
      "베테랑미술학원 선릉",
      "선릉 베테랑미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-creation-morning-art",
    "originalName": "강남 창조의아침미술학원",
    "normalizedName": "창조의아침미술학원 선릉",
    "baseName": "창조의아침미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 삼성동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "강남 창조의아침미술학원",
      "선릉 창조의아침미술학원",
      "창조의아침 미술학원 선릉",
      "창조의아침미술학원",
      "창조의아침미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-godo-art",
    "originalName": "강남 고도미술학원",
    "normalizedName": "고도미술학원 도곡",
    "baseName": "고도미술학원",
    "branchName": "도곡",
    "displayLocation": "서울 강남구 도곡동",
    "canonicalBrand": "고도",
    "aliases": [
      "강남 고도미술학원",
      "고도 미술학원 도곡",
      "고도미술학원",
      "고도미술학원 도곡",
      "도곡 고도미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-thousand-smile-art",
    "originalName": "강남 천년의미소미술학원",
    "normalizedName": "천년의미소미술학원 선릉",
    "baseName": "천년의미소미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "천년의미소",
    "aliases": [
      "강남 천년의미소미술학원",
      "선릉 천년의미소미술학원",
      "천년의미소 미술학원 선릉",
      "천년의미소미술학원",
      "천년의미소미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-heracles-art",
    "originalName": "강남 헤라클레스미술학원",
    "normalizedName": "헤라클레스미술학원 선릉",
    "baseName": "헤라클레스미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "헤라클레스",
    "aliases": [
      "강남 헤라클레스미술학원",
      "선릉 헤라클레스미술학원",
      "헤라클레스 미술학원 선릉",
      "헤라클레스미술학원",
      "헤라클레스미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-whiteworld-art",
    "originalName": "강남 하얀세상미술학원",
    "normalizedName": "하얀세상미술학원 선릉",
    "baseName": "하얀세상미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "하얀세상",
    "aliases": [
      "강남 하얀세상미술학원",
      "선릉 하얀세상미술학원",
      "하얀세상 미술학원 선릉",
      "하얀세상미술학원",
      "하얀세상미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-irum-art",
    "originalName": "이룸미술학원",
    "normalizedName": "이룸미술학원 선릉",
    "baseName": "이룸미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "이룸",
    "aliases": [
      "선릉 이룸미술학원",
      "이룸 미술학원 선릉",
      "이룸미술학원",
      "이룸미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-geunad-art",
    "originalName": "강남 그나드미술학원",
    "normalizedName": "그나드미술학원 선릉",
    "baseName": "그나드미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "그나드",
    "aliases": [
      "강남 그나드미술학원",
      "그나드 미술학원 선릉",
      "그나드미술학원",
      "그나드미술학원 선릉",
      "선릉 그나드미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-people-art",
    "originalName": "강남 피플미술학원",
    "normalizedName": "피플미술학원 선릉",
    "baseName": "피플미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉로 인근",
    "canonicalBrand": "피플",
    "aliases": [
      "강남 피플미술학원",
      "선릉 피플미술학원",
      "피플 미술학원 선릉",
      "피플미술학원",
      "피플미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-lion-art",
    "originalName": "리온미술학원",
    "normalizedName": "리온미술학원 선릉",
    "baseName": "리온미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉로 인근",
    "canonicalBrand": "리온",
    "aliases": [
      "리온 미술학원 선릉",
      "리온미술학원",
      "리온미술학원 선릉",
      "선릉 리온미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-egamdong-art",
    "originalName": "이감동미술학원",
    "normalizedName": "이감동미술학원 대치",
    "baseName": "이감동미술학원",
    "branchName": "대치",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "이감동",
    "aliases": [
      "대치 이감동미술학원",
      "이감동 미술학원 대치",
      "이감동미술학원",
      "이감동미술학원 대치"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-antenna-art",
    "originalName": "강남 안테나미술학원",
    "normalizedName": "안테나미술학원 선릉",
    "baseName": "안테나미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "안테나",
    "aliases": [
      "강남 안테나미술학원",
      "선릉 안테나미술학원",
      "안테나 미술학원 선릉",
      "안테나미술학원",
      "안테나미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-dohwaseon-korean-art",
    "originalName": "강남 도화선한국화미술학원",
    "normalizedName": "도화선한국화미술학원 선릉",
    "baseName": "도화선한국화미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "도화선한국화",
    "aliases": [
      "강남 도화선한국화미술학원",
      "도화선한국화 미술학원 선릉",
      "도화선한국화미술학원",
      "도화선한국화미술학원 선릉",
      "선릉 도화선한국화미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-gaon-art",
    "originalName": "강남 가온미술학원",
    "normalizedName": "가온미술학원 선릉",
    "baseName": "가온미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "가온",
    "aliases": [
      "가온 미술학원 선릉",
      "가온미술학원",
      "가온미술학원 선릉",
      "강남 가온미술학원",
      "선릉 가온미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-saramin-art",
    "originalName": "강남 사람인미술학원",
    "normalizedName": "사람인미술학원 대치",
    "baseName": "사람인미술학원",
    "branchName": "대치",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "사람인",
    "aliases": [
      "강남 사람인미술학원",
      "대치 사람인미술학원",
      "사람인 미술학원 대치",
      "사람인미술학원",
      "사람인미술학원 대치"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-owon-korean-art",
    "originalName": "강남 오원한국화미술학원",
    "normalizedName": "오원한국화미술학원 선릉",
    "baseName": "오원한국화미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "오원한국화",
    "aliases": [
      "강남 오원한국화미술학원",
      "선릉 오원한국화미술학원",
      "오원한국화 미술학원 선릉",
      "오원한국화미술학원",
      "오원한국화미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-modus-comic-animation",
    "originalName": "강남 모두스만화애니전문학원",
    "normalizedName": "모두스만화애니전문학원 선릉",
    "baseName": "모두스만화애니전문학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "모두스만화애니전문학원",
    "aliases": [
      "강남 모두스만화애니전문학원",
      "모두스만화애니전문학원",
      "모두스만화애니전문학원 선릉",
      "선릉 모두스만화애니전문학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-tium-art",
    "originalName": "강남 티움미술학원",
    "normalizedName": "티움미술학원 대치",
    "baseName": "티움미술학원",
    "branchName": "대치",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "티움",
    "aliases": [
      "강남 티움미술학원",
      "대치 티움미술학원",
      "티움 미술학원 대치",
      "티움미술학원",
      "티움미술학원 대치"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-anyforce",
    "originalName": "강남 애니포스",
    "normalizedName": "애니포스미술학원 선릉",
    "baseName": "애니포스미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "애니포스",
    "aliases": [
      "강남 애니포스",
      "선릉 애니포스미술학원",
      "애니포스 미술학원 선릉",
      "애니포스미술학원",
      "애니포스미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-ipche",
    "originalName": "강남 입체",
    "normalizedName": "입체미술학원 선릉",
    "baseName": "입체미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "입체",
    "aliases": [
      "강남 입체",
      "선릉 입체미술학원",
      "입체 미술학원 선릉",
      "입체미술학원",
      "입체미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-thekkeullim",
    "originalName": "강남 더끌림",
    "normalizedName": "더끌림미술학원 선릉",
    "baseName": "더끌림미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉로 인근",
    "canonicalBrand": "더끌림",
    "aliases": [
      "강남 더끌림",
      "더끌림 미술학원 선릉",
      "더끌림미술학원",
      "더끌림미술학원 선릉",
      "선릉 더끌림미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daechi-thebom",
    "originalName": "대치 더봄",
    "normalizedName": "더봄미술학원 선릉",
    "baseName": "더봄미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "더봄",
    "aliases": [
      "대치 더봄",
      "더봄 미술학원 선릉",
      "더봄미술학원",
      "더봄미술학원 선릉",
      "선릉 더봄미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-transfer-creation",
    "originalName": "강남 미대편입창조 강남캠퍼스",
    "normalizedName": "미대편입창조 강남",
    "baseName": "미대편입창조",
    "branchName": "강남",
    "displayLocation": "서울 강남구 강남역 인근",
    "canonicalBrand": "미대편입창조",
    "aliases": [
      "강남 미대편입창조",
      "강남 미대편입창조 강남캠퍼스",
      "미대편입창조",
      "미대편입창조 강남"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-bareun-art",
    "originalName": "강남 바른미술학원",
    "normalizedName": "바른미술학원 압구정",
    "baseName": "바른미술학원",
    "branchName": "압구정",
    "displayLocation": "서울 강남구 압구정 인근",
    "canonicalBrand": "바른",
    "aliases": [
      "강남 바른미술학원",
      "바른 미술학원 압구정",
      "바른미술학원",
      "바른미술학원 압구정",
      "압구정 바른미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-cnc-art",
    "originalName": "강남 씨앤씨미술학원",
    "normalizedName": "C&C미술학원 한티",
    "baseName": "C&C미술학원",
    "branchName": "한티",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 한티",
      "C&C미술학원",
      "C&C미술학원 한티",
      "CNC미술학원",
      "CNC미술학원 한티",
      "c&c미술학원",
      "c&c미술학원 한티",
      "강남 C&C미술학원",
      "강남 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 한티",
      "한티 C&C미술학원",
      "한티 CNC미술학원",
      "한티 c&c미술학원",
      "한티 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-dots-art",
    "originalName": "강남 닷츠미술학원",
    "normalizedName": "닷츠미술학원 선릉",
    "baseName": "닷츠미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "닷츠",
    "aliases": [
      "강남 닷츠미술학원",
      "닷츠 미술학원 선릉",
      "닷츠미술학원",
      "닷츠미술학원 선릉",
      "선릉 닷츠미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-gaudi-art",
    "originalName": "강남 가우디미술학원",
    "normalizedName": "가우디미술학원 도곡",
    "baseName": "가우디미술학원",
    "branchName": "도곡",
    "displayLocation": "서울 강남구 도곡동 인근",
    "canonicalBrand": "가우디",
    "aliases": [
      "가우디 미술학원 도곡",
      "가우디미술학원",
      "가우디미술학원 도곡",
      "강남 가우디미술학원",
      "도곡 가우디미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-pharaoh-art",
    "originalName": "강남 파라오미술학원",
    "normalizedName": "파라오미술학원 선릉",
    "baseName": "파라오미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉로 인근",
    "canonicalBrand": "파라오",
    "aliases": [
      "강남 파라오미술학원",
      "선릉 파라오미술학원",
      "파라오 미술학원 선릉",
      "파라오미술학원",
      "파라오미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongdae-design-soul-art",
    "originalName": "홍대 디자인쏘울미술학원",
    "normalizedName": "디자인쏘울미술학원 홍대",
    "baseName": "디자인쏘울미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 서교동",
    "canonicalBrand": "디자인쏘울",
    "aliases": [
      "디자인쏘울 미술학원 홍대",
      "디자인쏘울미술학원",
      "디자인쏘울미술학원 홍대",
      "홍대 디자인쏘울미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongdae-union-art",
    "originalName": "홍대 유니온미술학원",
    "normalizedName": "유니온미술학원 홍대",
    "baseName": "유니온미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 서교동",
    "canonicalBrand": "유니온",
    "aliases": [
      "유니온 미술학원 홍대",
      "유니온미술학원",
      "유니온미술학원 홍대",
      "홍대 유니온미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "art-rang-art",
    "originalName": "아트랑미술학원",
    "normalizedName": "아트랑미술학원 성산",
    "baseName": "아트랑미술학원",
    "branchName": "성산",
    "displayLocation": "서울 마포구 성산동",
    "canonicalBrand": "아트랑",
    "aliases": [
      "성산 아트랑미술학원",
      "아트랑 미술학원 성산",
      "아트랑미술학원",
      "아트랑미술학원 성산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongdae-white-stone-art",
    "originalName": "홍대앞 하얀돌미술학원",
    "normalizedName": "하얀돌미술학원 홍대",
    "baseName": "하얀돌미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 서교동",
    "canonicalBrand": "하얀돌",
    "aliases": [
      "하얀돌 미술학원 홍대",
      "하얀돌미술학원",
      "하얀돌미술학원 홍대",
      "홍대 하얀돌미술학원",
      "홍대앞 하얀돌미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "design-gogh-art",
    "originalName": "디자인고흐미술학원",
    "normalizedName": "디자인고흐미술학원 홍대",
    "baseName": "디자인고흐미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 창전동",
    "canonicalBrand": "디자인고흐",
    "aliases": [
      "디자인고흐 미술학원 홍대",
      "디자인고흐미술학원",
      "디자인고흐미술학원 홍대",
      "홍대 디자인고흐미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "g1-art-hongdae-main",
    "originalName": "G1미술학원 홍대본원",
    "normalizedName": "G1미술학원 홍대",
    "baseName": "G1미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 서교동",
    "canonicalBrand": "G1",
    "aliases": [
      "G1 미술학원 홍대",
      "G1미술학원",
      "G1미술학원 홍대",
      "G1미술학원 홍대본원",
      "홍대 G1미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "transfer-creation-hongdae",
    "originalName": "미대편입창조 홍대캠퍼스",
    "normalizedName": "미대편입창조 홍대",
    "baseName": "미대편입창조",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 서교동",
    "canonicalBrand": "미대편입창조",
    "aliases": [
      "미대편입창조",
      "미대편입창조 홍대",
      "미대편입창조 홍대캠퍼스",
      "홍대 미대편입창조"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "cnc-art-hongdae-main",
    "originalName": "씨앤씨미술학원 홍대본원",
    "normalizedName": "C&C미술학원 홍대",
    "baseName": "C&C미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 서교동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 홍대",
      "C&C미술학원",
      "C&C미술학원 홍대",
      "C&C미술학원 홍대본원",
      "CNC미술학원",
      "CNC미술학원 홍대",
      "c&c미술학원",
      "c&c미술학원 홍대",
      "씨앤씨미술학원",
      "씨앤씨미술학원 홍대",
      "씨앤씨미술학원 홍대본원",
      "홍대 C&C미술학원",
      "홍대 CNC미술학원",
      "홍대 c&c미술학원",
      "홍대 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "artigen-art",
    "originalName": "아티젠미술학원",
    "normalizedName": "아티젠미술학원 홍대",
    "baseName": "아티젠미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 창전동",
    "canonicalBrand": "아티젠",
    "aliases": [
      "아티젠 미술학원 홍대",
      "아티젠미술학원",
      "아티젠미술학원 홍대",
      "홍대 아티젠미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "art-in-nature",
    "originalName": "아트인네이처",
    "normalizedName": "아트인네이처미술학원 홍대",
    "baseName": "아트인네이처미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 홍대앞",
    "canonicalBrand": "아트인네이처",
    "aliases": [
      "아트인네이처",
      "아트인네이처 미술학원 홍대",
      "아트인네이처미술학원",
      "아트인네이처미술학원 홍대",
      "홍대 아트인네이처미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "neocat-art-hongdae",
    "originalName": "네오캣미술학원 홍대앞",
    "normalizedName": "네오캣미술학원 홍대",
    "baseName": "네오캣미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 홍대앞",
    "canonicalBrand": "네오캣",
    "aliases": [
      "네오캣 미술학원 홍대",
      "네오캣미술학원",
      "네오캣미술학원 홍대",
      "네오캣미술학원 홍대앞",
      "홍대 네오캣미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongdae-greenseom-art",
    "originalName": "홍대앞 그린섬미술학원",
    "normalizedName": "그린섬미술학원 홍대",
    "baseName": "그린섬미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 홍대앞",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 홍대",
      "그린섬미술학원",
      "그린섬미술학원 홍대",
      "홍대 그린섬미술학원",
      "홍대앞 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongdae-cheong-art",
    "originalName": "홍대앞 청미술학원",
    "normalizedName": "청미술학원 홍대",
    "baseName": "청미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 홍대앞",
    "canonicalBrand": "청",
    "aliases": [
      "청 미술학원 홍대",
      "청미술학원",
      "청미술학원 홍대",
      "홍대 청미술학원",
      "홍대앞 청미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongdae-dohwaseon-korean-art",
    "originalName": "홍대 도화선한국화학원",
    "normalizedName": "도화선한국화학원 홍대",
    "baseName": "도화선한국화학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구 홍대앞",
    "canonicalBrand": "도화선",
    "aliases": [
      "도화선한국화학원",
      "도화선한국화학원 홍대",
      "홍대 도화선한국화학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "nowon-veteran-art",
    "originalName": "노원 베테랑미술학원",
    "normalizedName": "베테랑미술학원 노원",
    "baseName": "베테랑미술학원",
    "branchName": "노원",
    "displayLocation": "서울 노원구 상계동",
    "canonicalBrand": "베테랑",
    "aliases": [
      "노원 베테랑미술학원",
      "베테랑 미술학원 노원",
      "베테랑미술학원",
      "베테랑미술학원 노원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "nowon-creation-morning-art",
    "originalName": "노원 창조의아침미술학원",
    "normalizedName": "창조의아침미술학원 노원",
    "baseName": "창조의아침미술학원",
    "branchName": "노원",
    "displayLocation": "서울 노원구 상계동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "노원 창조의아침미술학원",
      "창조의아침 미술학원 노원",
      "창조의아침미술학원",
      "창조의아침미술학원 노원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "nowon-thousand-smile-art",
    "originalName": "노원 천년의미소미술학원",
    "normalizedName": "천년의미소미술학원 노원",
    "baseName": "천년의미소미술학원",
    "branchName": "노원",
    "displayLocation": "서울 노원구 상계동",
    "canonicalBrand": "천년의미소",
    "aliases": [
      "노원 천년의미소미술학원",
      "천년의미소 미술학원 노원",
      "천년의미소미술학원",
      "천년의미소미술학원 노원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "design-k-art",
    "originalName": "디자인K미술학원",
    "normalizedName": "디자인K미술학원 노원",
    "baseName": "디자인K미술학원",
    "branchName": "노원",
    "displayLocation": "서울 노원구 상계동",
    "canonicalBrand": "디자인K",
    "aliases": [
      "노원 디자인K미술학원",
      "디자인K 미술학원 노원",
      "디자인K미술학원",
      "디자인K미술학원 노원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "nowon-dna-art",
    "originalName": "노원디앤에이미술학원",
    "normalizedName": "디앤에이미술학원 노원",
    "baseName": "디앤에이미술학원",
    "branchName": "노원",
    "displayLocation": "서울 노원구 상계동",
    "canonicalBrand": "디앤에이",
    "aliases": [
      "노원 디앤에이미술학원",
      "노원디앤에이미술학원",
      "디앤에이 미술학원 노원",
      "디앤에이미술학원",
      "디앤에이미술학원 노원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "north-anyforce",
    "originalName": "북부 애니포스",
    "normalizedName": "애니포스미술학원 북부",
    "baseName": "애니포스미술학원",
    "branchName": "북부",
    "displayLocation": "서울 노원구",
    "canonicalBrand": "애니포스",
    "aliases": [
      "북부 애니포스",
      "북부 애니포스미술학원",
      "애니포스 미술학원 북부",
      "애니포스미술학원",
      "애니포스미술학원 북부"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "nokji-art",
    "originalName": "녹지미술학원",
    "normalizedName": "녹지미술학원 방배",
    "baseName": "녹지미술학원",
    "branchName": "방배",
    "displayLocation": "서울 서초구 방배동",
    "canonicalBrand": "녹지",
    "aliases": [
      "녹지 미술학원 방배",
      "녹지미술학원",
      "녹지미술학원 방배",
      "방배 녹지미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "songpa-metacode-art",
    "originalName": "송파 메타코드미술학원",
    "normalizedName": "메타코드미술학원 송파",
    "baseName": "메타코드미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "메타코드",
    "aliases": [
      "메타코드 미술학원 송파",
      "메타코드미술학원",
      "메타코드미술학원 송파",
      "송파 메타코드미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-park-sam-david-sculpture",
    "originalName": "박샘다비드조소학원",
    "normalizedName": "박샘다비드조소학원 선릉",
    "baseName": "박샘다비드조소학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "박샘다비드",
    "aliases": [
      "박샘다비드조소학원",
      "박샘다비드조소학원 선릉",
      "선릉 박샘다비드조소학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-artforce-study-abroad-art",
    "originalName": "아트포스유학미술학원",
    "normalizedName": "아트포스유학미술학원 선릉",
    "baseName": "아트포스유학미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "아트포스유학",
    "aliases": [
      "선릉 아트포스유학미술학원",
      "아트포스유학 미술학원 선릉",
      "아트포스유학미술학원",
      "아트포스유학미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-iam-art",
    "originalName": "아이엠미술학원",
    "normalizedName": "아이엠미술학원 선릉",
    "baseName": "아이엠미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "아이엠",
    "aliases": [
      "선릉 아이엠미술학원",
      "아이엠 미술학원 선릉",
      "아이엠미술학원",
      "아이엠미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-ace-art",
    "originalName": "에이스미술학원",
    "normalizedName": "에이스미술학원 선릉",
    "baseName": "에이스미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "에이스",
    "aliases": [
      "선릉 에이스미술학원",
      "에이스 미술학원 선릉",
      "에이스미술학원",
      "에이스미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-pentone-art",
    "originalName": "펜톤미술학원",
    "normalizedName": "펜톤미술학원 선릉",
    "baseName": "펜톤미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "펜톤",
    "aliases": [
      "선릉 펜톤미술학원",
      "펜톤 미술학원 선릉",
      "펜톤미술학원",
      "펜톤미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-artm-art",
    "originalName": "아트엠미술학원",
    "normalizedName": "아트엠미술학원 선릉",
    "baseName": "아트엠미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "아트엠",
    "aliases": [
      "선릉 아트엠미술학원",
      "아트엠 미술학원 선릉",
      "아트엠미술학원",
      "아트엠미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-gangnam-artpoem",
    "originalName": "강남아트포엠미술학원",
    "normalizedName": "아트포엠미술학원 선릉",
    "baseName": "아트포엠미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "아트포엠",
    "aliases": [
      "강남아트포엠미술학원",
      "선릉 아트포엠미술학원",
      "아트포엠 미술학원 선릉",
      "아트포엠미술학원",
      "아트포엠미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-yein-art-school",
    "originalName": "예중예고예인학원",
    "normalizedName": "예중예고예인학원 선릉",
    "baseName": "예중예고예인학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "예중예고예인학원",
    "aliases": [
      "선릉 예중예고예인학원",
      "예중예고예인학원",
      "예중예고예인학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-design-gogh-main",
    "originalName": "디자인고흐본관미술학원",
    "normalizedName": "디자인고흐본관미술학원 선릉",
    "baseName": "디자인고흐본관미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "디자인고흐본관",
    "aliases": [
      "디자인고흐본관 미술학원 선릉",
      "디자인고흐본관미술학원",
      "디자인고흐본관미술학원 선릉",
      "선릉 디자인고흐본관미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-cnc-art",
    "originalName": "선릉씨앤씨미술학원",
    "normalizedName": "C&C미술학원 선릉",
    "baseName": "C&C미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 선릉",
      "C&C미술학원",
      "C&C미술학원 선릉",
      "CNC미술학원",
      "CNC미술학원 선릉",
      "c&c미술학원",
      "c&c미술학원 선릉",
      "선릉 C&C미술학원",
      "선릉 CNC미술학원",
      "선릉 c&c미술학원",
      "선릉 씨앤씨미술학원",
      "선릉C&C미술학원",
      "선릉씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-metacode-ssam-art",
    "originalName": "메타코드쌤미술학원 강남본원",
    "normalizedName": "메타코드쌤미술학원 선릉",
    "baseName": "메타코드쌤미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "메타코드쌤",
    "aliases": [
      "메타코드쌤 미술학원 선릉",
      "메타코드쌤미술학원",
      "메타코드쌤미술학원 강남본원",
      "메타코드쌤미술학원 선릉",
      "선릉 메타코드쌤미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-cloud-art",
    "originalName": "강남 클라우드미술학원",
    "normalizedName": "클라우드미술학원 선릉",
    "baseName": "클라우드미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "클라우드",
    "aliases": [
      "강남 클라우드미술학원",
      "선릉 클라우드미술학원",
      "클라우드 미술학원 선릉",
      "클라우드미술학원",
      "클라우드미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-suwon-realmotion",
    "originalName": "수원 리얼모션 미술학원",
    "normalizedName": "리얼모션미술학원 수원",
    "baseName": "리얼모션미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 장안구",
    "canonicalBrand": "리얼모션",
    "aliases": [
      "리얼모션 미술학원 수원",
      "리얼모션미술학원",
      "리얼모션미술학원 수원",
      "수원 리얼모션 미술학원",
      "수원 리얼모션미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-suwon-people",
    "originalName": "수원 피플 미술학원",
    "normalizedName": "피플미술학원 수원",
    "baseName": "피플미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 장안구 천천동",
    "canonicalBrand": "피플",
    "aliases": [
      "수원 피플 미술학원",
      "수원 피플미술학원",
      "피플 미술학원 수원",
      "피플미술학원",
      "피플미술학원 수원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-suwon-point",
    "originalName": "수원 포인트 미술학원",
    "normalizedName": "포인트미술학원 수원",
    "baseName": "포인트미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 영통구",
    "canonicalBrand": "포인트",
    "aliases": [
      "수원 포인트 미술학원",
      "수원 포인트미술학원",
      "포인트 미술학원 수원",
      "포인트미술학원",
      "포인트미술학원 수원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-yongin-mentor-suji",
    "originalName": "멘토미술학원 수지",
    "normalizedName": "멘토미술학원 수지",
    "baseName": "멘토미술학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구 상현동",
    "canonicalBrand": "멘토",
    "aliases": [
      "멘토 미술학원 수지",
      "멘토미술학원",
      "멘토미술학원 수지",
      "수지 멘토미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-yongin-suji-changa",
    "originalName": "수지 창조의아침 미술학원",
    "normalizedName": "창조의아침미술학원 수지",
    "baseName": "창조의아침미술학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "수지 창조의아침 미술학원",
      "수지 창조의아침미술학원",
      "창조의아침 미술학원 수지",
      "창조의아침미술학원",
      "창조의아침미술학원 수지"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-yongin-dongbaek-greensum",
    "originalName": "용인 동백 그린섬 미술학원",
    "normalizedName": "그린섬미술학원 용인",
    "baseName": "그린섬미술학원",
    "branchName": "용인",
    "displayLocation": "경기 용인시 기흥구",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 용인",
      "그린섬미술학원",
      "그린섬미술학원 용인",
      "용인 그린섬미술학원",
      "용인 동백 그린섬 미술학원",
      "용인 동백 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-yongin-anipop",
    "originalName": "애니팝만화학원",
    "normalizedName": "애니팝만화학원 수지",
    "baseName": "애니팝만화학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구",
    "canonicalBrand": "애니팝만화학원",
    "aliases": [
      "수지 애니팝만화학원",
      "애니팝만화학원",
      "애니팝만화학원 수지"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-gwangmyeong-highfive",
    "originalName": "광명 하이파이브미술학원",
    "normalizedName": "하이파이브미술학원 광명",
    "baseName": "하이파이브미술학원",
    "branchName": "광명",
    "displayLocation": "경기 광명시 광명동",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "광명 하이파이브미술학원",
      "하이파이브 미술학원 광명",
      "하이파이브미술학원",
      "하이파이브미술학원 광명"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-gwangmyeong-haan-highfive",
    "originalName": "하안 하이파이브미술학원",
    "normalizedName": "하이파이브미술학원 하안",
    "baseName": "하이파이브미술학원",
    "branchName": "하안",
    "displayLocation": "경기 광명시 하안동",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "하안 하이파이브미술학원",
      "하이파이브 미술학원 하안",
      "하이파이브미술학원",
      "하이파이브미술학원 하안"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-bucheon-main-highfive",
    "originalName": "부천 입시본원 하이파이브미술학원",
    "normalizedName": "하이파이브미술학원 부천",
    "baseName": "하이파이브미술학원",
    "branchName": "부천",
    "displayLocation": "경기 부천시",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "부천 입시본원 하이파이브미술학원",
      "부천 하이파이브미술학원",
      "하이파이브 미술학원 부천",
      "하이파이브미술학원",
      "하이파이브미술학원 부천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-bucheon-beombak-hi5-anihi",
    "originalName": "부천 범박 Hi5.ANiHi 미술학원",
    "normalizedName": "하이파이브미술학원 범박",
    "baseName": "하이파이브미술학원",
    "branchName": "범박",
    "displayLocation": "경기 부천시 범박동",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "범박 하이파이브미술학원",
      "부천 범박 Hi5.ANiHi 미술학원",
      "부천 범박 하이파이브미술학원",
      "하이파이브 미술학원 범박",
      "하이파이브미술학원",
      "하이파이브미술학원 범박"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-seongnam-bundang-migeum-changa",
    "originalName": "분당미금 창조의아침 미술학원",
    "normalizedName": "창조의아침미술학원 미금",
    "baseName": "창조의아침미술학원",
    "branchName": "미금",
    "displayLocation": "경기 성남시 분당구 구미동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "미금 창조의아침미술학원",
      "분당미금 창조의아침 미술학원",
      "분당미금 창조의아침미술학원",
      "창조의아침 미술학원 미금",
      "창조의아침미술학원",
      "창조의아침미술학원 미금"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-seongnam-yatap-cnc",
    "originalName": "야탑씨앤씨미술학원",
    "normalizedName": "C&C미술학원 야탑",
    "baseName": "C&C미술학원",
    "branchName": "야탑",
    "displayLocation": "경기 성남시 분당구 야탑동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 야탑",
      "C&C미술학원",
      "C&C미술학원 야탑",
      "CNC미술학원",
      "CNC미술학원 야탑",
      "c&c미술학원",
      "c&c미술학원 야탑",
      "씨앤씨미술학원",
      "씨앤씨미술학원 야탑",
      "야탑 C&C미술학원",
      "야탑 CNC미술학원",
      "야탑 c&c미술학원",
      "야탑 씨앤씨미술학원",
      "야탑C&C미술학원",
      "야탑씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-seongnam-sunae-cnc",
    "originalName": "분당 수내역씨앤씨미술학원",
    "normalizedName": "C&C미술학원 분당",
    "baseName": "C&C미술학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구 수내동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 분당",
      "C&C미술학원",
      "C&C미술학원 분당",
      "CNC미술학원",
      "CNC미술학원 분당",
      "c&c미술학원",
      "c&c미술학원 분당",
      "분당 C&C미술학원",
      "분당 CNC미술학원",
      "분당 c&c미술학원",
      "분당 수내역C&C미술학원",
      "분당 수내역씨앤씨미술학원",
      "분당 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 분당"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-seongnam-bundang-forever-smile",
    "originalName": "분당 영원한미소 미술학원",
    "normalizedName": "영원한미소미술학원 분당",
    "baseName": "영원한미소미술학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "영원한미소",
    "aliases": [
      "분당 영원한미소 미술학원",
      "분당 영원한미소미술학원",
      "영원한미소 미술학원 분당",
      "영원한미소미술학원",
      "영원한미소미술학원 분당"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-ansan-greensum",
    "originalName": "안산 그린섬미술학원",
    "normalizedName": "그린섬미술학원 안산",
    "baseName": "그린섬미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 단원구 고잔동",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 안산",
      "그린섬미술학원",
      "그린섬미술학원 안산",
      "안산 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-ansan-kuna",
    "originalName": "안산 쿠나 미술학원",
    "normalizedName": "쿠나미술학원 안산",
    "baseName": "쿠나미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 단원구",
    "canonicalBrand": "쿠나",
    "aliases": [
      "안산 쿠나 미술학원",
      "안산 쿠나미술학원",
      "쿠나 미술학원 안산",
      "쿠나미술학원",
      "쿠나미술학원 안산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-ansan-gojan-cnc",
    "originalName": "안산 고잔신도시 씨앤씨미술학원",
    "normalizedName": "C&C미술학원 안산",
    "baseName": "C&C미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 단원구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 안산",
      "C&C미술학원",
      "C&C미술학원 안산",
      "CNC미술학원",
      "CNC미술학원 안산",
      "c&c미술학원",
      "c&c미술학원 안산",
      "씨앤씨미술학원",
      "씨앤씨미술학원 안산",
      "안산 C&C미술학원",
      "안산 CNC미술학원",
      "안산 c&c미술학원",
      "안산 고잔신도시 C&C미술학원",
      "안산 고잔신도시 씨앤씨미술학원",
      "안산 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-paju-unjeong-cnc",
    "originalName": "씨앤씨미술학원 파주운정",
    "normalizedName": "C&C미술학원 파주운정",
    "baseName": "C&C미술학원",
    "branchName": "파주운정",
    "displayLocation": "경기 파주시 동패동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 파주운정",
      "C&C미술학원",
      "C&C미술학원 파주운정",
      "CNC미술학원",
      "CNC미술학원 파주운정",
      "c&c미술학원",
      "c&c미술학원 파주운정",
      "씨앤씨미술학원",
      "씨앤씨미술학원 파주운정",
      "파주운정 C&C미술학원",
      "파주운정 CNC미술학원",
      "파주운정 c&c미술학원",
      "파주운정 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeonggi-gimpo-changa",
    "originalName": "김포 창조의아침 미술학원",
    "normalizedName": "창조의아침미술학원 김포",
    "baseName": "창조의아침미술학원",
    "branchName": "김포",
    "displayLocation": "경기 김포시 북변동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "김포 창조의아침 미술학원",
      "김포 창조의아침미술학원",
      "창조의아침 미술학원 김포",
      "창조의아침미술학원",
      "창조의아침미술학원 김포"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-myeongryun-designbox",
    "originalName": "디자인박스미술학원 명륜",
    "normalizedName": "디자인박스미술학원 명륜",
    "baseName": "디자인박스미술학원",
    "branchName": "명륜",
    "displayLocation": "부산 동래구 명륜동",
    "canonicalBrand": "디자인박스",
    "aliases": [
      "디자인박스 미술학원 명륜",
      "디자인박스미술학원",
      "디자인박스미술학원 명륜",
      "명륜 디자인박스미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-daesin-greensum",
    "originalName": "그린섬미술학원 부산대신동캠퍼스",
    "normalizedName": "그린섬미술학원 부산",
    "baseName": "그린섬미술학원",
    "branchName": "부산",
    "displayLocation": "부산 서구 서대신동",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 부산",
      "그린섬미술학원",
      "그린섬미술학원 부산",
      "그린섬미술학원 부산대신동캠퍼스",
      "부산 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-haeundae-b2b",
    "originalName": "해운대 비투비미술학원",
    "normalizedName": "비투비미술학원 해운대",
    "baseName": "비투비미술학원",
    "branchName": "해운대",
    "displayLocation": "부산 해운대구 좌동",
    "canonicalBrand": "비투비",
    "aliases": [
      "비투비 미술학원 해운대",
      "비투비미술학원",
      "비투비미술학원 해운대",
      "해운대 비투비미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-dangri-changa",
    "originalName": "당리 창조의아침미술학원",
    "normalizedName": "창조의아침미술학원 당리",
    "baseName": "창조의아침미술학원",
    "branchName": "당리",
    "displayLocation": "부산 사하구 당리동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "당리 창조의아침미술학원",
      "창조의아침 미술학원 당리",
      "창조의아침미술학원",
      "창조의아침미술학원 당리"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-saha-b2b",
    "originalName": "사하 비투비미술학원",
    "normalizedName": "비투비미술학원 사하",
    "baseName": "비투비미술학원",
    "branchName": "사하",
    "displayLocation": "부산 사하구 당리동",
    "canonicalBrand": "비투비",
    "aliases": [
      "비투비 미술학원 사하",
      "비투비미술학원",
      "비투비미술학원 사하",
      "사하 비투비미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-yangjeong-b2b",
    "originalName": "양정 비투비미술학원",
    "normalizedName": "비투비미술학원 양정",
    "baseName": "비투비미술학원",
    "branchName": "양정",
    "displayLocation": "부산 부산진구 양정동",
    "canonicalBrand": "비투비",
    "aliases": [
      "비투비 미술학원 양정",
      "비투비미술학원",
      "비투비미술학원 양정",
      "양정 비투비미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-myeongryun-gaudi",
    "originalName": "명륜 가우디미술학원",
    "normalizedName": "가우디미술학원 명륜",
    "baseName": "가우디미술학원",
    "branchName": "명륜",
    "displayLocation": "부산 동래구 명륜동",
    "canonicalBrand": "가우디",
    "aliases": [
      "가우디 미술학원 명륜",
      "가우디미술학원",
      "가우디미술학원 명륜",
      "명륜 가우디미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-seogu-jang-art",
    "originalName": "장미술학원",
    "normalizedName": "장미술학원 부산",
    "baseName": "장미술학원",
    "branchName": "부산",
    "displayLocation": "부산 서구 서대신동",
    "canonicalBrand": "장",
    "aliases": [
      "부산 장미술학원",
      "장 미술학원 부산",
      "장미술학원",
      "장미술학원 부산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-hwamyeong-greensum",
    "originalName": "그린섬미술학원 화명",
    "normalizedName": "그린섬미술학원 화명",
    "baseName": "그린섬미술학원",
    "branchName": "화명",
    "displayLocation": "부산 북구 화명동",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 화명",
      "그린섬미술학원",
      "그린섬미술학원 화명",
      "화명 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-myeongryun-b2b",
    "originalName": "비투비미술학원 명륜",
    "normalizedName": "비투비미술학원 명륜",
    "baseName": "비투비미술학원",
    "branchName": "명륜",
    "displayLocation": "부산 동래구 명륜동",
    "canonicalBrand": "비투비",
    "aliases": [
      "명륜 비투비미술학원",
      "비투비 미술학원 명륜",
      "비투비미술학원",
      "비투비미술학원 명륜"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-designpida",
    "originalName": "디자인피다입시미술학원",
    "normalizedName": "디자인피다입시미술학원 울산",
    "baseName": "디자인피다입시미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 달동",
    "canonicalBrand": "디자인피다입시",
    "aliases": [
      "디자인피다입시 미술학원 울산",
      "디자인피다입시미술학원",
      "디자인피다입시미술학원 울산",
      "울산 디자인피다입시미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-tint",
    "originalName": "울산틴트미술학원",
    "normalizedName": "틴트미술학원 울산",
    "baseName": "틴트미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 달동",
    "canonicalBrand": "틴트",
    "aliases": [
      "울산 틴트미술학원",
      "울산틴트미술학원",
      "틴트 미술학원 울산",
      "틴트미술학원",
      "틴트미술학원 울산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-anisoop",
    "originalName": "애니숲미술학원",
    "normalizedName": "애니숲미술학원 울산",
    "baseName": "애니숲미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 달동",
    "canonicalBrand": "애니숲",
    "aliases": [
      "애니숲 미술학원 울산",
      "애니숲미술학원",
      "애니숲미술학원 울산",
      "울산 애니숲미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-design-z",
    "originalName": "디자인제트앤잔미술학원",
    "normalizedName": "디자인제트앤잔미술학원 울산",
    "baseName": "디자인제트앤잔미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 달동",
    "canonicalBrand": "디자인제트앤잔",
    "aliases": [
      "디자인제트앤잔 미술학원 울산",
      "디자인제트앤잔미술학원",
      "디자인제트앤잔미술학원 울산",
      "울산 디자인제트앤잔미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-dna-art",
    "originalName": "울산디앤에이미술학원",
    "normalizedName": "디앤에이미술학원 울산",
    "baseName": "디앤에이미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 달동",
    "canonicalBrand": "디앤에이",
    "aliases": [
      "디앤에이 미술학원 울산",
      "디앤에이미술학원",
      "디앤에이미술학원 울산",
      "울산 디앤에이미술학원",
      "울산디앤에이미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-hwan-art",
    "originalName": "환미술학원",
    "normalizedName": "환미술학원 울산",
    "baseName": "환미술학원",
    "branchName": "울산",
    "displayLocation": "울산 동구 화정동",
    "canonicalBrand": "환",
    "aliases": [
      "울산 환미술학원",
      "환 미술학원 울산",
      "환미술학원",
      "환미술학원 울산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-flower-art",
    "originalName": "플라워입시미술학원",
    "normalizedName": "플라워입시미술학원 울산",
    "baseName": "플라워입시미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 신정동",
    "canonicalBrand": "플라워입시",
    "aliases": [
      "울산 플라워입시미술학원",
      "플라워입시 미술학원 울산",
      "플라워입시미술학원",
      "플라워입시미술학원 울산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-choi-byungmoon",
    "originalName": "최병문미술학원",
    "normalizedName": "최병문미술학원 울산",
    "baseName": "최병문미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 신정동",
    "canonicalBrand": "최병문",
    "aliases": [
      "울산 최병문미술학원",
      "최병문 미술학원 울산",
      "최병문미술학원",
      "최병문미술학원 울산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-jangjiwon-greensum",
    "originalName": "울산그린섬·장지원그린섬미술학원",
    "normalizedName": "그린섬미술학원 울산",
    "baseName": "그린섬미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 신정동",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 울산",
      "그린섬미술학원",
      "그린섬미술학원 울산",
      "울산 그린섬미술학원",
      "울산그린섬·장지원그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-artinshop",
    "originalName": "아트인샵미술학원",
    "normalizedName": "아트인샵미술학원 울산",
    "baseName": "아트인샵미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 신정동",
    "canonicalBrand": "아트인샵",
    "aliases": [
      "아트인샵 미술학원 울산",
      "아트인샵미술학원",
      "아트인샵미술학원 울산",
      "울산 아트인샵미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-seongseo-dreamworks",
    "originalName": "성서 드림웍스 미술학원",
    "normalizedName": "드림웍스미술학원 성서",
    "baseName": "드림웍스미술학원",
    "branchName": "성서",
    "displayLocation": "대구 달서구 이곡동",
    "canonicalBrand": "드림웍스",
    "aliases": [
      "드림웍스 미술학원 성서",
      "드림웍스미술학원",
      "드림웍스미술학원 성서",
      "성서 드림웍스 미술학원",
      "성서 드림웍스미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-design-dalli",
    "originalName": "디자인달리 미술학원",
    "normalizedName": "디자인달리미술학원 대구",
    "baseName": "디자인달리미술학원",
    "branchName": "대구",
    "displayLocation": "대구 달서구",
    "canonicalBrand": "디자인달리",
    "aliases": [
      "대구 디자인달리미술학원",
      "디자인달리 미술학원",
      "디자인달리 미술학원 대구",
      "디자인달리미술학원",
      "디자인달리미술학원 대구"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-myeongdeok-soonsoo",
    "originalName": "순수미술학원 명덕",
    "normalizedName": "순수미술학원 명덕",
    "baseName": "순수미술학원",
    "branchName": "명덕",
    "displayLocation": "대구 중구",
    "canonicalBrand": "순수",
    "aliases": [
      "명덕 순수미술학원",
      "순수 미술학원 명덕",
      "순수미술학원",
      "순수미술학원 명덕"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-suseong-cloud",
    "originalName": "수성클라우드미술학원",
    "normalizedName": "클라우드미술학원 수성",
    "baseName": "클라우드미술학원",
    "branchName": "수성",
    "displayLocation": "대구 수성구 만촌동",
    "canonicalBrand": "클라우드",
    "aliases": [
      "수성 클라우드미술학원",
      "수성클라우드미술학원",
      "클라우드 미술학원 수성",
      "클라우드미술학원",
      "클라우드미술학원 수성"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-siji-changa",
    "originalName": "창조의아침미술학원 시지",
    "normalizedName": "창조의아침미술학원 시지",
    "baseName": "창조의아침미술학원",
    "branchName": "시지",
    "displayLocation": "대구 수성구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "시지 창조의아침미술학원",
      "창조의아침 미술학원 시지",
      "창조의아침미술학원",
      "창조의아침미술학원 시지"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-suseong-changa",
    "originalName": "창조의아침미술학원 수성",
    "normalizedName": "창조의아침미술학원 수성",
    "baseName": "창조의아침미술학원",
    "branchName": "수성",
    "displayLocation": "대구 수성구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "수성 창조의아침미술학원",
      "창조의아침 미술학원 수성",
      "창조의아침미술학원",
      "창조의아침미술학원 수성"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-siji-clickintro",
    "originalName": "클릭인트로미술학원 시지",
    "normalizedName": "클릭인트로미술학원 시지",
    "baseName": "클릭인트로미술학원",
    "branchName": "시지",
    "displayLocation": "대구 수성구",
    "canonicalBrand": "클릭인트로",
    "aliases": [
      "시지 클릭인트로미술학원",
      "클릭인트로 미술학원 시지",
      "클릭인트로미술학원",
      "클릭인트로미술학원 시지"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-sangin-clickjeonwon",
    "originalName": "클릭전원미술학원 상인",
    "normalizedName": "클릭전원미술학원 상인",
    "baseName": "클릭전원미술학원",
    "branchName": "상인",
    "displayLocation": "대구 달서구 상인동",
    "canonicalBrand": "클릭전원",
    "aliases": [
      "상인 클릭전원미술학원",
      "클릭전원 미술학원 상인",
      "클릭전원미술학원",
      "클릭전원미술학원 상인"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-myeongdeok-intro",
    "originalName": "인트로미술학원 명덕",
    "normalizedName": "인트로미술학원 명덕",
    "baseName": "인트로미술학원",
    "branchName": "명덕",
    "displayLocation": "대구 중구",
    "canonicalBrand": "인트로",
    "aliases": [
      "명덕 인트로미술학원",
      "인트로 미술학원 명덕",
      "인트로미술학원",
      "인트로미술학원 명덕"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-suseong-cnc",
    "originalName": "씨앤씨미술학원 수성",
    "normalizedName": "C&C미술학원 수성",
    "baseName": "C&C미술학원",
    "branchName": "수성",
    "displayLocation": "대구 수성구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 수성",
      "C&C미술학원",
      "C&C미술학원 수성",
      "CNC미술학원",
      "CNC미술학원 수성",
      "c&c미술학원",
      "c&c미술학원 수성",
      "수성 C&C미술학원",
      "수성 CNC미술학원",
      "수성 c&c미술학원",
      "수성 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 수성"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-cheomdan-greensum",
    "originalName": "그린섬미술학원 첨단",
    "normalizedName": "그린섬미술학원 첨단",
    "baseName": "그린섬미술학원",
    "branchName": "첨단",
    "displayLocation": "광주 광산구 첨단",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 첨단",
      "그린섬미술학원",
      "그린섬미술학원 첨단",
      "첨단 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-highfive",
    "originalName": "하이파이브미술학원 광주",
    "normalizedName": "하이파이브미술학원 광주",
    "baseName": "하이파이브미술학원",
    "branchName": "광주",
    "displayLocation": "광주 북구",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "광주 하이파이브미술학원",
      "하이파이브 미술학원 광주",
      "하이파이브미술학원",
      "하이파이브미술학원 광주"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-jinwol-cnc",
    "originalName": "씨앤씨미술학원 진월",
    "normalizedName": "C&C미술학원 진월",
    "baseName": "C&C미술학원",
    "branchName": "진월",
    "displayLocation": "광주 남구 진월동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 진월",
      "C&C미술학원",
      "C&C미술학원 진월",
      "CNC미술학원",
      "CNC미술학원 진월",
      "c&c미술학원",
      "c&c미술학원 진월",
      "씨앤씨미술학원",
      "씨앤씨미술학원 진월",
      "진월 C&C미술학원",
      "진월 CNC미술학원",
      "진월 c&c미술학원",
      "진월 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-suwandong-amax",
    "originalName": "에이맥스미술학원 수완동",
    "normalizedName": "에이맥스미술학원 수완",
    "baseName": "에이맥스미술학원",
    "branchName": "수완",
    "displayLocation": "광주 광산구 수완동",
    "canonicalBrand": "에이맥스",
    "aliases": [
      "수완 에이맥스미술학원",
      "에이맥스 미술학원 수완",
      "에이맥스미술학원",
      "에이맥스미술학원 수완",
      "에이맥스미술학원 수완동"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-jinwol-amax",
    "originalName": "에이맥스미술학원 진월",
    "normalizedName": "에이맥스미술학원 진월",
    "baseName": "에이맥스미술학원",
    "branchName": "진월",
    "displayLocation": "광주 남구 진월동",
    "canonicalBrand": "에이맥스",
    "aliases": [
      "에이맥스 미술학원 진월",
      "에이맥스미술학원",
      "에이맥스미술학원 진월",
      "진월 에이맥스미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-suwan-cnc",
    "originalName": "수완 씨앤씨미술학원",
    "normalizedName": "C&C미술학원 수완",
    "baseName": "C&C미술학원",
    "branchName": "수완",
    "displayLocation": "광주 광산구 수완동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 수완",
      "C&C미술학원",
      "C&C미술학원 수완",
      "CNC미술학원",
      "CNC미술학원 수완",
      "c&c미술학원",
      "c&c미술학원 수완",
      "수완 C&C미술학원",
      "수완 CNC미술학원",
      "수완 c&c미술학원",
      "수완 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 수완"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gwangju-animax",
    "originalName": "애니맥스미술학원",
    "normalizedName": "애니맥스미술학원 광주",
    "baseName": "애니맥스미술학원",
    "branchName": "광주",
    "displayLocation": "광주 동구",
    "canonicalBrand": "애니맥스",
    "aliases": [
      "광주 애니맥스미술학원",
      "애니맥스 미술학원 광주",
      "애니맥스미술학원",
      "애니맥스미술학원 광주"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-dunsan-highfive",
    "originalName": "둔산 하이파이브미술학원",
    "normalizedName": "하이파이브미술학원 둔산",
    "baseName": "하이파이브미술학원",
    "branchName": "둔산",
    "displayLocation": "대전 서구 둔산동",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "둔산 하이파이브미술학원",
      "하이파이브 미술학원 둔산",
      "하이파이브미술학원",
      "하이파이브미술학원 둔산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-songchon-thekkeullim",
    "originalName": "더끌림미술학원 송촌",
    "normalizedName": "더끌림미술학원 송촌",
    "baseName": "더끌림미술학원",
    "branchName": "송촌",
    "displayLocation": "대전 대덕구 송촌동",
    "canonicalBrand": "더끌림",
    "aliases": [
      "더끌림 미술학원 송촌",
      "더끌림미술학원",
      "더끌림미술학원 송촌",
      "송촌 더끌림미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-noeun-highfive",
    "originalName": "하이파이브미술학원 노은",
    "normalizedName": "하이파이브미술학원 노은",
    "baseName": "하이파이브미술학원",
    "branchName": "노은",
    "displayLocation": "대전 유성구 노은동",
    "canonicalBrand": "하이파이브",
    "aliases": [
      "노은 하이파이브미술학원",
      "하이파이브 미술학원 노은",
      "하이파이브미술학원",
      "하이파이브미술학원 노은"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-dunsan-designpeople",
    "originalName": "디자인피플미술학원 둔산",
    "normalizedName": "디자인피플미술학원 둔산",
    "baseName": "디자인피플미술학원",
    "branchName": "둔산",
    "displayLocation": "대전 서구 둔산동",
    "canonicalBrand": "디자인피플",
    "aliases": [
      "둔산 디자인피플미술학원",
      "디자인피플 미술학원 둔산",
      "디자인피플미술학원",
      "디자인피플미술학원 둔산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-tomato",
    "originalName": "토마토미술학원",
    "normalizedName": "토마토미술학원 대전",
    "baseName": "토마토미술학원",
    "branchName": "대전",
    "displayLocation": "대전 서구",
    "canonicalBrand": "토마토",
    "aliases": [
      "대전 토마토미술학원",
      "토마토 미술학원 대전",
      "토마토미술학원",
      "토마토미술학원 대전"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-nadaum",
    "originalName": "나다움미술학원 대전",
    "normalizedName": "나다움미술학원 대전",
    "baseName": "나다움미술학원",
    "branchName": "대전",
    "displayLocation": "대전 중구",
    "canonicalBrand": "나다움",
    "aliases": [
      "나다움 미술학원 대전",
      "나다움미술학원",
      "나다움미술학원 대전",
      "대전 나다움미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonbuk-gunsan-im-janus",
    "originalName": "아이엠야누스미술학원",
    "normalizedName": "아이엠야누스미술학원 군산",
    "baseName": "아이엠야누스미술학원",
    "branchName": "군산",
    "displayLocation": "전북 군산시",
    "canonicalBrand": "아이엠야누스",
    "aliases": [
      "군산 아이엠야누스미술학원",
      "아이엠야누스 미술학원 군산",
      "아이엠야누스미술학원",
      "아이엠야누스미술학원 군산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonbuk-gunsan-gooddesign",
    "originalName": "굿디자인미술학원 수송",
    "normalizedName": "굿디자인미술학원 수송",
    "baseName": "굿디자인미술학원",
    "branchName": "수송",
    "displayLocation": "전북 군산시 수송동",
    "canonicalBrand": "굿디자인",
    "aliases": [
      "굿디자인 미술학원 수송",
      "굿디자인미술학원",
      "굿디자인미술학원 수송",
      "수송 굿디자인미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonbuk-jeonju-seobu-greensum",
    "originalName": "그린섬미술학원 전주서부",
    "normalizedName": "그린섬미술학원 전주서부",
    "baseName": "그린섬미술학원",
    "branchName": "전주서부",
    "displayLocation": "전북 전주시 완산구",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 전주서부",
      "그린섬미술학원",
      "그린섬미술학원 전주서부",
      "전주서부 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonbuk-jeonju-songcheon-greensum",
    "originalName": "그린섬미술학원 전주송천",
    "normalizedName": "그린섬미술학원 전주송천",
    "baseName": "그린섬미술학원",
    "branchName": "전주송천",
    "displayLocation": "전북 전주시 덕진구",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 전주송천",
      "그린섬미술학원",
      "그린섬미술학원 전주송천",
      "전주송천 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonbuk-jeonju-gyeongwon-changa",
    "originalName": "창조의아침미술학원 전주경원",
    "normalizedName": "창조의아침미술학원 전주경원",
    "baseName": "창조의아침미술학원",
    "branchName": "전주경원",
    "displayLocation": "전북 전주시 완산구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "전주경원 창조의아침미술학원",
      "창조의아침 미술학원 전주경원",
      "창조의아침미술학원",
      "창조의아침미술학원 전주경원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonbuk-jeonju-seosin-lightshadow",
    "originalName": "빛과그림자미술학원 서신",
    "normalizedName": "빛과그림자미술학원 서신",
    "baseName": "빛과그림자미술학원",
    "branchName": "서신",
    "displayLocation": "전북 전주시 완산구",
    "canonicalBrand": "빛과그림자",
    "aliases": [
      "빛과그림자 미술학원 서신",
      "빛과그림자미술학원",
      "빛과그림자미술학원 서신",
      "서신 빛과그림자미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonnam-yeosu-hongik",
    "originalName": "홍익입시미술학원 여수",
    "normalizedName": "홍익입시미술학원 여수",
    "baseName": "홍익입시미술학원",
    "branchName": "여수",
    "displayLocation": "전남 여수시",
    "canonicalBrand": "홍익입시",
    "aliases": [
      "여수 홍익입시미술학원",
      "홍익입시 미술학원 여수",
      "홍익입시미술학원",
      "홍익입시미술학원 여수"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonnam-gwangyang-cnc-jungdong",
    "originalName": "씨앤씨미술학원 광양중동",
    "normalizedName": "C&C미술학원 광양중동",
    "baseName": "C&C미술학원",
    "branchName": "광양중동",
    "displayLocation": "전남 광양시 중동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 광양중동",
      "C&C미술학원",
      "C&C미술학원 광양중동",
      "CNC미술학원",
      "CNC미술학원 광양중동",
      "c&c미술학원",
      "c&c미술학원 광양중동",
      "광양중동 C&C미술학원",
      "광양중동 CNC미술학원",
      "광양중동 c&c미술학원",
      "광양중동 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 광양중동"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonnam-gwangyang-cnc",
    "originalName": "씨앤씨미술학원 광양",
    "normalizedName": "C&C미술학원 광양",
    "baseName": "C&C미술학원",
    "branchName": "광양",
    "displayLocation": "전남 광양시",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 광양",
      "C&C미술학원",
      "C&C미술학원 광양",
      "CNC미술학원",
      "CNC미술학원 광양",
      "c&c미술학원",
      "c&c미술학원 광양",
      "광양 C&C미술학원",
      "광양 CNC미술학원",
      "광양 c&c미술학원",
      "광양 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 광양"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonnam-suncheon-anistar",
    "originalName": "애니스타미술학원 순천",
    "normalizedName": "애니스타미술학원 순천",
    "baseName": "애니스타미술학원",
    "branchName": "순천",
    "displayLocation": "전남 순천시",
    "canonicalBrand": "애니스타",
    "aliases": [
      "순천 애니스타미술학원",
      "애니스타 미술학원 순천",
      "애니스타미술학원",
      "애니스타미술학원 순천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonnam-suncheon-otoo",
    "originalName": "오투미술학원 순천",
    "normalizedName": "오투미술학원 순천",
    "baseName": "오투미술학원",
    "branchName": "순천",
    "displayLocation": "전남 순천시",
    "canonicalBrand": "오투",
    "aliases": [
      "순천 오투미술학원",
      "오투 미술학원 순천",
      "오투미술학원",
      "오투미술학원 순천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeonnam-mokpo-designstar",
    "originalName": "디자인스타미술학원 목포",
    "normalizedName": "디자인스타미술학원 목포",
    "baseName": "디자인스타미술학원",
    "branchName": "목포",
    "displayLocation": "전남 목포시",
    "canonicalBrand": "디자인스타",
    "aliases": [
      "디자인스타 미술학원 목포",
      "디자인스타미술학원",
      "디자인스타미술학원 목포",
      "목포 디자인스타미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeju-define-ido",
    "originalName": "디파인미술학원 이도",
    "normalizedName": "디파인미술학원 이도",
    "baseName": "디파인미술학원",
    "branchName": "이도",
    "displayLocation": "제주 제주시 이도동",
    "canonicalBrand": "디파인",
    "aliases": [
      "디파인 미술학원 이도",
      "디파인미술학원",
      "디파인미술학원 이도",
      "이도 디파인미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "jeju-cubic",
    "originalName": "큐빅미술학원 제주",
    "normalizedName": "큐빅미술학원 제주",
    "baseName": "큐빅미술학원",
    "branchName": "제주",
    "displayLocation": "제주 제주시",
    "canonicalBrand": "큐빅",
    "aliases": [
      "제주 큐빅미술학원",
      "큐빅 미술학원 제주",
      "큐빅미술학원",
      "큐빅미술학원 제주"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "chungnam-asan-forever-smile",
    "originalName": "영원한미소미술학원 아산",
    "normalizedName": "영원한미소미술학원 아산",
    "baseName": "영원한미소미술학원",
    "branchName": "아산",
    "displayLocation": "충남 아산시",
    "canonicalBrand": "영원한미소",
    "aliases": [
      "아산 영원한미소미술학원",
      "영원한미소 미술학원 아산",
      "영원한미소미술학원",
      "영원한미소미술학원 아산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "chungnam-dangjin-designtalk",
    "originalName": "디자인톡미술학원 당진",
    "normalizedName": "디자인톡미술학원 당진",
    "baseName": "디자인톡미술학원",
    "branchName": "당진",
    "displayLocation": "충남 당진시",
    "canonicalBrand": "디자인톡",
    "aliases": [
      "당진 디자인톡미술학원",
      "디자인톡 미술학원 당진",
      "디자인톡미술학원",
      "디자인톡미술학원 당진"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "chungnam-dangjin-jq",
    "originalName": "제이큐미술학원 당진",
    "normalizedName": "제이큐미술학원 당진",
    "baseName": "제이큐미술학원",
    "branchName": "당진",
    "displayLocation": "충남 당진시",
    "canonicalBrand": "제이큐",
    "aliases": [
      "당진 제이큐미술학원",
      "제이큐 미술학원 당진",
      "제이큐미술학원",
      "제이큐미술학원 당진"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "chungnam-cheonan-designstar",
    "originalName": "디자인스타미술학원 천안",
    "normalizedName": "디자인스타미술학원 천안",
    "baseName": "디자인스타미술학원",
    "branchName": "천안",
    "displayLocation": "충남 천안시 동남구",
    "canonicalBrand": "디자인스타",
    "aliases": [
      "디자인스타 미술학원 천안",
      "디자인스타미술학원",
      "디자인스타미술학원 천안",
      "천안 디자인스타미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "chungbuk-cheongju-grid",
    "originalName": "그리드미술학원 청주",
    "normalizedName": "그리드미술학원 청주",
    "baseName": "그리드미술학원",
    "branchName": "청주",
    "displayLocation": "충북 청주시 상당구",
    "canonicalBrand": "그리드",
    "aliases": [
      "그리드 미술학원 청주",
      "그리드미술학원",
      "그리드미술학원 청주",
      "청주 그리드미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "chungbuk-cheongju-changa",
    "originalName": "창조의아침미술학원 청주",
    "normalizedName": "창조의아침미술학원 청주",
    "baseName": "창조의아침미술학원",
    "branchName": "청주",
    "displayLocation": "충북 청주시 상당구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "창조의아침 미술학원 청주",
      "창조의아침미술학원",
      "창조의아침미술학원 청주",
      "청주 창조의아침미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "sejong-anihi",
    "originalName": "애니하이만화학원 세종",
    "normalizedName": "애니하이만화학원 세종",
    "baseName": "애니하이만화학원",
    "branchName": "세종",
    "displayLocation": "세종 보듬3로",
    "canonicalBrand": "애니하이만화학원",
    "aliases": [
      "세종 애니하이만화학원",
      "애니하이만화학원",
      "애니하이만화학원 세종"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangwon-donghae-sun",
    "originalName": "선미술학원 동해",
    "normalizedName": "선미술학원 동해",
    "baseName": "선미술학원",
    "branchName": "동해",
    "displayLocation": "강원 동해시",
    "canonicalBrand": "선",
    "aliases": [
      "동해 선미술학원",
      "선 미술학원 동해",
      "선미술학원",
      "선미술학원 동해"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangwon-donghae-hongik-ars",
    "originalName": "홍익아르스입시미술학원 동해",
    "normalizedName": "홍익아르스입시미술학원 동해",
    "baseName": "홍익아르스입시미술학원",
    "branchName": "동해",
    "displayLocation": "강원 동해시",
    "canonicalBrand": "홍익아르스입시",
    "aliases": [
      "동해 홍익아르스입시미술학원",
      "홍익아르스입시 미술학원 동해",
      "홍익아르스입시미술학원",
      "홍익아르스입시미술학원 동해"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangwon-gangneung-changa",
    "originalName": "창조의아침미술학원 강릉",
    "normalizedName": "창조의아침미술학원 강릉",
    "baseName": "창조의아침미술학원",
    "branchName": "강릉",
    "displayLocation": "강원 강릉시",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "강릉 창조의아침미술학원",
      "창조의아침 미술학원 강릉",
      "창조의아침미술학원",
      "창조의아침미술학원 강릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeongnam-changwon-coco",
    "originalName": "코코미술학원 창원",
    "normalizedName": "코코미술학원 창원",
    "baseName": "코코미술학원",
    "branchName": "창원",
    "displayLocation": "경남 창원시 성산구",
    "canonicalBrand": "코코",
    "aliases": [
      "창원 코코미술학원",
      "코코 미술학원 창원",
      "코코미술학원",
      "코코미술학원 창원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeongnam-changwon-designstar",
    "originalName": "디자인스타미술학원 창원",
    "normalizedName": "디자인스타미술학원 창원",
    "baseName": "디자인스타미술학원",
    "branchName": "창원",
    "displayLocation": "경남 창원시 성산구",
    "canonicalBrand": "디자인스타",
    "aliases": [
      "디자인스타 미술학원 창원",
      "디자인스타미술학원",
      "디자인스타미술학원 창원",
      "창원 디자인스타미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gyeongbuk-pohang-nadaum",
    "originalName": "나다움미술학원 포항",
    "normalizedName": "나다움미술학원 포항",
    "baseName": "나다움미술학원",
    "branchName": "포항",
    "displayLocation": "경북 포항시 북구",
    "canonicalBrand": "나다움",
    "aliases": [
      "나다움 미술학원 포항",
      "나다움미술학원",
      "나다움미술학원 포항",
      "포항 나다움미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-001-incheon",
    "originalName": "텐입시미술학원",
    "normalizedName": "텐입시미술학원 인천",
    "baseName": "텐입시미술학원",
    "branchName": "인천",
    "displayLocation": "인천 서구",
    "canonicalBrand": "텐입시",
    "aliases": [
      "인천 텐입시미술학원",
      "텐입시 미술학원 인천",
      "텐입시미술학원",
      "텐입시미술학원 인천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-002-seoul",
    "originalName": "송파 C&C미술학원",
    "normalizedName": "C&C미술학원 송파",
    "baseName": "C&C미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 송파",
      "C&C미술학원",
      "C&C미술학원 송파",
      "CNC미술학원",
      "CNC미술학원 송파",
      "c&c미술학원",
      "c&c미술학원 송파",
      "송파 C&C미술학원",
      "송파 CNC미술학원",
      "송파 c&c미술학원",
      "송파 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-003-seoul",
    "originalName": "송파 인트로만화학원",
    "normalizedName": "인트로만화학원 송파",
    "baseName": "인트로만화학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "인트로만화학원",
    "aliases": [
      "송파 인트로만화학원",
      "인트로만화학원",
      "인트로만화학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-004-seoul",
    "originalName": "송파 유연홍아뜰리에미술학원",
    "normalizedName": "유연홍아뜰리에미술학원 송파",
    "baseName": "유연홍아뜰리에미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "유연홍아뜰리에",
    "aliases": [
      "송파 유연홍아뜰리에미술학원",
      "유연홍아뜰리에 미술학원 송파",
      "유연홍아뜰리에미술학원",
      "유연홍아뜰리에미술학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-005-seoul",
    "originalName": "송파 다트미술학원",
    "normalizedName": "다트미술학원 송파",
    "baseName": "다트미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "다트",
    "aliases": [
      "다트 미술학원 송파",
      "다트미술학원",
      "다트미술학원 송파",
      "송파 다트미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-006-seoul",
    "originalName": "송파 가우디미술학원",
    "normalizedName": "가우디미술학원 송파",
    "baseName": "가우디미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "가우디",
    "aliases": [
      "가우디 미술학원 송파",
      "가우디미술학원",
      "가우디미술학원 송파",
      "송파 가우디미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-007-chungnam",
    "originalName": "디자인ufo 미술학원",
    "normalizedName": "디자인유에프오미술학원 내포",
    "baseName": "디자인유에프오미술학원",
    "branchName": "내포",
    "displayLocation": "충남 홍성군",
    "canonicalBrand": "디자인유에프오",
    "aliases": [
      "내포 디자인유에프오미술학원",
      "디자인ufo 미술학원",
      "디자인유에프오 미술학원 내포",
      "디자인유에프오미술학원",
      "디자인유에프오미술학원 내포"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-008-jeonnam",
    "originalName": "목포 디자인스타 미술학원",
    "normalizedName": "디자인스타미술학원 목포",
    "baseName": "디자인스타미술학원",
    "branchName": "목포",
    "displayLocation": "전남 목포시",
    "canonicalBrand": "디자인스타",
    "aliases": [
      "디자인스타 미술학원 목포",
      "디자인스타미술학원",
      "디자인스타미술학원 목포",
      "목포 디자인스타 미술학원",
      "목포 디자인스타미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-009-seoul",
    "originalName": "송파 클릭미술학원",
    "normalizedName": "클릭미술학원 송파",
    "baseName": "클릭미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "클릭",
    "aliases": [
      "송파 클릭미술학원",
      "클릭 미술학원 송파",
      "클릭미술학원",
      "클릭미술학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-010-seoul",
    "originalName": "송파 애니툰만화학원",
    "normalizedName": "애니툰만화학원 송파",
    "baseName": "애니툰만화학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "애니툰만화학원",
    "aliases": [
      "송파 애니툰만화학원",
      "애니툰만화학원",
      "애니툰만화학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-011-seoul",
    "originalName": "송파 오늘 미술학원",
    "normalizedName": "오늘미술학원 송파",
    "baseName": "오늘미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "오늘",
    "aliases": [
      "송파 오늘 미술학원",
      "송파 오늘미술학원",
      "오늘 미술학원 송파",
      "오늘미술학원",
      "오늘미술학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-012-seoul",
    "originalName": "송파 프리뷰 미술학원",
    "normalizedName": "프리뷰미술학원 송파",
    "baseName": "프리뷰미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "프리뷰",
    "aliases": [
      "송파 프리뷰 미술학원",
      "송파 프리뷰미술학원",
      "프리뷰 미술학원 송파",
      "프리뷰미술학원",
      "프리뷰미술학원 송파"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-013-seoul",
    "originalName": "송파 무한미술학원",
    "normalizedName": "무한미술학원 송파",
    "baseName": "무한미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "무한",
    "aliases": [
      "무한 미술학원 송파",
      "무한미술학원",
      "무한미술학원 송파",
      "송파 무한미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-014-seoul",
    "originalName": "산내들 미술학원",
    "normalizedName": "산내들미술학원 노원",
    "baseName": "산내들미술학원",
    "branchName": "노원",
    "displayLocation": "서울 노원구",
    "canonicalBrand": "산내들",
    "aliases": [
      "노원 산내들미술학원",
      "산내들 미술학원",
      "산내들 미술학원 노원",
      "산내들미술학원",
      "산내들미술학원 노원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-015-seoul",
    "originalName": "강서 오늘 미술학원",
    "normalizedName": "오늘미술학원 강서",
    "baseName": "오늘미술학원",
    "branchName": "강서",
    "displayLocation": "서울 강서구",
    "canonicalBrand": "오늘",
    "aliases": [
      "강서 오늘 미술학원",
      "강서 오늘미술학원",
      "오늘 미술학원 강서",
      "오늘미술학원",
      "오늘미술학원 강서"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-016-seoul",
    "originalName": "강동 스카이 미술학원",
    "normalizedName": "스카이미술학원 강동",
    "baseName": "스카이미술학원",
    "branchName": "강동",
    "displayLocation": "서울 강동구",
    "canonicalBrand": "스카이",
    "aliases": [
      "강동 스카이 미술학원",
      "강동 스카이미술학원",
      "스카이 미술학원 강동",
      "스카이미술학원",
      "스카이미술학원 강동"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-017-seoul",
    "originalName": "강동 애니톡 미술학원",
    "normalizedName": "애니톡미술학원 강동",
    "baseName": "애니톡미술학원",
    "branchName": "강동",
    "displayLocation": "서울 강동구",
    "canonicalBrand": "애니톡",
    "aliases": [
      "강동 애니톡 미술학원",
      "강동 애니톡미술학원",
      "애니톡 미술학원 강동",
      "애니톡미술학원",
      "애니톡미술학원 강동"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-018-seoul",
    "originalName": "애니포스 미술학원",
    "normalizedName": "애니포스미술학원 선릉",
    "baseName": "애니포스미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "애니포스",
    "aliases": [
      "선릉 애니포스미술학원",
      "애니포스 미술학원",
      "애니포스 미술학원 선릉",
      "애니포스미술학원",
      "애니포스미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-019-seoul",
    "originalName": "브레인팩토리 미술학원",
    "normalizedName": "브레인팩토리미술학원 선릉",
    "baseName": "브레인팩토리미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "브레인팩토리",
    "aliases": [
      "브레인팩토리 미술학원",
      "브레인팩토리 미술학원 선릉",
      "브레인팩토리미술학원",
      "브레인팩토리미술학원 선릉",
      "선릉 브레인팩토리미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-020-seoul",
    "originalName": "베테랑 미술학원",
    "normalizedName": "베테랑미술학원 선릉",
    "baseName": "베테랑미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "베테랑",
    "aliases": [
      "베테랑 미술학원",
      "베테랑 미술학원 선릉",
      "베테랑미술학원",
      "베테랑미술학원 선릉",
      "선릉 베테랑미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-021-seoul",
    "originalName": "더끌림 미술학원",
    "normalizedName": "더끌림미술학원 선릉",
    "baseName": "더끌림미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "더끌림",
    "aliases": [
      "더끌림 미술학원",
      "더끌림 미술학원 선릉",
      "더끌림미술학원",
      "더끌림미술학원 선릉",
      "선릉 더끌림미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-022-seoul",
    "originalName": "다같이 미술학원",
    "normalizedName": "다같이미술학원 선릉",
    "baseName": "다같이미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "다같이",
    "aliases": [
      "다같이 미술학원",
      "다같이 미술학원 선릉",
      "다같이미술학원",
      "다같이미술학원 선릉",
      "선릉 다같이미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-023-seoul",
    "originalName": "뉴오투 미술학원",
    "normalizedName": "오투미술학원 선릉",
    "baseName": "오투미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구",
    "canonicalBrand": "오투",
    "aliases": [
      "뉴오투 미술학원",
      "뉴오투미술학원",
      "선릉 오투미술학원",
      "오투 미술학원 선릉",
      "오투미술학원",
      "오투미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-024-daegu",
    "originalName": "대구 죽전 아이엠 미술학원",
    "normalizedName": "아이엠미술학원 죽전",
    "baseName": "아이엠미술학원",
    "branchName": "죽전",
    "displayLocation": "대구 달서구",
    "canonicalBrand": "아이엠",
    "aliases": [
      "대구 죽전 아이엠 미술학원",
      "대구 죽전 아이엠미술학원",
      "아이엠 미술학원 죽전",
      "아이엠미술학원",
      "아이엠미술학원 죽전",
      "죽전 아이엠미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-025-daegu",
    "originalName": "대구 애니제트 미술학원",
    "normalizedName": "애니제트미술학원 상인",
    "baseName": "애니제트미술학원",
    "branchName": "상인",
    "displayLocation": "대구 달서구",
    "canonicalBrand": "애니제트",
    "aliases": [
      "대구 애니제트 미술학원",
      "대구 애니제트미술학원",
      "상인 애니제트미술학원",
      "애니제트 미술학원 상인",
      "애니제트미술학원",
      "애니제트미술학원 상인"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-026-incheon",
    "originalName": "피플 미술학원",
    "normalizedName": "피플미술학원 인천",
    "baseName": "피플미술학원",
    "branchName": "인천",
    "displayLocation": "인천 서구",
    "canonicalBrand": "피플",
    "aliases": [
      "인천 피플미술학원",
      "피플 미술학원",
      "피플 미술학원 인천",
      "피플미술학원",
      "피플미술학원 인천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-027-incheon",
    "originalName": "청라 씨앤씨 미술학원",
    "normalizedName": "C&C미술학원 청라",
    "baseName": "C&C미술학원",
    "branchName": "청라",
    "displayLocation": "인천 서구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 청라",
      "C&C미술학원",
      "C&C미술학원 청라",
      "CNC미술학원",
      "CNC미술학원 청라",
      "c&c미술학원",
      "c&c미술학원 청라",
      "씨앤씨미술학원",
      "씨앤씨미술학원 청라",
      "청라 C&C미술학원",
      "청라 CNC미술학원",
      "청라 c&c미술학원",
      "청라 씨앤씨 미술학원",
      "청라 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-028-incheon",
    "originalName": "인천 천년의 미소 미술학원",
    "normalizedName": "천년의미소미술학원 인천",
    "baseName": "천년의미소미술학원",
    "branchName": "인천",
    "displayLocation": "인천 연수구",
    "canonicalBrand": "천년의미소",
    "aliases": [
      "인천 천년의 미소 미술학원",
      "인천 천년의미소미술학원",
      "천년의미소 미술학원 인천",
      "천년의미소미술학원",
      "천년의미소미술학원 인천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-029-incheon",
    "originalName": "인천 하얀나무 미술학원",
    "normalizedName": "하얀나무미술학원 인천",
    "baseName": "하얀나무미술학원",
    "branchName": "인천",
    "displayLocation": "인천 연수구",
    "canonicalBrand": "하얀나무",
    "aliases": [
      "인천 하얀나무 미술학원",
      "인천 하얀나무미술학원",
      "하얀나무 미술학원 인천",
      "하얀나무미술학원",
      "하얀나무미술학원 인천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-030-incheon",
    "originalName": "인천 랩 미술학원",
    "normalizedName": "랩미술학원 인천",
    "baseName": "랩미술학원",
    "branchName": "인천",
    "displayLocation": "인천 부평구",
    "canonicalBrand": "랩",
    "aliases": [
      "랩 미술학원 인천",
      "랩미술학원",
      "랩미술학원 인천",
      "인천 랩 미술학원",
      "인천 랩미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-031-incheon",
    "originalName": "인천 아트몬스터 미술학원",
    "normalizedName": "아트몬스터미술학원 인천",
    "baseName": "아트몬스터미술학원",
    "branchName": "인천",
    "displayLocation": "인천 남동구",
    "canonicalBrand": "아트몬스터",
    "aliases": [
      "아트몬스터 미술학원 인천",
      "아트몬스터미술학원",
      "아트몬스터미술학원 인천",
      "인천 아트몬스터 미술학원",
      "인천 아트몬스터미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-032-incheon",
    "originalName": "인천 디자인줌 미술학원",
    "normalizedName": "디자인줌미술학원 인천",
    "baseName": "디자인줌미술학원",
    "branchName": "인천",
    "displayLocation": "인천 미추홀구",
    "canonicalBrand": "디자인줌",
    "aliases": [
      "디자인줌 미술학원 인천",
      "디자인줌미술학원",
      "디자인줌미술학원 인천",
      "인천 디자인줌 미술학원",
      "인천 디자인줌미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-033-incheon",
    "originalName": "오늘 미술학원",
    "normalizedName": "오늘미술학원 송도",
    "baseName": "오늘미술학원",
    "branchName": "송도",
    "displayLocation": "인천 연수구",
    "canonicalBrand": "오늘",
    "aliases": [
      "송도 오늘미술학원",
      "오늘 미술학원",
      "오늘 미술학원 송도",
      "오늘미술학원",
      "오늘미술학원 송도"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-034-incheon",
    "originalName": "송도 씨앤씨 미술학원",
    "normalizedName": "C&C미술학원 송도",
    "baseName": "C&C미술학원",
    "branchName": "송도",
    "displayLocation": "인천 연수구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 송도",
      "C&C미술학원",
      "C&C미술학원 송도",
      "CNC미술학원",
      "CNC미술학원 송도",
      "c&c미술학원",
      "c&c미술학원 송도",
      "송도 C&C미술학원",
      "송도 CNC미술학원",
      "송도 c&c미술학원",
      "송도 씨앤씨 미술학원",
      "송도 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 송도"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-035-incheon",
    "originalName": "송도 창조의 아침 미술학원",
    "normalizedName": "창조의아침미술학원 송도",
    "baseName": "창조의아침미술학원",
    "branchName": "송도",
    "displayLocation": "인천 연수구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "송도 창조의 아침 미술학원",
      "송도 창조의아침미술학원",
      "창조의아침 미술학원 송도",
      "창조의아침미술학원",
      "창조의아침미술학원 송도"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-036-incheon",
    "originalName": "송도 에스유투 만화학원",
    "normalizedName": "에스유투 만화학원 송도",
    "baseName": "에스유투 만화학원",
    "branchName": "송도",
    "displayLocation": "인천 연수구",
    "canonicalBrand": "에스유투 만화학원",
    "aliases": [
      "송도 에스유투 만화학원",
      "에스유투 만화학원",
      "에스유투 만화학원 송도"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-037-incheon",
    "originalName": "부평 씨앤씨 미술학원",
    "normalizedName": "C&C미술학원 부평",
    "baseName": "C&C미술학원",
    "branchName": "부평",
    "displayLocation": "인천 부평구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 부평",
      "C&C미술학원",
      "C&C미술학원 부평",
      "CNC미술학원",
      "CNC미술학원 부평",
      "c&c미술학원",
      "c&c미술학원 부평",
      "부평 C&C미술학원",
      "부평 CNC미술학원",
      "부평 c&c미술학원",
      "부평 씨앤씨 미술학원",
      "부평 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 부평"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-038-gyeonggi",
    "originalName": "이데아창조 미술학원",
    "normalizedName": "이데아창조미술학원 동두천",
    "baseName": "이데아창조미술학원",
    "branchName": "동두천",
    "displayLocation": "경기 동두천시",
    "canonicalBrand": "이데아창조",
    "aliases": [
      "동두천 이데아창조미술학원",
      "이데아창조 미술학원",
      "이데아창조 미술학원 동두천",
      "이데아창조미술학원",
      "이데아창조미술학원 동두천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-039-gyeonggi",
    "originalName": "의정부 영원한 미소 미술학원",
    "normalizedName": "영원한미소미술학원 의정부",
    "baseName": "영원한미소미술학원",
    "branchName": "의정부",
    "displayLocation": "경기 의정부시",
    "canonicalBrand": "영원한미소",
    "aliases": [
      "영원한미소 미술학원 의정부",
      "영원한미소미술학원",
      "영원한미소미술학원 의정부",
      "의정부 영원한 미소 미술학원",
      "의정부 영원한미소미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-040-gyeonggi",
    "originalName": "의정부 애니쿠나",
    "normalizedName": "애니쿠나미술학원 의정부",
    "baseName": "애니쿠나미술학원",
    "branchName": "의정부",
    "displayLocation": "경기 의정부시",
    "canonicalBrand": "애니쿠나",
    "aliases": [
      "애니쿠나 미술학원 의정부",
      "애니쿠나미술학원",
      "애니쿠나미술학원 의정부",
      "의정부 애니쿠나",
      "의정부 애니쿠나미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-041-gyeonggi",
    "originalName": "의정부 창조의 아침 미술학원",
    "normalizedName": "창조의아침미술학원 의정부",
    "baseName": "창조의아침미술학원",
    "branchName": "의정부",
    "displayLocation": "경기 의정부시",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "의정부 창조의 아침 미술학원",
      "의정부 창조의아침미술학원",
      "창조의아침 미술학원 의정부",
      "창조의아침미술학원",
      "창조의아침미술학원 의정부"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-042-gyeonggi",
    "originalName": "디자인대륙 민락캠퍼스",
    "normalizedName": "디자인대륙미술학원 민락",
    "baseName": "디자인대륙미술학원",
    "branchName": "민락",
    "displayLocation": "경기 의정부시",
    "canonicalBrand": "디자인대륙",
    "aliases": [
      "디자인대륙 미술학원 민락",
      "디자인대륙 민락캠퍼스",
      "디자인대륙미술학원",
      "디자인대륙미술학원 민락",
      "민락 디자인대륙미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-043-gyeonggi",
    "originalName": "디자인대륙 미술학원",
    "normalizedName": "디자인대륙미술학원 의정부",
    "baseName": "디자인대륙미술학원",
    "branchName": "의정부",
    "displayLocation": "경기 의정부시",
    "canonicalBrand": "디자인대륙",
    "aliases": [
      "디자인대륙 미술학원",
      "디자인대륙 미술학원 의정부",
      "디자인대륙미술학원",
      "디자인대륙미술학원 의정부",
      "의정부 디자인대륙미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-044-gyeonggi",
    "originalName": "수지 그린섬 미술학원",
    "normalizedName": "그린섬미술학원 수지",
    "baseName": "그린섬미술학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 수지",
      "그린섬미술학원",
      "그린섬미술학원 수지",
      "수지 그린섬 미술학원",
      "수지 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-045-gyeonggi",
    "originalName": "수지 피플 디엔에이 미술학원",
    "normalizedName": "피플 디앤에이미술학원 수지",
    "baseName": "피플 디앤에이미술학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구",
    "canonicalBrand": "피플 디앤에이",
    "aliases": [
      "수지 피플 디앤에이미술학원",
      "수지 피플 디엔에이 미술학원",
      "피플 디앤에이 미술학원 수지",
      "피플 디앤에이미술학원",
      "피플 디앤에이미술학원 수지"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-046-gyeonggi",
    "originalName": "평촌 씨앤씨 미술학원",
    "normalizedName": "C&C미술학원 평촌",
    "baseName": "C&C미술학원",
    "branchName": "평촌",
    "displayLocation": "경기 안양시 동안구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 평촌",
      "C&C미술학원",
      "C&C미술학원 평촌",
      "CNC미술학원",
      "CNC미술학원 평촌",
      "c&c미술학원",
      "c&c미술학원 평촌",
      "씨앤씨미술학원",
      "씨앤씨미술학원 평촌",
      "평촌 C&C미술학원",
      "평촌 CNC미술학원",
      "평촌 c&c미술학원",
      "평촌 씨앤씨 미술학원",
      "평촌 씨앤씨미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-047-gyeonggi",
    "originalName": "잠수함 속 토끼 미술학원",
    "normalizedName": "잠수함 속 토끼미술학원 평촌",
    "baseName": "잠수함 속 토끼미술학원",
    "branchName": "평촌",
    "displayLocation": "경기 안양시 동안구",
    "canonicalBrand": "잠수함 속 토끼",
    "aliases": [
      "잠수함 속 토끼 미술학원",
      "잠수함 속 토끼 미술학원 평촌",
      "잠수함 속 토끼미술학원",
      "잠수함 속 토끼미술학원 평촌",
      "평촌 잠수함 속 토끼미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-048-gyeonggi",
    "originalName": "스핀 미술학원",
    "normalizedName": "스핀미술학원 군포",
    "baseName": "스핀미술학원",
    "branchName": "군포",
    "displayLocation": "경기 군포시",
    "canonicalBrand": "스핀",
    "aliases": [
      "군포 스핀미술학원",
      "스핀 미술학원",
      "스핀 미술학원 군포",
      "스핀미술학원",
      "스핀미술학원 군포"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-049-gyeonggi",
    "originalName": "산본 그린섬",
    "normalizedName": "그린섬미술학원 산본",
    "baseName": "그린섬미술학원",
    "branchName": "산본",
    "displayLocation": "경기 군포시",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 산본",
      "그린섬미술학원",
      "그린섬미술학원 산본",
      "산본 그린섬",
      "산본 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-050-gyeonggi",
    "originalName": "광명 창조의 아침",
    "normalizedName": "창조의아침미술학원 광명",
    "baseName": "창조의아침미술학원",
    "branchName": "광명",
    "displayLocation": "경기 광명시",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "광명 창조의 아침",
      "광명 창조의아침",
      "광명 창조의아침미술학원",
      "창조의아침 미술학원 광명",
      "창조의아침미술학원",
      "창조의아침미술학원 광명"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-051-gyeonggi",
    "originalName": "플라이 미술학원",
    "normalizedName": "플라이미술학원 시흥",
    "baseName": "플라이미술학원",
    "branchName": "시흥",
    "displayLocation": "경기 시흥시",
    "canonicalBrand": "플라이",
    "aliases": [
      "시흥 플라이미술학원",
      "플라이 미술학원",
      "플라이 미술학원 시흥",
      "플라이미술학원",
      "플라이미술학원 시흥"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-052-gyeonggi",
    "originalName": "안산 클릭 미술학원",
    "normalizedName": "클릭미술학원 안산",
    "baseName": "클릭미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 단원구",
    "canonicalBrand": "클릭",
    "aliases": [
      "안산 클릭 미술학원",
      "안산 클릭미술학원",
      "클릭 미술학원 안산",
      "클릭미술학원",
      "클릭미술학원 안산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-053-gyeonggi",
    "originalName": "안산 창조의 아침 미술학원",
    "normalizedName": "창조의아침미술학원 안산",
    "baseName": "창조의아침미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 단원구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "안산 창조의 아침 미술학원",
      "안산 창조의아침미술학원",
      "창조의아침 미술학원 안산",
      "창조의아침미술학원",
      "창조의아침미술학원 안산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-054-gyeonggi",
    "originalName": "브레인스톰 미술학원",
    "normalizedName": "브레인스톰미술학원 안산",
    "baseName": "브레인스톰미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 단원구",
    "canonicalBrand": "브레인스톰",
    "aliases": [
      "브레인스톰 미술학원",
      "브레인스톰 미술학원 안산",
      "브레인스톰미술학원",
      "브레인스톰미술학원 안산",
      "안산 브레인스톰미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-055-gyeonggi",
    "originalName": "베스트홍익 미술학원",
    "normalizedName": "베스트홍익미술학원 안산",
    "baseName": "베스트홍익미술학원",
    "branchName": "안산",
    "displayLocation": "경기 안산시 상록구",
    "canonicalBrand": "베스트홍익",
    "aliases": [
      "베스트홍익 미술학원",
      "베스트홍익 미술학원 안산",
      "베스트홍익미술학원",
      "베스트홍익미술학원 안산",
      "안산 베스트홍익미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-056-gyeonggi",
    "originalName": "호우와자명 미술학원",
    "normalizedName": "호우와자명미술학원 동탄",
    "baseName": "호우와자명미술학원",
    "branchName": "동탄",
    "displayLocation": "경기 화성시",
    "canonicalBrand": "호우와자명",
    "aliases": [
      "동탄 호우와자명미술학원",
      "호우와자명 미술학원",
      "호우와자명 미술학원 동탄",
      "호우와자명미술학원",
      "호우와자명미술학원 동탄"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-057-gyeonggi",
    "originalName": "평택 su2 만화애니학원",
    "normalizedName": "에스유투 만화애니학원 평택",
    "baseName": "에스유투 만화애니학원",
    "branchName": "평택",
    "displayLocation": "경기 평택시",
    "canonicalBrand": "에스유투 만화애니학원",
    "aliases": [
      "에스유투 만화애니학원",
      "에스유투 만화애니학원 평택",
      "평택 su2 만화애니학원",
      "평택 에스유투 만화애니학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-058-gyeonggi",
    "originalName": "수원 오늘입시 미술학원",
    "normalizedName": "오늘입시미술학원 수원",
    "baseName": "오늘입시미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 영통구",
    "canonicalBrand": "오늘입시",
    "aliases": [
      "수원 오늘입시 미술학원",
      "수원 오늘입시미술학원",
      "오늘입시 미술학원 수원",
      "오늘입시미술학원",
      "오늘입시미술학원 수원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-059-gyeonggi",
    "originalName": "수원 창조의 아침 미술학원",
    "normalizedName": "창조의아침미술학원 수원",
    "baseName": "창조의아침미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 팔달구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "수원 창조의 아침 미술학원",
      "수원 창조의아침미술학원",
      "창조의아침 미술학원 수원",
      "창조의아침미술학원",
      "창조의아침미술학원 수원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-060-gyeonggi",
    "originalName": "수원 아이엠 미술학원",
    "normalizedName": "아이엠미술학원 수원",
    "baseName": "아이엠미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 장안구",
    "canonicalBrand": "아이엠",
    "aliases": [
      "수원 아이엠 미술학원",
      "수원 아이엠미술학원",
      "아이엠 미술학원 수원",
      "아이엠미술학원",
      "아이엠미술학원 수원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-061-gyeonggi",
    "originalName": "수원 소바 미술학원",
    "normalizedName": "소바미술학원 수원",
    "baseName": "소바미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 장안구",
    "canonicalBrand": "소바",
    "aliases": [
      "소바 미술학원 수원",
      "소바미술학원",
      "소바미술학원 수원",
      "수원 소바 미술학원",
      "수원 소바미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-062-gyeonggi",
    "originalName": "모두스만화애니 전문학원",
    "normalizedName": "모두스만화애니전문학원 수원",
    "baseName": "모두스만화애니전문학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 팔달구",
    "canonicalBrand": "모두스만화애니전문학원",
    "aliases": [
      "모두스만화애니 전문학원",
      "모두스만화애니전문학원",
      "모두스만화애니전문학원 수원",
      "수원 모두스만화애니전문학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-063-gyeonggi",
    "originalName": "노르웨이숲 가우디",
    "normalizedName": "노르웨이숲 가우디미술학원 동탄",
    "baseName": "노르웨이숲 가우디미술학원",
    "branchName": "동탄",
    "displayLocation": "경기 화성시",
    "canonicalBrand": "노르웨이숲 가우디",
    "aliases": [
      "노르웨이숲 가우디",
      "노르웨이숲 가우디 미술학원 동탄",
      "노르웨이숲 가우디미술학원",
      "노르웨이숲 가우디미술학원 동탄",
      "동탄 노르웨이숲 가우디미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-064-gyeonggi",
    "originalName": "오리씨앤씨 미술학원",
    "normalizedName": "C&C미술학원 오리",
    "baseName": "C&C미술학원",
    "branchName": "오리",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 오리",
      "C&C미술학원",
      "C&C미술학원 오리",
      "CNC미술학원",
      "CNC미술학원 오리",
      "c&c미술학원",
      "c&c미술학원 오리",
      "씨앤씨미술학원",
      "씨앤씨미술학원 오리",
      "오리 C&C미술학원",
      "오리 CNC미술학원",
      "오리 c&c미술학원",
      "오리 씨앤씨미술학원",
      "오리C&C미술학원",
      "오리씨앤씨 미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-065-gyeonggi",
    "originalName": "야탑 바우하우스 미술학원",
    "normalizedName": "바우하우스미술학원 야탑",
    "baseName": "바우하우스미술학원",
    "branchName": "야탑",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "바우하우스",
    "aliases": [
      "바우하우스 미술학원 야탑",
      "바우하우스미술학원",
      "바우하우스미술학원 야탑",
      "야탑 바우하우스 미술학원",
      "야탑 바우하우스미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-066-gyeonggi",
    "originalName": "애니하우스 미술학원",
    "normalizedName": "애니하우스미술학원 분당",
    "baseName": "애니하우스미술학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "애니하우스",
    "aliases": [
      "분당 애니하우스미술학원",
      "애니하우스 미술학원",
      "애니하우스 미술학원 분당",
      "애니하우스미술학원",
      "애니하우스미술학원 분당"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-067-gyeonggi",
    "originalName": "분당 서현 창조의 아침 미술학원",
    "normalizedName": "창조의아침미술학원 서현",
    "baseName": "창조의아침미술학원",
    "branchName": "서현",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "분당 서현 창조의 아침 미술학원",
      "분당 서현 창조의아침미술학원",
      "서현 창조의아침미술학원",
      "창조의아침 미술학원 서현",
      "창조의아침미술학원",
      "창조의아침미술학원 서현"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-068-gyeonggi",
    "originalName": "분당 스핀애니만화학원",
    "normalizedName": "스핀애니만화학원 분당",
    "baseName": "스핀애니만화학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "스핀애니만화학원",
    "aliases": [
      "분당 스핀애니만화학원",
      "스핀애니만화학원",
      "스핀애니만화학원 분당"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-069-gyeonggi",
    "originalName": "분당서현 바우하우스 미술학원",
    "normalizedName": "바우하우스미술학원 서현",
    "baseName": "바우하우스미술학원",
    "branchName": "서현",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "바우하우스",
    "aliases": [
      "바우하우스 미술학원 서현",
      "바우하우스미술학원",
      "바우하우스미술학원 서현",
      "분당서현 바우하우스 미술학원",
      "분당서현 바우하우스미술학원",
      "서현 바우하우스미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-070-gyeonggi",
    "originalName": "분당 묵형상 미술학원",
    "normalizedName": "묵형상미술학원 분당",
    "baseName": "묵형상미술학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "묵형상",
    "aliases": [
      "묵형상 미술학원 분당",
      "묵형상미술학원",
      "묵형상미술학원 분당",
      "분당 묵형상 미술학원",
      "분당 묵형상미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-071-gyeonggi",
    "originalName": "분당 가우디 미술학원",
    "normalizedName": "가우디미술학원 서현",
    "baseName": "가우디미술학원",
    "branchName": "서현",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "가우디",
    "aliases": [
      "가우디 미술학원 서현",
      "가우디미술학원",
      "가우디미술학원 서현",
      "분당 가우디 미술학원",
      "분당 가우디미술학원",
      "서현 가우디미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-072-gyeonggi",
    "originalName": "미금 바우하우스 미술학원",
    "normalizedName": "바우하우스미술학원 미금",
    "baseName": "바우하우스미술학원",
    "branchName": "미금",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "바우하우스",
    "aliases": [
      "미금 바우하우스 미술학원",
      "미금 바우하우스미술학원",
      "바우하우스 미술학원 미금",
      "바우하우스미술학원",
      "바우하우스미술학원 미금"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-073-gyeonggi",
    "originalName": "경기광주 창조의 아침 미술학원",
    "normalizedName": "창조의아침미술학원 경기광주",
    "baseName": "창조의아침미술학원",
    "branchName": "경기광주",
    "displayLocation": "경기 광주시",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "경기광주 창조의 아침 미술학원",
      "경기광주 창조의아침미술학원",
      "창조의아침 미술학원 경기광주",
      "창조의아침미술학원",
      "창조의아침미술학원 경기광주"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-074-gyeonggi",
    "originalName": "오늘미술학원 부천",
    "normalizedName": "오늘미술학원 부천",
    "baseName": "오늘미술학원",
    "branchName": "부천",
    "displayLocation": "경기 부천시 원미구",
    "canonicalBrand": "오늘",
    "aliases": [
      "부천 오늘미술학원",
      "오늘 미술학원 부천",
      "오늘미술학원",
      "오늘미술학원 부천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-075-gyeonggi",
    "originalName": "애니톡만화 애니미술학원",
    "normalizedName": "애니톡만화 애니미술학원 부천",
    "baseName": "애니톡만화 애니미술학원",
    "branchName": "부천",
    "displayLocation": "경기 부천시 원미구",
    "canonicalBrand": "애니톡만화 애니",
    "aliases": [
      "부천 애니톡만화 애니미술학원",
      "애니톡만화 애니 미술학원 부천",
      "애니톡만화 애니미술학원",
      "애니톡만화 애니미술학원 부천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-076-gyeonggi",
    "originalName": "부천 클릭전원",
    "normalizedName": "클릭전원미술학원 부천",
    "baseName": "클릭전원미술학원",
    "branchName": "부천",
    "displayLocation": "경기 부천시",
    "canonicalBrand": "클릭전원",
    "aliases": [
      "부천 클릭전원",
      "부천 클릭전원미술학원",
      "클릭전원 미술학원 부천",
      "클릭전원미술학원",
      "클릭전원미술학원 부천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-077-gyeonggi",
    "originalName": "부천 꿈미술학원",
    "normalizedName": "꿈미술학원 부천",
    "baseName": "꿈미술학원",
    "branchName": "부천",
    "displayLocation": "경기 부천시",
    "canonicalBrand": "꿈",
    "aliases": [
      "꿈 미술학원 부천",
      "꿈미술학원",
      "꿈미술학원 부천",
      "부천 꿈미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-078-gyeonggi",
    "originalName": "디딤돌 미술학원",
    "normalizedName": "디딤돌미술학원 부천",
    "baseName": "디딤돌미술학원",
    "branchName": "부천",
    "displayLocation": "경기 부천시",
    "canonicalBrand": "디딤돌",
    "aliases": [
      "디딤돌 미술학원",
      "디딤돌 미술학원 부천",
      "디딤돌미술학원",
      "디딤돌미술학원 부천",
      "부천 디딤돌미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-079-gyeonggi",
    "originalName": "구리 영원한미소 미술학원",
    "normalizedName": "영원한미소미술학원 구리",
    "baseName": "영원한미소미술학원",
    "branchName": "구리",
    "displayLocation": "경기 구리시",
    "canonicalBrand": "영원한미소",
    "aliases": [
      "구리 영원한미소 미술학원",
      "구리 영원한미소미술학원",
      "영원한미소 미술학원 구리",
      "영원한미소미술학원",
      "영원한미소미술학원 구리"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-080-gyeonggi",
    "originalName": "구리 소다미술학원",
    "normalizedName": "소다미술학원 구리",
    "baseName": "소다미술학원",
    "branchName": "구리",
    "displayLocation": "경기 구리시",
    "canonicalBrand": "소다",
    "aliases": [
      "구리 소다미술학원",
      "소다 미술학원 구리",
      "소다미술학원",
      "소다미술학원 구리"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-081-gyeonggi",
    "originalName": "일산 클릭전원 미술학원",
    "normalizedName": "클릭전원미술학원 일산",
    "baseName": "클릭전원미술학원",
    "branchName": "일산",
    "displayLocation": "경기 고양시 일산서구",
    "canonicalBrand": "클릭전원",
    "aliases": [
      "일산 클릭전원 미술학원",
      "일산 클릭전원미술학원",
      "클릭전원 미술학원 일산",
      "클릭전원미술학원",
      "클릭전원미술학원 일산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-082-gyeonggi",
    "originalName": "일산 영원한 미소 미술학원",
    "normalizedName": "영원한미소미술학원 일산",
    "baseName": "영원한미소미술학원",
    "branchName": "일산",
    "displayLocation": "경기 고양시 일산서구",
    "canonicalBrand": "영원한미소",
    "aliases": [
      "영원한미소 미술학원 일산",
      "영원한미소미술학원",
      "영원한미소미술학원 일산",
      "일산 영원한 미소 미술학원",
      "일산 영원한미소미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-083-gyeongbuk",
    "originalName": "홀릭 미술학원",
    "normalizedName": "홀릭미술학원 구미",
    "baseName": "홀릭미술학원",
    "branchName": "구미",
    "displayLocation": "경북 구미시",
    "canonicalBrand": "홀릭",
    "aliases": [
      "구미 홀릭미술학원",
      "홀릭 미술학원",
      "홀릭 미술학원 구미",
      "홀릭미술학원",
      "홀릭미술학원 구미"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-084-gyeongbuk",
    "originalName": "포항 그린섬 미술학원",
    "normalizedName": "그린섬미술학원 포항",
    "baseName": "그린섬미술학원",
    "branchName": "포항",
    "displayLocation": "경북 포항시 북구",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 포항",
      "그린섬미술학원",
      "그린섬미술학원 포항",
      "포항 그린섬 미술학원",
      "포항 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-085-gyeonggi",
    "originalName": "멘토미술학원",
    "normalizedName": "멘토미술학원 수지",
    "baseName": "멘토미술학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구",
    "canonicalBrand": "멘토",
    "aliases": [
      "멘토 미술학원 수지",
      "멘토미술학원",
      "멘토미술학원 수지",
      "수지 멘토미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-086-gyeonggi",
    "originalName": "스핀애니미술학원 용인본점",
    "normalizedName": "스핀애니미술학원 용인본점미술학원 동백",
    "baseName": "스핀애니미술학원 용인본점미술학원",
    "branchName": "동백",
    "displayLocation": "경기 용인시 기흥구",
    "canonicalBrand": "스핀애니 용인본점",
    "aliases": [
      "동백 스핀애니미술학원 용인본점미술학원",
      "스핀애니 미술학원 용인본점 미술학원 동백",
      "스핀애니미술학원 용인본점",
      "스핀애니미술학원 용인본점미술학원",
      "스핀애니미술학원 용인본점미술학원 동백"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-087-gyeonggi",
    "originalName": "에스유투 용인수지점",
    "normalizedName": "에스유투 용인수지점미술학원 수지",
    "baseName": "에스유투 용인수지점미술학원",
    "branchName": "수지",
    "displayLocation": "경기 용인시 수지구",
    "canonicalBrand": "에스유투 용인수지점",
    "aliases": [
      "수지 에스유투 용인수지점미술학원",
      "에스유투 용인수지점",
      "에스유투 용인수지점 미술학원 수지",
      "에스유투 용인수지점미술학원",
      "에스유투 용인수지점미술학원 수지"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-088-gyeongbuk",
    "originalName": "경주DnA디앤에이미술학원",
    "normalizedName": "디앤에이디앤에이미술학원 경주",
    "baseName": "디앤에이디앤에이미술학원",
    "branchName": "경주",
    "displayLocation": "경북 경주시",
    "canonicalBrand": "디앤에이디앤에이",
    "aliases": [
      "경주 디앤에이디앤에이미술학원",
      "경주DnA디앤에이미술학원",
      "경주디앤에이디앤에이미술학원",
      "디앤에이디앤에이 미술학원 경주",
      "디앤에이디앤에이미술학원",
      "디앤에이디앤에이미술학원 경주"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-089-daegu",
    "originalName": "범어 전원미술학원",
    "normalizedName": "전원미술학원 범어",
    "baseName": "전원미술학원",
    "branchName": "범어",
    "displayLocation": "대구 수성구",
    "canonicalBrand": "전원",
    "aliases": [
      "범어 전원미술학원",
      "전원 미술학원 범어",
      "전원미술학원",
      "전원미술학원 범어"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-090-jeonnam",
    "originalName": "디자인스쿨미술학원",
    "normalizedName": "디자인스쿨미술학원 광양",
    "baseName": "디자인스쿨미술학원",
    "branchName": "광양",
    "displayLocation": "전남 광양시",
    "canonicalBrand": "디자인스쿨",
    "aliases": [
      "광양 디자인스쿨미술학원",
      "디자인스쿨 미술학원 광양",
      "디자인스쿨미술학원",
      "디자인스쿨미술학원 광양"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-091-jeonnam",
    "originalName": "디자인스타미술학원",
    "normalizedName": "디자인스타미술학원 여수",
    "baseName": "디자인스타미술학원",
    "branchName": "여수",
    "displayLocation": "전남 여수시",
    "canonicalBrand": "디자인스타",
    "aliases": [
      "디자인스타 미술학원 여수",
      "디자인스타미술학원",
      "디자인스타미술학원 여수",
      "여수 디자인스타미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-092-daegu",
    "originalName": "대구디앤에이미술학원",
    "normalizedName": "디앤에이미술학원 대구",
    "baseName": "디앤에이미술학원",
    "branchName": "대구",
    "displayLocation": "대구 수성구",
    "canonicalBrand": "디앤에이",
    "aliases": [
      "대구 디앤에이미술학원",
      "대구디앤에이미술학원",
      "디앤에이 미술학원 대구",
      "디앤에이미술학원",
      "디앤에이미술학원 대구"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-093-jeonnam",
    "originalName": "순천 씨앤씨미술학원",
    "normalizedName": "C&C미술학원 순천",
    "baseName": "C&C미술학원",
    "branchName": "순천",
    "displayLocation": "전남 순천시",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 순천",
      "C&C미술학원",
      "C&C미술학원 순천",
      "CNC미술학원",
      "CNC미술학원 순천",
      "c&c미술학원",
      "c&c미술학원 순천",
      "순천 C&C미술학원",
      "순천 CNC미술학원",
      "순천 c&c미술학원",
      "순천 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 순천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-094-seoul",
    "originalName": "송파 넥스트미술학원",
    "normalizedName": "넥스트미술학원 송파",
    "baseName": "넥스트미술학원",
    "branchName": "송파",
    "displayLocation": "서울 송파구",
    "canonicalBrand": "넥스트",
    "aliases": [
      "넥스트 미술학원 송파",
      "넥스트미술학원",
      "넥스트미술학원 송파",
      "송파 넥스트미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-095-gyeonggi",
    "originalName": "글로리 미술학원",
    "normalizedName": "글로리미술학원 남양주",
    "baseName": "글로리미술학원",
    "branchName": "남양주",
    "displayLocation": "경기 남양주시",
    "canonicalBrand": "글로리",
    "aliases": [
      "글로리 미술학원",
      "글로리 미술학원 남양주",
      "글로리미술학원",
      "글로리미술학원 남양주",
      "남양주 글로리미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-096-gyeonggi",
    "originalName": "과천 가우디미술학원",
    "normalizedName": "가우디미술학원 과천",
    "baseName": "가우디미술학원",
    "branchName": "과천",
    "displayLocation": "경기 과천시",
    "canonicalBrand": "가우디",
    "aliases": [
      "가우디 미술학원 과천",
      "가우디미술학원",
      "가우디미술학원 과천",
      "과천 가우디미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-097-gyeongnam",
    "originalName": "밀양 위드디자인미술학원",
    "normalizedName": "위드디자인미술학원 밀양",
    "baseName": "위드디자인미술학원",
    "branchName": "밀양",
    "displayLocation": "경남 밀양시",
    "canonicalBrand": "위드디자인",
    "aliases": [
      "밀양 위드디자인미술학원",
      "위드디자인 미술학원 밀양",
      "위드디자인미술학원",
      "위드디자인미술학원 밀양"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-098-gyeonggi",
    "originalName": "분당 아키온미술학원",
    "normalizedName": "아키온미술학원 분당",
    "baseName": "아키온미술학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구",
    "canonicalBrand": "아키온",
    "aliases": [
      "분당 아키온미술학원",
      "아키온 미술학원 분당",
      "아키온미술학원",
      "아키온미술학원 분당"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-099-busan",
    "originalName": "부산 그린섬미술학원 화명",
    "normalizedName": "그린섬미술학원 화명",
    "baseName": "그린섬미술학원",
    "branchName": "화명",
    "displayLocation": "부산 북구",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 화명",
      "그린섬미술학원",
      "그린섬미술학원 화명",
      "부산 그린섬미술학원 화명",
      "화명 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "extra-100-seoul",
    "originalName": "홍대앞 에스유투미술학원",
    "normalizedName": "에스유투미술학원 홍대",
    "baseName": "에스유투미술학원",
    "branchName": "홍대",
    "displayLocation": "서울 마포구",
    "canonicalBrand": "에스유투",
    "aliases": [
      "에스유투 미술학원 홍대",
      "에스유투미술학원",
      "에스유투미술학원 홍대",
      "홍대 에스유투미술학원",
      "홍대앞 에스유투미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-neocat-art",
    "originalName": "네오캣미술학원 강남",
    "normalizedName": "네오캣미술학원 선릉",
    "baseName": "네오캣미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "네오캣",
    "aliases": [
      "네오캣 미술학원 선릉",
      "네오캣미술학원",
      "네오캣미술학원 강남",
      "네오캣미술학원 선릉",
      "선릉 네오캣미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-greensum-art",
    "originalName": "그린섬미술학원 강남본원",
    "normalizedName": "그린섬미술학원 한티",
    "baseName": "그린섬미술학원",
    "branchName": "한티",
    "displayLocation": "서울 강남구 대치동",
    "canonicalBrand": "그린섬",
    "aliases": [
      "그린섬 미술학원 한티",
      "그린섬미술학원",
      "그린섬미술학원 강남본원",
      "그린섬미술학원 한티",
      "한티 그린섬미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "seolleung-study-and-art",
    "originalName": "스터디앤아트미술학원",
    "normalizedName": "스터디앤아트미술학원 선릉",
    "baseName": "스터디앤아트미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉·대치 인근",
    "canonicalBrand": "스터디앤아트",
    "aliases": [
      "선릉 스터디앤아트미술학원",
      "스터디앤아트 미술학원 선릉",
      "스터디앤아트미술학원",
      "스터디앤아트미술학원 선릉"
    ],
    "confidence": "운영자 확인 필요",
    "memo": "주소 확인 필요"
  },
  {
    "academyId": "busan-archive-art",
    "originalName": "아카이브미술학원",
    "normalizedName": "아카이브미술학원 남천",
    "baseName": "아카이브미술학원",
    "branchName": "남천",
    "displayLocation": "부산 수영구 남천동",
    "canonicalBrand": "아카이브",
    "aliases": [
      "남천 아카이브미술학원",
      "아카이브 미술학원 남천",
      "아카이브미술학원",
      "아카이브미술학원 남천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ulsan-b2b-art",
    "originalName": "울산 비투비미술학원",
    "normalizedName": "비투비미술학원 울산",
    "baseName": "비투비미술학원",
    "branchName": "울산",
    "displayLocation": "울산 남구 신정동",
    "canonicalBrand": "비투비",
    "aliases": [
      "비투비 미술학원 울산",
      "비투비미술학원",
      "비투비미술학원 울산",
      "울산 비투비미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-cloud-art",
    "originalName": "대전 클라우드미술학원",
    "normalizedName": "클라우드미술학원 둔산",
    "baseName": "클라우드미술학원",
    "branchName": "둔산",
    "displayLocation": "대전 서구 탄방동",
    "canonicalBrand": "클라우드",
    "aliases": [
      "대전 클라우드미술학원",
      "둔산 클라우드미술학원",
      "클라우드 미술학원 둔산",
      "클라우드미술학원",
      "클라우드미술학원 둔산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-beomeo-aiwon-art",
    "originalName": "에이아이원미술학원",
    "normalizedName": "에이아이원미술학원 수성",
    "baseName": "에이아이원미술학원",
    "branchName": "수성",
    "displayLocation": "대구 수성구 범어동",
    "canonicalBrand": "에이아이원",
    "aliases": [
      "수성 에이아이원미술학원",
      "에이아이원 미술학원 수성",
      "에이아이원미술학원",
      "에이아이원미술학원 수성"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ilsan-changa-juyeop-art",
    "originalName": "일산 창조의아침미술학원",
    "normalizedName": "창조의아침미술학원 일산",
    "baseName": "창조의아침미술학원",
    "branchName": "일산",
    "displayLocation": "경기 고양시 일산서구 주엽동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "일산 창조의아침미술학원",
      "창조의아침 미술학원 일산",
      "창조의아침미술학원",
      "창조의아침미술학원 일산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "ipsami-art",
    "originalName": "입사미 미술학원",
    "normalizedName": "입사미미술학원 선릉",
    "baseName": "입사미미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선정릉역 인근",
    "canonicalBrand": "입사미",
    "aliases": [
      "선릉 입사미미술학원",
      "입사미 미술학원",
      "입사미 미술학원 선릉",
      "입사미미술학원",
      "입사미미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "lab-seolleung-art",
    "originalName": "랩미술선릉학원",
    "normalizedName": "랩미술학원 선릉",
    "baseName": "랩미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "랩",
    "aliases": [
      "랩 미술학원 선릉",
      "랩미술선릉학원",
      "랩미술학원",
      "랩미술학원 선릉",
      "선릉 랩미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "dongdaemun-changa-art",
    "originalName": "동대문 창조의아침미술학원",
    "normalizedName": "창조의아침미술학원 동대문",
    "baseName": "창조의아침미술학원",
    "branchName": "동대문",
    "displayLocation": "서울 동대문구",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "동대문 창조의아침미술학원",
      "창조의아침 미술학원 동대문",
      "창조의아침미술학원",
      "창조의아침미술학원 동대문"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-artpoem-art",
    "originalName": "대구 아트포엠미술학원",
    "normalizedName": "아트포엠미술학원 대구",
    "baseName": "아트포엠미술학원",
    "branchName": "대구",
    "displayLocation": "대구 수성구 범어동 인근",
    "canonicalBrand": "아트포엠",
    "aliases": [
      "대구 아트포엠미술학원",
      "아트포엠 미술학원 대구",
      "아트포엠미술학원",
      "아트포엠미술학원 대구"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "bundang-neocat-art",
    "originalName": "분당 네오캣미술학원",
    "normalizedName": "네오캣미술학원 분당",
    "baseName": "네오캣미술학원",
    "branchName": "분당",
    "displayLocation": "경기 성남시 분당구 정자동",
    "canonicalBrand": "네오캣",
    "aliases": [
      "네오캣 미술학원 분당",
      "네오캣미술학원",
      "네오캣미술학원 분당",
      "분당 네오캣미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangdong-cloud-art",
    "originalName": "강동 클라우드미술학원",
    "normalizedName": "클라우드미술학원 강동",
    "baseName": "클라우드미술학원",
    "branchName": "강동",
    "displayLocation": "서울 강동구 천호동",
    "canonicalBrand": "클라우드",
    "aliases": [
      "강동 클라우드미술학원",
      "클라우드 미술학원 강동",
      "클라우드미술학원",
      "클라우드미술학원 강동"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "noryangjin-changa-art",
    "originalName": "노량진 창조의아침미술학원",
    "normalizedName": "창조의아침미술학원 노량진",
    "baseName": "창조의아침미술학원",
    "branchName": "노량진",
    "displayLocation": "서울 동작구 노량진동",
    "canonicalBrand": "창조의아침",
    "aliases": [
      "노량진 창조의아침미술학원",
      "창조의아침 미술학원 노량진",
      "창조의아침미술학원",
      "창조의아침미술학원 노량진"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "mokwoo-art-suwon",
    "originalName": "목우미술학원",
    "normalizedName": "목우미술학원 수원",
    "baseName": "목우미술학원",
    "branchName": "수원",
    "displayLocation": "경기 수원시 팔달구",
    "canonicalBrand": "목우",
    "aliases": [
      "목우 미술학원 수원",
      "목우미술학원",
      "목우미술학원 수원",
      "수원 목우미술학원"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "yangjae-gy-art",
    "originalName": "지와이아트 미술학원",
    "normalizedName": "지와이아트미술학원 양재",
    "baseName": "지와이아트미술학원",
    "branchName": "양재",
    "displayLocation": "서울 서초구 양재동",
    "canonicalBrand": "지와이아트",
    "aliases": [
      "양재 지와이아트미술학원",
      "지와이아트 미술학원",
      "지와이아트 미술학원 양재",
      "지와이아트미술학원",
      "지와이아트미술학원 양재"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-seoha-art",
    "originalName": "서하미술학원",
    "normalizedName": "서하미술학원 논현",
    "baseName": "서하미술학원",
    "branchName": "논현",
    "displayLocation": "서울 강남구 논현동",
    "canonicalBrand": "서하",
    "aliases": [
      "논현 서하미술학원",
      "서하 미술학원 논현",
      "서하미술학원",
      "서하미술학원 논현"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-migong-art",
    "originalName": "미공미술학원",
    "normalizedName": "미공미술학원 둔산",
    "baseName": "미공미술학원",
    "branchName": "둔산",
    "displayLocation": "대전 서구 탄방동",
    "canonicalBrand": "미공",
    "aliases": [
      "둔산 미공미술학원",
      "미공 미술학원 둔산",
      "미공미술학원",
      "미공미술학원 둔산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "incheon-gyeyang-cnc-art",
    "originalName": "계양C&C미술학원",
    "normalizedName": "C&C미술학원 계양",
    "baseName": "C&C미술학원",
    "branchName": "계양",
    "displayLocation": "인천 계양구 작전동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 계양",
      "C&C미술학원",
      "C&C미술학원 계양",
      "CNC미술학원",
      "CNC미술학원 계양",
      "c&c미술학원",
      "c&c미술학원 계양",
      "계양 C&C미술학원",
      "계양 CNC미술학원",
      "계양 c&c미술학원",
      "계양 씨앤씨미술학원",
      "계양C&C미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 계양"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daegu-suseong-cloud-click-art",
    "originalName": "대구 수성클라우드미술학원",
    "normalizedName": "클라우드미술학원 수성",
    "baseName": "클라우드미술학원",
    "branchName": "수성",
    "displayLocation": "대구 수성구 만촌동",
    "canonicalBrand": "클라우드",
    "aliases": [
      "대구 수성클라우드미술학원",
      "수성 클라우드미술학원",
      "클라우드 미술학원 수성",
      "클라우드미술학원",
      "클라우드미술학원 수성"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "sinsa-kima-art",
    "originalName": "키마미술학원",
    "normalizedName": "키마미술학원 신사",
    "baseName": "키마미술학원",
    "branchName": "신사",
    "displayLocation": "서울 서초구 잠원동",
    "canonicalBrand": "키마",
    "aliases": [
      "신사 키마미술학원",
      "키마 미술학원 신사",
      "키마미술학원",
      "키마미술학원 신사"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "gangnam-o2-art",
    "originalName": "오투미술학원",
    "normalizedName": "오투미술학원 선릉",
    "baseName": "오투미술학원",
    "branchName": "선릉",
    "displayLocation": "서울 강남구 선릉역 인근",
    "canonicalBrand": "오투",
    "aliases": [
      "선릉 오투미술학원",
      "오투 미술학원 선릉",
      "오투미술학원",
      "오투미술학원 선릉"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "busan-sigak-art",
    "originalName": "시각미술학원",
    "normalizedName": "시각미술학원 남천",
    "baseName": "시각미술학원",
    "branchName": "남천",
    "displayLocation": "부산 수영구 남천동",
    "canonicalBrand": "시각",
    "aliases": [
      "남천 시각미술학원",
      "시각 미술학원 남천",
      "시각미술학원",
      "시각미술학원 남천"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "daejeon-dunsan-cnc-art",
    "originalName": "씨앤씨미술학원 대전둔산캠퍼스",
    "normalizedName": "C&C미술학원 둔산",
    "baseName": "C&C미술학원",
    "branchName": "둔산",
    "displayLocation": "대전 서구 탄방동",
    "canonicalBrand": "C&C",
    "aliases": [
      "C&C 미술학원 둔산",
      "C&C미술학원",
      "C&C미술학원 대전둔산캠퍼스",
      "C&C미술학원 둔산",
      "CNC미술학원",
      "CNC미술학원 둔산",
      "c&c미술학원",
      "c&c미술학원 둔산",
      "둔산 C&C미술학원",
      "둔산 CNC미술학원",
      "둔산 c&c미술학원",
      "둔산 씨앤씨미술학원",
      "씨앤씨미술학원",
      "씨앤씨미술학원 대전둔산캠퍼스",
      "씨앤씨미술학원 둔산"
    ],
    "confidence": "자동 정규화",
    "memo": null
  },
  {
    "academyId": "hongseong-design-ufo-art",
    "originalName": "디자인유에프오미술학원",
    "normalizedName": "디자인유에프오미술학원 내포",
    "baseName": "디자인유에프오미술학원",
    "branchName": "내포",
    "displayLocation": "충남 홍성군 홍북읍",
    "canonicalBrand": "디자인유에프오",
    "aliases": [
      "내포 디자인유에프오미술학원",
      "디자인유에프오 미술학원 내포",
      "디자인유에프오미술학원",
      "디자인유에프오미술학원 내포"
    ],
    "confidence": "자동 정규화",
    "memo": null
  }
];

export const academyNameNormalizationMap = new Map(academyNameNormalizations.map((item) => [item.academyId, item]));

export const getNormalizedAcademyName = (academyId: string, fallbackName: string) => {
  return academyNameNormalizationMap.get(academyId)?.normalizedName ?? fallbackName;
};

export const getNormalizedAcademyBaseName = (academyId: string, fallbackName: string) => {
  return academyNameNormalizationMap.get(academyId)?.baseName ?? fallbackName;
};

export const getNormalizedAcademyBranchName = (academyId: string) => {
  return academyNameNormalizationMap.get(academyId)?.branchName ?? "";
};

export const normalizeAcademySearchText = (value: string) => {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/미술학원|미술 학원|학원/g, "")
    .replace(/씨앤씨|cnc/gi, "c&c")
    .replace(/[\W_]/g, "");
};

export const findAcademyNormalizationByAlias = (value: string) => {
  const normalized = normalizeAcademySearchText(value);
  return academyNameNormalizations.find((item) => {
    const candidates = [item.normalizedName, item.originalName, item.baseName, ...item.aliases];
    return candidates.some((candidate) => normalizeAcademySearchText(candidate) === normalized);
  });
};

export const applyAcademyNameNormalizations = <T extends { id: string; name: string; location?: string }>(academies: T[]) => {
  return academies.map((academy) => {
    const normalization = academyNameNormalizationMap.get(academy.id);
    if (!normalization) return academy;
    return {
      ...academy,
      rawName: academy.name,
      name: normalization.normalizedName,
      baseName: normalization.baseName,
      branchName: normalization.branchName,
      displayLocation: normalization.displayLocation,
      nameAliases: normalization.aliases,
      nameNormalizationConfidence: normalization.confidence,
    };
  });
};
