import JuegaAhora from "./JuegaAhora";

function Celular(){
    return(
        <div className="font-Nunito flex justify-center align-center mt-4 ml-32 mr-32 pl-16 pr-16">
            <div id="Img" className="mt-0">
                <img src="https://exploraventura.com.ar/wp-content/uploads/2024/05/08-01-1024x1024.png" alt="" height={600} width={730} />
            </div>
            <div id="texto" className="w-3/5 pr-48">
                <h4 className="text-xl p-1 text-red-400 font-semibold">Juega y conecta como nunca antes...</h4><br/>
                <h2 className="text-5xl font-bold p-1 text-sky-700">Mindfulness como un medio de conexión</h2><br/>
                <p className="font-semibold text-resumen p-1">Mindfulness es la capacidad que tenemos todas las personas de prestar
                atención al momento presente de una manera especial:<br/>
                1) Sintiendo con todo el cuerpo.<br/>
                2) Escuchándonos a nosotros mismos.<br/>
                3) Escuchando al otro.<br/>
                4) Entendiendo cuando un pensamiento o juicio no nos deja hacer lo anterior.</p><br/>
                <p className="font-semibold text-resumen p-1">
                Con Exploraventura podrás entrenar esta capacidad y lograr una mayor conexión con vos mismo y con los demás.
                </p><br/><br/>
                <div className="justify-center align-center flex mr-6">
                    <JuegaAhora/>
                </div>
            </div>
        </div>
    )
}

export default Celular;