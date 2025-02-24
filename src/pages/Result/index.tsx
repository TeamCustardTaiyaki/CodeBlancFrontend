import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '../../components/common/Button';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

import './Result.scss';

/**
 * 結果表示ページコンポーネント
 * 問題の解答結果、スコア、統計情報を表示
 */
const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 結果コンテナへのスクロール処理
  useEffect(() => {
    if (!location.hash) {
      const element = document.getElementById('result-container');
      element?.scrollIntoView({ behavior: 'auto' });
    }
  }, [location]);

  /**
   * 「もう一度プレイ」ボタンのクリックハンドラー
   */
  const handleRetry = () => {
    navigate('/start');
  };

  /**
   * 「ダッシュボードへ」ボタンのクリックハンドラー
   */
  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Header />
      <div className="result-page">
        <div id="result-container" className="result-container">
          <h1 className="result-title">結果</h1>
          
          <div className="score-section">
            <div className="score-item">
              <h2>総合スコア</h2>
              <div className="score">85</div>
            </div>
            
            <div className="stats-container">
              <div className="stat-item">
                <h3>解答数</h3>
                <div className="stat-value">10問</div>
              </div>
              <div className="stat-item">
                <h3>正答率</h3>
                <div className="stat-value">85%</div>
              </div>
            </div>
          </div>

          <div className="answers-section">
            <h2>解答詳細</h2>
            <div className="answers-grid">
              {[...Array(10)].map((_, index) => (
                <div key={index} className={`answer-item ${index % 2 === 0 ? 'correct' : 'incorrect'}`}>
                  <span className="question-number">Q{index + 1}</span>
                  <span className="result-icon">{index % 2 === 0 ? '○' : '×'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="buttons-container">
            <Button
              labelText="もう一度プレイ"
              onClick={handleRetry}
              style="filled"
              showIcon
            />
            <Button
              labelText="ダッシュボードへ"
              onClick={handleBackToDashboard}
              style="outlined"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultPage; 