export function createCharacterCard(character) {
  const newLi = document.createElement("li");
  newLi.classList.add("card");

  newLi.innerHTML = `
   
          <div class="card__image-container">
            <img
              class="card__image"
              src="${character.image}"
              alt="${character.name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${character.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">${character.status}</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">${character.type}</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${character.episode.length}</dd>
            </dl>
          </div>
`;
  return newLi;
}
