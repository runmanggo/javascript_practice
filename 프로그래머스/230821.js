//잘라서 배열로 저장하기
function solution(my_str, n) {
  let strArr = my_str.split("");
  let answer = [];

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(""));
  }
  return answer;
}

// while 루프 조건 strArr 배열 길이가 0보다 큰 경우에만 반복한다
//

//풀고 싶었던 방향
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}

/**
 * 내 코드의 문제점, for 문을 사용했을때 증감값을 i++ 으로 만들고 slice 괄호안을 (0, n)으로 사용
 * 코드 제대로 하려면 인덱스가 0부터 시작하니깐 i+=n 문자열짤라야하는 개수 n 을 i 에다 더해서
 * 문자를 일정하게 잘라준다.
 * 그래고 res 라는 빈배열에 push를 사용하여 my_str 배열을 slice 문법을 사용해서 작성
 *
 */
