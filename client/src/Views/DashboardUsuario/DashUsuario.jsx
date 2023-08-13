import React, { useEffect } from "react";

import { Link, Outlet } from "react-router-dom";
//######## aqui se mostraran los usuarios logeados #########

function DashboardUsuario() {
  return (
    <div>
      <div className="bg-gray-500 w-200 h-700 flex items-center justify-center">
        <div>
          <div className="text-white mb-7">
            <Link to="/dashboardUsuario/compras">COMPRAS</Link>
          </div>
          <div className="text-white">
            <Link to="/dashboardUsuario/misdatos">MIS DATOS</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardUsuario;
