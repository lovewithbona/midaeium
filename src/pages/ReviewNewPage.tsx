import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { academies, regions, types } from "../data/academies";
import type { Review } from "../data/academies";
import { saveStoredReview } from "../utils/storage";

const moods = ["매우 진지해요", "진지한 편이에요", "보통이에요", "자유로운 편이에요", "매우 자유로워요"];
const feedbackStyles = ["꼼꼼하게 설명해줘요", "빠르게 핵심만 짚어줘요", "칭찬보다 지적이 많은 편이에요", "말투가 직설적인 편이에요", "피드백이 감정적으로 느껴질 때가 있어요", "학생마다 관리 차이가 느껴져요", "스스로 생각하게 유도해요"];
const homeworkLoads = ["적은 편이에요", "적당해요", "많은 편이에요", "매우 많아요"];
const classLevels = ["입문자도 가능해요", "기본기가 있으면 좋아요", "어느 정도 실력이 필요해요", "상급자에게 적합해요"];
const goodTagOptions = ["피드백이 꼼꼼함", "기본기를 잘 잡아줌", "입시 정보가 많음", "질문하기 편함", "개별 관리가 있음", "자료/시범이 도움됨", "실전 감각을 키우기 좋음", "분위기가 집중됨"];
const concernTagOptions = ["피드백이 감정적으로 느껴짐", "학생별 피드백 편차가 있음", "질문하기 어려운 분위기", "과제량이 부담스러움", "수업 속도가 빠름", "대기 시간이 있음", "추가 비용 안내가 부족함", "상담과 실제 수업이 다르게 느껴짐", "초보자가 따라가기 어려움", "분위기가 너무 경쟁적임"];
const cautionTagOptions = ["멘탈 관리가 필요함", "스스로 질문해야 놓치지 않음", "과제 시간을 확보해야 함", "선생님 스타일 확인 필요", "비용/수업 방식을 상담 때 확인 추천", "체험 수업 후 결정 추천"];
const statuses = ["고3", "재수생", "N수생", "학부모"];
const MIN_SUMMARY_LENGTH = 20;

export default function ReviewNewPage() {
  const [academyId, setAcademyId] = useState(academies[0].id);
  const [keyword, setKeyword] = useState("");
  const [isNewAcademy, setIsNewAcademy] = useState(false);
  const [done, setDone] = useState(false);
  const [preparedTypes, setPreparedTypes] = useState<string[]>(["기초디자인"]);
  const [strongTypes, setStrongTypes] = useState<string[]>(["기초디자인"]);
  const [goodTags, setGoodTags] = useState<string[]>([]);
  const [concernTags, setConcernTags] = useState<string[]>([]);
  const [cautionTags, setCautionTags] = useState<string[]>([]);
  const [feedbackTags, setFeedbackTags] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState({
    newName: "",
    newRegion: "서울",
    newAddress: "",
    atmosphere: "진지한 편이에요",
    homeworkLoad: "적당해요",
    classLevel: "기본기가 있으면 좋아요",
    summary: "",
    detail: "",
    writerStatus: "고3",
    contact: "",
  });

  const filteredAcademies = useMemo(() => {
    const trimmed = keyword.trim();
    if (!trimmed) return [];
    return academies.filter((academy) => [academy.name, academy.location, academy.address].some((text) => text.includes(trimmed))).slice(0, 8);
  }, [keyword]);

  function updateField(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function toggleType(type: string) {
    setPreparedTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : [...current, type]);
  }

  function toggleStrongType(type: string) {
    setStrongTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : [...current, type]);
  }

  function toggleListValue(value: string, setter: Dispatch<SetStateAction<string[]>>) {
    setter((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const selectedAcademy = academies.find((academy) => academy.id === academyId);
    const academyName = isNewAcademy ? form.newName.trim() : selectedAcademy?.name || "";
    const targetAcademyId = isNewAcademy ? `new-${Date.now()}` : academyId;

    if (!academyName || preparedTypes.length === 0 || strongTypes.length === 0 || rating === 0 || feedbackTags.length === 0 || goodTags.length === 0 || concernTags.length === 0) {
      alert("필수 내용을 모두 입력해 주세요.");
      return;
    }

    if (form.summary.trim().length < MIN_SUMMARY_LENGTH) {
      alert(`한 줄 후기는 최소 ${MIN_SUMMARY_LENGTH}자 이상 작성해 주세요.`);
      return;
    }

    const review: Review = {
      id: `review-${Date.now()}`,
      academyId: targetAcademyId,
      academyName,
      writerStatus: form.writerStatus,
      preparedTypes,
      strongTypes,
      atmosphere: form.atmosphere,
      feedbackStyle: feedbackTags.join(", "),
      feedbackTags,
      homeworkLoad: form.homeworkLoad,
      classLevel: form.classLevel,
      goodTags,
      concernTags,
      cautionTags,
      summary: form.summary,
      detail: form.detail,
      rating,
      pros: goodTags.join(", "),
      cons: concernTags.join(", "),
      recommendedFor: cautionTags.join(", ") || "추천 대상은 상세 후기를 참고해 주세요.",
      teacherStyle: feedbackTags.join(", "),
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    saveStoredReview(review);
    setDone(true);
  }

  if (done) {
    return (
      <PageLayout>
        <section className="complete-box">
          <p className="eyebrow">등록 완료</p>
          <h1>리뷰가 등록되었습니다.</h1>
          <p>등록된 리뷰는 운영자 확인 후 사이트에 반영됩니다.</p>
          <div className="button-row">
            <Link className="primary-button" to="/academies">학원 정보 둘러보기</Link>
            <Link className="secondary-button" to="/">홈으로 가기</Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="page-head">
        <h1>리뷰 등록</h1>
        <p>직접 경험한 학원 정보를 익명으로 등록해 주세요.</p>
      </section>
      <div className="notice-box">
        로그인하지 않고도 등록할 수 있지만, 비로그인으로 작성한 리뷰는 나중에 마이페이지에서 확인하거나 수정할 수 없습니다.
        모든 리뷰는 익명 공개되며 운영자 확인 후 반영됩니다.
      </div>
      <form className="review-form" onSubmit={handleSubmit}>
        <section className="form-section">
          <h2>학원 선택</h2>
          <div className="choice-toolbar">
            <label>
              학원명 검색
              <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="학원명, 위치, 주소를 입력해 주세요" />
            </label>
            <button type="button" className="secondary-button" onClick={() => setIsNewAcademy((value) => !value)}>
              {isNewAcademy ? "검색으로 선택하기" : "새 학원 추가하기"}
            </button>
          </div>
          {!isNewAcademy && (
            <div className="result-options">
              {keyword.trim() && filteredAcademies.length === 0 && <p className="muted wide">검색 결과가 없어요. 새 학원 추가하기를 눌러 등록해 주세요.</p>}
              {filteredAcademies.map((academy) => (
                <label key={academy.id} className="radio-card">
                  <input type="radio" checked={academyId === academy.id} onChange={() => setAcademyId(academy.id)} />
                  <span>{academy.name}</span>
                  <small>{academy.location}</small>
                </label>
              ))}
            </div>
          )}
        </section>

        {isNewAcademy && (
          <section className="form-section">
            <h2>새 학원 정보</h2>
            <div className="form-grid">
              <label>학원명<input value={form.newName} onChange={(event) => updateField("newName", event.target.value)} /></label>
              <label>지역<select value={form.newRegion} onChange={(event) => updateField("newRegion", event.target.value)}>{regions.filter((region) => region !== "전체").map((region) => <option key={region}>{region}</option>)}</select></label>
              <label className="wide">주소<input value={form.newAddress} onChange={(event) => updateField("newAddress", event.target.value)} /></label>
            </div>
          </section>
        )}

        <section className="form-section">
          <h2>리뷰 작성</h2>
          <div className="review-step-grid">
            <div className="review-field-block rating-field">
              <span className="field-title">만족도</span>
              <div className="heart-rating" role="radiogroup" aria-label="만족도">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button type="button" key={value} className={value <= rating ? "active" : ""} onClick={() => setRating(value)} aria-label={`${value}점`}>
                    ♥
                  </button>
                ))}
              </div>
            </div>
            <div className="form-grid compact-selects">
              <label>수업 분위기<select value={form.atmosphere} onChange={(event) => updateField("atmosphere", event.target.value)}>{moods.map((mood) => <option key={mood}>{mood}</option>)}</select></label>
              <label>과제량<select value={form.homeworkLoad} onChange={(event) => updateField("homeworkLoad", event.target.value)}>{homeworkLoads.map((load) => <option key={load}>{load}</option>)}</select></label>
              <label>수업 난이도<select value={form.classLevel} onChange={(event) => updateField("classLevel", event.target.value)}>{classLevels.map((level) => <option key={level}>{level}</option>)}</select></label>
            </div>
          </div>
          <details className="review-details">
            <summary>전형 선택</summary>
            <div className="review-field-block">
              <span className="field-title">준비 가능 전형</span>
              <div className="chip-row no-label">
                {types.map((type) => (
                  <button type="button" key={type} className={`chip ${preparedTypes.includes(type) ? "active" : ""}`} onClick={() => toggleType(type)}>{type}</button>
                ))}
              </div>
            </div>
            <div className="review-field-block">
              <span className="field-title">강점 전형</span>
              <div className="chip-row no-label">
                {types.map((type) => (
                  <button type="button" key={type} className={`chip ${strongTypes.includes(type) ? "active" : ""}`} onClick={() => toggleStrongType(type)}>{type}</button>
                ))}
              </div>
            </div>
          </details>
          <div className="review-choice-card">
            <span className="field-title">피드백 스타일</span>
            <p className="field-help">선생님 피드백이 어떻게 느껴졌는지 골라 주세요.</p>
            <div className="chip-row no-label">
              {feedbackStyles.map((tag) => (
                <button type="button" key={tag} className={`chip ${feedbackTags.includes(tag) ? "active" : ""}`} onClick={() => toggleListValue(tag, setFeedbackTags)}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="review-choice-card">
            <span className="field-title">좋았던 점</span>
            <p className="field-help">해당되는 항목을 모두 골라 주세요.</p>
            <div className="chip-row no-label">
              {goodTagOptions.map((tag) => (
                <button type="button" key={tag} className={`chip ${goodTags.includes(tag) ? "active" : ""}`} onClick={() => toggleListValue(tag, setGoodTags)}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="review-choice-card">
            <span className="field-title">아쉬웠던 점</span>
            <p className="field-help">솔직하게 골라 주세요. 경험 기반 표현으로만 공개됩니다.</p>
            <div className="chip-row no-label chip-row-concern">
              {concernTagOptions.map((tag) => (
                <button type="button" key={tag} className={`chip ${concernTags.includes(tag) ? "active" : ""}`} onClick={() => toggleListValue(tag, setConcernTags)}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="review-choice-card">
            <span className="field-title">주의할 점</span>
            <p className="field-help">선택 입력이에요.</p>
            <div className="chip-row no-label">
              {cautionTagOptions.map((tag) => (
                <button type="button" key={tag} className={`chip ${cautionTags.includes(tag) ? "active" : ""}`} onClick={() => toggleListValue(tag, setCautionTags)}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="form-grid">
            <label className="wide">한 줄 후기<textarea value={form.summary} onChange={(event) => updateField("summary", event.target.value)} placeholder="예: 피드백은 자세했지만 과제량이 많아서 시간 관리가 꼭 필요했어요." /><small>{form.summary.trim().length}/{MIN_SUMMARY_LENGTH}자 이상</small></label>
            <label className="wide">자세한 후기<textarea value={form.detail} onChange={(event) => updateField("detail", event.target.value)} placeholder="선택 입력: 수업을 들으며 실제로 느낀 분위기, 좋았던 점, 조심해야 할 점을 더 적어 주세요." /><small>선택 입력</small></label>
          </div>
        </section>

        <section className="form-section">
          <h2>작성자 정보</h2>
          <div className="form-grid">
            <label>현재 상태<select value={form.writerStatus} onChange={(event) => updateField("writerStatus", event.target.value)}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
            <label>연락처 또는 이메일<input value={form.contact} onChange={(event) => updateField("contact", event.target.value)} placeholder="선택 입력" /></label>
          </div>
          <p className="muted">허위 리뷰나 조작 가능성에 대비해 작성자 확인용으로만 받습니다. 사이트에는 공개되지 않고 운영자만 확인합니다.</p>
        </section>
        <button type="submit" className="submit-button">리뷰 등록하기</button>
      </form>
    </PageLayout>
  );
}
