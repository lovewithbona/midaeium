import type { Academy } from "../data/academies";
import { getAcademyDisplayName } from "../utils/academyDisplay";
import { getGoogleMapUrl, getOpenStreetMapUrl } from "../utils/mapLinks";

export default function AcademyMapSection({ academy }: { academy: Academy }) {
  const displayName = getAcademyDisplayName(academy);
  const googleMapUrl = getGoogleMapUrl(displayName, academy.address);
  const openStreetMapUrl = getOpenStreetMapUrl(displayName, academy.address);
  const hasCoordinates = typeof academy.latitude === "number" && typeof academy.longitude === "number";

  return (
    <section className="map-link-card" aria-label="지도 연결" data-has-coordinates={hasCoordinates}>
      <span>{academy.region} {academy.district}</span>
      <strong>{academy.address}</strong>
      <div className="map-link-actions">
        <a href={googleMapUrl} target="_blank" rel="noopener noreferrer">Google 지도에서 보기</a>
        <a href={openStreetMapUrl} target="_blank" rel="noopener noreferrer">OpenStreetMap에서 보기</a>
      </div>
      <p className="map-link-note">지도 정보는 외부 지도 서비스의 검색 결과를 기준으로 열립니다. 방문 전 학원 공식 채널에서 주소를 한 번 더 확인해 주세요.</p>
    </section>
  );
}
