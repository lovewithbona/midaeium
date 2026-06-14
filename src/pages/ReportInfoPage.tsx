import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { academies } from "../data/academies";
import { saveInfoReport } from "../utils/storage";

const reportTypes = [
  "학원명이 잘못되었어요",
  "주소가 잘못되었어요",
  "폐업했거나 이전한 것 같아요",
  "홈페이지/인스타그램/블로그 링크가 잘못되었어요",
  "준비 가능 전형이 잘못되었어요",
  "주요 대비 대학 정보가 잘못되었어요",
  "리뷰 내용에 문제가 있어요",
  "개인정보가 포함되어 있어요",
  "기타",
];

export default function ReportInfoPage() {
  const [params] = useSearchParams();
  const academy = academies.find((item) => item.id === params.get("academyId"));
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    type: reportTypes[0],
    academyKeyword: academy?.name || "",
    problematicInfo: "",
    requestedChange: "",
    referenceUrl: "",
    contact: "",
  });
  const academySuggestions = useMemo(() => {
    const keyword = form.academyKeyword.trim();
    if (!keyword) return [];
    return academies.filter((item) => [item.name, item.address, item.location].some((text) => text.includes(keyword))).slice(0, 5);
  }, [form.academyKeyword]);

  function updateField(name: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    saveInfoReport({ ...form, academyId: academy?.id });
    setDone(true);
  }

  if (done) {
    return (
      <PageLayout>
        <section className="complete-box">
          <p className="eyebrow">접수 완료</p>
          <h1>제보가 접수되었습니다.</h1>
          <p>제보해 주신 내용은 운영자가 확인한 뒤 반영 여부를 결정합니다.</p>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="form-page">
      <section className="page-head">
        <h1>정보 수정 제보</h1>
        <p>잘못된 학원 정보나 수정이 필요한 내용을 제보해 주세요. 운영자가 확인한 뒤 반영 여부를 결정합니다.</p>
      </section>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>제보 유형<select value={form.type} onChange={(event) => updateField("type", event.target.value)}>{reportTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label>대상 학원 검색<input value={form.academyKeyword} onChange={(event) => updateField("academyKeyword", event.target.value)} placeholder="학원명을 입력해 주세요" /></label>
          {academySuggestions.length > 0 && (
            <div className="wide inline-suggestion-list">
              {academySuggestions.map((item) => <button type="button" key={item.id} onClick={() => updateField("academyKeyword", item.name)}>{item.name} · {item.region} {item.district}</button>)}
            </div>
          )}
          <label className="wide">문제가 있는 정보<textarea value={form.problematicInfo} onChange={(event) => updateField("problematicInfo", event.target.value)} /></label>
          <label className="wide">수정이 필요한 내용<textarea value={form.requestedChange} onChange={(event) => updateField("requestedChange", event.target.value)} /></label>
          <label>참고 링크<input value={form.referenceUrl} onChange={(event) => updateField("referenceUrl", event.target.value)} placeholder="https://" /></label>
          <label>연락 가능한 수단<input value={form.contact} onChange={(event) => updateField("contact", event.target.value)} placeholder="이메일, 전화번호, 오픈채팅 등" /></label>
        </div>
        <button className="submit-button" type="submit">제출하기</button>
      </form>
    </PageLayout>
  );
}
