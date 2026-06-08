import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao?: any;
  }
}

type KakaoMapProps = {
  name: string;
  address: string;
  naverUrl: string;
};

const KAKAO_SCRIPT_ID = "kakao-map-sdk";

function loadKakaoSdk(appKey: string) {
  return new Promise<any>((resolve, reject) => {
    if (window.kakao?.maps?.services) {
      window.kakao.maps.load(() => resolve(window.kakao));
      return;
    }

    const existingScript = document.getElementById(KAKAO_SCRIPT_ID) as HTMLScriptElement | null;

    const handleLoad = () => {
      if (!window.kakao?.maps) {
        reject(new Error("Kakao map SDK is not available."));
        return;
      }

      window.kakao.maps.load(() => resolve(window.kakao));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Kakao map SDK failed to load.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = KAKAO_SCRIPT_ID;
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
    script.onload = handleLoad;
    script.onerror = () => reject(new Error("Kakao map SDK failed to load."));
    document.head.appendChild(script);
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default function KakaoMap({ name, address, naverUrl }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing-key" | "not-found" | "error">("loading");

  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_MAP_KEY;
    let cancelled = false;

    if (!appKey) {
      setStatus("missing-key");
      return;
    }

    setStatus("loading");

    loadKakaoSdk(appKey)
      .then((kakao) => {
        if (cancelled || !mapRef.current) return;

        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result: any[], resultStatus: string) => {
          if (cancelled || !mapRef.current) return;

          if (resultStatus !== kakao.maps.services.Status.OK || !result[0]) {
            setStatus("not-found");
            return;
          }

          const coords = new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x));
          const map = new kakao.maps.Map(mapRef.current, {
            center: coords,
            level: 3,
          });
          const marker = new kakao.maps.Marker({
            map,
            position: coords,
          });
          const infoWindow = new kakao.maps.InfoWindow({
            content: `<div class="map-info-window">${escapeHtml(name)}</div>`,
          });

          infoWindow.open(map, marker);
          setStatus("ready");
        });
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [address, name]);

  const statusText = {
    loading: "지도를 불러오는 중이에요.",
    ready: "",
    "missing-key": "카카오 지도 키가 설정되지 않았어요.",
    "not-found": "주소 좌표를 찾지 못했어요.",
    error: "지도를 불러오지 못했어요.",
  }[status];

  return (
    <div className="kakao-map-card">
      <div ref={mapRef} className="kakao-map-canvas" aria-label={`${name} 지도`} />
      {status !== "ready" && (
        <div className="map-fallback">
          <strong>{address}</strong>
          <p>{statusText}</p>
          <a href={naverUrl} target="_blank" rel="noreferrer">네이버 지도에서 보기</a>
        </div>
      )}
    </div>
  );
}
