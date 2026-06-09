import { NavLink } from "react-router-dom";
import { getFakeUser } from "../utils/storage";

export default function Header() {
  const user = getFakeUser();

  return (
    <header className="site-header">
      <NavLink to="/" className="logo">
        미대이음
      </NavLink>
      <nav className="nav">
        <NavLink to="/academies">학원 찾기</NavLink>
        <NavLink to="/guide">입시 가이드</NavLink>
        <NavLink to="/review/new">리뷰 등록</NavLink>
        <NavLink to="/about">미대이음이란?</NavLink>
        <NavLink to="/login" className="login-link">
          {user ? "마이페이지" : "로그인"}
        </NavLink>
      </nav>
    </header>
  );
}
