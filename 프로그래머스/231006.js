//원소들의 곱과 합
function solution(num_list) {
  let 더하기 = 0;
  let 곱하기 = 1;

  for (let i of num_list) {
    더하기 += i;
    곱하기 *= i;
  }
  return 곱하기 < 더하기 ** 2 ? 1 : 0;
}

//n 번째 원소까지
function solution(num_list, n) {
  var answer = num_list.slice(0, n);
  return answer;
}

//정수 부분
function solution(flo) {
  return parseInt(flo);
}
