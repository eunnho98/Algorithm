const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
});

rl.on('close', () => {
  const N = parseInt(input[0]);
  const arr = input
    .splice(1)
    .join()
    .split(' ')
    .map((ele) => parseInt(ele))
    .reverse();

  process.exit();
});
