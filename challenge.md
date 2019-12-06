# dind にまつわる問題

## 参考記事

- https://gitlab.com/gitlab-com/support-forum/issues/950
- https://gitlab.com/gitlab-com/support-forum/issues/4421
- https://github.com/docker/compose/issues/6617
- とりあえず、この記事によって、dind コンテナ内で、docker-compose コマンドを実行可能に

# dind で front 動かすのに成功

- docker-compose exec で複数コマンドを動かすときにうまくいかないとき
- https://github.com/docker/compose/issues/2033

# 結局 volume がきになるのよね

- https://qiita.com/gounx2/items/23b0dc8b8b95cc629f32

# そもそも dokcer in docker がいいのかどうか

- https://devops.stackexchange.com/questions/676/why-is-docker-in-docker-considered-bad

## 一つのコンテナを停止する

- docker-compose -f inner-docker-compose.yml rm -f -s -v api

## react と typescript の連携についてはこちら

- https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76

## やるべきなのは、対象のソースコードからコンポーネントを解析して、表示するってことやねんな

- むずくね？

## そもそもやりたいことは

- react のコンポーネントツリーの構造を解析する
- それらの関係をグラフィカルにわかりやすく表示する
- web サーバ上での編集内容にしたがって、dev コンテナの front のソースコードを良い感じに書き換える

## volume マウントについて

- https://medium.com/kokster/mount-volumes-into-a-running-container-65a967bee3b5

- run 中のコンテナの内部のソースコードを編集するなら、ssh するのてっとりばやいか

- https://blog.softwaremill.com/editing-files-in-a-docker-container-f36d76b9613c

- 方針的には、ローカルで更新させておいたデータを、なんか保存ボタン押した時のタイミングでコンテナ内部のソースと同期をとる
