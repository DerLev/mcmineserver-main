const fs = require('fs');

const main = async () => {
  var stagingEnv = process.env.STAGING || false

  const data = {
    stagingEnv: Boolean(stagingEnv)
  }

  console.log('Writing file ./env.json');
  fs.writeFileSync('env.json', JSON.stringify(data));
  console.log('Done!\n');
}

main();