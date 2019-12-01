const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');
const innerDockerComposeFile = 'inner-docker-compose.yml';
const { motherDir } = require('./0_create_mother_container');

const initDockerCompose = `version: "3"
services:`;

// inner-docker-comopse.ymlへの追記用
const dbService = `
  db:
    container_name: db
    image: mysql:5.7
    # 明示的に stop がされない限り、終了ステータスに関係なく常に再起動が行われる
    restart: always
    environment:
      MYSQL_DATABASE: 'hogehoge'
      # So you don't have to use root, but you can if you like
      MYSQL_USER: 'user'
      # You can use whatever password you like
      MYSQL_PASSWORD: 'password'
      # Password for root access
      MYSQL_ROOT_PASSWORD: 'password'
    ports:
      - '3306:3306'
    expose:
      # Opens port 3306 on the container
      - '3306'
      # Where our data will be persisted
    volumes:
      - my-db:/var/lib/mysql
# Names our volume
volumes:
  my-db:`;

rl.question('データベースコンテナを作成しますか？(y/n)', async (answer) => {
  if (answer.toLowerCase() !== 'y') rl.close();

  // inner-docker-compose.ymlがなければ作成する
  if (!fs.existsSync(`${motherDir}/${innerDockerComposeFile}`)) {
    await fs.writeFile(`${motherDir}/${innerDockerComposeFile}`, initDockerCompose, function (err) {
      if (err) throw err;
    });
  }

  await fs.appendFile(`${motherDir}/${innerDockerComposeFile}`, dbService, function (err) {
    if (err) throw err;
  });
  rl.close();
});
