//접미사인지 확인하기
function solution(my_string, is_suffix) {
  let 접미사확인 = my_string.slice(-is_suffix.length);
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
