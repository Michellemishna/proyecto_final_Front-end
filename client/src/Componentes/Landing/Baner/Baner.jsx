import React from "react";
import s from "./Baner.module.css";

function Baner() {
  const baner =
    "https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8uebuKzdbrbGeMWfxoFjdGoMp3XvAUjkJYm7Mor576DaLvfOeQKrBgaAjtcEALw_wcB";
  return (
    <div className={s.fondo}>
      <a href={baner}>
        <div className={s.baner}></div>
      </a>
    </div>
  );
}

export default Baner;
