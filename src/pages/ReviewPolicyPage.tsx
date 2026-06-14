import PageLayout from "../components/PageLayout";

const sections = [
  ["리뷰 운영 목적", "미대이음은 학원 선택에 필요한 실제 경험 정보를 모으기 위해 리뷰를 운영합니다."],
  ["공개될 수 있는 리뷰", "직접 수강, 상담, 체험 수업 등 실제 경험을 바탕으로 작성된 리뷰는 운영자 확인 후 공개될 수 있습니다."],
  ["공개가 제한될 수 있는 리뷰", "특정인 실명 비방, 욕설, 확인되지 않은 소문, 개인정보, 학원과 관련 없는 내용은 공개가 제한될 수 있습니다."],
  ["부정적 리뷰 작성 기준", "미대이음은 부정적인 경험도 학원 선택에 필요한 정보라고 생각합니다. 다만 부정적 내용은 개인 비방이 아니라, 작성자가 실제로 경험한 상황을 중심으로 작성되어야 합니다."],
  ["리뷰 신고 및 검수 절차", "신고가 접수되면 운영자가 내용을 확인하고 필요한 경우 리뷰를 수정, 비공개 또는 제외 처리할 수 있습니다."],
  ["리뷰 수정/비공개 처리 기준", "개인정보 포함, 과도한 모욕 표현, 허위 가능성이 높은 내용은 공개 후에도 수정 또는 비공개 처리될 수 있습니다."],
];

export default function ReviewPolicyPage() {
  return (
    <PageLayout className="policy-page">
      <PolicyHero title="리뷰 운영정책" description="미대이음 리뷰가 어떤 기준으로 공개되고 관리되는지 안내합니다." />
      <section className="policy-grid">
        {sections.map(([title, body]) => <PolicyCard key={title} title={title} body={body} />)}
      </section>
      <section className="policy-example-grid">
        <div>
          <h2>공개 가능 예시</h2>
          <ul>
            <li>수업 속도가 빠르게 느껴졌어요.</li>
            <li>질문하기 어려운 분위기였어요.</li>
            <li>상담 때 비용을 자세히 확인하는 것이 좋을 것 같아요.</li>
          </ul>
        </div>
        <div>
          <h2>공개 제한 가능 예시</h2>
          <ul>
            <li>특정 선생님 실명 비방</li>
            <li>욕설 또는 모욕 표현</li>
            <li>확인되지 않은 소문</li>
            <li>개인정보 포함</li>
            <li>학원과 관련 없는 내용</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
}

export function PolicyHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="page-head policy-head">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function PolicyCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="policy-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}
