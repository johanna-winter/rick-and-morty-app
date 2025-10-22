import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { newPrevButton } from "./components/NavButton/NavButton.js";
import { newNextButton } from "./components/NavButton/NavButton.js";
import { newPagination } from "./components/NavPagination/NavPagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchInput = document.querySelector(".search-bar__input");
const navigation = document.querySelector('[data-js="navigation"]');
//weil das nicht mehr in index html steht, nur bei navButton.js
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');

// States
export let maxPage = 42;
export let page = 1;
export let searchQuery = "";
//let testPagination;
const pagination = newPagination(page, maxPage);
export async function fetchCharacters() {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;

  cardContainer.innerHTML = "";

  const response = await fetch(apiUrl);
  const data = await response.json();
  const characters = data.results;
  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage}`;

  // console.log(data.results);
  // console.log(characters);

  characters.forEach((character) => {
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  });

  console.log(data);
}

// fetchCharacters();

//Button add event listeners
export function prevPage() {
  //addEventListener("click", (onClick) => {
  if (page > 1) {
    page--;
  }
  fetchCharacters();
}

export function nextPage() {
  //nextButton.addEventListener("click", (onClick) => {
  if (page < maxPage) {
    page++;
  }
  fetchCharacters();
}
//testPagination = newPagination(page, maxPage);
//pagination.textContent = `${page}/${maxPage}`;
const prevButton = newPrevButton(prevPage);
const nextButton = newNextButton(nextPage);

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

fetchCharacters();
//Search bar event listener

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchInput.value.toLowerCase();
  page = 1;
  fetchCharacters();
  // searchQuery = event.target.value;
  // searchQuery.textContent = searchQuery.target.value;
  // -> funktioniert nicht, weil ein form tag kein value hat, sondern nur das input html tag
});
