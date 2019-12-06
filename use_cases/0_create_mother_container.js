const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require("fs");
const dockerComposeFile = "docker-compose.yml";

const motherDir = "../mother2"; // TODO: これはあとで変更する必要あるか もしくは指定できるようにするか　最終的にはハッシュか何かだろうけど

const dockerFileContents = `FROM docker:19.03.5-dind

WORKDIR /mother

RUN \\
  # install docker-compose
  apk add --no-cache py-pip &&  pip install --quiet docker-compose~=1.23.0 && \\
  # install node and npm
  apk add --update nodejs nodejs-npm`;

const dockerComposeContents = `version: "3"
services:
  mother:
    container_name: mother
    build:
      context: .
    volumes:
      - ./:/mother
    privileged: true
    tty: true
    ports:
      - 3000:3000
      - 8080:8080`;

if (require.main === module) {
  rl.question(
    "motherコンテナ用Dockerfileを作成しますか？(y/n)",
    async answer => {
      if (answer.toLowerCase() !== "y") rl.close();

      // create mother dir
      await fs.mkdir(motherDir, { recursive: true }, err => {
        if (err) throw err;
      });

      // create mother Dockerfile
      await fs.writeFile(
        `${motherDir}/Dockerfile`,
        dockerFileContents,
        function(err) {
          if (err) throw err;
          console.log(`Dockerfile file created!`);
        }
      );

      // docker-compose.ymlを作成
      await fs.writeFile(
        `${motherDir}/${dockerComposeFile}`,
        dockerComposeContents,
        function(err) {
          if (err) throw err;
          console.log(`${dockerComposeFile} file created!`);
        }
      );

      rl.close();
    }
  );
}

module.exports = {
  motherDir,
  dockerComposeFile
};
