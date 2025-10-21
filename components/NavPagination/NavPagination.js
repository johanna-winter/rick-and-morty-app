import { fetchCharacters } from "../../index.js";
import { createCharacterCard } from "../CharacterCard/CharacterCard.js";
import { maxPage } from "../../index.js";
import { page } from "../../index.js";

export function getPagination(page = 1) {
  const newNav = document.createElement("span");
  newNav.classList.add("navigation__pagination");
  newNav.textContent = `${page}/${maxPage}`;
  return newNav;
}
