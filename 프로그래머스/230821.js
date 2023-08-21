//잘라서 배열로 저장하기
function solution(my_str, n) {
  let strArr = my_str.split("");
  let answer = [];

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(""));
  }
  return answer;
}

//풀고 싶었던 방향

2;
3;
4;
5;
6;
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}
