/* array에서 이름을 찾아주는 함수를 만들고 있습니다. 
함수 안에 파라미터로 이름을 집어넣음 그 이름이 출석부에 있으면 
콘솔창에 출력해주는 함수를 만들어봅시다. 어떻게 만들면 될까 */

let 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (출석부[2] === name) {
      console.log("있슴다");
    } else {
      console.log("");
    }
  }
}
console.log(이름찾기("철수"));

// Q.갑자기 구구단을 콘솔창에 출력하고 싶습니다.

function 구구단(a) {
  for (let i = 1; i < 10; i++) {
    console.log(a * i);
  }
}

구구단(1);

// Q.. 평균점수 계산기 만들기

let testBefore = [10, 20, 30, 40, 50];

function solution(기존점수, 현재평균) {
  let average = testBefore.reduce((acc, cur) => acc + cur) / testBefore.length;
  let subtract = Math.abs(average - 현재평균);

  if (subtract > 현재평균) {
    console.log(`평균보다 ${subtract}점이 올랐네요`);
  } else if (subtract < 현재평균) {
    console.log(`평균보다 ${subtract}점이 떨어졌네요, 재수 각!`);
  } else if (subtract == 현재평균) {
    console.log("유지하셨군요! 조금만 힘내보십다!");
  }
}

console.log(solution(testBefore, 20));

/*모의고사 성적 합계
모의고사 성적의 평균
기존-현재 의 값을 현재와 비교, 상승 했다면 값을 넣고 상승했다고 말하기
떨어지면 값을 넣고 떨어졌다고 말하기*/
