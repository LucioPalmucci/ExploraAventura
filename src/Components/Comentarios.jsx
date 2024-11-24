import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Comentarios = () => {

    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "slick-dots custom-dots bg-red-500 ",
        customPaging: function (i) {
            return (
                <div>
                    <i className="fas fa-circle text-dots text-fondo"></i>
                </div>
            );
        }
    }

    return (
        <div className="flex flex-col items-center font-Nunito w-full bg-red-500 p-2">
            <div className="text-center w-full p-8">
                <h3 className="text-white text-4xl font-bold">Testimonios</h3>
            </div>
            <div className="w-5/6">
                <Slider {...Settings} className='flex justify-center items-center'>
                    <div className="comentario bg-white p-5 m-5 rounded-3xl border-l-8 border-sky-200 mx-4">
                        <i className="fas fa-quote-right text-gray-300 text-4xl"></i>
                        <h4 className="text-2xl mt-2">La recomiendo!</h4>
                        <p className="text-base text-gray-500 italic pt-2 pb-2">Me encantó la propuesta , la recomiendo. Ideal para usarlo en casa con la familia, y como herramienta en la parte educativa...</p>
                        <i className="fas fa-star text-yellow-500 ml-1 mt-2"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1 mb-2"></i>
                        <p className="font-Autor font-semibold text-sm text-gray-900 tracking-wide mt-2">Paola Rossi</p>
                        <p className="font-Fuente text-sm text-gray-500 tracking-wide">mediante Play Store</p>
                    </div>
                    <div className="comentario bg-white p-5 m-5 rounded-3xl border-l-8 border-sky-200 ">
                        <i className="fas fa-quote-right text-gray-300 text-4xl"></i>
                        <h4 className="text-2xl mt-2">Una herramienta muy valiosa</h4>
                        <p className="text-base text-gray-500 italic pt-2 pb-2">Excelente juego, super recomendable!!! como padres y madres es una guía bárbara para trabajar mindfulness con nuestros hijos…</p>
                        <i className="fas fa-star text-yellow-500 ml-1 mt-2"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1 mb-2"></i>
                        <p className="font-Autor font-semibold text-sm text-gray-900 tracking-wide mt-2">Maria Noel Martínez</p>
                        <p className="font-Fuente text-sm text-gray-500 tracking-wide">mediante Play Store</p>
                    </div>
                    <div className="comentario bg-white p-5 m-5 rounded-3xl border-l-8 border-sky-200 mx-4">
                        <i className="fas fa-quote-right text-gray-300 text-4xl"></i>
                        <h4 className="text-2xl mt-2">Muy Buena!</h4>
                        <p className="text-base text-gray-500 italic pt-2 pb-2">Es un buena oportunidad de que niños (y adultos también) aprendan a darse un tiempo para escucharse y 'leer' cómo se sienten…</p>
                        <i className="fas fa-star text-yellow-500 ml-1 mt-2"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1 mb-2"></i>
                        <p className="font-Autor font-semibold text-sm text-gray-900 tracking-wide mt-2">Belen Cacere</p>
                        <p className="font-Fuente text-sm text-gray-500 tracking-wide">mediante Play Store</p>
                    </div>
                    <div className="comentario bg-white p-5 m-5 rounded-3xl border-l-8 border-sky-200 ">
                        <i className="fas fa-quote-right text-gray-300 text-4xl"></i>
                        <h4 className="text-2xl mt-2">Exelente!</h4>
                        <p className="text-base text-gray-500 italic pt-2 pb-2">Excelente la app! Me encontré con muchos recursos para conocer más a mi hija y herramientas para ella…</p>
                        <i className="fas fa-star text-yellow-500 ml-1 mt-2"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1"></i>
                        <i className="fas fa-star text-yellow-500 ml-1 mb-2"></i>
                        <p className="font-Autor font-semibold text-sm text-gray-900 tracking-wide mt-2">Rosario Moraco</p>
                        <p className="font-Fuente text-sm text-gray-500 tracking-wide">mediante Play Store</p>
                    </div>
                </Slider>
            </div>
            <br /><br />
        </div>
    );
};

export default Comentarios;
