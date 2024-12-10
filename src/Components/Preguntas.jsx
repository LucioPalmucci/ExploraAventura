import React, { useEffect, useState } from 'react';
import '../index.css';

function Preguntas() {
  const [visible, setVisible] = useState([false, false, false]);

  const toggleVisibility = (index) => {
    setVisible(visible.map((v, i) => (i === index ? !v : v)));
  };

  const preguntas = [
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
  ]

  useEffect(() => {
    const handleResize = () => {
      const contenedor = document.getElementById('conetenedor');
      if(window.innerWidth < 663){
        contenedor.classList.remove('p-36');
        contenedor.classList.add('p-14');
      }
      else{
        contenedor.classList.remove('p-14');
        contenedor.classList.add('p-36');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="font-Nunito justify-center p-36 pt-20 text-center" id="conetenedor">
      <div>
        <h1 className="text-4xl font-bold p-1 text-red-500">Preguntas Frecuentes</h1>
      </div>
      <br />
      <div className="text-start w-auto">
      <hr className='border-gray-300' />
        {[...preguntas].map((item, index) => (
            <div className="pregunta mt-4 ml-4" key={index}>
              <div className='flex justify-between items-center'>
                <h2 className="font-semibold text-xl flex w-2/3">
                  {item.question}
                </h2>
                <button onClick={() => toggleVisibility(index)} className='flex'>
                  {visible[index] ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </button>
              </div>
              <br />
              <div className={`answer ${visible[index] ? 'visible' : ''} pt-4 `}>
                <p className='text-slate-600 text-lg'>{item.answer}</p>
              </div>
              <hr className='mt-4 border-gray-300'/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Preguntas;