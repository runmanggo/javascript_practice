//369게임

order = 29423;

function solution(order) {
  const orderArr = Array.from(order.toString()).map(Number);
  let answer = 0;

  for (let i = 0; i < orderArr.length; i++) {
    if (orderArr[i] != 0 && orderArr[i] % 3 === 0) {
      answer += 1;
    }
  }
  return answer;
}

/**
 * 해당 인덱스의 값이 0일 때에도 3으로 나누면 0이 나온다는 것 생각하고 짯어야함
 * != 는 두 값이 서로 같지 않은지를 비교
 * 같지 않으면 true를 반환하고, 같으면 false를 반환
 * orderArr[i] != 0 orderArr의 인덱스의 숫자가 0이 아닐때 ~~
 *
 */

function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}

/**입력한 숫자를 먼저 문자열로 만든뒤에, ("" + order) => 숫자를 문자열로
 * split() 함수의 정규식 /[369]/를 사용하여 3, 6, 9를 기준으로 분리
 * split 함수 string.split(separator, limit);
 * 문자, 문자열을 'separator'라는 구분자를 기준으로 잘라
 * 'limit' 크기 이하의 배열에 저장하여 리턴 -> limit 지정안하면 통으로 한개 반환함
 *
 * 정규식 > 문자 패턴을 표현하는 문자열 / 일정한 규칙에 따라 생성
 * 정규식은 / 기호로 둘러싸여 있는 패턴 문자열
 *
 * length - 1 빈배열 제외 하려고
 */

const str = "red yellow green blue";
const arr = str.split();
console.log(str); //red yellow green blue
console.log(arr.length); // 1
