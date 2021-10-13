const fs = require('fs');
const { spawn } = require('child_process');

var commitHash = ''

const git = async () => {
  const commit = spawn('git', ['rev-parse', '--short', 'HEAD']);

  commit.stdout.on('data', (data) => {
    commitHash = data.toString()
    main();
  });
}

const main = async () => {
  var stagingEnv = process.env.STAGING || false

  const data = {
    stagingEnv: Boolean(stagingEnv),
    commitHash: commitHash.substring(0, commitHash.length - 1)
  }

  console.log('Writing file ./env.json');
  fs.writeFileSync('env.json', JSON.stringify(data));
  console.log('Done!\n');
}

git();