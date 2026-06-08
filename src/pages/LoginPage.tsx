import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { saveFakeUser } from "../utils/storage";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    saveFakeUser(email || "guest@midaeieum.local");
    navigate("/");
  }

  return (
    <PageLayout className="login-page">
      <section className="login-card">
        <p className="eyebrow">발표용 로그인</p>
        <h1>로그인</h1>
        <p>로그인하면 나중에 내가 등록한 리뷰를 확인할 수 있습니다. 로그인하지 않아도 리뷰 등록은 가능합니다.</p>
        <form onSubmit={handleSubmit}>
          <label>이메일<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="email@example.com" /></label>
          <label>비밀번호<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="비밀번호" /></label>
          <button className="submit-button" type="submit">로그인</button>
        </form>
      </section>
    </PageLayout>
  );
}
