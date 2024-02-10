import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <img
          src="/Image/FondoInicio.svg"
          alt="Imagen de fondo"
          className="absolute inset-0 object-cover w-full h-full opacity-10"
        />
      </div>
      <div className="relative z-10">

      </div>
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col justify-center items-center min-h-screen min-w-screen text-center mt-auto mb-auto">
          <img
            src="/Image/Logotipos/AprendeProgramadoBlancoV.svg"
            alt="Logo Aprende Programando"
            className="max-w-full h-auto"
          />
          <h1 className="text-4xl font-bold mb-4 text-white">
            Bienvenidos a Aprende Programando
          </h1>
          <p
            className="text-lg mb-8 text-white text-center px-4 md:px-0 md:w-1/2"
            style={{ textAlign: "center" }}
          >
            Descubre el emocionante mundo de la programación de una manera fácil
            y divertida. <br />
            En nuestra plataforma, encontrarás una amplia gama de módulos de
            aprendizaje interactivos diseñados para enseñarte desde los
            conceptos más básicos hasta habilidades avanzadas de programación.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
              Botón 1
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Botón 2
            </button>
          </div>
        </div>
        <Footer />
      </div>
      <div className="relative z-10">
        
      </div>
    </main>
  );
}