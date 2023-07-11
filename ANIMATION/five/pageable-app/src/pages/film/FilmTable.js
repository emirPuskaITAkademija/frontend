import React, { useState, useEffect } from "react";
import styles from "./film.module.css";
import FilmRow from "./FilmRow";
import Pagination from "./Pagination";

const FilmTable = () => {
  const baseUrl = "http://localhost:8080";
  const [films, setFilms] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let start;
  let end;
  const numberOfShownPageButtons = 10;

  useEffect(() => loadPage(currentPage, pageSize), [currentPage, pageSize]);

  const loadPage = (page, pageSize) => {
    const adresa = `${baseUrl}/api/film?page=${page}&pageSize=${pageSize}`;
    const zahtjev = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(adresa, zahtjev)
      .then((response) => response.json())
      .catch((error) => alert(error))
      .then(handleFilmPage)
      .catch((error) => alert(error));
  };

  const handleFilmPage = (filmPageResponse) => {
    setFilms(filmPageResponse.items);
    setTotalPageNumber(filmPageResponse.totalPageNumber);
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = event.target.value;
    setPageSize(newPageSize);
  };

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  const handleLeftArrowClick = () => {
    start = start - numberOfShownPageButtons;
    end = start + numberOfShownPageButtons - 1;
    end = totalPageNumber < end ? totalPageNumber : end;
    createPagination(totalPageNumber);
  };

  const handleRightArrowClick = () => {
    console.log("DESIO SE KLIK");
    start = start + numberOfShownPageButtons;
    end = start + numberOfShownPageButtons - 1;
    end = totalPageNumber < end ? totalPageNumber : end;
    createPagination(totalPageNumber);
  };

  const createPagination = (totalPageNumber) => {
    start = start ? start : 1;
    end = end ? end : numberOfShownPageButtons;
    end = end > totalPageNumber ? totalPageNumber : end;

    const paginationButtons = [];
    if (start > numberOfShownPageButtons) {
      paginationButtons.push(
        <a
          key="<<-link"
          onClick={handleLeftArrowClick}
          className={styles.paginationButton}
        >
          &lt;&lt;
        </a>
      );
    }
    for (let i = start; i <= end; i++) {
      paginationButtons.push(
        <a
          key={`page-${i}-link`}
          onClick={() => setCurrentPage(i)}
          className={styles.paginationButton}
        >
          {i}
        </a>
      );
    }

    if (end < totalPageNumber) {
      paginationButtons.push(
        <a
          key=">>-link"
          onClick={handleRightArrowClick}
          className={styles.paginationButton}
        >
          &gt;&gt;
        </a>
      );
    }

    return paginationButtons;
  };

  return (
    <div>
      <label htmlFor="pageSizeInput">Choose number of films per page:</label>
      <select
        id="pageSizeInput"
        name="pageSizeInput"
        onChange={handlePageSizeChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <table id="data-table">
        <thead>
          <tr>
            <th scope="col">Film ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Release Year</th>
            <th scope="col">Length</th>
            <th scope="col">Rating</th>
            <th scope="col">Special Features</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <FilmRow key={film.film_id} film={film} />
          ))}
        </tbody>
      </table>
      <div id="paginationDiv">{createPagination(totalPageNumber)}</div>
    </div>
  );
};

export default FilmTable;

/* 
      <Pagination
        currentPage={currentPage}
        totalPageNumber={totalPageNumber}
        onPageClick={handlePaginationClick}
      />
*/

/* const addFilmsToTableBody = (filmovi) => {
    return filmovi.map((film) => (
      <tr key={film.film_id}>
        <td>{film.film_id}</td>
        <td>{film.title}</td>
        <td>{film.description}</td>
        <td>{film.release_year}</td>
        <td>{film.length}</td>
        <td>{film.rating}</td>
        <td>{film.special_features}</td>
      </tr>
    ));
  };*/
