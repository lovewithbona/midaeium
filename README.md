# 미대이음 프로토타입

미대이음은 미대 입시생이 지역과 전형에 맞는 미술학원 정보를 찾고, 익명 리뷰를 등록할 수 있도록 돕는 발표용 웹사이트 프로토타입입니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 주요 페이지

- `/` 메인 페이지
- `/academies` 학원 찾기
- `/academies/:id` 학원 상세
- `/review/new` 리뷰 등록
- `/about` 미대이음이란?
- `/login` 로그인

## 현재 구현 상태

- 학원 데이터는 `src/data/academies.ts`의 초기 후보 데이터를 사용합니다.
- 리뷰 등록 데이터는 브라우저 `localStorage`에 저장됩니다.
- 등록된 리뷰는 운영자 확인 전 상태인 `pending`으로 저장됩니다.
- 학원 상세 페이지에서 카카오 지도를 표시하고, 실패 시 외부 지도 검색 링크로 연결합니다.

## GitHub Pages 배포

GitHub 저장소의 Settings → Secrets and variables → Actions에 아래 값을 추가합니다.

```txt
VITE_KAKAO_MAP_KEY=카카오 JavaScript 키
```

Settings → Pages에서 Source를 GitHub Actions로 선택하면 `main` 브랜치에 push될 때 자동 배포됩니다.

## 추후 확장 가능 기능

- 백엔드 서버 연동
- 관리자 검토 및 승인 기능
- 실제 지도 API 연동
- 로그인 기반 마이페이지
- 실제 조사 데이터 반영
