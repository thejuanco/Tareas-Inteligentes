import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-rows rounded-lg border border-gray-300 w-1/3 mt-14">
        <h1 className="m-6 font-semibold text-2xl mt-6">Iniciar Sesión</h1>
        <h3 className="mx-6 text-gray-500 ">
          Ingresa tu nombre de usuario y contraseña para acceder a tu cuenta
        </h3>
        <form className="m-6 mt-16">
          <label htmlFor="userName" className="font-semibold">Nombre de usuario</label>
          <input
            type="email"
            id="userName"
            for="userName"
            placeholder="Ingresa tu nombre de usuario"
            className="w-full border border-gray-300 rounded-lg py-3 px-2 mt-2 my-6"
          />

          <label className="font-semibold mt-6">Contraseña</label>
          <input className="w-full border border-gray-300 rounded-lg py-3 px-2 mt-2" placeholder="******" type="password"/>

          <button className="w-full bg-gray-900 text-white py-3 mt-4 rounded-3xl hover:bg-gray-800">Iniciar Sesión</button>
          <Link to="/register" className="text-center text-gray-500 my-4">¿No tienes cuenta?, Registrate</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
