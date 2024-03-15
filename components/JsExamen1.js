import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function JsExamen1() {
  const [openModal, setOpenModal] = useState(false);
  const [answers, setAnswers] = useState({
    developer: "",
    purpose: "",
    applications: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    // Respuestas correctas
    const correctAnswers = {
      developer: "Brendan Eich",
      purpose:
        "Agregar interactividad a las páginas web en el navegador Netscape Navigator",
      applications: "En aplicaciones web, móviles, servidores y más",
    };

    // Verificar las respuestas del usuario
    const isCorrectDeveloper = answers.developer === correctAnswers.developer;
    const isCorrectPurpose = answers.purpose === correctAnswers.purpose;
    const isCorrectApplications =
      answers.applications === correctAnswers.applications;

    // Contar las respuestas correctas
    const correctCount = [
      isCorrectDeveloper,
      isCorrectPurpose,
      isCorrectApplications,
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
      developer: "",
      purpose: "",
      applications: "",
    });
  };

  return (
    <>
      <Button className="m-2 bg-red-500" onClick={() => setOpenModal(true)}>
        Examen
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Examen lección 1
            </h3>
            <div>
              <label className="block">
                ¿Quién es el desarrollador original de JavaScript?
              </label>
              <div>
                <input
                  type="radio"
                  id="developer-brendan"
                  name="developer"
                  value="Brendan Eich"
                  onChange={handleChange}
                  checked={answers.developer === "Brendan Eich"}
                />
                <label htmlFor="developer-brendan">Brendan Eich</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="developer-bernese"
                  name="developer"
                  value="Tim Berners-Lee"
                  onChange={handleChange}
                  checked={answers.developer === "Tim Berners-Lee"}
                />
                <label htmlFor="developer-bernese">Tim Berners-Lee</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="developer-linus"
                  name="developer"
                  value="Linus Torvalds"
                  onChange={handleChange}
                  checked={answers.developer === "Linus Torvalds"}
                />
                <label htmlFor="developer-linus">Linus Torvalds</label>
              </div>
            </div>
            <div>
              <label className="block">
                ¿Cuál fue el propósito inicial de JavaScript cuando fue creado?
              </label>
              <div>
                <input
                  type="radio"
                  id="purpose-interactivity"
                  name="purpose"
                  value="Agregar interactividad a las páginas web en el navegador Netscape Navigator"
                  onChange={handleChange}
                  checked={
                    answers.purpose ===
                    "Agregar interactividad a las páginas web en el navegador Netscape Navigator"
                  }
                />
                <label htmlFor="purpose-interactivity">
                  Agregar interactividad a las páginas web en el navegador
                  Netscape Navigator
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="purpose-mobile"
                  name="purpose"
                  value="Desarrollar aplicaciones móviles"
                  onChange={handleChange}
                  checked={
                    answers.purpose === "Desarrollar aplicaciones móviles"
                  }
                />
                <label htmlFor="purpose-mobile">
                  Desarrollar aplicaciones móviles
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="purpose-os"
                  name="purpose"
                  value="Crear sistemas operativos"
                  onChange={handleChange}
                  checked={answers.purpose === "Crear sistemas operativos"}
                />
                <label htmlFor="purpose-os">Crear sistemas operativos</label>
              </div>
            </div>
            <div>
              <label className="block">
                ¿En qué tipos de aplicaciones se utiliza comúnmente JavaScript
                en la actualidad?
              </label>

              <div>
                <input
                  type="radio"
                  id="applications-only-web"
                  name="applications"
                  value="Solo en aplicaciones web"
                  onChange={handleChange}
                  checked={answers.applications === "Solo en aplicaciones web"}
                />
                <label htmlFor="applications-only-web">
                  Solo en aplicaciones web
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="applications-only-mobile"
                  name="applications"
                  value="Solo en aplicaciones móviles"
                  onChange={handleChange}
                  checked={
                    answers.applications === "Solo en aplicaciones móviles"
                  }
                />
                <label htmlFor="applications-only-mobile">
                  Solo en aplicaciones móviles
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="applications-web"
                  name="applications"
                  value="En aplicaciones web, móviles, servidores y más"
                  onChange={handleChange}
                  checked={
                    answers.applications ===
                    "En aplicaciones web, móviles, servidores y más"
                  }
                />
                <label htmlFor="applications-web">
                  En aplicaciones web, móviles, servidores y más
                </label>
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

export default JsExamen1;
