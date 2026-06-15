import { Link } from "react-router-dom";
import AnimatedNumber from "../components/AnimatedNumber";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchBar";
import { academies } from "../data/academies";
import { getAllReviews } from "../utils/reviewStats";

export default function HomePage() {
  const academyCount = academies.length;
  const reviewCount = getAllReviews().length;

  return (
    <PageLayout>
      <section className="home-hero">
        <div className="home-hero-copy">
          <h1>한국의 모든 미대 입시생들을 위해서!</h1>
          <h2>지역과 전형에 맞는 학원을 찾고,<br />실제 학생 리뷰를 비교해 보세요.</h2>
          <div className="home-count-banner" aria-label={`현재 미대이음에는 ${academyCount}개의 학원과 ${reviewCount}개의 리뷰가 등록되어 있어요.`}>
            <p aria-hidden="true">현재 미대이음에는</p>
            <div className="home-count-cards" aria-hidden="true">
              <div className="home-count-card">
                <strong><AnimatedNumber value={academyCount} /></strong>
                <span>개의 학원</span>
              </div>
              <div className="home-count-card">
                <strong><AnimatedNumber value={reviewCount} /></strong>
                <span>개의 리뷰</span>
              </div>
            </div>
            <p aria-hidden="true">가 등록되어 있어요.</p>
          </div>
        </div>
        <SearchBar buttonLabel="학원 검색하기" />
      </section>
      <section className="section home-shortcuts" aria-label="주요 바로가기">
        <Link className="home-entry-card" to="/academies">
          <span>탐색</span>
          <h3>학원 찾기</h3>
          <p>지역·전형별 학원 정보를 비교해요.</p>
        </Link>
        <Link className="home-entry-card guide" to="/guide">
          <span>가이드</span>
          <h3>입시 가이드</h3>
          <p>처음 입시하는 학생을 위한 용어와 정보를 확인해요.</p>
        </Link>
        <Link className="home-entry-card review" to="/review/new">
          <span>참여</span>
          <h3>리뷰 등록</h3>
          <p>내가 다닌 학원 경험을 익명으로 남겨요.</p>
        </Link>
      </section>
    </PageLayout>
  );
}
