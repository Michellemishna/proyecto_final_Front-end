import React from "react";

import { Link, Outlet } from "react-router-dom";
//######## aqui se mostraran los usuarios logeados #########

function DashboardAdmin() {
  return (
    <div>
      <div className="bg-gray-500 w-200 h-700 flex items-center justify-center">
        <div>
          {/* <div className="text-white mb-7">
            <Link to="/dashboardAdmin/publicaciones">PUBLICACIONES</Link>
          </div>
          <div className="text-white  mb-7">
            <Link to="/dashboardAdmin/ventas">VENTAS</Link>
          </div> */}
          <div className="text-white  mb-7">
            <Link to="/dashboardAdmin/usuarios">USUARIOS</Link>
          </div>
          <div className="text-white  mb-7">
            <Link to="/dashboardAdmin/misdatosAdmin">MIS DATOS</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardAdmin;
