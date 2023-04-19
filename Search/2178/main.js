const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let adj, chk, N, M;

// [dx][dy], 상, 우, 하, 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const isValid = (x, y) => y >= 1 && y <= M && x >= 1 && x <= N;

const bfs = (sx, sy) => {
  const queue = [];
  chk[sx][sy] = true;
  queue.push([sx, sy, 1]);
  while (queue.length > 0) {
    // 각 칸에 가기위해 몇 칸 가야하는지도 같이 저장해야함
    const [x, y, d] = queue.shift();
    if (x === N && y === M) {
      console.log(d);
      return;
    }
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      nd = d + 1;
      if (isValid(nx, ny) && adj[nx][ny] && chk[nx][ny] === false) {
        chk[nx][ny] = true;
        queue.push([nx, ny, nd]);
      }
    }
  }
};
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = parseInt(input[0].split(' ')[0]);
  M = parseInt(input[0].split(' ')[1]);
  // 마지막 \n을 떼기 위해 (1, N+1)
  const arr = input.splice(1, N + 1);
  adj = [...Array(N + 1)].map(() => [...Array(M + 1)].fill(0));
  chk = [...Array(N + 1)].map(() => [...Array(M + 1)].fill(false));
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      adj[i][j] = parseInt(arr[i - 1][j - 1]);
    }
  }
  bfs(1, 1);
  process.exit();
});
