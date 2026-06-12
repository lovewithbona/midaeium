import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { DEMO_ADMIN_EMAIL, DEMO_ADMIN_PASSWORD, saveFakeUser } from "../utils/storage";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (email.trim() !== DEMO_ADMIN_EMAIL || password !== DEMO_ADMIN_PASSWORD) {
      setError("시연용 관리자 계정 정보를 확인해 주세요.");
      return;
    }

    saveFakeUser(email.trim());
    navigate("/mypage");
  }

  return (
    <PageLayout className="login-page">
      <section className="login-card">
        <p className="eyebrow">시연용 로그인</p>
        <h1>로그인</h1>
        <p>현재는 학교 프로젝트용 프로토타입으로, 관리자 검수 기능은 시연용으로 제공됩니다.</p>
        <form onSubmit={handleSubmit}>
          <label>이메일<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="email@example.com" /></label>
          <label>비밀번호<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="비밀번호" /></label>
          {error && <p className="form-error">{error}</p>}
          <button className="submit-button" type="submit">로그인</button>
        </form>
      </section>
    </PageLayout>
  );
}
