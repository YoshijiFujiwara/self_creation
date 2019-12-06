const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { exec } = require("child_process");
const { motherDir, dockerComposeFile } = require("./0_create_mother_container");

const dockerExecCommand = `docker-compose -f ${motherDir}/${dockerComposeFile} exec -T mother `;

// コマンドを叩いたら、frontコンテナ内部のjsを直接更新できるようにする
rl.question("コンテナ内部のコンテナになんかする(y/n)", async answer => {
  if (answer.toLowerCase() !== "y") rl.close();

  await exec(`docker cp dummy.txt mother:/mother`, (err, stdout, stderr) => {
    if (err) throw err;

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  await exec(
    `${dockerExecCommand} docker cp dummy.txt front:/app`,
    (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  rl.close();
});
