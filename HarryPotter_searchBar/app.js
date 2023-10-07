const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (event) => {
  const searchString = event.target.value.toLowerCase();
  const filteredCharacters = hpCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString)
    );
  });
  displayCharaters(filteredCharacters);
});

const harryApi = fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    hpCharacters = data;
    displayCharaters(hpCharacters);
  });

const displayCharaters = (characters) => {
  const htmlString = characters
    .map(
      (character) =>
        `<li class="character"> 
        <h2>${character.name}</h2>
        <p>House: ${character.house}</p>
        <img src="${character.image}"></img>
        </li>`
    )
    .join("");
  charactersList.innerHTML = htmlString;
};
