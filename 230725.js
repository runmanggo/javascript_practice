//JavaScript 알고리즘 100일 챌린지 1번째 도전

//내가 짠 코드
// function solution(num1, num2) {
//   let answer = parseInt(num1 / num2);
//   return answer;
// }

// console.log(7/2);

function solution(num1, num2) {
  let answer = ~~(num1 / num2);
  return answer;
}

//내가 짠 코드

// function solution(num1, num2) {
//   if (num1 == num2) {
//     answer = Number(1);
//     return answer;
//   } else if (num1 != num2) {
//     answer = Number(-1);
//   }
//   return answer;
// }

function solution(num1, num2) {
  let answer = 0;
  if (num1 === num2) {
    answer = 1;
  } else {
    answer = -1;
  }
}
