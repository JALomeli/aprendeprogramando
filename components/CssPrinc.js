import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import CSSExamen1 from "./ExamenesCSS/CSSExamen1";
import CSSExamen2 from "./ExamenesCSS/CSSExamen2";
import CSSExamen3 from "./ExamenesCSS/CSSExamen3";
import CSSExamen4 from "./ExamenesCSS/CSSExamen4";


export default function CssPrinc() {
  return (
    <main className="relative">
      <div className="flex flex-col bg-white justify-center items-center min-h-screen min-w-screen text-center m-5 p-5">
        <h1 className="text-4xl font-bold mb-4">
          Lecciones Principiantes de CSS
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="Imagen de fondo"
          className="h-80 w-80 p-4 m-4"
        />
        <p className="m-2 p-2 text-center">
          Cada vez que termines una lección, debes realizar un examen y sacar
          al menos el 80% de las preguntas correctamente para poder aprobar.
        </p>
        <Accordion className="w-full max-w-4xl">
          <Accordion.Panel>
            <Accordion.Title>
              Lección 1: Introducción a CSS
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex flex-col m-2 p-2">
                <h2 className="text-2xl font-bold mb-2">¿Qué es CSS?</h2>
                <p>
                  CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para dar estilo y presentación a documentos HTML.
                </p>
                <p>
                  Con CSS, puedes controlar el diseño, el formato y el aspecto visual de tu página web.
                </p>
                <CSSExamen1/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Lección 2: Selectores y Reglas CSS
            </Accordion.Title>
            <Accordion.Content>
              <div className="m-2 p-2 text-center flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Selectores CSS</h2>
                  <p>
                    Los selectores CSS se utilizan para seleccionar elementos HTML a los que se les aplicará un estilo.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>p {"{"} color: blue; {"}"}</code>
                  </pre>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Reglas CSS</h2>
                  <p>
                    Las reglas CSS consisten en un selector y un conjunto de declaraciones de estilo que se aplicarán a los elementos seleccionados.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>p {"{"} color: blue; {"}"}</code>
                  </pre>
                </div>
                <CSSExamen2/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Lección 3: Propiedades CSS Comunes
            </Accordion.Title>
            <Accordion.Content>
              <div className="m-2 p-2 text-center flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Propiedades de Texto</h2>
                  <p>
                    Las propiedades de texto en CSS se utilizan para controlar el aspecto del texto en una página web.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>p {"{"} font-size: 16px; {"}"}</code>
                  </pre>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Propiedades de Color y Fondo</h2>
                  <p>
                    Las propiedades de color y fondo en CSS se utilizan para definir el color del texto y el fondo de los elementos HTML.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>p {"{"} color: blue; background-color: yellow; {"}"}</code>
                  </pre>
                </div>
                <CSSExamen3/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Lección 4: Diseño y Maquetación con CSS
            </Accordion.Title>
            <Accordion.Content>
              <div className="m-2 p-2 text-center flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Diseño de Cajas</h2>
                  <p>
                    El modelo de caja en CSS se refiere a cómo se representan y se manipulan los elementos HTML en una página web.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>
                      div {"{"} width: 200px; height: 200px; border: 1px solid black; {"}"}
                    </code>
                  </pre>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Diseño de Diseño Responsivo</h2>
                  <p>
                    El diseño responsivo en CSS se refiere a la capacidad de una página web para adaptarse a diferentes dispositivos y tamaños de pantalla.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>
                      @media screen and (max-width: 600px) {"{"} div {"{"} width: 100%; {"}"} {"}"}
                    </code>
                  </pre>
                </div>
                <CSSExamen4/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

        </Accordion>

        <Link href="/CssExtra">
          <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600">
            Recursos adicionales
          </button>
        </Link>
      </div>
    </main>
  );
}
