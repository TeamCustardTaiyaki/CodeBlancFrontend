import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { FaGithub } from 'react-icons/fa'
import './AboutTaiyaki.scss';

/**
 * 開発チーム「taiyaki custard」についてのページコンポーネント
 * チームメンバーやプロジェクトの概要を表示
 */
const AboutTeamPage = () => {
  return (
    <div className="about-team-page">
      <Header />
      <div className="content">
        <h1>開発チーム「taiyaki custard」について</h1>
        
        <div className="team-description">
          <a href="https://github.com/TeamCustardTaiyaki" 
             className="github-team-link"
             target="_blank" 
             rel="noopener noreferrer">
            <FaGithub />
            <span>TeamCustardTaiyaki</span>
          </a>
          <p>Development team made up of NCC students</p>
        </div>

        <div className="team-members">
          <div className="team-member-card">
            <img src="/src/assets/images/koike.png" alt="小池歩" className="member-photo" />
            <div className="member-info">
              <h2>小池歩</h2>
              <p>バックエンド</p>
              <a href="https://github.com/SIGMA-L" 
                 className="github-link"
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaGithub />
                <span>@SIGMA-L</span>
              </a>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/src/assets/images/gonpei.png" alt="権瓶元輝" className="member-photo" />
            <div className="member-info">
              <h2>権瓶元輝</h2>
              <p>フロントエンド</p>
              <a href="https://github.com/iroha999" 
                 className="github-link"
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaGithub />
                <span>@iroha999</span>
              </a>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/src/assets/images/sakaue.png" alt="坂上舜寧" className="member-photo" />
            <div className="member-info">
              <h2>坂上舜寧</h2>
              <p>画面設計、ドキュメント作成</p>
              <a href="https://github.com/Toshikakeki" 
                 className="github-link"
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaGithub />
                <span>@Toshikakeki</span>
              </a>
            </div>
          </div>

          <div className="team-member-card">
            <img src="/src/assets/images/sakagami.png" alt="坂上嘉浩" className="member-photo" />
            <div className="member-info">
              <h2>坂上嘉浩</h2>
              <p>画面設計、ドキュメント作成</p>
              <a href="https://github.com/haosui8041" 
                 className="github-link"
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaGithub />
                <span>@haosui8041</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutTeamPage;