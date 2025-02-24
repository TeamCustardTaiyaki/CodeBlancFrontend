import React from 'react';
import './DivWrapper.scss';

/**
 * DivWrapperコンポーネントのプロパティの型定義
 */
interface DivWrapperProps {
  /** 表示するテキストコンテンツ */
  text: string;
  /** コンポーネントに適用する追加のクラス名 */
  className?: string;
}

/**
 * テキストを表示するためのラッパーコンポーネント
 * 白背景、角丸、シャドウ付きのコンテナを提供します
 * 
 * @param props - コンポーネントのプロパティ
 * @returns Reactコンポーネント
 */
export const DivWrapper: React.FC<DivWrapperProps> = ({ text, className }) => {
  return (
    <div className={`div-wrapper ${className || ''}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

export default DivWrapper; 