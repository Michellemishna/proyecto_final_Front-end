import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { getSearchAdnFilterProducts } from "../../Redux/Actions/action";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState({term:''});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm({ ...searchTerm, term: value });
    dispatch(getSearchAdnFilterProducts({ search: value }));

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(getSearchAdnFilterProducts({ aplicar: true, search: searchTerm }));
    setSearchTerm({term:''}); // Restablecer el valor del input a una cadena vacía
    navigate(`/productos/page/${1}`);

  };

  return (
    <div className={style.sbcontainer}>
      <form className={style.formsb} onSubmit={handleSubmit}>
        <input
          className={style.inputsb}
          type="search"
          placeholder="Buscar productos..."

          value={searchTerm.term}
          onChange={handleChange}

        />
        <button className={style.buttonsb} type="submit" onClick={(event)=> handleSubmit(event)}>
          <img className={style.imgsb} src="https://i.postimg.cc/X7QvyvYS/image.png"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
