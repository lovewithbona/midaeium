import type { Academy } from "../data/academies";

export function getAcademyDisplayName(academy: Academy) {
  const districtName = normalizePlaceName(academy.district);
  const regionName = normalizePlaceName(academy.region);

  return moveLeadingPlaceName(academy.name, districtName) || moveLeadingPlaceName(academy.name, regionName) || academy.name;
}

function normalizePlaceName(name: string) {
  return name.replace(/(특별시|광역시|특별자치시|특별자치도|시|군|구)$/u, "");
}

function moveLeadingPlaceName(name: string, placeName: string) {
  if (!placeName || !name.startsWith(`${placeName} `)) return "";

  const rest = name.slice(placeName.length).trim();
  return rest ? `${rest} ${placeName}` : name;
}
