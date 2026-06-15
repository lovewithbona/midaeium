// 미대이음 구글폼 추가 응답 원문 보존 데이터
// 생성 기준: Google Sheet gid=1405699009, 이전에 처리한 48개 이후 신규 응답만 포함(sourceRow 50-71).
// 원칙: 사용자가 작성한 후기 원문(detailOriginal/detail)은 임의 요약/순화/수정하지 않는다.

export type ImportedGoogleFormReviewNew = {
  id: string;
  sourceRow: number;
  timestamp: string;
  academyNameRaw: string;
  academyId: string | null;
  academyName: string;
  academyMatchStatus: "suggested" | "needs-admin-review";
  rating: number;
  atmosphere: string;
  assignmentAmount: string;
  schoolTextRaw: string;
  reviewSchoolTagsRaw: string[];
  reviewSchoolTags: string[];
  difficulty: string;
  feedbackRaw: string;
  feedbackTags: string[];
  goodRaw: string;
  goodTags: string[];
  concernRaw: string;
  concernTags: string[];
  cautionRaw: string;
  cautionTags: string[];
  teachingStyleTags: string[];
  summary: string;
  detailOriginal: string;
  detail: string;
  detailPublic?: string | null;
  writerStatus: string;
  attendedYear: string;
  attendedPeriod: string;
  admissionResult: string;
  consentPublish: string;
  consentModeration: string;
  wantsDistributionLink: string;
  likes: number;
  status: "pending" | "public" | "held" | "rejected" | "hidden";
  source: "google-form-2026-06-15-new";
  moderationFlags: string[];
};

export const importedGoogleFormReviews20260615New: ImportedGoogleFormReviewNew[] = [
  {
    "id": "google-form-20260615-new-review-049",
    "sourceRow": 50,
    "timestamp": "2026. 6. 14 오후 7:06:39",
    "academyNameRaw": "양재 지와이학원",
    "academyId": "yangjae-gy-art",
    "academyName": "지와이아트 미술학원",
    "academyMatchStatus": "suggested",
    "rating": 5,
    "atmosphere": "3",
    "assignmentAmount": "2",
    "schoolTextRaw": "이화여대중심",
    "reviewSchoolTagsRaw": [
      "이화여대중심"
    ],
    "reviewSchoolTags": [
      "이화여자대학교"
    ],
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackRaw": "차분하고 존중하는 분위기였음, 빠르게 핵심만 짚어줌, 친절하게 설명함",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함"
    ],
    "goodRaw": "피드백이 꼼꼼함, 학원 분위기가 좋음, 커리큘럼이 좋음",
    "goodTags": [
      "피드백이 꼼꼼함",
      "학원 분위기가 좋음",
      "커리큘럼이 좋음"
    ],
    "concernRaw": "특별히 없음",
    "concernTags": [
      "특별히 없음"
    ],
    "cautionRaw": "체험 수업 후 결정 추천",
    "cautionTags": [
      "체험 수업 후 결정 추천"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "진짜 쌤들이 너무 친절하시고 예고 준비했던 학원이랑은 분위기가 너무 달라서 좋았어요 ㅠㅠ",
    "detail": "진짜 쌤들이 너무 친절하시고 예고 준비했던 학원이랑은 분위기가 너무 달라서 좋았어요 ㅠㅠ",
    "detailPublic": null,
    "writerStatus": "고3",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-050",
    "sourceRow": 51,
    "timestamp": "2026. 6. 14 오후 8:20:24",
    "academyNameRaw": "서하미술학원",
    "academyId": "gangnam-seoha-art",
    "academyName": "서하미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "1",
    "assignmentAmount": "2",
    "schoolTextRaw": "이대, 서울대중심",
    "reviewSchoolTagsRaw": [
      "이대, 서울대중심"
    ],
    "reviewSchoolTags": [
      "이화여자대학교",
      "서울대학교"
    ],
    "difficulty": "상급자에게 적합해요 (초보자 비추)",
    "feedbackRaw": "꼼꼼하게 설명함, 말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    "goodRaw": "피드백이 꼼꼼함, 입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음",
    "goodTags": [
      "피드백이 꼼꼼함",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음"
    ],
    "concernRaw": "초보자가 따라가기 어려움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    "concernTags": [
      "초보자가 따라가기 어려움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "회화미술학원이고 성적이 낮은 친구들도 이대를 굉장히 잘 보냅니다! 근데 원장님이 좀 무서우시고 못그리는 친구들에게는 좀 지적을 많이 하셔서 무서워요..하지만 학원 다니면서 쌤 말대로만하면 무조건 붙을것같다는 생각이들었어요! 커리큘럼이 매우 잘 짜여있고 학생이 많은데도 불구하고 전부 다 잘 챙겨주세요!",
    "detail": "회화미술학원이고 성적이 낮은 친구들도 이대를 굉장히 잘 보냅니다! 근데 원장님이 좀 무서우시고 못그리는 친구들에게는 좀 지적을 많이 하셔서 무서워요..하지만 학원 다니면서 쌤 말대로만하면 무조건 붙을것같다는 생각이들었어요! 커리큘럼이 매우 잘 짜여있고 학생이 많은데도 불구하고 전부 다 잘 챙겨주세요!",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2025년",
    "attendedPeriod": "",
    "admissionResult": "합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함"
    ]
  },
  {
    "id": "google-form-20260615-new-review-051",
    "sourceRow": 52,
    "timestamp": "2026. 6. 14 오후 9:30:17",
    "academyNameRaw": "대전 미공미술학원",
    "academyId": "daejeon-migong-art",
    "academyName": "미공미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "3",
    "assignmentAmount": "1",
    "schoolTextRaw": "한예종 중심",
    "reviewSchoolTagsRaw": [
      "한예종 중심"
    ],
    "reviewSchoolTags": [
      "한국예술종합학교"
    ],
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackRaw": "친절하게 설명함, 스스로 생각하게 유도함, 피드백이 감정적으로 느껴질 때가 있음, 학생마다 관리 차이가 느껴짐",
    "feedbackTags": [
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "피드백이 감정적으로 느껴질 때가 있음",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodRaw": "학원 분위기가 좋음, 개별 관리가 잘됨",
    "goodTags": [
      "학원 분위기가 좋음",
      "개별 관리가 잘됨"
    ],
    "concernRaw": "학생별 관리나 피드백 차이가 느껴졌음",
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "일반 미술학원처럼 “입시”에 치중하는 느낌보단, 앞으로 향후 “예술”을 하는 삶을 생각하며 지도하는 느낌이 강함. 때문에 한예종 유형의 입시(포트폴리오 유형)을 준비한다면 큰 도움을 받을 수 있음. 인체수채화처럼 정형적인 입시 유형에서는 “소수 정예”라는 학원의 특징이 강점이 될 수도 단점이 될 수도 있음.3까지 도달할 수 있는 학생을 단기간에 5로 만드는 학원은 아님.단순 대학을 넘우 내가 왜 미술을 해야하지? 따위의 생각이나 근본적인 질문을 하는 것에 선호한다면 추천함. 학원비가 매우 싼 편임.체계적인 커리큘럼이 없음.\n때문에 년도마다 분위기,방향,수업 방식이 달라 확고히 규정해 말할 수 없음",
    "detail": "일반 미술학원처럼 “입시”에 치중하는 느낌보단, 앞으로 향후 “예술”을 하는 삶을 생각하며 지도하는 느낌이 강함. 때문에 한예종 유형의 입시(포트폴리오 유형)을 준비한다면 큰 도움을 받을 수 있음. 인체수채화처럼 정형적인 입시 유형에서는 “소수 정예”라는 학원의 특징이 강점이 될 수도 단점이 될 수도 있음.3까지 도달할 수 있는 학생을 단기간에 5로 만드는 학원은 아님.단순 대학을 넘우 내가 왜 미술을 해야하지? 따위의 생각이나 근본적인 질문을 하는 것에 선호한다면 추천함. 학원비가 매우 싼 편임.체계적인 커리큘럼이 없음.\n때문에 년도마다 분위기,방향,수업 방식이 달라 확고히 규정해 말할 수 없음",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "",
    "attendedPeriod": "5년정도(중1-재수)",
    "admissionResult": "합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-052",
    "sourceRow": 53,
    "timestamp": "2026. 6. 14 오후 10:12:49",
    "academyNameRaw": "홍대 네오캣 학원",
    "academyId": "hongdae-neocat-art",
    "academyName": "네오캣미술학원 홍대",
    "academyMatchStatus": "suggested",
    "rating": 3,
    "atmosphere": "3",
    "assignmentAmount": "1",
    "schoolTextRaw": "고대중심",
    "reviewSchoolTagsRaw": [
      "고대중심"
    ],
    "reviewSchoolTags": [
      "고려대학교"
    ],
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackRaw": "친절하게 설명함, 말투가 직설적인 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    "feedbackTags": [
      "친절하게 설명함",
      "말투가 직설적인 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "질문하기 편함, 학원 분위기가 좋음",
    "goodTags": [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    "concernRaw": "상담과 실제 수업에서 차이가 느껴짐",
    "concernTags": [
      "상담과 실제 수업에서 차이가 느껴짐"
    ],
    "cautionRaw": "선생님 스타일 확인 필요",
    "cautionTags": [
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "고려대 준비하면 추천 작년 홍대지구 연합시험에서 우리 학원만 A+받았음 그 외 학교는 굳이? 커리큘럼이 탄탄한 것도 아님 고대>기소>기디 순서로 추천하고 실제로 그쪽을 밀어줌 가군 주력으로 하기 때문에 기소하는 사람들은 성적 관리 잘하길 선생님들 다 편하고 분위기 좋음",
    "detail": "고려대 준비하면 추천 작년 홍대지구 연합시험에서 우리 학원만 A+받았음 그 외 학교는 굳이? 커리큘럼이 탄탄한 것도 아님 고대>기소>기디 순서로 추천하고 실제로 그쪽을 밀어줌 가군 주력으로 하기 때문에 기소하는 사람들은 성적 관리 잘하길 선생님들 다 편하고 분위기 좋음",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-053",
    "sourceRow": 54,
    "timestamp": "2026. 6. 14 오후 10:17:04",
    "academyNameRaw": "계양 c&c",
    "academyId": "incheon-gyeyang-cnc-art",
    "academyName": "계양C&C미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "2",
    "assignmentAmount": "1",
    "schoolTextRaw": "국민대 중심",
    "reviewSchoolTagsRaw": [
      "국민대 중심"
    ],
    "reviewSchoolTags": [
      "국민대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "꼼꼼하게 설명함, 친절하게 설명함",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    "goodRaw": "기본기를 잘 잡아줌, 개별 관리가 잘됨",
    "goodTags": [
      "기본기를 잘 잡아줌",
      "개별 관리가 잘됨"
    ],
    "concernRaw": "학원 분위기가 나와 맞지 않았음",
    "concernTags": [
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionRaw": "",
    "cautionTags": [],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "학생 개별 피드백이 되게 잘 되어있어용 약 3년 가량 다녔는데 시범도 잘 보여주셔서 되게 많이 도움이 되었구 쌩초보부터 시작했는데 잘 맞춰서 지도해주셔서 되게 좋았어요! 쌤들 친절하시구 분위기 조금 자유로운 편이예요 참고하시면 좋겠습니당",
    "detail": "학생 개별 피드백이 되게 잘 되어있어용 약 3년 가량 다녔는데 시범도 잘 보여주셔서 되게 많이 도움이 되었구 쌩초보부터 시작했는데 잘 맞춰서 지도해주셔서 되게 좋았어요! 쌤들 친절하시구 분위기 조금 자유로운 편이예요 참고하시면 좋겠습니당",
    "detailPublic": null,
    "writerStatus": "고3",
    "attendedYear": "24-26",
    "attendedPeriod": "약 3년",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-054",
    "sourceRow": 55,
    "timestamp": "2026. 6. 14 오후 10:53:17",
    "academyNameRaw": "강남 고도",
    "academyId": "gangnam-godo-art",
    "academyName": "강남 고도미술학원",
    "academyMatchStatus": "suggested",
    "rating": 2,
    "atmosphere": "1",
    "assignmentAmount": "3",
    "schoolTextRaw": "서울대",
    "reviewSchoolTagsRaw": [
      "서울대"
    ],
    "reviewSchoolTags": [
      "서울대학교"
    ],
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackRaw": "말투가 직설적인 편임, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    "feedbackTags": [
      "말투가 직설적인 편임",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "입시 정보가 많음, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    "goodTags": [
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernRaw": "학생별 관리나 피드백 차이가 느껴졌음, 초보자가 따라가기 어려움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "초보자가 따라가기 어려움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "예비반은 꼼꼼하고 관리가 좋으나, 입시반에 가게 되었을 때 선생님마다 편차가 심했으며, 학생들이 스스로 미친듯이 따라가야만 속도를 맞출 수 있습니다 시험정보나 자료는 감각있고 좋다는 생각을 했습니다 다만 성적에 따른 차별도 분명히 존재해서 거의 안 봐주는 학생들도 존재했었습니다 (강평 시간차이등)본인이 성적대가 좋고 실기실력이 상위권이라면 도움을 받을 거 같습니다",
    "detail": "예비반은 꼼꼼하고 관리가 좋으나, 입시반에 가게 되었을 때 선생님마다 편차가 심했으며, 학생들이 스스로 미친듯이 따라가야만 속도를 맞출 수 있습니다 시험정보나 자료는 감각있고 좋다는 생각을 했습니다 다만 성적에 따른 차별도 분명히 존재해서 거의 안 봐주는 학생들도 존재했었습니다 (강평 시간차이등)본인이 성적대가 좋고 실기실력이 상위권이라면 도움을 받을 거 같습니다",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2022 2023",
    "attendedPeriod": "1년 반",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-055",
    "sourceRow": 56,
    "timestamp": "2026. 6. 14 오후 11:09:54",
    "academyNameRaw": "대구 클라우드클릭학원",
    "academyId": "daegu-suseong-cloud-click-art",
    "academyName": "대구 수성클라우드미술학원",
    "academyMatchStatus": "suggested",
    "rating": 2,
    "atmosphere": "2",
    "assignmentAmount": "1",
    "schoolTextRaw": "국민대 중심",
    "reviewSchoolTagsRaw": [
      "국민대 중심"
    ],
    "reviewSchoolTags": [
      "국민대학교"
    ],
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackRaw": "피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 선생님마다 편차가 심함",
    "feedbackTags": [
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임",
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "실전 감각을 키우기 좋음, 특별히 없음",
    "goodTags": [
      "실전 감각을 키우기 좋음",
      "특별히 없음"
    ],
    "concernRaw": "입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    "concernTags": [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 스스로 질문해야 놓치지 않음, 선생님 스타일 확인 필요",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "스스로 질문해야 놓치지 않음",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "반마다 다르고 선생님마다 다름. 같은 반이었어도 선생님들이 매번 바뀌어서 해마다 분위기가 다름. 기초디자인은 몰라도 기초소양은 색연필로 대학에 간 선생님들이 한명도 없어서 전임선생님 한 분과 선릉에서 출강하시는 선생님 수업과 기초소양 보조선생님을 1년 이상 하신 선생님 빼고 나머지 보조쌤들의 실력은 좋지 않음. 기초소양으로 n수하는 학생들이 그 보조쌤들보다 실력이 훨씬 좋은 정도이고 기디에서 기소로 넘어온 사람들 같은 경우에는 기본기를 다지지 못한채로 진도를 따라가고 있음.\n기초소양을 준비하는 학생의 성적이 너무 안 좋아도 공부를 위한 수업 시간 조정에 어려움이 있고 방학특강을 강요함. 정시 실기를 준비하면서 수시로 비실기 대학을 준비해도 방학특강 시수 조정에 어려움이 있음.",
    "detail": "반마다 다르고 선생님마다 다름. 같은 반이었어도 선생님들이 매번 바뀌어서 해마다 분위기가 다름. 기초디자인은 몰라도 기초소양은 색연필로 대학에 간 선생님들이 한명도 없어서 전임선생님 한 분과 선릉에서 출강하시는 선생님 수업과 기초소양 보조선생님을 1년 이상 하신 선생님 빼고 나머지 보조쌤들의 실력은 좋지 않음. 기초소양으로 n수하는 학생들이 그 보조쌤들보다 실력이 훨씬 좋은 정도이고 기디에서 기소로 넘어온 사람들 같은 경우에는 기본기를 다지지 못한채로 진도를 따라가고 있음.\n기초소양을 준비하는 학생의 성적이 너무 안 좋아도 공부를 위한 수업 시간 조정에 어려움이 있고 방학특강을 강요함. 정시 실기를 준비하면서 수시로 비실기 대학을 준비해도 방학특강 시수 조정에 어려움이 있음.",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "작년에는 비실기 대학 준비로 현재 미술학원에서 실기학원을 다니지 않아서 불합격 사유가 현재 학원 때문은 아닙니다!",
    "attendedPeriod": "",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-056",
    "sourceRow": 57,
    "timestamp": "2026. 6. 14 오후 11:19:41",
    "academyNameRaw": "신사 키마미술학원",
    "academyId": "sinsa-kima-art",
    "academyName": "키마미술학원",
    "academyMatchStatus": "suggested",
    "rating": 2,
    "atmosphere": "5",
    "assignmentAmount": "1",
    "schoolTextRaw": "여러 학교 가능",
    "reviewSchoolTagsRaw": [
      "여러 학교 가능"
    ],
    "reviewSchoolTags": [],
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackRaw": "학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    "feedbackTags": [
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "특별히 없음",
    "goodTags": [
      "특별히 없음"
    ],
    "concernRaw": "입결·합격 사례 설명이 과장되어 보였음",
    "concernTags": [
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    "cautionRaw": "선생님 스타일 확인 필요",
    "cautionTags": [
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "선화예고 내신 실기를 위한 학원으로는그래도 나쁘다고 생각하지는 않았지만 대입에는 적합하다고 생각하지않았어요. 커리큘럼이 짜여져 있는 것이 아닌 즉흥적이였던 것 같아서 힘들었던 것 같고요. 그리고 원장님은 대부분 방에만 계셨던 것 같은데 돈이 그 대비 너무 부담스러웠던 것 같습니다.",
    "detail": "선화예고 내신 실기를 위한 학원으로는그래도 나쁘다고 생각하지는 않았지만 대입에는 적합하다고 생각하지않았어요. 커리큘럼이 짜여져 있는 것이 아닌 즉흥적이였던 것 같아서 힘들었던 것 같고요. 그리고 원장님은 대부분 방에만 계셨던 것 같은데 돈이 그 대비 너무 부담스러웠던 것 같습니다.",
    "detailPublic": null,
    "writerStatus": "고3",
    "attendedYear": "2024년-2025년",
    "attendedPeriod": "1년",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-057",
    "sourceRow": 58,
    "timestamp": "2026. 6. 15 오전 1:02:33",
    "academyNameRaw": "선릉 오투미술학원",
    "academyId": "gangnam-o2-art",
    "academyName": "오투미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "5",
    "assignmentAmount": "5",
    "schoolTextRaw": "국민대 중심",
    "reviewSchoolTagsRaw": [
      "국민대 중심"
    ],
    "reviewSchoolTags": [
      "국민대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "스스로 생각하게 유도함, 말투가 직설적인 편임",
    "feedbackTags": [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    "goodRaw": "기본기를 잘 잡아줌, 학원 분위기가 좋음, 입시 정보가 많음, 자료/시범이 도움됨, 개별 관리가 잘됨",
    "goodTags": [
      "기본기를 잘 잡아줌",
      "학원 분위기가 좋음",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    "concernRaw": "과제량이 부담스러움",
    "concernTags": [
      "과제량이 부담스러움"
    ],
    "cautionRaw": "멘탈 관리가 필요함",
    "cautionTags": [
      "멘탈 관리가 필요함"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "가장 좋은점은 비교적 학원비가 가장 저렴한 학원이었어요!\n그럼에도 불구하고 선생님들이 엄청 많고 학생수가 적은 학원이어서 거의 1대3 과외받듯 수업이 진행되었어요\n엄청엄청 과제량이 많았어요 그래서 정시특강때는 오전 9시부터 밤10시까지 학원에서 있다가 11시부터 새벽 3시까지 과제를 해야했습니다\n과제진행방식은 학원 선생님들이 관리해주시는 학생개인 피드백방이 있고 그 피드백방에 학생이 하루그린그림에대한 강평내용이나 이것저것 알게된내용과 다음시험을 위한 스케치 연습, 아이디어스케치를 제출하고 선생님들께서 그 내용을 보시고 하나하나 답변해주시고 아이디어스케치를 수정해주시기도하시며 새벽까지 열심히 해주세요\n원장선생님께서 직접 강평과 수업 피드백 전부 해주시는데 새벽4시까지 주무시지못하시고 저희 한명한명읗 케어해주셨습니다\n이외 선생님들 5분께서 하나하나 꼼꼼히 봐주신 덕에 금방금방 실력이 늘수 있었습니다\n오전에 일찍나와서 그림을 더 예습하는것을 추천하셔서 학원생들이 7시부터 나와서 그림을 그리기도합니다\n소수라서 자유로운 분위기임에도 진지하게 임하게 지도해주시고 가끔 재밌는 이야기와 맛있는 음식도 사주셔서 좋았습니다\n정말 가족같은 분위기에 학원입니다\n지금은 이학원을 잠깐 나와있는데 그럼에도불구하고 저를 오투인으로 소속감을 느끼게해주시는 말들과 메세지들을 가끔 보내주십니다\n힘든 시간속에서도 응원으로 일어서게해주시는 선생님들이 있는\n좋은 학원입니다!!",
    "detail": "가장 좋은점은 비교적 학원비가 가장 저렴한 학원이었어요!\n그럼에도 불구하고 선생님들이 엄청 많고 학생수가 적은 학원이어서 거의 1대3 과외받듯 수업이 진행되었어요\n엄청엄청 과제량이 많았어요 그래서 정시특강때는 오전 9시부터 밤10시까지 학원에서 있다가 11시부터 새벽 3시까지 과제를 해야했습니다\n과제진행방식은 학원 선생님들이 관리해주시는 학생개인 피드백방이 있고 그 피드백방에 학생이 하루그린그림에대한 강평내용이나 이것저것 알게된내용과 다음시험을 위한 스케치 연습, 아이디어스케치를 제출하고 선생님들께서 그 내용을 보시고 하나하나 답변해주시고 아이디어스케치를 수정해주시기도하시며 새벽까지 열심히 해주세요\n원장선생님께서 직접 강평과 수업 피드백 전부 해주시는데 새벽4시까지 주무시지못하시고 저희 한명한명읗 케어해주셨습니다\n이외 선생님들 5분께서 하나하나 꼼꼼히 봐주신 덕에 금방금방 실력이 늘수 있었습니다\n오전에 일찍나와서 그림을 더 예습하는것을 추천하셔서 학원생들이 7시부터 나와서 그림을 그리기도합니다\n소수라서 자유로운 분위기임에도 진지하게 임하게 지도해주시고 가끔 재밌는 이야기와 맛있는 음식도 사주셔서 좋았습니다\n정말 가족같은 분위기에 학원입니다\n지금은 이학원을 잠깐 나와있는데 그럼에도불구하고 저를 오투인으로 소속감을 느끼게해주시는 말들과 메세지들을 가끔 보내주십니다\n힘든 시간속에서도 응원으로 일어서게해주시는 선생님들이 있는\n좋은 학원입니다!!",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "2024",
    "attendedPeriod": "3개월",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-058",
    "sourceRow": 59,
    "timestamp": "2026. 6. 15 오전 7:07:51",
    "academyNameRaw": "선릉 파라오",
    "academyId": "gangnam-pharaoh-art",
    "academyName": "강남 파라오미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "1",
    "assignmentAmount": "1",
    "schoolTextRaw": "이대",
    "reviewSchoolTagsRaw": [
      "이대"
    ],
    "reviewSchoolTags": [
      "이화여자대학교"
    ],
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackRaw": "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 친절하게 설명함",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "친절하게 설명함"
    ],
    "goodRaw": "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨",
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨"
    ],
    "concernRaw": "초보자가 따라가기 어려움",
    "concernTags": [
      "초보자가 따라가기 어려움"
    ],
    "cautionRaw": "과제 시간을 확보해야 함",
    "cautionTags": [
      "과제 시간을 확보해야 함"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "소형학원이라서 개별관리는 매우좋지만 인원수가 작아서 비교할 그림이 부족함",
    "detail": "소형학원이라서 개별관리는 매우좋지만 인원수가 작아서 비교할 그림이 부족함",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "2024",
    "attendedPeriod": "2년",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-059",
    "sourceRow": 60,
    "timestamp": "2026. 6. 15 오전 9:25:12",
    "academyNameRaw": "선릉 대치스터디앤아트",
    "academyId": "seolleung-study-and-art",
    "academyName": "스터디앤아트미술학원",
    "academyMatchStatus": "suggested",
    "rating": 3,
    "atmosphere": "4",
    "assignmentAmount": "2",
    "schoolTextRaw": "홍대",
    "reviewSchoolTagsRaw": [
      "홍대"
    ],
    "reviewSchoolTags": [
      "홍익대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함"
    ],
    "goodRaw": "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 집중이 잘되는 분위기임",
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임"
    ],
    "concernRaw": "학생별 관리나 피드백 차이가 느껴졌음",
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    "cautionRaw": "",
    "cautionTags": [],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "자유로운 느낌이 강했습니다. 기본기를 다지면서도 원장님 영향인지 자유로운 느낌이 강한게 장점이자 단점이었습니다. 밀도를 무조건적으로 올리는 스타일은 아닌 것 같아용 그림의 밀도는 어느정도 있어야하지만 밀도만 요구하는게 아니라 전체적인 조화를 추구하는 느낌.. 근데 지금은 담당 쌤이 바뀌셨다고 들어서 잘 모르겠습니당",
    "detail": "자유로운 느낌이 강했습니다. 기본기를 다지면서도 원장님 영향인지 자유로운 느낌이 강한게 장점이자 단점이었습니다. 밀도를 무조건적으로 올리는 스타일은 아닌 것 같아용 그림의 밀도는 어느정도 있어야하지만 밀도만 요구하는게 아니라 전체적인 조화를 추구하는 느낌.. 근데 지금은 담당 쌤이 바뀌셨다고 들어서 잘 모르겠습니당",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "2024",
    "attendedPeriod": "6개월",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-060",
    "sourceRow": 61,
    "timestamp": "2026. 6. 15 오전 10:37:51",
    "academyNameRaw": "부산 시각미술학원",
    "academyId": "busan-sigak-art",
    "academyName": "시각미술학원",
    "academyMatchStatus": "suggested",
    "rating": 2,
    "atmosphere": "3",
    "assignmentAmount": "1",
    "schoolTextRaw": "기소반은 국민대(지금은 모르겠으나 국민대말고다른학교는 어쩌다 한번 함)기디반은 잘 모르겠으나 부산안에있는대학에 강함",
    "reviewSchoolTagsRaw": [
      "기소반은 국민대(지금은 모르겠으나 국민대말고다른학교는 어쩌다 한번 함)기디반은 잘 모르겠으나 부산안에있는대학에 강함"
    ],
    "reviewSchoolTags": [
      "국민대학교"
    ],
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackRaw": "선생님마다 편차가 심함",
    "feedbackTags": [
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "특별히 없음",
    "goodTags": [
      "특별히 없음"
    ],
    "concernRaw": "학생별 관리나 피드백 차이가 느껴졌음, 입결·합격 사례 설명이 과장되어 보였음",
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "입결·합격 사례 설명이 과장되어 보였음"
    ],
    "cautionRaw": "",
    "cautionTags": [],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "고2때부터 기소반에 있었고 정특도 1번함. 입시반은 전임쌤 두명이서 매해 기소기디 번갈아가면서 하시는거같은데 두 쌤 스타일 차이가 너무큼.(한분은 부족한부분 있더라도 일단 넘어가고 다음그림에 보완 / 한분은 무조건 이 그림에서 완벽하게 한다음 넘어감) 같은그림을 두쌤한테물어보면 피드백이 다르고 한쌤 말대로하면 다른쌤은 다르게 하라 함. 이 두전임쌤과 원장의 말이 또 다름 그러면 이제 피드백 3개가 다 말이달라서 학생입장에서는 혼란스러움. 모의고사보면 기소대학쓸수있는 성적아닌데 기소반이면 성적떨어져도 기디반 안보내고 기디병행도 안시키고 성적상담 한번도 안함.\n결국 수능치고 성적떨어져서 정특때 기디하는 애들많음. 장점은 학원에 애들이 많아서 볼수있는 그림이 많고(기소반은 20명정도?기디반은 60명?정도됐던거같음) 서울에서 3주에 1번인가 원장이나 전임쌤 내려와서 그림평가하고 설명해줌.서울학원과 커리큘럼 똑같음.(연계학원) 기본기를 잘 잡아주지도 않고 (ex)그림자 설명 한적없는데 당연히 아는거아니냐고 함))(본인 밑에학년부터 2학년담당쌤이 바뀌어서 이젠 아닐수도있음) 입결만 보면 좋은데 이건 정특때 서울연계학원가서 정특하는거랑 그냥 그림을 잘그리는 사람이라서 입결이 좋은거지 학원덕분은 아님. 추천하지않아요...가깝고 부산에 대형학원이랑 기소하는애들이 많이 없어서,서울연계학원때문에 다닌거지 다녔던 그리고 다니면서 모두가 욕함",
    "detail": "고2때부터 기소반에 있었고 정특도 1번함. 입시반은 전임쌤 두명이서 매해 기소기디 번갈아가면서 하시는거같은데 두 쌤 스타일 차이가 너무큼.(한분은 부족한부분 있더라도 일단 넘어가고 다음그림에 보완 / 한분은 무조건 이 그림에서 완벽하게 한다음 넘어감) 같은그림을 두쌤한테물어보면 피드백이 다르고 한쌤 말대로하면 다른쌤은 다르게 하라 함. 이 두전임쌤과 원장의 말이 또 다름 그러면 이제 피드백 3개가 다 말이달라서 학생입장에서는 혼란스러움. 모의고사보면 기소대학쓸수있는 성적아닌데 기소반이면 성적떨어져도 기디반 안보내고 기디병행도 안시키고 성적상담 한번도 안함.\n결국 수능치고 성적떨어져서 정특때 기디하는 애들많음. 장점은 학원에 애들이 많아서 볼수있는 그림이 많고(기소반은 20명정도?기디반은 60명?정도됐던거같음) 서울에서 3주에 1번인가 원장이나 전임쌤 내려와서 그림평가하고 설명해줌.서울학원과 커리큘럼 똑같음.(연계학원) 기본기를 잘 잡아주지도 않고 (ex)그림자 설명 한적없는데 당연히 아는거아니냐고 함))(본인 밑에학년부터 2학년담당쌤이 바뀌어서 이젠 아닐수도있음) 입결만 보면 좋은데 이건 정특때 서울연계학원가서 정특하는거랑 그냥 그림을 잘그리는 사람이라서 입결이 좋은거지 학원덕분은 아님. 추천하지않아요...가깝고 부산에 대형학원이랑 기소하는애들이 많이 없어서,서울연계학원때문에 다닌거지 다녔던 그리고 다니면서 모두가 욕함",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "2022~2025",
    "attendedPeriod": "3년반",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-061",
    "sourceRow": 62,
    "timestamp": "2026. 6. 15 오후 2:38:45",
    "academyNameRaw": "양재 고도학원",
    "academyId": "gangnam-godo-art",
    "academyName": "강남 고도미술학원",
    "academyMatchStatus": "suggested",
    "rating": 2,
    "atmosphere": "4",
    "assignmentAmount": "2",
    "schoolTextRaw": "서울대 중심, 이화여대 중심",
    "reviewSchoolTagsRaw": [
      "서울대 중심, 이화여대 중심"
    ],
    "reviewSchoolTags": [
      "이화여자대학교",
      "서울대학교"
    ],
    "difficulty": "어느 정도 실력이 필요해요",
    "feedbackRaw": "스스로 생각하게 유도함, 말투가 직설적인 편임, 선생님마다 편차가 심함",
    "feedbackTags": [
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "집중이 잘되는 분위기임, 특별히 없음",
    "goodTags": [
      "집중이 잘되는 분위기임",
      "특별히 없음"
    ],
    "concernRaw": "상담과 실제 수업에서 차이가 느껴짐, 입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    "concernTags": [
      "상담과 실제 수업에서 차이가 느껴짐",
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 체험 수업 후 결정 추천",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "체험 수업 후 결정 추천"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "처음에는 서울대 입결이 매우 좋다하여 학원에 갔지만, 오히려 실제 합격은 N수생이 대부분이고 고3은 거의 없었음. 또한 학생별로 신경을 많이 써주지 않고 공부가 중요한 상위권 입시임에도 윈터스쿨은 절대 가지 말고 실기를 절대 빠지지 말라는 등 실기에 힘을 줬음. 그렇게 해서 정특때 한 학생의 수능성적 하락으로 기소에서 기디로 갑자기 바꾸게 했다는 사례를 말하며 무책임한 태도를 보임.수업 중에도 학생들에게 미술에 관한 얘기를 하다가도 중간중간에 용어나 예시들이 교육적이지 못하고 매우 부적절했음.\n장점은 그래도 직접 그림을 그리도록 원리를 설명해주고, 비교군이 많아서 평가때 객관적 위치 파악에 도움이 되었다.. 정도 있다.",
    "detail": "처음에는 서울대 입결이 매우 좋다하여 학원에 갔지만, 오히려 실제 합격은 N수생이 대부분이고 고3은 거의 없었음. 또한 학생별로 신경을 많이 써주지 않고 공부가 중요한 상위권 입시임에도 윈터스쿨은 절대 가지 말고 실기를 절대 빠지지 말라는 등 실기에 힘을 줬음. 그렇게 해서 정특때 한 학생의 수능성적 하락으로 기소에서 기디로 갑자기 바꾸게 했다는 사례를 말하며 무책임한 태도를 보임.수업 중에도 학생들에게 미술에 관한 얘기를 하다가도 중간중간에 용어나 예시들이 교육적이지 못하고 매우 부적절했음.\n장점은 그래도 직접 그림을 그리도록 원리를 설명해주고, 비교군이 많아서 평가때 객관적 위치 파악에 도움이 되었다.. 정도 있다.",
    "detailPublic": null,
    "writerStatus": "고3",
    "attendedYear": "2025",
    "attendedPeriod": "",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-062",
    "sourceRow": 63,
    "timestamp": "2026. 6. 15 오후 9:31:15",
    "academyNameRaw": "선릉 안테나",
    "academyId": "gangnam-antenna-art",
    "academyName": "강남 안테나미술학원",
    "academyMatchStatus": "suggested",
    "rating": 3,
    "atmosphere": "2",
    "assignmentAmount": "1",
    "schoolTextRaw": "성균관대",
    "reviewSchoolTagsRaw": [
      "성균관대"
    ],
    "reviewSchoolTags": [
      "성균관대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음",
    "feedbackTags": [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음"
    ],
    "goodRaw": "피드백이 꼼꼼함, 질문하기 편함, 입시 정보가 많음",
    "goodTags": [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "입시 정보가 많음"
    ],
    "concernRaw": "학원 분위기가 나와 맞지 않았음",
    "concernTags": [
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionRaw": "선생님 스타일 확인 필요",
    "cautionTags": [
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "정특때 급하게 성대 준비하러 갔었는데 일단 원래 있던 학생들이 기본기가 안잡혀잇는 느낌이 있엇고 미술을 가르친다기보단 학교에 특화된.. 학교에 갈수 있는 팁? 같은걸 배우는 느낌이었습니다",
    "detail": "정특때 급하게 성대 준비하러 갔었는데 일단 원래 있던 학생들이 기본기가 안잡혀잇는 느낌이 있엇고 미술을 가르친다기보단 학교에 특화된.. 학교에 갈수 있는 팁? 같은걸 배우는 느낌이었습니다",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "2025",
    "attendedPeriod": "정특",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-063",
    "sourceRow": 64,
    "timestamp": "2026. 6. 15 오후 9:31:47",
    "academyNameRaw": "홍대 그린섬",
    "academyId": "hongdae-greensum-art",
    "academyName": "홍대앞 그린섬미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "3",
    "assignmentAmount": "1",
    "schoolTextRaw": "제가 입시할 땐 국민대 중심이었는데.. 올해 서울대 파티더라고요",
    "reviewSchoolTagsRaw": [
      "제가 입시할 땐 국민대 중심이었는데.. 올해 서울대 파티더라고요"
    ],
    "reviewSchoolTags": [
      "국민대학교",
      "서울대학교"
    ],
    "difficulty": "기본기가 있으면 좋아요",
    "feedbackRaw": "차분하고 존중하는 분위기였음, 꼼꼼하게 설명함, 말투가 직설적인 편임",
    "feedbackTags": [
      "차분하고 존중하는 분위기였음",
      "꼼꼼하게 설명함",
      "말투가 직설적인 편임"
    ],
    "goodRaw": "커리큘럼이 좋음",
    "goodTags": [
      "커리큘럼이 좋음"
    ],
    "concernRaw": "특별히 없음",
    "concernTags": [
      "특별히 없음"
    ],
    "cautionRaw": "멘탈 관리가 필요함",
    "cautionTags": [
      "멘탈 관리가 필요함"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "엄… 학교는 떨어졌지만 디자인적 사고를 잘 가르쳐주셨습니다",
    "detail": "엄… 학교는 떨어졌지만 디자인적 사고를 잘 가르쳐주셨습니다",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2024",
    "attendedPeriod": "1",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-064",
    "sourceRow": 65,
    "timestamp": "2026. 6. 15 오후 9:41:33",
    "academyNameRaw": "대전 C&C 학원",
    "academyId": "daejeon-dunsan-cnc-art",
    "academyName": "씨앤씨미술학원 대전둔산캠퍼스",
    "academyMatchStatus": "suggested",
    "rating": 3,
    "atmosphere": "4",
    "assignmentAmount": "3",
    "schoolTextRaw": "국민대, 이화여대, 서울대",
    "reviewSchoolTagsRaw": [
      "국민대, 이화여대, 서울대"
    ],
    "reviewSchoolTags": [
      "이화여자대학교",
      "국민대학교",
      "서울대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임",
    "feedbackTags": [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임"
    ],
    "goodRaw": "특별히 없음",
    "goodTags": [
      "특별히 없음"
    ],
    "concernRaw": "입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    "concernTags": [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 선생님 스타일 확인 필요",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "기본기를 배우고 숙지하는 데에는 도움이 되었지만, 멘탈이 약한 친구들에게는 추천하지 않습니다. 하지만 학교 중심으로 준비할 때에는 집중 관리를 받는 점이 좋았습니다.",
    "detail": "기본기를 배우고 숙지하는 데에는 도움이 되었지만, 멘탈이 약한 친구들에게는 추천하지 않습니다. 하지만 학교 중심으로 준비할 때에는 집중 관리를 받는 점이 좋았습니다.",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2023년, 2024년",
    "attendedPeriod": "1년 반",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-065",
    "sourceRow": 66,
    "timestamp": "2026. 6. 15 오후 9:52:27",
    "academyNameRaw": "홍성 디자인유에프오",
    "academyId": "hongseong-design-ufo-art",
    "academyName": "디자인유에프오미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "4",
    "assignmentAmount": "1",
    "schoolTextRaw": "상명대, 건대",
    "reviewSchoolTagsRaw": [
      "상명대, 건대"
    ],
    "reviewSchoolTags": [
      "건국대학교",
      "상명대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "친절하게 설명함, 스스로 생각하게 유도함, 학생마다 관리 차이가 느껴짐",
    "feedbackTags": [
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "학생마다 관리 차이가 느껴짐"
    ],
    "goodRaw": "질문하기 편함, 학원 분위기가 좋음",
    "goodTags": [
      "질문하기 편함",
      "학원 분위기가 좋음"
    ],
    "concernRaw": "학생별 관리나 피드백 차이가 느껴졌음",
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음"
    ],
    "cautionRaw": "스스로 질문해야 놓치지 않음, 과제 시간을 확보해야 함",
    "cautionTags": [
      "스스로 질문해야 놓치지 않음",
      "과제 시간을 확보해야 함"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "수업 분위기는 편안하며 선생님들도 대부분 착하셨다. 하라는 방향대로 하지 않고 다른 방향으로 가면 가끔 화를 내신다. 그 외에는 화를 내려고 하지 않으신다. 그러나 전문적인 입시를 다루기에 수도권 또는 유명 학원과는 수업의 전문성 부분에서 차이가 느껴졌음",
    "detail": "수업 분위기는 편안하며 선생님들도 대부분 착하셨다. 하라는 방향대로 하지 않고 다른 방향으로 가면 가끔 화를 내신다. 그 외에는 화를 내려고 하지 않으신다. 그러나 전문적인 입시를 다루기에 수도권 또는 유명 학원과는 수업의 전문성 부분에서 차이가 느껴졌음",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "",
    "attendedPeriod": "1년",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-066",
    "sourceRow": 67,
    "timestamp": "2026. 6. 15 오후 9:56:08",
    "academyNameRaw": "강남 아이엠",
    "academyId": "seolleung-iam-art",
    "academyName": "아이엠미술학원",
    "academyMatchStatus": "suggested",
    "rating": 2,
    "atmosphere": "4",
    "assignmentAmount": "3",
    "schoolTextRaw": "국민대",
    "reviewSchoolTagsRaw": [
      "국민대"
    ],
    "reviewSchoolTags": [
      "국민대학교"
    ],
    "difficulty": "상급자에게 적합해요 (초보자 비추)",
    "feedbackRaw": "말투가 직설적인 편임, 피드백이 감정적으로 느껴질 때가 있음, 칭찬보다 지적이 많은 편임, 학생마다 관리 차이가 느껴짐, 선생님마다 편차가 심함",
    "feedbackTags": [
      "말투가 직설적인 편임",
      "피드백이 감정적으로 느껴질 때가 있음",
      "칭찬보다 지적이 많은 편임",
      "학생마다 관리 차이가 느껴짐",
      "선생님마다 편차가 심함"
    ],
    "goodRaw": "집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨",
    "goodTags": [
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨"
    ],
    "concernRaw": "입결·합격 사례 설명이 과장되어 보였음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음, 학원 분위기가 나와 맞지 않았음",
    "concernTags": [
      "입결·합격 사례 설명이 과장되어 보였음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
      "학원 분위기가 나와 맞지 않았음"
    ],
    "cautionRaw": "멘탈 관리가 필요함, 선생님 스타일 확인 필요, 비용/수업 방식으로 상담 때 확인 추천",
    "cautionTags": [
      "멘탈 관리가 필요함",
      "선생님 스타일 확인 필요",
      "비용/수업 방식으로 상담 때 확인 추천"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "현역 때 다녔던 미술학원이었는데 , 국민대반은 좋은 편이지만 기디반이 정말 별로였습니다. 담당쌤은 ( 아마 지금 없으신걸로 알고있긴한데) 거의 안들어오시고 주로 보조쌤들이 가르치시는데 다들 의견도 제각각이고 입시에 진심으로 다해주지 않는 느낌이었습니다. 감정적인 쌤도 있고 불편한쌤도 있고..\n보조쌤이 나쁜건 아니지만 갓합격한 분들보다는 베테랑 담임쌤과 더 수업하고싶었던 터라 불만족스러웠습니다. 제가 본 년도엔 건대가 딱 두명 붙었는데, 공홈에는 15명 이라고 적어놓고 합격자 명단을 공개하지 않았던거같기도합니다. 아마 지방 아이엠이랑 섞어서 발표한거같긴한데 명단자 발표 안한 이상 불투명한 입시학원이라고 생각했습니다. 지금 제가 수업 받았던 쌤이 안계시더라도 , 분위기나 입시 커리등은 바뀌지 않았을거라 생각해 정보 남깁니다. 국민대반은 엄격하게 관리되어있어서 나름 잘 보내는 편이라고 볼 수 있지만 기디반은 관리도 안되고 진짜 별로라고 생각합니다...",
    "detail": "현역 때 다녔던 미술학원이었는데 , 국민대반은 좋은 편이지만 기디반이 정말 별로였습니다. 담당쌤은 ( 아마 지금 없으신걸로 알고있긴한데) 거의 안들어오시고 주로 보조쌤들이 가르치시는데 다들 의견도 제각각이고 입시에 진심으로 다해주지 않는 느낌이었습니다. 감정적인 쌤도 있고 불편한쌤도 있고..\n보조쌤이 나쁜건 아니지만 갓합격한 분들보다는 베테랑 담임쌤과 더 수업하고싶었던 터라 불만족스러웠습니다. 제가 본 년도엔 건대가 딱 두명 붙었는데, 공홈에는 15명 이라고 적어놓고 합격자 명단을 공개하지 않았던거같기도합니다. 아마 지방 아이엠이랑 섞어서 발표한거같긴한데 명단자 발표 안한 이상 불투명한 입시학원이라고 생각했습니다. 지금 제가 수업 받았던 쌤이 안계시더라도 , 분위기나 입시 커리등은 바뀌지 않았을거라 생각해 정보 남깁니다. 국민대반은 엄격하게 관리되어있어서 나름 잘 보내는 편이라고 볼 수 있지만 기디반은 관리도 안되고 진짜 별로라고 생각합니다...",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2023",
    "attendedPeriod": "고2-고3",
    "admissionResult": "불합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함",
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  },
  {
    "id": "google-form-20260615-new-review-067",
    "sourceRow": 68,
    "timestamp": "2026. 6. 15 오후 9:56:55",
    "academyNameRaw": "강남 양재고도",
    "academyId": "gangnam-godo-art",
    "academyName": "강남 고도미술학원",
    "academyMatchStatus": "suggested",
    "rating": 4,
    "atmosphere": "1",
    "assignmentAmount": "1",
    "schoolTextRaw": "서울대고려대이대국민대",
    "reviewSchoolTagsRaw": [
      "서울대고려대이대국민대"
    ],
    "reviewSchoolTags": [
      "이화여자대학교",
      "국민대학교",
      "서울대학교",
      "고려대학교"
    ],
    "difficulty": "상급자에게 적합해요 (초보자 비추)",
    "feedbackRaw": "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임"
    ],
    "goodRaw": "집중이 잘되는 분위기임, 자료/시범이 도움됨, 개별 관리가 잘됨, 실전 감각을 키우기 좋음",
    "goodTags": [
      "집중이 잘되는 분위기임",
      "자료/시범이 도움됨",
      "개별 관리가 잘됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernRaw": "수업 속도가 빠르게 느껴졌음, 초보자가 따라가기 어려움, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    "concernTags": [
      "수업 속도가 빠르게 느껴졌음",
      "초보자가 따라가기 어려움",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionRaw": "멘탈 관리가 필요함",
    "cautionTags": [
      "멘탈 관리가 필요함"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "정특이라 예민할 시기긴 합니다만\n못그리는 친구들, 선생님이 서로 싫어하는게 느껴졌습니다\n멘탈약하다 - 다른 학원가세요\n다른 반이지만 학원에서 가끔 큰소리로 욕이 들리고 좀 놀랄때가 있었습니다\n그림을 잘그린다면 큰 문제 없을겁니다 잘그리면 혼나지 않아요\n선생님들 그림 잘그리십니다 좋습니다",
    "detail": "정특이라 예민할 시기긴 합니다만\n못그리는 친구들, 선생님이 서로 싫어하는게 느껴졌습니다\n멘탈약하다 - 다른 학원가세요\n다른 반이지만 학원에서 가끔 큰소리로 욕이 들리고 좀 놀랄때가 있었습니다\n그림을 잘그린다면 큰 문제 없을겁니다 잘그리면 혼나지 않아요\n선생님들 그림 잘그리십니다 좋습니다",
    "detailPublic": null,
    "writerStatus": "N수생",
    "attendedYear": "2025",
    "attendedPeriod": "",
    "admissionResult": "",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함"
    ]
  },
  {
    "id": "google-form-20260615-new-review-068",
    "sourceRow": 69,
    "timestamp": "2026. 6. 15 오후 10:09:53",
    "academyNameRaw": "선릉 메타코드",
    "academyId": "gangnam-metacode-ssam-art",
    "academyName": "메타코드쌤미술학원 강남본원",
    "academyMatchStatus": "suggested",
    "rating": 5,
    "atmosphere": "4",
    "assignmentAmount": "4",
    "schoolTextRaw": "국민대 위주",
    "reviewSchoolTagsRaw": [
      "국민대 위주"
    ],
    "reviewSchoolTags": [
      "국민대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 말투가 직설적인 편임",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "말투가 직설적인 편임"
    ],
    "goodRaw": "기본기를 잘 잡아줌, 집중이 잘되는 분위기임, 입시 정보가 많음, 자료/시범이 도움됨, 커리큘럼이 좋음, 실전 감각을 키우기 좋음",
    "goodTags": [
      "기본기를 잘 잡아줌",
      "집중이 잘되는 분위기임",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "커리큘럼이 좋음",
      "실전 감각을 키우기 좋음"
    ],
    "concernRaw": "특별히 없음",
    "concernTags": [
      "특별히 없음"
    ],
    "cautionRaw": "",
    "cautionTags": [],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "기본기 있다고 생각했던 사람인데도 불구하고 배울점이 많은 학원이라고 생각합니다 일단 원장님이 그림을 잘 그리시니 배울 게 많습니다",
    "detail": "기본기 있다고 생각했던 사람인데도 불구하고 배울점이 많은 학원이라고 생각합니다 일단 원장님이 그림을 잘 그리시니 배울 게 많습니다",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2025",
    "attendedPeriod": "1년",
    "admissionResult": "합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": []
  },
  {
    "id": "google-form-20260615-new-review-069",
    "sourceRow": 70,
    "timestamp": "2026. 6. 15 오후 10:49:59",
    "academyNameRaw": "대구 아트포엠학원",
    "academyId": "daegu-artpoem-art",
    "academyName": "대구 아트포엠미술학원",
    "academyMatchStatus": "suggested",
    "rating": 5,
    "atmosphere": "3",
    "assignmentAmount": "2",
    "schoolTextRaw": "국민대, 과기대",
    "reviewSchoolTagsRaw": [
      "국민대, 과기대"
    ],
    "reviewSchoolTags": [
      "서울과학기술대학교",
      "국민대학교"
    ],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "꼼꼼하게 설명함, 빠르게 핵심만 짚어줌, 친절하게 설명함, 스스로 생각하게 유도함, 말투가 직설적인 편임, 칭찬보다 지적이 많은 편임",
    "feedbackTags": [
      "꼼꼼하게 설명함",
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함",
      "스스로 생각하게 유도함",
      "말투가 직설적인 편임",
      "칭찬보다 지적이 많은 편임"
    ],
    "goodRaw": "피드백이 꼼꼼함, 질문하기 편함, 학원 분위기가 좋음, 실전 감각을 키우기 좋음",
    "goodTags": [
      "피드백이 꼼꼼함",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "실전 감각을 키우기 좋음"
    ],
    "concernRaw": "학생별 관리나 피드백 차이가 느껴졌음, 학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음",
    "concernTags": [
      "학생별 관리나 피드백 차이가 느껴졌음",
      "학생을 비하하거나 모욕적으로 느껴지는 표현이 있었음"
    ],
    "cautionRaw": "멘탈 관리가 필요함",
    "cautionTags": [
      "멘탈 관리가 필요함"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "학원은 다 그렇지만 반 별 분위기 차이가 있었음\n성적이 낮으면 그만큼 인원수별로 할당된 선생님이 적었고 주입식으로 거르치는 느낌이 있었음",
    "detail": "학원은 다 그렇지만 반 별 분위기 차이가 있었음\n성적이 낮으면 그만큼 인원수별로 할당된 선생님이 적었고 주입식으로 거르치는 느낌이 있었음",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "",
    "attendedPeriod": "",
    "admissionResult": "합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "민감한 지도 방식 표현 포함"
    ]
  },
  {
    "id": "google-form-20260615-new-review-070",
    "sourceRow": 71,
    "timestamp": "2026. 6. 15 오후 11:04:53",
    "academyNameRaw": "야탑 씨앤씨 미술학원",
    "academyId": "bundang-yatap-cnc-art",
    "academyName": "씨앤씨미술학원 분당야탑캠퍼스",
    "academyMatchStatus": "suggested",
    "rating": 3,
    "atmosphere": "3",
    "assignmentAmount": "2",
    "schoolTextRaw": "일반대 중심",
    "reviewSchoolTagsRaw": [
      "일반대 중심"
    ],
    "reviewSchoolTags": [],
    "difficulty": "입문자도 가능해요",
    "feedbackRaw": "빠르게 핵심만 짚어줌, 친절하게 설명함",
    "feedbackTags": [
      "빠르게 핵심만 짚어줌",
      "친절하게 설명함"
    ],
    "goodRaw": "피드백이 꼼꼼함, 기본기를 잘 잡아줌, 질문하기 편함, 학원 분위기가 좋음, 입시 정보가 많음, 자료/시범이 도움됨, 실전 감각을 키우기 좋음",
    "goodTags": [
      "피드백이 꼼꼼함",
      "기본기를 잘 잡아줌",
      "질문하기 편함",
      "학원 분위기가 좋음",
      "입시 정보가 많음",
      "자료/시범이 도움됨",
      "실전 감각을 키우기 좋음"
    ],
    "concernRaw": "입결·합격 사례 설명이 과장되어 보였음, 특별히 없음",
    "concernTags": [
      "입결·합격 사례 설명이 과장되어 보였음",
      "특별히 없음"
    ],
    "cautionRaw": "스스로 질문해야 놓치지 않음",
    "cautionTags": [
      "스스로 질문해야 놓치지 않음"
    ],
    "teachingStyleTags": [],
    "summary": "",
    "detailOriginal": "예비반에서 입시반으로 올라올 때, 아이들끼리 차이가 있다는 것을 아시고 아주 기초적인 것부터 진행합니다. 따라서 사람에 따라 초반에는 진도가 느리다고 생각할 수 있습니다. 그러나 수시 시즌부터 슬슬 시험을 치며 그리는 속도가 빨라집니다. 뒤로 갈수록 개인의 역량에 따라 그림의 진도가 달라지니 초반에 다른 미술학원의 커리큘럼과 비교하며 느리단 걱정 안해도 됩니다!! 선생님들 무지 착하시고 꼼꼼하게 피드백 해주십니다.\n다만 기소소양 전문 학원이 아니라 특정 학교 입시 진행이 어려울 수 있습니다.",
    "detail": "예비반에서 입시반으로 올라올 때, 아이들끼리 차이가 있다는 것을 아시고 아주 기초적인 것부터 진행합니다. 따라서 사람에 따라 초반에는 진도가 느리다고 생각할 수 있습니다. 그러나 수시 시즌부터 슬슬 시험을 치며 그리는 속도가 빨라집니다. 뒤로 갈수록 개인의 역량에 따라 그림의 진도가 달라지니 초반에 다른 미술학원의 커리큘럼과 비교하며 느리단 걱정 안해도 됩니다!! 선생님들 무지 착하시고 꼼꼼하게 피드백 해주십니다.\n다만 기소소양 전문 학원이 아니라 특정 학교 입시 진행이 어려울 수 있습니다.",
    "detailPublic": null,
    "writerStatus": "대학생",
    "attendedYear": "2025",
    "attendedPeriod": "1년",
    "admissionResult": "합격",
    "consentPublish": "예",
    "consentModeration": "예",
    "wantsDistributionLink": "링크 받고 싶습니다!",
    "likes": 0,
    "status": "pending",
    "source": "google-form-2026-06-15-new",
    "moderationFlags": [
      "입결/합격 사례 관련 주장 검토 필요"
    ]
  }
];
