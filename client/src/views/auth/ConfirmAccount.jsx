import React from "react";
import { Link } from "react-router-dom";

const ConfirmAccount = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-1/3">
        <div className="flex justify-center items-center flex-col p-6 rounded-lg shadow-lg">
          <img src="img/correoUno.png" alt="correo" className="w-16 h-16"/>
          <h1 className="text-center font-bold text-3xl my-4">Verifica tu cuenta</h1>
          <p className="text-center text-gray-500">
            Hemos enviado un correo de verificación a tu correo electronico, por
            favor verificación tu correo y sigue las intrucciones, para
            activar tu cuenta.
          </p>
          <Link
            to="/"
            className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 mt-10"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;
