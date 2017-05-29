const program = require('commander');

function padWithZero(number) {
  return number < 10 ? `0${number}` : number;
}
function getDateString(date) {
  return `${date.getFullYear()}-${padWithZero(date.getMonth() + 1)}-${padWithZero(date.getDate())}`;
}

program
  .version('0.0.1')
  .option('-s, --size <n>', 'The size of the file')
  .option('-u, --unit [type]', 'Add  the unit of size [MB, GB]')
  .parse(process.argv);

if (!program.unit || !program.size) {
  console.log('-u and -s flags are required. Run --help for options.')
} else if (!(program.unit === 'MB' || program.unit === 'GB')) {
  console.log('Unit must be in MB or GB');
} else if (!Number(program.size)) {
  console.log('Unit must be a number.')
} else {
  const fs = require('fs');
  const file = fs.createWriteStream(`./${program.size}${program.unit}.${getDateString(new Date())}.txt`);
  const oneMB = 2250;
  let fileSize = 0;

  if (program.unit === 'MB') {
    fileSize = oneMB * program.size;
  } else if (program.unit === 'GB') {
    fileSize = oneMB * program.size * 1024;
  }

  for (let i = 0; i <= fileSize; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
  }

  file.end();
}