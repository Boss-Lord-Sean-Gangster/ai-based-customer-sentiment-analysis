import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-3">Sentiment Insight</h3>
            <p className="text-sm max-w-md">
              Powerful customer sentiment analysis powered by Google's Gemini AI.
              Analyze feedback, reviews, and comments with precision.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Gemini API Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/your-repo/sentiment-insight" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Sentiment Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;