const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const start = [2, 3, 5, 7];
const tail = [1, 3, 7, 9];

const prime = (n) => {
  if (n === 0 || n === 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const dfs = (n) => {
  if (String(n).length === input) {
    console.log(n);
    return;
  }
  tail.forEach((t) => {
    if (prime(n * 10 + t)) {
      dfs(n * 10 + t);
    }
  });
};

rl.on('line', function (line) {
  input = parseInt(line);
}).on('close', function () {
  start.forEach((n) => {
    dfs(n);
  });

  process.exit();
});
