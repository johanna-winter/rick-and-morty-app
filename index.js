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
const maxPage = 1;
const page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  const apiUrl = "https://rickandmortyapi.com/api/character/";

  const response = await fetch(apiUrl);
  const data = await response.json();
  const characters = data.results;
  //console.log(data.results);

  // console.log(characters);
  characters.forEach((character) => {
    const newCard = createCharacterCard(character);
    // newCard.textContent = character.name;
    cardContainer.append(newCard);
  });
  console.log(characters[0].name);

  createCharacterCard();
  cardContainer.innerHTML = "";
}

fetchCharacters();

// cardContainer.append(createCharacterCard());
