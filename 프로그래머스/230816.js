//외계행성의 나이
// a는 0, b는 1, c는 2, ..., j는 9입니다.
// 예를 들어 23살은 cd, 51살은 fb로 표현합니다.

function solution(age) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return Array.from(age.toString()) // 주어진 숫자 배열을 문자열로 변환하고, 문자열의 각 문자를 배열로 변환
    .map((v) => alphabet[v]) // 변환된 문자 배열을 알파벳으로 매핑하여 새로운 배열 생성
    .join(""); //문자열로 합쳐서 변환
}

/**
 * input.toString() : 숫자 배열을 문자열로 변환 역할
 * Array.from(age.toString()): 문자열을 배열로 변환 "23" > ['2', '3']
 * .map((v) => alphabet[v]) 배열의 각 요소를 알파벳으로 변환시키는역할
 */

// 내가 원래 코드
function solution(age) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < age.length; i++) {
    const 숫자 = age[i] % 26;
    age.push(alphabet[숫자]);
  }

  return age;
}

// 수정된 코드

function solution(age) {
  const ageArr = String(age).split(""); // 배열로 만듬
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; // 아예 배열로 만듬
  let answer = "";

  for (let i = 0; i < ageArr.length; i++) {
    const index = parseInt(ageArr[i]); // ageArr의 i번째 요소를 정수형으로 변환 (ageArr[i]는 문자열로 된 숫자 데이터).
    //정수형으로 변환한 값을 index 변수에 저장
    answer += alphabet[index]; // alphabet 문자열에서 index 번째 문자를 찾는다 => 찾은 알파벳 문자를 answer에 추가한다.
    //예를 들어 index가 0이면 alphabet에서 첫 번째 문자인 'a'를 찾는다 +=를 사용하면 다른문자를 연결 혹은 추가할 수 있음
  }

  return answer; // 변환된 문자열 반환
}
