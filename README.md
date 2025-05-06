# Sentiment Insight - AI Customer Sentiment Analysis

A powerful web application that leverages Google's Gemini AI to analyze customer feedback, reviews, and comments for sentiment analysis. Get detailed insights into customer sentiment with visual metrics, key point extraction, and historical tracking.

![Sentiment Analysis Dashboard](https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 🧠 AI-powered sentiment analysis using Google's Gemini
- 📊 Visual sentiment score gauge and breakdown charts
- ✨ Key point extraction for positive aspects and areas of improvement
- 📈 Historical analysis tracking and comparison
- 💾 Export analysis results in JSON format
- 📱 Responsive design for all devices
- 🔄 Real-time analysis with loading states

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- A Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sentiment-insight.git
   cd sentiment-insight
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Usage

1. Enter or paste customer feedback into the text area
2. Click "Analyze Sentiment" or press Ctrl+Enter
3. View the detailed sentiment analysis results:
   - Overall sentiment score and classification
   - Percentage breakdown of positive, neutral, and negative sentiments
   - Key positive aspects and areas for improvement
   - Summary of the analysis
4. Access previous analyses from the "Analysis History" tab
5. Export analysis results using the Export button

## Technology Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Google Generative AI SDK
- Lucide React for icons
- Recharts for data visualization

## Project Structure

```
sentiment-insight/
├── src/
│   ├── components/        # React components
│   ├── context/          # React context providers
│   ├── services/         # API and utility services
│   ├── types/           # TypeScript type definitions
│   └── App.tsx          # Main application component
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Key Components

- **FeedbackInput**: Text input area for customer feedback with real-time character count
- **AnalysisResults**: Displays sentiment analysis results with visual metrics
- **SentimentGauge**: Interactive gauge showing overall sentiment score
- **SentimentKeyPoints**: Expandable sections for positive and negative aspects
- **AnalysisHistory**: Historical view of previous analyses with filtering

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

### Environment Variables

- `VITE_GEMINI_API_KEY` - Google Gemini API key for sentiment analysis

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini AI for sentiment analysis capabilities
- Lucide for beautiful icons
- The React and Vite communities for excellent tools and documentation
