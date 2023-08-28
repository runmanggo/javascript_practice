//옹알이
// aya", "ye", "woo", "ma" 카운팅 됨 현재 4개가 정확하게 들어가야지 카운팅이됨

function solution(babbling) {
  var answer = 0;
  return answer;
}

// 편지
function solution(message) {
  var answer = message.length * 2;
  return answer;
}

// 직사각형 넓이 구하기
function solution(dots) {
  // x중에서 가장 큰값 - x중에서 가장 작은 값 => x의 길이
  const width =
    Math.max(...dots.map((a) => a[0])) - Math.min(...dots.map((a) => a[0]));

  //y중에서 가장 큰값 - y중에서 가장 작은 값 => y의 길이
  const height =
    Math.max(...dots.map((a) => a[1])) - Math.min(...dots.map((a) => a[1]));

  // 직사각형 넓이 구하는 수학 공식
  let answer = width * height;
  return answer;
}

// 아이스 아메리카노
/** 한잔에 5500원
 * * 몫과 나머지를 구해서 배열에 넣어야함
 */

// 내코드
function solution(money) {
  const coffeeCount = Math.floor(money / 5500);
  const coffeeChanges = money % 5500;
  let answer = [coffeeCount, coffeeChanges];
  return answer;
}

// 남코드
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
