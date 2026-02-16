import { useWeather } from './hooks/useWeather';
import { getWeatherCondition, getWeatherMessage } from './utils/weatherMessages';
import { WeatherStone } from './components/WeatherStone';
import { WeatherMessage } from './components/WeatherMessage';
import { TossRecommendation } from './components/TossRecommendation';

function App() {
  // OpenWeatherMap API 키 (환경 변수에서 가져오기)
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  const { weather, loading, error } = useWeather(apiKey);

  // 날씨 상태 결정
  const condition = weather
    ? getWeatherCondition(weather.weatherId, weather.windSpeed)
    : 'clear';

  const message = getWeatherMessage(condition);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            🪨 일출랜드 날씨돌 공식 앱 (비공식)
          </h1>
          <p className="text-sm text-gray-600">
            미래 예측 ❌ 현재 날씨만 웃기게 알려줌 ✅
          </p>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {loading && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4 animate-bounce">🪨</div>
              <div className="text-gray-600">돌이 날씨를 확인하는 중...</div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">😅</div>
              <div className="text-red-600 font-bold mb-2">에러 발생!</div>
              <div className="text-gray-600 text-sm">{error}</div>
            </div>
          )}

          {!loading && !error && weather && (
            <>
              <WeatherStone condition={condition} />
              <WeatherMessage
                message={message}
                temp={weather.temp}
                humidity={weather.humidity}
                city={weather.city}
              />
              <TossRecommendation condition={condition} />
            </>
          )}
        </div>

        {/* 푸터 */}
        <div className="text-center mt-8 space-y-2">
          <div className="text-xs text-gray-500">
            💡 Tip: 2년에 한 번 태풍 때 돌 날아감
          </div>
          <div className="text-xs text-gray-400">
            제주도 일출랜드 날씨 알려주는 돌멩이 패러디
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
