import React, { useContext } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { SentimentContext } from '../context/SentimentContext';
import SentimentGauge from './SentimentGauge';
import SentimentKeyPoints from './SentimentKeyPoints';

const AnalysisResults: React.FC = () => {
  const { sentimentData, isAnalyzing } = useContext(SentimentContext);

  if (isAnalyzing) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[300px]">
        <Loader2 className="w-10 h-10 text-primary-600 animate-spin mb-4" />
        <p className="text-slate-700">Analyzing sentiment with Gemini AI...</p>
        <p className="text-sm text-slate-500 mt-2">This might take a few seconds</p>
      </div>
    );
  }

  if (!sentimentData) {
    return null;
  }

  const handleExportClick = () => {
    const dataStr = JSON.stringify(sentimentData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = `sentiment-analysis-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Analysis Results</h2>
        <button
          onClick={handleExportClick}
          className="inline-flex items-center px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
        >
          <Download className="w-4 h-4 mr-1" />
          Export
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-slate-900 mb-3">Sentiment Score</h3>
          <SentimentGauge score={sentimentData.overallScore} />
          <div className="text-center mt-4">
            <span className="text-xl font-bold">{sentimentData.overallSentiment}</span>
            <p className="text-sm text-slate-600 mt-1">Overall Sentiment</p>
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-slate-900 mb-3">Sentiment Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">Positive</span>
              <div className="flex items-center">
                <div className="w-36 bg-slate-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-success-500 h-2.5 rounded-full" 
                    style={{ width: `${sentimentData.positivePercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-slate-700">{sentimentData.positivePercentage}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">Neutral</span>
              <div className="flex items-center">
                <div className="w-36 bg-slate-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-slate-400 h-2.5 rounded-full" 
                    style={{ width: `${sentimentData.neutralPercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-slate-700">{sentimentData.neutralPercentage}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">Negative</span>
              <div className="flex items-center">
                <div className="w-36 bg-slate-200 rounded-full h-2.5 mr-2">
                  <div 
                    className="bg-error-500 h-2.5 rounded-full" 
                    style={{ width: `${sentimentData.negativePercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-slate-700">{sentimentData.negativePercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SentimentKeyPoints sentimentData={sentimentData} />
      
      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <h3 className="text-lg font-medium text-slate-900 mb-2">Summary</h3>
        <p className="text-slate-700">{sentimentData.summary}</p>
      </div>
    </div>
  );
};

export default AnalysisResults;