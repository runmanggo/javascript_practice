//배열의 평균값

function solution(numbers) {
  var sum = numbers.reduce((acc, cur) => acc + cur, 0);
  let answer = sum / numbers.length;
  return answer;
}

//머쓱이보다 키 큰 사람
// 머쓱이 키 height  / 반친구들  array
let array = [149, 180, 192, 170];

function solution(array, height) {
  const count = array.filter((array) => array > height);
  const answer1 = count.length;
  return answer1;
}
