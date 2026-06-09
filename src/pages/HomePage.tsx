import { Link } from "react-router-dom";
import CTABox from "../components/CTABox";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchBar";
import { demoReviews } from "../data/reviews";

export default function HomePage() {
  const recentItems = demoReviews.slice(0, 3);

  return (
    <PageLayout>
      <div className="home-grid">
        <section>
          <div className="hero">
            <p className="eyebrow">미대 입시 정보 플랫폼</p>
            <h1>한국의 모든 미대 입시생을 위해!</h1>
            <p>
              미대이음은 미대 입시 정보의 차이를 줄이고, 미대 입시를 준비하는 학생들이 학원 정보와 실제 리뷰를 쉽게 찾고 비교할 수 있도록 돕습니다.
            </p>
          </div>
          <SearchBar />
          <section className="section">
            <h2>무엇부터 볼까요?</h2>
            <div className="home-entry-grid">
              <Link className="home-entry-card" to="/academies">
                <span>학원 찾기</span>
                <h3>지역과 전형에 맞는 학원 찾기</h3>
                <p>152개 학원 후보를 지역, 유형, 이름으로 검색하고 실제 리뷰를 비교해 볼 수 있습니다.</p>
              </Link>
              <Link className="home-entry-card guide" to="/guide">
                <span>입시 가이드</span>
                <h3>나는 어떤 전형을 선택해야 할까?</h3>
                <p>전공 방향, 실기 유형, 학원 선택 기준을 순서대로 확인하면서 준비 방향을 잡아볼 수 있습니다.</p>
              </Link>
            </div>
          </section>
        </section>
        <aside className="sidebar">
          <CTABox />
          <section className="side-box">
            <h2>최근 학원 리뷰</h2>
            <div className="recent-list">
              {recentItems.map((review) => (
                <Link key={review.id} className="recent-item recent-link" to={`/academies/${review.academyId}?tab=reviews`}>
                  <div>
                    <strong>{review.academyName}</strong>
                    <p>{review.pros}</p>
                    <span>익명 · {review.writerStatus}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </PageLayout>
  );
}
