import { useState } from 'react';
import { Answer, SubmissionResult, QuestionResult, Question } from '../types/api';
import { fetchNextQuestion } from '../utils/api'; // API関数をインポート

export const useAnswerSubmission = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  // 解答を記録
  const recordAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => {
      // 既存の解答を更新または新規追加
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { questionId, answerId };
        return updated;
      }
      return [...prev, { questionId, answerId }];
    });
  };

  // 全解答を採点
  const submitAllAnswers = async (): Promise<SubmissionResult> => {
    const results: QuestionResult[] = answers.map(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      const isCorrect = question?.correctAnswer === answer.answerId;
      return {
        questionId: answer.questionId,
        correct: isCorrect || false,
        points: isCorrect ? 100 : 0,
        userAnswer: answer.answerId,
        pseudoCode: question?.pseudoCode || '',
        code: question?.code || '',
        selectedChoice: question?.choices.find(choice => choice.id === answer.answerId)?.text || ''
      };
    });

    const correctCount = results.filter(r => r.correct).length;
    const totalPoints = results.reduce((acc, curr) => acc + curr.points, 0);
    const timeSpent = 0; // 仮の値として0を設定

    const submissionResult: SubmissionResult = {
      totalQuestions: answers.length,
      correctAnswers: correctCount,
      score: totalPoints,
      timeSpent,
      questionResults: results
    };

    setResult(submissionResult);
    return submissionResult;
  };

  // 新しい問題を取得
  const loadNextQuestion = async (level: string) => {
    try {
      const newQuestion = await fetchNextQuestion(level);
      setQuestions(prev => [...prev, newQuestion]);
    } catch (error) {
      console.error('Failed to load next question:', error);
    }
  };

  return { answers, result, recordAnswer, submitAllAnswers, loadNextQuestion, questions };
};