import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../../components/common/timer';
import Button from '../../components/common/Button';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import './QuestionPage.scss';

/**
 * 問題ページコンポーネント
 * プログラミング問題の表示、解答入力、タイマー管理を行う
 */
const QuestionPage = () => {
  const navigate = useNavigate();
  // 選択された解答のインデックスを管理
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // ページ読み込み時のスクロール処理
  useEffect(() => {
    const element = document.getElementById('question-content');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  /**
   * 「戻る」ボタンのクリックハンドラー
   */
  const handleBack = () => {
    navigate(-1);
  };

  /**
   * 解答選択時のハンドラー
   */
  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="question-page">
      <Header />
      <div className="content">
        {/* 問題タイトルとタイマー */}
        <div className="title-section">
          <h1>What does this code do?</h1>
          <Timer />
        </div>
        
        <div id="question-content" className="problem-container">
          <div className="problem-area">
            {/* 左側：疑似言語 */}
            <div className="pseudo-code-box">
              <div className="pseudo-code-content">
                <p>1. 配列の要素を順番に処理</p>
                <p>2. 各要素に対して：</p>
                <p>   - 条件をチェック</p>
                <p>   - 条件に合致する場合、処理を実行</p>
                <p>3. 結果を返す</p>
              </div>
            </div>

            {/* 右側：ソースコード */}
            <div className="source-code-box">
              <div className="code-content">
                <pre>
                  <code>
                    {`public class Main {
                      public static void main(String[] args) {
                        int[] arr = {1, 2, 3, 4, 5};
                        int max = arr[0];

                        for (int i = 0; i < arr.length; i++) {
                          if (arr[i] > max) {
                            max = arr[i];
                          }
                        }

                        System.out.println(max);
                      }
                    }`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* 下部：解答エリア */}
          <div className="answer-area">
            {[
              `for (int i = 0; i < arr.length; i++) {`,
              `while (i < arr.length) {`,
              `do { i++;`,
              `if (arr[i] > max) {`
            ].map((answer, index) => (
              <label 
                key={index} 
                className={`answer-box ${selectedAnswer === index ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerSelect(index)}
                />
                <span className="radio-custom"></span>
                <p>{answer}</p>
              </label>
            ))}
          </div>
        </div>

        <div className="button-group">
          <Button 
            labelText="戻る"
            style="filled"
            onClick={handleBack}
          />
          <Button 
            labelText="次へ"
            style="filled"
            onClick={() => {}}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionPage;
