//배열 두배 만들기
function solution(numbers) {
  let answer = numbers.map((numbers, i) => numbers * 2);
  return answer;
}

//다른 사람 풀이
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
