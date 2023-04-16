const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
});

rl.on('close', function () {
  const N = parseInt(input[0]);
  const arr = input.splice(1);

  const arrT = [];
  const arrP = [];

  arr.forEach((i) => {
    const tmp = i.split(' ');
    arrT.push(parseInt(tmp[0]));
    arrP.push(parseInt(tmp[1]));
  });

  const dp = Array.from({ length: N + 1 }, () => 0);

  // 오늘 상담을 하거나 안하거나
  // 안하면 다음 날의 dp, 하면 오늘 버는 돈 + 그 다음 상담의 dp
  for (let i = N - 1; i >= 0; i--) {
    if (arrT[i] + i > N) {
      dp[i] = dp[i + 1];
    } else {
      dp[i] = Math.max(dp[i + 1], arrP[i] + dp[i + arrT[i]]);
    }
  }

  console.log(dp[0]);

  process.exit();
});
