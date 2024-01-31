next js
: 

기능
1. 라우팅: 서버 컴포넌트 위에 구축된 파일 시스템 기반 라우터로 레이아웃, 중첩 라우팅, 로딩 상태, 오류 처리 지원
2. 렌더링: 클라이언트 측 및 서버 측 렌더링을 클라이언트 및 서버 컴포넌트로 지원
3. 스타일링: CSS 모듈, Tailwind CSS, CSS-in-JS를 비롯한 선호하는 스타일링 방법을 지원
5. 데이터검색: 
6. 최적화: 이미지, 글꼴 및 스크립트 최적화를 통해 응용 프로그램의 핵심 웹 비탈 및 사용자 경험을 개선
7. 타입스크립트: 

라우터 방식

앱 라우터: 
페이지 라우터: 



page.js: 특정 라우트에 고유한 UI 
layout.js: 여러 페이지 간에 공유되는 UI
special.js: React Suspense를 활용하여 의미 있는 로딩 UI를 생성
error.js: 파일 규칙을 사용하면 중첩된 경로에서 런타임 오류를 우아하게 처리할 수 있음

Linking & Navigating

Next.js App Router의 기본 동작은 새로운 라우트로 스크롤하거나 뒤로 및 앞으로 탐색할 때 스크롤 위치를 유지하는 것입니다. 이 동작을 비활성화하고 싶다면, <Link> 컴포넌트에 scroll={false}를 전달하거나, router.push() 또는 router.replace()에 scroll: false를 전달할 수 있습니다.

CSR

스트리밍은 페이지 렌더링을 차단하는 긴 데이터 요청을 방지하고 Time To First Byte (TTFB) 및 First Contentful Paint (FCP)를 줄일 수 있어 특히 유용합니다. 또한 느린 기기에서 특히 Time to Interactive (TTI)를 개선하는 데 도움이 됩니다.

서스펜스
-> SSR이더라도 많은 데이터를 불러오면 느려짐
-> <Suspense>태그로 데이터를 불러오는 컴포넌트를 감싸고 대체 ui를 표시할 수 있음



