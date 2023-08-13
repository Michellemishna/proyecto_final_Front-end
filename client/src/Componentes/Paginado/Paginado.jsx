import React from "react";
import s from "./Paginado.module.css";

const Pagination = ({
  totalPost,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }

  const onPreviusPage = (e) => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = (e) => {
    setCurrentPage(currentPage + 1);
  };
  const onSepcificPage = (n) => {
    setCurrentPage(n);
  };
  return (
    <div className={s.paginado}>
      <button
        style={{
          borderLeft: " 0.1em solid #6512EC",
          borderTop: " 0.1em solid #6512EC",
          borderRight: "none",
          borderBottom: " 0.1em solid #6512EC",
        }}
        disabled={`${currentPage === 1 ? "is-disabled" : ""}`}
        onClick={onPreviusPage}
        className={s.antSig}
      >
        Anterior
      </button>

      <div>
        {pages.map((page, index) => {
          return (
            <button
              style={{
                borderLeft: " 0.1em solid #D5B4E6",
                borderTop: " 0.1em solid #6512EC",
                borderRight: "none",
                borderBottom: " 0.1em solid #6512EC",
              }}
              key={index}
              onClick={() => onSepcificPage(page)}
              className={`${s.pageButton} ${
                page === currentPage ? s.active : s.desactive
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        style={{
          borderLeft: " 0.1em solid #D5B4E6",
          borderTop: " 0.1em solid #6512EC",
          borderRight: " 0.1em solid #6512EC",
          borderBottom: " 0.1em solid #6512EC",
        }}
        disabled={`${currentPage >= pages.length ? "is-disabled" : ""}`}
        onClick={onNextPage}
        className={s.antSig2}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
