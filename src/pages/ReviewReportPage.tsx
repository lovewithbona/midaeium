import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { PolicyCard, PolicyHero } from "./ReviewPolicyPage";

export default function ReviewReportPage() {
  return (
    <PageLayout className="policy-page">
      <PolicyHero title="리뷰 신고" description="문제가 있는 리뷰는 각 리뷰 카드의 신고 버튼으로 접수할 수 있습니다." />
      <PolicyCard title="신고 방법" body="학원 상세 페이지의 리뷰 탭에서 문제가 있는 리뷰를 찾은 뒤, 리뷰 카드 하단의 신고 버튼을 눌러 주세요. 신고 내용은 운영자 페이지에 접수되며, 확인 후 필요한 경우 리뷰를 수정, 비공개 또는 제외 처리할 수 있습니다." />
      <section className="policy-card">
        <h2>리뷰를 찾기 어려운 경우</h2>
        <p>특정 리뷰를 바로 찾기 어렵거나 추가 설명이 필요한 경우 문의하기 페이지로 내용을 남겨 주세요.</p>
        <div className="button-row">
          <Link className="primary-button" to="/academies">학원 찾기</Link>
          <Link className="secondary-button" to="/contact">문의하기</Link>
        </div>
      </section>
    </PageLayout>
  );
}
