import express from 'express'
import initialTasks from './initialTasks.js'

// 初期設定
const port = 3000
const app = express()
app.use(express.json())


// サンプルデータをセット
const tasks = [...initialTasks]


// ルート
app.get('/', (req, res) => {
  res.send('Simple APIルートパス')
})

// タスクの一覧を取得
app.get('/tasks', (req, res) => {
  res.json({data: tasks})
})

/*
  タスクの詳細を取得

  URLパラメータ

  * id: タスクのID
    * type: Integer
*/
app.get('/tasks/:id', (req, res) => {
  const requestedId = Number(req.params.id)
  const task = tasks.find(task => task.id === requestedId)

  res.json(task)
})

/*
  タスクを新規作成

  パラメータ
  * [body] title: 新規タスクのタイトル
    * type: String
*/
app.post('/tasks', (req, res) => {
  currentIds = tasks.map(task => task.id)
  const currentMaxId = Math.max(...currentIds)

  const newTask = {
    id: currentMaxId + 1,
    title: req.body.title,
    createdAt: (new Date()).toISOString(),
    completed: false,
  }
  tasks.push(newTask)

  res.json(newTask);
})

/*
  タスクを新規作成

  URLパラメータ

  * id: タスクのID
    * type: Integer

  Bodyパラメータ

  * [body] title: 新規タスクのタイトル
    * type: String
  * [body] completed: 完了したかどうか
    * type: Boolean
*/
app.patch('/tasks/:id', (req, res) => {
  const requestedId = Number(req.params.id)

  tasks = tasks.map(task => {
    if (task.id !== requestedId) return task

    return {
      ...task,
      title: req.body.title ?? task.title,
      completed: req.body.completed ?? task.completed,
    }
  })

  const modifiedTask = tasks.find(task => task.id === requestedId)

  res.json(modifiedTask)
})

/*
  タスクを削除

  URLパラメータ

  * id: タスクのID
    * type: Integer
*/
app.delete('/tasks/:id', (req, res) => {
  const requestedId = Number(req.params.id)

  tasks = tasks.filter(task => task.id !== requestedId)

  res.status(204).send()
})

// APIサーバを起動
app.listen(port, () => console.log(`Listening on port ${port}`))
