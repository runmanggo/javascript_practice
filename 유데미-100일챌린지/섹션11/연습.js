function calculateAdultYears(age) {
  let res = age - 20;
  return res;
}
console.log(calculateAdultYears(32));

//1
let onlineCourse = "udemy";
let onlineCoursePrice = "15000";
let 목표 = [
  "자바스크립트 이해도 높이기",
  "코드 혼자 구성할 수 있기",
  "웹개발자 되기",
];

//2
// alert(onlineCourse);
// alert(onlineCoursePrice);
// alert(목표);

//3
let groupObj = {
  onlineCourse,
  onlineCoursePrice,
  목표,
};
console.log(groupObj);
console.log(groupObj.onlineCourse);
console.log(groupObj.onlineCoursePrice);

//4
console.log(groupObj.목표[1]);

//5

function getItem(arr, arrIndex) {
  let arrEle = arr[arrIndex];
  return arrEle;
}
console.log(getItem(groupObj.목표, 1));

let person = {
  name: "yoon", //프로퍼티
  greet() {
    console.log("hello");
  }, //매서드
};

person.greet();
