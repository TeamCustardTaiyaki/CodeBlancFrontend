// 選択肢の型定義
export interface Choice {
  id: string;
  text: string;
}

// 問題データの型定義
export interface Question {
  id: string;
  code: string;
  pseudoCode: string;
  choices: Choice[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// APIレスポンスの型定義
export interface QuestionsResponse {
  questions: Question[];
  total: number;
  timeLimit: number;
}

// APIエラーレスポンスの型定義
export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: {
      field: string;
      reason: string;
    };
  };
}

export interface Answer {
  questionId: string;
  answerId: string;
}

// export interface QuestionResult {
//   questionId: string;
//   correct: boolean;
//   timeSpent: number;
//   points: number;
//   userAnswer: string;
// }

export interface QuestionResult {
  questionId: string;
  correct: boolean;
  points: number;
  userAnswer: string;
  pseudoCode: string;
  code: string;
  selectedChoice: string;
}

export interface SubmissionResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  timeSpent: number;
  questionResults: QuestionResult[];
} 