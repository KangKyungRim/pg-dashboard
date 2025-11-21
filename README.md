# PG Dashboard

본 프로젝트는 Material Tailwind React Dashboard 템플릿을 기반으로 구축한 PG(결제) 가맹점/거래 관리 대시보드입니다.  
실제 API 데이터를 활용한 위젯, 테이블, 페이지네이션, 차트 등을 커스터마이징하여 사용합니다.

---

## 프로젝트 구조

```
pg-dashboard/
├─ src/
│  ├─ apis/                 # API 호출 함수
│  │  ├─ fetchMerchantAllDetail.ts # 가맹점 전체 상세 api
│  │  ├─ fetchMerchantDetail.ts # 가맹점 단일 상세 api
│  │  └─ fetchPayments.ts   # 거래 내역 전체 조회 api
│  ├─ components/           # 공용 컴포넌트
│  │  ├─ BackButton.tsx     # 뒤로가기 컴포넌트
│  │  ├─ GenericTable.tsx   # 공용 테이블 컴포넌트
│  │  ├─ Loader.tsx         # 로딩 표시 컴포넌트
│  │  └─ Pagination.tsx     # 페이지네이션 컴포넌트
│  ├─ context/              
│  │  └─ index.tsx          # Material Tailwind 컨트롤러
│  ├─ pages/                
│  │  ├─ dashboard/         
│  │  │  ├─ home.tsx        # 대시보드 페이지
│  │  │  ├─ Merchants.tsx   # 가맹점 목록 페이지
│  │  │  ├─ Merchant.tsx    # 가맹점 상세 페이지
│  │  │  └─ payments.tsx    # 거래 내역 페이지
│  ├─ stores/               # Zustand 상태 관리
│  │  ├─ paymentsStore.tsx   
│  │  └─ merchantStore.ts
│  ├─ types/                # 타입 정의
│  │  ├─ env.d.ts
│  │  ├─ merchant.d.ts
│  │  ├─ payments.d.ts
│  │  └─ ui.ts
│  ├─ utils/                
│  │  └─ getPageName.ts
│  └─ widgets/              # 카드/차트 컴포넌트
│     ├─ layout/
│     ├─ cards/
│     └─ charts/
├─ public/
│  └─ favicon.ico
├─ package.json
└─ vite.config.ts
```

---

## 사용된 템플릿

- **템플릿 이름:** Material Tailwind React Dashboard  
- **출처:** [Creative Tim](https://www.creative-tim.com/product/material-tailwind-dashboard-react)  
- **사용 부분:**  
  - 사이드바 및 레이아웃 구조  
  - 카드 기본 스타일  
- **커스터마이징:**  
  - **파비콘 설정**
  - **브레드크럼(Breadcrumb)**  
    URL 경로에 따라 사이드바 메뉴명을 한글로 표시하도록 수정
  - **페이지네이션 컴포넌트**  
    공용 페이지네이션 컴포넌트 생성 및 전체 데이터 기준 정렬 지원
  - **로더(Loader) 컴포넌트**  
    API 호출 시 로딩 표시
  - **API 데이터 기반 위젯/카드/테이블 구조**  
    실제 API 구조에 맞게 위젯 및 카드 컴포넌트 재구성
  - **뒤로가기 버튼 컴포넌트**  
    이전 페이지 이동 기능 제공
  - **공용 테이블(GenericTable) 컴포넌트**  
    정렬, 렌더링 커스터마이징, 페이지네이션 지원

---

## 사용한 주요 기술 및 선택 이유

### 프레임워크 & 언어
- **React 18**  
  최신 React 기능과 성능 최적화를 활용할 수 있으며, 컴포넌트 기반 구조로 재사용성과 유지보수가 용이합니다.
- **TypeScript**  
  정적 타입 검사를 통해 런타임 에러를 줄이고, 코드 가독성 및 협업 시 안정성을 향상시킵니다.

### 스타일링
- **TailwindCSS + Material Tailwind**  
  유틸리티 기반으로 빠른 스타일링이 가능하며, Material Tailwind를 활용해 미리 정의된 UI 컴포넌트를 사용할 수 있습니다.  
  커스터마이징이 용이하고 일관된 디자인 시스템을 유지할 수 있습니다.

### 상태 관리
- **Zustand**  
  간단하고 직관적인 글로벌 상태 관리가 가능하며, React의 local state와 유사한 API로 학습 곡선이 낮습니다.  
  불필요한 boilerplate 없이 상태를 공유할 수 있습니다.

### 차트 라이브러리
- **ApexCharts (react-apexcharts)**  
  다양한 차트 유형(Line, Bar, Pie 등)을 지원하며, React와 쉽게 연동됩니다.  
  데이터 시각화가 직관적이고 용이합니다.

### 기타
- **React Router v6**: 페이지 라우팅 및 URL 파라미터 관리 용이  
- **Vite**: 빠른 개발 서버, 최적화된 빌드 속도 제공  
- **Zustand**: API 데이터 처리와 상태 관리 분리  
- **공용 컴포넌트화 (GenericTable, Pagination, Loader 등)**  
  재사용 가능하며 프로젝트 확장 시 유지보수 용이

### 선택 이유 요약
- **유연하고 확장 가능한 구조**: 재사용 가능한 컴포넌트와 체계적인 상태 관리  
- **개발 생산성 향상**: Tailwind + Material Tailwind, Vite 활용  
- **안정성과 유지보수**: TypeScript, 명확한 상태 관리, 모듈화된 구조  
- **데이터 시각화 용이**: ApexCharts를 통한 직관적 차트 제공

---

## 실행 방법

1. 프로젝트 클론

```bash
git clone <repo-url>
cd pg-dashboard
```

2. 패키지 설치

```bash
npm install
```

3. .env 파일 생성 및 환경 변수 설정

```bash
VITE_API_BASE_URL=https://recruit.paysbypays.com/api/v1
```

4. 개발 서버 실행

```bash
npm run dev
```


