//숫자 합산

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSun() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUptoNumber = 0;
  for (let i = 0; i <= enteredNumber; i++) {
    sumUptoNumber += i;
  }
  const resP = document.getElementById("calculated-sum");
  resP.textContent = sumUptoNumber;
  resP.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSun);

//하이라이트
const hightlightLinkBtnElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a"); //일치하는 모든 요소

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}
hightlightLinkBtnElement.addEventListener("click", highlightLinks);

//display user data
const dummyUserData = {
  firstName: "Jeong",
  lastName: "Yoon",
  age: 26,
};
const displayUserDataBtnElement = document.querySelector("#user-data button");

function displayplayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}
displayUserDataBtnElement.addEventListener("click", displayplayUserData);

// 통계
const rollDiceBtnElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; //Math.floor():5.64 => 5
}
function deriveNumOfDiceRolls() {
  const targetNum = document.getElementById("user-target-number");
  const diceRollList = document.getElementById("dice-rolls");

  const enterdNum = targetNum.value;
  diceRollList.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNum = rollDice(); // 입력한 숫자가 돌린 숫자와 같을때 까지 굴림
    // if (rolledNum == enterdNum) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls = numberOfRolls + 1; // numberOfRolls++ 굴림 횟수
    const newRollListelement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNum;
    newRollListelement.textContent = outputText;
    diceRollList.append(newRollListelement);
    hasRolledTargetNumber = rolledNum == enterdNum;
    /**
     * 굴린 주사위 결과가 입력한 숫자와 같다면
     * hasRolledTargetNumber를 true로 설정하여 루프를 종료
     */
  }
  const ouputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumElement = document.getElementById(
    "output-target-number"
  );
  ouputTotalRollsElement.textContent = enterdNum; // 넣은 값
  outputTargetNumElement.textContent = numberOfRolls; // 굴린 값
}
rollDiceBtnElement.addEventListener("click", deriveNumOfDiceRolls);
