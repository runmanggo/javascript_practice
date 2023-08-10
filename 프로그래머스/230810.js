//배열의 유사도
function solution(s1, s2) {
  const similar = s1.filter((x) => s2.includes(x));
  const answer = similar.length;
  return answer;
}

//교집합
const arr1 = ["1", "2", "3", "4", "5"];
const arr2 = ["1", "2"];
console.log(arr1.filter((x) => arr2.includes(x)));
/** arr2에서 includes 함수를 통해서 arr1의 값이 있으면 true 아님 false를 반환하여
 * arr1에 filter 함수를 통해 true 값만 걸러내 새로운 배열을 만든다*/

// 필터 문제 > 조건에 부합하는 모든 요소를 모아서 새로운 배열로 반환하는 함수
let animals = [
  { species: "mammalia", name: "cat" },
  { species: "reptiles", name: "lizard" },
  { species: "amphibia", name: "flog" },
  { species: "mammalia", name: "dog" },
  { species: "amphibia", name: "salamander" },
];

const 정답 = animals.filter((값) => 값.species === "mammalia");

const 이름 = [
  { name: "김길동", age: 76 },
  { name: "김말이", age: 38 },
  { name: "한나라", age: 13 },
  { name: "김민수", age: 21 },
  { name: "이차돈", age: 28 },
  { name: "박준식", age: 62 },
  { name: "박수박", age: 16 },
];

const 김 = 이름.filter((값) => 값.name.startsWith("김"));

//age 키의 값이 10 이상 30 미만인 객체만 뽑아서 다시 새로운 'newArray2' 라는 배열로 만듭니다
const 젊음 = 이름.filter((값) => 이름.age >= 10 && age < 30);
