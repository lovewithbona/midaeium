import PageLayout from "../components/PageLayout";
import { PolicyCard, PolicyHero } from "./ReviewPolicyPage";

const sections = [
  ["서비스 목적", "미대이음은 미대 입시생이 학원 정보와 리뷰를 참고할 수 있도록 돕는 정보 플랫폼입니다."],
  ["이용자의 책임", "이용자는 실제 경험에 기반한 정보를 작성해야 하며, 허위 내용이나 개인정보를 등록하지 않아야 합니다."],
  ["리뷰 작성 기준", "리뷰는 학원 선택에 도움이 되는 경험 중심의 내용으로 작성되어야 합니다."],
  ["콘텐츠 관리", "운영자는 서비스 품질과 안전을 위해 리뷰와 제보 내용을 검토하고 관리할 수 있습니다."],
  ["정보의 한계", "미대이음에 등록된 정보는 사용자 리뷰와 공개 자료를 바탕으로 한 참고 정보입니다. 학원 선택과 입시 지원 전에는 반드시 학원 공식 채널과 대학 모집요강을 함께 확인해야 합니다."],
  ["서비스 변경 가능성", "미대이음은 프로젝트 운영 상황에 따라 기능과 정책을 변경할 수 있습니다."],
];

export default function TermsPage() {
  return (
    <PageLayout className="policy-page">
      <PolicyHero title="이용약관" description="미대이음 이용 시 확인해야 할 기본 기준입니다." />
      <section className="policy-grid">
        {sections.map(([title, body]) => <PolicyCard key={title} title={title} body={body} />)}
      </section>
    </PageLayout>
  );
}
