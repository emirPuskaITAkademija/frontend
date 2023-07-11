import React from "react";

const Pagination = ({ currentPage, totalPageNumber, onPageClick }) => {
  const numberOfShownPageButtons = 10;
  let start = Math.max(
    currentPage - Math.floor(numberOfShownPageButtons / 2),
    1
  );
  let end = Math.max(start + numberOfShownPageButtons - 1, 1);

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageClick(page);
    }
  };

  const renderLeftArrowButton = () => {
    if (start > numberOfShownPageButtons) {
      return (
        <a
          href="#"
          onClick={() => handlePageClick(start - numberOfShownPageButtons)}
        >
          &lt;&lt;
        </a>
      );
    }
    return null;
  };

  const renderRightArrowButton = () => {
    if (end < totalPageNumber) {
      return (
        <a
          href="#"
          onClick={() => onPageClick(start + numberOfShownPageButtons)}
        >
          &gt;&gt;
        </a>
      );
    }
    return null;
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(
        <a
          key={i}
          href="#"
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </a>
      );
    }
  };

  return (
    <div>
      {renderLeftArrowButton}
      {renderPaginationButtons}
      {renderRightArrowButton}
    </div>
  );
};

export default Pagination;
