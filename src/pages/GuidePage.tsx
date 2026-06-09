import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import {
  academyChoiceChecklist,
  admissionGuideHero,
  beginnerFlow,
  firstAdmissionChecklist,
  guideCta,
  guideFaqs,
  guideNotice,
  guideTerms,
  practicalTypeGuides,
  type GuideCategory,
} from "../data/admissionGuide";

const termCategories = [
  "전체",
  "입시 기본",
  "전형 이해",
  "실기 유형",
  "학원 선택",
  "리뷰 읽기",
] as const;

type TermCategoryFilter = (typeof termCategories)[number];

function typeSearchUrl(type: string) {
  return `/academies?type=${encodeURIComponent(type)}`;
}

export default function GuidePage() {
  const [termKeyword, setTermKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TermCategoryFilter>("전체");

  const filteredTerms = useMemo(() => {
    const keyword = termKeyword.trim().toLowerCase();

    return guideTerms.filter((term) => {
      const categoryMatches =
        selectedCategory === "전체" || term.category === (selectedCategory as GuideCategory);

      if (!categoryMatches) return false;
      if (!keyword) return true;

      const searchableText = [
        term.title,
        term.oneLine,
        term.description,
        term.example ?? "",
        term.tip ?? "",
        term.relatedTags.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(keyword);
    });
  }, [selectedCategory, termKeyword]);

  return (
    <PageLayout className="guide-page">
      <section className="guide-hero">
        <p className="guide-kicker">{admissionGuideHero.title}</p>
        <h1>{admissionGuideHero.headline}</h1>
        <p>{admissionGuideHero.description}</p>
        <div className="guide-actions">
          <Link className="guide-button guide-button-primary" to={admissionGuideHero.primaryButton.href}>
            {admissionGuideHero.primaryButton.label}
          </Link>
          <Link className="guide-button guide-button-secondary" to={admissionGuideHero.secondaryButton.href}>
            {admissionGuideHero.secondaryButton.label}
          </Link>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-head">
          <p>처음 시작하는 학생용</p>
          <h2>3단계로 입시 흐름 잡기</h2>
        </div>
        <div className="guide-flow-grid">
          {beginnerFlow.map((item) => (
            <article className="guide-info-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-head">
          <p>입시 용어 정리</p>
          <h2>헷갈리는 단어부터 검색해 보기</h2>
        </div>
        <div className="guide-term-tools">
          <input
            aria-label="입시 용어 검색"
            value={termKeyword}
            onChange={(event) => setTermKeyword(event.target.value)}
            placeholder="예: 수시, 기초디자인, 모집요강"
          />
          <div className="guide-filter-row" aria-label="용어 카테고리">
            {termCategories.map((category) => (
              <button
                className={selectedCategory === category ? "active" : ""}
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="guide-term-grid">
          {filteredTerms.map((term) => (
            <details className="guide-term-card" key={term.id}>
              <summary>
                <span>{term.category}</span>
                <h3>{term.title}</h3>
                <p>{term.oneLine}</p>
              </summary>
              <div className="guide-term-detail">
                <p>{term.description}</p>
                {term.example ? <p className="guide-note">예: {term.example}</p> : null}
                {term.tip ? <p className="guide-note">{term.tip}</p> : null}
              </div>
            </details>
          ))}
          {filteredTerms.length === 0 ? (
            <p className="guide-empty">검색 결과가 없어. 다른 단어로 다시 찾아봐.</p>
          ) : null}
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-head">
          <p>실기 유형 안내</p>
          <h2>내가 준비해야 할 유형 확인하기</h2>
        </div>
        <div className="guide-type-grid">
          {practicalTypeGuides.map((type) => (
            <article className="guide-type-card" key={type.id}>
              <div className="guide-type-title">
                <span>{type.shortLabel}</span>
                <h3>{type.title}</h3>
              </div>
              <p>{type.summary}</p>
              <dl>
                <dt>평가하는 것</dt>
                <dd>{type.whatItChecks.join(", ")}</dd>
                <dt>잘 맞는 학생</dt>
                <dd>{type.goodFor.join(", ")}</dd>
              </dl>
              <Link className="guide-text-link" to={typeSearchUrl(type.academySearchType)}>
                관련 학원 찾기
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section guide-checklists">
        <div className="guide-section-head">
          <p>체크리스트</p>
          <h2>시작 전 꼭 확인할 것</h2>
        </div>
        <div className="guide-check-grid">
          <ChecklistBlock title="처음 입시 체크리스트" items={firstAdmissionChecklist} />
          <ChecklistBlock title="학원 선택 체크리스트" items={academyChoiceChecklist} />
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-head">
          <p>FAQ</p>
          <h2>처음 물어보는 질문들</h2>
        </div>
        <div className="guide-faq-list">
          {guideFaqs.map((faq) => (
            <details key={faq.id}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="guide-section guide-notice">
        <p>최신 모집요강 확인 안내</p>
        <h2>{guideNotice.title}</h2>
        <p>{guideNotice.description}</p>
      </section>

      <section className="guide-cta-section">
        <div>
          <h2>{guideCta.title}</h2>
          <p>{guideCta.description}</p>
        </div>
        <div className="guide-actions">
          {guideCta.buttons.map((button) => (
            <Link
              className={`guide-button ${
                button.variant === "primary" ? "guide-button-primary" : "guide-button-secondary"
              }`}
              key={button.href}
              to={button.href}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

function ChecklistBlock({
  title,
  items,
}: {
  title: string;
  items: { id: string; title: string; description: string }[];
}) {
  return (
    <article className="guide-check-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <details>
              <summary>{item.title}</summary>
              <span>{item.description}</span>
            </details>
          </li>
        ))}
      </ul>
    </article>
  );
}
