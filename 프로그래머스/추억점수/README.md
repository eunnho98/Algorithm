js array 함수에 대해 더 공부를 해야겠다.

- reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환

  - arr.reduce(callback[, initialValue])
  - callback 함수는 보통 두 가지 인수를 가짐
    - accumulator: 콜백의 반환값을 누적
    - currentValue: 처리할 현재 요소
  - initialValue: 값을 주면 최초의 처리할 요소를 지정, 값을 안주면 첫 번째 요소가 됨

- map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

- filter: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

  - 요소가 주어졌을 때 반환값이 true라면 그 요소들을 모아 반환
  - true/false를 반환하는 includes와 같이 자주 쓰임

- 만약 return ele > 2가 조건이라면 map은 boolean의 배열을 반환, filter은 실제 ele을 반환

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
