import { Link } from "react-router-dom";

export default function CTABox() {
  return (
    <aside className="side-box cta-box">
      <div className="icon-dot">✎</div>
      <h2>학원 후기 등록하기</h2>
      <p>직접 경험한 학원 정보와 리뷰로 미대이음을 풍성하게 채워 주세요.</p>
      <p>모든 후기는 익명으로 등록되며, 운영자 확인 후 반영됩니다.</p>
      <Link className="primary-button" to="/review/new">등록하러 가기</Link>
    </aside>
  );
}
