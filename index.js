import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { newPrevButton } from "./components/NavButton/NavButton.js";
import { newNextButton } from "./components/NavButton/NavButton.js";
import { newPagination } from "./components/NavPagination/NavPagination.js";
import { newSearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');

// States
export let maxPage = 42;
export let page = 1;
export let searchQuery = "";

const pagination = newPagination(page, maxPage);
export async function fetchCharacters() {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;

  cardContainer.innerHTML = "";

  const response = await fetch(apiUrl);
  const data = await response.json();
  const characters = data.results;
  maxPage = data.info.pages;
  pagination.textContent = `${page}/${maxPage}`;

  characters.forEach((character) => {
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  });

  console.log(data);
}

export function prevPage() {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
}

export function nextPage() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
}

const prevButton = newPrevButton(prevPage);
const nextButton = newNextButton(nextPage);

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

fetchCharacters();

export function searchBarSubmit(event) {
  event.preventDefault();
  const input = event.target.querySelector(".search-bar__input");
  console.log(event.target);
  console.log(input);
  searchQuery = input.value.toLowerCase();
  page = 1;
  fetchCharacters();
}

const searchBar = newSearchBar(searchBarSubmit);
searchBarContainer.append(searchBar);
