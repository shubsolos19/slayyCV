import React from 'react';
import { AlertTriangle, CheckCircle, Info, Lightbulb } from 'lucide-react';

interface RecommendationCardProps {
  type: 'critical' | 'warning' | 'info' | 'tip';
  title: string;
  description: string;
  actionItems: string[];
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ 
  type, 
  title, 
  description, 
  actionItems 
}) => {
  const getCardConfig = () => {
    switch (type) {
      case 'critical':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          iconColor: 'text-red-500',
          titleColor: 'text-red-900',
          badgeColor: 'bg-red-100 text-red-800'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          iconColor: 'text-yellow-500',
          titleColor: 'text-yellow-900',
          badgeColor: 'bg-yellow-100 text-yellow-800'
        };
      case 'info':
        return {
          icon: Info,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          iconColor: 'text-blue-500',
          titleColor: 'text-blue-900',
          badgeColor: 'bg-blue-100 text-blue-800'
        };
      case 'tip':
        return {
          icon: Lightbulb,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconColor: 'text-green-500',
          titleColor: 'text-green-900',
          badgeColor: 'bg-green-100 text-green-800'
        };
    }
  };

  const config = getCardConfig();
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-6 hover:shadow-md transition-shadow duration-200`}>
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-full ${config.bgColor}`}>
          <Icon className={`w-5 h-5 ${config.iconColor}`} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className={`text-lg font-semibold ${config.titleColor}`}>{title}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.badgeColor}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4">{description}</p>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Action Items:</h4>
            <ul className="space-y-1">
              {actionItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;