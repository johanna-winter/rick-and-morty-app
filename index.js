import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { getPagination } from "./components/NavPagination/NavPagination.js";

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
export const maxPage = 42;
export let page = 1;
const searchQuery = "";

// getPagination(maxPage);
const dynamicNav = getPagination();
pagination.append(dynamicNav);

export async function fetchCharacters() {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const characters = data.results;
  const pages = data.info.pages;

  // for (let index = 1, index <= 42, index++) {
  // }
  // console.log(data.results);

  // console.log(characters);
  characters.forEach((character) => {
    const newCard = createCharacterCard(character);
    // newCard.textContent = character.name;
    cardContainer.append(newCard);
  });

  pages.forEach((page) => {
    const dynamicNav = getPagination(page);
    pagination.append(dynamicNav);
  });
  console.log(data);

  getPagination();

  createCharacterCard();
  cardContainer.innerHTML = "";
}

fetchCharacters();

//Button add event listeners
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
nextButton.addEventListener("click", () => {
  if (page < 1) {
    page++;
    fetchCharacters();
  }
});

// cardContainer.append(createCharacterCard());
