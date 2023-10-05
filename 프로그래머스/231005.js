// 조건문자열
function solution(ineq, eq, n, m) {
  let answer = 0;
  if (ineq === ">" && eq === "=") {
    answer = n >= m ? 1 : 0;
  } else if (ineq === "<" && eq === "=") {
    answer = n <= m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    answer = n > m ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    answer = n < m ? 1 : 0;
  }
  return answer;
}

//flag에 따라 다른 값 반환하기
function solution(a, b, flag) {
  if (flag === true) {
    return a + b;
  } else if (flag === false) {
    return a - b;
  }
}

//우리의 친구 삼항연산자를 기억하시오,,,
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

//코드 처리하기
function solution(code) {
  var answer = "";
  return answer;
}
