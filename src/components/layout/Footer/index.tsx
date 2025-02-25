import './Footer.scss';

/**
 * アプリケーションのフッターコンポーネント
 * サイト情報、お問い合わせ、リンク集を含む
 */
export const Footer = () => {
  return (
    <footer className="footer">
      {/* フッターのメインコンテンツ */}
      <div className="footer-content">
        {/* サイト情報セクション */}
        <div className="footer-section">
          <h3>Code Blanc</h3>
          <p>プログラミング学習をもっと楽しく、効果的に。</p>
        </div>
        
        {/* お問い合わせセクション */}
        <div className="footer-section">
          <h4>お問い合わせ</h4>
          <ul>
            <li>dev.taiyaki@gmail.com</li>
          </ul>
        </div>
        
        {/* リンク集セクション */}
        <div className="footer-section">
          <h4>リンク</h4>
          <ul>
            <li><a href="#">利用規約</a></li>
            <li><a href="#">プライバシーポリシー</a></li>
            <li><a href="#">ヘルプ</a></li>
          </ul>
        </div>
      </div>
      
      {/* コピーライト */}
      <div className="footer-bottom">
        <p>&copy; 2025 Code Blanc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
