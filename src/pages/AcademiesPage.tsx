import { FormEvent, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AcademyCard from "../components/AcademyCard";
import FilterChips from "../components/FilterChips";
import PageLayout from "../components/PageLayout";
import { academies, regions, types } from "../data/academies";
import { findUniversityByName, getFeaturedUniversities, searchUniversities } from "../data/universities";
import { getAcademyDisplayName } from "../utils/academyDisplay";
import { getAcademyAggregatedInsights, getAcademyReviewStats } from "../utils/reviewStats";

const primaryRegions = ["전체", "서울", "경기", "부산", "울산", "대구", "광주"];
const primaryTypes = ["기초디자인", "기초소양", "발상과 표현", "회화", "조소", "만화·애니"];
const featuredSchoolOptions = getFeaturedUniversities().slice(0, 8).map((university) => university.name);
const PAGE_SIZE = 20;

export default function AcademiesPage() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("latest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showAllRegions, setShowAllRegions] = useState(false);
  const [showAllTypes, setShowAllTypes] = useState(false);
  const [schoolKeyword, setSchoolKeyword] = useState("");
  const region = params.get("region") || "전체";
  const type = params.get("type") || "전체";
  const district = params.get("district") || "전체";
  const schoolParam = params.get("school") || "";
  const school = schoolParam ? findUniversityByName(schoolParam)?.name || schoolParam : "";
  const keyword = params.get("q") || "";
  const page = Math.max(1, Number(params.get("page") || "1") || 1);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const districtOptions = useMemo(() => {
    const districts = academies
      .filter((academy) => region !== "전체" && academy.region === region)
      .map((academy) => academy.district);

    return ["전체", ...Array.from(new Set(districts)).sort((a, b) => a.localeCompare(b, "ko"))];
  }, [region]);

  const results = useMemo(() => {
    const withIndex = academies.map((academy, index) => ({ academy, index, stats: getAcademyReviewStats(academy.id), insights: getAcademyAggregatedInsights(academy.id) }));
    const filtered = withIndex.filter(({ academy, insights }) => {
      const regionMatch = region === "전체" || academy.region === region;
      const districtMatch = district === "전체" || academy.district === district;
      const displayName = getAcademyDisplayName(academy);
      const keywordMatch = !keyword || [academy.name, displayName, academy.location, academy.address, academy.region, academy.district].some((text) => text.includes(keyword));
      const typeLabels = [...insights.preparedTypeCounts, ...insights.strongTypeCounts].map((item) => item.label);
      const typeFallback = [...academy.entranceTypes, ...academy.strongTypes];
      const typeMatch = type === "전체" || [...typeLabels, ...typeFallback].some((academyType) => academyType === type);
      const schoolLabels = [...insights.schoolTagCounts.map((item) => item.label), ...academy.schoolTags.map((tag) => tag.schoolName)]
        .map((label) => findUniversityByName(label)?.name || label);
      const schoolMatch = !school || schoolLabels.includes(school) || (school === "기타" && schoolLabels.length === 0);
      return regionMatch && districtMatch && keywordMatch && typeMatch && schoolMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "name") return getAcademyDisplayName(a.academy).localeCompare(getAcademyDisplayName(b.academy), "ko");
      if (sort === "reviewCount") return b.stats.reviewCount - a.stats.reviewCount || a.index - b.index;
      if (sort === "ratingHigh" || sort === "ratingLow") {
        const aHasReviews = a.stats.reviewCount > 0;
        const bHasReviews = b.stats.reviewCount > 0;
        if (aHasReviews !== bHasReviews) return aHasReviews ? -1 : 1;
        if (!aHasReviews && !bHasReviews) return a.index - b.index;
        return sort === "ratingHigh"
          ? b.stats.averageRating - a.stats.averageRating || a.index - b.index
          : a.stats.averageRating - b.stats.averageRating || a.index - b.index;
      }
      if (sort === "latest") {
        const aTime = a.academy.createdAt ? new Date(a.academy.createdAt).getTime() : 0;
        const bTime = b.academy.createdAt ? new Date(b.academy.createdAt).getTime() : 0;
        if (aTime || bTime) return bTime - aTime;
        return a.index - b.index;
      }
      return 0;
    }).map((item) => item.academy);
  }, [region, district, type, school, keyword, sort]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedResults = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function updateParam(key: "region" | "district" | "type" | "q", value: string) {
    const next = new URLSearchParams(params);
    if (value === "전체" || value === "") next.delete(key);
    else next.set(key, value);
    if (key === "region") next.delete("district");
    next.delete("page");
    setParams(next);
  }

  function updateSchool(value: string) {
    const next = new URLSearchParams(params);
    const normalizedValue = value ? findUniversityByName(value)?.name || value : "";
    if (!normalizedValue || normalizedValue === school) next.delete("school");
    else next.set("school", normalizedValue);
    next.delete("page");
    setParams(next);
  }

  function applyKeywordSearch(event: FormEvent) {
    event.preventDefault();
    const next = new URLSearchParams(params);
    if (searchKeyword.trim()) next.set("q", searchKeyword.trim());
    else next.delete("q");
    next.delete("page");
    setParams(next);
  }

  function updatePage(nextPage: number) {
    const next = new URLSearchParams(params);
    if (nextPage <= 1) next.delete("page");
    else next.set("page", String(nextPage));
    setParams(next);
  }

  function resetFilters() {
    setSearchKeyword("");
    setParams(new URLSearchParams());
  }

  const activeChips = [
    region !== "전체" ? { key: "region", label: region } : null,
    district !== "전체" ? { key: "district", label: district } : null,
    type !== "전체" ? { key: "type", label: type } : null,
    school ? { key: "school", label: school } : null,
    keyword ? { key: "q", label: keyword } : null,
  ].filter(Boolean) as { key: "region" | "district" | "type" | "school" | "q"; label: string }[];
  const hasActiveFilters = activeChips.length > 0;

  const visibleRegions = showAllRegions ? regions : primaryRegions;
  const visibleTypes = showAllTypes ? types : primaryTypes;
  const visibleSchools = ["기타", ...featuredSchoolOptions];
  const uniqueVisibleSchools = Array.from(new Set(visibleSchools));
  const searchedSchools = schoolKeyword.trim() ? searchUniversities(schoolKeyword, 8) : [];

  return (
    <PageLayout>
      <section className="page-head">
        <h1>학원 찾기</h1>
        <p>지역, 유형, 학원 이름으로 미술학원 후보를 찾아보세요.</p>
      </section>
      <form className="academy-search-row" onSubmit={applyKeywordSearch}>
        <input value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)} placeholder="학원명이나 지역을 검색해 보세요" aria-label="학원명이나 지역 검색" />
        <button type="submit" className="primary-button">검색</button>
        <button type="button" className="secondary-button" onClick={() => setIsFilterOpen((value) => !value)}>필터</button>
      </form>
      {activeChips.length > 0 && (
        <div className="active-filter-chips" aria-label="선택된 필터">
          {activeChips.map((chip) => (
            <button type="button" key={chip.key} onClick={() => chip.key === "school" ? updateSchool("") : updateParam(chip.key, "")}>
              {chip.label} ×
            </button>
          ))}
        </div>
      )}
      <section className="section">
        {isFilterOpen && (
          <div className="filter-panel">
            <details className="filter-accordion" open>
              <summary>지역</summary>
              <FilterChips label="지역" items={visibleRegions} value={region} onChange={(value) => updateParam("region", value)} tone="region" />
              {!showAllRegions && <div className="filter-more-row"><span aria-hidden="true" /><button type="button" className="text-button filter-more-button" onClick={() => setShowAllRegions(true)}>지역 더보기</button></div>}
              {region !== "전체" && districtOptions.length > 1 && (
                <FilterChips label="세부 지역" items={districtOptions} value={district} onChange={(value) => updateParam("district", value)} tone="region" />
              )}
            </details>
            <details className="filter-accordion">
              <summary>전형</summary>
              <FilterChips label="전형" items={["전체", ...visibleTypes]} value={type} onChange={(value) => updateParam("type", value)} tone="type" />
              {!showAllTypes && <div className="filter-more-row"><span aria-hidden="true" /><button type="button" className="text-button filter-more-button" onClick={() => setShowAllTypes(true)}>전형 더보기</button></div>}
            </details>
            <details className="filter-accordion">
              <summary>주요 대비 대학</summary>
              <FilterChips label="추천 대학" items={uniqueVisibleSchools} value={school} onChange={updateSchool} tone="type" />
              <div className="filter-more-row">
                <span aria-hidden="true" />
                <div className="filter-search-column">
                <input
                  value={schoolKeyword}
                  onChange={(event) => setSchoolKeyword(event.target.value)}
                  placeholder="더 많은 대학 검색"
                  aria-label="주요 대비 대학 검색"
                />
                {searchedSchools.length > 0 && (
                  <div className="filter-search-results">
                    {searchedSchools.map((university) => (
                      <button type="button" key={university.id} onClick={() => {
                        updateSchool(university.name);
                        setSchoolKeyword("");
                      }}>
                        {university.shortName}
                        <span>{university.name}</span>
                      </button>
                    ))}
                  </div>
                )}
                </div>
              </div>
            </details>
          </div>
        )}
        <div className="list-tools">
          <span>검색 결과 {results.length}개</span>
          <div className="tool-actions">
            {keyword && <button type="button" className="text-button" onClick={() => updateParam("q", "")}>검색어 지우기</button>}
            <select value={sort} onChange={(event) => {
              setSort(event.target.value);
              updatePage(1);
            }} aria-label="정렬">
              <option value="latest">최신순</option>
              <option value="name">이름순</option>
              <option value="reviewCount">리뷰 많은순</option>
              <option value="ratingHigh">하트 높은순</option>
              <option value="ratingLow">하트 낮은순</option>
            </select>
          </div>
        </div>
        {results.length > 0 ? (
          <>
            <div className="academy-grid">
              {pagedResults.map((academy) => (
                <AcademyCard key={academy.id} academy={academy} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="pagination-controls" aria-label="학원 목록 페이지 이동">
                <button type="button" onClick={() => updatePage(currentPage - 1)} disabled={currentPage <= 1}>이전</button>
                <strong>{currentPage} / {totalPages}</strong>
                <button type="button" onClick={() => updatePage(currentPage + 1)} disabled={currentPage >= totalPages}>다음</button>
              </div>
            )}
          </>
        ) : (
          <div className="empty-state">
            <h2>조건에 맞는 학원이 없어요.</h2>
            <p>검색어 또는 필터를 조금 넓혀서 다시 확인해 주세요.</p>
            {hasActiveFilters ? (
              <button type="button" className="primary-button" onClick={resetFilters}>필터 초기화</button>
            ) : (
              <Link className="primary-button" to="/review/new">학원 정보 등록하기</Link>
            )}
          </div>
        )}
      </section>
    </PageLayout>
  );
}
