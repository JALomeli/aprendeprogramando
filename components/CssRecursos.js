import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";

export default function CssRecursos() {
  return (
    <main className="relative">
      <div className="flex flex-col bg-white justify-center items-center min-h-screen min-w-screen text-center m-5 p-5">
        <h1 className="text-4xl font-bold mb-4 mt-4">
          CSS Recursos adicionales
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="Imagen de fondo"
          className="h-80 w-80 p-4 m-4"
        />

        <div className="flex items-center flex-col  ">
          <h1 className="text-4xl font-bold mb-4 mt-4">Videos Recomendados</h1>

          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/wZniZEbPAzk" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/hrxjBqZWsb0" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <iframe
            width="560" // Ancho del reproductor de vídeo
            height="315" // Altura del reproductor de vídeo
            src="https://www.youtube.com/embed/W6GTDfrWjXs" // URL del video de YouTube, reemplaza "VIDEO_ID" con el ID del video que quieras incrustar
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 mb-2"
          ></iframe>
          <h1 className="text-4xl font-bold mb-4 mt-4">Libros recomendados</h1>
          <p className="text-2xl  mb-4 mt-4">&quot;CSS: The Missing Manual&quot; de David Sawyer McFarland</p>

          <img
            src="https://m.media-amazon.com/images/I/41GlH6s9oiL.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com.mx/CSS-Missing-David-Sawyer-McFarland/dp/0596802447">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            CSS: The Missing Manual
            </button>
          </Link>

          <p className="text-2xl  mb-4 mt-4">
          &quot;CSS Secrets: Better Solutions to Everyday Web Design Problems&quot; by Lea Verou
          </p>

          <img
            src="https://m.media-amazon.com/images/I/91EGxvygVTL._SL1500_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com.mx/CSS-Secrets-Solutions-Everyday-Problems/dp/1449372635">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            CSS Secrets: Better Solutions to Everyday Web Design Problems
            </button>
          </Link>

          <p className="text-2xl  mb-4 mt-4">
          &quot;CSS Pocket Reference: Visual Presentation for the Web&quot; by Eric A. Meyer
          </p>

          <img
            src="https://m.media-amazon.com/images/I/81JBB-1BoOL._SL1500_.jpg"
            alt="Imagen de fondo"
            className="h-80 w-80 flex align-center "
          />
          <Link href="https://www.amazon.com/CSS-Pocket-Reference-Visual-Presentation/dp/1492033391">
            <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600 hover:text-gray-100">
            CSS Pocket Reference: Visual Presentation for the Web
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
