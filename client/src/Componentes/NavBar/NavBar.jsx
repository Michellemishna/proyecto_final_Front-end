import React, { useEffect, useState } from "react";
import s from "./NavBar.module.css";
import logo from "../../Img/Recurso 1.png";
import { Link } from "react-router-dom";
// import Casa from "../../Img/home.png";
import Carrito from "../../Img/carrito.png";
import SearchBar from "../../Componentes/SearchBar/SearchBar";

function NavBar() {
  const [elToken, setElToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setElToken(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    setElToken(tokenFromLocalStorage);
  }, []);

  return (
    <div className={`${s.fondo} bg-gray-800`}>
      <SearchBar />
      <div className={s.caja1}>
        <div className={s.search}>
          <div className={s.logo}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <img src={logo} alt="" className={s.img} />
            </Link>
          </div>
          <div className={s.buscador}>buscador</div>
          <div className={s.carrito}>
            <Link to={"/carrito"}>
              <img src={Carrito} alt="carrito" style={{ width: "60px" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className={s.caja2}>
        <div className={s.botones}>
          <Link
            to={"/Productos/page/1"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="hover-violet-500">Productos</p>
          </Link>
          <Link
            to={"/nosotros"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>Nosotros</p>
          </Link>
          {elToken === null ? (
            <Link
              to={"/nuevaCuenta"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Regístrate</p>
            </Link>
          ) : (
            <>
              <Link
                to={"/nuevoProd"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className={s.registrar}>Vender</p>
              </Link>
              <Link
                to={"/dashboardUsuario/misdatos"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Mi Cuenta</p>
              </Link>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          )}
        </div>
        <div className={s.cuenta}>
          {elToken === null ? (
            <Link
              to={"/formUsuario"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Iniciar Sesión</p>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
