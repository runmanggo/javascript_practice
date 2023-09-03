//종이 자르기
function solution(M, N) {
  var answer = M * N - 1;
  return answer;
}

//문자열 정렬하기 (2)

function solution(my_string) {
  const 정렬 = my_string.toLowerCase().split("");
  정렬.sort(); // 해당 배열에 고대로 넣어줌

  let answer = 정렬.join("");
  return answer;
}

// 세균증식
function solution(n, t) {
  return n * 2 ** t;
}

function solution(n, t) {
  let answer = n; // 첫 번째 코드는 n 값을 유지 이거 없으면 밑에 리턴에서 바로 값을 반환
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}
