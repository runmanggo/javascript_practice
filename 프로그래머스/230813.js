//배열회전시키기
function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop()); // 마지막 요소를 꺼내서 unshift 맨 앞으로 꺼냄
  } else if (direction === "left") {
    numbers.push(numbers.shift()); // 맨 처음 요소를 꺼내서, push 맨뒤에 추가
  }
  return numbers;
}

// unshift 매서드 새로운 요소를 배열의 맨 앞쪽에 추가, 새로운 길이로 반환
