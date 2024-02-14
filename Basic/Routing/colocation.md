*** 라우팅 기본사항
> 각 폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 나타낸다.
> 중첩된 경로를 만들기위해서는 폴더를 서로 중첩하면 된다.
> 경로 세그먼트를 공개적으로 액세스할 수 있도록 하려면 page.js파일이 사용된다.

** File Conventions
> layout: 하위 항목에 대한 공유 UI
> page: 경로의 고유한 UI
> loading: 하위 항목에 대한 UI 로딩
> not-found: 하위 항목에 대한 UI 찾을수 없음
> error: 하위 항목에 대한 오류 UI
> global-error: 전역 오류 UI
> route: 서버 측 API 엔드포인트
> template: 다시 렌더링된 레이아웃 UI
> default: 병렬 경로 에 대한 대체 UI

** 구성 요소 계층
> layout.js
> template.js
> error.js
> loading.js
> not-found.js
> page.js


```javaScript

```
