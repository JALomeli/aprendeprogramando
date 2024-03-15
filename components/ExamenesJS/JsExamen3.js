import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function JsExamen3() {
  const [openModal, setOpenModal] = useState(false);
  const [answers, setAnswers] = useState({
    mas: "",
    igualdadEstricta: "",
    dobleVertical: "",
    pacmanDerecho: "",
    porcentaje: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    // Respuestas correctas
    const correctAnswers = {
      mas: "mas",
      igualdadEstricta: "igualdadEstricta",
      pacmanDerecho: "pacmanDerecho",
      dobleVertical: "dobleVertical",
      porcentaje: "porcentaje",
porcentaje: "porcentaje",
    };

    // Verificar las respuestas del usuario
    const isCorrectMas = answers.mas === correctAnswers.mas;
    const isCorrectIgualdadEstricta = answers.igualdadEstricta === correctAnswers.igualdadEstricta;
    const isCorrectDobleVertical = answers.dobleVertical === correctAnswers.dobleVertical;
    const isCorrectPacmanDerecho = answers.pacmanDerecho === correctAnswers.pacmanDerecho;

    const isCorrectPorcentaje = answers.porcentaje === correctAnswers.porcentaje;

    // Contar las respuestas correctas
    const correctCount = [
      isCorrectMas,
      isCorrectIgualdadEstricta,
      isCorrectDobleVertical,
      isCorrectPacmanDerecho,
      isCorrectPorcentaje,
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
      mas: "",
      igualdadEstricta: "",
      dobleVertical: "",
      pacmanDerecho: "",
      porcentaje: "",
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
              Examen lección 3
            </h3>
            <div>
              <label className="block font-bold">
              ¿Cuál de los siguientes operadores se utiliza para realizar la suma en JavaScript?
              </label>
              <div>
                <input
                  type="radio"
                  id="mas"
                  name="mas"
                  value="mas"
                  onChange={handleChange}
                  checked={answers.mas === "mas"}
                />
                <label htmlFor="var-brendan">+</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="var-bernese"
                  name="mas"
                  value="menos"
                  onChange={handleChange}
                  checked={answers.mas === "menos"}
                />
                <label htmlFor="var-bernese">-</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="multiplicacion"
                  name="mas"
                  value="multiplicacion"
                  onChange={handleChange}
                  checked={answers.mas === "multiplicacion"}
                />
                <label htmlFor="var-linus">*</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="diagonal"
                  name="mas"
                  value="diagonal"
                  onChange={handleChange}
                  checked={answers.mas === "diagonal"}
                />
                <label htmlFor="diagonal">/</label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
              ¿Cuál de los siguientes operadores se utiliza para la igualdad estricta en JavaScript?
              </label>
              <div>
                <input
                  type="radio"
                  id="dobleigual"
                  name="igualdadEstricta"
                  value="dobleigual"
                  onChange={handleChange}
                  checked={answers.igualdadEstricta === "dobleigual"}
                />
                <label htmlFor="dobleigual">==</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="igualdadEstricta"
                  name="igualdadEstricta"
                  value="igualdadEstricta"
                  onChange={handleChange}
                  checked={answers.igualdadEstricta === "igualdadEstricta"}
                />
                <label htmlFor="igualdadEstricta">===</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="exclamacionigual"
                  name="igualdadEstricta"
                  value="exclamacionigual"
                  onChange={handleChange}
                  checked={answers.igualdadEstricta === "exclamacionigual"}
                />
                <label htmlFor="exclamacionigual">!=</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mayorque"
                  name="igualdadEstricta"
                  value="mayorque"
                  onChange={handleChange}
                  checked={answers.igualdadEstricta === "mayorque"}
                />
                <label htmlFor="string-ost">&gt;</label>
              </div>
            </div>

            {/* pregunta  */}

            <div>
              <label className=" font-bold">
              ¿Cuál de los siguientes operadores se utiliza para el OR lógico en JavaScript?
              </label>

              <div>
                <input
                  type="radio"
                  id="yy"
                  name="dobleVertical"
                  value="yy"
                  onChange={handleChange}
                  checked={answers.dobleVertical === "yy"}
                />
                <label htmlFor="type">&&</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="dobleVertical"
                  name="dobleVertical"
                  value="dobleVertical"
                  onChange={handleChange}
                  checked={answers.dobleVertical === "dobleVertical"}
                />
                <label htmlFor="typeof">||</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="exclamacion"
                  name="dobleVertical"
                  value="exclamacion"
                  onChange={handleChange}
                  checked={answers.dobleVertical === "exclamacion"}
                />
                <label htmlFor="determine">!</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="porcentaje"
                  name="dobleVertical"
                  value="porcentaje"
                  onChange={handleChange}
                  checked={answers.dobleVertical === "porcentaje"}
                />
                <label htmlFor="varType">%</label>
              </div>

              {/* pregunta  */}

              <label className="block font-bold">
              ¿Qué operador se utiliza para determinar si un valor es menor que otro en JavaScript?
              </label>

              <div>
                <input
                  type="radio"
                  id="var-only-web"
                  name="pacmanDerecho"
                  value="var"
                  onChange={handleChange}
                  checked={answers.pacmanDerecho === "var"}
                />
                <label htmlFor="var-only-web">&gt;</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="exclamacionigualigual"
                  name="pacmanDerecho"
                  value="exclamacionigualigual"
                  onChange={handleChange}
                  checked={answers.pacmanDerecho === "exclamacionigualigual"}
                />
                <label htmlFor="exclamacionigualigual">!==</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pacmanDerecho"
                  name="pacmanDerecho"
                  value="pacmanDerecho"
                  onChange={handleChange}
                  checked={answers.pacmanDerecho === "pacmanDerecho"}
                />
                <label htmlFor="pacmanDerecho">&lt;</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="porcentaje"
                  name="pacmanDerecho"
                  value="porcentaje"
                  onChange={handleChange}
                  checked={answers.pacmanDerecho === "porcentaje"}
                />
                <label htmlFor="fixed">%</label>
              </div>

              {/* pregunta  */}
              <div>
                <label className="block font-bold">
                ¿Cuál de los siguientes operadores se utiliza para calcular el módulo en JavaScript?
                </label>

                <div>
                  <input
                    type="radio"
                    id="mas"
                    name="porcentaje"
                    value="mas"
                    onChange={handleChange}
                    checked={
                      answers.porcentaje === "mas"
                    }
                  />
                  <label htmlFor="mas">
                  +
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="porcentaje"
                    name="porcentaje"
                    value="porcentaje"
                    onChange={handleChange}
                    checked={
                      answers.porcentaje === "porcentaje"
                    }
                  />
                  <label htmlFor="porcentaje">
                  %
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="yy"
                    name="porcentaje"
                    value="yy"
                    onChange={handleChange}
                    checked={
                      answers.porcentaje ===
                      "yy"
                    }
                  />
                  <label htmlFor="Logic">
                  &&
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="exclamacion"
                    name="porcentaje"
                    value="exclamacion"
                    onChange={handleChange}
                    checked={
                      answers.porcentaje ===
                      "exclamacion"
                    }
                  />
                  <label htmlFor="exclamacion">
                  !
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

export default JsExamen3;
