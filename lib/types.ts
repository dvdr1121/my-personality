export type AnswerType = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  type: AnswerType;
  score: number;  // Add this line
}

export interface Result {
  name: string;
  description: string;
  imageUrl: string;
  type: AnswerType;
  minScore: number;
  maxScore: number;
}

export interface ScoreCount {
  A: number;
  B: number;
  C: number;
  D: number;
}
