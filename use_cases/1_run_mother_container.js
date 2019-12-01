const readline = require('readline');
const {exec} = require('child_process');
const { motherDir, dockerComposeFile } = require('./0_create_mother_container_manifest');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (require.main === module) {
  rl.question('motherコンテナを動かしますか？(y/n)', async (answer) => {
    if (answer.toLowerCase() !== 'y') rl.close();

    await exec(`docker-compose -f ${motherDir}/${dockerComposeFile} build mother`, (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });

    await exec(`docker-compose -f ${motherDir}/${dockerComposeFile} up -d mother`, (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });

    rl.close();
  });
}
