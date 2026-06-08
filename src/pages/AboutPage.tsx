import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="about-hero">
        <p className="eyebrow">미대이음이란?</p>
        <h1>한국의 모든 미대 입시생을 위해!</h1>
        <p>
          미대이음은 미대 입시를 준비하는 학생들이 직접 등록한 정보를 바탕으로 학원 정보와 실제 리뷰를 쉽게 찾고 비교할 수 있도록 돕는 정보 플랫폼입니다.
        </p>
      </section>
      <section className="about-copy">
        <p>어떤 학원에 다니는지, 어느 지역에 사는지, 주변에 입시 경험자가 있는지에 따라 입시 정보의 양은 크게 달라질 수 있습니다.</p>
        <p>미대이음은 이 차이를 줄이고, 처음 입시를 시작하는 학생들도 필요한 정보를 스스로 찾을 수 있도록 만들어졌습니다.</p>
      </section>
      <section className="feature-grid">
        {[
          ["정보를 모읍니다", "지역과 전형별 학원 정보를 모아 여러 학원을 한눈에 비교할 수 있도록 정리합니다."],
          ["실제 리뷰를 반영합니다", "학생들이 직접 경험한 수업 분위기, 장점, 아쉬운 점, 추천 대상을 익명 리뷰로 남길 수 있습니다."],
          ["운영자가 확인합니다", "등록된 학원 정보와 리뷰는 운영자 확인 후 반영되어 잘못된 정보나 감정적인 표현을 줄입니다."],
        ].map(([title, body]) => (
          <article className="feature-card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="principle-box">
        <h2>미대이음은 이렇게 운영됩니다.</h2>
        <ol>
          <li>모든 리뷰는 익명으로 공개됩니다.</li>
          <li>등록된 정보는 운영자 확인 후 반영됩니다.</li>
          <li>개인을 특정하거나 비방하는 내용은 공개되지 않을 수 있습니다.</li>
          <li>없는 학원은 사용자가 직접 추가할 수 있습니다.</li>
          <li>정보가 부족한 지역도 함께 채워 나갑니다.</li>
        </ol>
      </section>
      <section className="bottom-cta">
        <h2>당신의 경험이 누군가에게는 첫 번째 입시 정보가 될 수 있습니다.</h2>
        <div className="button-row">
          <Link className="primary-button" to="/review/new">학원 후기 등록하기</Link>
          <Link className="secondary-button" to="/academies">학원 정보 둘러보기</Link>
        </div>
      </section>
    </PageLayout>
  );
}
