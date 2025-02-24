# API仕様書

## ベースURL
`https://api.programming-game.com/v1`

## 共通仕様
- リクエスト/レスポンス形式: JSON
- 文字エンコーディング: UTF-8

## エンドポイント一覧

### 1. 問題取得 API
#### リクエスト
- Method: GET
- Path: `/questions`
- Query Parameters:
  - category: string (optional) - 問題カテゴリ（"basic", "intermediate", "advanced"）
  - difficulty: string (optional) - 難易度（"easy", "medium", "hard"）
  - language: string (optional) - プログラミング言語（現在は"java"のみ）

#### レスポンス
```json
{
  "questions": [
    {
      "id": "q123",
      "title": "変数の宣言",
      "description": "適切な変数宣言を選んでください",
      "code": "__ number = 42;",
      "pseudoCode": "数値型の変数numberに42を代入する",
      "choices": [
        {"id": "c1", "text": "int"},
        {"id": "c2", "text": "var"},
        {"id": "c3", "text": "let"},
        {"id": "c4", "text": "const"}
      ],
      "correctAnswer": "c1",
      "difficulty": "easy",
      "category": "basic"
    }
  ],
  "total": 20,
  "timeLimit": 300
}
```

### 2. ゲーム開始 API
#### リクエスト
- Method: POST
- Path: `/games`
- Body:
```json
{
  "category": "basic",
  "difficulty": "easy",
  "language": "java"
}
```

#### レスポンス
```json
{
  "gameId": "g789",
  "timeLimit": 300,
  "startTime": "2024-03-14T10:00:00Z",
  "questionCount": 10
}
```

### 3. 解答提出 API
#### リクエスト
- Method: POST
- Path: `/games/{gameId}/answer`
- Body:
```json
{
  "questionId": "q123",
  "answerId": "c1",
  "timeSpent": 25
}
```

#### レスポンス
```json
{
  "correct": true,
  "explanation": "intは整数型の変数を宣言するために使用します",
  "score": 10,
  "nextQuestionAvailable": true
}
```

### 4. ゲーム終了 API
#### リクエスト
- Method: POST
- Path: `/games/{gameId}/finish`
- Body:
```json
{
  "timeSpent": 285
}
```

#### レスポンス
```json
{
  "totalQuestions": 10,
  "correctAnswers": 8,
  "score": 80,
  "timeSpent": 285
}
```

### 5. リザルト取得 API
#### リクエスト
- Method: GET
- Path: `/games/{gameId}/result`

#### レスポンス
```json
{
  "gameId": "g789",
  "startTime": "2024-03-14T10:00:00Z",
  "endTime": "2024-03-14T10:05:00Z",
  "totalQuestions": 10,
  "correctAnswers": 8,
  "score": 80,
  "timeSpent": 285,
  "questionResults": [
    {
      "questionId": "q123",
      "correct": true,
      "timeSpent": 25,
      "points": 10,
      "userAnswer": "c1"
    }
  ]
}
```

## エラーレスポンス
```json
{
  "error": {
    "code": "INVALID_ANSWER",
    "message": "Invalid answer submission",
    "details": {
      "field": "answerId",
      "reason": "Answer ID does not exist"
    }
  }
}
```

## ステータスコード
- 200: リクエスト成功
- 400: リクエスト不正（パラメータ誤り）
- 404: リソースが存在しない
- 408: タイムアウト（制限時間超過）
- 500: サーバーエラー