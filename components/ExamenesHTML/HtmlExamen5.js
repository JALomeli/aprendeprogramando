import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function HtmlExamen1() {
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
      pregunta3: "pregunta3",
      pregunta4: "pregunta4",
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
      <Button className=" m-2 bg-red-500 hover:bg-red-600" onClick={() => setOpenModal(true)}>
        Examen
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4">
            <h3 className=" text-xl text-bold font-medium text-gray-900 dark:text-white">
              Examen lección 5
            </h3>
            <div>
              <label className="block font-bold">
              ¿Para qué se utilizan los formularios en HTML?
              </label>
              <div>
                <input
                  type="radio"
                  id="incorrecto1"
                  name="pregunta1"
                  value="incorrecto1"
                  onChange={handleChange}
                  checked={answers.pregunta1 === "incorrecto1"}
                />
                <label htmlFor="incorrecto1">Para mostrar información estática en la página web. </label>
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
                <label htmlFor="pregunta1"> Para recopilar datos del usuario y enviarlos al servidor. </label>
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
                <label htmlFor="var-linus">Para aplicar estilos y diseños a la página web.</label>
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
                <label htmlFor="incorrecta">Para crear enlaces a otras páginas web. </label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
              ¿Qué atributo se utiliza en la etiqueta &lt;form&gt; para especificar la URL a la que se enviarán los datos del formulario?
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
                <label htmlFor="pregunta2">action</label>
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
                <label htmlFor="incorrecta2">method</label>
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
                <label htmlFor="incorrecta1">type</label>
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
                <label htmlFor="incorrecta">target</label>
              </div>
            </div>

            {/* pregunta  */}

            <div>
              <label className="block font-bold">
              ¿Qué tipo de método HTTP se utiliza comúnmente en formularios HTML para enviar datos al servidor de forma segura y confiable?
              </label>

              <div>
                <input
                  type="radio"
                  id="incorrecta1"
                  name="pregunta3"
                  value="incorrecta1"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "incorrecta1"}
                />
                <label htmlFor="incorrecta1"> GET</label>
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
                <label htmlFor="incorrecta2">PUT</label>
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
                <label htmlFor="pregunta3">POST</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="incorrecta3"
                  name="pregunta3"
                  value="incorrecta3"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "incorrecta3"}
                />
                <label htmlFor="incorrecta3">DELETE</label>
              </div>

              {/* pregunta  */}

              <label className="block font-bold">
              ¿Cuál de las siguientes etiquetas se utiliza para crear un campo de entrada de texto en un formulario HTML?
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
                <label htmlFor="incorrecta1">input type=&quot;checkbox&quot;</label>
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
                <label htmlFor="incorrecta2">input type=&quot;radio&quot;</label>
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
                <label htmlFor="pregunta4"> input type=&quot;text&quot;</label>
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
                <label htmlFor="incorrecta3">input type=&quot;submit&quot;</label>
              </div>

              {/* pregunta  */}
              <div>
                <label className="block font-bold">
                ¿Qué atributo se utiliza en la etiqueta &lt;input&gt; para especificar el nombre del campo de entrada en un formulario HTML?
                </label>

                <div>
                  <input
                    type="radio"
                    id="incorrecta3"
                    name="pregunta5"
                    value="incorrecta3"
                    onChange={handleChange}
                    checked={
                      answers.pregunta5 === "incorrecta3"
                    }
                  />
                  <label htmlFor="incorrecta3">
                  id
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
                  value
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
                  name
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="incorrecta1"
                    name="pregunta5"
                    value="incorrecta1"
                    onChange={handleChange}
                    checked={
                      answers.pregunta5 ===
                      "incorrecta1"
                    }
                  />
                  <label htmlFor="incorrecta1">
                  label
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

export default HtmlExamen1;
