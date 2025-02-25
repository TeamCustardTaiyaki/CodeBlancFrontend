# API仕様

## エンドポイント

### GET /quiz/next
次の問題を取得します。

#### パラメータ
- `level` (string): 問題の難易度レベル

#### レスポンス
- `200 OK`: 問題データ
  ```json
  {
    "id": "q1",
    "code": "_ _ _  number = 42;",
    "pseudoCode": "数値型の変数numberに42を代入する",
    "choices": [
      { "id": "c1", "text": "var" },
      { "id": "c2", "text": "const" },
      { "id": "c3", "text": "int" },
      { "id": "c4", "text": "let" }
    ],
    "correctAnswer": "c3",
    "difficulty": "easy"
  }

### エラーレスポンス
- 400 Bad Request: 無効なパラメータ
- 500 Internal Server Error: サーバーエラー


## ファイルの動作と関係
`docs/file-descriptions.md` に各ファイルの動作と関係を記述します。

```markdown
# ファイルの動作と関係

## `src/App.tsx`
アプリケーションのルートコンポーネントで、React Routerを使用して各ページコンポーネントへのルーティングを設定しています。

### 主要なルートとページコンポーネント
- `/` - [`TopPage`](../src/pages/Top/index.tsx)
- `/dashboard` - [`DashboardPage`](../src/pages/Dashboard/index.tsx)
- `/start` - [`StartPage`](../src/pages/start/index.tsx)
- `/question` - [`QuestionPage`](../src/pages/Question/index.tsx)
- `/result` - [`ResultPage`](../src/pages/Result/index.tsx)
- `/about` - [`AboutTaiyakiPage`](../src/pages/AboutTaiyaki/index.tsx)

## `src/pages/Top/index.tsx`
トップページコンポーネント。イントロダクションとヘッダー/フッターを表示します。

## `src/pages/Dashboard/index.tsx`
ダッシュボードページコンポーネント。レベル選択画面を表示します。

## `src/pages/start/index.tsx`
開始ページコンポーネント。ゲームルールの説明と開始/戻るボタンを表示します。

## `src/pages/Question/index.tsx`
問題ページコンポーネント。プログラミング問題の表示、解答入力、タイマー管理を行います。

## `src/pages/Result/index.tsx`
結果表示ページコンポーネント。問題の解答結果、スコア、統計情報を表示します。

## `src/pages/AboutTaiyaki/index.tsx`
開発チーム「taiyaki custard」についてのページコンポーネント。チームメンバーやプロジェクトの概要を表示します。

## `src/hooks/useAnswerSubmission.ts`
解答の記録と送信を管理するカスタムフック。

## `src/hooks/useGameState.ts`
ゲームの状態を管理するカスタムフック。

## `src/hooks/useQuestions.ts`
質問の取得と管理を行うカスタムフック。

## `src/hooks/useTimer.ts`
タイマー機能を提供するカスタムフック。

## `src/constants/gameConstants.ts`
ゲームの基本設定に関する定数を定義します。

## `src/utils/api.ts`
APIクライアントの設定と、新しい問題を取得する関数を提供します。