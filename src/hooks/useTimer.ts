import { useState, useEffect, useCallback } from 'react';
import { GAME_CONSTANTS } from '../constants/gameConstants';

/**
 * タイマー機能を提供するカスタムフック
 * ゲームの制限時間を管理し、時間切れ時のコールバックを実行
 * 
 * @param onTimeUp - タイマーが0になった時に実行するコールバック関数
 * @returns タイマーの状態と制御関数
 */
export const useTimer = (onTimeUp: () => void) => {
  /** 残り時間（秒）の状態 */
  const [timeRemaining, setTimeRemaining] = useState(GAME_CONSTANTS.TIME_LIMIT);
  /** タイマーが動作中かどうかの状態 */
  const [isRunning, setIsRunning] = useState(false);

  /**
   * タイマーをスタート
   */
  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  /**
   * タイマーを一時停止
   */
  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  /**
   * タイマーをリセット
   */
  const resetTimer = useCallback(() => {
    setTimeRemaining(GAME_CONSTANTS.TIME_LIMIT);
    setIsRunning(false);
  }, []);

  // タイマーのカウントダウン処理
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeRemaining, onTimeUp]);

  return {
    timeRemaining,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer
  };
}; 