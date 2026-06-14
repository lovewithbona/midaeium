import { Link } from "react-router-dom";

const footerGroups = [
  {
    title: "서비스",
    links: [
      ["학원 찾기", "/academies"],
      ["입시 가이드", "/guide"],
      ["리뷰 등록", "/review/new"],
      ["미대이음이란?", "/about"],
    ],
  },
  {
    title: "운영",
    links: [
      ["정보 수정 제보", "/report-info"],
      ["리뷰 신고", "/report-review"],
      ["문의하기", "/contact"],
      ["리뷰 운영정책", "/review-policy"],
    ],
  },
  {
    title: "정책",
    links: [
      ["개인정보처리방침", "/privacy"],
      ["이용약관", "/terms"],
      ["저작권 안내", "/copyright"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>미대이음</strong>
        <p>미대 입시 정보의 차이를 줄입니다.</p>
        <p>학원 정보와 실제 학생 리뷰를 바탕으로 미대 입시생의 학원 선택을 돕습니다.</p>
        <small>미대이음은 미디어디자인2 수업 프로젝트로 시작된 미대 입시 정보 플랫폼입니다. 이후 장기 프로젝트로 확장될 수 있습니다.</small>
        <a href="mailto:midaeium.contact@gmail.com">문의: midaeium.contact@gmail.com</a>
        <span>© 2026 Midaeium. Designed and operated by DANG. All rights reserved.</span>
      </div>
      <div className="footer-links">
        {footerGroups.map((group) => (
          <nav className="footer-group" key={group.title} aria-label={group.title}>
            <strong>{group.title}</strong>
            {group.links.map(([label, to]) => <Link key={label} to={to}>{label}</Link>)}
          </nav>
        ))}
      </div>
    </footer>
  );
}
