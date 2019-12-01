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
const apiService = `
  api:
    container_name: api
    build:
      context: ./api
    ports:
      - 8080:8080
    environment:
      # dbコンテナの環境変数と揃えるか
      MYSQL_DATABASE: 'hogehoge'
      MYSQL_USER: 'user'
      MYSQL_PASSWORD: 'password'
      MYSQL_ROOT_PASSWORD: 'password'`;

rl.question('apiコンテナを作成しますか？(y/n)', async (answer) => {
  if (answer.toLowerCase() !== 'y') rl.close();

  // inner-docker-compose.ymlがなければ作成する
  if (!fs.existsSync(`${motherDir}/${innerDockerComposeFile}`)) {
    await fs.writeFile(`${motherDir}/${innerDockerComposeFile}`, initDockerCompose, function (err) {
      if (err) throw err;
    });
  }

  // ファイルの指定行番号に追記する
  const data = fs.readFileSync(`${motherDir}/${innerDockerComposeFile}`).toString().split("\n");
  data.splice(2, 0, apiService);
  const  text = data.join("\n");
  await fs.writeFile(`${motherDir}/${innerDockerComposeFile}`, text, function (err) {
    if (err) throw err;
  });

  // apiディレクトリを作成する
  await fs.mkdir(`${motherDir}/api`, { recursive: true }, (err) => {
    if (err) throw err;
  });
  // Dockerfile用意
  await fs.copyFile('./resources/api_Dockerfile', `${motherDir}/api/Dockerfile`, (err) => {
    if (err) throw err;
    console.log('api_Dockerfile was copied to api/Dockerfile');
  });
  // server.jsを用意
  await fs.copyFile('./resources/api_server.js', `${motherDir}/api/server.js`, (err) => {
    if (err) throw err;
    console.log('api_server.js was copied to api/server.js');
  });
  // package.jsonを用意
  await fs.copyFile('./resources/api_package.json', `${motherDir}/api/package.json`, (err) => {
    if (err) throw err;
    console.log('api_package.json was copied to api/package.json');
  });

  rl.close();
});
