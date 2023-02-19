
/*
  データ構造

  * id: ID
    * type: Integer
    * default: 既存のID最大値に1をプラスした値
  * title: タスク名
    * type: String
  * createdAt: タスク作成日時
    * type: String
        ISO 形式 (ISO 8601) の文字列
        SEE: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
    * default: `new Date()`
  * completed: 完了したかどうか
    * type: Boolean
    * default: false
*/
const tasks = [
  {
    id: 1,
    title: '掃除機をかける',
    createdAt: (new Date('2023-02-01T10:00')).toISOString(),
    completed: true,
  },
  {
    id: 2,
    title: 'API勉強会の予習をする',
    createdAt: (new Date('2023-02-03T10:00')).toISOString(),
    completed: true,
  },
  {
    id: 3,
    title: 'Reactのチュートリアルを読む',
    createdAt: (new Date('2023-02-03T15:00')).toISOString(),
    completed: false,
  },
  {
    id: 4,
    title: '卵を買う',
    createdAt: (new Date('2023-02-04T20:00')).toISOString(),
    completed: false,
  }
]

export default tasks
