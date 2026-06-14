import { FormEvent, useState } from "react";
import PageLayout from "../components/PageLayout";
import { saveContactRequest } from "../utils/storage";

const contactTypes = ["잘못된 정보 제보", "리뷰 신고", "학원 정보 추가 요청", "개인정보 삭제 요청", "서비스 문의", "기타"];

export default function ContactPage() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    type: contactTypes[0],
    title: "",
    body: "",
    academyName: "",
    referenceUrl: "",
    contact: "",
  });

  function updateField(name: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    saveContactRequest(form);
    setDone(true);
  }

  if (done) {
    return (
      <PageLayout>
        <section className="complete-box">
          <p className="eyebrow">문의 접수</p>
          <h1>문의가 접수되었습니다.</h1>
          <p>운영자가 확인한 뒤 필요한 경우 연락드리겠습니다.</p>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="form-page">
      <section className="page-head">
        <h1>문의하기</h1>
        <p>서비스 이용 중 필요한 내용을 남겨 주세요.</p>
      </section>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>문의 유형<select value={form.type} onChange={(event) => updateField("type", event.target.value)}>{contactTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label>제목<input value={form.title} onChange={(event) => updateField("title", event.target.value)} /></label>
          <label className="wide">내용<textarea value={form.body} onChange={(event) => updateField("body", event.target.value)} /></label>
          <label>관련 학원명<input value={form.academyName} onChange={(event) => updateField("academyName", event.target.value)} /></label>
          <label>참고 링크<input value={form.referenceUrl} onChange={(event) => updateField("referenceUrl", event.target.value)} placeholder="https://" /></label>
          <label className="wide">연락 가능한 수단<input value={form.contact} onChange={(event) => updateField("contact", event.target.value)} placeholder="이메일, 전화번호, 오픈채팅 등" /></label>
        </div>
        <button className="submit-button" type="submit">문의 보내기</button>
      </form>
    </PageLayout>
  );
}
