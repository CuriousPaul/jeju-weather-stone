import { useState, useEffect } from 'react';

export interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  weatherId: number;
  weatherMain: string;
  weatherDescription: string;
  city: string;
}

interface OpenWeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
  }>;
  name: string;
}

interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export function useWeather(apiKey: string | undefined) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) {
      setError('OpenWeatherMap API 키가 필요합니다.');
      setLoading(false);
      return;
    }

    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('날씨 데이터를 가져올 수 없습니다.');
        }

        const data: OpenWeatherResponse = await response.json();

        setWeather({
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          weatherId: data.weather[0].id,
          weatherMain: data.weather[0].main,
          weatherDescription: data.weather[0].description,
          city: data.name
        });
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('이 브라우저는 위치 기능을 지원하지 않습니다.');
        setLoading(false);
        return;
      }

      // 제주도 기본 좌표 (일출랜드 근처)
      const JEJU_LAT = 33.4394;
      const JEJU_LON = 126.8428;

      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
          // 위치 권한 거부 시 제주도 기본 좌표 사용
          fetchWeather(JEJU_LAT, JEJU_LON);
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 300000 // 5분 캐싱
        }
      );
    };

    getLocation();
  }, [apiKey]);

  return { weather, loading, error };
}
