import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="m-6 flex flex-cols h-96">
        <div className="w-1/2 mt-28">
          <h1 className="font-bold text-5xl ">Optimice su flujo de trabajo</h1>
          <p className="text-gray-500 mt-4 text-xl">
            Taskly es una poderosa aplicación colaborativa de gestión de tareas
            y calendario que te ayuda a ti y a tu equipo a mantenerse
            organizados y productivos.
          </p>

          <div className="flex flex-row space-x-2 mt-6">
            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
            >
              Registrarse
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-slate-200"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>

        <div className="w-1/2 m-4">
          <img src="img/colaboracion.png" alt="Colaboración"  className="h-5/6"/>
        </div>
      </div>

      <div className="bg-slate-100 mt-24 mb-12 py-10">
        <p className="text-center mt-10">Caracteristicas clave</p>
        <h1 className="text-center mt-4 text-4xl font-semibold">
          Herramientas poderosas para equipos productivos
        </h1>
        <h2 className="text-center mt-4 text-gray-600 text-xl gap-18">
          Taskly proporciona un conjunto completo de funciones para ayudar a su
          equipo a mantenerse organizado, colaborar de manera efectiva y lograr
          sus objetivos.
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-14 m-14">
          <div className="space-y-4">
            <p className="text-center">Tareas</p>
            <h2 className="font-bold text-2xl">Organiza tu trabajo</h2>
            <p className="text-gray-600">
              Cree y administre tareas, establezca fechas de entrega y realice
              un seguimiento del progreso con facilidad.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-center">Calendario</p>
            <h2 className="font-bold text-2xl">Mantente en el Horario</h2>
            <p className="text-gray-600">
              Cree y administre tareas, establezca fechas de entrega y realice
              un seguimiento del progreso con facilidad.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-center">Colaboración</p>
            <h2 className="font-bold text-2xl">
              Colaborar en equipo facilmente
            </h2>
            <p className="text-gray-600">
              Invita a miembros del equipo, asigna tareas y comunícate en tiempo
              real.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 my-10">
        <h1 className="text-center font-bold text-3xl">
          Toma el control de tu flujo de trabajo
        </h1>
        <p className="text-center my-4 text-gray-600 text-lg">
          Regístrese hoy y comience a optimizar la productividad de su
          equipo hoy.
        </p>
        <form className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Ingresa tu correo electronico"
            id="inputEmailLanding"
            className="p-2 border rounded-lg px-2 w-64"
          />
          <input
            type="submit"
            value="Registrarte"
            className="bg-gray-800 text-white text-center p-2 rounded-lg"
          />
        </form>
        <p className="text-xs text-center mt-2 text-gray-500 mb-16">
          Una vez registrado aceptas los terminos y condiciones
        </p>
      </div>
    </>
  );
};

export default Home;
