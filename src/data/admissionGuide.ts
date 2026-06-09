export type GuideCategory =
  | "입시 기본"
  | "전형 이해"
  | "실기 유형"
  | "학원 선택"
  | "리뷰 읽기";

export type GuideSourceConfidence =
  | "공식 자료"
  | "보조 자료"
  | "운영자 정리"
  | "확인 필요";

export type GuideTerm = {
  id: string;
  category: GuideCategory;
  title: string;
  oneLine: string;
  description: string;
  example?: string;
  tip?: string;
  relatedTags: string[];
  sourceUrls: string[];
  confidence: GuideSourceConfidence;
};

export type PracticalTypeGuide = {
  id: string;
  title: string;
  shortLabel: string;
  summary: string;
  whatItChecks: string[];
  goodFor: string[];
  preparationTips: string[];
  academySearchType: string;
  sourceUrls: string[];
  confidence: GuideSourceConfidence;
};

export type GuideChecklistItem = {
  id: string;
  title: string;
  description: string;
};

export type GuideFAQ = {
  id: string;
  question: string;
  answer: string;
};

export const admissionGuideHero = {
  title: "입시 가이드",
  headline: "미대 입시가 처음이라면, 여기서부터 시작하세요.",
  description:
    "기초디자인, 수시, 정시, 실기고사처럼 처음 들으면 헷갈리는 용어를 쉽게 정리했습니다. 학원을 찾기 전에 필요한 기본 정보를 먼저 확인해 보세요.",
  primaryButton: {
    label: "학원 찾기",
    href: "/academies",
  },
  secondaryButton: {
    label: "리뷰 등록하기",
    href: "/review/new",
  },
};

export const beginnerFlow = [
  {
    id: "flow-01",
    title: "1. 전공 방향을 먼저 파악하기",
    description:
      "디자인, 회화, 조소, 만화·애니처럼 내가 관심 있는 계열을 먼저 정리해 보세요. 계열에 따라 준비하는 실기 유형과 학원 선택 기준이 달라질 수 있습니다.",
  },
  {
    id: "flow-02",
    title: "2. 목표 학교의 전형 확인하기",
    description:
      "대학마다 수시·정시, 실기 반영 비율, 실기 유형이 다릅니다. 관심 대학이 있다면 반드시 해당 연도 모집요강을 확인해야 합니다.",
  },
  {
    id: "flow-03",
    title: "3. 지역과 전형에 맞는 학원 찾기",
    description:
      "내가 준비해야 하는 실기 유형을 기준으로 지역, 수업 분위기, 리뷰를 비교해 보세요. 가까운 학원부터 확인하고 필요하면 다른 지역까지 넓혀 보면 좋습니다.",
  },
];

export const guideTerms: GuideTerm[] = [
  {
    id: "term-susi",
    category: "전형 이해",
    title: "수시",
    oneLine: "정시보다 먼저 진행되는 대학 입학 모집 시기입니다.",
    description:
      "수시는 보통 학생부, 실기, 면접, 논술 등 대학이 정한 전형 요소를 조합해 학생을 선발하는 모집 시기입니다. 미대 입시에서는 수시에서도 실기 전형을 운영하는 대학이 있습니다.",
    tip: "수시 전형은 대학과 학과마다 반영 방식이 다르므로, 목표 대학의 모집요강을 먼저 확인하세요.",
    relatedTags: ["수시", "실기", "학생부"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-jeongsi",
    category: "전형 이해",
    title: "정시",
    oneLine: "수능 이후 진행되는 대학 입학 모집 시기입니다.",
    description:
      "정시는 주로 수능 성적을 중심으로 선발하지만, 미대에서는 수능과 실기를 함께 반영하는 경우가 많습니다. 학교에 따라 면접이나 서류가 함께 반영될 수도 있습니다.",
    tip: "정시 미대 입시는 수능 반영 비율과 실기 반영 비율을 함께 봐야 합니다.",
    relatedTags: ["정시", "수능", "실기"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-student-record",
    category: "전형 이해",
    title: "학생부",
    oneLine: "학교생활기록부를 줄여 부르는 말입니다.",
    description:
      "학생부에는 교과 성적, 출결, 비교과 활동 등 고등학교 생활과 관련된 내용이 기록됩니다. 학생부교과전형과 학생부종합전형에서 중요한 평가 자료로 활용됩니다.",
    relatedTags: ["학생부", "내신", "생기부"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-student-record-subject",
    category: "전형 이해",
    title: "학생부교과전형",
    oneLine: "학생부 교과 성적을 중심으로 평가하는 전형입니다.",
    description:
      "학생부교과전형은 학교생활기록부의 교과 성적을 중심으로 학생을 평가하는 전형입니다. 대학에 따라 면접, 서류, 수능 최저학력기준 등이 함께 적용될 수 있습니다.",
    relatedTags: ["학생부교과", "내신"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-student-record-comprehensive",
    category: "전형 이해",
    title: "학생부종합전형",
    oneLine: "학생부를 바탕으로 학생을 종합적으로 평가하는 전형입니다.",
    description:
      "학생부종합전형은 학생부를 중심으로 교과, 비교과, 면접 등을 종합적으로 평가하는 전형입니다. 미대에서는 전공 적합성, 활동 과정, 면접 등이 함께 중요해질 수 있습니다.",
    relatedTags: ["학생부종합", "면접", "서류"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-practical-track",
    category: "전형 이해",
    title: "실기/실적 위주 전형",
    oneLine: "실기고사나 실적을 주요 평가 요소로 반영하는 전형입니다.",
    description:
      "미대 입시에서 가장 자주 접하게 되는 전형 유형 중 하나입니다. 대학별로 실기 유형, 고사 시간, 준비물, 반영 비율이 다르기 때문에 모집요강 확인이 중요합니다.",
    relatedTags: ["실기", "실기고사", "특기자"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-suneung-minimum",
    category: "전형 이해",
    title: "수능 최저학력기준",
    oneLine: "합격을 위해 충족해야 하는 최소 수능 등급 조건입니다.",
    description:
      "수시에서 대학이 정한 수능 등급 조건을 충족해야 최종 합격이 가능한 경우가 있습니다. 모든 대학과 전형에 있는 것은 아니므로 모집요강에서 확인해야 합니다.",
    relatedTags: ["수능최저", "수시", "등급"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-admission-guidebook",
    category: "입시 기본",
    title: "모집요강",
    oneLine: "그 해 입시의 공식 안내서입니다.",
    description:
      "모집요강에는 모집 인원, 전형 방법, 반영 비율, 실기고사 내용, 제출 서류, 일정 등이 정리되어 있습니다. 미대 입시 정보는 매년 달라질 수 있으므로 가장 먼저 확인해야 하는 자료입니다.",
    tip: "블로그나 학원 글을 보기 전에 대학 입학처의 공식 모집요강을 먼저 확인하는 습관이 필요합니다.",
    relatedTags: ["모집요강", "전형방법", "입학처"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-reflection-rate",
    category: "입시 기본",
    title: "반영 비율",
    oneLine: "성적, 실기, 면접 등이 최종 점수에 얼마나 들어가는지를 뜻합니다.",
    description:
      "예를 들어 수능 60%, 실기 40%라면 수능 성적과 실기 점수가 각각 정해진 비율로 반영됩니다. 같은 미대라도 학과와 전형에 따라 반영 비율이 다를 수 있습니다.",
    relatedTags: ["반영비율", "실기", "수능", "학생부"],
    sourceUrls: ["https://www.adiga.kr/uct/asi/ces/systemView.do?menuId=PCUCTASI1100"],
    confidence: "공식 자료",
  },
  {
    id: "term-practical-exam",
    category: "실기 유형",
    title: "실기고사",
    oneLine: "대학이 직접 실시하는 미술 실기 평가입니다.",
    description:
      "실기고사는 대학과 전공에 따라 기초디자인, 기초조형, 회화, 조소, 만화·애니 등 다양한 방식으로 진행됩니다. 고사 시간, 용지, 준비물, 평가 기준은 대학별 모집요강을 기준으로 확인해야 합니다.",
    relatedTags: ["실기고사", "고사시간", "준비물"],
    sourceUrls: ["https://art.snu.ac.kr/%EC%9E%85%ED%95%99%EC%95%88%EB%82%B4/%EC%9E%85%ED%95%99%EC%95%88%EB%82%B4/"],
    confidence: "공식 자료",
  },
  {
    id: "term-basic-design",
    category: "실기 유형",
    title: "기초디자인",
    oneLine: "주어진 소재를 관찰하고 조형적으로 구성해 표현하는 디자인 실기 유형입니다.",
    description:
      "기초디자인은 디자인 계열 미대 입시에서 많이 활용되는 대표적인 실기 과목입니다. 주어진 소재의 형태, 질감, 관계를 파악하고 화면 안에 설득력 있게 구성하는 능력이 중요합니다.",
    example: "금속 컵, 비닐, 꽃잎 같은 소재가 주어졌을 때 형태와 질감을 관찰하고 화면 안에서 조형적으로 구성합니다.",
    relatedTags: ["기초디자인", "디자인", "구성"],
    sourceUrls: ["https://artndesign.com/bbs/board.php?bo_table=acanews&wr_id=2058"],
    confidence: "보조 자료",
  },
  {
    id: "term-basic-visual",
    category: "실기 유형",
    title: "기초소양 / 기초조형",
    oneLine: "관찰력, 조형 감각, 사고력을 함께 보는 실기 유형입니다.",
    description:
      "기초소양 또는 기초조형은 학교에 따라 명칭과 방식이 다르게 쓰입니다. 관찰하고 그리기, 주제 해석, 조형 능력, 사고력 등을 종합적으로 평가하는 경우가 많습니다.",
    tip: "이 유형은 학교별 차이가 큰 편이라 목표 대학의 기출 문제와 모집요강을 확인하는 것이 중요합니다.",
    relatedTags: ["기초소양", "기초조형", "관찰", "사고력"],
    sourceUrls: ["https://artndesign.com/bbs/board.php?bo_table=b103&wr_id=185"],
    confidence: "보조 자료",
  },
  {
    id: "term-idea-expression",
    category: "실기 유형",
    title: "발상과 표현",
    oneLine: "주제에 대한 아이디어를 시각적으로 풀어내는 실기 유형입니다.",
    description:
      "발상과 표현은 주어진 주제나 상황을 해석하고, 그 아이디어를 화면 안에서 설득력 있게 표현하는 실기 유형입니다. 단순 묘사보다 주제 해석과 화면 구성력이 중요합니다.",
    relatedTags: ["발상과 표현", "아이디어", "주제 해석"],
    sourceUrls: [],
    confidence: "운영자 정리",
  },
  {
    id: "term-painting",
    category: "실기 유형",
    title: "회화",
    oneLine: "관찰과 표현을 바탕으로 평면 작업을 다루는 미술 분야입니다.",
    description:
      "회화 계열은 서양화, 동양화 등으로 나뉘며 대학과 전공에 따라 소묘, 수채화, 정물, 인물, 주제 표현 등 다양한 실기 방식이 활용될 수 있습니다.",
    relatedTags: ["회화", "서양화", "동양화", "소묘"],
    sourceUrls: ["https://art.snu.ac.kr/%EC%9E%85%ED%95%99%EC%95%88%EB%82%B4/%EC%9E%85%ED%95%99%EC%95%88%EB%82%B4/"],
    confidence: "공식 자료",
  },
  {
    id: "term-sculpture",
    category: "실기 유형",
    title: "조소",
    oneLine: "입체와 공간을 다루는 미술 분야입니다.",
    description:
      "조소는 조각과 소조를 아우르는 말로, 재료를 깎거나 빚고 덧붙여 입체 형상을 만드는 분야입니다. 입시에서는 두상, 인체, 주제 조형 등 학교별로 다른 방식의 실기를 볼 수 있습니다.",
    relatedTags: ["조소", "입체", "공간", "조각"],
    sourceUrls: ["https://encykorea.aks.ac.kr/Article/E0071639", "https://art.snu.ac.kr/category/sculpture/"],
    confidence: "공식 자료",
  },
  {
    id: "term-cartoon-animation",
    category: "실기 유형",
    title: "만화·애니",
    oneLine: "이야기, 캐릭터, 장면 구성 능력을 보는 계열입니다.",
    description:
      "만화·애니 계열은 학교에 따라 상황표현, 칸만화, 이미지보드, 캐릭터, 스토리 구성 등 다양한 방식으로 실기를 진행할 수 있습니다.",
    relatedTags: ["만화", "애니", "상황표현", "캐릭터"],
    sourceUrls: [],
    confidence: "운영자 정리",
  },
  {
    id: "term-portfolio",
    category: "입시 기본",
    title: "포트폴리오",
    oneLine: "지원자의 작품과 과정을 정리한 자료입니다.",
    description:
      "포트폴리오는 지원자의 작업 방향, 관찰력, 표현력, 사고 과정을 보여 주는 자료입니다. 모든 미대 전형에서 요구되는 것은 아니며, 유학미술이나 일부 전형에서 중요하게 활용됩니다.",
    relatedTags: ["포트폴리오", "작품", "과정"],
    sourceUrls: [],
    confidence: "운영자 정리",
  },
  {
    id: "term-review-reading",
    category: "리뷰 읽기",
    title: "학원 리뷰 읽는 법",
    oneLine: "좋다/나쁘다보다 나에게 맞는지를 중심으로 읽어야 합니다.",
    description:
      "같은 학원도 학생에 따라 다르게 느낄 수 있습니다. 과제량, 피드백 방식, 경쟁 분위기, 통학 거리, 준비 전형이 나에게 맞는지 중심으로 비교하는 것이 좋습니다.",
    relatedTags: ["리뷰", "수업 분위기", "추천 대상"],
    sourceUrls: [],
    confidence: "운영자 정리",
  },
];

export const practicalTypeGuides: PracticalTypeGuide[] = [
  {
    id: "practical-basic-design",
    title: "기초디자인",
    shortLabel: "기초디자인",
    summary:
      "주어진 소재를 관찰하고, 소재의 관계와 특징을 화면 안에 조형적으로 구성해 표현하는 디자인 실기 유형입니다.",
    whatItChecks: ["관찰력", "화면 구성력", "질감 표현", "색감", "완성도"],
    goodFor: ["디자인 계열을 준비하는 학생", "사물 관찰과 화면 구성을 연습하고 싶은 학생"],
    preparationTips: [
      "소재의 형태와 구조를 정확히 관찰하기",
      "화면 안에서 주제와 소재의 관계를 설득력 있게 구성하기",
      "학교별 기출 문제와 출제 경향을 따로 확인하기",
    ],
    academySearchType: "기초디자인",
    sourceUrls: ["https://artndesign.com/bbs/board.php?bo_table=acanews&wr_id=2058"],
    confidence: "보조 자료",
  },
  {
    id: "practical-basic-visual",
    title: "기초소양 / 기초조형",
    shortLabel: "기초소양",
    summary:
      "관찰력, 사고력, 조형 감각을 함께 보는 실기 유형입니다. 학교별 명칭과 방식이 다르기 때문에 목표 대학 기준으로 확인해야 합니다.",
    whatItChecks: ["관찰력", "조형 능력", "사고력", "주제 해석", "표현력"],
    goodFor: ["국민대 등 기초조형 계열 실기를 준비하는 학생", "단순 묘사보다 사고력 평가가 필요한 학생"],
    preparationTips: [
      "목표 대학의 최근 기출 문제를 먼저 확인하기",
      "관찰하고 그리는 연습과 주제 해석 연습을 함께 하기",
      "재료와 고사 시간은 모집요강에서 확인하기",
    ],
    academySearchType: "기초소양",
    sourceUrls: ["https://artndesign.com/bbs/board.php?bo_table=b103&wr_id=185"],
    confidence: "보조 자료",
  },
  {
    id: "practical-idea-expression",
    title: "발상과 표현",
    shortLabel: "발상과 표현",
    summary:
      "주어진 주제나 상황을 해석하고, 아이디어를 화면으로 설득력 있게 표현하는 실기 유형입니다.",
    whatItChecks: ["아이디어", "주제 해석", "화면 구성", "표현력", "완성도"],
    goodFor: ["상상력과 이야기 구성을 활용하고 싶은 학생", "주제 해석형 실기를 준비하는 학생"],
    preparationTips: [
      "주제를 단순히 설명하지 말고 장면으로 바꾸는 연습하기",
      "아이디어 스케치를 빠르게 여러 개 뽑아보기",
      "표현보다 발상 과정이 먼저 무너지지 않도록 연습하기",
    ],
    academySearchType: "발상과 표현",
    sourceUrls: [],
    confidence: "운영자 정리",
  },
  {
    id: "practical-painting",
    title: "회화",
    shortLabel: "회화",
    summary:
      "평면 위에서 관찰, 색, 형태, 표현력을 다루는 분야입니다. 서양화, 동양화 등 전공에 따라 실기 방식이 달라질 수 있습니다.",
    whatItChecks: ["관찰력", "형태감", "색감", "표현력", "재료 이해"],
    goodFor: ["회화 계열 전공을 준비하는 학생", "소묘와 채색 중심의 실기를 준비하는 학생"],
    preparationTips: [
      "목표 학과가 요구하는 실기 과목을 정확히 확인하기",
      "소묘, 색채, 재료 사용 연습을 꾸준히 하기",
      "전공별 기출 문제와 평가 기준을 따로 보기",
    ],
    academySearchType: "회화",
    sourceUrls: ["https://art.snu.ac.kr/%EC%9E%85%ED%95%99%EC%95%88%EB%82%B4/%EC%9E%85%ED%95%99%EC%95%88%EB%82%B4/"],
    confidence: "공식 자료",
  },
  {
    id: "practical-sculpture",
    title: "조소",
    shortLabel: "조소",
    summary:
      "입체와 공간을 이해하고 재료를 통해 형상을 만드는 분야입니다. 학교별로 두상, 인체, 주제 조형 등 방식이 다를 수 있습니다.",
    whatItChecks: ["입체감", "공간감", "형태 이해", "재료 활용", "구조 감각"],
    goodFor: ["조소 전공을 준비하는 학생", "입체 작업과 재료 다루기에 관심 있는 학생"],
    preparationTips: [
      "입체 구조를 여러 방향에서 보는 연습하기",
      "흙, 유토 등 재료의 성질을 이해하기",
      "목표 대학의 실기 방식과 준비물을 확인하기",
    ],
    academySearchType: "조소",
    sourceUrls: ["https://encykorea.aks.ac.kr/Article/E0071639", "https://art.snu.ac.kr/category/sculpture/"],
    confidence: "공식 자료",
  },
  {
    id: "practical-cartoon-animation",
    title: "만화·애니",
    shortLabel: "만화·애니",
    summary:
      "캐릭터, 장면, 이야기 구성 능력을 보는 계열입니다. 학교별로 상황표현, 칸만화, 이미지보드 등 방식이 달라질 수 있습니다.",
    whatItChecks: ["스토리 구성", "캐릭터 표현", "장면 연출", "상황 해석", "완성도"],
    goodFor: ["만화, 애니메이션, 웹툰 계열을 준비하는 학생", "이야기와 캐릭터 표현에 관심 있는 학생"],
    preparationTips: [
      "짧은 시간 안에 장면을 설계하는 연습하기",
      "캐릭터의 표정과 동작을 다양하게 그려보기",
      "지원 학교의 실기 유형을 정확히 확인하기",
    ],
    academySearchType: "만화·애니",
    sourceUrls: [],
    confidence: "운영자 정리",
  },
];

export const firstAdmissionChecklist: GuideChecklistItem[] = [
  {
    id: "check-01",
    title: "관심 전공을 정했나요?",
    description: "디자인, 회화, 조소, 만화·애니 중 내가 어떤 방향에 가까운지 먼저 생각해 보세요.",
  },
  {
    id: "check-02",
    title: "목표 대학의 실기 유형을 확인했나요?",
    description: "같은 디자인 계열이라도 학교마다 실기 방식과 반영 비율이 다를 수 있습니다.",
  },
  {
    id: "check-03",
    title: "내 지역에서 준비 가능한 학원을 찾아봤나요?",
    description: "가까운 학원부터 확인하고, 필요한 경우 주변 지역이나 서울권 학원까지 비교해 보세요.",
  },
  {
    id: "check-04",
    title: "수업 분위기와 피드백 방식을 비교했나요?",
    description: "입시 초보라면 실력보다도 나에게 맞는 피드백 방식과 관리 방식이 중요할 수 있습니다.",
  },
  {
    id: "check-05",
    title: "후기를 볼 때 나와 비슷한 학생의 경험을 찾았나요?",
    description: "고3, 재수생, 지방 학생, 기초가 부족한 학생 등 나와 비슷한 상황의 리뷰가 도움이 됩니다.",
  },
];

export const academyChoiceChecklist: GuideChecklistItem[] = [
  {
    id: "academy-check-01",
    title: "준비 가능한 실기 유형",
    description: "내가 준비해야 하는 전형을 실제로 수업하는 학원인지 확인하세요.",
  },
  {
    id: "academy-check-02",
    title: "강점 전형과 목표 학교",
    description: "학원이 자주 다루는 실기 유형과 내가 목표하는 학교의 방향이 맞는지 확인하세요.",
  },
  {
    id: "academy-check-03",
    title: "수업 분위기",
    description: "경쟁적인 분위기인지, 차분한 분위기인지, 자율성이 큰 편인지 비교해 보세요.",
  },
  {
    id: "academy-check-04",
    title: "피드백 방식",
    description: "피드백이 자주 있는지, 개인별로 자세한지, 큰 방향 중심인지 확인하면 좋습니다.",
  },
  {
    id: "academy-check-05",
    title: "과제량과 관리 방식",
    description: "과제량이 많은 학원이 무조건 좋은 것은 아닙니다. 내 생활 패턴과 감당 가능한 정도인지가 중요합니다.",
  },
  {
    id: "academy-check-06",
    title: "통학 거리",
    description: "입시는 장기전이므로 이동 시간이 너무 길면 체력 관리가 어려워질 수 있습니다.",
  },
];

export const guideFaqs: GuideFAQ[] = [
  {
    id: "faq-01",
    question: "미대 입시는 언제부터 시작해야 하나요?",
    answer:
      "정해진 답은 없지만, 목표 전공과 대학에 따라 준비 기간이 달라집니다. 처음이라면 먼저 실기 유형과 전형 구조를 파악하고, 내 지역에서 준비 가능한 학원을 찾아보는 것부터 시작해 보세요.",
  },
  {
    id: "faq-02",
    question: "그림을 처음 시작해도 미대 입시가 가능한가요?",
    answer:
      "가능합니다. 다만 준비해야 하는 전형과 목표 대학에 따라 필요한 시간이 달라질 수 있습니다. 기초가 부족한 학생에게 맞는 수업 방식인지 학원 리뷰에서 확인해 보세요.",
  },
  {
    id: "faq-03",
    question: "지방에 살아도 미대 입시를 준비할 수 있나요?",
    answer:
      "준비할 수 있습니다. 다만 지역에 따라 정보 접근성이 다를 수 있으므로, 지역 학원 정보와 실제 학생 리뷰를 함께 확인하는 것이 도움이 됩니다.",
  },
  {
    id: "faq-04",
    question: "학원을 꼭 서울로 다녀야 하나요?",
    answer:
      "반드시 그렇지는 않습니다. 내가 준비하는 전형을 잘 다루는지, 피드백 방식이 맞는지, 통학이 가능한지 등을 기준으로 비교하는 것이 더 중요합니다.",
  },
  {
    id: "faq-05",
    question: "기초디자인과 기초소양은 어떻게 다른가요?",
    answer:
      "기초디자인은 주어진 소재를 관찰하고 화면 안에 구성해 표현하는 디자인 실기 유형으로 많이 쓰입니다. 기초소양은 학교마다 방식이 다르지만 관찰력, 사고력, 조형 감각을 함께 보는 경우가 많습니다.",
  },
  {
    id: "faq-06",
    question: "학원 리뷰는 어떻게 봐야 하나요?",
    answer:
      "리뷰 하나만 보고 판단하기보다 여러 리뷰에서 반복되는 내용을 보세요. 과제량, 피드백, 분위기, 추천 대상이 나에게 맞는지 확인하는 것이 좋습니다.",
  },
];

export const guideNotice = {
  title: "입시 정보 확인 안내",
  description:
    "이 페이지는 미대 입시를 처음 시작하는 학생을 위한 기본 안내입니다. 대학별 모집 인원, 실기 방식, 반영 비율, 일정은 매년 달라질 수 있으므로 지원 전 반드시 각 대학 입학처의 최신 모집요강을 확인해야 합니다.",
};

export const guideCta = {
  title: "용어를 이해했다면, 이제 나에게 맞는 학원을 찾아보세요.",
  description:
    "지역, 전형, 학원명으로 검색하고 실제 학생 리뷰를 비교할 수 있습니다.",
  buttons: [
    { label: "학원 찾기", href: "/academies", variant: "primary" },
    { label: "리뷰 등록하기", href: "/review/new", variant: "secondary" },
  ],
};
