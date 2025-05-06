import React from 'react';
import { BrainCog } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-primary-600">
              <BrainCog size={32} />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Sentiment Insight</h1>
              <p className="text-sm text-slate-600">AI-Powered Customer Sentiment Analysis</p>
            </div>
          </div>
          <div>
            <a 
              href="https://github.com/your-repo/sentiment-insight" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;