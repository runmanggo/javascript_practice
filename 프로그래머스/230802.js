//피자 나눠 먹기 (1)
//피자 1 = 7 조각
// 사람수 = n

function solution(n) {
  const answer = Math.ceil(n / 7);
  return answer;
}

//소수점 올림 - Math.ceil() : 소수점이 있어도 모두 올림해버림

//--------------------------------------

/**num_list =정수
 * num_list의 원소중 짝수, 홀수 개수를 담은 배열 리턴 */

function solution(num_list) {
  let answer = [];
  let 짝수 = 0;
  let 홀수 = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) {
      짝수++;
    } else {
      홀수++;
    }
    answer = [짝수, 홀수];
  }
  return answer;
}

/**코드 풀이
 * answer 안에 빈배열을 만들어줌
 * 짝수 = 0 , 홀수 = 0으로 설정
 *
 * for 반복문을 사용해서 num_list의 길이를 i(num_list 인덱스)보다 작게 설정함,num_list 인덱스만큼 증가
 * 안에 if문을 사용해서 조건에 따라 짝수 홀수로 갈리게 만듬
 * 마지막에 answer 빈배열에 나온 값들을 넣어서 답을 리턴함
 */

/**남이 한 코드 */
function solution(num_list) {
  let answer = [0, 0];
  for (let 숫자 of num_list) {
    answer[숫자 % 2] += 1; // 변수 answer 빈 배열안에 넣은것
  }
  return answer;
}
/**for ...of  요소 
 * num_list의 배열 전체의 배열요소를 a로 정했을때, 
  나머지수가 0이기에 += 연산자를 사용하여 개수를 구함 */
function solution(num_list) {
  const 짝수 = num_list.filter((n) => n % 2 === 0).length;
  return [짝수, num_list.length - 짝수];
}
