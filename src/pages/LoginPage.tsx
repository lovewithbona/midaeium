import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { DEMO_ADMIN_EMAIL, DEMO_ADMIN_PASSWORD, saveFakeUser } from "../utils/storage";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(DEMO_ADMIN_EMAIL);
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
        <p>현재는 실제 회원가입 서버가 연결되어 있지 않아 관리자 계정으로 로그인 흐름을 미리 확인할 수 있습니다.</p>
        <div className="demo-account-box">
          <strong>관리자 계정</strong>
          <span>아이디: {DEMO_ADMIN_EMAIL}</span>
          <span>비밀번호: {DEMO_ADMIN_PASSWORD}</span>
        </div>
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
