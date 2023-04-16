let N; // 정점 개수
let adj = [[]]; // 인접행렬, 그래프 정보를 입력받는 부분 생략, 서로 이어지면 값이 1이라고 가정
let check = [[]]; // 방문여부 체크 행렬
// 위쪽, 오른쪽, 아래, 왼쪽
const dy = [0, 1, 0, -1];
const dx = [-1, 0, 1, 0];

// 좌표가 올바른가?
const isValid = (y, x) => y >= 0 && y < N && x >= 0 && x < N;

const dfs = (y, x) => {
  if (adj[y][x] === 1) return; // 목적지를 찾은 경우

  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];
    if (isValid(ny, nx) && check[ny][nx] === false) {
      check[ny][nx] = true;
      dfs(ny, nx);
    }
  }
};

// sy, sx: start point
const bfs = (sy, sx) => {
  // push(): 삽입, shift(): 제거
  const queue = [];
  check[sy][sx] = true;
  queue.push([sy, sx]);
  while (queue.length) {
    const [y, x] = queue.shift();
    // 목적지를 찾은 경우, dfs와 달리 바로 종료됨 -> 최단거리 찾기 가능
    if (adj[y][x] === 1) return;

    for (let i = 0; i > 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];
      if (isValid(ny, nx) && check[ny][nx] === false) {
        check[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  N = parseInt(input[0]);
  check = [...Array(N)].map(() => [...Array(N)].fill(false));
  console.log(check);
  process.exit();
});
