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
  status: "pending" | "public" | "rejected" | "hidden";
  source: "google-form";
  consent: { publish: boolean; moderation: boolean };
  moderationFlags: string[];
};

export const importedReviewsFromGoogleForm: ImportedFormReview[] = [
  {
    "id": "google-form-review-002",
    "sourceRow": 2,
    "academyId": null,
    "academyNameRaw": "선릉네오캣",
    "academyName": "선릉네오캣",
    "writerStatus": "대학생",
    "attendedYear": "2023~2025",
    "attendedPeriod": "3년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "서울대",
      "고려대",
      "국민대"
    ],
    "schoolTextRaw": "성적이 높은학교!(서울대, 고대, 국민대 등)",
    "rating": 4,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "학원도 좋고 선생님들이나 보조강사들의 역량도 좋지만 커리큘럼이 너무 틀에 박힌 것 같아요",
    "detail": "학원도 좋고 선생님들이나 보조강사들의 역량도 좋지만 커리큘럼이 너무 틀에 박힌 것 같아요",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-003",
    "sourceRow": 3,
    "academyId": null,
    "academyNameRaw": "한티 그린섬",
    "academyName": "한티 그린섬",
    "writerStatus": "대학생",
    "attendedYear": "2024",
    "attendedPeriod": "1년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "건국대"
    ],
    "schoolTextRaw": "건대(?)",
    "rating": 4,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "말투가 직설적인 편임"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "학원 내부도 깔끔하고 관리도 잘 됩니다! 선생님들 친절하시고 무엇보다 담당하시는 선생님이 쓰신 학생들에게 가르칠 때의 매뉴얼이 존재해…",
    "detail": "학원 내부도 깔끔하고 관리도 잘 됩니다! 선생님들 친절하시고 무엇보다 담당하시는 선생님이 쓰신 학생들에게 가르칠 때의 매뉴얼이 존재해서 선생님들 가르침에 일관성이 있습니다. 다만 입결이 엄청 좋은지는 잘 모르겠고, 그림 실력 향상에 있어서는 학생 개인의 의지와 노력이 더 중요한 학원입니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-004",
    "sourceRow": 4,
    "academyId": null,
    "academyNameRaw": "선릉 메타코드 학원",
    "academyName": "선릉 메타코드 학원",
    "writerStatus": "대학생",
    "attendedYear": "2025",
    "attendedPeriod": "6개월",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대"
    ],
    "schoolTextRaw": "국민대 중심",
    "rating": 4,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "3",
    "assignmentAmountScore": 3,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음",
      "체험 수업 후 결정 추천"
    ],
    "teachingStyleTags": [],
    "summary": "저는 2년 정도 다른 미술학원에서 실력을 쌓다가 고3 중반에 들어가서 큰 어려움은 없었지만, 그래도 학원에 적응하기에 난이도가 좀 어…",
    "detail": "저는 2년 정도 다른 미술학원에서 실력을 쌓다가 고3 중반에 들어가서 큰 어려움은 없었지만, 그래도 학원에 적응하기에 난이도가 좀 어려웠던 것 같습니다. 아예 입시를 처음부터 시작하는 사람은 적응하기 어려운 분위기였습니다. 선생님께서 방치형으로 학생들을 가르치시고, 직접 열정을 가지고 열심히 질문하지 않는 이상 특별히 따로 집중적으로 봐주시지는 않았습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "관리 편차 언급"
    ]
  },
  {
    "id": "google-form-review-005",
    "sourceRow": 5,
    "academyId": null,
    "academyNameRaw": "선릉 오원한국화",
    "academyName": "선릉 오원한국화",
    "writerStatus": "대학생",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "한국화"
    ],
    "reviewSchoolTags": [],
    "schoolTextRaw": "서울권 중하위대학교",
    "rating": 2,
    "atmosphere": "5",
    "atmosphereScore": 5,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "선생님마다 편차가 심함"
    ],
    "goodTags": [
      "학원 분위기가 좋음"
    ],
    "concernTags": [
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    "cautionTags": [
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "선생님 감정기복심함",
    "detail": "선생님 감정기복심함",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "지도 방식 민감 표현"
    ]
  },
  {
    "id": "google-form-review-006",
    "sourceRow": 6,
    "academyId": null,
    "academyNameRaw": "선릉 클라우드",
    "academyName": "선릉 클라우드",
    "writerStatus": "대학생",
    "attendedYear": "2024",
    "attendedPeriod": "고3 3월부터 2개월 정도",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대"
    ],
    "schoolTextRaw": "국민대 중심",
    "rating": 2,
    "atmosphere": "4",
    "atmosphereScore": 4,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "상급자에게 적합해요",
    "feedbackTags": [
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "특별히 없음"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "저는 그림 못 그리고 소심한 현역이었는데 삼수, 사수생이 좀 점령한 느낌이었습니다. 질문을 못 하고 소심하면 비추천합니다. 학생이 많…",
    "detail": "저는 그림 못 그리고 소심한 현역이었는데 삼수, 사수생이 좀 점령한 느낌이었습니다. 질문을 못 하고 소심하면 비추천합니다. 학생이 많아서 봐주기 힘들어요.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "부정 경험"
    ]
  },
  {
    "id": "google-form-review-007",
    "sourceRow": 7,
    "academyId": null,
    "academyNameRaw": "선릉 스터디앤아트",
    "academyName": "선릉 스터디앤아트",
    "writerStatus": "대학생",
    "attendedYear": "",
    "attendedPeriod": "고3 5월~정특",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대",
      "홍익대"
    ],
    "schoolTextRaw": "국민대/홍대",
    "rating": 5,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    "goodTags": [
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
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함"
    ],
    "teachingStyleTags": [],
    "summary": "정시특강 때 거의 멘탈이 나간 상태로 수업을 들었었는데 너무 좋았어요. 선생님들도 다 너무 좋고 기본기를 탄탄하게 잡아주시려고 노력해…",
    "detail": "정시특강 때 거의 멘탈이 나간 상태로 수업을 들었었는데 너무 좋았어요. 선생님들도 다 너무 좋고 기본기를 탄탄하게 잡아주시려고 노력해주시는 게 보였어요.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-008",
    "sourceRow": 8,
    "academyId": null,
    "academyNameRaw": "부산 아카이브 미술학원",
    "academyName": "부산 아카이브 미술학원",
    "writerStatus": "N수생",
    "attendedYear": "2026",
    "attendedPeriod": "4~5개월",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인"
    ],
    "reviewSchoolTags": [],
    "schoolTextRaw": "모든 기초디자인 학교",
    "rating": 5,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "4",
    "assignmentAmountScore": 4,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "과제량이 부담스러움",
      "초보자가 따라가기 어려움"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "과제 시간을 확보해야 함"
    ],
    "teachingStyleTags": [],
    "summary": "다른 미술학원 원장선생님보다 훨씬 더 젊으시고 직접 색과 구도 연구를 하시기 때문에 입시미술 트렌드 캐치가 항상 좋으신 편입니다. 또…",
    "detail": "다른 미술학원 원장선생님보다 훨씬 더 젊으시고 직접 색과 구도 연구를 하시기 때문에 입시미술 트렌드 캐치가 항상 좋으신 편입니다. 또한 아카이브 미술학원 안 모든 보조 선생님들이 매우 많은 편에 속하며 대부분 인서울이나 수시 실기 강점인 인서울, 건국대 등에 다니시고 있거나 졸업, 휴학생 선생님들이십니다. 다른 미술학원 원장들과 결합하여 교수평가로 기간마다 자기 실력을 알 수 있는 기회가 제공됩니다. 학생들에게 맞는 공부법을 알려주시고 학생 개개인에 맞게 커리큘럼을 짜주시는 게 가장 큰 장점입니다. 직접 실기대회 그림장 공개가 되는 대학들은 분석하고 연구하시며 합격작과 불합격작의 차이점까지 알려주십니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-009",
    "sourceRow": 9,
    "academyId": null,
    "academyNameRaw": "부산 동래 비투비 미술학원 - 파사드반(기초소양반)",
    "academyName": "부산 동래 비투비 미술학원 - 파사드반(기초소양반)",
    "writerStatus": "N수생",
    "attendedYear": "2023, 2024, 2025",
    "attendedPeriod": "",
    "admissionResult": "불합격",
    "preparedTypes": [],
    "strongTypes": [
      "기초소양"
    ],
    "reviewSchoolTags": [
      "국민대",
      "고려대",
      "이화여대"
    ],
    "schoolTextRaw": "국민대",
    "rating": 5,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
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
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "크게 국민대, 고려대, 이화여대로 테이블이 나뉘며 공통 진도를 나갈 때도 있고 각 대학별 진도를 나갈 때도 있습니다. 멘탈이 흔들리는…",
    "detail": "크게 국민대, 고려대, 이화여대로 테이블이 나뉘며 공통 진도를 나갈 때도 있고 각 대학별 진도를 나갈 때도 있습니다. 멘탈이 흔들리는 시점이면 원장님께서 여러 얘기를 해주시며 마음을 다잡을 수 있게 해주십니다. 직설적으로 답을 제시하기보다는 스스로 답을 찾아갈 수 있게 해주시는 편이셨고, 중간중간 힌트처럼 던지는 말들이 도움이 되었습니다. 강평 때도 한 명 한 명 피드백해주실 만큼 열정적이고 친절합니다. 지방 학원치고 기초소양을 준비하는 학생들이 꽤 많아 실력을 비교하기 좋았고, 서울 학원과 교류하며 특강이 오는 점도 도움이 되었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-010",
    "sourceRow": 10,
    "academyId": null,
    "academyNameRaw": "홍대 한국화 청 미술학원",
    "academyName": "홍대 한국화 청 미술학원",
    "writerStatus": "고3",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "한국화"
    ],
    "reviewSchoolTags": [
      "서울대",
      "이화여대",
      "성균관대"
    ],
    "schoolTextRaw": "서울대 이대 성대 (정시권 최상위 학교)",
    "rating": 2,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "빠르게 핵심만 짚어줌",
      "선생님마다 편차가 심함"
    ],
    "goodTags": [
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "상담과 실제 수업에서 차이가 느껴짐",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게…",
    "detail": "현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게 나타납니다. 상담 중 내용에서는 미래의 작가로서의 자질을 길러준다고 했는데 실제 수업 내용에서는 획일화된 방식에 이질감이 들었습니다. 그렇지만 대형학원답게 입시 정보가 압도적으로 많은 편이고, 통계치가 학원의 방향성을 증명해주는 것 같습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "입결 관련 표현 검토 필요"
    ]
  },
  {
    "id": "google-form-review-011",
    "sourceRow": 11,
    "academyId": null,
    "academyNameRaw": "선릉 안테나",
    "academyName": "선릉 안테나",
    "writerStatus": "고3",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "성균관대",
      "이화여대"
    ],
    "schoolTextRaw": "성균관대 이대",
    "rating": 3,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "상급자에게 적합해요",
    "feedbackTags": [
      "빠르게 핵심만 짚어줌",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "특별히 없음"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "수업 속도가 빠르게 느껴졌음",
      "초보자가 따라가기 어려움",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "고3이 느끼기엔 성이대반에 소속될 때 커리큘럼을 자세하게 알지 못해 어려움을 느낄 수 있습니다. 각자도생하는 분위기이고, 재수·N수생…",
    "detail": "고3이 느끼기엔 성이대반에 소속될 때 커리큘럼을 자세하게 알지 못해 어려움을 느낄 수 있습니다. 각자도생하는 분위기이고, 재수·N수생이 많은 반이라 속도가 빠른 현역들과 진도 차이가 나 어렵기도 합니다. 조교 선생님들이 잘 봐주시지만 질문을 잘해야 합니다. 질문을 잘 못 하는 소심한 성격은 이 학원과 맞지 않을 수 있습니다. 초보자가 따라가기에는 한계가 있고, 스스로 생각해서 아이디어를 내야 하는 경우가 많습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "초보자 적합성 낮음"
    ]
  },
  {
    "id": "google-form-review-012",
    "sourceRow": 12,
    "academyId": null,
    "academyNameRaw": "선릉 천년의미소 기디",
    "academyName": "선릉 천년의미소 기디",
    "writerStatus": "N수생",
    "attendedYear": "2026",
    "attendedPeriod": "약 3개월",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인"
    ],
    "reviewSchoolTags": [
      "경희대",
      "한양대",
      "서경대",
      "건국대"
    ],
    "schoolTextRaw": "기디. 경희 한양 서경 건국 등",
    "rating": 5,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "체험 수업 후 결정 추천"
    ],
    "teachingStyleTags": [],
    "summary": "진짜 정말 괜찮습니다. 그림도 좋고 눈이 떠진 느낌이었습니다. 그림이 4D고 구도틀이 있어서 따라오기 쉬워요. 초보자도 잘 따라올 수…",
    "detail": "진짜 정말 괜찮습니다. 그림도 좋고 눈이 떠진 느낌이었습니다. 그림이 4D고 구도틀이 있어서 따라오기 쉬워요. 초보자도 잘 따라올 수 있고 선생님들이 정말 친절합니다. 학생 하나하나 잘 신경써주셔서 정말 마음에 들었습니다. 상담받아보고 체험 수업해보는 걸 추천합니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-013",
    "sourceRow": 13,
    "academyId": null,
    "academyNameRaw": "선릉 네오켓(실기)//선릉 스카이미술학원(내신)->설문은 네오켓 기준입니다",
    "academyName": "선릉 네오켓(실기)//선릉 스카이미술학원(내신)->설문은 네오켓 기준입니다",
    "writerStatus": "대학생",
    "attendedYear": "2024",
    "attendedPeriod": "1~2년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "서울대",
      "고려대"
    ],
    "schoolTextRaw": "서울대 고대 중심",
    "rating": 1,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodTags": [
      "학원 분위기가 좋음",
      "특별히 없음"
    ],
    "concernTags": [
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요",
      "비용/수업 방식으로 상담 때 확인 추천"
    ],
    "teachingStyleTags": [],
    "summary": "겉으로 보이는 것과 실제가 다르게 느껴졌습니다. 높은 대학교에 붙일 수 있을 것 같은 인상을 주지만 실제로는 다르게 느꼈고, 제 수시…",
    "detail": "겉으로 보이는 것과 실제가 다르게 느껴졌습니다. 높은 대학교에 붙일 수 있을 것 같은 인상을 주지만 실제로는 다르게 느꼈고, 제 수시 합격도 실기로 붙은 것처럼 정보가 올라간 것처럼 느껴졌습니다. 내신도 병행하기 어려웠습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "입결·합격사례 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-review-014",
    "sourceRow": 14,
    "academyId": null,
    "academyNameRaw": "울산 비투비",
    "academyName": "울산 비투비",
    "writerStatus": "대학생",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "불합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [],
    "schoolTextRaw": "잘 모르겠습니다",
    "rating": 2,
    "atmosphere": "4",
    "atmosphereScore": 4,
    "assignmentAmount": "4",
    "assignmentAmountScore": 4,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "특별히 없음"
    ],
    "concernTags": [
      "과제량이 부담스러움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "선생님께서 감정적으로 느껴졌고, 공개적으로 학생들에게 모욕을 주거나 비난하는 경우도 있다고 느꼈습니다. 상담도 자주 받고 받을 때마다…",
    "detail": "선생님께서 감정적으로 느껴졌고, 공개적으로 학생들에게 모욕을 주거나 비난하는 경우도 있다고 느꼈습니다. 상담도 자주 받고 받을 때마다 30분 이상씩 합니다. 다른 학원들을 부정적으로 말하는 경우도 있었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "민감한 지도 방식",
      "비방 표현 검토 필요"
    ]
  },
  {
    "id": "google-form-review-015",
    "sourceRow": 15,
    "academyId": null,
    "academyNameRaw": "씨앤씨 미술학원 분당야탑캠퍼스",
    "academyName": "씨앤씨 미술학원 분당야탑캠퍼스",
    "writerStatus": "대학생",
    "attendedYear": "2023",
    "attendedPeriod": "학생으로 1년, 강사로 2년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인",
      "기초소양"
    ],
    "reviewSchoolTags": [
      "한양대",
      "경희대"
    ],
    "schoolTextRaw": "기초디자인 기반 일반대, 한양대, 경희대 등",
    "rating": 4,
    "atmosphere": "4",
    "atmosphereScore": 4,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "학원 분위기가 좋음",
      "자료/시범이 도움됨"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움"
    ],
    "cautionTags": [
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "특정 강사 한 분이 유명하셨고, 그것 때문에 멀리서 찾아오는 경우도 있을 만큼 유명했습니다. 실력은 확실히 있으셔서 좋았고, 기초디자…",
    "detail": "특정 강사 한 분이 유명하셨고, 그것 때문에 멀리서 찾아오는 경우도 있을 만큼 유명했습니다. 실력은 확실히 있으셔서 좋았고, 기초디자인 기반의 학원이지만 극소수의 기초소양 학생들은 거의 전담 마크해주는 느낌을 받았습니다. 학생 수가 많아서 서로 참고하고 경쟁하며 공부할 수 있고, 자료도 많고 채색법이나 구도 연구를 많이 해서 선도적인 느낌이 있었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-016",
    "sourceRow": 16,
    "academyId": null,
    "academyNameRaw": "선릉 네오캣",
    "academyName": "선릉 네오캣",
    "writerStatus": "대학생",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "서울대",
      "국민대"
    ],
    "schoolTextRaw": "서울대 중심",
    "rating": 2,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodTags": [
      "입시 정보가 많음",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "상담과 실제 수업에서 차이가 느껴짐",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "대형학원의 단점을 가지고 있다고 느꼈습니다. 학생별 관리가 잘 이뤄지지 않았고, 대형이라 시험 위주로 돌아가기 때문에 실력이 있는 학…",
    "detail": "대형학원의 단점을 가지고 있다고 느꼈습니다. 학생별 관리가 잘 이뤄지지 않았고, 대형이라 시험 위주로 돌아가기 때문에 실력이 있는 학생들이 가야 효과를 볼 수 있다고 느꼈습니다. 1등급임에도 국민대학교 지원에 대해 학원 측에서 부정적으로 확신했다고 느꼈고, 선생님들과 보조강사들의 언행 관리가 아쉬웠습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "민감한 지도 방식",
      "입시 상담 관련 검토 필요"
    ]
  },
  {
    "id": "google-form-review-017",
    "sourceRow": 17,
    "academyId": null,
    "academyNameRaw": "대전 클라우드 미술학원",
    "academyName": "대전 클라우드 미술학원",
    "writerStatus": "고3",
    "attendedYear": "",
    "attendedPeriod": "약 5년",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인",
      "기초소양"
    ],
    "reviewSchoolTags": [],
    "schoolTextRaw": "중위권 기디 + 여대..? (기디 학교는 잘 보내는 거 같아요)",
    "rating": 5,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [],
    "teachingStyleTags": [],
    "summary": "아주 어릴 때부터 현재 현역 때까지 다니는 중인 학원인데 매우 만족하며 다니는 중입니다. 인원이 대전에 있는 학원 치고는 많지만 전임…",
    "detail": "아주 어릴 때부터 현재 현역 때까지 다니는 중인 학원인데 매우 만족하며 다니는 중입니다. 인원이 대전에 있는 학원 치고는 많지만 전임 선생님과의 피드백이 문제 없이 잘 이어집니다. 부족한 부분을 꼼꼼히 지적해주셔서 실력이 늘고 있다는 게 체감됩니다. 기디뿐만 아니라 기소반도 운영하고 있고, 강남 클라우드에서 전임 선생님이 내려와 수업하는 점도 좋았습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-018",
    "sourceRow": 18,
    "academyId": null,
    "academyNameRaw": "대구 수성구 범어피플 학원 -> 현재는 에이아이원으로 네임변경",
    "academyName": "대구 수성구 범어피플 학원 -> 현재는 에이아이원으로 네임변경",
    "writerStatus": "N수생",
    "attendedYear": "2023년 6월~2025년 10월 15일",
    "attendedPeriod": "2~3년 가까이",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인",
      "기초소양",
      "발상과 표현"
    ],
    "reviewSchoolTags": [
      "서울대",
      "국민대",
      "서울과기대",
      "홍익대",
      "고려대",
      "서울시립대"
    ],
    "schoolTextRaw": "기초디자인에도 강점이 있으나, 서울대,국민대,과기대 등 기초소양, 발상과 표현에 특히 최적화",
    "rating": 5,
    "atmosphere": "4",
    "atmosphereScore": 4,
    "assignmentAmount": "3",
    "assignmentAmountScore": 3,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "발상과 표현처럼 응용력이 필요한 수업에서 문제에 접근하는 방식과 방향을 섬세하게 잡아주십니다. 아이디어를 낼 수 있도록 다양한 예시…",
    "detail": "발상과 표현처럼 응용력이 필요한 수업에서 문제에 접근하는 방식과 방향을 섬세하게 잡아주십니다. 아이디어를 낼 수 있도록 다양한 예시 자료를 제공해주시고, 시범을 통해 문제에서 대응해야 하는 부분과 아쉬운 지점을 명확히 체크해주셔서 도움이 많이 되었습니다. 홍익대학교 출신 원장 선생님이 1대1로 수업해주셔서 일관된 피드백과 소홀함 없는 환경이라고 느꼈습니다. 서울대, 홍익대, 국민대, 고려대, 과기대, 시립대 등 상위권 대학을 많이 보낸 경력이 있다고 느껴 믿고 맡길 수 있었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-019",
    "sourceRow": 19,
    "academyId": null,
    "academyNameRaw": "일산 창조의 아침",
    "academyName": "일산 창조의 아침",
    "writerStatus": "N수생",
    "attendedYear": "2025학년도",
    "attendedPeriod": "3년",
    "admissionResult": "불합격",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인"
    ],
    "reviewSchoolTags": [
      "중앙대",
      "동덕여대"
    ],
    "schoolTextRaw": "중앙대, 동덕여대, 기타 지방대 등 일반기초디자인",
    "rating": 3,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodTags": [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "개별 관리가 잘됨"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "입시반 한정 담당 선생님이 개개인의 특성을 잘 알고 계십니다. 설명도 초보자 맞춤으로 잘하시긴 하지만 입시반 커리큘럼 완성도는 부족하…",
    "detail": "입시반 한정 담당 선생님이 개개인의 특성을 잘 알고 계십니다. 설명도 초보자 맞춤으로 잘하시긴 하지만 입시반 커리큘럼 완성도는 부족하게 느꼈고, 구도에 대한 이해가 조금 떨어진다고 느꼈습니다. 상위권 학교 준비는 어려워 보였습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-020",
    "sourceRow": 20,
    "academyId": null,
    "academyNameRaw": "홍대 유니온",
    "academyName": "홍대 유니온",
    "writerStatus": "N수생",
    "attendedYear": "2026학년도",
    "attendedPeriod": "3개월",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [
      "기초디자인"
    ],
    "reviewSchoolTags": [
      "국민대",
      "서울과기대"
    ],
    "schoolTextRaw": "일반 기초디자인",
    "rating": 4,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "3",
    "assignmentAmountScore": 3,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "칭찬보다 지적이 많은 편임"
    ],
    "goodTags": [
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "체험 수업 후 결정 추천"
    ],
    "teachingStyleTags": [],
    "summary": "선생님이랑 친해지셔야 합니다. 학생들이 많아서 한 시간 강평 동안 피드백 한 줄 받고 끝날 수 있습니다. 다만 일반 기초디자인은 시간…",
    "detail": "선생님이랑 친해지셔야 합니다. 학생들이 많아서 한 시간 강평 동안 피드백 한 줄 받고 끝날 수 있습니다. 다만 일반 기초디자인은 시간 내에 잘 그릴 수 있게 됩니다. 체계적인 시간 관리 및 자료 제공은 좋았습니다. 상위권반이었는데 소묘 기초는 아쉬웠고, 정시특강 전에는 학교별로 분반이 안 돼서 원하는 학교 중점으로 배우기 어려웠습니다. 국민대와 과기대로 보내려는 느낌이 강했습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "상위권반 운영 관련 검토"
    ]
  },
  {
    "id": "google-form-review-021",
    "sourceRow": 21,
    "academyId": null,
    "academyNameRaw": "홍대 네오캣",
    "academyName": "홍대 네오캣",
    "writerStatus": "N수생",
    "attendedYear": "2026학년도",
    "attendedPeriod": "6개월",
    "admissionResult": "불합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [],
    "schoolTextRaw": "상위권 학교 중심",
    "rating": 2,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "개별 관리가 잘됨"
    ],
    "concernTags": [
      "초보자가 따라가기 어려움"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "상위권 학교만 준비했던 기준으로는 초보자는 비추천합니다. 해당 학교로 입시했던 경험이 있는 N수생들에게는 추천합니다. 소수정예라 개개…",
    "detail": "상위권 학교만 준비했던 기준으로는 초보자는 비추천합니다. 해당 학교로 입시했던 경험이 있는 N수생들에게는 추천합니다. 소수정예라 개개인 관리가 되는 게 가장 큰 장점입니다. 다만 스스로 생각하게 시키는 것이 과할 때가 있어서 힘들었고, 한 문제로 오래 고민했는데 계속 빠꾸를 먹어서 멘탈이 나갔습니다. 선생님들 실력은 있고, 본인이 많이 질문해서 얻어가야 합니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "강한 피드백 경험"
    ]
  },
  {
    "id": "google-form-review-022",
    "sourceRow": 22,
    "academyId": null,
    "academyNameRaw": "광주 에이맥스",
    "academyName": "광주 에이맥스",
    "writerStatus": "대학생",
    "attendedYear": "2021년",
    "attendedPeriod": "2년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대"
    ],
    "schoolTextRaw": "국민대 중심 반은 국민대 위주로 수업",
    "rating": 2,
    "atmosphere": "1",
    "atmosphereScore": 1,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodTags": [
      "자료/시범이 도움됨",
      "특별히 없음"
    ],
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "선생님들이 감정적으로 느껴졌고, 원생 숫자가 적어서 국민대 반을 소수로 준비했습니다. 마지막에는 인원이 줄어들었다고 느꼈습니다. 서울…",
    "detail": "선생님들이 감정적으로 느껴졌고, 원생 숫자가 적어서 국민대 반을 소수로 준비했습니다. 마지막에는 인원이 줄어들었다고 느꼈습니다. 서울 학교를 목표로 한다면 특히 신중하게 알아보는 걸 추천합니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "민감한 지도 방식",
      "비방 표현 검토 필요"
    ]
  },
  {
    "id": "google-form-review-023",
    "sourceRow": 23,
    "academyId": null,
    "academyNameRaw": "부산 더끌림 -> 선릉 더끌림 미술학원",
    "academyName": "부산 더끌림 -> 선릉 더끌림 미술학원",
    "writerStatus": "대학생",
    "attendedYear": "2021-2023",
    "attendedPeriod": "3년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [
      "기초소양"
    ],
    "reviewSchoolTags": [],
    "schoolTextRaw": "기초소양 중심반이 탄탄했어요, 원생이 많지 않아서 보조쌤이 잘 봐주심",
    "rating": 4,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "5",
    "assignmentAmountScore": 5,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "선생님마다 편차가 심함"
    ],
    "goodTags": [
      "질문하기 편함",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "과제량이 부담스러움",
      "초보자가 따라가기 어려움",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionTags": [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "부산에 있는 학원에 다니다가 정시특강 시즌에는 본원으로 이동하여 실기를 진행했습니다. 분원과 본원 간의 수업 퀄리티 차이가 많이 나고…",
    "detail": "부산에 있는 학원에 다니다가 정시특강 시즌에는 본원으로 이동하여 실기를 진행했습니다. 분원과 본원 간의 수업 퀄리티 차이가 많이 나고, 정보력도 분원이 밀리는 게 느껴졌습니다. 본원의 피드백과 수업 스타일은 저와 잘 맞아서 3수 내내 학원을 옮기지 않고 다녔습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [
      "분원/본원 차이 언급"
    ]
  },
  {
    "id": "google-form-review-024",
    "sourceRow": 24,
    "academyId": null,
    "academyNameRaw": "대구아트포엠",
    "academyName": "대구아트포엠",
    "writerStatus": "대학생",
    "attendedYear": "2024",
    "attendedPeriod": "6개월",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대",
      "서울과기대"
    ],
    "schoolTextRaw": "국민대 과기대",
    "rating": 4,
    "atmosphere": "4",
    "atmosphereScore": 4,
    "assignmentAmount": "2",
    "assignmentAmountScore": 2,
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "소수정예 수업으로 이루어졌고 개인의 부족한 역량을 세심하게 피드백 받아 발전시킬 수 있었습니다. 스스로 생각하는 힘을 기를 수 있었으…",
    "detail": "소수정예 수업으로 이루어졌고 개인의 부족한 역량을 세심하게 피드백 받아 발전시킬 수 있었습니다. 스스로 생각하는 힘을 기를 수 있었으며 전체적인 학원 분위기도 자유로우면서 집중할 수 있었습니다. 다양한 자료와 문제를 통해 역량을 키울 수 있었던 학원이었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-025",
    "sourceRow": 25,
    "academyId": null,
    "academyNameRaw": "대구 수성 클라우드 학원",
    "academyName": "대구 수성 클라우드 학원",
    "writerStatus": "대학생",
    "attendedYear": "2022-2024",
    "attendedPeriod": "3년",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [
      "기초소양",
      "기초디자인"
    ],
    "reviewSchoolTags": [
      "국민대",
      "한예종"
    ],
    "schoolTextRaw": "국민대 한예종 / 기디 인원이 훨씬 많음",
    "rating": 5,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함"
    ],
    "goodTags": [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [],
    "teachingStyleTags": [],
    "summary": "2학년 때 아이디어를 열어줄 수 있는 방향으로 수업이 진행돼서 좋았습니다. 틀에 박힌 사고만 하던 상태라 기초소양을 처음 할 때 힘들…",
    "detail": "2학년 때 아이디어를 열어줄 수 있는 방향으로 수업이 진행돼서 좋았습니다. 틀에 박힌 사고만 하던 상태라 기초소양을 처음 할 때 힘들었는데, 어느 정도 실험적인 연습도 시켜서 전반적인 조형 감각을 키우는 데 도움이 됐습니다. 3학년으로 넘어와서는 서로의 그림을 많이 볼 수 있게 강평 이후에도 그림을 깔아두는 경우가 많아 서로의 그림을 보며 실력이 많이 늘었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-026",
    "sourceRow": 26,
    "academyId": null,
    "academyNameRaw": "선릉 클라우드 학원",
    "academyName": "선릉 클라우드 학원",
    "writerStatus": "대학생",
    "attendedYear": "2024-2025초",
    "attendedPeriod": "정특기간 2개월",
    "admissionResult": "합격",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대"
    ],
    "schoolTextRaw": "국민대",
    "rating": 5,
    "atmosphere": "2",
    "atmosphereScore": 2,
    "assignmentAmount": "1",
    "assignmentAmountScore": 1,
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackTags": [
      "빠르게 핵심만 짚어줌",
      "말투가 직설적인 편임"
    ],
    "goodTags": [
      "집중이 잘되는 분위기임",
      "실전 감각을 키우기 좋음"
    ],
    "concernTags": [
      "초보자가 따라가기 어려움"
    ],
    "cautionTags": [
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "정시특강 때만 다녔어서 그런지 비교적 템포가 빠른 수업이었습니다. 시험을 치는 게 대부분이었고, 실기력이 어느 정도 올라온 상태에서…",
    "detail": "정시특강 때만 다녔어서 그런지 비교적 템포가 빠른 수업이었습니다. 시험을 치는 게 대부분이었고, 실기력이 어느 정도 올라온 상태에서 실전 감각을 잡기에는 좋았습니다. 재수·N수생이 많아서 실전 감각을 얻기 좋고, 인원수가 많아 많은 사례를 볼 수 있다는 게 장점입니다. 선생님마다 스타일이 다르기 때문에 맞는 스타일의 선생님 수업을 듣는 게 중요할 것 같습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  },
  {
    "id": "google-form-review-027",
    "sourceRow": 27,
    "academyId": null,
    "academyNameRaw": "대구창조의아침",
    "academyName": "대구창조의아침",
    "writerStatus": "대학생",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "",
    "preparedTypes": [],
    "strongTypes": [],
    "reviewSchoolTags": [
      "국민대"
    ],
    "schoolTextRaw": "국민대",
    "rating": 4,
    "atmosphere": "3",
    "atmosphereScore": 3,
    "assignmentAmount": "3",
    "assignmentAmountScore": 3,
    "difficulty": "입문자도 가능해요",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨"
    ],
    "concernTags": [
      "특별히 없음"
    ],
    "cautionTags": [
      "체험 수업 후 결정 추천"
    ],
    "teachingStyleTags": [],
    "summary": "그림의 기본기를 탄탄하게 다질 수 있었던 학원이었습니다. 원장님께서 직접 시범과 수정을 해주시며 크리틱도 꼼꼼하게 봐주셔서 많은 도움…",
    "detail": "그림의 기본기를 탄탄하게 다질 수 있었던 학원이었습니다. 원장님께서 직접 시범과 수정을 해주시며 크리틱도 꼼꼼하게 봐주셔서 많은 도움이 되었습니다. 특히 소묘하는 법과 연필 선을 살리는 법 등 그림을 그리는 방법을 제대로 배울 수 있었습니다. 수업 분위기는 자유로운 편이고 칭찬을 많이 해주시며 북돋아주는 분위기였습니다. 다른 아이디어나 정답을 먼저 보기보다는 스스로 생각하는 힘을 강하게 기르는 수업이었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": []
  }
];
