const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = parseInt(input[0][0]);
  const L = parseInt(input[0][2]);
  const str = input[1];
  const arr = str.split(' ').map((i) => parseInt(i));
  arr.sort((a, b) => a - b);

  let x = 0;
  let answer = 0;

  arr.forEach((i) => {
    if (x < i) {
      answer += 1;
      x = i + L - 1;
    }
  });

  console.log(answer);
  process.exit();
});
