# wanted-pre-onboarding-frontend

[원티드 프리 온보딩 (프론트엔드) 사전 과제 프로젝트](https://github.com/walking-sunset/selection-task)



## 1. 배포 링크

📌 https://todoapp-sejong77.netlify.app



## 2. 프로젝트 구조

``` 
src
 ┣ api
 ┃ ┗ api.ts
 ┣ components
 ┃ ┣ Auth
 ┃ ┃ ┣ Mode.tsx
 ┃ ┃ ┗ SignForm.tsx
 ┃ ┗ Todo
 ┃ ┃ ┣ TodoCreate
 ┃ ┃ ┃ ┣ TodoCreate.tsx
 ┃ ┃ ┃ ┗ style.ts
 ┃ ┃ ┣ TodoEdit
 ┃ ┃ ┃ ┣ TodoEdit.tsx
 ┃ ┃ ┃ ┗ style.ts
 ┃ ┃ ┣ TodoHeader
 ┃ ┃ ┃ ┣ TodoHeader.tsx
 ┃ ┃ ┃ ┗ style.ts
 ┃ ┃ ┣ TodoItem
 ┃ ┃ ┃ ┣ TodoItem.tsx
 ┃ ┃ ┃ ┗ style.ts
 ┃ ┃ ┗ TodoList
 ┃ ┃ ┃ ┣ TodoList.tsx
 ┃ ┃ ┃ ┗ style.ts
 ┣ constants
 ┃ ┗ string
 ┃ ┃ ┗ Auth.ts
 ┣ contexts
 ┃ ┣ Modal
 ┃ ┃ ┣ ModalContext.tsx
 ┃ ┃ ┗ ModalProvider.tsx
 ┃ ┣ Todo
 ┃ ┃ ┣ TodoContext.tsx
 ┃ ┃ ┗ TodoItemContext.tsx
 ┃ ┗ AppProvider.tsx
 ┣ fonts
 ┃ ┣ Font.scss
 ┃ ┗ NotoSansKR-Light.woff
 ┣ hooks
 ┃ ┗ useInput.ts
 ┣ interfaces
 ┃ ┗ interface.ts
 ┣ lib
 ┃ ┗ AuthLocalStorage.ts
 ┣ pages
 ┃ ┣ Auth
 ┃ ┃ ┣ AuthPage.tsx
 ┃ ┃ ┗ AuthStyle.ts
 ┃ ┗ Todo
 ┃ ┃ ┣ TodoPage.tsx
 ┃ ┃ ┗ TodoStyle.ts
 ┣ reducers
 ┃ ┗ useTodoReducer.ts
 ┣ styles
 ┃ ┣ GlobalStyle.ts
 ┃ ┗ theme.ts
 ┣ App.tsx
 ┣ global.d.ts
 ┗ index.tsx
```



## 3. 기능 시연 GIF

## 🌕 로그인 / 회원가입

  <img src="https://user-images.githubusercontent.com/68320595/210740501-0f9ba315-2cc1-4dbb-8e66-7026bd1d2a2d.gif" width="350" height="400" />

☑️ **Assignment 1**

- 이메일 / 비밀번호 입력 시 유효성 검사 기능 구현
  - 이메일 : @포함
  - 비밀번호: 8자리 이상
- 입력된 이메일, 비밀번호가 위 조건을 만족할 경우에만 버튼 활성화 되도록 구현

☑️ **Assignment 2**

- 로그인 성공 시 Todo 페이지로 리다이렉트 기능 구현
- 응답받은 JWT Access 토큰 localStorage에 저장

☑️ **Assignment 3**

- 로컬 스토리지에 토큰이 있는 경우 `/` 경로로 접속할 시 `/todo` 경로로 리다이렉트  구현
- 로컬 스토리지에 토큰이 없을 경우 `/` 경로로 리다이렉트 구현



## 🌕 투두 리스트

<img src="https://user-images.githubusercontent.com/68320595/210747113-1787ad80-e594-47c1-adf2-ed7944afe080.gif" width="420" height="450" align="left"/>

<br/>

☑️ **Assignment 4**

- `/todo` 경로에 접속할 경우 투두 리스트 목록 렌더링 구현
- 리스트의 내용 및 완료 여부 표시 기능 구현
- 추가 버튼 클릭하여 입력창의 내용이 투두 리스트에 추가되도록 구현

☑️ **Assignment 5**

- 투두 리스트 수정 / 삭제 기능 구현
- 리스트에 마우스 올릴 시 수정 / 삭제 버튼 렌더링 구현
- 수정 버튼 클릭하면 수정 모달창 띄우고 입력창에 수정할 내용 입력 및 취소 기능 구현
- 삭제 버튼 클릭하면 해당 리스트 항목 삭제 구현

 ➕ **추가적인 구현 사항**

- 로그아웃 기능 구현
- 로그아웃 버튼 클릭 시 로컬스토리지에 저장된 토큰 삭제 및 `/` 경로로 리다이렉트



## 4. 프로젝트 실행 및 설치

1. 해당 Repositry 클론 받아서 로컬에 설치
2. root 경로에 .env 파일 생성 후 아래 환경 변수 작성

``` 
REACT_APP_API_URL=https://pre-onboarding-selection-task.shop
```

> root 경로는 package.json 파일과 같은 위치

3. 프로젝트 패키지 설치

``` bash
$ npm install
```

4. 로컬에서 프로젝트 실행

``` bash
$ npm start
```



## 5. 사용한 라이브러리

Axios, react-router-dom, jwt-decode
styled-components, mui, craco

