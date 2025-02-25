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
  const { formattedTime, startTimer } = useTimer(GAME_CONSTANTS.TIME_LIMIT, onTimeUp);

  // コンポーネントマウント時にタイマー開始
  useEffect(() => {
    startTimer();
  }, [startTimer]);


  return (
    <div className="timer">
      {/* タイマーの時間表示部分 */}
      <div className="timer-display">{formattedTime}</div>

    </div>
  );
};

export default Timer;