# 🪨 제주도 날씨 알려주는 돌멩이

제주도 일출랜드의 유명한 "날씨 알려주는 돌멩이" 밈을 모바일 앱으로 만든 프로젝트입니다!

## 🎯 컨셉

- **미래 예측 ❌**, 현재 날씨만 웃기게 알려줌 ✅
- "돌이 젖으면 비 오는 중", "돌이 흔들리면 바람 부는 중"
- 날씨돌의 핵심은 "당연한 걸 웃기게 말하기" 😄

## ✨ 주요 기능

### 1. 돌 캐릭터 UI
- 날씨 상태에 따라 변하는 귀여운 돌 이미지 (CSS 애니메이션)
- 상태: 젖음(비), 흔들림(바람), 뜨거움(맑음), 얼음(눈), 사라짐(태풍)

### 2. 웃긴 메시지 시스템
- ☔ **비**: "돌이 젖었어요 → 밖에 나가면 당신도 젖어요"
- 💨 **바람**: "돌이 흔들려요 → 바람 조심하세요 (가발 날아갈 수 있음)"
- ☀️ **맑음**: "돌이 뜨거워요 → 에어컨 켜세요"
- ❄️ **눈**: "돌이 얼었어요 → 당신도 곧 얼 거예요"
- 🌪️ **태풍**: "돌이 안 보여요 → 도망치세요"

### 3. 실시간 날씨 연동
- OpenWeatherMap API 사용
- 현재 위치 자동 감지 (Geolocation API)
- 실시간 온도, 습도, 풍속 표시

### 4. 제주도 밈 요소
- 타이틀: "일출랜드 날씨돌 공식 앱 (비공식)"
- 이스터에그: 태풍급 바람 때 "돌이 사라졌습니다" 화면
- "2년에 한 번 태풍 때 돌 날아감" 팁

### 5. 토스 연동 준비 (Phase 2)
- 날씨 기반 추천 영역 (추후 쿠폰 API 연동 예정)
- "비 오니까 배달 어때요?", "더우니까 아이스커피!"

## 🛠️ 기술 스택

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Weather API**: OpenWeatherMap (무료 플랜)
- **Location**: Geolocation API

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone <repository-url>
cd jeju-weather-stone
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env` 파일을 생성하고 OpenWeatherMap API 키를 입력하세요:
```bash
cp .env.example .env
```

`.env` 파일을 열어서 `VITE_OPENWEATHERMAP_API_KEY`에 API 키를 입력:
```
VITE_OPENWEATHERMAP_API_KEY=your_actual_api_key_here
```

**OpenWeatherMap API 키 발급 방법:**
1. https://openweathermap.org/api 접속
2. 무료 계정 생성
3. API Keys 메뉴에서 키 복사

### 4. 개발 서버 실행
```bash
npm run dev
```

### 5. 브라우저에서 확인
```
http://localhost:5173
```

## 🚀 Railway 배포 가이드

### 1. Railway 계정 생성
- https://railway.app 접속
- GitHub 계정으로 로그인

### 2. 프로젝트 생성
```bash
# Railway CLI 설치 (선택사항)
npm install -g @railway/cli

# 또는 Railway 웹사이트에서 "New Project" 클릭
```

### 3. GitHub 연동
1. Railway 웹사이트에서 "Deploy from GitHub repo"
2. 이 저장소 선택
3. 자동 배포 시작

### 4. 환경 변수 설정
Railway 프로젝트 대시보드에서:
1. "Variables" 탭 클릭
2. 다음 변수 추가:
   - `VITE_OPENWEATHERMAP_API_KEY`: your_api_key_here

### 5. 배포 완료
- Railway가 자동으로 빌드 및 배포
- 제공된 URL로 접속 가능

**빌드 설정 (자동 감지됨):**
- Build Command: `npm run build`
- Start Command: `npm run preview -- --port $PORT --host`

### 6. 커스텀 도메인 (선택사항)
Railway 설정에서 커스텀 도메인 연결 가능

## 📁 프로젝트 구조

```
jeju-weather-stone/
├── src/
│   ├── components/
│   │   ├── WeatherStone.tsx      # 메인 돌 컴포넌트
│   │   ├── WeatherMessage.tsx    # 웃긴 메시지 표시
│   │   └── TossRecommendation.tsx # 토스 연동 준비
│   ├── hooks/
│   │   └── useWeather.ts         # 날씨 API 커스텀 훅
│   ├── utils/
│   │   └── weatherMessages.ts    # 메시지 로직
│   ├── App.tsx                   # 메인 앱
│   └── index.css                 # Tailwind + 커스텀 애니메이션
├── .env.example                  # 환경 변수 예시
├── tailwind.config.js            # Tailwind 설정
├── vite.config.ts                # Vite 설정
└── README.md                     # 이 파일
```

## 🎨 애니메이션

- **비**: 떨어지는 물방울 애니메이션
- **눈**: 회전하며 떨어지는 눈송이
- **바람**: 수평 이동하는 바람 선
- **태풍**: 돌이 사라지는 페이드 아웃

## 🔧 제약사항

- OpenWeatherMap 무료 플랜: 60 calls/min
  - 5분 캐싱으로 API 호출 최소화
- 간단한 CSS 애니메이션 (복잡한 것 ❌)
- 모바일 최적화 우선 (Tailwind responsive)

## 🚧 Phase 2 계획

- [ ] 토스 쿠폰 API 연동
- [ ] 날씨 히스토리 그래프
- [ ] 돌 캐릭터 커스터마이징
- [ ] 다른 지역 날씨 비교
- [ ] PWA (Progressive Web App) 변환
- [ ] 소셜 미디어 공유 기능

## 🤝 기여하기

이슈나 PR 환영합니다! 🎉

## 📝 라이선스

MIT License

---

**제주도 일출랜드 날씨 알려주는 돌멩이에 영감을 받아 만들었습니다** 🪨✨

💡 **Tip**: 2년에 한 번 태풍 때 돌 날아감
