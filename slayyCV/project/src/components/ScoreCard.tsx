import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore: number;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, score, maxScore, description, trend = 'neutral' }) => {
  const percentage = (score / maxScore) * 100;
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getBarColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {getTrendIcon()}
      </div>
      
      <div className="flex items-baseline space-x-2 mb-3">
        <span className={`text-3xl font-bold ${getScoreColor(percentage)}`}>
          {score}
        </span>
        <span className="text-gray-500">/ {maxScore}</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${getBarColor(percentage)}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ScoreCard;