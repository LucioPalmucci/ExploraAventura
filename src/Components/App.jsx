
function App() {
  return (
    <div className="flex justify-center bg-white w-full p-16">
        <div id="texto" className="font-Nunito w-1/2 p-20 pr-72 animate-slideRT">
            <h2 className="text-5xl font-bold p-1 text-red-500">El mejor juego en app para conectar y aprender</h2><br/>
            <p className="font-semibold text-resumen p-1">En todos los casilleros del juego van a encontrar propuestas para:<br/>
            - Entrenar la atención en el <b>cuerpo</b> y la imaginación.<br/>
            - Explorar y acompañar <b>emociones.</b><br/>
            - Observar los <b>pensamientos</b>.<br/>
            - Entrenar la <b>atención</b>, dándonos cuenta cada vez más fácilmente cuando nos distraemos, reforzando nuestra <b>concentración.</b><br/>
            - Fortalecer la capacidad de <b>agradecer</b> y saborear las experiencias de felicidad.<br/>
            - Desarrollar la <b>compasión</b> y la auto-compasión</p><br/><br/>
            <button className="text-base p-4 pl-8 pr-8 rounded-3xl bg-red-500 text-white hover:bg-violet-950 animate-slideInBottom">¡Descarga la app!</button>
        </div>
        <div id="img">
            <img src="https://exploraventura.com.ar/wp-content/uploads/2024/05/imagen-1024x1024.png" alt="" height={620} width={620} />
        </div>
    </div>
  );
}

export default App;