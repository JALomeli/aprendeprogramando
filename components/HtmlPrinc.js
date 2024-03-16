import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import HtmlExamen1 from "./ExamenesHTML/HtmlExamen1";
import HtmlExamen2 from "./ExamenesHTML/HtmlExamen2";
import HtmlExamen3 from "./ExamenesHTML/HtmlExamen3";
import HtmlExamen4 from "./ExamenesHTML/HtmlExamen4";
import HtmlExamen5 from "./ExamenesHTML/HtmlExamen5";

export default function HtmlPrinc() {
  return (
    <main className="relative">
      <div className="flex flex-col bg-white justify-center items-center min-h-screen min-w-screen text-center m-5 p-5">
        <h1 className="text-4xl font-bold mb-4">
          Lecciones Principiantes de HTML
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
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
              Lección 1: Introducción a HTML
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex flex-col m-2 p-2">
                <h2 className="text-2xl font-bold mb-2">¿Qué es HTML?</h2>
                <p>
                  HTML (HyperText Markup Language) es el lenguaje estándar para
                  crear páginas web.
                </p>
                <p>
                  Con HTML, puedes estructurar el contenido de tu página web
                  utilizando una variedad de etiquetas, como <code>&lt;div&gt;</code>,
                  <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, entre otros.
                </p>
                <HtmlExamen1 />
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Lección 2: Estructura básica de HTML
            </Accordion.Title>
            <Accordion.Content>
              <div className="m-2 p-2 text-center flex flex-col">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Elementos HTML</h2>
                  <p>
                    Los elementos HTML son los bloques de construcción de una
                    página web y están rodeados por etiquetas angulares
                    <code>&lt;&gt;</code>.
                  </p>
                  <p>
                    Cada elemento HTML tiene una etiqueta de apertura y una
                    etiqueta de cierre, y puede contener otros elementos y
                    texto.
                  </p>
                  <p>Ejemplo:</p>
                  <pre className="bg-gray-100 p-4 rounded-md">
                    <code>&lt;div&gt;Contenido de la etiqueta div&lt;/div&gt;</code>
                  </pre>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Estructura básica de una página HTML
                  </h2>
                  <p>
                    La estructura básica de una página HTML incluye las
                    siguientes etiquetas:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      <code>&lt;!DOCTYPE html&gt;</code>: Define el tipo de
                      documento y la versión de HTML.
                    </li>
                    <li>
                      <code>&lt;html&gt;</code>: Envuelve todo el contenido de
                      la página HTML.
                    </li>
                    <li>
                      <code>&lt;head&gt;</code>: Contiene información
                      meta-datos y enlaces a recursos externos.
                    </li>
                    <li>
                      <code>&lt;body&gt;</code>: Contiene el contenido visible
                      de la página.
                    </li>
                  </ul>
                </div>
                <HtmlExamen2 />
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
  <Accordion.Title>
    Lección 3: Etiquetas de texto y enlaces en HTML
  </Accordion.Title>
  <Accordion.Content>
    <div className="m-2 p-2 text-center flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-2">Etiquetas de texto</h2>
        <p>
          En HTML, puedes utilizar etiquetas para dar formato al texto,
          como <code>&lt;b&gt;</code> para texto en negrita,
          <code>&lt;i&gt;</code> para texto en cursiva, y
          <code>&lt;u&gt;</code> para texto subrayado.
        </p>
        <p>Ejemplo:</p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>&lt;b&gt;Texto en negrita&lt;/b&gt;</code>
        </pre>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Enlaces</h2>
        <p>
          Los enlaces en HTML se crean utilizando la etiqueta
          <code>&lt;a&gt;</code>, que permite a los usuarios navegar
          a otras páginas web o recursos.
        </p>
        <p>Ejemplo:</p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>&lt;a href=&quot;https://www.ejemplo.com&quot;&gt;Enlace de ejemplo&lt;/a&gt;</code>
        </pre>
      </div>
      <HtmlExamen3 />
    </div>
  </Accordion.Content>
</Accordion.Panel>

<Accordion.Panel>
  <Accordion.Title>
    Lección 4: Listas y tablas en HTML
  </Accordion.Title>
  <Accordion.Content>
    <div className="m-2 p-2 text-center flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-2">Listas</h2>
        <p>
          HTML proporciona etiquetas para crear listas ordenadas
          (<code>&lt;ol&gt;</code>), listas desordenadas
          (<code>&lt;ul&gt;</code>), y elementos de lista
          (<code>&lt;li&gt;</code>).
        </p>
        <p>Ejemplo:</p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            &lt;ul&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Elemento 1&lt;/li&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Elemento 2&lt;/li&gt;
            <br />
            &lt;/ul&gt;
          </code>
        </pre>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Tablas</h2>
        <p>
          Las tablas en HTML se crean utilizando las etiquetas
          <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, y
          <code>&lt;td&gt;</code> para filas y celdas de tabla.
        </p>
        <p>Ejemplo:</p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            &lt;table&gt;
            <br />
            &nbsp;&nbsp;&lt;tr&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Celda 1&lt;/td&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Celda 2&lt;/td&gt;
            <br />
            &nbsp;&nbsp;&lt;/tr&gt;
            <br />
            &lt;/table&gt;
          </code>
        </pre>
      </div>
      <HtmlExamen4 />
    </div>
  </Accordion.Content>
</Accordion.Panel>

<Accordion.Panel>
  <Accordion.Title>
    Lección 5: Formularios en HTML
  </Accordion.Title>
  <Accordion.Content>
    <div className="m-2 p-2 text-center flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-2">Formularios</h2>
        <p>
          Los formularios en HTML se utilizan para recopilar datos
          del usuario y enviarlos al servidor para su procesamiento.
        </p>
        <p>Ejemplo:</p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            &lt;form action=&quot;/submit&quot; method=&quot;post&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;label for=&quot;nombre&quot;&gt;Nombre:&lt;/label&gt;
            <br />
            &nbsp;&nbsp;&lt;input type=&quot;text&quot; id=&quot;nombre&quot; name=&quot;nombre&quot;&gt;
            <br />
            &nbsp;&nbsp;&lt;input type=&quot;submit&quot; value=&quot;Enviar&quot;&gt;
            <br />
            &lt;/form&gt;
          </code>
        </pre>
      </div>
      <HtmlExamen5 />
    </div>
  </Accordion.Content>
</Accordion.Panel>

        </Accordion>

        <Link href="/HtmlExtra">
          <button className="bg-green-500 text-white px-8 py-4 rounded m-2 hover:bg-green-600">
            Recursos adicionales
          </button>
        </Link>
      </div>
    </main>
  );
}
