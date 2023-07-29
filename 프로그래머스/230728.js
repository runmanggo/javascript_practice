//양꼬치
//내가 푼 정답
function solution(n, k) {
  const 양꼬치가격 = 12000;
  const 음료수가격 = 2000;
  const 서비스 = Math.floor(n / 10) * 2000;

  let answer = 양꼬치가격 * n + 음료수가격 * k - 서비스;
  return answer;
}
//남이 푼 정답
function solution(n, k) {
  k -= ~~(n / 10); //양꼬치개수/10 한 값을 절사하여 음료수 개수를 뺀다
  if (k < 0) k = 0; //만약 음료수 개수가 0보다 작으면 음료수 개수는 0이 된다
  return n * 12000 + k * 2000;
}

//~~ 물결물결은 Math.floor() 동일하게 사용된다  절사값

//짝수의 합 > 다시풀어봐야함
function solution(n) {
  let answer2 = 0;
  // return answer;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer2 += i;
    }
  }
  return answer2;
}

// 코드 풀이 기록: answer2를 값을 초기화시킴
// 반복문을 사용하여 i를 0으로 설정, i의 값이 정수n보다 작을때, 증감식일때,
// 만약 i가 짝수일 경우 answer2=answer2+i 값을 리턴
