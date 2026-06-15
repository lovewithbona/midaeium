import type { Academy } from "../data/academies";
import { getAcademyDisplayName } from "../utils/academyDisplay";
import { getNaverMapUrl } from "../utils/mapLinks";

export default function AcademyMapSection({ academy }: { academy: Academy }) {
  const displayName = getAcademyDisplayName(academy);
  const mapSearchQuery = academy.mapSearchQuery || `${displayName} ${academy.address}`;
  const naverMapUrl = getNaverMapUrl(mapSearchQuery);

  return (
    <section className="map-link-card" aria-label="지도 연결">
      <span>{academy.region} {academy.district}</span>
      <strong>{academy.address}</strong>
      <div className="map-link-actions">
        <a href={naverMapUrl} target="_blank" rel="noopener noreferrer">네이버 지도에서 보기</a>
      </div>
    </section>
  );
}
