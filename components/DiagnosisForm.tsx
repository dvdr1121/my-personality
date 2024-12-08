'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { questions, results } from '../lib/data';
import { Result, ScoreCount, AnswerType, Answer } from '../lib/types';

export default function DiagnosisForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<ScoreCount>({ A: 0, B: 0, C: 0, D: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerType: AnswerType) => {
    setScores(prevScores => ({
      ...prevScores,
      [answerType]: prevScores[answerType] + 1
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0 });
    setShowResult(false);
  };

  const getResult = (): Result => {
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return results.find(r => totalScore >= r.minScore && totalScore <= r.maxScore) || results[0];
  };

  if (showResult) {
    const matchedResult = getResult();

    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">診断結果</h2>
        <div className="mb-6 relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={matchedResult.imageUrl}
            alt={`${matchedResult.name}のヘアスタイル例`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <p className="text-xl mb-2">
          あなたに最も合っているのは<span className="font-bold text-blue-600">{matchedResult.name}</span>です！
        </p>
        <p className="mb-4">{matchedResult.description}</p>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">回答の内訳:</h3>
        <ul className="mb-6">
          <li>A（ウルフ）: {scores.A}個</li>
          <li>B（ボブ）: {scores.B}個</li>
          <li>C（ショート）: {scores.C}個</li>
          <li>D（韓国風ヘアー）: {scores.D}個</li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-6 mb-2">全ての診断結果:</h3>
        {results.map((r) => (
          <div key={r.name} className="mb-6">
            <div className="mb-2 relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src={r.imageUrl}
                alt={`${r.name}のヘアスタイル例`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <p className="font-medium">
              {r.name}（タイプ {r.type}）
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
      {question.answers.map((answer: Answer, index: number) => (
        <button
          key={index}
          onClick={() => handleAnswer(answer.type)}
          className="block w-full text-left p-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
}

