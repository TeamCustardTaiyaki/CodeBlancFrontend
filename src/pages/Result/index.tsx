import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { SubmissionResult, QuestionResult } from '../../types/api';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './Result.scss';
import QuestionDetailModal from '../../components/features/QuestionDetailModal';

/**
 * 結果表示ページコンポーネント
 * 問題の解答結果、スコア、統計情報を表示
 */
const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result: SubmissionResult = location.state?.result;

  const [selectedQuestion, setSelectedQuestion] = useState<QuestionResult | null>(null);

  // ページ読み込み時にスクロール位置をトップに設定
  useEffect(() => {
    const element = document.getElementById('result-content');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  // 結果が存在しない場合はダッシュボードにリダイレクト
  if (!result) {
    navigate('/dashboard');
    return null;
  }

  // 質問がクリックされたときのハンドラー
  const handleQuestionClick = (question: QuestionResult) => {
    setSelectedQuestion(question);
  };

  // モーダルを閉じるハンドラー
  const handleCloseModal = () => {
    setSelectedQuestion(null);
  };

  return (
    <div className="result-page">
      <Header />
      <div id="result-content" className="result-container">
        <h1 className="result-title">結果発表</h1>
        <div className="score-section">
          <div className="score-item">
            <h2>総合スコア</h2>
            <p className="score">{result.score}点</p>
          </div>
          <div className="score-subsection">
            <div className="score-item">
              <h2>解答数</h2>
              <p className="score">{result.totalQuestions}問</p>
            </div>
            <div className="score-item">
              <h2>正答率</h2>
              <p className="percentage">
                {Math.round((result.correctAnswers / result.totalQuestions) * 100)}%
              </p>
            </div>
          </div>
        </div>

        <div className="answers-section">
          <h2>解答履歴</h2>
          <div className="answers-grid">
            {result.questionResults.map((qResult: QuestionResult, index: number) => (
              <div 
                key={qResult.questionId} 
                className={`answer-item ${qResult.correct ? 'correct' : 'incorrect'}`}
                onClick={() => handleQuestionClick(qResult)}
              >
                <span className="question-number">Q{index + 1}</span>
                <span className="result-icon">
                  {qResult.correct ? '〇' : '×'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="buttons-container">
          <Button
            labelText="もう一度プレイ"
            onClick={() => navigate('/start')}
            style="filled"
          />
          <Button
            labelText="ダッシュボードへ"
            onClick={() => navigate('/dashboard')}
            style="outlined"
          />
        </div>
      </div>
      <Footer />
      {selectedQuestion && (
        <QuestionDetailModal question={selectedQuestion} onClose={handleCloseModal} />
      )}
    </div>
  );
};

/**
 * ResultPageコンポーネントをエクスポート
 */
export default ResultPage;