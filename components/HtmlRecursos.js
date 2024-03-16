import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";

export default function HtmlRecursos() {
  return (
    <main className="relative">
      <div className="flex flex-col bg-white justify-center items-center min-h-screen min-w-screen text-center m-5 p-5">
        <h1 className="text-4xl font-bold mb-4 mt-4">
          Javascript Recursos adicionales
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="Imagen de fondo"
          className="h-80 w-80 p-4 m-4"
        />

        <div className="flex items-center flex-col  ">
          <h1 className="text-4xl font-bold mb-4 mt-4">Videos Recomendados</h1>

          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/rbuYtrNUxg4" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/MJkdaVFHrto" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/NnxrouZvnRY" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <h1 className="text-4xl font-bold mb-4 mt-4">Libros recomendados</h1>
          <p className="text-2xl  mb-4 mt-4">&quot;HTML and CSS: Design and Build Websites&quot; de Jon Duckett</p>

          <img
            src="https://m.media-amazon.com/images/I/613ZTDcDsiL._SL1500_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            HTML and CSS: Design and Build Websites
            </button>
          </Link>
          <p className="text-2xl  mb-4 mt-4">
          &quot;Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics&quot; by Jennifer Robbins
          </p>

          <img
            src="https://m.media-amazon.com/images/I/A1O2e-E1WkL._SL1500_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com/Learning-Web-Design-Beginners-JavaScript/dp/1491960205">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics 
            </button>
          </Link>

          <p className="text-2xl  mb-4 mt-4">
          &quot;HTML5 for Web Designers&quot; de Jeremy Keith
          </p>

          <img
            src="https://m.media-amazon.com/images/I/71UJLmvtBuL._SL1500_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com/HTML5-Web-Designers-Jeremy-Keith/dp/0984442502">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            HTML5 for Web Designers
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
