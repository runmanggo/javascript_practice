//중복된 숫자 개수
function solution(array, n) {
  const count = array.filter((array) => array == n);
  const answer = count.length;
  return answer;
}
