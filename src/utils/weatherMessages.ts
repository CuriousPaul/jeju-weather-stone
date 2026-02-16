export type WeatherCondition = 'clear' | 'rain' | 'snow' | 'wind' | 'storm';

export interface WeatherMessage {
  stone: string;
  message: string;
  emoji: string;
}

export const weatherMessages: Record<WeatherCondition, WeatherMessage> = {
  clear: {
    stone: '뜨거워요',
    message: '돌이 뜨거워요 → 에어컨 켜세요',
    emoji: '☀️'
  },
  rain: {
    stone: '젖었어요',
    message: '돌이 젖었어요 → 밖에 나가면 당신도 젖어요',
    emoji: '☔'
  },
  snow: {
    stone: '얼었어요',
    message: '돌이 얼었어요 → 당신도 곧 얼 거예요',
    emoji: '❄️'
  },
  wind: {
    stone: '흔들려요',
    message: '돌이 흔들려요 → 바람 조심하세요 (가발 날아갈 수 있음)',
    emoji: '💨'
  },
  storm: {
    stone: '사라졌어요',
    message: '돌이 안 보여요 → 도망치세요',
    emoji: '🌪️'
  }
};

export function getWeatherCondition(
  weatherId: number,
  windSpeed: number
): WeatherCondition {
  // OpenWeatherMap weather codes:
  // 2xx: Thunderstorm
  // 3xx: Drizzle
  // 5xx: Rain
  // 6xx: Snow
  // 7xx: Atmosphere (fog, mist, etc.)
  // 800: Clear
  // 80x: Clouds

  // 태풍 체크 (바람 속도 > 17 m/s)
  if (windSpeed > 17 || (weatherId >= 200 && weatherId < 300)) {
    return 'storm';
  }

  // 비 체크
  if ((weatherId >= 300 && weatherId < 600) || weatherId === 500) {
    return 'rain';
  }

  // 눈 체크
  if (weatherId >= 600 && weatherId < 700) {
    return 'snow';
  }

  // 강한 바람 체크 (5-17 m/s)
  if (windSpeed > 5) {
    return 'wind';
  }

  // 맑음
  return 'clear';
}

export function getWeatherMessage(condition: WeatherCondition): WeatherMessage {
  return weatherMessages[condition];
}
