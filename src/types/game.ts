/**
 * ゲームに関する型定義
 */



/**
 * ゲームの状態を表す型定義
 */
export interface GameState {
  /** 残り時間（秒） */
  timeRemaining: number;
  /** 現在の問題インデックス */
  currentQuestionIndex: number;
  /** ユーザーの回答履歴 */
  answers: {
    /** 問題のID */
    questionId: number;
    /** ユーザーの回答 */
    userAnswer: string;
    /** 正解かどうか */
    isCorrect: boolean;
  }[];
  /** 現在のスコア */
  score: number;
}

/**
 * ゲーム結果の型定義
 */
export interface GameResult {
  /** 全問題数 */
  totalQuestions: number;
  /** 正解数 */
  correctAnswers: number;
  /** 最終スコア */
  score: number;
  /** 正答率（%） */
  accuracy: number;
  /** 各問題の正誤履歴 */
  answers: {
    /** 問題のID */
    questionId: number;
    /** 正解かどうか */
    isCorrect: boolean;
  }[];
} 