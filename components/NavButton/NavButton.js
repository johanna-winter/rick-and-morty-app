import { fetchCharacters, maxPage } from "../../index.js";

export function newPrevButton(onClick) {
  const newPrevButton = document.createElement("button");
  newPrevButton.classList.add("button", "button--prev");
  newPrevButton.setAttribute("data-js", "button-prev");
  newPrevButton.setAttribute("type", "button");
  newPrevButton.textContent = "Previous";
  newPrevButton.addEventListener("click", onClick);
  return newPrevButton;
}

export function newNextButton(onClick) {
  const newNextButton = document.createElement("button");
  newNextButton.classList.add("button", "button--next");
  newNextButton.setAttribute("data-js", "button-next");
  newNextButton.setAttribute("type", "button");
  newNextButton.textContent = "Next";
  newNextButton.addEventListener("click", onClick);
  return newNextButton;
}
