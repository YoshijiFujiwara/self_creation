const readline = require('readline');
const {exec} = require('child_process');
const { motherDir, dockerComposeFile } = require('./0_create_mother_container_manifest');

const dockerExecCommand = `docker-compose -f ${motherDir}/${dockerComposeFile} exec -T mother `;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('フロントエンド用のコンテナを停止しますか？(y/n)', async (answer) => {
  if (answer.toLowerCase() !== 'y') rl.close();

  await exec(`${dockerExecCommand} docker-compose -f inner-docker-compose.yml down`, (err, stdout, stderr) => {
    if (err) throw err;

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  rl.close();
});
