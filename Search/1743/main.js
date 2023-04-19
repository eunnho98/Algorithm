const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N, M, K;
let adj;
let visited; // 방문 여부 저장 행렬
let cnt; // 이동한 횟수
let ans = 1;

// 상, 우, 하, 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 가능한 좌표인가?
const isValid = (x, y) => x >= 1 && x <= N && y >= 1 && y <= M;

const dfs = (x, y) => {
  if (adj[x][y] === 0) return;

  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (isValid(nx, ny) && adj[nx][ny] !== 0 && visited[nx][ny] === false) {
      // 방문헀다면 방문 횟수 1 증가
      cnt++;
      visited[nx][ny] = true;
      ans = Math.max(ans, cnt);
      dfs(nx, ny);
    }
  }
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const numArr = input[0].split(' ');
  [N, M, K] = [parseInt(numArr[0]), parseInt(numArr[1]), parseInt(numArr[2])];
  const tmpArr = input.splice(1, K + 1);
  const adjArr = tmpArr.map((el) => el.split(' ').map((el) => parseInt(el)));
  adj = [...Array(N + 1)].map(() => [...Array(M + 1)].fill(0));
  visited = [...Array(N + 1)].map(() => [...Array(M + 1)].fill(false));

  adjArr.forEach((el) => {
    const x = el[0];
    const y = el[1];
    adj[x][y] = 1;
  });

  adjArr.forEach((el) => {
    const x = el[0];
    const y = el[1];
    if (visited[x][y] === false) {
      visited[x][y] = true;
      // 매 경우 방문횟수 1로 초기화
      cnt = 1;
      dfs(x, y);
    }
  });

  console.log(ans);
  process.exit();
});
