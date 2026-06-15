// 미대이음 구글폼 추가 응답 학원 매칭/신규 학원 후보
// 대상: 이전 처리본 이후 추가 응답(sourceRow 50-71)에서 새롭게 필요해진 학원 후보와 alias만 포함한다.

export type SurveyAdditionalAcademyNew = {
  id: string;
  name: string;
  region: string;
  district: string;
  location: string;
  address: string;
  homepageUrl: string | null;
  instagramUrl: string | null;
  naverBlogUrl: string | null;
  mapSearchQuery: string;
  sourceUrl: string | null;
  verifiedStatus: "확인 필요" | "확인 완료";
  note?: string;
};

export const surveyAdditionalAcademies20260615New: SurveyAdditionalAcademyNew[] = [
  {
    "id": "yangjae-gy-art",
    "name": "지와이아트 미술학원",
    "region": "서울",
    "district": "서초구",
    "location": "서울 서초구 양재동",
    "address": "서울 서초구 강남대로 188 5층",
    "homepageUrl": null,
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "지와이아트 미술학원 서울 서초구 강남대로 188 5층",
    "sourceUrl": "https://academy.hakwonsin.co.kr/academy/QbY6Aw0d/%EC%A7%80%EC%99%80%EC%9D%B4%EC%95%84%ED%8A%B8-%EB%AF%B8%EC%88%A0%ED%95%99%EC%9B%90",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 양재 지와이학원. 학원정보 사이트에서 지와이아트 미술학원/강남대로 188 5층 확인."
  },
  {
    "id": "gangnam-seoha-art",
    "name": "서하미술학원",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 논현동",
    "address": "서울 강남구 논현로114길 11 해광빌딩 1층, 4층 일부",
    "homepageUrl": null,
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "서하미술학원 서울 강남구 논현로114길 11 해광빌딩",
    "sourceUrl": "https://learns.academy/academies/431fb192-430a-4cb8-8703-ef57bbb45610",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 서하미술학원. 학원정보 사이트/강남엄마/학원비알리미에서 주소 확인."
  },
  {
    "id": "daejeon-migong-art",
    "name": "미공미술학원",
    "region": "대전",
    "district": "서구",
    "location": "대전 서구 탄방동",
    "address": "대전 서구 계룡로553번안길 55",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/art_factory_director/",
    "naverBlogUrl": null,
    "mapSearchQuery": "미공미술학원 대전 서구 계룡로553번안길 55",
    "sourceUrl": "https://academy.prompie.com/academies/detail/urxjbml/%EB%AF%B8%EA%B3%B5%EB%AF%B8%EC%88%A0%ED%95%99%EC%9B%90/",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 대전 미공미술학원. 공개 학원정보/인스타그램에서 대전 서구 탄방동, 한예종/회화 입시 관련 정보 확인."
  },
  {
    "id": "incheon-gyeyang-cnc-art",
    "name": "계양C&C미술학원",
    "region": "인천",
    "district": "계양구",
    "location": "인천 계양구 작전동",
    "address": "인천광역시 계양구 장제로 708 한샘프라자 5층",
    "homepageUrl": "https://www.cncart.co.kr/html/campus/campus_news01.php?sc_cams_seq=22",
    "instagramUrl": "https://www.instagram.com/kycnc2019/",
    "naverBlogUrl": null,
    "mapSearchQuery": "계양C&C미술학원 인천 계양구 장제로 708 한샘프라자 5층",
    "sourceUrl": "https://www.cncart.co.kr/html/campus/campus_news01.php?sc_cams_seq=22",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 계양 c&c. C&C 공식 캠퍼스 페이지 기준."
  },
  {
    "id": "daegu-suseong-cloud-click-art",
    "name": "대구 수성클라우드미술학원",
    "region": "대구",
    "district": "수성구",
    "location": "대구 수성구 만촌동",
    "address": "대구 수성구 달구벌대로 2545 2층, 4층",
    "homepageUrl": null,
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "대구 수성클라우드미술학원 대구 수성구 달구벌대로 2545",
    "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2305",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 대구 클라우드클릭학원. 아트앤디자인 대구 수성클라우드미술학원 정보 기준. 데이터상 디자인클릭미술학원 표기도 함께 확인됨."
  },
  {
    "id": "sinsa-kima-art",
    "name": "키마미술학원",
    "region": "서울",
    "district": "서초구",
    "location": "서울 서초구 잠원동 / 신사역 인근",
    "address": "서울 서초구 나루터로12길 30 미르빌딩 3층",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/kima_artacademy/",
    "naverBlogUrl": null,
    "mapSearchQuery": "키마미술학원 서울 서초구 나루터로12길 30 3층",
    "sourceUrl": "https://www.instagram.com/kima_artacademy/",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 신사 키마미술학원. 공식 인스타그램 및 학원정보 사이트 기준. 예중예고/대입 범위 검토 필요."
  },
  {
    "id": "gangnam-o2-art",
    "name": "오투미술학원",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 선릉역 인근",
    "address": "서울 강남구 선릉로 412 4층/5층",
    "homepageUrl": "https://kangnamart.com/mkmember/o2/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "오투미술학원 서울 강남구 선릉로 412 4층 5층",
    "sourceUrl": "https://kangnamart.com/mkmember/o2/",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 선릉 오투미술학원. 강남입시미술연합회/아트앤디자인 정보 기준. 일부 SNS 자료에는 주소 변동 가능성 있어 운영자 확인 필요."
  },
  {
    "id": "busan-sigak-art",
    "name": "시각미술학원",
    "region": "부산",
    "district": "수영구",
    "location": "부산 수영구 남천동",
    "address": "부산 수영구 수영로 411 글로리 10층, 11층",
    "homepageUrl": "https://www.sigak.kr/",
    "instagramUrl": "https://www.instagram.com/sigakgrim/",
    "naverBlogUrl": null,
    "mapSearchQuery": "시각미술학원 부산 수영구 수영로 411 글로리 10층 11층",
    "sourceUrl": "https://www.sigak.kr/",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 부산 시각미술학원. 공식 홈페이지/인스타그램/학원비알리미 정보 기준."
  },
  {
    "id": "daejeon-dunsan-cnc-art",
    "name": "씨앤씨미술학원 대전둔산캠퍼스",
    "region": "대전",
    "district": "서구",
    "location": "대전 서구 탄방동 / 둔산",
    "address": "대전광역시 서구 문정로 80 3층",
    "homepageUrl": "https://www.cncart.co.kr/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "씨앤씨미술학원 대전둔산캠퍼스 대전 서구 문정로 80 3층",
    "sourceUrl": "https://ssiaenssimisulhagwondaejeondunsangkaempeoseu.bizw.kr/homepage/menu.php?id=2511",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 대전 C&C 학원. 대전 둔산캠퍼스 정보와 C&C 공식 브랜드 정보 기준."
  },
  {
    "id": "hongseong-design-ufo-art",
    "name": "디자인유에프오미술학원",
    "region": "충남",
    "district": "홍성군",
    "location": "충남 홍성군 홍북읍 / 내포신도시",
    "address": "충남 홍성군 홍북읍 홍학로 95 아이프라자2 601호, 602호",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/ufo_sangjin/",
    "naverBlogUrl": null,
    "mapSearchQuery": "디자인유에프오미술학원 충남 홍성군 홍북읍 홍학로 95",
    "sourceUrl": "https://academy.hakwonsin.co.kr/academy/9b68rMne/%EB%94%94%EC%9E%90%EC%9D%B8%EC%9C%A0%EC%97%90%ED%94%84%EC%98%A4",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 홍성 디자인유에프오. 학원정보 사이트/인스타그램/사업자정보 기준."
  }
];

export const reviewAcademyAliases20260615New: Record<string, string> = {
  "양재 지와이학원": "yangjae-gy-art",
  "서하미술학원": "gangnam-seoha-art",
  "대전 미공미술학원": "daejeon-migong-art",
  "홍대 네오캣 학원": "hongdae-neocat-art",
  "계양 c&c": "incheon-gyeyang-cnc-art",
  "강남 고도": "gangnam-godo-art",
  "대구 클라우드클릭학원": "daegu-suseong-cloud-click-art",
  "신사 키마미술학원": "sinsa-kima-art",
  "선릉 오투미술학원": "gangnam-o2-art",
  "선릉 파라오": "gangnam-pharaoh-art",
  "선릉 대치스터디앤아트": "seolleung-study-and-art",
  "부산 시각미술학원": "busan-sigak-art",
  "양재 고도학원": "gangnam-godo-art",
  "선릉 안테나": "gangnam-antenna-art",
  "홍대 그린섬": "hongdae-greensum-art",
  "대전 C&C 학원": "daejeon-dunsan-cnc-art",
  "홍성 디자인유에프오": "hongseong-design-ufo-art",
  "강남 아이엠": "seolleung-iam-art",
  "강남 양재고도": "gangnam-godo-art",
  "선릉 메타코드": "gangnam-metacode-ssam-art",
  "대구 아트포엠학원": "daegu-artpoem-art",
  "야탑 씨앤씨 미술학원": "bundang-yatap-cnc-art"
};

export const unresolvedAcademyNames20260615New: string[] = [];

export const googleForm20260615NewMatchNotes = [
  "이 파일은 이전에 처리한 2026-06-14 구글폼 48개 리뷰 이후 추가 응답(sourceRow 50-71)만 대상으로 한다.",
  "후기 원문(detailOriginal/detail)은 임의 요약/순화/수정하지 않는다.",
  "새 학원 후보는 공개 검색으로 이름/주소가 확인된 항목만 included. 기존 학원과 중복 가능성이 있으므로 Codex에서 id 기준/이름 기준으로 병합 검토 필요.",
  "학교명은 reviewSchoolTags에 정식 명칭으로 정규화하되 schoolTextRaw/reviewSchoolTagsRaw에 원문을 보존한다."
];
