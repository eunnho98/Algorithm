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
  console.log(input);
  const [tn, tk] = input[0].split(' ');
  const [n, k] = [parseInt(tn), parseInt(tk)];
  const price = input.splice(1).map((ele) => parseInt(ele));
  const dp = [...Array(n + 1)].map(() => [1]);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i === 1) {
        dp[i][j] = 1;
      } else {
      }
    }
  }
  process.exit();
});
