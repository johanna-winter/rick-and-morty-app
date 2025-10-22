export function newPagination(page, maxPage) {
  const newPagination = document.createElement("span");
  newPagination.classList.add("navigation__pagination");
  newPagination.setAttribute("data-js", "pagination");

  newPagination.innerHTML = `
    ${page}/${maxPage}
`;

  return newPagination;
}
