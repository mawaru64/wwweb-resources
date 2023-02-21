# DB API

## インストール

* [VSCode Extension: Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
* DBクライアント
    * [Sequel Ace](https://sequel-ace.com/)
    * [TablePlus](https://tableplus.com/)
    * [VSCode Extension: Database Client](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2)


## 初期設定

```sh
npm init
npm install express prisma --save
npx prisma init --datasource-provider sqlite
```


Prismaのセットアップフローを経ずに立ち上げる場合、 `.env` を作成して下記を追記

```sh
DATABASE_URL="file:./dev.db"
```



## DB Migration

```sh
# 初回
npx prisma migrate dev --name init

# 次から
npx prisma migrate dev --name ${ここに名称を入れる}
```


## DB Seed

TODO


## 起動

```sh
npm run dev
```


## 動作確認

疎通確認

```sh
curl http://localhost:3000/
```

タスク一覧取得

```sh
curl http://localhost:3000/tasks \
    -s \
    | jq .
```

タスクの詳細取得

```sh
curl http://localhost:3000/tasks/1 \
    -s \
    | jq .
```

タスク新規作成

```sh
curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "APIからタスクを作る"}' \
    -s \
    | jq .
```

タスク更新

```sh
# 名称変更
curl -X PATCH http://localhost:3000/tasks/2 \
    -H "Content-Type: application/json" \
    -d '{"title": "新しいタスクのタイトル"}' \
    -s \
    | jq .

# タスク完了とする
curl -X PATCH http://localhost:3000/tasks/2 \
    -H "Content-Type: application/json" \
    -d '{"completed": true}' \
    -s \
    | jq .
```

タスク削除

```sh
curl -X DELETE http://localhost:3000/tasks/1 \
    -s
```


## 参考

* [Prisma: Quickstart](https://www.prisma.io/docs/getting-started/quickstart)
