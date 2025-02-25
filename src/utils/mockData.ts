// src/utils/mockData.ts

import { Question } from '../types/api';

export const MOCK_QUESTIONS: Question[] = [
  {
    "id": "q1",
    "code": "_ _ _  number = 42;",
    "pseudoCode": "数値型の変数numberに42を代入する",
    "choices": [
      { "id": "c1", "text": "var" },
      { "id": "c2", "text": "const" },
      { "id": "c3", "text": "int" }, // 正解
      { "id": "c4", "text": "let" }
    ],
    "correctAnswer": "c3",
    "difficulty": "easy"
  },
  {
    "id": "q2",
    "code": "_ _ _ message = \"Hello\";",
    "pseudoCode": "文字列型の変数messageをHelloで初期化する",
    "choices": [
      { "id": "c1", "text": "var" },
      { "id": "c2", "text": "Text" },
      { "id": "c3", "text": "char" },
      { "id": "c4", "text": "String" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  },
  {
    "id": "q3",
    "code": "for (_ _ _ i = 0; i < 5; i++) { ... }",
    "pseudoCode": "整数型の変数iで5回ループを制御する",
    "choices": [
      { "id": "c1", "text": "var" },
      { "id": "c2", "text": "loop" },
      { "id": "c3", "text": "Integer" },
      { "id": "c4", "text": "int" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  },
  {
    "id": "q4",
    "code": "public _ _ _ main(String[] args) { ... }",
    "pseudoCode": "戻り値のないメインメソッドを定義する",
    "choices": [
      { "id": "c1", "text": "int" },
      { "id": "c2", "text": "static" },
      { "id": "c3", "text": "void" }, // 正解
      { "id": "c4", "text": "String" }
    ],
    "correctAnswer": "c3",
    "difficulty": "easy"
  },
  {
    "id": "q5",
    "code": "public _ _ _ MyClass { ... }",
    "pseudoCode": "MyClassというクラスを定義する",
    "choices": [
      { "id": "c1", "text": "interface" },
      { "id": "c2", "text": "class" }, // 正解
      { "id": "c3", "text": "struct" },
      { "id": "c4", "text": "type" }
    ],
    "correctAnswer": "c2",
    "difficulty": "easy"
  },
  {
    "id": "q6",
    "code": "boolean isOpen = _ _ _;",
    "pseudoCode": "真偽値型の変数isOpenをtrueで初期化する",
    "choices": [
      { "id": "c1", "text": "false" },
      { "id": "c2", "text": "yes" },
      { "id": "c3", "text": "1" },
      { "id": "c4", "text": "true" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  },
  {
    "id": "q7",
    "code": "int[] numbers = _ _ _ int[5];",
    "pseudoCode": "5要素の整数配列を生成する",
    "choices": [
      { "id": "c1", "text": "create" },
      { "id": "c2", "text": "make" },
      { "id": "c3", "text": "alloc" },
      { "id": "c4", "text": "new" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  },
  {
    "id": "q8",
    "code": "System.out._ _ _(\"Hello\");",
    "pseudoCode": "改行付きでHelloを出力する",
    "choices": [
      { "id": "c1", "text": "print" },
      { "id": "c2", "text": "log" },
      { "id": "c3", "text": "write" },
      { "id": "c4", "text": "println" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  },
  {
    "id": "q9",
    "code": "public _ _ _ MyClass() { ... }",
    "pseudoCode": "MyClassのコンストラクタを定義する",
    "choices": [
      { "id": "c1", "text": "void" },
      { "id": "c2", "text": "new" },
      { "id": "c3", "text": "this" },
      { "id": "c4", "text": "MyClass" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  },
  {
    "id": "q10",
    "code": "double _ _ _ = 3.14;",
    "pseudoCode": "浮動小数点数型の変数piを3.14で初期化する",
    "choices": [
      { "id": "c1", "text": "value" },
      { "id": "c2", "text": "number" },
      { "id": "c3", "text": "ratio" },
      { "id": "c4", "text": "pi" } // 正解
    ],
    "correctAnswer": "c4",
    "difficulty": "easy"
  }
];