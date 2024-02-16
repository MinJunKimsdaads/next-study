<h3>Link and Navigation</h3>

<div>
  <p>Route를 이동하는 4가지 방법 존재</p>
  <p>1. <Link> 태그 사용</p>
  <p>2. useRouter 사용</p>
  <p>3. redirect 사용</p>
  <p>4. History API 사용</p>
</div>

<div>
  <h2>Link</h2>
  <p>동적 세그먼트에 연결</p>
  <p>활성 링크 확인</p>
  <p>스크롤 위치 유지</p>
</div>

<div>
  <h2>useRouter()</h2>
  <p>클라이언트 컴포넌트에서 사용</p>
  <p>특별한 경우가 아닌이상 <Link>태그를 사용</p>
</div>

<div>
  <h2>redirect</h2>
  <p>서버 컴포넌트에서 사용</p>
</div>

<div>
  <h2>History API</h2>
  <p>서버 컴포넌트에서 사용</p>
  <p>브라우저의 기록 스택에 새 항목 추가 (window.history.pushState)</p>
  <p>브라우저의 기록 스택의 현재 항목을 변경 (window.history.replaceState)</p>
</div>

<div>
  <h2>작동 방식</h2>
  <p>사용자가 새 경로로 이동할 때 브라우저는 페이지를 다시 로드하지 않고 변경된 세그먼트만 다시 렌더링하여 성능 향상</p>

  <p>1. Code Splitting: 애플리케이션 코드를 더 작은 번들로 분할하여 브라우저에서 다운로드하고 실행</p>
  <p>2. Prefetching : 사용자가 경로를 방문하기 전에 백그라운드에서 경로를 미리 로드</p>
  <p>3. Caching : 경로 세그먼트와 방문한 경로의 React Server 구성 요소 페이로드가 캐시에 저장</p>
  <p>4. Partial Rendering : 클라이언트에서 탐색을 다시 렌더링할 때 변경되는 경로 세그먼트만 의미하며 모든 공유 세그먼트는 보존</p>
  <p>5. Soft Navigation : Next.js 앱 라우터는 페이지 간 "소프트 탐색"을 활성화하여 변경된 경로 세그먼트만 다시 렌더링되도록 합니다</p>
  <p>6. Back and Forward Navigation : 기본적으로 Next.js는 앞뒤 탐색을 위한 스크롤 위치를 유지하고 라우터 캐시 의 경로 세그먼트를 재사용</p>
  <p>7. Routing between pages/ and app/ : pages/에서 으로 점진적으로 마이그레이션할 때 app/Next.js 라우터는 둘 사이의 하드 탐색을 자동으로 처리</p>
</div>
