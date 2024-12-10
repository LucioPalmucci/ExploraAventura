import { useEffect } from "react";

function Footer() {

  useEffect(() => {
    const handleResize = () => {
      const logo = document.getElementById('Logo2');
      if(window.innerWidth < 538){
        logo.width = 200;
      }
      else{
        logo.width = 250;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="p-16 bg-[#313834]">
        <img id="Logo2" width="250" height={20} src="https://exploraventura.com.ar/wp-content/uploads/2024/05/cropped-EXPLORAVENTURA.png" className="justify-self-center"/>
        <br />
        <p className="text-sky-400/25 md:text-lg">© 2024 Exploraventura. All rights reserved.</p>
    </div>
  );
}

export default Footer;