import React from 'react';
import './Button.scss';

/**
 * ボタンコンポーネントのプロパティの型定義
 */
interface ButtonProps {
  /** ボタンに表示するテキスト */
  labelText: string;
  /** ボタンテキストに適用する追加のクラス名 */
  labelTextClassName?: string;
  /** ボタン要素に適用する追加のクラス名 */
  className?: string;
  /** 矢印アイコンを表示するかどうか */
  showIcon?: boolean;
  /** ボタンのスタイル - 'filled'（塗りつぶし）または'outlined'（アウトライン） */
  style?: 'filled' | 'outlined';
  /** クリック時のコールバック関数 */
  onClick?: () => void;
  /** ボタンを無効化するかどうか */
  disabled?: boolean;
}

/**
 * カスタマイズ可能なボタンコンポーネント
 * 
 * @param props - ボタンのプロパティ
 * @returns Reactボタンコンポーネント
 */
export const Button: React.FC<ButtonProps> = ({
  labelText,
  labelTextClassName,
  className,
  showIcon = false,
  style = 'filled',
  onClick,
  disabled = false,
}) => {
  return (
    <button 
      // クラス名を結合：基本スタイル、バリアント、カスタムクラス、無効化状態
      className={`button ${style} ${className || ''} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* ボタンテキスト */}
      <span className={`button-text ${labelTextClassName || ''}`}>
        {labelText}
      </span>
      {/* オプションの矢印アイコン */}
      {showIcon && <span className="button-icon">→</span>}
    </button>
  );
};

export default Button;