//가위 바위 보
// 가위 2 바위 0 보5
// 가위 2: 바위 0
// 바위 0 : 보 5
// 보 5 : 가위 2

function solution(rsp) {
  let arr = Array.from(rsp); //파라미터의 배열로 만들기
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "2") {
      answer += "0"; // 문자열을 연결하여 결과를 누적 시키는 작업
    } else if (arr[i] === "0") {
      answer += "5";
    } else if (arr[i] === "5") {
      answer += "2";
    }
  }
  return answer;
}

/** answer 변수에 초기화 해야함 >  변수를 찾지 못하는 오류 발생
 *
 */

// 다른 사람 풀이

/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
/**객체 사용하여 만든 코드
 * 스프레드 문법[...rsp] > 문자열을 분해  문자열 "abc" 사용하면 ['a', 'b', 'c'] 각각 문자가 배열의 요소로 들어감
 * join 배열 내에 모든 값들을 순서대로 연결 시켜줌
 */

let test = ["a", "b", "c"];
let resultTest = test.join(); // a,b,c
let resultTest1 = test.join(""); // abc
