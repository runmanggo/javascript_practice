//rny_string
function solution(rny_string) {
  let answer = rny_string.replace(/m/gi, "rn");
  return answer;
}
// 정규식 g -> 전체 모든 문자열로 변경
// i -> 영문 대소문자를 무시, 모두 일치하는 패턴 검색 ignore

//평행
function solution(dots) {
  let arr = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const curLean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (arr.includes(curLean)) return 1;
      arr.push(curLean);
    }
  }
  return 0;
}
