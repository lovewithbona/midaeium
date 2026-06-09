import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AcademyCard from "../components/AcademyCard";
import CTABox from "../components/CTABox";
import FilterChips from "../components/FilterChips";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchBar";
import { academies, regions } from "../data/academies";
import { demoReviews } from "../data/reviews";

export default function HomePage() {
  const [region, setRegion] = useState("전체");
  const [page, setPage] = useState(1);
  const recentItems = demoReviews.slice(0, 3);
  const filteredAcademies = useMemo(() => {
    const filtered = academies.filter((academy) => region === "전체" || academy.region === region);

    return [...filtered]
      .sort((a, b) => {
        if (region === "전체") {
          const homepagePriority = Number(Boolean(b.homepageUrl)) - Number(Boolean(a.homepageUrl));
          if (homepagePriority !== 0) return homepagePriority;
        }

        return a.name.localeCompare(b.name, "ko");
      });
  }, [region]);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(filteredAcademies.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const previewAcademies = filteredAcademies.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function handleRegionChange(nextRegion: string) {
    setRegion(nextRegion);
    setPage(1);
  }

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
              <FilterChips label="지역" items={regions} value={region} onChange={handleRegionChange} />
            </div>
            <div className="home-list-head">
              <span>{region === "전체" ? "전체" : region} 결과 {filteredAcademies.length}개</span>
              <div className="pagination-controls" aria-label="학원 목록 페이지">
                <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1}>이전</button>
                <strong>{currentPage} / {totalPages}</strong>
                <button type="button" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={currentPage === totalPages}>다음</button>
              </div>
            </div>
            <div className="academy-grid">
              {previewAcademies.map((academy) => (
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
