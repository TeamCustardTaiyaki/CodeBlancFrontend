import { useNavigate } from 'react-router-dom'

import { Button } from "../../common/Button";
import "./Box.scss";
import introduction from "../../../assets/images/24802866_m.png";

/**
 * アプリケーションの導入画面を表示するコンポーネント
 * ヒーローイメージと開始ボタンを含む
 */
export const Box = () => {
  const navigate = useNavigate()

  /**
   * 「始める」ボタンクリック時のハンドラー
   * ダッシュボード画面に遷移
   */
  const handleClick = () => {
    navigate('/dashboard')
  };

  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          {/* ヒーロー画像 */}
          <img
            className="introduction"
            alt="introduction"
            src={introduction}
          />
          {/* 開始ボタン */}
          <Button
            className="button-instance"
            labelText="始める"
            labelTextClassName="design-component-instance-node"
            showIcon={false}
            style="filled"
            onClick={handleClick}
          />
          {/* メインタイトル */}
          <div className="text-wrapper">Learn Multiple Languages</div>
          {/* サブタイトル */}
          <div className="div">
            選んで学ぶ、確実に身につく。 穴埋め式で広がるプログラミングの世界。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;