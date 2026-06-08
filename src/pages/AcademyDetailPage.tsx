import { Link, useParams } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies, getNaverMapUrl } from "../data/academies";
import { getAcademyReviewStats } from "../utils/reviewStats";

export default function AcademyDetailPage() {
  const { id } = useParams();
  const academy = academies.find((item) => item.id === id);

  if (!academy) {
    return (
      <PageLayout>
        <div className="empty-state">
          <h1>학원을 찾을 수 없어요.</h1>
          <Link className="primary-button" to="/academies">학원 찾기로 돌아가기</Link>
        </div>
      </PageLayout>
    );
  }

  const { averageRating, reviewCount, reviews } = getAcademyReviewStats(academy.id);

  return (
    <PageLayout>
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{academy.region} {academy.district}</p>
          <h1>{academy.name}</h1>
          <p>{academy.location}</p>
        </div>
        <Link className="primary-button" to="/review/new">리뷰 등록하기</Link>
      </section>
      <section className="detail-grid">
        <div className="detail-card">
          <h2>학원 정보</h2>
          <dl className="detail-list">
            <dt>위치</dt>
            <dd>{academy.location}</dd>
            <dt>주소</dt>
            <dd>{academy.address}</dd>
            <dt>입시 유형</dt>
            <dd>{academy.entranceTypes.length > 0 ? academy.entranceTypes.join(", ") : "준비 가능 전형 확인 중"}</dd>
            <dt>강점 전형</dt>
            <dd>{academy.strongTypes.length > 0 ? academy.strongTypes.join(", ") : "강점 전형 확인 중"}</dd>
            <dt>유형 확인</dt>
            <dd>{academy.typeConfidence}</dd>
            <dt>공식 홈페이지</dt>
            <dd>{academy.homepageUrl ? <a href={academy.homepageUrl} target="_blank" rel="noreferrer">바로가기</a> : "확인 필요"}</dd>
            <dt>리뷰 평점</dt>
            <dd>{reviewCount}개 · ♥ {averageRating ? averageRating.toFixed(1) : "0.0"}</dd>
            <dt>검수 상태</dt>
            <dd>{academy.verifiedStatus}</dd>
          </dl>
          <div className="link-row">
            {academy.homepageUrl && <a href={academy.homepageUrl} target="_blank" rel="noreferrer">홈페이지</a>}
            <a href={getNaverMapUrl(academy.mapSearchQuery)} target="_blank" rel="noreferrer">지도 보기</a>
          </div>
          <KakaoMap name={academy.name} address={academy.address} naverUrl={getNaverMapUrl(academy.mapSearchQuery)} />
        </div>
        <div className="detail-card review-panel">
          <h2>등록된 리뷰 {reviewCount}개</h2>
          <div className="review-list">
            {reviews.length > 0 ? reviews.map((review) => <ReviewCard key={review.id} review={review} />) : <p className="muted">아직 이 학원에 등록된 리뷰가 없어요.</p>}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
