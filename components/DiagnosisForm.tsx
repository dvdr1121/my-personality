'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { questions, results } from '../lib/data';
import { Result } from '../lib/types';

export default function DiagnosisForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleAnswer = (answerScore: number) => {
    const newScore = score + answerScore;
    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const matchedResult = results.find(
        (r) => newScore >= r.minScore && newScore <= r.maxScore
      );
      setResult(matchedResult || null);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setResult(null);
  };

  if (showResult) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">診断結果</h2>
        {result ? (
          <>
            <p className="text-xl mb-2">
              あなたは<span className="font-bold text-blue-600">{result.name}</span>が向いています！
              （合計点数: {score}点）
            </p>
            <p className="mb-4">{result.description}</p>
          </>
        ) : (
          <p>結果が見つかりませんでした。</p>
        )}
        <h3 className="text-lg font-semibold mt-6 mb-2">全ての診断結果:</h3>
        {results.map((r) => (
          <div key={r.name} className="mb-4">
            <p className="font-medium">
              {r.minScore}〜{r.maxScore}点：{r.name}志向
            </p>
            <p>{r.description}</p>
          </div>
        ))}
        <button
          onClick={resetQuiz}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          もう一度診断する
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">ヘアスタイル診断</h2>
      <p className="mb-4">質問 {currentQuestion + 1} / {questions.length}</p>
      <p className="text-lg mb-4">{question.text}</p>
      {question.answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(answer.score)}
          className="block w-full text-left p-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
}
