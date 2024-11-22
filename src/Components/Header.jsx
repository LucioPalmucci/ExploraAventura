function Header(){
    return(
        <div id="Encabezado" className="w-full flex items-center justify-center space-x-72 p-5 font-Nunito font-semibold bg-cielo fixed">
            <img id="Logo" width="294" height={23} src="https://exploraventura.com.ar/wp-content/uploads/2024/05/cropped-EXPLORAVENTURA.png" className=""/>
            <div className="flex space-x-10 ">
                <h5>Home</h5>
                <h5>Regulación Emocional</h5>
                <h5>Mindfulness</h5>
                <h5>Aprender</h5>
            </div>
            <button className="text-lg p-2 pl-5 pr-5 rounded-3xl bg-red-500 text-white">¡Juega Ahora!</button>
        </div>
    )
}

export default Header;