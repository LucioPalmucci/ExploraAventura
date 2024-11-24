import React, { useState } from 'react';
import '../index.css';

function Preguntas() {
  const [visible, setVisible] = useState([false, false, false]);

  const toggleVisibility = (index) => {
    setVisible(visible.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <div className="font-Nunito justify-center p-32 pt-20 text-center">
      <div>
        <h1 className="text-4xl font-bold p-1 text-red-500">Preguntas Frecuentes</h1>
      </div>
      <div className="text-start">
        {[
          {
            question: "¿Incluye prácticas de Mindfulness para los niños?",
            answer: "La app incluye audios de Mindfulness para que los niños y los adultos puedan introducirse a la práctica con guías de una Instructora de Mindfulness certificada. Asimismo, en el juego pueden encontrar ejercicios de Mindfulness que exploran distintas áreas."
          },
          {
            question: "¿Hay que tener experiencia en Mindfulness para poder usarla con los niños?",
            answer: "Para jugar a Exploraventura no se necesita experiencia en Mindfulness. Niños y adultos van a explorar ejercicios, preguntas, desafíos y prácticas guiadas para ir aprendiendo juntos todo lo que Mindfulness puede ofrecer."
          },
          {
            question: "¿Es un juego competitivo o colaborativo?",
            answer: "Si bien en el juego habrá un ganador, la competencia no es lo que tiene más importancia, ya que todos los casilleros proponen ejercicios y prácticas con uno mismo, en los cuales no hay manera de equivocarse: hagan lo que hagan va a estar bien. Allí es donde va a focalizarse la atención de los participantes."
          }
        ].map((item, index) => (
            <div className="pregunta" key={index}>
              <hr />
              <h2 className="font-semibold text-xl">
                {item.question}
                <button onClick={() => toggleVisibility(index)} className='justify-self-end flex'>
                  {visible[index] ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </button>
              </h2>
              <div className={`${visible[index] ? 'visible answer' : 'hidden answer '} p-4`}>
                <p>{item.answer}</p>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Preguntas;