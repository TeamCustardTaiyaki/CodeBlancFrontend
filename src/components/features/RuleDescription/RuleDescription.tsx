// import React from 'react';
import './RuleDescription.scss';

/**
 * ゲームのルールを説明するコンポーネント
 * 制限時間、解答方法、採点方法などの説明を表示
 * 
 * @returns Reactコンポーネント
 */
const RuleDescription = () => {
  return (
    <div className="rule-description">
      <p>
        {/* ルール説明のヘッダー */}
        <span className="heading">ルール説明</span>
        <br />
        
        {/* ゲームの概要説明 */}
        <span className="normal">このゲームでは、</span>
        <span className="emphasis">Javaの基本文法を学びながら、穴埋め形式のコーディング問題に挑戦</span>
        <span className="normal">します</span>
        <span className="heading">！</span>
        <br />
        
        {/* 制限時間の説明 */}
        <span className="heading">制限時間は5分！</span>
        <br />
        
        {/* 解答のヒント */}
        <span className="normal">出題される問題に対して、</span>
        <span className="emphasis">選択肢の中から正しいコードを選んで解答</span>
        <span className="normal">してください。</span>
        <br />
        
        {/* 解答のヒントの説明 */}
        <span className="heading">解答のヒント</span>
        <br />
        <span className="heading">・</span>
        <span className="emphasis">問題文とJavaコード</span>
        <span className="normal">を確認しながら、適切なコードを選びましょう。</span>
        <br />
        
        {/* 採点方法の説明 */}
        <span className="heading">採点について</span>
        <br />
        <span className="emphasis">採点は制限時間終了後</span>
        <span className="normal">にまとめて行います。</span>
        <br />
        <span className="emphasis">準備ができたら「スタート」ボタンを押してゲームを始めましょう！</span>
      </p>
    </div>
  );
};

export default RuleDescription; 