// import { Logout, Monitor } from "iconsax-react"
// import logo from "../assets/img/logo.png";
// import { useNavigate } from "react-router-dom";
import background from "../assets/img/fondoDesktop.gif";
import fotoNovios from "../assets/img/foto_novios.webp";
import arco from "../assets/img/arco.png";
import arcoDown from "../assets/img/arco_down.png";
import hoja from "../assets/img/hoja.png";
import hojaDerecha from "../assets/img/hojaDerecha.png";
import arcoFecha from "../assets/img/arco_fecha.png";
import calendar from "../assets/img/calendar.svg";
import novia from "../assets/img/novia.png";
import novio from "../assets/img/novio.png";
import aros from "../assets/img/aros.svg";
import recepcion from "../assets/img/recepcion.svg";
import vestimenta from "../assets/img/vestimenta.svg";
import camara from "../assets/img/camara.svg";
import cajaregalo from "../assets/img/caja-regalo.svg";
import celebrate from "../assets/img/celebrate.png";
import appstore from "../assets/img/appstore.webp";
import playstore from "../assets/img/playstore.webp";
import qr from "../assets/img/qr.jpg";
import yape from "../assets/img/yape.png";
import bcp from "../assets/img/bcp-logo.png";
import asistencia from "../assets/img/asistencia.svg";
import { useEffect, useState } from "react";
import WeddingDay from "./components/weddingDay/weddingDay";
import { Link } from "react-router-dom";
import ButtonComponent from "./components/button/buttonComponent";
import { Add, ArrowLeft, CalendarTick, Camera, Gallery, Gift, Home, Like1, Location, Lovely, Mobile } from "iconsax-react";
import CustomDrawer from "./components/drawer/Drawer";
import { Box, Fab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from "swiper/modules";
import IconTabs from "./components/tabs/TabCompoent";
import NumeroChip from "./components/chip/numero_chip";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Invitacion = () => {

  const weddingDate = new Date('2025-01-12T00:00:00');

  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerRegalosOpen, setIsDrawerRegalosOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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

  const toggleDrawerFotos = (open: boolean) => {
    setIsDrawerOpen(open);
  };
  const toggleDrawerRegalos = (open: boolean) => {
    setIsDrawerRegalosOpen(open);
  };
  const toogleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración más larga
      easing: 'ease-in-out',
      mirror: true,
      offset: 120
    });
  }, []);
  // const logout = () => {
  //   navigate('/');
  // };

  return (

    <div>
      <img src={background} className='fixed top-0 left-0 w-full min-h-full object-cover' style={{ zIndex: -1 }} alt="" />
      <img src={fotoNovios} className="h-auto object-cover" style={{ zIndex: -1 }} alt="" />
      <div className={`w-full floating-button ${isVisible ? 'visible' : 'hidden'} z-10 fixed top-0`}>
        <div className="back-primary p-3 flex items-center">
          <span className="text-white text-sm treeFont px-2">🎁  Si deseas tener un detalle con nosotros
          </span>
          👉
          <div onClick={() => toggleDrawerRegalos(true)} className="back-pink600 w-[70px] p-1 rounded-full px-5 text-white text-[13px] ml-1 ">Aqui</div>
        </div>
      </div>
      {/* <ButtonComponent text={"aquí"} icon={null} fontSize={"small"} animation={false} background={"#AB7779"} /> */}
      <div className="container overflow-x-hidden relative " style={{ marginTop: "-5em" }}>
        <Box className="fixed bottom-4 right-4" sx={{ '& > :not(style)': { m: 1 }, zIndex: 2 }}>
          <div className={`flex flex-col gap-2 transition-all duration-200 ${isOpenMenu ? 'visible ' : 'h-[0] hidden'}`}>
            <Fab size="large" sx={{ background: "#FFE8EA" }} aria-label="add">
              <Location size="32" color="#AB7779" />
            </Fab>
            <Fab size="large" sx={{ background: "linear-gradient(90deg,#E87785,#E1656E)", border: "1.5px dashed white" }} aria-label="add">
              <Camera size="32" color="#FFFFFF" />
            </Fab>
            <Fab size="large" sx={{ background: "#FFE8EA" }} aria-label="add">
              <Gift size="32" color="#AB7779" />
            </Fab>
            <Fab size="large" sx={{ background: "#FFE8EA" }} aria-label="add">
              <CalendarTick size="32" color="#AB7779" />
            </Fab>
          </div>
          <Fab size="large" onClick={() => toogleMenu()} sx={{ background: "linear-gradient(90deg,#86977E,#495245)" }} aria-label="add">
            {
              isOpenMenu ? <Add size="32" color="#FFFFFF" style={{ transform: "rotate(45deg)" }} /> : <Lovely size="32" color="#FFFFFF" />
            }
          </Fab>
        </Box>

        <div className='flex flex-col justify-center items-center h-[500px]' >
          <figure data-aos="zoom-in">
            <img className="w-[300px] md:w-[300px] mb-2" src={arco} alt="arco" />
          </figure>
          <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-7'>
            <p className="secondFont text-lg clr-gray100" style={{ letterSpacing: "2.5px" }}>NUESTRA BODA</p>
            <h1 className='primaryFont text-5xl md:text-5xl clr-gray200 text-[#464444]'>Jhon y Carmen</h1>
          </div>
          <figure data-aos="zoom-in">
            <img className="w-[300px] md:w-[300px] mt-6" src={arcoDown} alt="arco" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <div className="p-8">
            <h1 className="text-xl font-medium clr-gray200 text-center secondFont">Con la bendición de Dios y de nuestros padres</h1>
          </div>
          <img data-aos="fade-right" src={hoja} className="absolute left-0" style={{ zIndex: "-1" }} alt="" />
          <div className="flex flex-col justify-center items-center">
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
                <p className="treeFont text-lg clr-gray100 ">José López Santillán</p>
                <p className="treeFont text-lg clr-gray100 ">Testigo 2</p>
              </div>
            </div>
          </div>
          <img data-aos="fade-left" src={hojaDerecha} className="absolute right-0 bottom-2" style={{ zIndex: "-1" }} alt="" />
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
          <p className="treeFont text-lg clr-gray200 font-semibold text-center">Iglesia MMM Alto Trujillo</p>
          <p className="treeFont text-lg clr-gray200 text-center">Te esperamos el</p>
          <div className="flex justify-between items-center gap-8 mt-5 mb-5">
            <span className="secondFont text-2xl font-semibold clr-primary">12 ENERO</span>
            <div className="h-[60px] w-[1px] back-primary"></div>
            <span className="secondFont text-2xl font-semibold clr-primary">4:00 PM</span>
          </div>
          <p className="treeFont text-lg clr-gray200 mb-5 text-center">MZ. A Lote 6 Barrio 3A</p>
          <Link to="https://maps.app.goo.gl/3qThoqwXaq5etw536.." target="_blank" className="w-[70%]" >
            <ButtonComponent text={"Ver ubicación"} icon={<Location size="20" color="#FFFFFF" />} fontSize={"large"} background={null} animation={false} />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-2">
          <img src={recepcion} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Recepción</h2>
          <p className="treeFont text-lg clr-gray200 font-semibold text-center">Villa Bianca Eventos</p>
          <p className="treeFont text-lg clr-gray200 text-center">Te esperamos el</p>
          <div className="flex justify-between items-center gap-8 mt-5 mb-5">
            <span className="secondFont text-2xl font-semibold clr-primary">12 ENERO</span>
            <div className="h-[60px] w-[1px] back-primary"></div>
            <span className="secondFont text-2xl font-semibold clr-primary">6:00 PM</span>
          </div>
          <p className="treeFont text-lg clr-gray200 mb-5 text-center">Calle Ricardo Palma #20 - Huanchaco</p>
          <Link to="https://maps.app.goo.gl/hotmDNwbgi8PqoUa8" target="_blank" className="w-[70%]" >
            <ButtonComponent text={"Ver ubicación"} icon={<Location size="20" color="#FFFFFF" />} fontSize={"large"} background={null} animation={false} />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-2 px-4" >
          <img src={vestimenta} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Outfit</h2>
          <p className="treeFont text-2xl clr-primary uppercase font-bold">Elegante</p>
          <p className="treeFont text-lg clr-gray200 text-center">Sabemos que te verás súper</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-2 px-4 w-full" >
          <img src={camara} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Fotos</h2>
          <p className="treeFont text-lg clr-gray200 font-semibold text-center">Armemos nuestro álbum de fotos</p>
          <p className="treeFont text-lg clr-gray200 text-center mb-5 w-full">Guardemos cada momento especial</p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <p className="treeFont w-full m-auto text-center">Escanea el código con la cámara de tu celular</p>
            <div className="bg-white p-4 rounded-lg">
              <img src={qr} className="h-[200px]" alt="" />
            </div>
            <p className="treeFont w-full m-auto text-center">- O ingresa el código -</p>
            <p className="treeFont font-bold text-2xl mb-5">HLYYKTXK</p>
          </div>
          <div onClick={() => toggleDrawerFotos(true)} className="w-[70%]" >
            <ButtonComponent text={"Mas información"} icon={<Camera size="20" color="#FFFFFF" />} fontSize={"large"} background={"linear-gradient(90deg,#E87785,#E1656E)"} animation={false} />
          </div>
          <CustomDrawer
            isOpen={isDrawerOpen}
            toggleDrawer={toggleDrawerFotos}
            content={
              <Box className="flex flex-col  w-full">

                <div className="relative rounded-t-lg bg-gradient-to-r from-[#86977E] to-[#495245] p-4">
                  <h1 className="secondFont text-white font-semibold text-xl">Guardemos recuerdos</h1>
                  <Gallery size="62" color="#FFFFFF" className="absolute right-4 bottom-0 top-2 opacity-50" />
                </div>
                <div className="p-4 gap-5 flex flex-col">
                  <div onClick={() => toggleDrawerFotos(false)} className="flex gap-2 p-2 items-center back-primary w-[30%] rounded-full text-white" >
                    <ArrowLeft size="16" color="#FFFFFF" />
                    <p className="treeFont text-xs">Volver atrás</p>
                  </div>
                  <p className="treeFont text-sm">Para poder compartir fotos de la boda de <b>Jhon y Carmen</b> en 1 solo álbum, sigue los siguientes pasos:</p>
                  <div className="flex gap-2">
                    <p className="back-primary w-[30px] h-[30px] flex justify-center items-center rounded-full text-white">1</p>
                    <p className="treeFont text-lg">Descarga la aplicación.</p>
                  </div>
                  <img src={celebrate} className="h-[100px] m-auto" alt="" />
                  <p className="m-auto treeFont font-semibold clr-primary text-center w-full">Descargala gratis</p>
                  <div className="flex m-auto">
                    <Link to="https://itunes.apple.com/de/app/celebrate-hochzeitsfotos/id1453163913" target="_blank">
                      <img src={appstore} alt="" />
                    </Link>
                    <Link to="https://play.google.com/store/apps/details?id=app.celebrate.celpho" target="_blank">
                      <img src={playstore} alt="" />
                    </Link>
                  </div>
                  <div className="flex gap-2 w-full">
                    <p className="back-primary w-[30px] h-[30px] flex justify-center items-center rounded-full p-3 text-white">2</p>
                    <p className="treeFont text-lg">Únete escaneando el código QR o ingresando el código mostrado anteriormente.</p>
                  </div>
                  <div className="flex gap-2 w-full">
                    <p className="back-primary w-[30px] h-[30px] flex justify-center items-center rounded-full p-3 text-white">3</p>
                    <p className="treeFont text-lg">Sube tus fotos a la app.</p>
                  </div>
                </div>
              </Box>
            }
            anchor="bottom"
          />
        </div>
        <h1 className="primaryFont text-center clr-primary text-4xl font-medium mb-10">Galería de fotos</h1>
        <div className="flex justify-center items-center p-0 m-0">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 mb-8 gap-2 px-4" >
          <img src={cajaregalo} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Regalos</h2>
          <p className="treeFont text-lg text-center clr-gray200 font-medium">Tu presencia es lo más importante</p>
          <p className="treeFont text-lg clr-gray200 text-center mb-5">Pero si deseas expresarnos tu cariño puedes hacerlo aquí</p>
          <div onClick={() => toggleDrawerRegalos(true)} className="w-[70%]" >
            <ButtonComponent text={"Quiero regalar"} icon={<Gift size="20" color="#FFFFFF" />} fontSize={"large"} background={null} animation={false} />
          </div>
          <CustomDrawer
            isOpen={isDrawerRegalosOpen}
            toggleDrawer={toggleDrawerRegalos}
            content={
              <Box className="flex flex-col gap-5 w-full">
                <div className="relative rounded-t-lg bg-gradient-to-r from-[#86977E] to-[#495245] p-4">
                  <h1 className="secondFont text-white font-semibold text-xl">Regalos</h1>
                  <Gift size="62" color="#FFFFFF" className="absolute right-4 bottom-0 top-2 opacity-50" />
                </div>
                <div>
                  <div onClick={() => toggleDrawerRegalos(false)} className="flex  gap-2 mb-5 px-4 py-2 items-center back-primary w-[30%] ml-4 rounded-full text-white" >
                    <ArrowLeft size="16" color="#FFFFFF" />
                    <p className="treeFont text-xs">Volver atrás</p>
                  </div>
                  <p className="treeFont clr-gray200 px-4">Si deseas regalar puedes hacerlo de 2 formas:</p>
                  <IconTabs
                    tabs={[
                      {
                        label: 'Virtual',
                        icon: <Mobile size={"32px"} />,
                        content:
                          <div className="flex flex-col gap-8  items-center h-[400px] overflow-y-auto">
                            <img src={yape} className="w-[50px] h-[60px]" alt="" />
                            <div className="flex w-full flex-col justify-center items-center gap-4">
                              <h1 className="primaryFont clr-primary text-3xl text-center">Novio</h1>
                              <NumeroChip label={"939945744"} />
                            </div>
                            <div className="flex w-full flex-col justify-center items-center gap-4">
                              <h1 className="primaryFont clr-primary text-3xl text-center">Novia</h1>
                              <NumeroChip label={"900808268"} />
                            </div>
                            <img src={bcp} className="w-[100px] h-[28px]" alt="" />
                            <div className="flex w-full flex-col justify-center items-center gap-4">
                              <NumeroChip label={"57099271924024"} />
                              <p className="treeFont uppercase">- Interbancario -</p>
                              <NumeroChip label={"00257019927192402401"} />
                            </div>
                          </div>

                      },
                      {
                        label: 'Presencial',
                        icon: <Home size={"32px"} />,
                        content:
                          <div className="flex flex-col gap-8  items-center h-[400px] overflow-y-auto">
                            <p className="treeFont text-md clt-gray200">Si gustas dejarnos un presente de manera presencial, te dejamos la ubicación para que puedas hacerlo llegar.</p>
                            <Link to="https://maps.app.goo.gl/CKYCHWhiKDEht3Rn9" target="_blank">
                              <ButtonComponent
                                text={"MZ.E Lote 93 Barrio 2B - Alto Trujillo"}
                                icon={<Location size="20" color="#FFFFFF" />}
                                fontSize={"medium"}
                                animation={true}
                                background={null}
                              />
                            </Link>
                          </div>
                      },
                    ]}
                  />
                </div>
              </Box>
            }
            anchor="bottom"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-12 mb-8 gap-2 px-4" >
          <img src={asistencia} className="h-[100px]" alt="" />
          <h2 className="secondFont text-2xl font-bold clr-gray200 uppercase" style={{ letterSpacing: "2.5px" }}>Asistencia</h2>
          <p className="treeFont text-lg clr-gray200 font-semibold text-center">La pasaremos genial</p>
          <p className="treeFont text-lg clr-gray200 text-center mb-5">Te agradecemos que nos confirmes tu asistencia antes del <b>01 de diciembre</b>. Tu respuesta es muy importante para nosotros.</p>
          <div className="flex w-full flex-col justify-center items-center gap-4">
            <div className="flex w-full justify-center items-center gap-4">
              <h1 className="primaryFont text-3xl">Novio</h1>
              <Link to="https://wa.link/zrls3s" target="_blank">
                <ButtonComponent text={"Confirmar"}
                  icon={<Like1 size="22" className="white" />}
                  fontSize={"medium"}
                  animation={false}
                  background={null}
                />
              </Link>
            </div>
            <div className="flex w-full  justify-center items-center gap-4">
              <h1 className="primaryFont text-3xl">Novia</h1>
              <Link to="https://wa.link/prcsoy" target="_blank">
                <ButtonComponent text={"Confirmar"}
                  icon={<Like1 size="22" color="#FFFFFF" />}
                  fontSize={"medium"}
                  animation={false}
                  background={null}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Invitacion