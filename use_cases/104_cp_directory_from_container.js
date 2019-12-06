const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { exec } = require("child_process");
const { motherDir, dockerComposeFile } = require("./0_create_mother_container");

const dockerExecCommand = `docker-compose -f ${motherDir}/${dockerComposeFile} exec -T mother `;

// コマンドを叩いたら、frontコンテナ内部から、ホストのホストにファイルを送信する
rl.question("ホストのホストにファイルを送信する(y/n)", async answer => {
  if (answer.toLowerCase() !== "y") rl.close();

  // まず、frontコンテナからmotherコンテナにファイルを送信する
  await exec(
    `${dockerExecCommand} docker cp front:/app/dummy_dir2 /mother/`,
    (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  // motherコンテナからそのホストにファイルを送信する
  await exec(
    `docker cp mother:/mother/dummy_dir2/ \$\{PWD\}`,
    (err, stdout, stderr) => {
      if (err) throw err;

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  rl.close();
});
