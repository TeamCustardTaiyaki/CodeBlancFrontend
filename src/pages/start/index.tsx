import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/common/Button";
// import Timer from '../../components/common/timer';
import RuleDescription from '../../components/features/RuleDescription/RuleDescription';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './Start.scss';

/**
 * 開始ページコンポーネント
 * ゲームルールの説明と開始/戻るボタンを表示
 */
const StartPage = () => {
  const navigate = useNavigate();

  // コンテンツ領域へのスクロール処理
  useEffect(() => {
    const element = document.getElementById('start-content');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  /**
   * 「スタート」ボタンのクリックハンドラー
   */
  const handleStart = () => {
    navigate('/question');
  };

  /**
   * 「戻る」ボタンのクリックハンドラー
   */
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="start-page">
      <Header />
      <div id="start-content" className="content">
        <div className="title-section">
          <h1>What does this code do?&nbsp;&nbsp;-Sample-</h1>
          {/* <Timer /> */}
        </div>

        <div className="rule-section">
          <RuleDescription />
        </div>

        <div className="button-group">
          <Button
            labelText="戻る"
            className="back-button"
            style="filled"
            onClick={handleBack}
          />
          <Button
            labelText="スタート"
            className="start-button"
            style="filled"
            onClick={handleStart}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartPage; 