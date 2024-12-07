import { Question, Result } from '../lib/types';

export const questions: Question[] = [
  {
    id: 1,
    text: "施術後、お客様にどう思われたい？",
    answers: [
      { text: "自分の良さを活かしてくれて扱いやすくしてくれる人", type: 'A', score: 1 },
      { text: "トレンドをわかっていてお洒落な人", type: 'B', score: 2 },
      { text: "似合うスタイルを提案してくれるセンスのある人", type: 'C', score: 3 },
      { text: "個性的で印象的なスタイルを提案してくれる人", type: 'D', score: 4 },
    ],
  },
  {
    id: 2,
    text: "ここだけは譲れないポイントは？",
    answers: [
      { text: "扱いやすさ", type: 'A', score: 1 },
      { text: "顔周りのお洒落さ", type: 'B', score: 2 },
      { text: "立体感とボリューム", type: 'C', score: 3 },
      { text: "個性的なデザイン", type: 'D', score: 4 },
    ],
  },
  {
    id: 3,
    text: "どんなお客様を担当してみたい？",
    answers: [
      { text: "ひたすら楽さを求める人", type: 'A', score: 1 },
      { text: "流行に敏感な人", type: 'B', score: 2 },
      { text: "バランスの取れたスタイルを求める人", type: 'C', score: 3 },
      { text: "人と違う個性を求める人", type: 'D', score: 4 },
    ],
  },
  {
    id: 4,
    text: "好みの雰囲気のスタイルを一言で表すと？",
    answers: [
      { text: "シンプルで扱いやすい", type: 'A', score: 1 },
      { text: "上品でトレンドっぽい", type: 'B', score: 2 },
      { text: "バランスの取れたスタイリッシュ", type: 'C', score: 3 },
      { text: "個性的で印象的", type: 'D', score: 4 },
    ],
  },
  {
    id: 5,
    text: "お客様がイメチェンしたいけど迷ってるときのアドバイスは？",
    answers: [
      { text: "大きく変えるのは勇気がいるから、長さは変えるけどシンプルに少しずつ変化を加えて、扱いやすさを最優先に提案", type: 'A', score: 1 },
      { text: "流行りを取り入れつつ、その人に合わせて落とし込むことで、思い切ったけど違和感のない変化を提案", type: 'B', score: 2 },
      { text: "顔の形や髪質を考慮しつつ、バランスの取れた変化を提案", type: 'C', score: 3 },
      { text: "とにかくインパクト大！ほかの人とはひと味違う個性を存分に出し、しっかり変化を楽しめる提案", type: 'D', score: 4 },
    ],
  },
  {
    id: 6,
    text: "イメチェン成功！みんなの反応は？",
    answers: [
      { text: "「すっきりして扱いやすそう！似合ってる！」", type: 'A', score: 1 },
      { text: "「あれ？雰囲気変わった？自然で馴染んでて似合う！」", type: 'B', score: 2 },
      { text: "「バランスが良くて、全体的に素敵になった！」", type: 'C', score: 3 },
      { text: "「え！パッと見気づかなかった！」と驚かれるけど、みんなが見てる間にそれが新しい自分になるスタイル", type: 'D', score: 4 },
    ],
  },
  {
    id: 7,
    text: "施術後、お客様が何をしたくなって欲しい？",
    answers: [
      { text: "さっそく家で簡単にセットしてみたい！", type: 'A', score: 1 },
      { text: "友達に見せたりSNSに投稿したい！", type: 'B', score: 2 },
      { text: "鏡を見ながらいろんな角度から確認したい！", type: 'C', score: 3 },
      { text: "周りからのリアクションが楽しみ！", type: 'D', score: 4 },
    ],
  },
];

export const results: Result[] = [
  {
    name: "ウルフ",
    description: "個性的で印象的なウルフカットが似合います。毛流れやボリューム感を活かし、少し大胆で目を引くスタイルです。",
    imageUrl: "/images/wolf-cut.jpg",
    type: 'A',
    minScore: 7,
    maxScore: 13
  },
  {
    name: "ボブ",
    description: "シンプルでありながらお洒落なボブスタイルが向いています。まとまりが良く、お手入れがしやすいデザインです。",
    imageUrl: "/images/bob-cut.jpg",
    type: 'B',
    minScore: 14,
    maxScore: 20
  },
  {
    name: "ショート",
    description: "すっきりとしたショートスタイルが似合います。シンプルでお洒落、かつ扱いやすいスタイルを求める方に最適です。",
    imageUrl: "/images/short-cut.jpg",
    type: 'C',
    minScore: 21,
    maxScore: 27
  },
  {
    name: "韓国風ヘアー",
    description: "トレンド感満載の韓国風ヘアスタイルが向いています。顔まわりのデザインや立体感を活かした、上品で流れるようなシルエットが特徴です。",
    imageUrl: "/images/korean-style.jpg",
    type: 'D',
    minScore: 28,
    maxScore: 28
  },
];


