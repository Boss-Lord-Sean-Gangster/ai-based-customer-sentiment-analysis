export interface SentimentData {
  id: string;
  text: string;
  timestamp: number;
  overallSentiment: string;
  overallScore: number;
  positivePercentage: number;
  neutralPercentage: number;
  negativePercentage: number;
  positiveAspects: string[];
  negativeAspects: string[];
  summary: string;
}