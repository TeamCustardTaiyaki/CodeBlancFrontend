import React from 'react';
import './LoadingSpinner.scss';

/**
 * ローディングスピナーコンポーネント
 * 読み込み中のアニメーションを表示
 * 
 * @returns Reactコンポーネント
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;