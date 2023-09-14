let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;
  let input = document.querySelector("input");

  let remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  // if (enteredTextLength >= 50 && enteredTextLength >= 50) {
  //   input.classList.add("warning");
  //   remainingCharsElement.classList.add("warning");
  // } else if (enteredTextLength === 60 && enteredTextLength === 60) {
  //   input.classLiss.add("error");
  //   remainingCharsElement.classList.add("error");
  // } else {
  //   input.classList.remove("warning", "error");
  //   remainingCharsElement.classList.remove("warning", "error");
  // }

  if (enteredTextLength >= 50 && enteredTextLength <= 60) {
    input.classList.add("warning");
    remainingCharsElement.classList.add("warning");
  } else if (enteredTextLength > 60) {
    input.classList.add("error");
    remainingCharsElement.classList.add("error");
  } else {
    input.classList.remove("warning", "error");
    remainingCharsElement.classList.remove("warning", "error");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
