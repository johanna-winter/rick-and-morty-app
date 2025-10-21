import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

export async function fetchCharacters() {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;

  cardContainer.innerHTML = "";

  const response = await fetch(apiUrl);
  const data = await response.json();
  const characters = data.results;
  pagination.textContent = `${page}/${maxPage}`;

  // console.log(data.results);

  // console.log(characters);
  characters.forEach((character) => {
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  });

  console.log(data);
}

fetchCharacters();

//Search bar event listener

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.value;
  searchQuery.textContent = searchQuery.target.value;
});

//Button add event listeners
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
  }
  fetchCharacters();
});
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
  }
  fetchCharacters();
});

// cardContainer.append(createCharacterCard());
