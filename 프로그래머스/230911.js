//rny_string
function solution(rny_string) {
  let answer = rny_string.replace(/m/gi, "rn");
  return answer;
}
// 정규식 g -> 전체 모든 문자열로 변경
// i -> 영문 대소문자를 무시, 모두 일치하는 패턴 검색 ignore

//평행
/** 
 * [a : [x1, y1] b: [x2, y2] c: [x3, y3] d:[x4, y4]]
 * 케이스 1 (a,b / c,d): [x1, y1], [x2, y2] / [x3, y3] [x4, y4]
 * 케이스 2 (a,c / b,d) : [x1, y1],[x3, y3] /[x2, y2],[x4, y4]
 * 케이스 3 (c,d / a,d) : [x3, y3],[x4, y4] /[x1, y1],[x4, y4]
*/
function solution(dots) {
  // 직선의 기울기 (y1 - y2) / (x1 - x2)

  let answer = 0;
  
  let a = Math.abs(dots[0][1] - dots[1][1]) / Math.abs(dots[0][0] - dots[1][0]); 
  let b = Math.abs(dots[2][1] - dots[3][1]) / Math.abs(dots[2][0] - dots[3][0]);
  //((a,b / c,d))
  if (a - b === 0) {
      answer = 1;
  }
  
  let c = Math.abs(dots[0][1] - dots[2][1]) / Math.abs(dots[0][0] - dots[2][0]);
  let d = Math.abs(dots[1][1] - dots[3][1]) / Math.abs(dots[1][0] - dots[3][0]);
  //(a,c / b,d)
  if (c - d === 0) {
      answer = 1;
  }
  
  let e = Math.abs(dots[0][1] - dots[3][1]) / Math.abs(dots[0][0] - dots[3][0]);
  let f = Math.abs(dots[1][1] - dots[2][1]) / Math.abs(dots[1][0] - dots[2][0]);
  //(c,d / a,d)
  if (e - f === 0) {
      answer = 1;
  }
  
  return answer;
}
