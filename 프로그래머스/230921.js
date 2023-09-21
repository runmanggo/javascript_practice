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
