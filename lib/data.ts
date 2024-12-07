import { Question, Result } from '../lib/types';

export const questions: Question[] = [
  {
    id: 1,
    text: "施術後、お客様にどう思われたい？",
    answers: [
      { text: "自分の良さを活かしてくれて扱いやすくしてくれる人", type: 'A' },
      { text: "トレンドをわかっていてお洒落な人", type: 'B' },
      { text: "似合うスタイルを提案してくれるセンスのある人", type: 'C' },
      { text: "個性的で印象的なスタイルを提案してくれる人", type: 'D' },
    ],
  },
  {
    id: 2,
    text: "ここだけは譲れないポイントは？",
    answers: [
      { text: "扱いやすさ", type: 'A' },
      { text: "顔周りのお洒落さ", type: 'B' },
      { text: "立体感とボリューム", type: 'C' },
      { text: "個性的なデザイン", type: 'D' },
    ],
  },
  {
    id: 3,
    text: "どんなお客様を担当してみたい？",
    answers: [
      { text: "ひたすら楽さを求める人", type: 'A' },
      { text: "流行に敏感な人", type: 'B' },
      { text: "バランスの取れたスタイルを求める人", type: 'C' },
      { text: "人と違う個性を求める人", type: 'D' },
    ],
  },
  {
    id: 4,
    text: "好みの雰囲気のスタイルを一言で表すと？",
    answers: [
      { text: "シンプルで扱いやすい", type: 'A' },
      { text: "上品でトレンドっぽい", type: 'B' },
      { text: "バランスの取れたスタイリッシュ", type: 'C' },
      { text: "個性的で印象的", type: 'D' },
    ],
  },
  {
    id: 5,
    text: "お客様がイメチェンしたいけど迷ってるときのアドバイスは？",
    answers: [
      { text: "大きく変えるのは勇気がいるから、長さは変えるけどシンプルに少しずつ変化を加えて、扱いやすさを最優先に提案", type: 'A' },
      { text: "流行りを取り入れつつ、その人に合わせて落とし込むことで、思い切ったけど違和感のない変化を提案", type: 'B' },
      { text: "顔の形や髪質を考慮しつつ、バランスの取れた変化を提案", type: 'C' },
      { text: "とにかくインパクト大！ほかの人とはひと味違う個性を存分に出し、しっかり変化を楽しめる提案", type: 'D' },
    ],
  },
  {
    id: 6,
    text: "イメチェン成功！みんなの反応は？",
    answers: [
      { text: "「すっきりして扱いやすそう！似合ってる！」", type: 'A' },
      { text: "「あれ？雰囲気変わった？自然で馴染んでて似合う！」", type: 'B' },
      { text: "「バランスが良くて、全体的に素敵になった！」", type: 'C' },
      { text: "「え！パッと見気づかなかった！」と驚かれるけど、みんなが見てる間にそれが新しい自分になるスタイル", type: 'D' },
    ],
  },
  {
    id: 7,
    text: "施術後、お客様が何をしたくなって欲しい？",
    answers: [
      { text: "さっそく家で簡単にセットしてみたい！", type: 'A' },
      { text: "友達に見せたりSNSに投稿したい！", type: 'B' },
      { text: "鏡を見ながらいろんな角度から確認したい！", type: 'C' },
      { text: "周りからのリアクションが楽しみ！", type: 'D' },
    ],
  },
];

export const results: Result[] = [
  {
    name: "ウルフ",
    description: "個性的で印象的なウルフカットが似合います。毛流れやボリューム感を活かし、少し大胆で目を引くスタイルです。",
    imageUrl: "/images/wolf-cut.jpg",
    type: 'A',
    minScore: 0,
    maxScore: 2
  },
  {
    name: "ボブ",
    description: "シンプルでありながらお洒落なボブスタイルが向いています。まとまりが良く、お手入れがしやすいデザインです。",
    imageUrl: "/images/bob-cut.jpg",
    type: 'B',
    minScore: 3,
    maxScore: 4
  },
  {
    name: "ショート",
    description: "すっきりとしたショートスタイルが似合います。シンプルでお洒落、かつ扱いやすいスタイルを求める方に最適です。",
    imageUrl: "/images/short-cut.jpg",
    type: 'C',
    minScore: 5,
    maxScore: 6
  },
  {
    name: "韓国風ヘアー",
    description: "トレンド感満載の韓国風ヘアスタイルが向いています。顔まわりのデザインや立体感を活かした、上品で流れるようなシルエットが特徴です。",
    imageUrl: "/images/korean-style.jpg",
    type: 'D',
    minScore: 7,
    maxScore: 7
  },
];
