export type Language = 'es' | 'en' | 'ca';

export interface LocalizedString {
  es: string;
  en: string;
  ca: string;
}

export interface LocalizedArray {
  es: string[];
  en: string[];
  ca: string[];
}

export interface Question {
  id: string;
  topicId: string;
  question: LocalizedString;
  options: LocalizedArray;
  correctIndex: number;
  explanation: LocalizedString;
  imageUrl?: string;
}

export interface Topic {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  questionCount: number;
}

export interface ExamResult {
  total: number;
  score: number;
  passed: boolean;
  timeSpentSeconds: number;
  wrongQuestionIds: string[];
}