const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { exec } = require("child_process");

const { motherDir, dockerComposeFile } = require("./0_create_mother_container");

const dockerExecCommand = `docker-compose -f ${motherDir}/${dockerComposeFile} exec -T mother `;

rl.question("フロントエンド用のコンテナを停止しますか？(y/n)", async answer => {
  if (answer.toLowerCase() !== "y") rl.close();

  await exec(
    `${dockerExecCommand} docker-compose -f inner-docker-compose.yml rm -f -s -v front`,
    (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  rl.close();
});
