// 미대이음 구글폼 학원 매칭/신규 학원 후보
// 목적: 설문 응답에 나온 학원명 중 기존 사이트에 없거나 지점 확인이 필요한 항목을 운영자 검수용으로 분리한다.

export type SurveyAdditionalAcademy = {
  id: string; name: string; region: string; district: string; location: string; address: string;
  homepageUrl: string | null; instagramUrl: string | null; naverBlogUrl: string | null;
  mapSearchQuery: string; sourceUrl: string | null; verifiedStatus: "확인 필요" | "확인 완료"; note?: string;
};

export const surveyAdditionalAcademies20260614: SurveyAdditionalAcademy[] = [
  {
    "id": "gangnam-neocat-art",
    "name": "네오캣미술학원 강남",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 선릉역 인근",
    "address": "서울특별시 강남구 선릉로 422 전우빌딩 5층",
    "homepageUrl": "https://xn--939au0gukv70ezwj.com/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "네오캣미술학원 강남 서울특별시 강남구 선릉로 422",
    "sourceUrl": "https://xn--939au0gukv70ezwj.com/",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 선릉네오캣/선릉 네오캣/선릉 네오켓. 공식 사이트 오시는길 기준."
  },
  {
    "id": "gangnam-greensum-art",
    "name": "그린섬미술학원 강남본원",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 대치동 / 한티·선릉 인근",
    "address": "서울 강남구 선릉로 340 대치EM프라자 2층",
    "homepageUrl": "https://www.greensum.com/",
    "instagramUrl": "https://www.instagram.com/greensum.gangnam/",
    "naverBlogUrl": null,
    "mapSearchQuery": "그린섬미술학원 강남본원 서울 강남구 선릉로 340",
    "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2639",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 한티 그린섬. 아트앤디자인/공식 캠퍼스 정보 기준."
  },
  {
    "id": "seolleung-study-and-art",
    "name": "스터디앤아트미술학원",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 선릉·대치 인근",
    "address": "주소 확인 필요",
    "homepageUrl": null,
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "선릉 스터디앤아트 미술학원",
    "sourceUrl": null,
    "verifiedStatus": "확인 필요",
    "note": "구글폼 응답에 반복 등장. 공개 검색 결과에서 주소 확정 실패. 운영자 확인 필요."
  },
  {
    "id": "busan-archive-art",
    "name": "아카이브미술학원",
    "region": "부산",
    "district": "수영구",
    "location": "부산 수영구 남천동",
    "address": "부산광역시 수영구 수영로464번길 6, 목원빌딩 2층 2호",
    "homepageUrl": "https://archiveart.co.kr/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "아카이브미술학원 부산 수영구 수영로464번길 6",
    "sourceUrl": "https://archiveart.co.kr/",
    "verifiedStatus": "확인 필요",
    "note": "공식 사이트와 아트앤디자인 학원찾기에서 확인."
  },
  {
    "id": "ulsan-b2b-art",
    "name": "울산 비투비미술학원",
    "region": "울산",
    "district": "남구",
    "location": "울산 남구 신정동",
    "address": "울산 남구 중앙로 149 미진월드 3층",
    "homepageUrl": "https://www.beetwobee.com/US",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "울산 비투비미술학원 울산 남구 중앙로 149",
    "sourceUrl": "https://www.beetwobee.com/104/?bmode=view&idx=12297275",
    "verifiedStatus": "확인 필요",
    "note": "비투비 공식/월간 미대입시 자료 기준."
  },
  {
    "id": "daejeon-cloud-art",
    "name": "대전 클라우드미술학원",
    "region": "대전",
    "district": "서구",
    "location": "대전 서구 탄방동",
    "address": "대전 서구 문정로 82 스카이빌딩 4층",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/cloud_daejeon_art/",
    "naverBlogUrl": null,
    "mapSearchQuery": "대전 클라우드미술학원 대전 서구 문정로 82",
    "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=1116",
    "verifiedStatus": "확인 필요",
    "note": "아트앤디자인 학원찾기 및 인스타그램 계정 기준."
  },
  {
    "id": "daegu-beomeo-aiwon-art",
    "name": "에이아이원미술학원",
    "region": "대구",
    "district": "수성구",
    "location": "대구 수성구 범어동",
    "address": "대구 수성구 범어동 165-15 3층",
    "homepageUrl": "https://design-people.co.kr/untitled-30",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "에이아이원미술학원 대구 수성구 범어동 165-15",
    "sourceUrl": "https://design-people.co.kr/untitled-30",
    "verifiedStatus": "확인 필요",
    "note": "구글폼 원문: 대구 범어피플 → 현재 에이아이원. 피플 공식 페이지 및 학원비알리미 기준."
  },
  {
    "id": "ilsan-changa-juyeop-art",
    "name": "일산 창조의아침미술학원",
    "region": "경기",
    "district": "고양시 일산서구",
    "location": "경기 고양시 일산서구 주엽동",
    "address": "경기 고양시 일산서구 중앙로 1413 9층",
    "homepageUrl": "https://ischanga.net/",
    "instagramUrl": "https://www.instagram.com/ilsan.changa/",
    "naverBlogUrl": null,
    "mapSearchQuery": "일산 창조의아침미술학원 경기 고양시 일산서구 중앙로 1413",
    "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2690",
    "verifiedStatus": "확인 필요",
    "note": "공식 사이트/아트앤디자인/강남엄마 정보 기준."
  },
  {
    "id": "ipsami-art",
    "name": "입사미 미술학원",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 선정릉역 인근",
    "address": "서울특별시 강남구 선릉로 565 한국빌딩 2층",
    "homepageUrl": "https://www.ipsami.co.kr/ko/",
    "instagramUrl": "https://www.instagram.com/ipsami_official/",
    "naverBlogUrl": null,
    "mapSearchQuery": "입사미 미술학원 서울 강남구 선릉로 565",
    "sourceUrl": "https://www.ipsami.co.kr/ko/",
    "verifiedStatus": "확인 필요",
    "note": "공식 사이트 기준."
  },
  {
    "id": "lab-seolleung-art",
    "name": "랩미술선릉학원",
    "region": "서울",
    "district": "강남구",
    "location": "서울 강남구 선릉역 인근",
    "address": "서울 강남구 선릉로107길 7 2층 201호",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/labdesign_official/",
    "naverBlogUrl": null,
    "mapSearchQuery": "랩미술선릉학원 서울 강남구 선릉로107길 7",
    "sourceUrl": "https://eznel.com/academy_clue.php?ACA_ASNUM=3000052376&ATPT_OFCDC_SC_CODE=B10",
    "verifiedStatus": "확인 필요",
    "note": "아트앤디자인/나이스 연동 학원정보 기준. 주소 자료 간 차이 있어 운영자 확인 필요."
  },
  {
    "id": "dongdaemun-changa-art",
    "name": "동대문 창조의아침미술학원",
    "region": "서울",
    "district": "동대문구",
    "location": "서울 동대문구",
    "address": "서울 동대문구 한천로 195 2~5층",
    "homepageUrl": "https://ddmchanga.com/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "동대문 창조의아침미술학원 서울 동대문구 한천로 195",
    "sourceUrl": "https://ddmchanga.com/",
    "verifiedStatus": "확인 필요",
    "note": "공식 사이트 기준."
  },
  {
    "id": "daegu-artpoem-art",
    "name": "대구 아트포엠미술학원",
    "region": "대구",
    "district": "수성구",
    "location": "대구 수성구 범어동 인근",
    "address": "대구 달구벌대로 2477 7층,10층",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/d_art4m/",
    "naverBlogUrl": null,
    "mapSearchQuery": "대구 아트포엠미술학원 달구벌대로 2477",
    "sourceUrl": "https://www.facebook.com/dart4m/",
    "verifiedStatus": "확인 필요",
    "note": "공개 채널 주소 기준. 공식 홈페이지 확인 필요."
  },
  {
    "id": "bundang-neocat-art",
    "name": "분당 네오캣미술학원",
    "region": "경기",
    "district": "성남시 분당구",
    "location": "경기 성남시 분당구 정자동",
    "address": "경기 성남시 분당구 성남대로 349 시그마타워 6층",
    "homepageUrl": "https://xn--950bu8al1rl2iz4k.com/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "분당 네오캣미술학원 경기 성남시 분당구 성남대로 349",
    "sourceUrl": "https://xn--950bu8al1rl2iz4k.com/",
    "verifiedStatus": "확인 필요",
    "note": "공식 분당 네오캣 사이트/아트앤디자인 기준."
  },
  {
    "id": "gangdong-cloud-art",
    "name": "강동 클라우드미술학원",
    "region": "서울",
    "district": "강동구",
    "location": "서울 강동구 천호동",
    "address": "서울특별시 강동구 양재대로 1595, 2층 일부(202호)",
    "homepageUrl": null,
    "instagramUrl": "https://www.instagram.com/cloud_burnt_sionna/",
    "naverBlogUrl": null,
    "mapSearchQuery": "강동 클라우드미술학원 서울 강동구 양재대로 1595",
    "sourceUrl": "https://eznel.com/academy_clue.php?ACA_ASNUM=3000015236&ATPT_OFCDC_SC_CODE=B10",
    "verifiedStatus": "확인 필요",
    "note": "나이스 연동 학원정보/인스타그램 기준."
  },
  {
    "id": "noryangjin-changa-art",
    "name": "노량진 창조의아침미술학원",
    "region": "서울",
    "district": "동작구",
    "location": "서울 동작구 노량진동",
    "address": "서울 동작구 노량진로 114 2층",
    "homepageUrl": "https://changa.net/",
    "instagramUrl": "https://www.instagram.com/noryangjin_changa_painting/",
    "naverBlogUrl": null,
    "mapSearchQuery": "노량진 창조의아침미술학원 서울 동작구 노량진로 114",
    "sourceUrl": "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=3019",
    "verifiedStatus": "확인 필요",
    "note": "창조의아침 공식 캠퍼스/아트앤디자인 기준."
  },
  {
    "id": "mokwoo-art-suwon",
    "name": "목우미술학원",
    "region": "경기",
    "district": "수원시 팔달구",
    "location": "경기 수원시 팔달구",
    "address": "경기도 수원시 팔달구 권광로 138",
    "homepageUrl": "https://mokwoo.co.kr/",
    "instagramUrl": null,
    "naverBlogUrl": null,
    "mapSearchQuery": "목우미술학원 경기 수원시 팔달구 권광로 138",
    "sourceUrl": "https://mokwoo.co.kr/page.php?p_id=about",
    "verifiedStatus": "확인 필요",
    "note": "공식 사이트 기준. 구글폼 원문은 지점이 명확하지 않아 운영자 확인 필요."
  }
];

export const surveyUnresolvedAcademyNames20260614 = [
  {
    "academyNameRaw": "광주 에이맥스",
    "reason": "기존 데이터에 에이맥스 수완동/진월 2개가 있어 원문만으로 지점 확정 불가",
    "candidateAcademyIds": [
      "gwangju-suwandong-amax",
      "gwangju-jinwol-amax"
    ]
  },
  {
    "academyNameRaw": "대구창조의아침",
    "reason": "기존 데이터에 대구 수성/시지 창조의아침이 있어 원문만으로 지점 확정 불가",
    "candidateAcademyIds": [
      "daegu-suseong-changa",
      "daegu-siji-changa"
    ]
  },
  {
    "academyNameRaw": "선릉 디자인학원",
    "reason": "검색 결과로 특정 학원 식별 실패. 운영자가 응답자 맥락 또는 추가 정보 확인 필요",
    "candidateAcademyIds": []
  },
  {
    "academyNameRaw": "미금 바우하우스, 서현 바우하우스",
    "reason": "원문에 두 지점이 함께 기재되어 있고 후기 본문은 서현 바우하우스 중심으로 보임. 하나의 리뷰를 어느 지점에 연결할지 운영자 확인 필요",
    "candidateAcademyIds": [
      "extra-069-gyeonggi",
      "extra-072-gyeonggi"
    ]
  },
  {
    "academyNameRaw": "홍대 창조의 아침",
    "reason": "현재 데이터에 홍대 창조의아침 seed가 없거나 명칭이 다르게 등록되어 있을 수 있음. 공식 지점/주소 확인 후 매칭 또는 신규 추가 필요",
    "candidateAcademyIds": []
  }
];

export const surveyRawAcademyMatchMap20260614: Record<string, string | null> = {
  "선릉네오캣": "gangnam-neocat-art",
  "한티 그린섬": "gangnam-greensum-art",
  "선릉 메타코드 학원": "gangnam-metacode-ssam-art",
  "선릉 메타코드": "gangnam-metacode-ssam-art",
  "강남 메타코드": "gangnam-metacode-ssam-art",
  "선릉 오원한국화": "gangnam-owon-korean-art",
  "선릉 클라우드": "gangnam-cloud-art",
  "선릉 클라우드 학원": "gangnam-cloud-art",
  "선릉 스터디앤아트": "seolleung-study-and-art",
  "부산 아카이브 미술학원": "busan-archive-art",
  "부산 동래 비투비 미술학원 - 파사드반(기초소양반)": "busan-myeongryun-b2b",
  "홍대 한국화 청 미술학원": "hongdae-cheong-art",
  "선릉 안테나": "gangnam-antenna-art",
  "선릉 천년의미소 기디": "gangnam-thousand-smile-art",
  "선릉 네오켓(실기)//선릉 스카이미술학원(내신)->설문은 네오켓 기준입니다": "gangnam-neocat-art",
  "울산 비투비": "ulsan-b2b-art",
  "씨앤씨 미술학원 분당야탑캠퍼스": "gyeonggi-seongnam-yatap-cnc",
  "선릉 네오캣": "gangnam-neocat-art",
  "대전 클라우드 미술학원": "daejeon-cloud-art",
  "대구 수성구 범어피플 학원 -> 현재는 에이아이원으로 네임변경": "daegu-beomeo-aiwon-art",
  "일산 창조의 아침": "ilsan-changa-juyeop-art",
  "홍대 유니온": "hongdae-union-art",
  "홍대 네오캣": "neocat-art-hongdae",
  "광주 에이맥스": null,
  "부산 더끌림 -> 선릉 더끌림 미술학원": "gangnam-thekkeullim",
  "대구아트포엠": "daegu-artpoem-art",
  "대구 수성 클라우드 학원": "daegu-suseong-cloud",
  "대구창조의아침": null,
  "부산 사하 비투비학원": "busan-saha-b2b",
  "강남 강남고도미술학원": "gangnam-godo-art",
  "강동 클라우드": "gangdong-cloud-art",
  "선정릉 입사미": "ipsami-art",
  "동백그린섬": "gyeonggi-yongin-dongbaek-greensum",
  "양재 고도 미술학원": "gangnam-godo-art",
  "선릉 대치스터디앤아트": "seolleung-study-and-art",
  "목우 미술학원": "mokwoo-art-suwon",
  "선릉 디자인학원": null,
  "동대문 창조의 아침": "dongdaemun-changa-art",
  "선릉 랩 미술학원": "lab-seolleung-art",
  "분당 정자 네오켓 미술학원": "bundang-neocat-art",
  "미금 바우하우스, 서현 바우하우스": null,
  "홍대 그린섬": "hongdae-greenseom-art",
  "홍대 창조의 아침": null,
  "선릉 아트엠": "seolleung-artm-art",
  "노량진 창조의 아침": "noryangjin-changa-art",
  "선릉 아이엠": "seolleung-iam-art",
  "강동 클라우드 미술학원": "gangdong-cloud-art"
};
