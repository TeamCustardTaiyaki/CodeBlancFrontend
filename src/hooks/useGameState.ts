import { useState } from 'react';
import { GameState } from '../types/game';

/**
 * ゲームの状態を管理するカスタムフック
 * 時間、問題インデックス、回答履歴、スコアを管理
 * 
 * @returns {Object} ゲーム状態と更新関数を含むオブジェクト
 */
export const useGameState = () => {
  // ゲームの初期状態を設定
  const [gameState, setGameState] = useState<GameState>({
    /** 残り時間（秒） - 初期値5分 */
    timeRemaining: 300,
    /** 現在の問題インデックス */
    currentQuestionIndex: 0,
    /** ユーザーの回答履歴 */
    answers: [],
    /** 現在のスコア */
    score: 0
  });

  /**
   * ユーザーの回答を記録し、状態を更新
   * @param questionId - 問題のID
   * @param answer - ユーザーの回答
   * @param isCorrect - 回答が正解かどうか
   */
  const updateAnswer = (questionId: number, answer: string, isCorrect: boolean) => {
    setGameState(prev => ({
      ...prev,
      answers: [...prev.answers, { questionId, userAnswer: answer, isCorrect }]
    }));
  };

  /**
   * 残り時間を更新
   * @param newTime - 新しい残り時間（秒）
   */
  const updateTimeRemaining = (newTime: number) => {
    setGameState(prev => ({
      ...prev,
      timeRemaining: newTime
    }));
  };

  /**
   * 次の問題に進む
   */
  const moveToNextQuestion = () => {
    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1
    }));
  };

  /**
   * スコアを更新
   * @param points - 追加するポイント
   */
  const updateScore = (points: number) => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + points
    }));
  };

  return {
    gameState,
    updateAnswer,
    updateTimeRemaining,
    moveToNextQuestion,
    updateScore
  };
}; 