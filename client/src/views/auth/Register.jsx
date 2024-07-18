import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 flex-row m-8 border border-gray-300 rounded-lg p-6">
        <h1 className="font-bold text-center text-3xl">Registro</h1>
        <p className="text-gray-500 text-center my-2">
          Ingresa tus datos para crear una cuenta
        </p>
        <form className="">
          <label className="mt-6 my-1 block text-gray-900">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />

          <label className="mt-6 my-1 block">Apellido</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />

          <label className="mt-4 my-1 block">Correo electronico</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />

          <label className="mt-4 my-1 block">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />

          <button className="w-full py-2 bg-gray-900 text-white rounded-lg font-semibold mt-6 hover:bg-gray-800">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
