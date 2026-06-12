import { FormEvent, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AcademyCard from "../components/AcademyCard";
import FilterChips from "../components/FilterChips";
import PageLayout from "../components/PageLayout";
import { academies, regions, types } from "../data/academies";
import { getAcademyAggregatedInsights, getAcademyReviewStats } from "../utils/reviewStats";

const primaryRegions = ["전체", "서울", "경기", "부산", "울산", "대구", "광주"];
const primaryTypes = ["기초디자인", "기초소양", "발상과 표현", "회화", "조소", "만화·애니"];
const schoolOptions = ["국민대", "건국대", "홍익대", "서울과기대", "이화여대", "숙명여대", "기타"];

export default function AcademiesPage() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("latest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showAllRegions, setShowAllRegions] = useState(false);
  const [showAllTypes, setShowAllTypes] = useState(false);
  const region = params.get("region") || "전체";
  const type = params.get("type") || "전체";
  const district = params.get("district") || "전체";
  const school = params.get("school") || "";
  const keyword = params.get("q") || "";
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
      const keywordMatch = !keyword || [academy.name, academy.location, academy.address, academy.region, academy.district].some((text) => text.includes(keyword));
      const typeLabels = [...insights.preparedTypeCounts, ...insights.strongTypeCounts].map((item) => item.label);
      const typeFallback = [...academy.entranceTypes, ...academy.strongTypes];
      const typeMatch = type === "전체" || [...typeLabels, ...typeFallback].some((academyType) => academyType === type);
      const schoolLabels = [...insights.schoolTagCounts.map((item) => item.label), ...academy.schoolTags.map((tag) => tag.schoolName)];
      const schoolMatch = !school || schoolLabels.includes(school) || (school === "기타" && schoolLabels.length === 0);
      return regionMatch && districtMatch && keywordMatch && typeMatch && schoolMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "name") return a.academy.name.localeCompare(b.academy.name, "ko");
      if (sort === "reviewCount") return b.stats.reviewCount - a.stats.reviewCount || a.index - b.index;
      if (sort === "ratingHigh") return b.stats.averageRating - a.stats.averageRating || a.index - b.index;
      if (sort === "ratingLow") return a.stats.averageRating - b.stats.averageRating || a.index - b.index;
      if (sort === "latest") {
        const aTime = a.academy.createdAt ? new Date(a.academy.createdAt).getTime() : 0;
        const bTime = b.academy.createdAt ? new Date(b.academy.createdAt).getTime() : 0;
        if (aTime || bTime) return bTime - aTime;
        return a.index - b.index;
      }
      return 0;
    }).map((item) => item.academy);
  }, [region, district, type, school, keyword, sort]);

  function updateParam(key: "region" | "district" | "type" | "q", value: string) {
    const next = new URLSearchParams(params);
    if (value === "전체" || value === "") next.delete(key);
    else next.set(key, value);
    if (key === "region") next.delete("district");
    setParams(next);
  }

  function updateSchool(value: string) {
    const next = new URLSearchParams(params);
    if (!value || value === school) next.delete("school");
    else next.set("school", value);
    setParams(next);
  }

  function applyKeywordSearch(event: FormEvent) {
    event.preventDefault();
    const next = new URLSearchParams(params);
    if (searchKeyword.trim()) next.set("q", searchKeyword.trim());
    else next.delete("q");
    setParams(next);
  }

  const activeChips = [
    region !== "전체" ? { key: "region", label: region } : null,
    district !== "전체" ? { key: "district", label: district } : null,
    type !== "전체" ? { key: "type", label: type } : null,
    school ? { key: "school", label: school } : null,
    keyword ? { key: "q", label: keyword } : null,
  ].filter(Boolean) as { key: "region" | "district" | "type" | "school" | "q"; label: string }[];

  const visibleRegions = showAllRegions ? regions : primaryRegions;
  const visibleTypes = showAllTypes ? types : primaryTypes;

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
            <FilterChips label="지역" items={visibleRegions} value={region} onChange={(value) => updateParam("region", value)} tone="region" />
            {!showAllRegions && <button type="button" className="text-button filter-more-button" onClick={() => setShowAllRegions(true)}>지역 더보기</button>}
            {region !== "전체" && districtOptions.length > 1 && (
              <FilterChips label="세부 지역" items={districtOptions} value={district} onChange={(value) => updateParam("district", value)} tone="region" />
            )}
            <FilterChips label="전형" items={["전체", ...visibleTypes]} value={type} onChange={(value) => updateParam("type", value)} tone="type" />
            {!showAllTypes && <button type="button" className="text-button filter-more-button" onClick={() => setShowAllTypes(true)}>전형 더보기</button>}
            <FilterChips label="주요 대비 대학" items={schoolOptions} value={school} onChange={updateSchool} tone="type" />
          </div>
        )}
        <div className="list-tools">
          <span>검색 결과 {results.length}개</span>
          <div className="tool-actions">
            {keyword && <button type="button" className="text-button" onClick={() => updateParam("q", "")}>검색어 지우기</button>}
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="정렬">
              <option value="latest">최신순</option>
              <option value="name">이름순</option>
              <option value="reviewCount">리뷰 많은순</option>
              <option value="ratingHigh">하트 높은순</option>
              <option value="ratingLow">하트 낮은순</option>
            </select>
          </div>
        </div>
        {results.length > 0 ? (
          <div className="academy-grid">
            {results.map((academy) => (
              <AcademyCard key={academy.id} academy={academy} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>아직 등록된 학원이 없어요.</h2>
            <p>이 지역의 학원 정보를 알고 있다면 첫 번째로 등록해 주세요.</p>
            <Link className="primary-button" to="/review/new">학원 정보 등록하기</Link>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
