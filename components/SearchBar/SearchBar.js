export function newSearchBar(onSubmit) {
  const newSearchBar = document.createElement("form");
  newSearchBar.classList.add("search-bar");
  newSearchBar.setAttribute("data-js", "search-bar");
  newSearchBar.innerHTML = `<input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>`;
  newSearchBar.addEventListener("submit", onSubmit);

  return newSearchBar;
}
