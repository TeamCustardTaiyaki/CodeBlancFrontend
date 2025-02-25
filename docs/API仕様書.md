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