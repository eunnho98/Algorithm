# 코테 ><

```javascript
// js readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(input);
  process.exit();
});
```

```javascript
// js 배열 0으로 초기화
const arr = Array.from({ length: N }, () => 0);

// 2차원 배열 선언
graph = [...Array(N + 1)].map(() => []);
visited = [...Array(N + 1)].fill(false);

// 여러 줄에 문자열 입력받고 하나씩 저장) [[1, 2, 3], [3, 4, 5]]
const arr = input.splice(1);
const matrix = [...Array(N)].map((_, idx) => arr[idx].split(''));
```

백준의 입력은 EOF가 있지만 터미널에 입력을하면 ctrl^c로 명시적 EoF를 줘야함
