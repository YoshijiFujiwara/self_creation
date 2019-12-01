const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');
const {exec} = require('child_process');
const innerDockerComposeFile = 'inner-docker-compose.yml';

const { motherDir, dockerComposeFile } = require('./0_create_mother_container');
// 各種インストールするライブラリのバージョン
const createReactAppVersion = '3.2.0';

const frontDirectory = 'front';

const initDockerCompose = `version: "3"
services:`;

// inner-docker-comopse.ymlへの追記用
const frontService = `
  front:
    container_name: front
    build:
      context: ./front
    volumes:
      - './front:/app'
      - './front/app/node_modules'
    ports:
      - 3000:3000
    environment:
      - NODE_ENV=development`;

// ./frontに配置するDockerfileの中身
const frontDockerFile = `FROM node:12.13.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.2.0 -g --silent

CMD [\"npm\", \"start\"]`;

const dockerExecCommand = `docker-compose -f ${motherDir}/${dockerComposeFile} exec -T mother `;

rl.question('フロントエンド用のコンテナを作成しますか？(y/n)', async (answer) => {
  if (answer.toLowerCase() !== 'y') rl.close();

  // create-react-app front でfront用のプロジェクト作成
  // docker-compose exec で複数のコマンドを実行するのに、 sh -c　をつけている
  // sh -c "echo '"'${frontDockerFile}'"' > hoge" で正しくエスケープできる
  await exec(`${dockerExecCommand} sh -c "npm install -g create-react-app@${createReactAppVersion} ; create-react-app ${frontDirectory} ; echo '"'${frontDockerFile}'"' > ./${frontDirectory}/Dockerfile"`, (err, stdout, stderr) => {
    if (err) throw err;

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  // inner-docker-compose.ymlがなければ作成する
  if (!fs.existsSync(`${motherDir}/${innerDockerComposeFile}`)) {
    await fs.writeFile(`${motherDir}/${innerDockerComposeFile}`, initDockerCompose, function (err) {
      if (err) throw err;
    });
  }

  await fs.appendFile(`${motherDir}/${innerDockerComposeFile}`, frontService, function (err) {
    if (err) throw err;
  });
  rl.close();
});
