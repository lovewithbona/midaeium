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
      <section className="principle-box">
        <h2>정보 출처 및 검수 기준</h2>
        <p>미대이음의 학원 정보는 학원 공식 홈페이지, 공식 인스타그램, 공식 네이버 블로그, 네이버 지도 등 공개된 위치 정보, 입시미술 관련 공개 자료, 학생 리뷰, 운영자 검수 결과를 바탕으로 정리됩니다.</p>
        <p>학원 정보는 공개 자료와 사용자 제보를 바탕으로 정리되며, 실제 운영 정보와 다를 수 있습니다. 방문 전 학원 공식 채널을 통해 한 번 더 확인해 주세요.</p>
        <Link className="text-button" to="/data-policy">자세히 보기</Link>
      </section>
      <section className="guide-section">
        <div className="guide-section-head">
          <p>FAQ</p>
          <h2>자주 묻는 질문</h2>
        </div>
        <div className="guide-faq-list">
        {[
          ["미대이음은 어떤 사이트인가요?", "미대 입시생이 학원 정보와 실제 리뷰를 비교할 수 있도록 돕는 정보 플랫폼입니다."],
          ["리뷰는 모두 익명인가요?", "네. 일반 사용자 화면에는 익명으로 공개됩니다."],
          ["리뷰는 바로 공개되나요?", "아니요. 운영자 확인 후 공개 여부가 결정됩니다."],
          ["잘못된 정보가 있으면 어떻게 하나요?", "정보 수정 제보 페이지에서 수정이 필요한 내용을 남길 수 있습니다."],
          ["학원 관계자도 리뷰를 작성할 수 있나요?", "학원 관계자, 강사, 직원, 홍보 담당자의 리뷰 작성은 제한됩니다."],
          ["미대이음의 정보는 공식 입시 정보인가요?", "아니요. 공개 자료와 리뷰를 바탕으로 한 참고 정보이며, 대학 모집요강과 학원 공식 채널을 함께 확인해야 합니다."],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
        </div>
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
