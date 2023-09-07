// 문자열 겹쳐쓰기
// my_string s까지 자른 공간에 overwriting_string 넣기
function solution(my_string, overwrite_string, s) {
  const my_string_arr = [...my_string];

  my_string_arr.splice(s, overwrite_string.length, overwrite_string);

  /**  이상한 글자 시작하는 인덱스를 알려주는 s (start매개변수),
   * overwrite_string 길이만큼 삭제
   * overwrite_string 넣어주기(newItem) */

  return my_string_arr.join("");
}

//문자열 섞기

function solution(str1, str2) {
  res = "";
  for (let i = 0; i < str1.length; i++) {
    res += str1[i] + str2[i];
  }
  return res;
}

//문자 리스트를 문자열로 변환하기
function solution(arr) {
  var answer = arr.join("");
  return answer;
}

// 문자열 곱하기
function solution(my_string, k) {
  var answer = my_string.repeat(k);
  return answer;
}

//더 크게 합치기
function solution(a, b) {
  const plus = String(a) + String(b);
  const plus1 = String(b) + String(a);

  if (plus >= plus1) {
    return Number(plus);
  } else {
    return Number(plus1);
  }
}

/** Math.max 사용해서 풀이 */
function solution(a, b) {
  const plus = String(a) + String(b);
  const plus1 = String(b) + String(a);

  return Math.max(plus, plus1);
}

// 두 수의 연산값 비교하기
function solution(a, b) {
  const plus = String(a) + String(b);
  const plus1 = 2 * a * b;

  return Math.max(plus, plus1);
}
