const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  const N = parseInt(input);
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[1] = 1;
  dp[0] = 1;
  for (let i = 2; i <= N; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      dp[i] = Math.min(dp[i / 3], dp[i / 2], dp[i - 1]) + 1;
    } else if (i % 3 === 0 && i % 2 !== 0) {
      dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
    } else if (i % 3 !== 0 && i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  console.log(dp[N] - 1);
  process.exit();
});
