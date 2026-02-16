import type { WeatherMessage as WeatherMessageType } from '../utils/weatherMessages';

interface WeatherMessageProps {
  message: WeatherMessageType;
  temp?: number;
  humidity?: number;
  city?: string;
}

export function WeatherMessage({ message, temp, humidity, city }: WeatherMessageProps) {
  return (
    <div className="text-center mt-8 space-y-4">
      <div className="text-2xl font-bold text-gray-800">
        {message.emoji} 돌이 {message.stone}
      </div>
      <div className="text-xl text-gray-700 px-4 leading-relaxed">
        {message.message}
      </div>
      {temp !== undefined && (
        <div className="mt-6 space-y-2 text-gray-600">
          <div className="text-3xl font-bold text-blue-600">
            {temp}°C
          </div>
          {city && (
            <div className="text-sm">
              📍 {city}
            </div>
          )}
          {humidity !== undefined && (
            <div className="text-sm text-gray-500">
              💧 습도 {humidity}%
            </div>
          )}
        </div>
      )}
    </div>
  );
}
