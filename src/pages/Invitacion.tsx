// import { Logout, Monitor } from "iconsax-react"
// import logo from "../assets/img/logo.png";
// import { useNavigate } from "react-router-dom";
import background from "../assets/img/fondoDesktop.gif";
import fotoNovios from "../assets/img/foto_novios.webp";
import arco from "../assets/img/arco.png";
import arcoDown from "../assets/img/arco_down.png";
import hoja from "../assets/img/hoja.png";
import arcoFecha from "../assets/img/arco_fecha.png";
import { useEffect, useState } from "react";
import WeddingDay from "./components/weddingDay/weddingDay";
const Invitacion = () => {

  const weddingDate = new Date('2025-01-12T00:00:00');

  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(true);
    } else {
      // Scrolling up
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  // const navigate = useNavigate();


  // const logout = () => {
  //   navigate('/');
  // };

  return (
    <div className="w-full">
      <img src={background} className='fixed top-0 left-0 w-full min-h-full object-cover' style={{ zIndex: -1 }} alt="" />
      <img src={fotoNovios} className="" alt="" />
      <div className={`w-full floating-button ${isVisible ? 'visible' : 'hidden'} z-10 fixed top-0`}>
        <div className="back-primary p-2">
          <span className="text-white text-sm treeFont px-2">🎁  Si deseas regalar aquí</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center' style={{ marginTop: "-5em" }}>
        <img className="w-[300px] md:w-[300px] mb-2" src={arco} alt="arco" />
        <div className='flex flex-col justify-center items-center gap-7'>
          <span className="text-2xl">❣️🥰👫💍👩‍❤️‍👨💐✨</span>
          <p className="secondFont text-lg clr-gray100" style={{ letterSpacing: "2.5px" }}>NUESTRA BODA</p>
          <h1 className='primaryFont text-5xl md:text-5xl clr-gray200 text-[#464444]'>Jhon y Carmen</h1>
        </div>
        <img className="w-[300px] md:w-[300px] mt-6" src={arcoDown} alt="arco" />
      </div>
      <div className="relative">
        <div className="p-8">
          <h1 className="text-xl font-medium clr-gray200 text-center secondFont">Con la bendición de Dios y de nuestros padres</h1>
        </div>
        <img src={hoja} className="absolute top-32 " style={{ zIndex: "-1" }} alt="" />
        <img src={hoja} className="absolute top-96 transform scale-x-[-1] right-0" style={{ zIndex: "-1" }} alt="" />
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center gap-4 mb-8">
            <p className="primaryFont text-3xl clr-primary">Padres del novio</p>
            <div className="flex flex-col gap-1 items-center">
              <p className="treeFont text-lg clr-gray100 ">Wilder Soploppuco Bobadilla</p>
              <p className="treeFont text-lg clr-gray100 ">Mónica Lavado Rodriguez</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mb-8">
            <p className="primaryFont text-3xl clr-primary">Padres de la novia</p>
            <div className="flex flex-col gap-1 items-center">
              <p className="treeFont text-lg clr-gray100 ">Abel Alayo Rodriguez</p>
              <p className="treeFont text-lg clr-gray100 ">Leydy Gonzales Rodriguez</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mb-8">
            <p className="primaryFont text-3xl clr-primary">Padrinos</p>
            <div className="flex flex-col gap-1 items-center">
              <p className="treeFont text-lg clr-gray100 ">Marco Montenegro</p>
              <p className="treeFont text-lg clr-gray100 ">Elizabeth Vega Pinchi</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <p className="primaryFont text-3xl clr-primary">Testigos</p>
            <div className="flex flex-col gap-1 items-center">
              <p className="treeFont text-lg clr-gray100 ">Testigo 1</p>
              <p className="treeFont text-lg clr-gray100 ">Testigo 2</p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-xl font-medium clr-gray200 text-center secondFont">Nos complace invitarte al día más importante de nuestras vidas.</h1>
          {/* <img src={aros} className="h-[80px]" alt="" /><br /> */}
        </div>
        <h1 className="primaryFont clr-primary text-center text-4xl  m-auto">👰‍♀️¡ Nos Casamos !🤵‍♂️</h1>
        <div className="relative flex justify-center items-center">
          <img src={arcoFecha} className=" w-full object-cover" alt="" />
          <div className="absolute flex justify-center items-center flex-col">
            <h1 className="secondFont  text-center text-5xl font-semibold clr-pink600 m-auto">12</h1>
            <div className="mt-8 flex flex-col gap-3">
              <p className="secondFont text-2xl clr-gray200 text-center">ENERO</p>
              <div className="flex gap-4 ">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[100px] h-[2px] back-gray100"></div>
                  <span className="treeFont text-xl">Domingo</span>
                  <div className="w-[100px] h-[2px] back-gray100"></div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[100px] h-[2px] back-gray100"></div>
                  <span className="treeFont text-xl">4:00 pm</span>
                  <div className="w-[100px] h-[2px] back-gray100"></div>
                </div>
              </div>
              <span className="treeFont text-xl text-center">2025</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-xl font-medium clr-gray200 text-center secondFont">Cada segundo nos acerca más al mágico día de nuestra boda.</h1>
        </div>
        <WeddingDay targetDate={weddingDate} />
      </div>
    </div>

  )
}

export default Invitacion