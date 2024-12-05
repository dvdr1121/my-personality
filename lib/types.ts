export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  score: number;
}

export interface Result {
  name: string;
  minScore: number;
  maxScore: number;
  description: string;
}