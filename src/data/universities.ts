export type UniversityCategory =
  | "디자인"
  | "회화"
  | "조소"
  | "만화·애니"
  | "공예"
  | "한국화"
  | "영상·미디어"
  | "기타";

export type UniversitySeed = {
  id: string;
  name: string;
  shortName: string;
  region: string;
  campus?: string;
  categories: UniversityCategory[];
  aliases: string[];
  featured?: boolean;
  verifiedStatus: "확인 필요" | "확인 완료";
};

export const universitySeeds: UniversitySeed[] = [
  {
    id: "kookmin-university",
    name: "국민대학교",
    shortName: "국민대",
    region: "서울",
    categories: ["디자인", "회화", "공예"],
    aliases: ["국민대", "국민대학교", "kookmin", "kmu"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "seoul-national-university",
    name: "서울대학교",
    shortName: "서울대",
    region: "서울",
    categories: ["디자인", "회화", "조소", "공예"],
    aliases: ["서울대", "서울대학교", "snu"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "hongik-university",
    name: "홍익대학교",
    shortName: "홍익대",
    region: "서울",
    campus: "서울",
    categories: ["디자인", "회화", "조소", "공예"],
    aliases: ["홍대", "홍익대", "홍익대학교", "hongik"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "seoultech",
    name: "서울과학기술대학교",
    shortName: "서울과기대",
    region: "서울",
    categories: ["디자인", "공예"],
    aliases: ["과기대", "서울과기대", "서울과학기술대", "서울과학기술대학교", "seoultech"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "konkuk-university",
    name: "건국대학교",
    shortName: "건국대",
    region: "서울",
    categories: ["디자인", "영상·미디어"],
    aliases: ["건대", "건국대", "건국대학교", "konkuk"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "ewha-womans-university",
    name: "이화여자대학교",
    shortName: "이화여대",
    region: "서울",
    categories: ["디자인", "회화", "조소"],
    aliases: ["이대", "이화여대", "이화여자대학교", "ewha"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "sookmyung-womens-university",
    name: "숙명여자대학교",
    shortName: "숙명여대",
    region: "서울",
    categories: ["디자인", "공예"],
    aliases: ["숙대", "숙명여대", "숙명여자대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "sungshin-womens-university",
    name: "성신여자대학교",
    shortName: "성신여대",
    region: "서울",
    categories: ["디자인", "회화", "조소", "공예"],
    aliases: ["성신여대", "성신여자대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "chung-ang-university",
    name: "중앙대학교",
    shortName: "중앙대",
    region: "서울",
    campus: "서울/안성",
    categories: ["디자인", "회화", "조소", "공예"],
    aliases: ["중대", "중앙대", "중앙대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "kyung-hee-university",
    name: "경희대학교",
    shortName: "경희대",
    region: "서울/경기",
    categories: ["디자인", "회화", "조소"],
    aliases: ["경희대", "경희대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "hanyang-university",
    name: "한양대학교",
    shortName: "한양대",
    region: "서울/경기",
    categories: ["디자인", "영상·미디어"],
    aliases: ["한양대", "한양대학교", "한양대에리카", "에리카"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "gachon-university",
    name: "가천대학교",
    shortName: "가천대",
    region: "경기",
    categories: ["디자인", "회화", "조소"],
    aliases: ["가천대", "가천대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "sejong-university",
    name: "세종대학교",
    shortName: "세종대",
    region: "서울",
    categories: ["디자인", "만화·애니", "영상·미디어"],
    aliases: ["세종대", "세종대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "dankook-university",
    name: "단국대학교",
    shortName: "단국대",
    region: "경기/충남",
    categories: ["디자인", "공예"],
    aliases: ["단대", "단국대", "단국대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "korea-national-university-of-arts",
    name: "한국예술종합학교",
    shortName: "한예종",
    region: "서울",
    categories: ["디자인", "회화", "조소", "영상·미디어"],
    aliases: ["한예종", "한국예술종합", "한국예술종합학교", "karts"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "chungkang-college",
    name: "청강문화산업대학교",
    shortName: "청강대",
    region: "경기",
    categories: ["만화·애니", "영상·미디어"],
    aliases: ["청강", "청강대", "청강문화산업대", "청강문화산업대학교"],
    featured: true,
    verifiedStatus: "확인 완료",
  },
  {
    id: "korea-university",
    name: "고려대학교",
    shortName: "고려대",
    region: "서울",
    categories: ["디자인"],
    aliases: ["고대", "고려대", "고려대학교"],
    verifiedStatus: "확인 완료",
  },
  {
    id: "university-of-seoul",
    name: "서울시립대학교",
    shortName: "서울시립대",
    region: "서울",
    categories: ["디자인", "기타"],
    aliases: ["시립대", "서울시립대", "서울시립대학교"],
    verifiedStatus: "확인 필요",
  },
  {
    id: "dongduk-womens-university",
    name: "동덕여자대학교",
    shortName: "동덕여대",
    region: "서울",
    categories: ["디자인", "회화", "공예"],
    aliases: ["동덕여대", "동덕여자대학교"],
    verifiedStatus: "확인 완료",
  },
  {
    id: "duksung-womens-university",
    name: "덕성여자대학교",
    shortName: "덕성여대",
    region: "서울",
    categories: ["디자인"],
    aliases: ["덕성여대", "덕성여자대학교"],
    verifiedStatus: "확인 완료",
  },
  {
    id: "sangmyung-university",
    name: "상명대학교",
    shortName: "상명대",
    region: "서울/충남",
    categories: ["디자인", "만화·애니"],
    aliases: ["상명대", "상명대학교"],
    verifiedStatus: "확인 완료",
  },
  {
    id: "chugye-university-for-the-arts",
    name: "추계예술대학교",
    shortName: "추계예대",
    region: "서울",
    categories: ["회화", "영상·미디어"],
    aliases: ["추계예대", "추계예술대", "추계예술대학교"],
    verifiedStatus: "확인 완료",
  },
  {
    id: "kyonggi-university",
    name: "경기대학교",
    shortName: "경기대",
    region: "경기",
    categories: ["디자인"],
    aliases: ["경기대", "경기대학교"],
    verifiedStatus: "확인 완료",
  },
  {
    id: "inha-university",
    name: "인하대학교",
    shortName: "인하대",
    region: "인천",
    categories: ["디자인"],
    aliases: ["인하대", "인하대학교"],
    verifiedStatus: "확인 완료",
  },
];

export function findUniversityByName(value: string) {
  const normalized = normalizeUniversitySearchText(value);
  if (!normalized) return undefined;

  const exact = universitySeeds.find((university) =>
    getSearchTargets(university).some((target) => normalizeUniversitySearchText(target) === normalized)
  );
  if (exact) return exact;

  return universitySeeds.find((university) =>
    getSearchTargets(university).some((target) => {
      const normalizedTarget = normalizeUniversitySearchText(target);
      return normalizedTarget.includes(normalized) || normalized.includes(normalizedTarget);
    })
  );
}

export function normalizeUniversityName(value: string) {
  return findUniversityByName(value)?.name || value.trim();
}

export function getFeaturedUniversities() {
  return universitySeeds.filter((university) => university.featured);
}

export function searchUniversities(keyword: string, limit = 10) {
  const normalized = normalizeUniversitySearchText(keyword);
  if (!normalized) return getFeaturedUniversities().slice(0, limit);

  return universitySeeds
    .filter((university) =>
      getSearchTargets(university).some((target) => normalizeUniversitySearchText(target).includes(normalized))
    )
    .slice(0, limit);
}

function getSearchTargets(university: UniversitySeed) {
  return [university.name, university.shortName, ...university.aliases];
}

function normalizeUniversitySearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/대학교|대학|학교/g, "대")
    .replace(/[^가-힣a-z0-9]/g, "");
}
