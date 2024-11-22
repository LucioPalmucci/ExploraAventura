import React, { useState } from 'react';
function Comentarios() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const comentarios = [
        {
            id: 1,
            quote: "La recomiendo!",
            text: "Me encantó la propuesta , la recomiendo. Ideal para usarlo en casa con la familia, y como herramienta en la parte educativa...",
            author: "Paola Rossi",
            source: "mediante Play Store"
        },
        {
            id: 2,
            quote: "Una herramienta muy valiosa",
            text: "Excelente juego, super recomendable!!! como padres y madres es una guía bárbara para trabajar mindfulness con nuestros hijos…",
            author: "Maria Noel Martínez",
            source: "mediante Play Store"
        },
        {
            id: 3,
            quote: "Muy Buena!",
            text: "Es un buena oportunidad de que niños (y adultos también) aprendan a darse un tiempo para escucharse y 'leer' cómo se sienten…",
            author: "Belen Cacere",
            source: "mediante Play Store"
        },
        {
            id: 4,
            quote: "Exelente!",
            text: "Excelente la app! Me encontré con muchos recursos para conocer más a mi hija y herramientas para ella…",
            author: "Rosario Moraco",
            source: "mediante Play Store"
        }
    ];

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const getComentariosToShow = () => {
        if (currentIndex === comentarios.length) {
            return comentarios.slice(currentIndex, comentarios[0]);
        }
        return comentarios.slice(currentIndex, currentIndex + 2);
    };

    return (
        <div className="justify-center aling-center font-Nunito w-full bg-red-500">
            <div className="text-center w-full p-10">
                <h3 className="text-white text-4xl font-bold">Testimonios</h3>
            </div>
            <div className="justify-center aling-center flex">
                {getComentariosToShow().map((comentario) => (
                    <div key={comentario.id} className="bg-white p-5 m-5 rounded-3xl border-l-8 border-sky-200">
                        <i className="fas fa-quote-right text-gray-300 text-4xl"></i>
                        <h4 className="text-2xl mt-2">{comentario.quote}</h4>
                        <p className="text-base text-gray-500 italic pt-2 pb-2">{comentario.text}</p>
                        <i className="fas fa-star text-yellow-500 ml-1 mt-2"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1 mb-2"></i>
                        <p className="font-Autor font-semibold text-sm text-gray-900 tracking-wide mt-2">{comentario.author}</p>
                        <p className="font-Fuente text-sm text-gray-500 tracking-wide">{comentario.source}</p>
                    </div>
                ))}
            </div>
            <div id="Dots" className="justify-center flex space-x-1  text-dots">
                {Array.from({ length: comentarios.length }).map((_, index) => (
                    <span
                        key={index}
                        className={`fas fa-circle cursor-pointer ${index === currentIndex ? 'text-blue-500' : 'text-fondo'}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}


export default Comentarios;
