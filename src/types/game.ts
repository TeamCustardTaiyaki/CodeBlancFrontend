/**
 * ゲームに関する型定義
 */

/**
 * 問題データの型定義
 */
export interface Question {
  /** 問題のユニークID */
  id: number;
  /** 問題文 */
  text: string;
  /** ソースコード */
  code: string;
  /** 疑似コード */
  pseudoCode: string;
  /** 選択肢の配列 */
  choices: string[];
  /** 正解の選択肢 */
  correctAnswer: string;
}

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