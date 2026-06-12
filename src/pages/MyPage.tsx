import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ReviewCard from "../components/ReviewCard";
import { academies } from "../data/academies";
import { clearFakeUser, getFakeUser, getStoredReviews } from "../utils/storage";

export default function MyPage() {
  const navigate = useNavigate();
  const user = getFakeUser();
  const storedReviews = getStoredReviews();
  const pendingReviews = storedReviews.filter((review) => review.status === "pending");

  function handleLogout() {
    clearFakeUser();
    navigate("/login");
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
          <p>아직 서버가 연결되지 않은 상태라 이 브라우저에 저장된 리뷰를 기준으로 보여줍니다.</p>
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
        {pendingReviews.length > 0 ? (
          <div className="review-list">
            {pendingReviews.map((review) => <ReviewCard key={review.id} review={review} />)}
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
