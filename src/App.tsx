import React, { useState } from 'react';
import { BrainCog } from 'lucide-react';
import Header from './components/Header';
import FeedbackInput from './components/FeedbackInput';
import AnalysisResults from './components/AnalysisResults';
import AnalysisHistory from './components/AnalysisHistory';
import Footer from './components/Footer';
import { SentimentAnalysisProvider } from './context/SentimentContext';

function App() {
  const [activeTab, setActiveTab] = useState<'analyze' | 'history'>('analyze');

  return (
    <SentimentAnalysisProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === 'analyze'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('analyze')}
              >
                Analyze Feedback
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === 'history'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('history')}
              >
                Analysis History
              </button>
            </div>
          </div>
          
          {activeTab === 'analyze' ? (
            <div className="max-w-4xl mx-auto">
              <FeedbackInput />
              <AnalysisResults />
            </div>
          ) : (
            <AnalysisHistory />
          )}
        </main>
        
        <Footer />
      </div>
    </SentimentAnalysisProvider>
  );
}

export default App;