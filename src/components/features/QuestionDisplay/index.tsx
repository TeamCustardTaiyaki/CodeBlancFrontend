import { useState, useEffect } from 'react';
import { Question } from '../../../types/api';

interface QuestionDisplayProps {
  question: Question;
  onAnswerSelected: (questionId: string, answerId: string) => void;
  selectedAnswer: string | null;
}

/**
 * QuestionDisplayコンポーネント
 * 問題の表示と解答の選択を行う
 * 
 * @param {QuestionDisplayProps} props - コンポーネントのプロパティ
 * @returns {JSX.Element} - 問題表示コンポーネント
 */
export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, onAnswerSelected, selectedAnswer }) => {
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState<string | null>(selectedAnswer);

  // selectedAnswerが変更されたときにlocalSelectedAnswerを更新
  useEffect(() => {
    setLocalSelectedAnswer(selectedAnswer);
  }, [selectedAnswer]);

  // questionが存在しない場合のローディング表示
  if (!question) {
    return <div>問題を読み込み中...</div>;
  }

  // 解答が選択されたときのハンドラー
  const handleAnswerSelect = (answerId: string) => {
    setLocalSelectedAnswer(answerId);
    onAnswerSelected(question.id, answerId);
  };

  // 選択肢が存在しない場合のデフォルト値を設定
  const choices = question.choices || [];

  return (
    <>
      <div className="problem-area">
        <div className="pseudo-code-box">
          <div className="pseudo-code-content">
            {question.pseudoCode}
          </div>
        </div>
        <div className="source-code-box">
          <div className="code-content">
            <pre>
              <code>{question.code}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="answer-area">
        {choices.map((choice) => (
          <div 
            key={choice.id} 
            className={`answer-box ${localSelectedAnswer === choice.id ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(choice.id)}
          >
            <input
              type="radio"
              name="answer"
              value={choice.id}
              checked={localSelectedAnswer === choice.id}
              onChange={() => handleAnswerSelect(choice.id)}
            />
            <span className="radio-custom"></span>
            <p>{choice.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionDisplay;