const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const {exec} = require('child_process');
const { motherDir, dockerComposeFile } = require('./0_create_mother_container');

if (require.main === module) {
  rl.question('motherコンテナを停止しますか？(y/n)', async (answer) => {
    if (answer.toLowerCase() !== 'y') rl.close();

    await exec(`docker-compose -f ${motherDir}/${dockerComposeFile} down`, (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });

    rl.close();
  });
}
