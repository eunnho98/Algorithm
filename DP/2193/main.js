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

  const dp = Array.from({ length: N }, () => 0);
  const dp0 = Array.from({ length: N }, () => 0);
  const dp1 = Array.from({ length: N }, () => 0);
  dp[0] = 1;

  if (N >= 2) {
    for (let i = 1; i < N; i++) {
      dp0[i] = dp[i - 1];
      dp1[i] = dp0[i - 1];
      dp[i] = dp0[i] + dp1[i];
    }
    console.log(dp[N - 1]);
  } else {
    console.log(1);
  }

  process.exit();
});
