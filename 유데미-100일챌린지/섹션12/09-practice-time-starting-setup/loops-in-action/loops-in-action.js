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

// 하이라이트 연습
