import React, { useContext } from 'react';
import { Trash2, MessageSquare, ExternalLink } from 'lucide-react';
import { SentimentContext } from '../context/SentimentContext';
import { SentimentData } from '../types/sentiment';

const AnalysisHistory: React.FC = () => {
  const { analysisHistory, loadAnalysis, removeAnalysis } = useContext(SentimentContext);

  if (analysisHistory.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-4">
            <MessageSquare className="w-12 h-12 text-slate-400 mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">No Analysis History</h2>
          <p className="text-slate-600 mb-4">
            Your previous sentiment analyses will appear here. Start by analyzing your first customer feedback.
          </p>
        </div>
      </div>
    );
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive':
        return 'bg-green-100 text-green-800';
      case 'negative':
        return 'bg-red-100 text-red-800';
      case 'neutral':
        return 'bg-slate-100 text-slate-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6 text-slate-900">Analysis History</h2>
        
        <div className="space-y-4">
          {analysisHistory.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="mb-1">
                    <span className={`text-xs font-medium ${getSentimentColor(item.overallSentiment)} px-2.5 py-0.5 rounded`}>
                      {item.overallSentiment}
                    </span>
                    <span className="text-xs text-slate-500 ml-2">
                      {formatTimestamp(item.timestamp)}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm">{truncateText(item.text)}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => loadAnalysis(item)}
                    className="text-primary-600 hover:text-primary-800 p-1"
                    title="View Analysis"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeAnalysis(item.id)}
                    className="text-slate-600 hover:text-error-500 p-1"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="text-xs">
                  <span className="text-green-700 font-medium">{item.positivePercentage}%</span> positive
                </div>
                <div className="text-xs">
                  <span className="text-slate-700 font-medium">{item.neutralPercentage}%</span> neutral
                </div>
                <div className="text-xs">
                  <span className="text-red-700 font-medium">{item.negativePercentage}%</span> negative
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisHistory;