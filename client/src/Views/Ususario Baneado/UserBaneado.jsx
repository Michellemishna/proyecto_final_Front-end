import React from "react";

function UserBaneado() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="fixed inset-0 flex justify-center  bg-white">
      <div className=" w-screen">
        <div className="bg-gray-900 p-8 text-white text-center">TechNexus</div>
        <div className="flex flex-col items-center">
          <img
            className="w-200 mt-40 "
            src="https://cdn-icons-png.flaticon.com/512/106/106829.png"
            alt=""
          />
          <p className="w-400 mt-10 text-center text-gray-500">
            "No puedes acceder a la aplicación porque tu cuenta ha sido
            deshabilitada por tiempo indefinido."
          </p>
          <button
            className="bg-rojo-pf w-40 font-bold text-x h-15 p-3 m-5 text-white text-center mt-10"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserBaneado;
