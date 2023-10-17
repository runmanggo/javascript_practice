//문자열안에 문자열
function solution(str1, str2) {
  if (str1.includes(str2) === true) {
    return 1;
  } else {
    return 2;
  }
}

//특이한 정렬
function solution(numlist, n) {
  numlist.sort((a, b) => {
    const aEle = Math.abs(a - n);
    const bEle = Math.abs(b - n);
    // 숫자 a와 b가 주어진 기준점 n으로부터 얼마나 떨어져 있는지를 나타내는 절대값

    if (aEle === bEle) {
      return b - a; // 더 큰 수가 앞에 오도록
    }
    return aEle - bEle;
  });

  return numlist;
}

/**
 *'n'이 10이고 배열에 들어있는 원소들이 [8,13,15]라면:

첫 번째 원소인 '8'은 '10'에서 '-2'(=8-10)만큼 떨어져 있습니다. 절대값 함수인 Math.abs()를 사용하여 이 값을 '+2'로 변환합니다.
두 번째 원소인 '13'은 '10'에서 '+3'(=13-10)만큼 떨어져 있습니다.
세 번째 원소인 '15'는 '10'에서 '+5'(=15-10)만큼 떨어져 있습니다.
따라서 이 로직에 따르면 배열은 [8 (n과의 거리:2), 13 (거리:3), 15 (거리:5)]와 같이 정렬될 것입니다.
 */
