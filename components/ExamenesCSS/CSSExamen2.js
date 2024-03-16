import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

function CSSExamen2() {
  const [openModal, setOpenModal] = useState(false);
  const [answers, setAnswers] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    // pregunta5: "",
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
    //   pregunta5: "pregunta5",

    };
    
    // Verificar las respuestas del usuario
    const isCorrectPregunta1 = answers.pregunta1 === correctAnswers.pregunta1;
    const isCorrectPregunta2 = answers.pregunta2 === correctAnswers.pregunta2;
    const isCorrectPregunta3 = answers.pregunta3 === correctAnswers.pregunta3;
    const isCorrectPregunta4 = answers.pregunta4 === correctAnswers.pregunta4;

    // const isCorrectPregunta5 = answers.pregunta5 === correctAnswers.pregunta5;

    // Contar las respuestas correctas
    const correctCount = [
      isCorrectPregunta1,
      isCorrectPregunta2,
      isCorrectPregunta3,
      isCorrectPregunta4,
    //   isCorrectPregunta5,
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
    //   pregunta5: "",
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
              Examen lección 2
            </h3>
            <div>
              <label className="block font-bold">
              ¿Qué función tienen los selectores CSS?
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
                <label htmlFor="incorrecta">Definir el contenido de una página web. </label>
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
                <label htmlFor="pregunta1">Seleccionar elementos HTML a los que se aplicará un estilo. </label>
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
                <label htmlFor="var-linus"> Controlar el comportamiento de formularios en línea.</label>
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
                <label htmlFor="incorrecta3">Crear estructuras de datos en una página web.</label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
              ¿Qué es una regla CSS?
              </label>
              <div>
                <input
                  type="radio"
                  id="incorrecta1"
                  name="pregunta2"
                  value="incorrecta1"
                  onChange={handleChange}
                  checked={answers.pregunta2 === "incorrecta1"}
                />
                <label htmlFor="incorrecta1"> Un tipo de etiqueta HTML.</label>
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
                <label htmlFor="incorrecta2">Una función de JavaScript para manipular datos.</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pregunta2"
                  name="pregunta2"
                  value="pregunta2"
                  onChange={handleChange}
                  checked={answers.pregunta2 === "pregunta2"}
                />
                <label htmlFor="pregunta2"> Una declaración de estilo aplicada a un elemento HTML.</label>
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
                <label htmlFor="incorrecta">Una técnica para controlar la lógica del lado del servidor.</label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
              En el siguiente ejemplo, ¿qué elemento HTML se seleccionará y se le aplicará un color azul? 
              </label>
              <code className="block font-bold"> p {"{"} color: blue;{"}"} </code>
              <div>
                <input
                  type="radio"
                  id="pregunta3"
                  name="pregunta3"
                  value="pregunta3"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "pregunta3"}
                />
                <label htmlFor="pregunta3"> Todos los elementos de párrafo (&lt;p&gt;) en la página.</label>
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
                <label htmlFor="incorrecta1">Todos los elementos de párrafo (&lt;h1&gt;,&lt;h2&gt;,etc) en la página.</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pregunta2"
                  name="pregunta3"
                  value="pregunta2"
                  onChange={handleChange}
                  checked={answers.pregunta3 === "pregunta2"}
                />
                <label htmlFor="pregunta2"> Todos los elementos de párrafo (&lt;ul&gt;,&lt;ol&gt;,&lt;li&gt;) en la página.</label>
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
                <label htmlFor="incorrecta3"> Todos los elementos de párrafo (&lt;img&gt;) en la página.</label>
              </div>
            </div>
            {/* pregunta  */}
            <div>
              <label className="block font-bold">
              ¿Cuál es la estructura básica de una regla CSS?
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
                <label htmlFor="incorrecta1"> Selector único.</label>
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
                <label htmlFor="pregunta4">Selector seguido de un conjunto de propiedades de estilo.</label>
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
                <label htmlFor="pregunta2"> Nombre de la clase seguido de un identificador único.</label>
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
                <label htmlFor="incorrecta3"> Palabra clave seguida de una expresión booleana.</label>
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

export default CSSExamen2;
