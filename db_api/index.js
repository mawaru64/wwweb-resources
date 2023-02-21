import express from 'express'
import { PrismaClient } from '@prisma/client'


// 初期設定
const port = 3000
const app = express()
app.use(express.json())
const prisma = new PrismaClient()


// ルート
app.get('/', (req, res) => {
  res.send('DB APIルートパス')
})

// タスクの一覧を取得
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany()

  res.json({
    data: tasks
  })
})

/*
  タスクの詳細を取得

  URLパラメータ

  * id: タスクのID
    * type: Integer
*/
app.get('/tasks/:id', async (req, res) => {
  const requestedId = Number(req.params.id)

  const task = await prisma.task.findUnique({
    where: {
      id: requestedId,
    }
  })

  res.json(task)
})


/*
  タスクを新規作成

  パラメータ
  * [body] title: 新規タスクのタイトル
    * type: String
*/
app.post('/tasks', async (req, res) => {
  const newTask = {
    title: req.body.title,
    createdAt: new Date(),
  }

  const queryResult = await prisma.task.create({
    data: newTask
  })

  res.json(queryResult);
})

/*
  タスクを更新

  URLパラメータ

  * id: タスクのID
    * type: Integer

  Bodyパラメータ

  * [body] title: 新規タスクのタイトル
    * type: String
  * [body] completed: 完了したかどうか
    * type: Boolean
*/
app.patch('/tasks/:id', async (req, res) => {
  const requestedId = Number(req.params.id)

  const queryResult = await prisma.task.update({
    where: {
      id: requestedId,
    },
    data: {
      title: req.body.title,
      completed: req.body.completed,
    },
  })

  res.json(queryResult)
})


/*
  タスクを削除

  URLパラメータ

  * id: タスクのID
    * type: Integer
*/
app.delete('/tasks/:id', async (req, res) => {
  const requestedId = Number(req.params.id)

  await prisma.task.delete({
    where: {
      id: requestedId,
    }
  })

  res.status(204).send()
})


// APIサーバを起動
app.listen(port, () => console.log(`Listening on port ${port}`))
