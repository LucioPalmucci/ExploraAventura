import { useEffect, useState } from "react";
import JuegaAhora from "./JuegaAhora";
function Introduction(){
    const [isImageVisible, setIsImageVisible] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
        setIsImageVisible(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return(
        <div className="w-full flex mr-0 bg-cielo" id="contenedor">
            <div className="m-16 font-Nunito mt-28 text-start animate-slideRT lg:w-1/3"  id="texto">
                <h4 className="text-xl p-1 text-sky-600 font-semibold">Un viaje de diversión y conexión con los niños</h4><br/>
                <h2 className="text-5xl font-bold p-1">Un juego para aprender de mindfulness y regulación emocional</h2><br/>
                <p className="font-semibold text-resumen p-1">Los adultos encontrarán en este juego la posibilidad de fortalecer el vínculos con los niños.
                    Es una oportunidad para conocerlos más, descubriendo cómo piensan y sienten respecto a muchas situaciones.</p><br/>
                <p className="font-semibold text-resumen p-1">La app es un estímulo para generar espacios de conversación y reflexión con ellos,
                    desarrollando y fortaleciendo recursos a través del juego.</p><br/>
                <div className="animate-slideLB">
                    <JuegaAhora/>
                </div>
            </div>
            {isImageVisible &&(
            <div className=" mt-28 ml-auto" id="img" style={{display:"block"}} >
                <img src="https://exploraventura.com.ar/wp-content/uploads/2024/05/familia4-1024x1024.png" width="780" height="780"/>
            </div>
            )}
        </div>
    );
}

export default Introduction;