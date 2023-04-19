const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N;
let adj;
let visited;
let ans = 0;

const dfs = (x) => {
  if (visited[x]) return;
  for (let i = 1; i < N + 1; i++) {
    if (adj[x][i] && visited[i] === false) {
      visited[i] = true;
      dfs(i);
    }
  }
};

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  N = parseInt(input[0][0]);
  adj = [...Array(N + 1)].map(() => [...Array(N + 1)].fill(0));
  visited = [...Array(N + 1)].fill(false);
  const arr = input.splice(1);
  arr.forEach((el) => {
    const y = parseInt(el[2]);
    const x = parseInt(el[0]);
    adj[y][x] = 1;
    adj[x][y] = 1;
  });
  for (let i = 1; i < N + 1; i++) {
    if (visited[i] === false) {
      ans += 1;
      visited[i] = true;
      dfs(i);
    }
  }
  console.log(ans);
  process.exit();
});
