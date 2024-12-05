import { Question, Result } from './lib/types';

export const questions: Question[] = [
  {
    id: 1,
    text: "施術後、お客様にどう思われたい？",
    answers: [
      { text: "自分の良さを活かしてくれて扱いやすくしてくれる人", score: 1 },
      { text: "トレンドをわかっていてお洒落な人", score: 2 },
      { text: "似合うスタイルを提案してくれるセンスのある人", score: 3 },
    ],
  },
  {
    id: 2,
    text: "ここだけは譲れないポイントは？",
    answers: [
      { text: "扱いやすさ", score: 1 },
      { text: "顔周りのお洒落さ", score: 2 },
      { text: "立体感とボリューム", score: 3 },
    ],
  },
  {
    id: 3,
    text: "どんなお客様を担当してみたい？",
    answers: [
      { text: "ひたすら楽さを求める人", score: 1 },
      { text: "流行に敏感な人", score: 2 },
      { text: "人と違う個性を求める人", score: 3 },
    ],
  },
  {
    id: 4,
    text: "好みの雰囲気のスタイルを一言で表すと？",
    answers: [
      { text: "シンプルでお洒落", score: 1 },
      { text: "上品でトレンドっぽい", score: 2 },
      { text: "個性的で印象的", score: 3 },
    ],
  },
  {
    id: 5,
    text: "お客様がイメチェンしたいけど迷ってるときのアドバイスは？",
    answers: [
      { text: "大きく変えるのは勇気がいるから、長さは変えるけどシンプルに少しずつ変化を加えて、扱いやすさを最優先に提案", score: 1 },
      { text: "流行りを取り入れつつ、その人に合わせて落とし込むことで、思い切ったけど違和感のない変化を提案", score: 2 },
      { text: "とにかくインパクト大！ほかの人とはひと味違う個性を存分に出し、しっかり変化を楽しめる提案", score: 3 },
    ],
  },
  {
    id: 6,
    text: "イメチェン成功！みんなの反応は？",
    answers: [
      { text: "「一見シンプルだけど、細かいところにお洒落なポイントが沢山隠れてて素敵！」", score: 1 },
      { text: "「あれ？雰囲気変わった？自然で馴染んでて似合う！」", score: 2 },
      { text: "「え！パッと見気づかなかった！」と驚かれるけど、みんなが見てる間にそれが新しい自分になるスタイル", score: 3 },
    ],
  },
  {
    id: 7,
    text: "施術後、お客様が何をしたくなって欲しい？",
    answers: [
      { text: "さっそく予定入れてお出かけしたい！", score: 1 },
      { text: "友達に見せたりSNSに投稿したい！", score: 2 },
      { text: "周りからのリアクションが楽しみ！", score: 3 },
    ],
  },
];

export const results: Result[] = [
  {
    name: "ウルフ",
    minScore: 7,
    maxScore: 11,
    description: "あなたはウルフが向いています！個性的で印象的なスタイルを求める方に最適です。",
  },
  {
    name: "ボブ",
    minScore: 12,
    maxScore: 16,
    description: "あなたはボブが向いています！トレンド感と扱いやすさのバランスが取れたスタイルです。",
  },
  {
    name: "ショート",
    minScore: 17,
    maxScore: 21,
    description: "あなたはショートが向いています！シンプルでお洒落、かつ扱いやすいスタイルを求める方に最適です。",
  },
  {
    name: "韓国風ヘアー",
    minScore: 22,
    maxScore: 28,
    description: "あなたは韓国風ヘアーが向いています！トレンド感満載で、周りの注目を集めるスタイルです。",
  },
];
