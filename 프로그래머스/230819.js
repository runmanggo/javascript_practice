//중복된 문자 제거
function solution(my_string) {
  var answer = my_string
    .split("") //
    .filter((value, index, my_string) => my_string.indexOf(value) === index)
    .join("");
  return answer;
}

/**
 * .filter() 메서드의 콜백 함수 내부에서는 중복된 값인지 확인하고, 중복되지 않은 값을 필터링
 * my_string.indexOf(value) 는 my_string 배열 내의 value의 인덱스를 찾는다.
 * (value)이 해당 값이 처음 등장하는 인덱스(index)와 같은지를 확인한다
 * 만약 같다면, 현재 요소는 처음 등장한 위치에 있으므로 중복되지 않은 값으로 간주되어 남겨진다.
 *
 * indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
 * string.indexOf(searchvalue, position)
 * searchvalue : 필수 입력값, 찾을 문자열
 * position : optional, 기본값은 0, string에서 searchvalue를 찾기 시작할 위치
 *
 * 찾는 문자열이 없으면 -1을 리턴한다
 * 문자열을 찾을 때 대소문자를 구분한다.
 */

/** 남의 코드 */
function solution(my_string) {
  return [...new Set(my_string)].join("");
}

/**Set 객체는 중복되지 않는 유일한 값들의 집합이다.
 * Set 생성자 함수는 인수로 이터러블을 받는다.
 */

const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) {1, 2, 3}
