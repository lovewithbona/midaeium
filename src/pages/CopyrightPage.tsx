import PageLayout from "../components/PageLayout";
import { PolicyCard, PolicyHero } from "./ReviewPolicyPage";

const sections = [
  ["미대이음 저작권", "미대이음의 디자인, 텍스트, 데이터 구조, 화면 구성은 미대이음 운영자에게 저작권이 있습니다."],
  ["리뷰 이용", "사이트 내 리뷰는 작성자의 경험을 바탕으로 하며, 미대이음은 서비스 운영을 위해 해당 리뷰를 익명으로 게시할 수 있습니다."],
  ["외부 정보 표시", "외부 자료, 학원명, 대학명, 공식 링크 등은 정보 제공 목적으로 표시됩니다."],
  ["외부 콘텐츠 사용 기준", "네이버, 구글, 인스타그램, 블로그 등에 올라온 사진이나 게시물을 무단으로 저장하거나 재게시하지 않습니다."],
];

export default function CopyrightPage() {
  return (
    <PageLayout className="policy-page">
      <PolicyHero title="저작권 안내" description="미대이음의 콘텐츠와 외부 정보 사용 기준을 안내합니다." />
      <section className="policy-grid">
        {sections.map(([title, body]) => <PolicyCard key={title} title={title} body={body} />)}
      </section>
    </PageLayout>
  );
}
