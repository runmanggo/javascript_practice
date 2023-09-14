//소수 -> 부동소수점 ,float

let res = 1;
res++; // res=res+1 새로운 값을 반환
res--; // res=res-1
res += 6; // res=res+6 빼기,곱하기 나누기 다 동일함
// ++res -> 기본 값을 반환

let name1 = "jeongyoon";
console.log(name1.length);

let hobbies = ["Game", "cooking", "reading"];
let hobbies1 = hobbies.map((item) => ({ text: item }));
console.log(hobbies1);
/**
 * (3) [{…}, {…}, {…}]
0
: 
{text: 'Game'}
1
: 
{text: 'cooking'}
2
: 
{text: 'reading'}
length
: 
3
[[Prototype]]
: 
Array(0
 */

//다스트럭처링
//const user = ["정윤", "백"];
//const [firstName, lastName] = ["정윤", "백"];
//const firstName = user[0];
//const lastName = user[1];

const { name: userName, age } = {
  name: "yooon",
  age: 24,
};
console.log(userName);
console.log(age);
