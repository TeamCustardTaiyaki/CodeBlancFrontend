import React from 'react';
import { Link } from 'react-router-dom';

// アイコンのインポート
import Home from '../../../assets/images/Home.png';
import Users from '../../../assets/images/Users.png';
import taiyakiIcon from '../../../assets/images/taiyaki.png';
import helpIcon from '../../../assets/images/Help.png';
import Dashboard from '../../../assets/images/dashboard.png';

import './HamburgerMenu.scss';

/**
 * ハンバーガーメニューのプロパティの型定義
 */
interface HamburgerMenuProps {
  /** メニューが開いているかどうかの状態 */
  isOpen: boolean;
  /** メニューの開閉を制御するクリックハンドラー */
  onClick: () => void;
}

/**
 * サイドナビゲーションとして機能するハンバーガーメニューコンポーネント
 * 各ページへのリンクとアイコンを表示します
 * 
 * @param props - メニューの状態と制御用のプロパティ
 * @returns Reactコンポーネント
 */
export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      {/* <button className="close-button" onClick={onClick}>
        ×
      </button> */}
      <nav className="menu-items">
        <Link to="/">
          <div className="menu-item">
            <img src={Home} alt="Home" className="icon" />
            <div className="text-content">
              <div className="main-text">トップ</div>
              <div className="sub-text">Top</div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard">
          <div className="menu-item">
            <img src={Dashboard} alt="Dashboard" className="icon" />
          <div className="text-content">
            <div className="main-text">ダッシュボード</div>
            <div className="sub-text">Dashboard</div>
          </div>
        </div>
        </Link>
        
        <div className="menu-item disabled">
          <img src={Users} alt="Users" className="icon" />
          <div className="text-content">
            <div className="main-text">アカウント</div>
            <div className="sub-text">Account</div>
          </div>
        </div>
        
        <div className="menu-item">
          <img src={taiyakiIcon} alt="Taiyaki" className="icon" />
          <div className="text-content">
            <div className="main-text">たい焼きについて</div>
            <div className="sub-text">About</div>
          </div>
        </div>
        
        <div className="menu-item">
          <img src={helpIcon} alt="Help" className="icon" />
          <div className="text-content">
            <div className="main-text">ヘルプ</div>
            <div className="sub-text">Help</div>
          </div>
        </div>
      </nav>
    </div>
  );
};
