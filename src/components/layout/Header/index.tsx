import { useState } from 'react';
import codeBlanc from '../../../assets/images/code-blanc.png';
import logo from '../../../assets/images/logo.png';
import { HamburgerMenu } from '../../common/HamburgerMenu';
import './Header.scss';

/**
 * アプリケーションのヘッダーコンポーネント
 * ロゴ、サイト名、ハンバーガーメニューを含む
 */
export const Header = () => {
  // メニューの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false);

  /**
   * ハンバーガーメニューの開閉を切り替える
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      {/* サイト名とロゴのリンク */}
      <a href="/"><img className="code-blanc" alt="Code blanc" src={codeBlanc} /></a>
      <a href="/"><img className="logo" alt="logo" src={logo} /></a>
      
      {/* ハンバーガーメニューボタン */}
      <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* ハンバーガーメニューの内容 */}
      <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
    </div>
  );
};

export default Header;