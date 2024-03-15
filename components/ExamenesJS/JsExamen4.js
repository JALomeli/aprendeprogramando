import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function JsExamen4() {
  const [openModal, setOpenModal] = useState(false);
  const [answers, setAnswers] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    pregunta5: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    // Respuestas correctas
    const correctAnswers = {
      pregunta1: "pregunta1",
      pregunta2: "pregunta2",
      pregunta4: "pregunta4",
      pregunta3: "pregunta3",
      pregunta5: "pregunta5",
      pregunta5: "pregunta5",
    };
    
    // Verificar las respuestas del usuario
    const isCorrectPregunta1 = answers.pregunta1 === correctAnswers.pregunta1;
    const isCorrectPregunta2 = answers.pregunta2 === correctAnswers.pregunta2;
    const isCorrectPregunta3 = answers.pregunta3 === correctAnswers.pregunta3;
    const isCorrectPregunta4 = answers.pregunta4 === correctAnswers.pregunta4;

    const isCorrectPregunta5 = answers.pregunta5 === correctAnswers.pregunta5;

    // Contar las respuestas correctas
    const correctCount = [
      isCorrectPregunta1,
      isCorrectPregunta2,
      isCorrectPregunta3,
      isCorrectPregunta4,
      isCorrectPregunta5,
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
      pregunta1: "",
      pregunta2: "",
      pregunta3: "",
      pregunta4: "",
      pregunta5: "",
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
              Examen lección 4
            </h3>
            <div>
              <label className="block font-bold">
              ¿Cuál es el propósito de la sentencia if en programación?
              </label>
              <div>
                <input
                  type="radio"
                  id="incorrecta1"
                  name="pregunta1"
                  value="incorrecta1"
                  onChange={handleChange}
                  checked={answers.pregunta1 === "incorrecta1"}
                />
                <label htmlFor="incorrecta">Repetir un bloque de código varias veces</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta2"
                  name="pregunta1"
                  value="incorrecta2"
                  onChange={handleChange}
                  checked={answers.pregunta1 === "incorrecta2"}
                />
                <label htmlFor="var-bernese">Ejecutar un bloque de código si una condición es falsa</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pregunta1"
                  name="pregunta1"
                  value="pregunta1"
                  onChange={handleChange}
                  checked={answers.pregunta1 === "pregunta1"}
                />
                <label htmlFor="var-linus">Ejecutar un bloque de código si una condición es verdadera</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta3"
                  name="pregunta1"
                  value="incorrecta3"
                  onChange={handleChange}
                  checked={answers.pregunta1 === "incorrecta3"}
                />
                <label htmlFor="incorrecta">Seleccionar una de muchas partes de código para ser ejecutada</label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
              ¿Para qué se utiliza el bucle for en programación?
              </label>
              <div>
                <input
                  type="radio"
                  id="pregunta2"
                  name="pregunta2"
                  value="pregunta2"
                  onChange={handleChange}
                  checked={answers.pregunta2 === "pregunta2"}
                />
                <label htmlFor="pregunta2">Para repetir una serie de declaraciones varias veces</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta1"
                  name="pregunta2"
                  value="incorrecta1"
                  onChange={handleChange}
                  checked={answers.pregunta2 === "incorrecta1"}
                />
                <label htmlFor="pregunta2">Para ejecutar un bloque de código si una condición es verdadera</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta2"
                  name="pregunta2"
                  value="incorrecta2"
                  onChange={handleChange}
                  checked={answers.pregunta2 === "incorrecta2"}
                />
                <label htmlFor="incorrecta2">Para seleccionar una de muchas partes de código para ser ejecutada</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta"
                  name="pregunta2"
                  value="incorrecta"
                  onChange={handleChange}
                  checked={answers.pregunta2 === "incorrecta"}
                />
                <label htmlFor="incorrecta">Para verificar una condición antes de cada iteración</label>
              </div>
            </div>

            {/* pregunta  */}

            <div>
              <label className="block font-bold">
              ¿Cuál es el propósito de la sentencia switch en programación?
              </label>

              <div>
                <input
                  type="radio"
                  id="incorrecta3"
                  name="pregunta3"
                  value="incorrecta3"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "incorrecta3"}
                />
                <label htmlFor="incorrecta3">Repetir un bloque de código varias veces</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta2"
                  name="pregunta3"
                  value="incorrecta2"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "incorrecta2"}
                />
                <label htmlFor="incorrecta2">Ejecutar un bloque de código si una condición es verdadera</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta1"
                  name="pregunta3"
                  value="incorrecta1"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "incorrecta1"}
                />
                <label htmlFor="determine1">Ejecutar un bloque de código si una condición es falsa</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pregunta3"
                  name="pregunta3"
                  value="pregunta3"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "pregunta3"}
                />
                <label htmlFor="pregunta3"> Seleccionar una de muchas partes de código para ser ejecutada</label>
              </div>

              {/* pregunta  */}

              <label className="block font-bold">
              ¿Qué tipo de estructura de control se utiliza para repetir una serie de declaraciones varias veces?
              </label>

              <div>
                <input
                  type="radio"
                  id="incorrecta1"
                  name="pregunta4"
                  value="incorrecta1"
                  onChange={handleChange}
                  checked={answers.pregunta4 === "incorrecta1"}
                />
                <label htmlFor="incorrecta1">Sentencia if</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pregunta4"
                  name="pregunta4"
                  value="pregunta4"
                  onChange={handleChange}
                  checked={answers.pregunta4 === "pregunta4"}
                />
                <label htmlFor="pregunta4">Bucle for </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta2"
                  name="pregunta4"
                  value="incorrecta2"
                  onChange={handleChange}
                  checked={answers.pregunta4 === "incorrecta2"}
                />
                <label htmlFor="incorrecta2">Sentencia switch</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta3"
                  name="pregunta4"
                  value="incorrecta3"
                  onChange={handleChange}
                  checked={answers.pregunta4 === "incorrecta3"}
                />
                <label htmlFor="incorrecta3">Bucle while</label>
              </div>

              {/* pregunta  */}
              <div>
                <label className="block font-bold">
                ¿Qué tipo de estructura de control se utiliza para seleccionar una de muchas partes de código para ser ejecutada?
                </label>

                <div>
                  <input
                    type="radio"
                    id="incorrecta1"
                    name="pregunta5"
                    value="incorrecta1"
                    onChange={handleChange}
                    checked={
                      answers.pregunta5 === "incorrecta1"
                    }
                  />
                  <label htmlFor="incorrecta1">
                  Sentencia if
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="incorrecta2"
                    name="pregunta5"
                    value="incorrecta2"
                    onChange={handleChange}
                    checked={
                      answers.pregunta5 === "incorrecta2"
                    }
                  />
                  <label htmlFor="incorrecta2">
                  Bucle for
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="pregunta5"
                    name="pregunta5"
                    value="pregunta5"
                    onChange={handleChange}
                    checked={
                      answers.pregunta5 ===
                      "pregunta5"
                    }
                  />
                  <label htmlFor="pregunta5">
                  Sentencia switch
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="incorrecta3"
                    name="pregunta5"
                    value="incorrecta3"
                    onChange={handleChange}
                    checked={
                      answers.pregunta5 ===
                      "incorrecta3"
                    }
                  />
                  <label htmlFor="incorrecta3">
                  Bucle while
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

export default JsExamen4;
