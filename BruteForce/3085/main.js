const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = 0;
// 한 줄에 최대 먹을 수 있는 사탕 수 찾기
function search(arr) {
  // 오른쪽으로 찾기
  arr.forEach((ele) => {
    let count = 1;
    ele.forEach((_, j, origin) => {
      if (j !== origin.length - 1) {
        if (origin[j] === origin[j + 1]) {
          count++;
          result = Math.max(result, count);
        } else {
          count = 1;
        }
      }
    });
  });

  // 밑으로 찾기
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j][i] === arr[j + 1][i]) {
        count++;
        result = Math.max(result, count);
      } else {
        count = 1;
      }
    }
  }
}

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = parseInt(input[0]);
  const arr = input.splice(1);
  const matrix = [...Array(N)].map((_, idx) => arr[idx].split(''));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        // 좌우교환
        const tmp = matrix[i][j];
        matrix[i][j] = matrix[i][j + 1];
        matrix[i][j + 1] = tmp;
        search(matrix);
        // 원상복구
        matrix[i][j + 1] = matrix[i][j];
        matrix[i][j] = tmp;
      }
      if (i + 1 < N) {
        // 위아래교환
        const tmp = matrix[i][j];
        matrix[i][j] = matrix[i + 1][j];
        matrix[i + 1][j] = tmp;
        search(matrix);
        // 원상복구
        matrix[i + 1][j] = matrix[i][j];
        matrix[i][j] = tmp;
      }
    }
  }
  console.log(result);
  process.exit();
});
