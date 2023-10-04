//n의 배수
function solution(num, n) {
  if (num % n === 0) {
    return 1;
  } else if (num % n > 0) {
    return 0;
  }
}

//공배수
function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else if (number % n > 0 || number % m > 0) {
    return 0;
  }
}

// 홀짝에 따라 다른 값 반환하기

function solution(n) {
  var answer = 0;
  return answer;
}
