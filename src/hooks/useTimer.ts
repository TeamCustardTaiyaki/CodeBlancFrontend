import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_CONSTANTS, ROUTES } from '../constants/gameConstants';

/**
 * タイマー機能を提供するカスタムフック
 * 
 * @param initialTime - 初期時間（秒）
 * @param onTimeUp - 時間切れ時のコールバック関数
 * @returns タイマーの状態と制御関数
 */
export const useTimer = (initialTime: number = GAME_CONSTANTS.TIME_LIMIT, onTimeUp?: () => void) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  // タイマーを開始
  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  // タイマーを停止
  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  // タイマーをリセット
  const resetTimer = useCallback(() => {
    setTimeLeft(initialTime);
    setIsRunning(false);
  }, [initialTime]);

  // 時間を分:秒形式にフォーマット
  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(interval!);
            setIsRunning(false);
            // タイマー終了時の処理を確実に実行
            if (onTimeUp) {
              onTimeUp();
            } else {
              navigate(ROUTES.RESULT, { state: { timeUp: true } });
            }
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, timeLeft, navigate, onTimeUp]);

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isRunning,
    startTimer,
    stopTimer,
    resetTimer
  };
};