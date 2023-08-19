//중복된 문자 제거

function solution(my_string) {
  var answer = my_string
    .split("")
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
 * position : optional, 기본값은 0, string에서 searchvalue 를 찾기 시작할 위치
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
 * [...new Set(my_string)]: 스프레드 문법으로 Set을 다시 배열로 변환
 */

const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) {1, 2, 3}

//A로 B 만들기
// before의 순서를 바꾸어 after를 만들 수 있으면 1을
//만들 수 없으면 0

function solution(before, after) {
  function reverseString(after) {
    return after.split("").reverse().join("");
  }

  if (before === reverseString(after)) {
    return 1;
  } else {
    return 0;
  }
}

// 내가 작성한  위코드는 완벽한 답은 아님

function solution(before, after) {
  // 정렬하여 각각 문자열로 분해한 뒤 정렬
  before = [...before].sort().join(); // 문자열 배열을 분해하고 다시 문자열로 합침
  after = [...after].sort().join();
  return before === after ? 1 : 0;
}
// 문자열을 정렬하여 순서를 맞춘 다음, 정렬된 문자열이 같은지를 비교하여 대칭 관계를 확인하는 것
