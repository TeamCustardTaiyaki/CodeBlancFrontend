import { useState, useEffect } from 'react';
import { Question } from '../../../types/api';

interface QuestionDisplayProps {
  question: Question;
  onAnswerSelected: (questionId: string, answerId: string) => void;
  selectedAnswer: string | null;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, onAnswerSelected, selectedAnswer }) => {
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState<string | null>(selectedAnswer);

  useEffect(() => {
    setLocalSelectedAnswer(selectedAnswer);
  }, [selectedAnswer]);

  if (!question) {
    return <div>問題を読み込み中...</div>;
  }

  const handleAnswerSelect = (answerId: string) => {
    setLocalSelectedAnswer(answerId);
    onAnswerSelected(question.id, answerId);
  };

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