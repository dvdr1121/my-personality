import { Question, Result } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "施術後、お客様にどう思われたい？",
    answers: [
      { text: "自分の良さを活かしてくれて扱いやすくしてくれる人", type: 'A', score: 1 },
      { text: "トレンドをわかっていてお洒落な人", type: 'B', score: 2 },
      { text: "似合うスタイルを提案してくれるセンスのある人", type: 'C', score: 3 },
      { text: "清潔感があって爽やかな印象を引き出してくれる人", type: 'D', score: 4 },
    ],
  },
  {
    id: 2,
    text: "ここだけは譲れないポイントは？",
    answers: [
      { text: "扱いやすさ", type: 'A', score: 1 },
      { text: "顔周りのお洒落さ", type: 'B', score: 2 },
      { text: "立体感とボリューム", type: 'C', score: 3 },
      { text: "スッキリとしたシルエット", type: 'D', score: 4 },
    ],
  },
  {
    id: 3,
    text: "どんなお客様を担当してみたい？",
    answers: [
      { text: "ひたすら楽さを求める人", type: 'A', score: 1 },
      { text: "流行に敏感な人", type: 'B', score: 2 },
      { text: "人と違う個性を求める人", type: 'C', score: 3 },
      { text: "活発で軽やかな印象を求める人", type: 'D', score: 4 },
    ],
  },
  {
    id: 4,
    text: "好みの雰囲気のスタイルを一言で表すと？",
    answers: [
      { text: "シンプルでお洒落", type: 'A', score: 1 },
      { text: "上品でトレンドっぽい", type: 'B', score: 2 },
      { text: "個性的で印象的", type: 'C', score: 3 },
      { text: "ナチュラルで爽やか", type: 'D', score: 4 },
    ],
  },
  {
    id: 5,
    text: "お客様がイメチェンしたいけど迷ってるときのアドバイスは？",
    answers: [
      { text: "大きく変えるのは勇気がいるから、長さは変えるけどシンプルに少しずつ変化を加えて、扱いやすさを最優先に提案", type: 'A', score: 1 },
      { text: "流行りを取り入れつつ、その人に合わせて落とし込むことで、思い切ったけど違和感のない変化を提案", type: 'B', score: 2 },
      { text: "とにかくインパクト大！ほかの人とはひと味違う個性を存分に出し、しっかり変化を楽しめる提案", type: 'C', score: 3 },
      { text: "スッキリとしたスタイルで印象を一新しながらも、自然で馴染むデザインを提案", type: 'D', score: 4 },
    ],
  },
  {
    id: 6,
    text: "イメチェン成功！みんなの反応は？",
    answers: [
      { text: "「シンプルだけど細かいところにお洒落なポイントが沢山隠れてて素敵！」", type: 'A', score: 1 },
      { text: "「あれ？雰囲気変わった？自然に馴染んでて似合う！」", type: 'B', score: 2 },
      { text: "「え！パッと見気づかなかった！」と驚かれるけど、みんなが見てる間にそれが新しい自分になるスタイル", type: 'C', score: 3 },
      { text: "「スッキリして爽やかな印象が増して、清潔感がアップしたね！」", type: 'D', score: 4 },
    ],
  },
  {
    id: 7,
    text: "施術後、お客様が何をしたくなって欲しい？",
    answers: [
      { text: "さっそく予定入れてお出かけしたい！", type: 'A', score: 1 },
      { text: "友達に見せたりSNSに投稿したい！", type: 'B', score: 2 },
      { text: "周りからのリアクションが楽しみ！", type: 'C', score: 3 },
      { text: "スポーツや外出で軽快に動きたくなる！", type: 'D', score: 4 },
    ],
  },
  {
    id: 8,
    text: "お客様が似合うかわからないと不安な時、どんな提案をする？",
    answers: [
      { text: "似合うポイントを一緒に探してさりげない変化からやってみましょう！", type: 'A', score: 1 },
      { text: "トレンドを踏まえつつ挑戦しやすいラインでいつもの雰囲気から変えてみましょう！", type: 'B', score: 2 },
      { text: "大胆に冒険してみるときっと新しい自分になれます！", type: 'C', score: 3 },
      { text: "顔型や骨格に合わせたシルエットで、似合うポイントを活かした自然なデザインを提案します！", type: 'D', score: 4 },
    ],
  },
  {
    id: 9,
    text: "お客様がスタイリングが苦手と言っているときどんな提案をする？",
    answers: [
      { text: "手ぐしで簡単にまとまるデザインを考える", type: 'A', score: 1 },
      { text: "動きや軽さを出してセットしやすくする", type: 'B', score: 2 },
      { text: "カットに遊び心を出して、ドライヤーでラフにきまる提案をする", type: 'C', score: 3 },
      { text: "ワックスを少量つけるだけで形が決まるスッキリスタイルを提案する", type: 'D', score: 4 },
    ],
  },
  {
    id: 10,
    text: "お客様が普段使わないスタイリング剤を提案する場合、どんな提案をする？",
    answers: [
      { text: "忙しい日でも付けるだけで簡単にスタイリングできるアイテム", type: 'A', score: 1 },
      { text: "お洒落な質感を再現できるアイテム", type: 'B', score: 2 },
      { text: "スタイリングの仕方次第で色んな使い方ができてスタイリングが楽しくなるアイテム", type: 'C', score: 3 },
      { text: "軽さを出しつつ、自然なまとまりを作れるスタイリング剤", type: 'D', score: 4 },
    ],
  },
];

export const results: Result[] = [
  {
    name: "ボブ",
    description: "シンプルでありながらお洒落なボブスタイルが向いています。まとまりが良く、お手入れがしやすいデザインです。",
    imageUrl: "/images/bob-cut.jpg",
    type: 'A',
    minScore: 10,
    maxScore: 17
  },
  {
    name: "韓国風ヘアー",
    description: "トレンド感満載の韓国風ヘアスタイルが向いています。顔まわりのデザインや立体感を活かした、上品で流れるようなシルエットが特徴です。",
    imageUrl: "/images/korean-style.jpg",
    type: 'B',
    minScore: 18,
    maxScore: 25
  },
  {
    name: "ウルフ",
    description: "個性的で印象的なウルフカットが似合います。毛流れやボリューム感を活かし、少し大胆で目を引くスタイルです。",
    imageUrl: "/images/wolf-cut.jpg",
    type: 'C',
    minScore: 26,
    maxScore: 33
  },
  {
    name: "ショート",
    description: "すっきりとしたショートスタイルが似合います。シンプルでお洒落、かつ扱いやすいスタイルを求める方に最適です。",
    imageUrl: "/images/short-cut.jpg",
    type: 'D',
    minScore: 34,
    maxScore: 40
  },
];



