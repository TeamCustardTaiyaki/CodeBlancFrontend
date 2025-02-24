import React from 'react';
import './PricingCardWrapper.scss';

/**
 * 料金プランカードのラッパーコンポーネントのプロパティ型定義
 */
interface PricingCardWrapperProps {
  /** ラッパー要素に適用する追加のクラス名 */
  className?: string;
  /** デスクトップ表示用カードに適用する追加のクラス名 */
  pricingCardDeviceDesktopClassName?: string;
}

/**
 * 料金プランを表示するためのカードラッパーコンポーネント
 * 白背景、角丸の枠を持つコンテナを提供します
 * 
 * @param props - コンポーネントのプロパティ
 * @returns Reactコンポーネント
 */
export const PricingCardWrapper: React.FC<PricingCardWrapperProps> = ({
  className,
  pricingCardDeviceDesktopClassName,
}) => {
  return (
    <div className={`pricing-card-wrapper ${className || ''}`}>
      {/* デスクトップ表示用のカードコンテナ */}
      <div className={`pricing-card-device-desktop ${pricingCardDeviceDesktopClassName || ''}`}>
        {/* 背景と枠を提供するオーバーレイグループ */}
        <div className="overlap-group">
          <div className="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default PricingCardWrapper;