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
  let answer = 0;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i += 2) {
      answer += Math.pow(i, 2);
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
    }
  }
  return answer;
}
