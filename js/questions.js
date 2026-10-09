/* ════════════════════════════════════════════════════════
   COGNITIVE ANIMAL — quiz question data
   16問分の設問・選択肢・配点。quiz.js から参照する。
════════════════════════════════════════════════════════ */

const QUESTIONS = [
  {
    id: "Q1",
    axisGroup: "VAK",
    order: 1,
    weight: 1,
    isTiebreaker: false,
    text: `記憶に残る場面で、一番鮮明に思い出せるのは?`,
    options: [
      { id: "a", text: `あの日の窓の外の景色や、相手の表情を思い出す`, axis: "V", points: 1 },
      { id: "b", text: `あのとき交わした言葉や、声のトーンが耳に残っている`, axis: "A", points: 1 },
      { id: "c", text: `何より、あのときの胸の高鳴りや息苦しさを覚えている`, axis: "K", points: 1 },
    ]
  },
  {
    id: "Q2",
    axisGroup: "VAK",
    order: 2,
    weight: 1,
    isTiebreaker: false,
    text: `新しいことを覚えるとき、一番しっくりくるのは?`,
    options: [
      { id: "a", text: `とりあえず図や写真、実際の映像を見てみたい`, axis: "V", points: 1 },
      { id: "b", text: `誰かに口頭で説明してもらいたい`, axis: "A", points: 1 },
      { id: "c", text: `理屈より先に、自分の手を動かして試したい`, axis: "K", points: 1 },
    ]
  },
  {
    id: "Q3",
    axisGroup: "VAK",
    order: 3,
    weight: 2,
    isTiebreaker: false,
    text: `人の印象に残るのは、どんな要素?`,
    options: [
      { id: "a", text: `あの顔立ちや、着ていた服の雰囲気`, axis: "V", points: 2 },
      { id: "b", text: `あの話し方や、声の特徴的な響き`, axis: "A", points: 2 },
      { id: "c", text: `向かい合ったときの、緊張感や体温のようなもの`, axis: "K", points: 2 },
    ]
  },
  {
    id: "Q4",
    axisGroup: "VAK",
    order: 4,
    weight: 2,
    isTiebreaker: false,
    text: `自分の考えを人に説明するとき、自然とやってしまうのは?`,
    options: [
      { id: "a", text: `図にしたり、位置関係を示したりして伝える`, axis: "V", points: 2 },
      { id: "b", text: `声のトーンや大きさを調整して話す`, axis: "A", points: 2 },
      { id: "c", text: `実際にやってみせたり、動きを交えて伝える`, axis: "K", points: 2 },
    ]
  },
  {
    id: "Q5",
    axisGroup: "VAK",
    order: 5,
    weight: 3,
    isTiebreaker: false,
    text: `頭の中で何かを想像するとき、まず浮かびやすいのは?`,
    options: [
      { id: "a", text: `ひとつの映像や、場面そのもの`, axis: "V", points: 3 },
      { id: "b", text: `誰かの声や、頭の中でのつぶやき`, axis: "A", points: 3 },
      { id: "c", text: `なんとなくの気配や、感触のようなもの`, axis: "K", points: 3 },
    ]
  },
  {
    id: "Q6",
    axisGroup: "VAK",
    order: 6,
    weight: 3,
    isTiebreaker: false,
    text: `集中しやすい環境をつくるとしたら?`,
    options: [
      { id: "a", text: `まず視界を整えたい。散らかりを片付けたり、明るさを調整したり`, axis: "V", points: 3 },
      { id: "b", text: `まず音を整えたい。静かにしたり、好きな音楽をかけたり`, axis: "A", points: 3 },
      { id: "c", text: `まず座り心地や、部屋の温度を整えたい`, axis: "K", points: 3 },
    ]
  },
  {
    id: "Q7",
    axisGroup: "EAWP",
    order: 7,
    weight: 1,
    isTiebreaker: false,
    text: `旅行から帰ってきて、思い出を振り返るとき`,
    options: [
      { id: "a", text: `あの日あの場所での、ひとつひとつの場面がそのまま蘇る`, axis: "E", points: 1 },
      { id: "b", text: `良かった点・気になった点を、振り返って整理している`, axis: "A", points: 1 },
      { id: "c", text: `「とにかく良い旅だった」という全体の印象が残っている`, axis: "W", points: 1 },
      { id: "d", text: `「次はこうしよう」という、次に活きる段取りが頭に残る`, axis: "P", points: 1 },
    ]
  },
  {
    id: "Q8",
    axisGroup: "EAWP",
    order: 8,
    weight: 1,
    isTiebreaker: false,
    text: `人に何かを説明するとき、自然とやってしまうのは`,
    options: [
      { id: "a", text: `「あのとき、こういうことがあってね」と場面から話し始める`, axis: "E", points: 1 },
      { id: "b", text: `「これはつまり、こういう仕組みで」と要素に分けて話す`, axis: "A", points: 1 },
      { id: "c", text: `「全体として、こういうことです」とまとめて話す`, axis: "W", points: 1 },
      { id: "d", text: `「まずこれをして、次にこれをして」と順を追って話す`, axis: "P", points: 1 },
    ]
  },
  {
    id: "Q9",
    axisGroup: "EAWP",
    order: 9,
    weight: 1,
    isTiebreaker: false,
    text: `過去の失敗を思い出すとき`,
    options: [
      { id: "a", text: `そのときの場面や、自分の気持ちがそのまま浮かんでくる`, axis: "E", points: 1 },
      { id: "b", text: `「何がどう影響したのか」を、自然と分析してしまう`, axis: "A", points: 1 },
      { id: "c", text: `「そういう時期だった」と大きな流れの中で捉えている`, axis: "W", points: 1 },
      { id: "d", text: `具体的な出来事より先に、「次からはこうする」が浮かぶ`, axis: "P", points: 1 },
    ]
  },
  {
    id: "Q10",
    axisGroup: "EAWP",
    order: 10,
    weight: 1,
    isTiebreaker: false,
    text: `好きな本や映画の話をするとき`,
    options: [
      { id: "a", text: `好きな場面を、ひとつひとつ思い出しながら話す`, axis: "E", points: 1 },
      { id: "b", text: `話の構造や伏線のつながりについて、つい語ってしまう`, axis: "A", points: 1 },
      { id: "c", text: `作品全体として、何が言いたかったのかを語りたくなる`, axis: "W", points: 1 },
      { id: "d", text: `どうやってこの場面を見せているのか、つい考えてしまう`, axis: "P", points: 1 },
    ]
  },
  {
    id: "Q11",
    axisGroup: "EAWP",
    order: 11,
    weight: 2,
    isTiebreaker: false,
    text: `新しい環境に入ったとき、慣れていく感覚は`,
    options: [
      { id: "a", text: `日々の中で、印象に残る出来事を積み重ねていく`, axis: "E", points: 2 },
      { id: "b", text: `周りの人間関係やルールを、少しずつ理解していく`, axis: "A", points: 2 },
      { id: "c", text: `その場の空気を感じ取り、馴染んでいく`, axis: "W", points: 2 },
      { id: "d", text: `日々の動きの中で、体が自然と手順を覚えていく`, axis: "P", points: 2 },
    ]
  },
  {
    id: "Q12",
    axisGroup: "EAWP",
    order: 12,
    weight: 2,
    isTiebreaker: false,
    text: `誰かに感謝を伝えるとき`,
    options: [
      { id: "a", text: `「あのとき、こうしてくれたよね」と場面を挙げて伝える`, axis: "E", points: 2 },
      { id: "b", text: `「〜のおかげで、こう変わった」と理由を添えて伝える`, axis: "A", points: 2 },
      { id: "c", text: `「本当にありがとう」と、感じたことをそのまま伝える`, axis: "W", points: 2 },
      { id: "d", text: `言葉より、相手が助かるような行動で示したくなる`, axis: "P", points: 2 },
    ]
  },
  {
    id: "Q13",
    axisGroup: "EAWP",
    order: 13,
    weight: 2,
    isTiebreaker: false,
    text: `自転車の乗り方は,`,
    options: [
      { id: "a", text: `覚えたときの場所や状況が、今でも頭に浮かぶ`, axis: "E", points: 2 },
      { id: "b", text: `体重のかけ方やペダルを踏むタイミングが、動きにどう影響するかを理解している`, axis: "A", points: 2 },
      { id: "c", text: `自転車はこういうもの、という感覚がある`, axis: "W", points: 2 },
      { id: "d", text: `体が手順を覚えていて、迷わず動ける`, axis: "P", points: 2 },
    ]
  },
  {
    id: "Q14",
    axisGroup: "EAWP",
    order: 14,
    weight: 2,
    isTiebreaker: false,
    text: `迷ったときに頼りにするのは`,
    options: [
      { id: "a", text: `以前、似たような場面で経験したこと`, axis: "E", points: 2 },
      { id: "b", text: `状況を整理して見えてくる、全体の構造`, axis: "A", points: 2 },
      { id: "c", text: `これまでの経験から得た、全体的な感覚`, axis: "W", points: 2 },
      { id: "d", text: `体が覚えている、いつものやり方`, axis: "P", points: 2 },
    ]
  },
  {
    id: "Q15",
    axisGroup: "EAWP",
    order: 15,
    weight: 3,
    isTiebreaker: false,
    text: `誰かと話していて「わかる」と感じる瞬間`,
    options: [
      { id: "a", text: `相手の話す場面が、自分の記憶と重なったとき`, axis: "E", points: 3 },
      { id: "b", text: `相手の話の構造や、言いたいことの筋道が見えたとき`, axis: "A", points: 3 },
      { id: "c", text: `相手の話全体の空気や、言わんとすることが伝わったとき`, axis: "W", points: 3 },
      { id: "d", text: `相手の話から、何をしたのか、何をするのかがわかったとき`, axis: "P", points: 3 },
    ]
  },
  {
    id: "Q16",
    axisGroup: "EAWP",
    order: 16,
    weight: 3,
    isTiebreaker: true,
    text: `何かを「もう十分理解した」と感じる瞬間`,
    options: [
      { id: "a", text: `具体的な場面を思い浮かべて、腑に落ちたとき`, axis: "E", points: 3 },
      { id: "b", text: `要素同士のつながりが、はっきり見えたとき`, axis: "A", points: 3 },
      { id: "c", text: `全体像がひとつのまとまりとして見えたとき`, axis: "W", points: 3 },
      { id: "d", text: `説明されなくても、体が自然と動くようになったとき`, axis: "P", points: 3 },
    ]
  },
];