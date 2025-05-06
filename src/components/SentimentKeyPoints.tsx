import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import { SentimentData } from '../types/sentiment';

interface SentimentKeyPointsProps {
  sentimentData: SentimentData;
}

const SentimentKeyPoints: React.FC<SentimentKeyPointsProps> = ({ sentimentData }) => {
  const [expandedPositive, setExpandedPositive] = useState(true);
  const [expandedNegative, setExpandedNegative] = useState(true);

  const togglePositive = () => setExpandedPositive(!expandedPositive);
  const toggleNegative = () => setExpandedNegative(!expandedNegative);

  return (
    <div className="space-y-4">
      <div className="border rounded-lg overflow-hidden">
        <div 
          className="flex items-center justify-between bg-green-50 p-3 cursor-pointer"
          onClick={togglePositive}
        >
          <h3 className="text-md font-medium text-green-800 flex items-center">
            Positive Aspects
            <span className="ml-2 bg-green-200 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
              {sentimentData.positiveAspects.length}
            </span>
          </h3>
          {expandedPositive ? (
            <MinusCircle className="w-5 h-5 text-green-700" />
          ) : (
            <PlusCircle className="w-5 h-5 text-green-700" />
          )}
        </div>
        
        {expandedPositive && (
          <div className="p-4">
            {sentimentData.positiveAspects.length > 0 ? (
              <ul className="space-y-2">
                {sentimentData.positiveAspects.map((aspect, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-green-100 text-green-800 rounded-full">
                      +
                    </span>
                    <span className="text-slate-700">{aspect}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">No positive aspects identified</p>
            )}
          </div>
        )}
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div 
          className="flex items-center justify-between bg-red-50 p-3 cursor-pointer"
          onClick={toggleNegative}
        >
          <h3 className="text-md font-medium text-red-800 flex items-center">
            Areas for Improvement
            <span className="ml-2 bg-red-200 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
              {sentimentData.negativeAspects.length}
            </span>
          </h3>
          {expandedNegative ? (
            <MinusCircle className="w-5 h-5 text-red-700" />
          ) : (
            <PlusCircle className="w-5 h-5 text-red-700" />
          )}
        </div>
        
        {expandedNegative && (
          <div className="p-4">
            {sentimentData.negativeAspects.length > 0 ? (
              <ul className="space-y-2">
                {sentimentData.negativeAspects.map((aspect, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-red-100 text-red-800 rounded-full">
                      -
                    </span>
                    <span className="text-slate-700">{aspect}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">No areas for improvement identified</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentKeyPoints;