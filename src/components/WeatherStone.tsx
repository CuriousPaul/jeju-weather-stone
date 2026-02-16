import type { WeatherCondition } from '../utils/weatherMessages';

interface WeatherStoneProps {
  condition: WeatherCondition;
}

export function WeatherStone({ condition }: WeatherStoneProps) {
  const getStoneClasses = () => {
    const baseClasses = 'relative w-40 h-32 mx-auto rounded-full transition-all duration-1000';

    switch (condition) {
      case 'rain':
        return `${baseClasses} bg-gray-400 animate-pulse`;
      case 'wind':
        return `${baseClasses} bg-gray-500 animate-bounce`;
      case 'clear':
        return `${baseClasses} bg-orange-300 shadow-lg shadow-orange-500/50`;
      case 'snow':
        return `${baseClasses} bg-blue-200 border-4 border-blue-300`;
      case 'storm':
        return `${baseClasses} bg-gray-800 opacity-0 scale-0`;
      default:
        return `${baseClasses} bg-gray-500`;
    }
  };

  const getStoneFace = () => {
    if (condition === 'storm') {
      return (
        <div className="absolute inset-0 flex items-center justify-center text-6xl animate-ping">
          💨
        </div>
      );
    }

    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* 눈 */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-6">
            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
          </div>
          {/* 입 */}
          <div className={`w-8 h-2 mt-6 rounded-full ${
            condition === 'rain' ? 'bg-blue-500' :
            condition === 'snow' ? 'bg-blue-300' :
            condition === 'clear' ? 'bg-orange-600' :
            condition === 'wind' ? 'bg-gray-600' :
            'bg-gray-600'
          }`}></div>
        </div>
      </div>
    );
  };

  const getWeatherEffects = () => {
    if (condition === 'rain') {
      return (
        <>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-blue-400 rounded-full animate-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </>
      );
    }

    if (condition === 'snow') {
      return (
        <>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full animate-snow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </>
      );
    }

    if (condition === 'wind') {
      return (
        <>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-0.5 bg-gray-400 rounded-full animate-wind"
              style={{
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </>
      );
    }

    return null;
  };

  return (
    <div className="relative w-64 h-64 mx-auto">
      {getWeatherEffects()}
      <div className={getStoneClasses()}>
        {getStoneFace()}
      </div>
      {condition === 'storm' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🌪️</div>
        </div>
      )}
    </div>
  );
}
