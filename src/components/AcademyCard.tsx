import { useNavigate } from "react-router-dom";
import { type Academy } from "../data/academies";
import { getAcademyReviewStats } from "../utils/reviewStats";

export default function AcademyCard({ academy }: { academy: Academy }) {
  const navigate = useNavigate();
  const { reviewCount } = getAcademyReviewStats(academy.id);
  const entranceTypes = academy.entranceTypes.length > 0 ? academy.entranceTypes : ["준비 가능 전형 확인 중"];
  const strongTypes = academy.strongTypes.length > 0 ? academy.strongTypes : ["강점 전형 확인 중"];
  const detailUrl = `/academies/${academy.id}`;
  const homepageDomain = getDomain(academy.officialWebsiteUrl);

  function openDetail() {
    navigate(detailUrl);
  }

  return (
    <article
      className="academy-card"
      onClick={openDetail}
      onKeyDown={(event) => {
        if (event.key === "Enter") openDetail();
      }}
      role="link"
      tabIndex={0}
      aria-label={`${academy.name} 상세 보기`}
    >
      <div className={`academy-visual ${homepageDomain ? "has-homepage" : ""}`} aria-hidden="true">
        <span>{academy.district}</span>
        {homepageDomain && (
          <div className="site-preview">
            <small>공식 사이트</small>
            <strong>{homepageDomain}</strong>
            <i />
          </div>
        )}
      </div>
      <div className="card-top">
        <div>
          <h3>{academy.name}</h3>
          <p className="muted">{academy.region} {academy.district}</p>
        </div>
        <span className="status-pill">{academy.verifiedStatus}</span>
      </div>
      <div className="type-block">
        <span className="type-label">준비 가능 전형</span>
        <div className="tag-list">
          {entranceTypes.map((type) => <span className="tag" key={type}>{type}</span>)}
        </div>
      </div>
      <div className="type-block">
        <span className="type-label">강점 전형</span>
        <div className="tag-list">
          {strongTypes.map((type) => <span className="tag tag-strong" key={type}>{type}</span>)}
        </div>
      </div>
      {academy.typeConfidence === "이름 기반 1차 분류" && <p className="type-note">1차 분류</p>}
      {academy.typeConfidence === "확인 필요" && <p className="type-note">전형 확인 필요</p>}
      <div className="card-footer">
        <span>리뷰 {reviewCount}개</span>
      </div>
    </article>
  );
}

function getDomain(url?: string | null) {
  if (!url) return "";

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
