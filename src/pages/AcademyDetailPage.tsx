import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies, getAcademyMapUrl } from "../data/academies";
import { getAcademyReviewStats } from "../utils/reviewStats";

export default function AcademyDetailPage() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const activeTab = params.get("tab") === "reviews" ? "reviews" : "info";
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
  const homepageLabel = getHomepageLabel(academy.officialWebsiteUrl);
  const hasChannel = Boolean(academy.officialWebsiteUrl || academy.instagramUrl || academy.naverBlogUrl);

  return (
    <PageLayout>
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{academy.region} {academy.district}</p>
          <h1>{academy.name}</h1>
          <p>{academy.location} · 리뷰 {reviewCount}개 · ♥ {averageRating ? averageRating.toFixed(1) : "0.0"}</p>
        </div>
        <Link className="primary-button" to="/review/new">리뷰 등록하기</Link>
      </section>
      <div className="detail-tabs" role="tablist" aria-label="학원 상세 보기">
        <button
          type="button"
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setParams({})}
          role="tab"
          aria-selected={activeTab === "info"}
        >
          학원 정보
        </button>
        <button
          type="button"
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setParams({ tab: "reviews" })}
          role="tab"
          aria-selected={activeTab === "reviews"}
        >
          리뷰 {reviewCount}개
        </button>
      </div>
      <section className="detail-grid">
        {activeTab === "info" && (
        <div className="detail-card">
          <h2>학원 정보</h2>
          <div className="guide-inline-card">
            <strong>용어를 모르겠나요?</strong>
            <span>준비 가능 전형이나 실기 유형이 낯설다면 입시 가이드에서 먼저 확인해 봐.</span>
            <Link to="/guide">입시 가이드 보기</Link>
          </div>
          <div className="detail-summary-grid">
            <div>
              <span>지역</span>
              <strong>{academy.region} {academy.district}</strong>
            </div>
            <div>
              <span>주소</span>
              <strong>{academy.address}</strong>
            </div>
            <div>
              <span>준비 가능 전형</span>
              <strong>{academy.entranceTypes.length > 0 ? academy.entranceTypes.join(", ") : "확인 중"}</strong>
            </div>
            <div>
              <span>강점 입시 유형</span>
              <strong>{academy.strongTypes.length > 0 ? academy.strongTypes.join(", ") : "확인 중"}</strong>
            </div>
          </div>
          {hasChannel && (
            <dl className="detail-list compact">
              {academy.officialWebsiteUrl && (
                <>
                  <dt>공식 홈페이지</dt>
                  <dd><a href={academy.officialWebsiteUrl} target="_blank" rel="noreferrer">{homepageLabel}</a></dd>
                </>
              )}
              {academy.instagramUrl && (
                <>
                  <dt>인스타그램</dt>
                  <dd><a href={academy.instagramUrl} target="_blank" rel="noreferrer">인스타그램 보기</a></dd>
                </>
              )}
              {academy.naverBlogUrl && (
                <>
                  <dt>네이버 블로그</dt>
                  <dd><a href={academy.naverBlogUrl} target="_blank" rel="noreferrer">네이버 블로그 보기</a></dd>
                </>
              )}
            </dl>
          )}
          <div className="map-link-card">
            <span>{academy.region} {academy.district}</span>
            <strong>{academy.address}</strong>
            <p>웹사이트 안에서 바로 보는 지도 기능은 추후 제공 예정입니다.</p>
            <a href={getAcademyMapUrl(academy)} target="_blank" rel="noreferrer">네이버 지도에서 위치 보기</a>
          </div>
        </div>
        )}
        {activeTab === "reviews" && (
        <div className="detail-card review-panel">
          <h2>등록된 리뷰 {reviewCount}개</h2>
          <div className="review-list">
            {reviews.length > 0 ? reviews.map((review) => <ReviewCard key={review.id} review={review} />) : <p className="muted">아직 이 학원에 등록된 리뷰가 없어요.</p>}
          </div>
        </div>
        )}
      </section>
    </PageLayout>
  );
}

function getHomepageLabel(url: string | null) {
  if (!url) return "";

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "공식 홈페이지";
  }
}
