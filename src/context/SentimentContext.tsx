import React, { createContext, useState, useEffect } from 'react';
import { SentimentData } from '../types/sentiment';

interface SentimentContextType {
  sentimentData: SentimentData | null;
  setSentimentData: (data: SentimentData | null) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (value: boolean) => void;
  analysisHistory: SentimentData[];
  loadAnalysis: (analysis: SentimentData) => void;
  removeAnalysis: (id: string) => void;
}

const defaultContext: SentimentContextType = {
  sentimentData: null,
  setSentimentData: () => {},
  isAnalyzing: false,
  setIsAnalyzing: () => {},
  analysisHistory: [],
  loadAnalysis: () => {},
  removeAnalysis: () => {},
};

export const SentimentContext = createContext<SentimentContextType>(defaultContext);

export const SentimentAnalysisProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [sentimentData, setSentimentData] = useState<SentimentData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisHistory, setAnalysisHistory] = useState<SentimentData[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('sentimentAnalysisHistory');
    if (storedHistory) {
      try {
        setAnalysisHistory(JSON.parse(storedHistory));
      } catch (e) {
        console.error('Error parsing stored analysis history:', e);
      }
    }
  }, []);

  // Update history when new analysis is done
  useEffect(() => {
    if (sentimentData && !isAnalyzing) {
      // Check if this is a new analysis by checking if it already exists in history
      const exists = analysisHistory.some(item => item.id === sentimentData.id);
      
      if (!exists) {
        const updatedHistory = [sentimentData, ...analysisHistory].slice(0, 20); // Keep only 20 most recent
        setAnalysisHistory(updatedHistory);
        localStorage.setItem('sentimentAnalysisHistory', JSON.stringify(updatedHistory));
      }
    }
  }, [sentimentData, isAnalyzing]);

  const loadAnalysis = (analysis: SentimentData) => {
    setSentimentData(analysis);
  };

  const removeAnalysis = (id: string) => {
    const updatedHistory = analysisHistory.filter(item => item.id !== id);
    setAnalysisHistory(updatedHistory);
    localStorage.setItem('sentimentAnalysisHistory', JSON.stringify(updatedHistory));
    
    // If the currently displayed result is the one being deleted, clear it
    if (sentimentData && sentimentData.id === id) {
      setSentimentData(null);
    }
  };

  return (
    <SentimentContext.Provider
      value={{
        sentimentData,
        setSentimentData,
        isAnalyzing,
        setIsAnalyzing,
        analysisHistory,
        loadAnalysis,
        removeAnalysis,
      }}
    >
      {children}
    </SentimentContext.Provider>
  );
};