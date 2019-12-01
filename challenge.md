# dindにまつわる問題
## 参考記事
- https://gitlab.com/gitlab-com/support-forum/issues/950
- https://gitlab.com/gitlab-com/support-forum/issues/4421
- https://github.com/docker/compose/issues/6617
- とりあえず、この記事によって、dindコンテナ内で、docker-composeコマンドを実行可能に

# dindでfront動かすのに成功
- docker-compose exec で複数コマンドを動かすときにうまくいかないとき
- https://github.com/docker/compose/issues/2033

# 結局volumeがきになるのよね
- https://qiita.com/gounx2/items/23b0dc8b8b95cc629f32

# そもそもdokcer in docker  がいいのかどうか
- https://devops.stackexchange.com/questions/676/why-is-docker-in-docker-considered-bad

## 一つのコンテナを停止する
-  docker-compose -f inner-docker-compose.yml  rm -f -s -v api

