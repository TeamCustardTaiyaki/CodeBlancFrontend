import { useState, useEffect } from 'react';
import { Question } from '../types/api';
import { fetchNextQuestion } from '../utils/api';  //サーバーから問題を取得するインポート

export const useQuestions = (initialLevel: number = 1) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [level, setLevel] = useState<number>(initialLevel);
  const [allQuestionsCompleted] = useState<boolean>(false);

  const loadNextQuestion = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchNextQuestion(level.toString());

      // 取得したデータが正しい形式であるかを確認
      if (!fetchedData.choices || !Array.isArray(fetchedData.choices)) {
        throw new Error('Invalid question data');
      }

      setQuestions(prevQuestions => [...prevQuestions, fetchedData]);
      setError(null);
    } catch (err) {
      console.error('問題の取得に失敗しました。', err);
      setError('問題の取得に失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNextQuestion();
  }, [level]);

  return { questions, loading, error, loadNextQuestion, setLevel, allQuestionsCompleted };
};