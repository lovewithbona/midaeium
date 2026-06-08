import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regions, types } from "../data/academies";

type SearchBarProps = {
  initialRegion?: string;
  initialType?: string;
  initialKeyword?: string;
};

export default function SearchBar({ initialRegion = "전체", initialType = "전체", initialKeyword = "" }: SearchBarProps) {
  const navigate = useNavigate();
  const [region, setRegion] = useState(initialRegion);
  const [type, setType] = useState(initialType);
  const [keyword, setKeyword] = useState(initialKeyword);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (region !== "전체") params.set("region", region);
    if (type !== "전체") params.set("type", type);
    if (keyword.trim()) params.set("q", keyword.trim());
    navigate(`/academies?${params.toString()}`);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="search-field">
        <span>지역</span>
        <select value={region} onChange={(event) => setRegion(event.target.value)} aria-label="지역">
          {regions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="search-field">
        <span>유형</span>
        <select value={type} onChange={(event) => setType(event.target.value)} aria-label="유형">
          <option>전체</option>
          {types.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="search-field search-field-wide">
        <span>학원 이름</span>
        <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="예: 강남 베테랑미술학원" aria-label="학원 이름" />
      </label>
      <button type="submit" aria-label="검색">
        검색
      </button>
    </form>
  );
}
