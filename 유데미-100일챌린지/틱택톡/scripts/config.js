function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

/**
 * FormData의 입력된 값을 내장 메서드인 get으로 input의 "playername" 으로 넣어주기
 */

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // '      ' => ''

  if (!enteredPlayername) {
    // enteredPlayername === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  // input에 입력한 값을 h2에 넣어줌
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  //app.js에서의 객체를 가지고 와서 해당 인덱스 번호를 맞춰줌
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
