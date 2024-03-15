import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import JsExamen1 from "./ExamenesJS/JsExamen1";
import JsExamen2 from "./ExamenesJS/JsExamen2";
import JsExamen3 from "./ExamenesJS/JsExamen3";
import JsExamen4 from "./ExamenesJS/JsExamen4";
import JsExamen5 from "./ExamenesJS/JsExamen5";

export default function JavascriptPrinc() {
  return (
    <main className="relative">
      <div className="flex flex-col bg-white justify-center items-center min-h-screen min-w-screen text-center m-5 p-5">
        <h1 className="text-4xl font-bold mb-4">
          Javascript Lecciones Principiantes
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          alt="Imagen de fondo"
          className="h-80 w-80 p-4 m-4"
        />
        <p className="m-2 p-2 text-center ">
          Cada vez que termines una leccion, debes de realizar un examen y sacar
          al menos el 80% de las preguntas correctamente para poder aprobar
        </p>
        <Accordion className="w-full max-w-4xl ">
          <Accordion.Panel>
            <Accordion.Title>
              Lección 1: Introducción a JavaScript
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex flex-col m-2 p-2">
                <h2 className="text-2xl font-bold mb-2">
                  Historia de JavaScript
                </h2>
                <p>
                  JavaScript es un lenguaje de programación de alto nivel,
                  interpretado y orientado a objetos, desarrollado originalmente
                  por Brendan Eich en 1995.
                </p>
                <p>
                  Surgió como una herramienta para agregar interactividad a las
                  páginas web en el navegador Netscape Navigator.
                </p>
                <p>
                  A lo largo de los años, JavaScript ha evolucionado y se ha
                  convertido en uno de los lenguajes de programación más
                  populares y versátiles, utilizado no solo en el desarrollo
                  web, sino también en la creación de aplicaciones móviles,
                  servidores y más.
                </p>
                <JsExamen1 />
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Lección 2: Variables y Tipos de Datos en JavaScript
            </Accordion.Title>
            <Accordion.Content>
              <div className="m-2 p-2 text-center flex flex-col " >
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Variables en JavaScript
                </h2>
                <p>
                  Una variable en JavaScript se utiliza para almacenar datos.
                </p>
                <p>
                  Para declarar una variable, se utiliza la palabra clave{" "}
                  <code>var</code>, <code>let</code>, o <code>const</code>.
                </p>
                <p>Por ejemplo:</p>
                <pre className="bg-gray-100 p-4 rounded-md">
                  <code>var nombre = &apos;Juan&apos;;</code>
                </pre>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Tipos de Datos</h2>
                <p>JavaScript tiene varios tipos de datos, incluyendo:</p>
                <ul className="list-disc pl-5">
                  <li>String (cadenas de texto)</li>
                  <li>Number (números)</li>
                  <li>Boolean (valores verdadero/falso)</li>
                  <li>Null (valor nulo)</li>
                  <li>Undefined (valor no definido)</li>
                </ul>
                <p>
                  Puedes utilizar el operador <code>typeof</code> para
                  determinar el tipo de dato de una variable.
                </p>
                
              </div>
              <JsExamen2 />
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              Lección 3: Operadores y Expresiones en JavaScript
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Operadores Aritméticos
                </h2>
                <p>
                  JavaScript incluye operadores aritméticos estándar para
                  realizar operaciones matemáticas básicas:
                </p>
                <ul className="list-disc pl-5">
                  <li>Suma (+)</li>
                  <li>Resta (-)</li>
                  <li>Multiplicación (*)</li>
                  <li>División (/)</li>
                  <li>Módulo (%)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Operadores de Comparación
                </h2>
                <p>
                  Los operadores de comparación se utilizan para comparar
                  valores:
                </p>
                <ul className="list-disc pl-5">
                  <li>Igualdad (==)</li>
                  <li>Igualdad Estricta (===)</li>
                  <li>Diferencia (!= o !==)</li>
                  <li>{"Mayor que (>)"}</li>
                  <li>{"Menor que (<)"}</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Operadores Lógicos</h2>
                <p>
                  Los operadores lógicos se utilizan para combinar expresiones
                  condicionales:
                </p>
                <ul className="list-disc pl-5">
                  <li>AND lógico (&&)</li>
                  <li>OR lógico (||)</li>
                  <li>NOT lógico (!)</li>
                </ul>
              </div>
              <JsExamen3/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              Lección 4: Estructuras de Control en JavaScript
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-2">Sentencia if</h2>
                <p>
                  La sentencia `if` se utiliza para ejecutar un bloque de código
                  si una condición es verdadera.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Bucle for</h2>
                <p>
                  El bucle `for` se utiliza para repetir una serie de
                  declaraciones varias veces.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Sentencia switch</h2>
                <p>
                  La sentencia `switch` se utiliza para seleccionar una de
                  muchas partes de código para ser ejecutada.
                </p>
                
              </div>
              <JsExamen4/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              Lección 5: Funciones en JavaScript
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-2">Definir funciones</h2>
                <p>
                  Las funciones se definen con la palabra clave `function`
                  seguida por el nombre de la función y los paréntesis `()`, que
                  pueden contener parámetros.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Llamar funciones</h2>
                <p>
                  Para llamar a una función, simplemente escribe el nombre de la
                  función seguido de paréntesis `()`.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Devolver valores</h2>
                <p>
                  Las funciones pueden devolver un valor utilizando la palabra
                  clave `return` seguida del valor que se desea devolver.
                </p>
              </div>
              <JsExamen5/>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <Link href="/JavascriptExtra">
          <button className="bg-green-500  text-white px-8 py-4 rounded m-2 hover:bg-green-600">
            Recursos adicionales
          </button>
        </Link>
      </div>
    </main>
  );
}
