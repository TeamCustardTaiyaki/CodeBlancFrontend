/**
 * ゲームの基本設定に関する定数
 */
export const GAME_CONSTANTS = {
  /** ゲームの制限時間（秒） - 5分 */
  TIME_LIMIT: 300,
  
  /** 1ゲームあたりの問題数 */
  QUESTIONS_PER_GAME: 10,
  
  /** 
   * 難易度レベルの定義
   * - BEGINNER: 初級レベル
   * - INTERMEDIATE: 中級レベル（準備中）
   * - ADVANCED: 上級レベル（準備中）
   */
  DIFFICULTY_LEVELS: {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
  }
};

/**
 * アプリケーションのルーティング定義
 * 各画面のパスを管理
 */
export const ROUTES = {
  /** トップページ */
  HOME: '/',
  
  /** ダッシュボード画面 */
  DASHBOARD: '/dashboard',
  
  /** ゲーム開始前の説明画面 */
  GAME_START: '/start',
  
  /** 問題画面 */
  GAME: '/question',
  
  /** 結果表示画面 */
  RESULT: '/result'
}; 