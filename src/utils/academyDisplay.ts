import type { Academy } from "../data/academies";

const leadingPlaceNames = [
  "강남",
  "강동",
  "강북",
  "강서",
  "강원",
  "건대",
  "광주",
  "노량진",
  "대구",
  "대전",
  "대치",
  "동대문",
  "목동",
  "목포",
  "미금",
  "부산",
  "분당",
  "상봉",
  "서현",
  "선릉",
  "송파",
  "수원",
  "수성",
  "신촌",
  "양재",
  "울산",
  "일산",
  "인천",
  "잠실",
  "정자",
  "청주",
  "한티",
  "홍대",
];

export function getAcademyDisplayName(academy: Academy) {
  const districtName = normalizePlaceName(academy.district);
  const regionName = normalizePlaceName(academy.region);

  return [
    districtName,
    regionName,
    ...leadingPlaceNames,
  ].reduce((currentName, placeName) => moveLeadingPlaceName(currentName, placeName) || currentName, academy.name);
}

function normalizePlaceName(name: string) {
  return name.replace(/(특별시|광역시|특별자치시|특별자치도|시|군|구)$/u, "");
}

function moveLeadingPlaceName(name: string, placeName: string) {
  if (!placeName || !name.startsWith(`${placeName} `)) return "";

  const rest = name.slice(placeName.length).trim();
  return rest ? `${rest} ${placeName}` : name;
}
