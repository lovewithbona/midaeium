import AcademyCard from "../components/AcademyCard";
import CTABox from "../components/CTABox";
import FilterChips from "../components/FilterChips";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchBar";
import { academies, regions } from "../data/academies";
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
            <h2>학원 정보 둘러보기</h2>
            <div className="filters-preview">
              <FilterChips label="지역" items={regions} value="전체" onChange={() => undefined} />
            </div>
            <div className="academy-grid">
              {academies.slice(0, 4).map((academy) => (
                <AcademyCard key={academy.id} academy={academy} />
              ))}
            </div>
          </section>
        </section>
        <aside className="sidebar">
          <CTABox />
          <section className="side-box">
            <h2>최근 학원 리뷰</h2>
            <div className="recent-list">
              {recentItems.map((review) => (
                <div key={review.id} className="recent-item">
                  <div>
                    <strong>{review.academyName}</strong>
                    <p>{review.pros}</p>
                    <span>익명 · {review.writerStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </PageLayout>
  );
}
