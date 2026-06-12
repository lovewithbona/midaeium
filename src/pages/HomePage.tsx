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
        <h1 className="home-title">미대 입시</h1>
        <div className="home-count-banner">
          <span className="sr-only">현재 {academyCount}개의 학원과 {reviewCount}개의 리뷰가 등록되어 있어요.</span>
          <span aria-hidden="true">현재</span>
          <strong aria-hidden="true"><AnimatedNumber value={academyCount} />개의 학원</strong>
          <span aria-hidden="true">과</span>
          <strong aria-hidden="true"><AnimatedNumber value={reviewCount} />개의 리뷰</strong>
          <span aria-hidden="true">가 등록되어 있어요.</span>
        </div>
        <h2>미대 입시 정보의 차이를 줄입니다.</h2>
        <p>지역과 전형에 맞는 학원을 찾고, 실제 학생 리뷰를 비교해 보세요.</p>
        <SearchBar buttonLabel="검색하기" />
      </section>
      <section className="section home-shortcuts" aria-label="주요 바로가기">
        <Link className="home-entry-card" to="/academies">
          <span>학원 찾기</span>
          <h3>학원 찾기</h3>
          <p>지역·전형별 학원 정보를 비교해요.</p>
        </Link>
        <Link className="home-entry-card guide" to="/guide">
          <span>입시 가이드</span>
          <h3>입시 가이드</h3>
          <p>처음 입시하는 학생을 위한 용어와 정보를 확인해요.</p>
        </Link>
        <Link className="home-entry-card review" to="/review/new">
          <span>리뷰 등록</span>
          <h3>리뷰 등록</h3>
          <p>내가 다닌 학원 경험을 익명으로 남겨요.</p>
        </Link>
      </section>
    </PageLayout>
  );
}
