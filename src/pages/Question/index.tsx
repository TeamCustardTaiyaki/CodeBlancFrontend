import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Timer from '../../components/common/timer';
import Button from '../../components/common/Button';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './QuestionPage.scss';
import { QuestionDisplay } from '../../components/features/QuestionDisplay';
import { useAnswerSubmission } from '../../hooks/useAnswerSubmission';
import { ROUTES } from '../../constants/gameConstants';
import LoadingSpinner from '../../components/common/LoadingSpinner';

/**
 * 問題ページコンポーネント
 * プログラミング問題の表示、解答入力、タイマー管理を行う
 */
const QuestionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recordAnswer, submitAllAnswers, loadNextQuestion, questions } = useAnswerSubmission();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const isFromStart = location.state?.fromStart;
  const [loading, setLoading] = useState<boolean>(true);

  // 現在の問題を取得
  const currentQuestion = questions[currentQuestionIndex];

  // ページ読み込み時のスクロール処理
  useEffect(() => {
    const element = document.getElementById('question-content');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    const loadQuestion = async () => {
      setLoading(true);
      await loadNextQuestion('1'); // 初期レベルを設定
      setLoading(false);
    };
    loadQuestion();
  }, []);

  /**
   * 「戻る」ボタンのクリックハンドラー
   */
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    } else {
      navigate(-1);
    }
  };

  /**
   * 解答選択時のハンドラー
   */
  const handleAnswerSelected = (questionId: string, answerId: string) => {
    recordAnswer(questionId, answerId);
    setSelectedAnswer(answerId);
  };

  // タイムアップ時の処理
  const handleTimeUp = async () => {
    try {
      const result = await submitAllAnswers();
      // 結果をクエリパラメータとして渡す
      navigate(ROUTES.RESULT, { state: { result } });
    } catch (error) {
      console.error('Failed to submit answers:', error);
      // エラー処理
    }
  };

  // 「次へ」ボタンのクリックハンドラーを修正
  const handleNext = async () => {
    if (selectedAnswer !== null) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        try {
          await loadNextQuestion('1'); // 次の問題を取得
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null);
        } catch (error) {
          console.log(error);
          handleTimeUp(); // すべての問題を解いた場合はタイムアップ処理を呼び出す
        }
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!currentQuestion) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="question-page">
      <Header />
      <div className="content">
        {/* 問題タイトルとタイマー */}
        <div className="title-section">
          <h1>What does this code do?</h1>
          <Timer onTimeUp={handleTimeUp} />
        </div>
        
        <div id="question-content" className="problem-container">
          <QuestionDisplay question={currentQuestion} onAnswerSelected={handleAnswerSelected} selectedAnswer={selectedAnswer} />
        </div>

        <div className="button-group">
          <Button 
            labelText="戻る"
            style="filled"
            onClick={handleBack}
            disabled={isFromStart && currentQuestionIndex === 0} // Start画面からの場合と最初の問題の場合は無効化
          />
          <Button 
            labelText="次へ"
            style="filled"
            onClick={handleNext}
            disabled={!selectedAnswer} // 選択されていない場合は無効化
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionPage;