export type AnswerType = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  type: AnswerType;
}

export interface Result {
  name: string;
  description: string;
  imageUrl: string;
  type: AnswerType;
}

export interface ScoreCount {
  A: number;
  B: number;
  C: number;
  D: number;
}