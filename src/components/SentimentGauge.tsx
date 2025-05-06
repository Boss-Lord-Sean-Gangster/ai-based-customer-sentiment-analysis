import React, { useEffect, useRef } from 'react';

interface SentimentGaugeProps {
  score: number; // 0 to 1 where 0 is negative, 0.5 is neutral, 1 is positive
}

const SentimentGauge: React.FC<SentimentGaugeProps> = ({ score }) => {
  const needleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (needleRef.current) {
      // Convert score (0 to 1) to degrees (-90 to 90)
      const degrees = -90 + (score * 180);
      needleRef.current.style.transform = `rotate(${degrees}deg)`;
    }
  }, [score]);

  // Function to determine color based on score
  const getScoreColor = (score: number) => {
    if (score < 0.33) return 'text-error-500';
    if (score < 0.66) return 'text-warning-500';
    return 'text-success-500';
  };

  return (
    <div className="sentiment-gauge-container">
      {/* Gauge Background */}
      <svg className="w-full h-full" viewBox="0 0 200 100">
        {/* Negative Section */}
        <path
          d="M20 100 A80 80 0 0 1 100 20"
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Neutral Section */}
        <path
          d="M100 20 A80 80 0 0 1 180 100"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Calibration marks */}
        <g stroke="#334155" strokeWidth="1">
          <line x1="20" y1="100" x2="25" y2="95" />
          <line x1="60" y1="60" x2="65" y2="55" />
          <line x1="100" y1="20" x2="100" y2="25" />
          <line x1="140" y1="60" x2="135" y2="55" />
          <line x1="180" y1="100" x2="175" y2="95" />
        </g>
        <text x="20" y="115" fontSize="10" fill="#334155">0.0</text>
        <text x="60" y="50" fontSize="10" fill="#334155">0.25</text>
        <text x="95" y="15" fontSize="10" fill="#334155">0.5</text>
        <text x="130" y="50" fontSize="10" fill="#334155">0.75</text>
        <text x="175" y="115" fontSize="10" fill="#334155">1.0</text>
      </svg>
      
      {/* Needle */}
      <div 
        ref={needleRef}
        className="sentiment-gauge absolute bottom-0 left-1/2 w-1 h-[70px] bg-slate-800 -ml-[2px] rounded-t"
        style={{ transformOrigin: 'bottom center' }}
      ></div>
      
      {/* Score Display */}
      <div className="text-center mt-4">
        <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
          {score.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default SentimentGauge;