import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";

export default function JavascriptRecursos() {
  return (
    <main className="relative">
      <div className="flex flex-col bg-white justify-center items-center min-h-screen min-w-screen text-center m-5 p-5">
        <h1 className="text-4xl font-bold mb-4 mt-4">
          Javascript Recursos adicionales
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          alt="Imagen de fondo"
          className="h-80 w-80 p-4 m-4"
        />

        <div className="flex items-center flex-col  ">
          <h1 className="text-4xl font-bold mb-4 mt-4">Videos Recomendados</h1>

          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/z95mZVUcJ-E" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/QoC4RxNIs5M" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/IuUIXbD_P4E" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <h1 className="text-4xl font-bold mb-4 mt-4">Libros recomendados</h1>
          <p className="text-2xl  mb-4 mt-4">Eloquent JavaScript de Marijn Haverbeke</p>

          <img
            src="https://m.media-amazon.com/images/I/81HqVRRwp3L._AC_UF1000,1000_QL80_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com.mx/Eloquent-Javascript-3rd-Introduction-Programming/dp/1593279507">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
              Eloquent JavaScript
            </button>
          </Link>
          <p className="text-2xl  mb-4 mt-4">
            You Don't Know JS" (Serie) de Kyle Simpson
          </p>

          <img
            src="https://m.media-amazon.com/images/I/71GBE-r5kmS._AC_UF1000,1000_QL80_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com.mx/You-Dont-Know-JS-Yet-ebook/dp/B084BNMN7T">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            You Don't Know JS"  
            </button>
          </Link>
          <p className="text-2xl  mb-4 mt-4">
            JavaScript: The Good Parts" de Douglas Crockford
          </p>

          <img
            src="https://m.media-amazon.com/images/S/aplus-media/vc/16f658b0-46cd-4d9f-bc93-c8a9b8eb7098._SL300__.png"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com.mx/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            JavaScript: The Good Parts"
            </button>
          </Link>
        </div>

        <div className="flex flex-row ">
          <Link href="/RecursosExtra">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
              Recursos Adicionales
            </button>
          </Link>
          <Link href="/Modulos">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100 ">
              Modulos
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
