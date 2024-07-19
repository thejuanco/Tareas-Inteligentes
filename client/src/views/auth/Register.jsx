import React from "react";
import { useForm } from "react-hook-form"

const Register = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 flex-row m-8 border border-gray-300 rounded-lg p-6">
        <h1 className="font-bold text-center text-3xl">Registro</h1>
        <p className="text-gray-500 text-center my-2">
          Ingresa tus datos para crear una cuenta
        </p>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <label className="mt-6 my-1 block text-gray-900 font-semibold" htmlFor="nameUser">Nombre</label>
          <input
            name="nameUser"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("name")}
          />

          <label className="mt-6 my-1 block font-semibold" htmlFor="emailUser">Apellido</label>
          <input
            name="emailUser"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("lastname")}
          />

          <label className="mt-4 my-1 block font-semibold">Correo electronico</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("email")}
          />

          <label className="mt-4 my-1 block font-semibold" htmlFor="passUser">Contraseña</label>
          <input
            name="passUser"
            id="passUser"
            placeholder="******"
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("password")}
          />

          <button className="w-full py-2 bg-gray-900 text-white rounded-lg font-semibold mt-6 hover:bg-gray-800" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
