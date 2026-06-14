import PageLayout from "../components/PageLayout";
import { PolicyCard, PolicyHero } from "./ReviewPolicyPage";

const sections = [
  ["수집하는 개인정보", "리뷰 검수를 위해 연락 가능한 수단을 받을 수 있습니다."],
  ["개인정보 수집 목적", "허위 리뷰와 학원 관계자 작성 리뷰를 줄이고, 필요한 경우 작성 내용을 확인하기 위해 사용합니다."],
  ["개인정보 보유 기간", "프로토타입 단계에서는 브라우저 또는 운영자 검수 데이터에 임시 보관되며, 장기 운영 시 별도 기준을 마련합니다."],
  ["공개되는 정보와 공개되지 않는 정보", "사이트에는 익명 리뷰, 작성자 상태, 수강 시기 및 기간, 리뷰 내용, 선택한 태그, 주요 대비 대학이 공개될 수 있습니다."],
  ["개인정보 파기 기준", "운영 목적이 사라지거나 삭제 요청이 접수되면 확인 후 파기합니다."],
  ["개인정보 문의", "개인정보 관련 문의는 midaeium.contact@gmail.com 으로 보내 주세요."],
];

export default function PrivacyPage() {
  return (
    <PageLayout className="policy-page">
      <PolicyHero title="개인정보처리방침" description="미대이음에서 공개되는 정보와 공개되지 않는 정보를 안내합니다." />
      <section className="policy-grid">
        {sections.map(([title, body]) => <PolicyCard key={title} title={title} body={body} />)}
      </section>
      <section className="policy-example-grid">
        <div>
          <h2>사이트에 공개되는 정보</h2>
          <ul>
            <li>익명 리뷰</li>
            <li>작성자 상태</li>
            <li>수강 시기 및 기간</li>
            <li>리뷰 내용</li>
            <li>선택한 태그</li>
            <li>주요 대비 대학</li>
          </ul>
        </div>
        <div>
          <h2>사이트에 공개되지 않는 정보</h2>
          <ul>
            <li>연락처</li>
            <li>이메일</li>
            <li>인스타그램 ID</li>
            <li>오픈채팅 링크</li>
            <li>운영자 검수 메모</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}
