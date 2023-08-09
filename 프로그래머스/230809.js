//문자열 뒤집기
function solution(my_string) {
  var answer = my_string.split("").reverse().join("");
  return answer;
}

/**
 * 1. string.prototype.split(): 문자열 부분 문자열의 배열로 나눌 수 있음 > 새배열로 반환
 * split([separator, [,limit]]); limit 파라미터를 사용하면 부분문자열 몇개나 받을지 지정할 수 있음
 *
 * hello를 split으로 사용하면 : ["h", "e", "l", "l", "o"]
 *
 * 2. reverse() 메서드를 사용해 새 배열의 순서를 뒤집기
 * ["o", "l", "l", "e", "h"]
 *3. join() 메서드를 사용해 배열의 모든 요소를 문자열로 결합하기
 *"olleh"
 *
 * */

// 다른 사람 풀이
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
