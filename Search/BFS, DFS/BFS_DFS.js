const input = [];
let graph, visited, result;

const strToNumArr = (str) =>
  str.split(' ').map((numString) => Number(numString));

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    // 첫 입력 받기
    const [N, M, V] = strToNumArr(input.shift());

    // 2차원 배열 선언
    graph = [...Array(N + 1)].map(() => []);
    visited = [...Array(N + 1)].fill(false);
    let v1, v2;

    // 각 정점들 삽입
    input.forEach((str) => {
      [v1, v2] = strToNumArr(str);
      insertEdge(v1, v2);
      insertEdge(v2, v1);
    });

    result = [];
    dfs(V);
    console.log(result.join(' '));

    visited.fill(false);
    result = [];
    bfs(V);
    console.log(result.join(' '));
  });

// 한 정점에서 연결된 다른 정점들을 오름차순으로 저장
const insertEdge = (vFront, vBack) => {
  let index;
  for (index = 0; index < graph[vFront].length; index++) {
    if (graph[vFront][index] < vBack) {
      continue;
    }

    if (graph[vFront][index] === vBack) {
      index = null;
    }
    break;
  }

  if (index !== null) {
    graph[vFront].splice(index, 0, vBack);
  }
};

// 재귀함수로 구현한 dfs
const dfs = (v) => {
  if (visited[v]) {
    return;
  }

  visited[v] = true;
  result.push(v);
  graph[v].forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(vertex);
    }
  });
};

// 스택버전 dfs
const dfs_stack = (vStart) => {
  const willVisit = [vStart];
  let v;
  while (willVisit.length !== 0) {
    v = willVisit.pop();
    if (!visited[v]) {
      visited[v] = true;
      result.push(v);
      const graphCopy = [...graph[v]];
      willVisit.push(graphCopy.reverse());
    }
  }
};

const bfs = (vStart) => {
  // 방문할 정점을 담는 배열, 처음 방문할 노드로 초기화
  const willVisit = [vStart];
  let v;
  // 방문할 정점이 안 남을 때까지
  while (willVisit.length !== 0) {
    // Queue이므로 shift()
    v = willVisit.shift();
    if (visited[v]) {
      continue;
    }

    visited[v] = true;
    result.push(v);
    // 방문한 정점의 인접 정점들을 보고 방문하지 않았다면 방문할 정점 배열에 삽입
    graph[v].forEach((vertex) => {
      if (!visited[vertex]) {
        willVisit.push(vertex);
      }
    });
  }
};
