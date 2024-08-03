// import { Logout, Monitor } from "iconsax-react"
// import logo from "../assets/img/logo.png";
// import { useNavigate } from "react-router-dom";
import background from "../assets/img/fondoDesktop.gif";
import fotoNovios from "../assets/img/foto_novios.webp";
import arco from "../assets/img/arco.png";
import arcoDown from "../assets/img/arco_down.png";
import ButtonComponent from "./components/button/buttonComponent";
import { useEffect, useState } from "react";
const Invitacion = () => {
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
    <div className="w-full ">

      <img src={background} className='fixed top-0 left-0 w-full min-h-full object-cover' style={{ zIndex: -1 }} alt="" />
      <img src={fotoNovios} className="" alt="" />
      <div className={`w-full floating-button ${isVisible ? 'visible' : 'hidden'} z-10 fixed top-5`}>

        <ButtonComponent text={"Si deseas regalar será muy apreciado"} icon={null} fontSize={"small"} animation={false} />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img className="w-[220px] md:w-[300px] mb-6" src={arco} alt="arco" />
        <div className='flex flex-col justify-center items-center gap-7'>
          <h1 className='primaryFont text-4xl md:text-5xl clr-gray200 text-[#464444]'>Jhon y Carmen</h1>
        </div>
        <img className="w-[220px] md:w-[300px] mt-6" src={arcoDown} alt="arco" />
      </div>
      <div className="mt-8 mb-8 pl-2 pr-2">
        <h1 className="text-lg font-medium clr-gray200 text-center secondFont">Con la bendición de Dios y de nuestros padres</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-4 mb-8">
          <p className="primaryFont text-3xl clr-primay">Padres del novio</p>
          <div className="flex flex-col gap-1 items-center">
            <p className="secondFont text-lg clr-gray100 ">Wilder Soploppuco Bobadilla</p>
            <p className="secondFont text-lg clr-gray100 ">Mónica Lavado Rodriguez</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mb-8">
          <p className="primaryFont text-3xl clr-primay">Padres de la novia</p>
          <div className="flex flex-col gap-1 items-center">
            <p className="secondFont text-lg clr-gray100 ">Abel Alayo Rodriguez</p>
            <p className="secondFont text-lg clr-gray100 ">Leydy Gonzales Rodriguez</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mb-8">
          <p className="primaryFont text-3xl clr-primay">Padrinos</p>
          <div className="flex flex-col gap-1 items-center">
            <p className="secondFont text-lg clr-gray100 ">Marco Montenegro</p>
            <p className="secondFont text-lg clr-gray100 ">Elizabeth Vega Pinchi</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mb-8">
          <p className="primaryFont text-3xl clr-primay">Testigos</p>
          <div className="flex flex-col gap-1 items-center">
            <p className="secondFont text-lg clr-gray100 ">Testigo 1</p>
            <p className="secondFont text-lg clr-gray100 ">Testigo 2</p>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Invitacion