// 미대이음 구글폼 응답 원문 보존 정리본
// 기준: 사용자가 공유한 구글폼 응답 시트의 실제 응답 26개
// 핵심 원칙:
// 1) 전화번호/연락처/배포 링크 수신 여부 등 개인정보성 컬럼은 포함하지 않습니다.
// 2) 사용자가 작성한 자세한 후기는 detailOriginal/detail/detail 값에 원문 그대로 보존합니다.
// 3) 구글폼에는 한 줄 후기 문항이 없으므로 summary는 임의 생성하지 않고 빈 문자열로 둡니다.
// 4) 모든 리뷰는 운영자 검수 전 상태이므로 status: "pending"으로 저장합니다.

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
  detailOriginal: string;
  detail: string;
  detailPublic?: string;
  likes: number;
  createdAt: string;
  status: "pending" | "public" | "held" | "rejected" | "hidden";
  source: "google-form";
  sourceBatch?: string;
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
    "summary": "",
    "detail": "학원도 좋고 선생님들이나 보조강사들의 역량도 좋지만 커리큘럼이 너무 틀에 박힌 것 같아요",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "학원도 좋고 선생님들이나 보조강사들의 역량도 좋지만 커리큘럼이 너무 틀에 박힌 것 같아요"
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
    "summary": "",
    "detail": "학원 내부도 깔끔하고 관리도 잘 됩니다! 선생님들 친절하시고 무엇보다 담당하시는 선생님이 쓰신 학생들에게 가르칠 때의 메뉴얼?이 존재해서 선생님들 가르침에 일관성이 있습니다.다만 입결이 엄청 좋은지는 잘~..ㅜㅜ그림실력 향상에 있어서는 학생 개인의 의지와 노력이 더 중요한 학원입니다",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "학원 내부도 깔끔하고 관리도 잘 됩니다! 선생님들 친절하시고 무엇보다 담당하시는 선생님이 쓰신 학생들에게 가르칠 때의 메뉴얼?이 존재해서 선생님들 가르침에 일관성이 있습니다.다만 입결이 엄청 좋은지는 잘~..ㅜㅜ그림실력 향상에 있어서는 학생 개인의 의지와 노력이 더 중요한 학원입니다"
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
    "summary": "",
    "detail": "저는 2년정도 다른 미술학원에서 실력을 쌓다가 고3 중반에 들어가서 큰 어려움이 없었지만, 그래도 학원에 적응하기에 난이도가 좀 어려웠던 것 같습니다. 아에 입시를 처음부터 시작하는 사람은 적응하기 어려운 분위기였습니다. 선생님께서 방치형(?)으로 학생들을 가르치시고 직접 열정을 가지고 열심히 질문하지 않는 이상 특별히 따로 집중적으로 봐주시지는 않았습니다.",
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
    ],
    "detailOriginal": "저는 2년정도 다른 미술학원에서 실력을 쌓다가 고3 중반에 들어가서 큰 어려움이 없었지만, 그래도 학원에 적응하기에 난이도가 좀 어려웠던 것 같습니다. 아에 입시를 처음부터 시작하는 사람은 적응하기 어려운 분위기였습니다. 선생님께서 방치형(?)으로 학생들을 가르치시고 직접 열정을 가지고 열심히 질문하지 않는 이상 특별히 따로 집중적으로 봐주시지는 않았습니다."
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
    "summary": "",
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
    ],
    "detailOriginal": "선생님 감정기복심함"
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
    "summary": "",
    "detail": "저는 그림 못그리고 소심한 현역이였는데 삼수 사수생이 좀 점령한 느낌이였습니다... 질문 못하고 소심하면 비추 학생이 많아서 봐주기 힘들어요",
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
    ],
    "detailOriginal": "저는 그림 못그리고 소심한 현역이였는데 삼수 사수생이 좀 점령한 느낌이였습니다... 질문 못하고 소심하면 비추 학생이 많아서 봐주기 힘들어요"
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
    "summary": "",
    "detail": "정특때 거의 멘탈 나간 상태로 수업 들었었는데 너무 좋았어요.. 쌤들도 다 너무 좋고 기본기를 탄탄하게 잡아주시려고 노력해주시는게 보였어요",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "정특때 거의 멘탈 나간 상태로 수업 들었었는데 너무 좋았어요.. 쌤들도 다 너무 좋고 기본기를 탄탄하게 잡아주시려고 노력해주시는게 보였어요"
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
    "summary": "",
    "detail": "다른 미술학원 원장선생님보다 훨씬 더 젊으시고 직접 색과 구도 연구를 하시기 때문에 입시미술 트렌드 캐치가 항상 좋으신 편입니다 또한 아카이브 미술학원 안 모든 보조 선생님들이 매우 많은 편에 속하며 대부분 인서울이나 수시 실기 강점인 인서울, 건글에 다니시고 있거나 졸업,휴학생 선생님들이십니다(모든 선생님은 대부분 3~4년동안 원장선생님과 지내심). 또한 그 선생님들마다 맞는 연구작과 입시시절 성적과 그림 모든 것을 아카이브 학생들에게만 공개합니다.\n다른 미술학원 원장들과 결합하여 교수평가로 기간마다 3~4회 자기 실력을 알 수 있는 기회가 제공됩니다. 또한 학생들에게 맞는 공부법을 알려주시고 학생 개개인에 맞게 커리큘럼을 짜주시는 게 가장 큰 장점입니다(한 달에 한 번씩 학생과 부모님 개개인 상담) 이번 대학에서 따로 본상~입선까지 많이 나와 따로 교육자 상까지 받으셨으며 직접 실기대회 그림장 공개가 되는 대학들은 싹 다 분석하고 연구 하시며 합격작 그림과 불합격 그림까지 차이점을 알려주십니다. 학생들마다 개개인 차이가 있는 걸 존중해주시고 저희를 많이 사랑해주시는 걸 많이 느껴지는 미술학원입니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "다른 미술학원 원장선생님보다 훨씬 더 젊으시고 직접 색과 구도 연구를 하시기 때문에 입시미술 트렌드 캐치가 항상 좋으신 편입니다 또한 아카이브 미술학원 안 모든 보조 선생님들이 매우 많은 편에 속하며 대부분 인서울이나 수시 실기 강점인 인서울, 건글에 다니시고 있거나 졸업,휴학생 선생님들이십니다(모든 선생님은 대부분 3~4년동안 원장선생님과 지내심). 또한 그 선생님들마다 맞는 연구작과 입시시절 성적과 그림 모든 것을 아카이브 학생들에게만 공개합니다.\n다른 미술학원 원장들과 결합하여 교수평가로 기간마다 3~4회 자기 실력을 알 수 있는 기회가 제공됩니다. 또한 학생들에게 맞는 공부법을 알려주시고 학생 개개인에 맞게 커리큘럼을 짜주시는 게 가장 큰 장점입니다(한 달에 한 번씩 학생과 부모님 개개인 상담) 이번 대학에서 따로 본상~입선까지 많이 나와 따로 교육자 상까지 받으셨으며 직접 실기대회 그림장 공개가 되는 대학들은 싹 다 분석하고 연구 하시며 합격작 그림과 불합격 그림까지 차이점을 알려주십니다. 학생들마다 개개인 차이가 있는 걸 존중해주시고 저희를 많이 사랑해주시는 걸 많이 느껴지는 미술학원입니다."
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
    "summary": "",
    "detail": "크게 국민대/고대/이대로 테이블이 나뉘며\n공통진도를 나갈 때도 있고\n각 대학별 진도를 나갈 때도 있습니다.\n6모 이후 9모 이후 등 학생들 멘탈이 흔들리는 시점이면 원장님께서 여러 얘기를 해주시며\n마음을 다잡을 수 있게 해주십니다.\n특히 저같은 경우는 9모 직후 멘탈이 크게 흔들려 그게 수업을 제대로 듣지 못하는 수준까지 갔으며\n그림에도 영향이 미쳤는데 이때 원장님이\n개인적으로 제 문제를 해결할 방법을 많이 알려주셨고\n수능 직후에도 제 성향과 성적에 맞추어 여러 조언을 해주셨는데 이게 약한 멘탈을 가진 저에겐 큰 도움이 되었습니다.\n\n직설적으로 답을 제시해주시기 보다는\n저 스스로 답을 찾아갈 수 있게 해주시는 편이셨으며\n중간중간 힌트?느낌으로 던지시는 말들이\n도움 됐었습니다!\n\n강평때도 국민대반은 약 20명가량 됐는데\n한명한명 피드백 해주실만큼 열정적이고 친절하십니다!\n말을 하실 때에도 늘 둥글게 말해주십니다\n또한 학원이 나름 경남권에선 대형학원이라\n어플도 나와있으며\n그 어플 안에서 각 수업 내용, 자료, 합격작 등을\n볼 수 있어 편리했습니다!\n\n수업 분위기도 밝고 다같이 으쌰으쌰 해보자는 분위기였어서 저는 마음 편하게 그림 그리며\n미술학원 가는 날이 공부만 하다가 힐링하러 가는 날처럼\n느껴질 정도였습니다\n\n또한 지방 학원치고 기초소양을 준비하는 학생들이 꽤 많아서 실력을 비교하기에 좋았고\n서울 학원과 교류를 하며 주기적으로 서울 유명 미술 학원 원장님께서 특강을 와주시는 것도 큰 도움이 되었습니다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "크게 국민대/고대/이대로 테이블이 나뉘며\n공통진도를 나갈 때도 있고\n각 대학별 진도를 나갈 때도 있습니다.\n6모 이후 9모 이후 등 학생들 멘탈이 흔들리는 시점이면 원장님께서 여러 얘기를 해주시며\n마음을 다잡을 수 있게 해주십니다.\n특히 저같은 경우는 9모 직후 멘탈이 크게 흔들려 그게 수업을 제대로 듣지 못하는 수준까지 갔으며\n그림에도 영향이 미쳤는데 이때 원장님이\n개인적으로 제 문제를 해결할 방법을 많이 알려주셨고\n수능 직후에도 제 성향과 성적에 맞추어 여러 조언을 해주셨는데 이게 약한 멘탈을 가진 저에겐 큰 도움이 되었습니다.\n\n직설적으로 답을 제시해주시기 보다는\n저 스스로 답을 찾아갈 수 있게 해주시는 편이셨으며\n중간중간 힌트?느낌으로 던지시는 말들이\n도움 됐었습니다!\n\n강평때도 국민대반은 약 20명가량 됐는데\n한명한명 피드백 해주실만큼 열정적이고 친절하십니다!\n말을 하실 때에도 늘 둥글게 말해주십니다\n또한 학원이 나름 경남권에선 대형학원이라\n어플도 나와있으며\n그 어플 안에서 각 수업 내용, 자료, 합격작 등을\n볼 수 있어 편리했습니다!\n\n수업 분위기도 밝고 다같이 으쌰으쌰 해보자는 분위기였어서 저는 마음 편하게 그림 그리며\n미술학원 가는 날이 공부만 하다가 힐링하러 가는 날처럼\n느껴질 정도였습니다\n\n또한 지방 학원치고 기초소양을 준비하는 학생들이 꽤 많아서 실력을 비교하기에 좋았고\n서울 학원과 교류를 하며 주기적으로 서울 유명 미술 학원 원장님께서 특강을 와주시는 것도 큰 도움이 되었습니다."
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
    "summary": "",
    "detail": "현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게 나타납니다.\n상담 중 내용에선 단순히 눈앞의 입시뿐만 아니라 미래의 작가로서의 자질을 길러준다고 했는데 실제 수업 내용에선 획일화된 방식에 이질감이 들었습니다.\n그렇지만 대형학원답게 입시 정보가 압도적으로 많은 편이고 서울대 정원 16명중 15명이 이 학원에서 진학하는 절대적인 통계치가, 이 학원의 방향성을 증명해주는 것 같습니다.",
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
    ],
    "detailOriginal": "현재 동양화 입시가 한 학원이 독점하는 분위기고, 거의 대부분의 동양화 입시생이 다니는 학원인 만큼 대형학원의 장점과 단점이 극명하게 나타납니다.\n상담 중 내용에선 단순히 눈앞의 입시뿐만 아니라 미래의 작가로서의 자질을 길러준다고 했는데 실제 수업 내용에선 획일화된 방식에 이질감이 들었습니다.\n그렇지만 대형학원답게 입시 정보가 압도적으로 많은 편이고 서울대 정원 16명중 15명이 이 학원에서 진학하는 절대적인 통계치가, 이 학원의 방향성을 증명해주는 것 같습니다."
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
    "summary": "",
    "detail": "고3이 느끼기엔 성이대반에 소속이 될때 커리큘럼을 자세하게 알지못해 어려움을 느낄 수 있음\n각자도생하는 분위기여서 으쌰으쌰? 이런건 아닌거같음\n재수,n수생이 많은 반이기때문에 속도가 빠른 현역들과는 진도차이가 나 좀 어렵기도함\n조교쌤들이 잘 봐주심 하지만 질문을 잘해야함\n질문을 잘 못하는 소심한 성격은 이학원과 맞지않을 수 있음.\n초보자가 수업따라가기에는 한계가있음\n하나부터 열까지 다 알려주는건 아니긴함\n기초디자인과는 다르게 자기가 생각해서 아이디어를 내야하는 경우가 많은데 이걸 시간제한을 두지않아 그냥 딴생각하고 와도 모를거같음\n엄청 빡빡한 편은 아닌거같음 아직 6월이여서 그런진 모르겠지만",
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
    ],
    "detailOriginal": "고3이 느끼기엔 성이대반에 소속이 될때 커리큘럼을 자세하게 알지못해 어려움을 느낄 수 있음\n각자도생하는 분위기여서 으쌰으쌰? 이런건 아닌거같음\n재수,n수생이 많은 반이기때문에 속도가 빠른 현역들과는 진도차이가 나 좀 어렵기도함\n조교쌤들이 잘 봐주심 하지만 질문을 잘해야함\n질문을 잘 못하는 소심한 성격은 이학원과 맞지않을 수 있음.\n초보자가 수업따라가기에는 한계가있음\n하나부터 열까지 다 알려주는건 아니긴함\n기초디자인과는 다르게 자기가 생각해서 아이디어를 내야하는 경우가 많은데 이걸 시간제한을 두지않아 그냥 딴생각하고 와도 모를거같음\n엄청 빡빡한 편은 아닌거같음 아직 6월이여서 그런진 모르겠지만"
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
    "summary": "",
    "detail": "진짜 정말 괜찮습니다 그림도 좋구요 눈이 떠진 느낌? 그림이 4d고 구도틀이 있어서 따라오기 쉬워요 정말 초보자도 잘 따라올수있어요 선생님들이 정말 친절하십니다.... 동물의숲같아요 ㅋㅋㅋ 정말 힐링됩니다 학생 하나하나 잘 신경써주시구요 저는 진짜 마음에 들었습니다 꼭 상담받아보고 체험수업해보세요!",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "진짜 정말 괜찮습니다 그림도 좋구요 눈이 떠진 느낌? 그림이 4d고 구도틀이 있어서 따라오기 쉬워요 정말 초보자도 잘 따라올수있어요 선생님들이 정말 친절하십니다.... 동물의숲같아요 ㅋㅋㅋ 정말 힐링됩니다 학생 하나하나 잘 신경써주시구요 저는 진짜 마음에 들었습니다 꼭 상담받아보고 체험수업해보세요!"
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
    "summary": "",
    "detail": "음..일단 겉보김랑 실제랑 달라요 뭔가 높은대학교 무조건 붙일수있을것같지만실상은 아예못붙임..;;;심저 제 수시붙은것도 실기로 붙은척 가짜정보올림..;;;그리고 내신도 못하게함",
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
    ],
    "detailOriginal": "음..일단 겉보김랑 실제랑 달라요 뭔가 높은대학교 무조건 붙일수있을것같지만실상은 아예못붙임..;;;심저 제 수시붙은것도 실기로 붙은척 가짜정보올림..;;;그리고 내신도 못하게함"
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
    "summary": "",
    "detail": "선생님께서 정말 감정적입니다... 공개적으로 학생들에게 모욕을 주거나 비난하는 경우도 있습니다 상담도 자주 받고 받을 때마다 30분 이상씩 합니다 ㅠ 다른 학원들 욕하는 경우도 허다해요...",
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
    ],
    "detailOriginal": "선생님께서 정말 감정적입니다... 공개적으로 학생들에게 모욕을 주거나 비난하는 경우도 있습니다 상담도 자주 받고 받을 때마다 30분 이상씩 합니다 ㅠ 다른 학원들 욕하는 경우도 허다해요..."
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
    "summary": "",
    "detail": "특정 강사 한분이 굉장히 유명하셨는데, 그것때문에 멀리서 찾아오는 경우도 있을만큼 유명했습니다. 확실히 실력은 있으셔서 좋았고, 기초디자인 기반의 학원이지만 극소수의 기초소양 학생들의 경우 거의 유명 전임선생님께서 전담마크해주시는 느낌을 받았습니다. 그리고 학원에 학생수가 굉장히 많아서 서로 참고하고 경쟁하며 공부할 수 있습니다. 자료도 많고, 이것저것 채색법이나 구도 연구를 많이 하셔서 조금 선도적인 느낌이 있었습니다",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "특정 강사 한분이 굉장히 유명하셨는데, 그것때문에 멀리서 찾아오는 경우도 있을만큼 유명했습니다. 확실히 실력은 있으셔서 좋았고, 기초디자인 기반의 학원이지만 극소수의 기초소양 학생들의 경우 거의 유명 전임선생님께서 전담마크해주시는 느낌을 받았습니다. 그리고 학원에 학생수가 굉장히 많아서 서로 참고하고 경쟁하며 공부할 수 있습니다. 자료도 많고, 이것저것 채색법이나 구도 연구를 많이 하셔서 조금 선도적인 느낌이 있었습니다"
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
    "summary": "",
    "detail": "대형학원의 단점을 모두 가지고 있음 학생별 관리가 잘 이뤄지지 않음. 대형이라 더욱 시험 위주로 돌아가기 때문에 실력이 있는 학생들이 가야 효과를 볼 수 있음\n1등급임에도 국민대학교에 지원하지 못 한다고 학원 측에서 확신함\n선생님들부터 담배 냄새가 너무 심하기 때문네 학생들의 흡연까지 관리가 되지 않음. 보조 강사들의 언행 또한 관리가 잘 되지 않음 등등",
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
    ],
    "detailOriginal": "대형학원의 단점을 모두 가지고 있음 학생별 관리가 잘 이뤄지지 않음. 대형이라 더욱 시험 위주로 돌아가기 때문에 실력이 있는 학생들이 가야 효과를 볼 수 있음\n1등급임에도 국민대학교에 지원하지 못 한다고 학원 측에서 확신함\n선생님들부터 담배 냄새가 너무 심하기 때문네 학생들의 흡연까지 관리가 되지 않음. 보조 강사들의 언행 또한 관리가 잘 되지 않음 등등"
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
    "summary": "",
    "detail": "아주 어릴때 부터 현재 현역때까지 다니는 중인 학원인데 매우 만족하며 다니는 중입니다. 인원이 대전에 있는 학원 치고는 많긴한데 그럼에도 전임쌤과의 피드백이 문제 없이 잘 이어집니다. 그리고 꼼꼼히 저의 부족한 부분을 잘 지적해주셔서 입시반을 시작한 3월부터 현재 6월까지 월마다 시간이 지날 수록 실력이 늘고 있다는게 체감 됩니다. 기디로 가는 대학 뿐만 아니라 기소 반도 운영하고 있어요. 그 유명한 기소학원인 강남 클라우드에서 전임쌤이 내려오셔서 수업해서 이 점도 좋은 점 같습니다!",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "아주 어릴때 부터 현재 현역때까지 다니는 중인 학원인데 매우 만족하며 다니는 중입니다. 인원이 대전에 있는 학원 치고는 많긴한데 그럼에도 전임쌤과의 피드백이 문제 없이 잘 이어집니다. 그리고 꼼꼼히 저의 부족한 부분을 잘 지적해주셔서 입시반을 시작한 3월부터 현재 6월까지 월마다 시간이 지날 수록 실력이 늘고 있다는게 체감 됩니다. 기디로 가는 대학 뿐만 아니라 기소 반도 운영하고 있어요. 그 유명한 기소학원인 강남 클라우드에서 전임쌤이 내려오셔서 수업해서 이 점도 좋은 점 같습니다!"
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
    "summary": "",
    "detail": "발상과 표현, 즉 응용력이 필요한 수업에서 문제에 접근하는 방식과 방향을 섬세하게 잡아주십니다.\n혼자서 고민하여 아이디어를 낼 수 있도록 그림작 또는 실제 제품디자인이나 생활디자인 등등 여러 예시자료를 풍부하게 제공해주시고, 깔끔한 시범을 통해 문제에서 대응했어야 하는 부분 및 아쉬운 지점등을 명확히 체크하여 학생의 관점에서 어떠한 태도를 지녀야 할 지를 명확하게 잡아주셔서 도움이 정말 많이 되었습니다. 창의력이 아예 없는 학생도 정답에 가까워질 수 있도록 수업에서 얻어가는 부분이 정말 많고, 홍익대학교 출신 학원 원장선생님께서 1대1로 수업도 해주시기 때문에 일관된 피드백과 매시간 소홀함이 없는 환경입니다. 특히 발상뿐만 아니라 소묘,건식재료에서 표현력,기교등이 매우 뛰어나신 선생님이셔서 상위권 대학준비에 최적화 되어있으니 실력에 의심 하나 없이 3년간 한 선생님을 바라보게 만들 수 밖에 없더라구요, 학원위치도 수성구여서 바로앞에 대구러셀이 있습니다. 공부와 실기를 같이 챙길 수 있는 구조로 더욱 유리할 수 있을 거 같다고 생각이 듭니다.\n친절하시고 친해지면 가끔 엉뚱미(?)로 재밌으신 선생님이라 수업도 재밌으실겁니다. (이건 매우 주관적인 제 생각입니다ㅎㅎ) 또한 서울대,홍익대,국민대,고려대,과기대,시립대 등등 상위권 대학을 많이 보낸 경력이 있으시니 학원에 믿고 맡기셔도 좋을 것 같습니다. 현재 저는 실기를 하고 있진 않지만 취미로 다시 이 학원을 다니고 싶다는 생각도 정말 자주 들었습니다!",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "발상과 표현, 즉 응용력이 필요한 수업에서 문제에 접근하는 방식과 방향을 섬세하게 잡아주십니다.\n혼자서 고민하여 아이디어를 낼 수 있도록 그림작 또는 실제 제품디자인이나 생활디자인 등등 여러 예시자료를 풍부하게 제공해주시고, 깔끔한 시범을 통해 문제에서 대응했어야 하는 부분 및 아쉬운 지점등을 명확히 체크하여 학생의 관점에서 어떠한 태도를 지녀야 할 지를 명확하게 잡아주셔서 도움이 정말 많이 되었습니다. 창의력이 아예 없는 학생도 정답에 가까워질 수 있도록 수업에서 얻어가는 부분이 정말 많고, 홍익대학교 출신 학원 원장선생님께서 1대1로 수업도 해주시기 때문에 일관된 피드백과 매시간 소홀함이 없는 환경입니다. 특히 발상뿐만 아니라 소묘,건식재료에서 표현력,기교등이 매우 뛰어나신 선생님이셔서 상위권 대학준비에 최적화 되어있으니 실력에 의심 하나 없이 3년간 한 선생님을 바라보게 만들 수 밖에 없더라구요, 학원위치도 수성구여서 바로앞에 대구러셀이 있습니다. 공부와 실기를 같이 챙길 수 있는 구조로 더욱 유리할 수 있을 거 같다고 생각이 듭니다.\n친절하시고 친해지면 가끔 엉뚱미(?)로 재밌으신 선생님이라 수업도 재밌으실겁니다. (이건 매우 주관적인 제 생각입니다ㅎㅎ) 또한 서울대,홍익대,국민대,고려대,과기대,시립대 등등 상위권 대학을 많이 보낸 경력이 있으시니 학원에 믿고 맡기셔도 좋을 것 같습니다. 현재 저는 실기를 하고 있진 않지만 취미로 다시 이 학원을 다니고 싶다는 생각도 정말 자주 들었습니다!"
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
    "summary": "",
    "detail": "입시반 한정 담당 선생님이 개개인의 특성을 잘 알고 계십니다 설명도 초보자 맞춤으로 잘하시긴 하지만 입시반 커리큘럼 완성도?가 부족한것같아요 구도에 대한 이해가 좀 떨어져요 상위권 학교 준비도 어려워요",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "입시반 한정 담당 선생님이 개개인의 특성을 잘 알고 계십니다 설명도 초보자 맞춤으로 잘하시긴 하지만 입시반 커리큘럼 완성도?가 부족한것같아요 구도에 대한 이해가 좀 떨어져요 상위권 학교 준비도 어려워요"
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
    "summary": "",
    "detail": "선생님이랑 친해지셔야합니다... 학생들 엄청 많은데 한시간 강평동안 피드백 한줄 받고 끝날 수 있음\n다만 일반기디는 시간 내에 정말 잘 그릴 수 있게 됩니다 체계적인 시간관리 및 자료 제공은 좋았어요\n저는 상위권반이었는데 막 좋다? 는 못느꼈어요 소묘 기초도 별로고 정특 전에는 학교별로 분반도 안돼서 내가 준비하고 싶은 학교 중점으로 배울 수 없어요\n웬만하면 국민대 과기대로 보내려는 느낌이 강해요",
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
    ],
    "detailOriginal": "선생님이랑 친해지셔야합니다... 학생들 엄청 많은데 한시간 강평동안 피드백 한줄 받고 끝날 수 있음\n다만 일반기디는 시간 내에 정말 잘 그릴 수 있게 됩니다 체계적인 시간관리 및 자료 제공은 좋았어요\n저는 상위권반이었는데 막 좋다? 는 못느꼈어요 소묘 기초도 별로고 정특 전에는 학교별로 분반도 안돼서 내가 준비하고 싶은 학교 중점으로 배울 수 없어요\n웬만하면 국민대 과기대로 보내려는 느낌이 강해요"
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
    "summary": "",
    "detail": "상위권 학교만 준비했어서 그 기준으로 말씀드리면\n초보자는 비추천해요 그 학교로 입시했던 경험 있는 n수들은 추천 소수정예라 개개인 관리가 되는게 가장 큰 장점입니다\n다만 스스로 생각하게 시키는게 좀 과할때도 있어서 저는 힘들었어요 한 문제로 몇타임을 고민했는데 계속 빠꾸먹어서 멘탈 나갔습니다\n선생님들 실력은 있어요 본인이 많이 질문해서 빼먹어야해요",
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
    ],
    "detailOriginal": "상위권 학교만 준비했어서 그 기준으로 말씀드리면\n초보자는 비추천해요 그 학교로 입시했던 경험 있는 n수들은 추천 소수정예라 개개인 관리가 되는게 가장 큰 장점입니다\n다만 스스로 생각하게 시키는게 좀 과할때도 있어서 저는 힘들었어요 한 문제로 몇타임을 고민했는데 계속 빠꾸먹어서 멘탈 나갔습니다\n선생님들 실력은 있어요 본인이 많이 질문해서 빼먹어야해요"
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
    "summary": "",
    "detail": "진짜 비추합니다.. 선생님들이 너무 감정적이세요 그리고 원생 숫자도 적어서 국민대 반을 10명이서 준비했고 마지막에는 3명이서 입시했어요….. 다 도망갔습니다 저빼고 전 어찌저찌 버텨서 왔지만 다른 좋은 학원 많습니다 그냥 광주에서 학원 다니지 마세요… 서울 학교릉 목표를 하면 특히~~",
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
    ],
    "detailOriginal": "진짜 비추합니다.. 선생님들이 너무 감정적이세요 그리고 원생 숫자도 적어서 국민대 반을 10명이서 준비했고 마지막에는 3명이서 입시했어요….. 다 도망갔습니다 저빼고 전 어찌저찌 버텨서 왔지만 다른 좋은 학원 많습니다 그냥 광주에서 학원 다니지 마세요… 서울 학교릉 목표를 하면 특히~~"
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
    "summary": "",
    "detail": "일단 저는 부산에 있는 학원에 다니다가 정시특강 시즌에는 본원으로 이동하여 실기를 진행했습니다. 분원과 본원 간의 수업 퀄 차이가 많이 나요. 정보력도 분원이 많이 밀리는게 느껴졌습니다… 본원의 피드백과 수업스타일은 저와 잘 맞아서 3수 내내 학원을 옮기지 않고 쭉 다녔어요!",
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
    ],
    "detailOriginal": "일단 저는 부산에 있는 학원에 다니다가 정시특강 시즌에는 본원으로 이동하여 실기를 진행했습니다. 분원과 본원 간의 수업 퀄 차이가 많이 나요. 정보력도 분원이 많이 밀리는게 느껴졌습니다… 본원의 피드백과 수업스타일은 저와 잘 맞아서 3수 내내 학원을 옮기지 않고 쭉 다녔어요!"
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
    "summary": "",
    "detail": "소수정예 수업으로 이루어졌고 개인의 부족한 역량을 세심하게 피드백 받아 발전시킬 수 있었다. 스스로 생각하는 힘을 기를 수 있었으며 전체적인 학원 분위기도 자유로움과 동시에 집중할 수 있었다. 다양한 자료와 문제를 통해서 역량을 키울 수 있었던 학원이였다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "소수정예 수업으로 이루어졌고 개인의 부족한 역량을 세심하게 피드백 받아 발전시킬 수 있었다. 스스로 생각하는 힘을 기를 수 있었으며 전체적인 학원 분위기도 자유로움과 동시에 집중할 수 있었다. 다양한 자료와 문제를 통해서 역량을 키울 수 있었던 학원이였다."
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
    "summary": "",
    "detail": "2학년때 아이디어를 열어줄 수 있는 방향으로 수업이 진행돼서 좋다. 틀에박힌 사고만할 줄 알아서 기소를 처음 할 때 너무 힘들었는데 지금생각해보니 엄청 입시스러운 수업이 아니라 어느정도 실험적인 연습도 시켜서 전반적인 조형감각을 키우는데 도움이 됐다. 3학년으로 넘어와서는 서로간의 그림을 많이 볼 수 있게 그림을 강평이후에도 깔아두는 등의 경우가 많아서 서로서로의 그림을 보면서 실력이 많이늘었다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "2학년때 아이디어를 열어줄 수 있는 방향으로 수업이 진행돼서 좋다. 틀에박힌 사고만할 줄 알아서 기소를 처음 할 때 너무 힘들었는데 지금생각해보니 엄청 입시스러운 수업이 아니라 어느정도 실험적인 연습도 시켜서 전반적인 조형감각을 키우는데 도움이 됐다. 3학년으로 넘어와서는 서로간의 그림을 많이 볼 수 있게 그림을 강평이후에도 깔아두는 등의 경우가 많아서 서로서로의 그림을 보면서 실력이 많이늘었다."
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
    "summary": "",
    "detail": "정시특강때만 다녔어서 그런지 비교적 템포가 빠른 수업. 시험을치는게 대부분이었다. 실기력이 어느정도 올라온 상태에서 실전감각을 잡기에는 좋았다. 재수n수가 많아서 실전감각을 뺏어오기 좋음. 인원수가 확실히 많다보니 많은 사례를 볼 수 있다는게 장점. 선생님마다 스타일이 다르다. 맞는 스타일의 선생님 수업을 듣게 중요할 것 같다. 지친 정특기간에 강평을 재밌게 해주셔서 나름 숨통이 트였던 학원이고 실제 실기장에서도 멘탈이 흔들리지 않게 확실한 풀이 루틴이 있어서 도움이 많이됐다",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "정시특강때만 다녔어서 그런지 비교적 템포가 빠른 수업. 시험을치는게 대부분이었다. 실기력이 어느정도 올라온 상태에서 실전감각을 잡기에는 좋았다. 재수n수가 많아서 실전감각을 뺏어오기 좋음. 인원수가 확실히 많다보니 많은 사례를 볼 수 있다는게 장점. 선생님마다 스타일이 다르다. 맞는 스타일의 선생님 수업을 듣게 중요할 것 같다. 지친 정특기간에 강평을 재밌게 해주셔서 나름 숨통이 트였던 학원이고 실제 실기장에서도 멘탈이 흔들리지 않게 확실한 풀이 루틴이 있어서 도움이 많이됐다"
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
    "summary": "",
    "detail": "그림의 기본기를 탄탄하게 다질 수 있었던 학원이였다. 원장님께서 직접 시범과 수정을 해 주시며 크리틱도 꼼꼼하게 봐주셔서 많은 도움이 되었다. 특히 소묘하는 법과 연필 선을 살리는 법 등 그림을 그리는 방법을 제대로 배울 수 있었던 학원이였다.\n수업 분위기는 자유로운 편이고 칭찬을 많이 해주시며 북돋아주는 분위기이다. 다른 아이디어나 정답을 먼저 보기보다는 스스로 생각하는 힘을 강하게 기르는 수업이였다.",
    "likes": 0,
    "createdAt": "2026-06-12T00:00:00+09:00",
    "status": "pending",
    "source": "google-form",
    "consent": {
      "publish": true,
      "moderation": true
    },
    "moderationFlags": [],
    "detailOriginal": "그림의 기본기를 탄탄하게 다질 수 있었던 학원이였다. 원장님께서 직접 시범과 수정을 해 주시며 크리틱도 꼼꼼하게 봐주셔서 많은 도움이 되었다. 특히 소묘하는 법과 연필 선을 살리는 법 등 그림을 그리는 방법을 제대로 배울 수 있었던 학원이였다.\n수업 분위기는 자유로운 편이고 칭찬을 많이 해주시며 북돋아주는 분위기이다. 다른 아이디어나 정답을 먼저 보기보다는 스스로 생각하는 힘을 강하게 기르는 수업이였다."
  }
];

export const getImportedGoogleFormReviewCount = () => importedReviewsFromGoogleForm.length;
