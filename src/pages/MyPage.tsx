import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies, type ReviewStatus } from "../data/academies";
import { getAllReviews } from "../utils/reviewStats";
import { clearFakeUser, getFakeUser, saveModerationStatus } from "../utils/storage";

export default function MyPage() {
  const navigate = useNavigate();
  const user = getFakeUser();
  const [, setModerationTick] = useState(0);
  const reviewCandidates = getAllReviews({ includePending: true })
    .filter((review) => review.source === "google-form" || review.status !== "public")
    .sort((a, b) => {
      const statusOrder = { pending: 0, public: 1, hidden: 2, rejected: 3 };
      return statusOrder[a.status] - statusOrder[b.status] || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  const pendingReviews = reviewCandidates.filter((review) => review.status === "pending");

  function handleLogout() {
    clearFakeUser();
    navigate("/login");
  }

  function updateReviewStatus(reviewId: string, status: ReviewStatus) {
    saveModerationStatus(reviewId, status);
    setModerationTick((value) => value + 1);
  }

  if (!user) {
    return (
      <PageLayout>
        <section className="empty-state">
          <h1>로그인이 필요합니다.</h1>
          <p>관리자 계정으로 로그인하면 마이페이지 예시를 확인할 수 있습니다.</p>
          <Link className="primary-button" to="/login">로그인하기</Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="mypage-page">
      <section className="mypage-hero">
        <div>
          <p className="eyebrow">관리자 마이페이지</p>
          <h1>리뷰 검수 현황</h1>
          <p>구글폼 정리본과 이 브라우저에 저장된 리뷰를 함께 검수합니다.</p>
        </div>
        <button className="secondary-button" type="button" onClick={handleLogout}>로그아웃</button>
      </section>

      <section className="mypage-summary">
        <div>
          <span>로그인 계정</span>
          <strong>{user}</strong>
        </div>
        <div>
          <span>검수 대기 리뷰</span>
          <strong>{pendingReviews.length}개</strong>
        </div>
        <div>
          <span>전체 학원 후보</span>
          <strong>{academies.length}개</strong>
        </div>
      </section>

      <section className="mypage-panel">
        <div className="section-title-row">
          <div>
            <h2>내가 확인할 리뷰</h2>
            <p className="muted">운영자 확인 후 공개 여부를 결정하는 화면 예시입니다.</p>
          </div>
          <Link className="secondary-button" to="/review/new">리뷰 등록 테스트</Link>
        </div>
        {reviewCandidates.length > 0 ? (
          <div className="admin-review-list">
            {reviewCandidates.map((review) => (
              <article className={`admin-review-item ${review.moderationFlags?.length ? "flagged" : ""}`} key={review.id}>
                <div className="admin-review-meta">
                  <div>
                    <strong>{review.academyNameRaw || review.academyName}</strong>
                    <p className="muted">
                      {review.source === "google-form" ? `구글폼 ${review.sourceRow}행` : "사이트 등록 리뷰"} · 상태 {getStatusLabel(review.status)}
                    </p>
                    <p className="muted">{getMatchedAcademyLabel(review.academyId)}</p>
                  </div>
                  {review.moderationFlags && review.moderationFlags.length > 0 && (
                    <div className="moderation-flags" aria-label="검수 주의 플래그">
                      {review.moderationFlags.map((flag) => <span key={flag}>{flag}</span>)}
                    </div>
                  )}
                </div>
                {review.schoolTextRaw && (
                  <div className="raw-note">
                    <b>강점 학교 원문</b>
                    <p>{review.schoolTextRaw}</p>
                  </div>
                )}
                <ReviewCard review={review} />
                <div className="moderation-actions">
                  <button type="button" className="primary-button" onClick={() => updateReviewStatus(review.id, "public")}>공개 처리</button>
                  <button type="button" className="secondary-button" onClick={() => updateReviewStatus(review.id, "pending")}>보류 처리</button>
                  <button type="button" className="secondary-button danger-button" onClick={() => updateReviewStatus(review.id, "hidden")}>제외 처리</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state compact-empty">
            <h2>아직 검수 대기 리뷰가 없습니다.</h2>
            <p>리뷰 등록 페이지에서 테스트 리뷰를 작성하면 이곳에 표시됩니다.</p>
            <Link className="primary-button" to="/review/new">리뷰 등록하기</Link>
          </div>
        )}
      </section>
    </PageLayout>
  );
}

function getStatusLabel(status: ReviewStatus) {
  if (status === "public") return "공개";
  if (status === "hidden" || status === "rejected") return "제외";
  return "검수 대기";
}

function getMatchedAcademyLabel(academyId: string) {
  if (academyId.startsWith("unmatched-")) return "매칭 학원: 확인 필요";
  const academy = academies.find((item) => item.id === academyId);
  return academy ? `매칭 학원: ${academy.name}` : "매칭 학원: 확인 필요";
}
