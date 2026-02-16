import type { WeatherCondition } from '../utils/weatherMessages';

interface TossRecommendationProps {
  condition: WeatherCondition;
}

export function TossRecommendation({ condition }: TossRecommendationProps) {
  const getRecommendation = () => {
    switch (condition) {
      case 'rain':
        return {
          emoji: '🍜',
          text: '비 오니까 배달 어때요?',
          subtext: '따뜻한 국물이 생각나는 날'
        };
      case 'clear':
        return {
          emoji: '☕',
          text: '더우니까 아이스커피!',
          subtext: '시원한 음료수 한 잔 어떠세요?'
        };
      case 'snow':
        return {
          emoji: '🍲',
          text: '눈 오는 날엔 뜨끈한 걸로',
          subtext: '전골 요리 추천!'
        };
      case 'wind':
        return {
          emoji: '🏠',
          text: '바람 부는 날엔 집이 최고',
          subtext: '편안하게 집에서 보내세요'
        };
      case 'storm':
        return {
          emoji: '🚨',
          text: '외출 금지!',
          subtext: '안전이 최우선입니다'
        };
      default:
        return null;
    }
  };

  const recommendation = getRecommendation();

  if (!recommendation) return null;

  return (
    <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm border border-blue-100">
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{recommendation.emoji}</div>
        <div className="flex-1">
          <div className="font-bold text-gray-800 text-lg">
            {recommendation.text}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {recommendation.subtext}
          </div>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-400 text-right">
        Phase 2에서 토스 쿠폰 연동 예정 🎁
      </div>
    </div>
  );
}
