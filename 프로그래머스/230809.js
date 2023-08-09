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

/**Spread  > 객체 혹은 배열을 펼칠 수 있다
 * > 기존의 것은 건들지 않고 새로운 객체를 만들때 사용
 */

//특정문자 제거하기
function solution(my_string, letter) {
  var answer = my_string.replaceAll(letter, "");
  return answer;
}

/** 처음에는 replace를 사용함 하지만 두번째 답안때 해당문자 단어에서 한개만 없어졌음,
 * replaceAll 메서드를 알게됨 > letter : 제거하는 문자, my_string에 제거하는 문자에 해당되는 모든 문자를 제거해줌
 */

// 다른 사람 풀이

function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
/**split 인자를 기준으로 분리 > 배열로 변환 */
