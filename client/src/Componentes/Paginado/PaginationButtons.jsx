// PaginationButtons.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaginationButtons.css";

const PaginationButtons = ({ currentPage, totalPages, setCurrentPage }) => {
  const navigate = useNavigate();

  // Controlar que currentPage siempre esté dentro del rango válido
  useEffect(() => {
    setCurrentPage((prevPage) => Math.min(Math.max(prevPage, 1), totalPages));
  }, [setCurrentPage, totalPages]);

  const handlePage = (e) => {
    const buttonValue = e.target.name;
    if (!isNaN(parseInt(buttonValue))) {
      setCurrentPage(parseInt(buttonValue));
      navigate(`/productos/page/${parseInt(buttonValue)}`);
    }
    if (e.target.name === "PREV") {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      navigate(`/productos/page/${parseInt(currentPage - 1)}`);
    }
    if (e.target.name === "NEXT") {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
      navigate(`/productos/page/${parseInt(currentPage + 1)}`);
    }
  };

  const pages =
    totalPages <= 2
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : Array.from({ length: 5 }, (_, i) => currentPage + i - 2).filter(
          (page) => page > 0 && page <= totalPages
        );
  const hideButtonA = currentPage <= 2;
  const hideButtonB = currentPage >= totalPages - 1;

  return (
    <div className="homebtnpaginado">
      <button disabled={currentPage === 1} onClick={handlePage} name="1">
        1
      </button>
      <button
        className="homebtnprev"
        disabled={currentPage === 1}
        onClick={handlePage}
        name="PREV"
      >
        PREV
      </button>
      {!hideButtonA && <button className="homebtnpoints">...</button>}
      {pages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "current-page" : ""}
          onClick={handlePage}
          name={page}
        >
          {page}
        </button>
      ))}
      {totalPages === 2 && (
        <button
          key="2"
          disabled={currentPage === 2}
          onClick={handlePage}
          name="2"
        >
          2
        </button>
      )}
      {!hideButtonB && <button className="homebtnpoints">...</button>}
      <button
        className="homebtnnext"
        disabled={currentPage === totalPages}
        onClick={handlePage}
        name="NEXT"
      >
        NEXT
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={handlePage}
        name={totalPages}
      >
        {totalPages}
      </button>
    </div>
  );
};

export default PaginationButtons;
