import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

// Corregir la logica de esta seccion en un futuro

function JsExamen2() {
  const [openModal, setOpenModal] = useState(false);
  const [answers, setAnswers] = useState({
    var: "",
    string: "",
    typeof: "",
    const: "",
    boolean: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    // Respuestas correctas
    const correctAnswers = {
      var: "var",
      string: "string",
      typeof: "typeof",
      const: "const",
boolean: "boolean",
    };

    // Verificar las respuestas del usuario
    const isCorrectVar = answers.var === correctAnswers.var;
    const isCorrectString = answers.string === correctAnswers.string;
    const isCorrectTypeof = answers.typeof === correctAnswers.typeof;
    const isCorrectConst = answers.const === correctAnswers.const;
    const isCorrectBoolean = answers.boolean === correctAnswers.boolean;

    // Contar las respuestas correctas
    const correctCount = [
      isCorrectVar,
      isCorrectString,
      isCorrectTypeof,
      isCorrectConst,
      isCorrectBoolean,
    ].filter((value) => value).length;

    // Calcular el porcentaje de respuestas correctas
    const percentage =
      (correctCount / Object.keys(correctAnswers).length) * 100;

    // Mostrar el porcentaje
    setResult(percentage);

    onCloseModal();
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setAnswers({
      var: "",
      string: "",
      typeof: "",
      const: "",
      boolean: "",
    });
  };

  return (
    <>
      <Button className="m-2 bg-red-500 hover:bg-red-600" onClick={() => setOpenModal(true)}>
        Examen
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Examen lección 2
            </h3>
            <div>
              <label className="block font-bold">
                ¿Cuál es la palabra clave utilizada para declarar una variable
                en JavaScript?
              </label>
              <div>
                <input
                  type="radio"
                  id="var-brendan"
                  name="var"
                  value="Brendan Eich"
                  onChange={handleChange}
                  checked={answers.var === "Brendan Eich"}
                />
                <label htmlFor="var-brendan">define</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="var-bernese"
                  name="var"
                  value="Tim Berners-Lee"
                  onChange={handleChange}
                  checked={answers.var === "Tim Berners-Lee"}
                />
                <label htmlFor="var-bernese">variable</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="var-linus"
                  name="var"
                  value="var"
                  onChange={handleChange}
                  checked={answers.var === "var"}
                />
                <label htmlFor="var-linus">var</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="var-const"
                  name="var"
                  value="const"
                  onChange={handleChange}
                  checked={answers.var === "const"}
                />
                <label htmlFor="var-const">const</label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
                ¿Qué tipo de dato se utiliza para almacenar cadenas de texto en
                JavaScript?
              </label>
              <div>
                <input
                  type="radio"
                  id="string-interactivity"
                  name="string"
                  value="texto"
                  onChange={handleChange}
                  checked={answers.string === "texto"}
                />
                <label htmlFor="string-interactivity">texto</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="string-mobile"
                  name="string"
                  value="string"
                  onChange={handleChange}
                  checked={answers.string === "string"}
                />
                <label htmlFor="string-mobile">string</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="string-os"
                  name="string"
                  value="char"
                  onChange={handleChange}
                  checked={answers.string === "char"}
                />
                <label htmlFor="string-os">char</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="string-ost"
                  name="string"
                  value="word"
                  onChange={handleChange}
                  checked={answers.string === "word"}
                />
                <label htmlFor="string-ost">word</label>
              </div>
            </div>

            {/* pregunta  */}

            <div>
              <label className="block font-bold">
                ¿Cuál es el operador que se utiliza para determinar el tipo de
                dato de una variable en JavaScript?
              </label>

              <div>
                <input
                  type="radio"
                  id="type"
                  name="typeof"
                  value="type"
                  onChange={handleChange}
                  checked={answers.typeof === "type"}
                />
                <label htmlFor="type">type</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="typeof"
                  name="typeof"
                  value="typeof"
                  onChange={handleChange}
                  checked={answers.typeof === "typeof"}
                />
                <label htmlFor="typeof">typeof</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="determine"
                  name="typeof"
                  value="determine"
                  onChange={handleChange}
                  checked={answers.typeof === "determine"}
                />
                <label htmlFor="determine">determine</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="varType"
                  name="typeof"
                  value="varType"
                  onChange={handleChange}
                  checked={answers.typeof === "varType"}
                />
                <label htmlFor="varType">varType</label>
              </div>

              {/* pregunta  */}

              <label className="block font-bold">
                ¿Qué palabra clave se utiliza para declarar una variable cuyo
                valor no cambiará durante la ejecución del programa en
                JavaScript?
              </label>

              <div>
                <input
                  type="radio"
                  id="var-only-web"
                  name="const"
                  value="var"
                  onChange={handleChange}
                  checked={answers.const === "var"}
                />
                <label htmlFor="var-only-web">var</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="let"
                  name="const"
                  value="let"
                  onChange={handleChange}
                  checked={answers.const === "let"}
                />
                <label htmlFor="let">let</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="const"
                  name="const"
                  value="const"
                  onChange={handleChange}
                  checked={answers.const === "const"}
                />
                <label htmlFor="const">const</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="fixed"
                  name="const"
                  value="fixed"
                  onChange={handleChange}
                  checked={answers.const === "fixed"}
                />
                <label htmlFor="fixed">fixed</label>
              </div>

              {/* pregunta  */}
              <div>
                <label className="block font-bold">
                  ¿Qué tipo de dato se utiliza para representar valores
                  verdadero/falso en JavaScript?
                </label>

                <div>
                  <input
                    type="radio"
                    id="TruFalse"
                    name="boolean"
                    value="TruFalse"
                    onChange={handleChange}
                    checked={
                      answers.boolean === "TruFalse"
                    }
                  />
                  <label htmlFor="TruFalse">
                  TrueFalse
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="boolean"
                    name="boolean"
                    value="boolean"
                    onChange={handleChange}
                    checked={
                      answers.boolean === "boolean"
                    }
                  />
                  <label htmlFor="boolean">
                  Boolean
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Logic"
                    name="boolean"
                    value="Logic"
                    onChange={handleChange}
                    checked={
                      answers.boolean ===
                      "Logic"
                    }
                  />
                  <label htmlFor="Logic">
                  Logic
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="YesNo"
                    name="boolean"
                    value="YesNo"
                    onChange={handleChange}
                    checked={
                      answers.boolean ===
                      "YesNo"
                    }
                  />
                  <label htmlFor="applications-web">
                  YesNo
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Enviar respuestas</Button>
        </Modal.Footer>
      </Modal>
      {result !== null && (
        <div>
          <h3>Resultados:</h3>
          <p>Porcentaje de respuestas correctas: {result.toFixed(2)}%</p>
          {result.toFixed(2) >= 80 ? (
            <p>¡Felicidades! Has aprobado el examen.</p>
          ) : (
            <p>
              Lo siento, no has aprobado el examen. Por favor intenta de nuevo.
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default JsExamen2;
