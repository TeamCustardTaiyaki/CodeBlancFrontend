// import React from 'react';
import './Timer.scss';

/**
 * シンプルなタイマー表示コンポーネント
 * 灰色の背景を持つ丸みを帯びたコンテナにタイマーを表示します
 * 
 * @returns Reactコンポーネント
 */
const Timer = () => {
  return (
    <div className="timer">
      {/* タイマーの時間表示部分 */}
      <div className="timer-display">00:00</div>
    </div>
  );
};

export default Timer; 