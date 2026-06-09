// 미대이음 학원 공식 채널 1차 조사 overlay
// 공식 홈페이지 / 인스타그램 / 네이버 블로그를 기존 academies 데이터에 병합하기 위한 파일입니다.
// 주의: 1차 조사본입니다. 실제 서비스 반영 전 각 링크의 운영 여부와 지점 일치 여부를 반드시 확인하세요.

export type AcademyChannelConfidence =
  "공식 확인" |
  "보조 출처 확인" |
  "기존 데이터 기반" |
  "1차 검색 필요" |
  "확인 필요";

export type AcademyChannelOverride = {
  id: string;
  officialWebsiteUrl: string | null;
  instagramUrl: string | null;
  naverBlogUrl: string | null;
  channelConfidence: AcademyChannelConfidence;
  channelMemo: string;
  channelSourceUrls: string[];
};

export const academyChannelOverrides: AcademyChannelOverride[] = [
  {
    id: "gangnam-veteran-art",
    officialWebsiteUrl: "https://artveteran.com/",
    instagramUrl: "https://www.instagram.com/veteran_fineart_institute/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "베테랑 공식 홈페이지 및 공식 인스타그램 계정. 강남/노원 공통 채널로 사용 가능.",
    channelSourceUrls: [
      "https://artveteran.com/",
      "https://www.instagram.com/veteran_fineart_institute/",
    ],
  },
  {
    id: "gangnam-creation-morning-art",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: "https://www.instagram.com/topclass_changjo/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "강남 창조의아침 인스타그램 검색 결과와 브랜드 홈페이지 기반.",
    channelSourceUrls: [
      "https://changa.net/",
      "https://www.instagram.com/topclass_changjo/",
    ],
  },
  {
    id: "gangnam-godo-art",
    officialWebsiteUrl: "https://www.godoart.com/",
    instagramUrl: "https://www.instagram.com/godo_art123/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "강남고도 공식 홈페이지와 인스타그램 계정 검색 결과 확인.",
    channelSourceUrls: [
      "https://www.godoart.com/",
      "https://www.instagram.com/godo_art123/",
    ],
  },
  {
    id: "gangnam-thousand-smile-art",
    officialWebsiteUrl: "https://1000miso.com/",
    instagramUrl: "https://www.instagram.com/gangnam1000mi_official/",
    naverBlogUrl: "https://m.blog.naver.com/cmmiso/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "강남 천년의미소 지점 인스타그램 검색 결과와 천년의미소 공통 홈페이지/블로그 기반.",
    channelSourceUrls: [
      "https://1000miso.com/",
      "https://www.instagram.com/1000miso_official/",
      "https://www.instagram.com/gangnam1000mi_official/",
    ],
  },
  {
    id: "gangnam-heracles-art",
    officialWebsiteUrl: "https://www.1000joso.com/",
    instagramUrl: "https://www.instagram.com/gangnam_hercules/",
    naverBlogUrl: "https://blog.naver.com/minchul-t/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "아트앤디자인 및 미대입시닷컴/인스타 검색 결과 기반. 실제 운영 여부 재확인 권장.",
    channelSourceUrls: [
      "https://www.1000joso.com/",
      "https://artndesign.com/bbs/board.php?bo_table=academy&wr_id=2954",
    ],
  },
  {
    id: "gangnam-antenna-art",
    officialWebsiteUrl: "https://antenna-art.com/",
    instagramUrl: "https://www.instagram.com/antenna_art_institute/",
    naverBlogUrl: "https://blog.naver.com/antenna_design/",
    channelConfidence: "공식 확인",
    channelMemo: "공식 홈페이지와 인스타그램, 공식 블로그 링크 확인.",
    channelSourceUrls: [
      "https://antenna-art.com/",
      "https://www.instagram.com/antenna_art_institute/",
    ],
  },
  {
    id: "gangnam-cnc-art",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "design-gogh-art",
    officialWebsiteUrl: null,
    instagramUrl: null,
    naverBlogUrl: "https://blog.naver.com/d_gogh/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "검색 결과에서 강남디자인고흐 공식 블로그로 확인. 공식 홈페이지/인스타그램은 추가 확인 필요.",
    channelSourceUrls: [
      "https://blog.naver.com/d_gogh/",
    ],
  },
  {
    id: "cnc-art-hongdae-main",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "neocat-art-hongdae",
    officialWebsiteUrl: "https://www.xn--950b88a896au5hk2j.com/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "네오캣 공식 홈페이지에서 블로그/인스타그램 버튼 확인. 실제 URL은 사이트 버튼 클릭으로 추가 검수 필요.",
    channelSourceUrls: [
      "https://www.xn--950b88a896au5hk2j.com/",
    ],
  },
  {
    id: "hongdae-greenseom-art",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "nowon-veteran-art",
    officialWebsiteUrl: "https://artveteran.com/",
    instagramUrl: "https://www.instagram.com/veteran_fineart_institute/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "베테랑 공식 홈페이지 및 공식 인스타그램 계정. 강남/노원 공통 채널로 사용 가능.",
    channelSourceUrls: [
      "https://artveteran.com/",
      "https://www.instagram.com/veteran_fineart_institute/",
    ],
  },
  {
    id: "nowon-creation-morning-art",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "nowon-thousand-smile-art",
    officialWebsiteUrl: "https://1000miso.com/",
    instagramUrl: "https://www.instagram.com/1000miso_official/",
    naverBlogUrl: "https://m.blog.naver.com/cmmiso/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "천년의미소 브랜드 공식 홈페이지/공식 인스타/공식 블로그로 보이는 채널. 지점별 계정은 별도 확인 권장.",
    channelSourceUrls: [
      "https://1000miso.com/",
      "https://www.instagram.com/1000miso_official/",
    ],
  },
  {
    id: "seolleung-park-sam-david-sculpture",
    officialWebsiteUrl: "https://nemomind.com/",
    instagramUrl: "https://www.instagram.com/parksam_joso/",
    naverBlogUrl: "https://blog.naver.com/nemomind36/",
    channelConfidence: "공식 확인",
    channelMemo: "학원 공식 홈페이지에서 인스타그램과 강남본원 블로그 링크가 노출됨.",
    channelSourceUrls: [
      "https://nemomind.com/",
    ],
  },
  {
    id: "seolleung-iam-art",
    officialWebsiteUrl: "https://iam-designart.com/untitled-28/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "기존 데이터 기반",
    channelMemo: "기존 seed data의 homepageUrl을 채널 필드로 분리함. 공식성 추가 검수 권장.",
    channelSourceUrls: [
      "https://iam-designart.com/untitled-28",
    ],
  },
  {
    id: "seolleung-artm-art",
    officialWebsiteUrl: "https://www.artm-art.co.kr/",
    instagramUrl: null,
    naverBlogUrl: "https://blog.naver.com/imfineck/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "공식 홈페이지와 검색 결과에서 강남 아트엠 블로그 주소 확인. 인스타그램은 추가 검색 필요.",
    channelSourceUrls: [
      "https://www.artm-art.co.kr/",
    ],
  },
  {
    id: "seolleung-design-gogh-main",
    officialWebsiteUrl: null,
    instagramUrl: null,
    naverBlogUrl: "https://blog.naver.com/d_gogh/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "검색 결과에서 강남디자인고흐 공식 블로그로 확인. 공식 홈페이지/인스타그램은 추가 확인 필요.",
    channelSourceUrls: [
      "https://blog.naver.com/d_gogh/",
    ],
  },
  {
    id: "seolleung-cnc-art",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gangnam-metacode-ssam-art",
    officialWebsiteUrl: "https://kangnamart.com/mkmember/metacodessam/",
    instagramUrl: "https://www.instagram.com/metacode_ssam/",
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "강남본원 소개 페이지와 인스타그램 검색 결과 기반. 공식 블로그는 추가 검수 필요.",
    channelSourceUrls: [
      "https://kangnamart.com/mkmember/metacodessam/",
      "https://www.instagram.com/metacode_ssam/",
    ],
  },
  {
    id: "gangnam-cloud-art",
    officialWebsiteUrl: "https://www.cloudart.co.kr/",
    instagramUrl: "https://www.instagram.com/cloud.art.design/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "공식 홈페이지와 강남 클라우드 인스타그램 검색 결과 확인. 지점 계정은 추가 확인 가능.",
    channelSourceUrls: [
      "https://www.cloudart.co.kr/",
      "https://www.instagram.com/cloud.art.design/",
    ],
  },
  {
    id: "gyeonggi-suwon-people",
    officialWebsiteUrl: null,
    instagramUrl: null,
    naverBlogUrl: "http://blog.naver.com/hongcath/",
    channelConfidence: "1차 검색 필요",
    channelMemo: "피플미술학원 관련 소개 페이지는 확인했지만 공식 홈페이지/인스타/블로그 직접 URL은 추가 확인 필요.",
    channelSourceUrls: [
      "https://grinalda.net/midae-briefing/people/",
    ],
  },
  {
    id: "gyeonggi-yongin-suji-changa",
    officialWebsiteUrl: "https://sjchanga.com/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "수지 창조의아침 지점 공식 홈페이지.",
    channelSourceUrls: [
      "https://sjchanga.com/",
    ],
  },
  {
    id: "gyeonggi-yongin-dongbaek-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "gyeonggi-seongnam-bundang-migeum-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "gyeonggi-seongnam-yatap-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gyeonggi-seongnam-sunae-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gyeonggi-ansan-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "gyeonggi-ansan-kuna",
    officialWebsiteUrl: "https://ansananicuna.modoo.at/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "기존 데이터 기반",
    channelMemo: "기존 seed data의 homepageUrl을 채널 필드로 분리함. 공식성 추가 검수 권장.",
    channelSourceUrls: [
      "https://ansananicuna.modoo.at/",
    ],
  },
  {
    id: "gyeonggi-ansan-gojan-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gyeonggi-paju-unjeong-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gyeonggi-gimpo-changa",
    officialWebsiteUrl: "https://gpchanga.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "김포 창조의아침 지점 공식 홈페이지.",
    channelSourceUrls: [
      "https://gpchanga.net/",
    ],
  },
  {
    id: "busan-daesin-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "busan-dangri-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "busan-hwamyeong-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "ulsan-designpida",
    officialWebsiteUrl: null,
    instagramUrl: "https://www.instagram.com/designpida/",
    naverBlogUrl: null,
    channelConfidence: "기존 데이터 기반",
    channelMemo: "기존 seed data의 homepageUrl을 채널 필드로 분리함. 공식성 추가 검수 권장.",
    channelSourceUrls: [
      "https://www.instagram.com/designpida/",
    ],
  },
  {
    id: "ulsan-anisoop",
    officialWebsiteUrl: null,
    instagramUrl: "https://www.instagram.com/anisoop1/",
    naverBlogUrl: null,
    channelConfidence: "기존 데이터 기반",
    channelMemo: "기존 seed data의 homepageUrl을 채널 필드로 분리함. 공식성 추가 검수 권장.",
    channelSourceUrls: [
      "https://www.instagram.com/anisoop1/",
    ],
  },
  {
    id: "ulsan-dna-art",
    officialWebsiteUrl: null,
    instagramUrl: "http://instagram.com/s.w_park_/",
    naverBlogUrl: null,
    channelConfidence: "기존 데이터 기반",
    channelMemo: "기존 seed data의 homepageUrl을 채널 필드로 분리함. 공식성 추가 검수 권장.",
    channelSourceUrls: [
      "http://instagram.com/s.w_park_",
    ],
  },
  {
    id: "ulsan-choi-byungmoon",
    officialWebsiteUrl: "http://www.artcbm.com/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "기존 데이터 기반",
    channelMemo: "기존 seed data의 homepageUrl을 채널 필드로 분리함. 공식성 추가 검수 권장.",
    channelSourceUrls: [
      "http://www.artcbm.com",
    ],
  },
  {
    id: "ulsan-jangjiwon-greensum",
    officialWebsiteUrl: "https://jangjiwon.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "공식 확인",
    channelMemo: "장지원그린섬 공식 홈페이지 확인. 사이트에 인스타그램/네이버블로그 링크 영역은 있으나 URL은 추가 확인 필요.",
    channelSourceUrls: [
      "https://jangjiwon.com/",
    ],
  },
  {
    id: "daegu-siji-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "daegu-suseong-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "daegu-suseong-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gwangju-cheomdan-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "gwangju-jinwol-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "gwangju-suwan-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "jeonbuk-jeonju-seobu-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "jeonbuk-jeonju-songcheon-greensum",
    officialWebsiteUrl: "https://www.greensum.com/",
    instagramUrl: "https://www.instagram.com/greensum1/",
    naverBlogUrl: "https://blog.naver.com/greensum1/",
    channelConfidence: "보조 출처 확인",
    channelMemo: "그린섬 브랜드 공통 채널. 지점별 인스타/블로그는 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.greensum.com/",
      "https://www.youtube.com/watch?v=oPP6A9En3PU",
    ],
  },
  {
    id: "jeonbuk-jeonju-gyeongwon-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "jeonnam-gwangyang-cnc-jungdong",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "jeonnam-gwangyang-cnc",
    officialWebsiteUrl: "https://www.cncart.co.kr/",
    instagramUrl: "https://www.instagram.com/cnc.master.official/",
    naverBlogUrl: null,
    channelConfidence: "공식 확인",
    channelMemo: "C&C 브랜드 공식 홈페이지와 공식 인스타그램 계정. 지점별 채널은 별도 확인 필요.",
    channelSourceUrls: [
      "https://www.cncart.co.kr/",
      "https://www.instagram.com/cnc.master.official/",
    ],
  },
  {
    id: "chungbuk-cheongju-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
  {
    id: "gangwon-gangneung-changa",
    officialWebsiteUrl: "https://changa.net/",
    instagramUrl: null,
    naverBlogUrl: null,
    channelConfidence: "보조 출처 확인",
    channelMemo: "창조의아침 브랜드 공식 홈페이지. 지점별 인스타/블로그는 추가 확인 필요.",
    channelSourceUrls: [
      "https://changa.net/",
    ],
  },
];

export const applyAcademyChannelOverrides = <T extends { id: string }>(academies: T[]) => {
  const overrideMap = new Map(academyChannelOverrides.map((item) => [item.id, item]));
  return academies.map((academy) => {
    const override = overrideMap.get(academy.id);
    return {
      ...academy,
      officialWebsiteUrl: override?.officialWebsiteUrl ?? null,
      instagramUrl: override?.instagramUrl ?? null,
      naverBlogUrl: override?.naverBlogUrl ?? null,
      channelConfidence: override?.channelConfidence ?? "확인 필요",
      channelMemo: override?.channelMemo ?? "공식 홈페이지, 인스타그램, 네이버 블로그 채널 추가 검색 필요",
      channelSourceUrls: override?.channelSourceUrls ?? [],
    };
  });
};
