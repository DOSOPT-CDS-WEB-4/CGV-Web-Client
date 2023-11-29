<div align="center">

<h1> 🍿 CGV 🍿 </h1>
<h4>서비스 간단 설명</h4>
<p>
CGV 모바일 웹은 사용자가 모바일 웹으로 접속하여 상영정보를 확인한 후, 영화와 극장을 고르고 결제하기까지의 예매 프로세스를 가지고 있어요.
특히 CGV 모바일 웹은 가장 많은 사용자가 이용하는 서비스인 만큼 최단의 프로세스로 영화를 빠르게 예매할 수 있는 경험을 제공해요.
  
메가박스, 롯데시네마와 다르게 하단에 GNB를 하지 않고, 상단에 스크롤 메뉴를 배치하고 하단에는 ‘지금예매' 플로팅 버튼을 만들어 빠르게 홈에서 예매할 수 있도록 했어요.
이런 강점들을 바탕으로 사용자가 보다 좋은 접근성과 편리한 사용성을 바탕으로 서비스를 이용할 수 있도록, 그리고 모바일 웹 내에서의 브랜드 톤앤 무드를 강화시키는 것을 목표로 삼아 사용자의 경험을 유지할 수 있게끔 리디자인을 진행했어요!
</p>
</div>


<h2> 🍿CGV🍿 핵심 기능 </h2>

<h3> 1️⃣ Home : 홈 </h3>
<img src="https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/79a10773-ea75-4dce-b586-37712553e613"/>

- 메뉴바 가로 스크롤 구현
- react-slick 라이브러리 사용하여 캐러셀 애니메이션 구현
- 티켓 아이콘 클릭시 하단의 티켓 섹션으로 이동하도록 구현
- 무비 카드, 좋아요 버튼 클릭시 색상 변화하도록 구현
- 플로팅 버튼 구현
- 무비 카드 정보 GET
- 무비 카드 선택시 해당 내용 예매 페이지로 POST


<br/>

<h3> 2️⃣ Select-Time : 관람시간 선택 </h3>
<img src="https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/da99edae-db9d-43da-8414-f06edb9ccad5" />

- 영화 줄거리 더보기 클릭 시 스크롤 가능하도록 구현
- Date()를 사용해 날짜 선택 섹션 구현
- 영화관 지역 선택, 날짜 선택, 상영관 타입 선택 섹션 가로 스크롤 구현
- 영화관 지역 선택, 날짜 섹션은 한번에 하나만, 상영관 타입 선택은 다중 선택 가능하도록 구현

<br/>

<h3> 3️⃣ Select-Person : 인원선택 </h3>
<img src="https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/b0256191-d3b2-46aa-874c-c5a55b9ade69" />

- React createPortal로 바텀시트 구현
- 바텀시트 나타날 때, 들어갈 때 애니메이션 구현
- dimmed 된 배경 누르면 바텀시트 들어가도록 구현
- 인원선택 클릭시 '/payment'페이지로 이동



<br/>

<h3> 4️⃣ Payment: 결제 </h3>
<img src=https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/40036002-4469-4d61-9dee-e21f0a99ba9d" />

- recoil-persist로 이전 페이지들에서 선택된 영화 정보 가져오기
- 결제하기 플로팅 버튼 클릭시 영화 스케줄 정보 PATCH 되도록

<br/>

---

<br />
<br />

<h2>🐝 FE 뿌시는 4조 웨비들입니다 ! </h2>

<table align="center">
    <tr align="center">
        <td style="min-width: 200px;">
              <img src="https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/be4fe917-5dbc-415f-9329-d58c12dca12b" width="200" alt="연서-프로필사진">
              <br />
        </td>
      <td style="min-width: 200px;">
              <img src="https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/7dba2c19-9149-44a9-a2a5-169578b9a4ea" width="200" alt="다은-프로필사진">
              <br />
        </td>
      <td style="min-width: 200px;">
              <img src="https://github.com/DOSOPT-CDS-WEB-4/CGV-Web-Client/assets/77691829/4e13ec52-c7fb-4972-997c-db7927c6b1d2" width="200" alt="도윤-프로필사진">
              <br />
        </td>
    </tr>
    <tr align="center">
        <td>
            조연서 <br/>  <a href="https://github.com/Yeonseo-Jo"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a>
      </td>
       <td>
            남다은 <br/>               <a href="https://github.com/namdaeun"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a>
      </td>
       <td>
            이도윤 <br/>               <a href="https://github.com/doyn511"><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/></a>
      </td>
    </tr>
    <tr align="center">
        <td>
          인원 선택 바텀시트 <br/> 결제 뷰
      </td>
       <td>
         홈 뷰
      </td>
       <td>
         관람시간 선택 뷰  
      </td>
    </tr>
  	<tr align="center">
        <td>
          결제하기 기능 API
      </td>
       <td>
         영화 차트 리스트 조회 API <br/> 좋아요 및 좋아요 취소 API       
      </td>
       <td>
         빠른 예매 영화 상세 정보 조회 및 
         <br/>지역, 날짜, 상영관 필터링 API
      </td>
    </tr>
</table>
<br />
<br />
<h2> 🛠 기술스택 </h2>

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                        |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) ![Stylelint](https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white)|
| Package Manager      | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)                                                                                                       |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
| State Management      | ![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge) |




<br />
<br />
<h2> 💡 주요 라이브러리 </h2>

```
    "react-slick": "^0.29.0",
    "recoil": "^0.7.7",
    "recoil-persist": "^5.1.0",
    "vite-plugin-svgr": "^4.2.0"

```

<br/>
<br />

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<a href="https://quasar-smelt-153.notion.site/557149d804164f7e83f4623aaa87b6c3?pvs=4">🔗 노션 링크</a>

<br/>
<br/>

<h2> 📁 폴더 구조 </h2>

```
├── 📁 src
│  └── 📁 assets
│  │   ├── 📁 icon
│  │   ├── 📁 image
│  │   └── asset.d.ts
├── 📁 components
│  ├── 📁 common
│  ├── 📁 Home
│  ├── 📁 Payment
│  └── 📁 SelectTime
├── 📁 constants
├── 📁 hooks
├── 📁 libs
├── 📁 pages
├── 📁 recoil
│  └── atom.ts
├── 📁 styles
│  ├── GlobalStyle.ts
│  ├── theme.ts
│  └── style.d.ts
├── 📁 types
├── App.tsx
├── main.tsx
└── Router.tsx

```


<br/>
