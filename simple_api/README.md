# Simple API

## インストール

下記が使えるように準備しておく

* [ ] Node.js
    `brew install node` or お好きな方法で
    伊藤は 18.14.0 を利用しています
* [ ] jq
    `brew install jq`
* [ ] curl
    * 慣れてきたらより便利なツールに移行したほうがいいかも
        * [Postman](https://cloudsmith.co.jp/blog/efficient/2021/08/1837085.html)
        * [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
        * [Httpie](https://github.com/httpie/httpie)
* [ ] [VSCode Extension: OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)
    * これを簡易的なAPIクライアントとして使用しても良い


## 初期設定

```sh
npm init
npm install express --save
touch index.js
```


## サーバー起動

```sh
npm run dev
```


## 動作確認

タスク一覧取得

```sh
curl http://localhost:3000/tasks \
    -s \
    | jq .
```

タスクの詳細取得

```sh
curl http://localhost:3000/tasks/3 \
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
    -s \
    -v
```

## 参考

* [Express 4.x API](https://expressjs.com/en/api.html)
* [現代の JavaScript チュートリアル](https://ja.javascript.info/)
