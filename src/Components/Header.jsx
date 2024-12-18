import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const encabezado = document.getElementById('Encabezado');
      const bars = document.getElementById('bars');
      const Paginas = document.getElementById('Paginas');
      const logo = document.getElementById('Logo');

      if (encabezado) {
        if (window.innerWidth < 1427) {
          encabezado.classList.remove('space-x-72');
          encabezado.classList.add('space-x-10');
        } else {
          encabezado.classList.remove('space-x-10');
          encabezado.classList.add('space-x-72');
        }
      }
      if(bars){
        if(window.innerWidth < 1024){
          bars.classList.remove('hidden');
          Paginas.classList.add('hidden');

        }else{
          bars.classList.add('hidden');
          Paginas.classList.remove('hidden');
        }
      }
      if(logo){
        if(window.innerWidth < 390){
          logo.width = 130;
        }
        else if(window.innerWidth < 534){
          logo.width = 180;
        }
        else{
          logo.width = 294;
        }
      };
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="Encabezado" className="w-full flex items-center justify-between space-x-72 p-5 font-Nunito font-semibold bg-cielo fixed">
      <img id="Logo" width="294" height={23} src="https://exploraventura.com.ar/wp-content/uploads/2024/05/cropped-EXPLORAVENTURA.png" className="animate-slideInLeft" />
      <div className="lg:flex space-x-10 animate-slideInLeft" id="Paginas">
        <h5><a href='#home'>Home</a></h5>
        <h5><a href='#desc'>Regulación Emocional</a></h5>
        <h5><a href='#mind'>Mindfulness</a></h5>
        <h5><a href='#app'>Aprender</a></h5>
      </div>
      <button className="sm:text-lg max-sm:text-xs p-2 pl-5 pr-5 rounded-3xl bg-red-500 text-white">¡Juega Ahora!</button>
      <div className="hidden" id='bars'>
        <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} color='black' />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg z-50">
          <ul className="space-y-2 sm:text-xs">
            <li className='hover:bg-gray-200 p-2 rounded-lg'><a href='#home'>Home</a></li>
            <li className='hover:bg-gray-200 p-2 rounded-lg'><a href='#desc'>Regulación Emocional</a></li>
            <li className='hover:bg-gray-200 p-2 rounded-lg'><a href='#mind'>Mindfulness</a></li>
            <li className='hover:bg-gray-200 p-2 rounded-lg'><a href='#app'>Aprender</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;