let paragraphElement = document.querySelector("p");

function changeText() {
  paragraphElement.textContent = "clicked";
}

paragraphElement.addEventListener("click", changeText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  let inputText = document.querySelector(".text-length");

  inputText.textContent = Math.abs(enteredText.length - 60);

  // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
