//문자열을 정수로 변환하기

function solution(n_str) {
  var answer = +n_str;
  return answer;
}

//조건에 맞게 수열 변환하기 3

function solution(arr, k) {
  let answer = [];

  if (k % 2 === 0) {
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i] + k);
    }
  } else {
    for (let j = 0; j < arr.length; j++) {
      answer.push(arr[j] * k);
    }
  }
  return answer;
}
