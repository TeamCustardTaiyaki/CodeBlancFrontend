import axios from 'axios';
import { Question } from '../types/api';

// APIクライアントの設定
const apiClient = axios.create({
  baseURL: 'https://codeblanc-server.kln-develop.workers.dev/v1', // 本番環境のURLに変更する
  // baseURL: '/v1', // 本番環境のURLに変更する
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 新しい問題を取得する関数
export const fetchNextQuestion = async (level: string): Promise<Question> => {
  try {
    const response = await apiClient.get<Question>('/quiz/next', {
      params: { level }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch next question:', error);
    throw error;
  }
};