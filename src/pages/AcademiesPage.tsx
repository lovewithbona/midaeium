import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AcademyCard from "../components/AcademyCard";
import FilterChips from "../components/FilterChips";
import PageLayout from "../components/PageLayout";
import SearchBar from "../components/SearchBar";
import { academies, regions, types } from "../data/academies";

export default function AcademiesPage() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("latest");
  const region = params.get("region") || "전체";
  const type = params.get("type") || "전체";
  const district = params.get("district") || "전체";
  const keyword = params.get("q") || "";

  const districtOptions = useMemo(() => {
    const districts = academies
      .filter((academy) => region !== "전체" && academy.region === region)
      .map((academy) => academy.district);

    return ["전체", ...Array.from(new Set(districts)).sort((a, b) => a.localeCompare(b, "ko"))];
  }, [region]);

  const results = useMemo(() => {
    const filtered = academies.filter((academy) => {
      const regionMatch = region === "전체" || academy.region === region;
      const districtMatch = district === "전체" || academy.district === district;
      const keywordMatch = !keyword || [academy.name, academy.location, academy.address, academy.district].some((text) => text.includes(keyword));
      const typeMatch = type === "전체" || [...academy.entranceTypes, ...academy.strongTypes].some((academyType) => academyType === type);
      return regionMatch && districtMatch && keywordMatch && typeMatch;
    });

    return [...filtered].sort((a, b) => {
      if (region === "전체" && sort === "latest") {
        const homepagePriority = Number(Boolean(b.homepageUrl)) - Number(Boolean(a.homepageUrl));
        if (homepagePriority !== 0) return homepagePriority;
      }

      if (sort === "name") return a.name.localeCompare(b.name, "ko");
      if (sort === "district") return a.district.localeCompare(b.district, "ko");
      return 0;
    });
  }, [region, district, type, keyword, sort]);

  function updateParam(key: "region" | "district" | "type" | "q", value: string) {
    const next = new URLSearchParams(params);
    if (value === "전체" || value === "") next.delete(key);
    else next.set(key, value);
    if (key === "region") next.delete("district");
    setParams(next);
  }

  function applySearch(filters: { region: string; type: string; keyword: string }) {
    const next = new URLSearchParams(params);
    if (filters.region === "전체") next.delete("region");
    else next.set("region", filters.region);
    if (filters.type === "전체") next.delete("type");
    else next.set("type", filters.type);
    if (filters.keyword) next.set("q", filters.keyword);
    else next.delete("q");
    next.delete("district");
    setParams(next);
  }

  return (
    <PageLayout>
      <section className="page-head">
        <h1>학원 찾기</h1>
        <p>지역, 유형, 학원 이름으로 미술학원 후보를 찾아보세요.</p>
      </section>
      <SearchBar initialRegion={region} initialType={type} initialKeyword={keyword} onSearch={applySearch} />
      <section className="section">
        <FilterChips label="지역" items={regions} value={region} onChange={(value) => updateParam("region", value)} tone="region" />
        {region !== "전체" && districtOptions.length > 1 && (
          <FilterChips label="구/시" items={districtOptions} value={district} onChange={(value) => updateParam("district", value)} tone="region" />
        )}
        <FilterChips label="유형" items={["전체", ...types]} value={type} onChange={(value) => updateParam("type", value)} tone="type" />
        <div className="list-tools">
          <span>검색 결과 {results.length}개</span>
          <div className="tool-actions">
            {keyword && <button type="button" className="text-button" onClick={() => updateParam("q", "")}>검색어 지우기</button>}
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="정렬">
              <option value="latest">최신순</option>
              <option value="district">지역순</option>
              <option value="name">이름순</option>
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
