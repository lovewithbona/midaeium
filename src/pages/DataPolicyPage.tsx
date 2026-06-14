import PageLayout from "../components/PageLayout";

export default function DataPolicyPage() {
  return (
    <PageLayout className="policy-page">
      <section className="page-head policy-head">
        <h1>정보 출처 및 검수 기준</h1>
        <p>미대이음의 학원 정보가 어떤 자료를 바탕으로 정리되는지 안내합니다.</p>
      </section>
      <section className="policy-card large">
        <h2>정보 출처</h2>
        <p>미대이음의 학원 정보는 아래 자료를 바탕으로 정리됩니다.</p>
        <ul>
          <li>학원 공식 홈페이지</li>
          <li>학원 공식 인스타그램</li>
          <li>학원 공식 네이버 블로그</li>
          <li>네이버 지도 등 공개된 위치 정보</li>
          <li>입시미술 관련 공개 자료</li>
          <li>학생들이 직접 남긴 리뷰</li>
          <li>운영자 검수 결과</li>
        </ul>
      </section>
      <section className="notice-box">
        <p>학원 정보는 공개 자료와 사용자 제보를 바탕으로 정리되며, 실제 운영 정보와 다를 수 있습니다.</p>
        <p>방문 전 학원 공식 채널을 통해 한 번 더 확인해 주세요.</p>
      </section>
    </PageLayout>
  );
}
