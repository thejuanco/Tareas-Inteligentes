import React from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/user.api.js";

const Register = () => {

  //Navegacion
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    try {
      registerUser(data)
      reset()
      navigate("/confirm-account")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="md:w-1/3 sm:w-1/2 flex-row m-8 border border-gray-300 rounded-lg p-6">
        <h1 className="font-bold text-center text-3xl">Registro</h1>
        <p className="text-gray-500 text-center my-2">
          Ingresa tus datos para crear una cuenta
        </p>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <label
            className="mt-6 my-1 block text-gray-900 font-semibold"
            htmlFor="nameUser"
          >
            Nombre
          </label>
          <input
            name="nameUser"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red-700">El nombre el obligatorio</p>
          )}

          <label className="mt-6 my-1 block font-semibold" htmlFor="lastName">
            Apellido
          </label>
          <input
            name="lastName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("lastName", {required: true})}
          />
          {errors.lastName?.type === "required" && (
            <p className="text-red-700">El apellido es obligatorio</p>
          )}

          <label className="mt-4 my-1 block font-semibold">
            Correo electronico
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("email", {required: true})}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-700">El correo es obligatorio</p>
          )}

          <label className="mt-4 my-1 block font-semibold" htmlFor="passUser">
            Contraseña
          </label>
          <input
            name="passUser"
            id="passUser"
            placeholder="******"
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("password", {required: true})}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-700">La contraseña es obligatorio</p>
          )}

          <button
            className="w-full py-2 bg-gray-900 text-white rounded-lg font-semibold mt-6 hover:bg-gray-800"
            type="submit"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
