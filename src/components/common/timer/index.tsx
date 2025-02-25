import { useEffect } from 'react';
import { useTimer } from '../../../hooks/useTimer';
import { GAME_CONSTANTS } from '../../../constants/gameConstants';
import './Timer.scss';

interface TimerProps {
  onTimeUp?: () => void;
}

/**
 * シンプルなタイマー表示コンポーネント
 * 灰色の背景を持つ丸みを帯びたコンテナにタイマーを表示します
 * 
 * @param props - タイマーのプロパティ
 * @returns Reactコンポーネント
 */
const Timer: React.FC<TimerProps> = ({ onTimeUp }) => {
  const { formattedTime, startTimer, stopTimer } = useTimer(GAME_CONSTANTS.TIME_LIMIT, onTimeUp);

  // コンポーネントマウント時にタイマー開始
  useEffect(() => {
    startTimer();
    // デバッグ用のグローバル関数を定義
    (window as Window & typeof globalThis & { debugEndTimer?: () => void }).debugEndTimer = () => {
      console.log('Timer stopped by debug command');
      stopTimer();
      if (onTimeUp) {
        onTimeUp();
      }
    };

    // クリーンアップ関数
    return () => {
      delete (window as Window & typeof globalThis & { debugEndTimer?: () => void }).debugEndTimer;
    };
  }, [startTimer, stopTimer, onTimeUp]);

  return (
    <div className="timer">
      {/* タイマーの時間表示部分 */}
      <div className="timer-display">{formattedTime}</div>

    </div>
  );
};

export default Timer;