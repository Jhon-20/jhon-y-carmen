// import { Logout, Monitor } from "iconsax-react"
// import logo from "../assets/img/logo.png";
// import { useNavigate } from "react-router-dom";
import background from "../assets/img/fondoDesktop.gif";
import fotoNovios from "../assets/img/foto_novios.webp";
import arco from "../assets/img/arco.png";
import arcoDown from "../assets/img/arco_down.png";
import hoja from "../assets/img/hoja.png";
import arcoFecha from "../assets/img/arco_fecha.png";
import calendar from "../assets/img/calendar.svg";
import novia from "../assets/img/novia.png";
import novio from "../assets/img/novio.png";
import aros from "../assets/img/aros.svg";
import recepcion from "../assets/img/recepcion.svg";
import { useEffect, useState } from "react";
import WeddingDay from "./components/weddingDay/weddingDay";
import { Link } from "react-router-dom";
import ButtonComponent from "./components/button/buttonComponent";
import { Location } from "iconsax-react";
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
        <div className="back-primary p-3 flex items-center">
          <span className="text-white text-sm treeFont px-2">🎁  Si deseas tener un detalle con nosotros
          </span>
          👉
          <Link to={""} ><div className="back-pink600 w-full p-1 rounded-full px-5 text-white text-[13px] ml-1">Aqui</div></Link>

        </div>
      </div>
      {/* <ButtonComponent text={"aquí"} icon={null} fontSize={"small"} animation={false} background={"#AB7779"} /> */}
      <div className='flex flex-col justify-center items-center' style={{ marginTop: "-5em" }}>
        <img className="w-[300px] md:w-[300px] mb-2" src={arco} alt="arco" />
        <div className='flex flex-col justify-center items-center gap-7'>
          {/* <span className="text-2xl">❣️🥰👫💍👩‍❤️‍👨💐✨</span> */}
          <p className="secondFont text-lg clr-gray100" style={{ letterSpacing: "2.5px" }}>NUESTRA BODA</p>
          <h1 className='primaryFont text-5xl md:text-5xl clr-gray200 text-[#464444]'>Jhon y Carmen</h1>
        </div>
        <img className="w-[300px] md:w-[300px] mt-6" src={arcoDown} alt="arco" />
      </div>
      <div className="relative ">
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

        <div className="flex items-center justify-center gap-2">
          <img src={novia} className="w-[46px]" alt="" />
          <h1 className="primaryFont clr-primary text-center text-4xl  ">¡ Nos Casamos ! </h1>
          <img src={novio} className="w-[36px]" alt="" />
        </div>


        <div className="relative flex justify-center items-center">
          <img src={arcoFecha} className=" w-full object-cover" alt="" />
          <div className="absolute flex justify-center items-center flex-col">
            {/* <h1 className="secondFont text-5xl font-semibold clr-pink600">12</h1> */}
            <img src={calendar} className="right-0 absolute top-0 h-[60px]" alt="" />
            <div className="mt-12 flex flex-col gap-5 justify-center">
              <div className="flex flex-col gap-0">
                <p className="secondFont text-2xl font-bold clr-gray200 ">ENERO</p>
                <span className="treeFont text-xl">2025</span>
              </div>
              <div className="flex justify-between gap-10">
                <div className="flex flex-col gap-4 justify-center items-center opacity-50">
                  <span className="treeFont font-semibold clr-gray200">SA</span>
                  <span className="treeFont text-lg clr-gray100">11</span>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <span className="treeFont font-semibold clr-pink600">DOMINGO</span>
                  <span className="treeFont text-2xl back-pink600 text-white p-4 rounded-full">12</span>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center opacity-50">
                  <span className="treeFont font-semibold clr-gray200">LU</span>
                  <span className="treeFont text-lg clr-gray100">13</span>
                </div>

              </div>
              <p className="treeFont font-semibold text-xl text-center clr-gray200">4:00 PM</p>
              {/* <div className="flex gap-4 ">
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
              </div> */}

            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-xl font-medium clr-gray200 text-center secondFont">Cada segundo nos acerca más al mágico día de nuestra boda.</h1>
        </div>
        <p className="primaryFont text-4xl text-center clr-primary mb-6">Faltan...</p>
        <WeddingDay targetDate={weddingDate} />
        <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-2">
          <img src={aros} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Ceremonia</h2>
          <p className="treeFont text-xl clr-gray200 font-medium">Iglesia MMM Alto Trujillo</p>
          <p className="treeFont text-xl clr-gray200">Te esperamos el</p>
          <div className="flex justify-between items-center gap-8 mt-5 mb-5">
            <span className="secondFont text-2xl font-semibold clr-primary">12 ENERO</span>
            <div className="h-[60px] w-[1px] back-primary"></div>
            <span className="secondFont text-2xl font-semibold clr-primary">4:00 PM</span>
          </div>
          <p className="treeFont text-lg clr-gray200 mb-5 text-center">MZ. A Lote 6 Barrio 3A</p>
          <Link to="https://maps.app.goo.gl/3qThoqwXaq5etw536.." target="_blank" className="w-[70%]" >
            <ButtonComponent text={"Ver ubicación"} icon={<Location size="20" color="#FFFFFF" />} fontSize={"large"} background={null} animation={true} />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-2">
          <img src={recepcion} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Recepción</h2>
          <p className="treeFont text-xl clr-gray200 font-medium">Villa Bianca Eventos</p>
          <p className="treeFont text-xl clr-gray200">Te esperamos el</p>
          <div className="flex justify-between items-center gap-8 mt-5 mb-5">
            <span className="secondFont text-2xl font-semibold clr-primary">12 ENERO</span>
            <div className="h-[60px] w-[1px] back-primary"></div>
            <span className="secondFont text-2xl font-semibold clr-primary">6:00 PM</span>
          </div>
          <p className="treeFont text-lg clr-gray200 mb-5 text-center">Calle Ricardo Palma #20 - Huanchaco</p>
          <Link to="https://maps.app.goo.gl/hotmDNwbgi8PqoUa8" target="_blank" className="w-[70%]" >
            <ButtonComponent text={"Ver ubicación"} icon={<Location size="20" color="#FFFFFF" />} fontSize={"large"} background={null} animation={true} />
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Invitacion