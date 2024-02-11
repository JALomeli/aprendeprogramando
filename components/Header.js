import React, { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 space-x-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           <img
              src="Image/Logotipos/AprendeProgramandoComputadora.svg"
              className="h-16 w-14 hidden md:block"
              alt="Flowbite Logo"
            />
            <img
              src="Image/Logotipos/AprendeProgramadoNegroH.svg"
              className="h-25 w-22 flex pb-2 md:hidden"
              alt="Flowbite Logo"
            />


<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block">
              Aprende Programando
            </span>
          </a>
          <div className="md:flex-1 md:flex md:justify-center">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isDropdownOpen}
              aria-controls="navbar-user"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green dark:hover:bg-gray-700 dark:border-gray-700 hover:bg-green-500"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="/Modulos"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700 hover:bg-green-500"
                >
                  Modulos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700 hover:bg-green-500"
                >
                  Examenes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700 hover:bg-green-500"
                >
                  Recursos Extra
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:border-gray-700 hover:bg-green-500"
                >
                  Inicia Sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
  );
}
