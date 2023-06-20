const baseUrl = "http://localhost:8080";

function loadPage(page, pageSize) {
  const adresa = `${baseUrl}/api/film?page=${page}&pageSize=${pageSize}`;
  const zahtjev = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = fetch(adresa, zahtjev); //Promise<Response>
  promise
    .then((response) => response.json())
    .catch((error) => alert(error))
    .then(handleFilmPage)
    .catch((error) => alert(error));
}

//filmPageResponse -> response.json()
function handleFilmPage(filmPageResponse) {
  console.log(filmPageResponse.items);
  addFilmsToTableBody(filmPageResponse.items);
  console.log(filmPageResponse.totalPageNumber);
  createPagination(filmPageResponse.totalPageNumber);
}

function addFilmsToTableBody(films) {
  const tBody = document.querySelector("#data-table tbody");
  tBody.innerHTML = "";
  for (const film of films) {
    const filmRow = document.createElement("tr");
    filmRow.innerHTML = `
        <td>${film.film_id}</td>
        <td>${film.title}</td>
        <td>${film.description}</td>
        <td>${film.release_year}</td>
        <td>${film.length}</td>
        <td>${film.rating}</td>
        <td>${film.special_features}</td>
    `;
    tBody.append(filmRow);
  }
}
const numberOfShownPageButtons = 10;
let start;
let end;

function createPagination(totalPageNumber) {
  const paginationDiv = document.getElementById("paginationDiv");
  paginationDiv.innerHTML = "";
  start = start ? start : 1;
  end = end ? end : numberOfShownPageButtons;
  end = end > totalPageNumber ? totalPageNumber : end;
  if (start > numberOfShownPageButtons) {
    const leftArrowLink = document.createElement("a");
    leftArrowLink.textContent = "<<";
    leftArrowLink.addEventListener("click", () => {
      start = start - numberOfShownPageButtons;
      //201-10=191
      //191+10-1
      end = start + numberOfShownPageButtons - 1;
      end = totalPageNumber < end ? totalPageNumber : end;
      createPagination(totalPageNumber);
    });
    paginationDiv.appendChild(leftArrowLink);
  }
  for (let i = start; i <= end; i++) {
    const pageButtonLink = document.createElement("a");
    pageButtonLink.href = "#";
    pageButtonLink.textContent = i;
    pageButtonLink.addEventListener("click", () =>
      loadPage(i, pageSizeInput.value)
    );
    paginationDiv.appendChild(pageButtonLink);
  }
  if (end < totalPageNumber) {
    const rightArrowLink = document.createElement("a");
    rightArrowLink.textContent = ">>";
    rightArrowLink.addEventListener("click", () => {
      start = start + numberOfShownPageButtons;
      end = end + numberOfShownPageButtons;
      end = totalPageNumber < end ? totalPageNumber : end;
      createPagination(totalPageNumber);
    });
    paginationDiv.appendChild(rightArrowLink);
  }
}

const pageSizeInput = document.querySelector("#pageSizeInput");
pageSizeInput.addEventListener("change", () => {
  start = 1;
  end = 10;
  loadPage(1, pageSizeInput.value);
});
loadPage(1, pageSizeInput.value);
