const charactersList = document.getElementById("charactersList");

const harryApi = fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((data) => displayCharaters(data));

const displayCharaters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `<li class="character"> <h2>${character.name}</h2>
    <p>House: ${character.house}</p>
    <img src="${character.image}"></img>
</li>`;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};
