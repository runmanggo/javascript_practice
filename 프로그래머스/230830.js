//문자열 출력하기
function 출력(str) {
  let answer = console.log(str);
  return answer;
}

//문자열 반복해서 출력하기

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});

//대소문자 바꿔서 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];

  const answer = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer.push(str[i].toLowerCase());
    } else if (str[i] === str[i].toLowerCase()) {
      answer.push(str[i].toUpperCase());
    }
  }
  console.log(answer.join(""));
});

//특수문자 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = String.raw`!@#$%^&*(\'"<>?:;`;

rl.on("close", function () {
  console.log(answer);
});
