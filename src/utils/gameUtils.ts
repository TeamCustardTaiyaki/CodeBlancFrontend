/**
 * ゲーム関連のユーティリティ関数
 */

/**
 * スコアを計算する
 * 正解数と総問題数から100点満点のスコアを算出
 * 
 * @param correctAnswers - 正解数
 * @param totalQuestions - 総問題数
 * @returns 100点満点のスコア（整数）
 */
export const calculateScore = (correctAnswers: number, totalQuestions: number): number => {
  return Math.round((correctAnswers / totalQuestions) * 100);
};

/**
 * 秒数を「MM:SS」形式の文字列に変換
 * 
 * @param seconds - 秒数
 * @returns 「MM:SS」形式の時間文字列（例: "05:30"）
 */
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}; 