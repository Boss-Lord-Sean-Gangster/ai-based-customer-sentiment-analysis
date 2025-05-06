import React, { useState, useRef, useContext } from 'react';
import { SearchCheck, RotateCcw, Loader2 } from 'lucide-react';
import { SentimentContext } from '../context/SentimentContext';
import { analyzeSentiment } from '../services/geminiService';

const FeedbackInput: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { setSentimentData, setIsAnalyzing } = useContext(SentimentContext);
  
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleResetClick = () => {
    setInputText('');
    setSentimentData(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleAnalyzeClick = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    try {
      const result = await analyzeSentiment(inputText);
      setSentimentData(result);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      // Handle error state
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow analyzing on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleAnalyzeClick();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-slate-900">Analyze Customer Feedback</h2>
      <div className="mb-4">
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          className="w-full h-48 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
          placeholder="Paste customer feedback, reviews, or comments here for sentiment analysis..."
        />
        <p className="text-xs text-slate-500 mt-1 flex justify-between">
          <span>Press Ctrl+Enter to analyze</span>
          <span>{inputText.length} characters</span>
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleAnalyzeClick}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
          disabled={!inputText.trim()}
        >
          <SearchCheck className="w-5 h-5 mr-2" />
          Analyze Sentiment
        </button>
        
        <button
          onClick={handleResetClick}
          className="inline-flex items-center px-4 py-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </button>
      </div>

      <div className="mt-4 text-sm text-slate-500">
        <p>Enter customer feedback, product reviews, support tickets, or social media comments to analyze sentiment.</p>
      </div>
    </div>
  );
};

export default FeedbackInput;