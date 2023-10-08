//등수 매기기
function solution(score) {
  let 평균 = score.map((v) => (v[0] + v[1]) / 2); // 평균을 내고
  let 순서 = [...평균].sort((a, b) => b - a);
  // 평균 복제하고 오름차순으로 정렬, sort는 원본 훼손
  return 평균.map((v) => 순서.indexOf(v) + 1);
  // map 을 사용해서 정렬된 인덱스들에 +1 을 하여 리턴 (배열은 0부터 시작하기 때문에)
}

// 다음에 올 숫자
// 등비인지 등차인지 일단 한개만 true로 검사한다
/**
 * 등차 수열인것 부터 검사를해서, 배열의 두번째와 첫번째 뺀값과 세번째와 두번째 뺀 값이 동일한지 본다
 */
function solution(common) {
  const 등차수열 = common[1] - common[0] === common[2] - common[1];
  if (등차수열) {
    return common[common.length - 1] + common[1] - common[0];
    /**
     * 배열 common의 마지막 항목 + 등차수열의 공차 = [1, 2, 3, 4] =>4+1=>5
     */
  } else {
    return (common[common.length - 1] * common[1]) / common[0];
  }
  // 배열 맨마지막 선택하고 제일 앞에 요소만 곱햇을때는 뭔 문제가 있는지 안되서
  // 첫번째 배열과 두번째 배열을 나눈 값을 곱했다 [2, 4, 8] => 4/2=>2
}

//모음제거
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
//정규식으로 aeiou을 공백으로 치환

//저주의 숫자3
function solution(n) {
  let arr = [];

  for (let i = 1; i < 1000; i++) {
    if (i % 3 !== 0 && !i.toString().split("").includes("3")) {
      arr.push(i);
    }
    // 3의 배수가 아니거나, 3이 포함되지 않은 글자들을 arr에 넣음
    /**
     * [1, 2, 4, 5, 7, 8, 10, 11, 14, 16, 17, 19, 20, 
     * 22, 25, 26, 28, 29, 40, 41, 44, 46, 47, 49, 50, 52, 55, 
     * 56, 58, 59, 61, 62, 64, 65, 67, 68, 70, 71, 74, 76, 77, 
     * 79, 80, 82, 85, 86, 88, 89, 94, 95, 97, 98]

     */
  }
  return arr[n - 1]; // 인덱스가 0부터 시작하니깐
}
