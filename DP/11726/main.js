const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = parseInt(line);
});

rl.on('close', () => {
  if (input === 1) {
    console.log(1);
  } else if (input === 2) {
    console.log(2);
  } else if (input > 2) {
    const dp = Array.from({ length: input }, () => 0);
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < input; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) & 10007;
    }
    console.log(dp[input - 1]);
  }
  process.exit();
});
