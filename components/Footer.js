import React from "react";
import Image from "next/image";
import { Link } from "react-daisyui";

export default function Footer() {
  return (
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 ">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-3 flex flex-col md:flex-row md:justify-between items-center">
    <div className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
      <a href="https://flowbite.com/" className="hidden md:flex">
        <img
          src="Image/Logotipos/AprendeProgramandoComputadora.svg"
          className="h-16 w-14"
          alt="Flowbite Logo"
        />
      </a>
      <a href="https://flowbite.com/" className="flex items-center md:hidden">
        <img
          src="Image/Logotipos/AprendeProgramadoNegroH.svg"
          className="h-25 w-22"
          alt="Flowbite Logo"
        />
      </a>
      <a href="https://flowbite.com/" className="hover:underline hidden md:block">
        Aprende Programando™
      </a>
    </div>
    <ul className="flex flex-col items-center  text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 md:flex-row ">
      <li>
        <a href="#" className="hover:underline block md:inline-block  md:me-6">
          Sobre nosotros
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline block md:inline-block  md:me-6">
          Política de privacidad
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline block md:inline-block  md:me-6">
          Licenciamiento
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline block md:inline-block">
          Contáctanos
        </a>
      </li>
    </ul>
  </div>
  <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5  " />
  <span className=" text-center my-2 py-4 block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
    © 2024{" "}
    <a href="https://flowbite.com/" className="hover:underline   ">
      Aprende Programando™
    </a>
    . Todos los derechos reservados.
  </span>
</footer>


  );
}
