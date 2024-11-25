import React, { useEffect, useState } from 'react';
import JuegaAhora from "./JuegaAhora";

function Descripcion(){
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <div className="font-Nunito flex justify-center align-center mt-40 ml-32 mr-32 rounded-3xl bg-white p-10 pl-16 pr-16">
            <div id="texto" className="w-4/5 pl-16 pr-16">
                <h4 className="text-xl p-1 text-sky-600 font-semibold">Creado por psicólogos expertos</h4><br/>
                <h2 className="text-5xl font-bold p-1 text-red-500">Regulación emocional en una app</h2><br/>
                <p className="font-semibold text-resumen p-1">En Exploraventura van a encontrar recursos para que los niños aprendan a acompañar las emociones difíciles
                    y puedan volver a la calma. Practicarán la observación de sus sensaciones físicas, pensamientos, emociones, reacciones y conductas.</p><br/><br/>
                <div className="justify-center flex mr-6">
                    <JuegaAhora/>
                </div>
            </div>
            <div id="LineaV" className="w-px bg-black h-auto mr-5" ></div>
            <div id="Imagenes" className="flex justifiy-center align-center p-8">
                <div id="Calma" className="p-8 text-center">
                    <img src="https://exploraventura.com.ar/wp-content/uploads/2024/05/items-01.png" alt="" width={350} height={350}  className=" mt-10"/>
                    <h3 className="font-bold text-xl mt-16">CALMA:</h3><br/>
                    <h4 className="text-xl">Aprender a darse cuenta cuándo necesitan un momento de calma y cómo ayudarlo</h4>
                </div>
                <div id="Emociones y pensamientos" className="p-8 text-center">
                    <img src="https://exploraventura.com.ar/wp-content/uploads/2024/05/items-02.png" alt="" width={280} height={280}/>
                    <h3 className="font-bold text-xl mt-16">EMOCIONES Y PENSAMIENTOS:</h3><br/>
                    <h4 className="text-xl">Fortalecer la autoobservación y regulación. Aprender qué pensamientos ayudan y cuáles no</h4>
                </div>
                <div id="Cuerpo" className="p-8 text-center">
                    <img src="https://exploraventura.com.ar/wp-content/uploads/2024/05/items-03.png" alt="" width={280} height={280}/>
                    <h3 className="font-bold text-xl mt-16">CUERPO:</h3><br/>
                    <h4 className="text-xl">Registrar las sensaciones físicas y reconocer las necesidades del cuerpo ayuda a cuidarlo y respetarlo</h4>
                </div>
            </div>
            {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-10 bg-white p-2 rounded-full pl-4 pr-4 border border-black hover:bg-gray-950 hover:text-white transition duration-300 animate-bounce"
            >
              ↑
            </button>
            )}
        </div>
    )
}

export default  Descripcion;