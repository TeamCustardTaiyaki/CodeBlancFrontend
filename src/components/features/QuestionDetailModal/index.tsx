import React from 'react';
import { QuestionResult } from '../../../types/api';
import './QuestionDetail.scss';

interface QuestionDetailModalProps {
  question: QuestionResult;
  onClose: () => void;
}

/**
 * QuestionDetailModalコンポーネント
 * 問題の詳細を表示するモーダル
 * 
 * @param {QuestionDetailModalProps} props - コンポーネントのプロパティ
 * @returns {JSX.Element} - モーダルコンポーネント
 */
const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({ question, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>問題詳細</h2>
        <div className="question-detail">
          <p><strong>問題ID:</strong> {question.questionId}</p>
          <p><strong>正解:</strong> {question.correct ? '〇' : '×'}</p>
          <p><strong>ポイント:</strong> {question.points}</p>
          <p><strong>ユーザーの解答:</strong> {question.userAnswer}</p>
          <p><strong>疑似言語:</strong></p>
          <pre>{question.pseudoCode}</pre>
          <p><strong>コード:</strong></p>
          <pre>{question.code}</pre>
          <p><strong>選んだ選択肢:</strong> {question.selectedChoice}</p>
          {!question.correct && (
            <p><strong>正しい選択肢:</strong> {question.correctChoice}</p>
          )}
        </div>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
};

export default QuestionDetailModal;