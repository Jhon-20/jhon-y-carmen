import arco from "../assets/img/arco.png";
import arcoDown from "../assets/img/arco_down.png";
import sobre from "../assets/img/sobre.png";
import background from "../assets/img/fondoDesktop.gif";
import { CalendarTick, Gift, Location } from 'iconsax-react';
import ModalPresentes from "./components/modals/modal_presentes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ModalLocal from "./components/modals/modal_local";
import ModalAsistencia from "./components/modals/modal_asistencia";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();

    const invitacion = () => {
        navigate('/invitacion');
    };

    const [openModalPresentes, setOpenPresentes] = useState(false);
    const [openModalLocal, setOpenLocal] = useState(false);
    const [openModalAsistencia, setOpenAsistencia] = useState(false);
    const handleOpenPresentes = () => setOpenPresentes(true)
    const handleOpenLocal = () => setOpenLocal(true)
    const handleOpenAsistencia = () => setOpenAsistencia(true)

    const handleClose = () => {
        setOpenPresentes(false)
        setOpenLocal(false)
        setOpenAsistencia(false)
    };


    return (
        <div className=" w-full min-h-full md:h-screen flex items-center justify-center py-10">
            <img src={background} className='fixed top-0 left-0 w-full min-h-full object-cover' style={{ zIndex: -1 }} alt="" />
            <section>
                <div className="flex items-center flex-col md:flex-row justify-center gap-12 lg:gap-24  lg:py-0">
                    <div className='flex flex-col justify-center items-center'>
                        <img className="w-[220px] md:w-[300px] mb-6" src={arco} alt="arco" />
                        <div className='flex flex-col justify-center items-center gap-7'>
                            <h1 className='primaryFont text-4xl md:text-5xl text-[#464444]'>Jhon y Carmen</h1>
                            <p className='secondFont text-xl md:text-2xl  font-normal text-[#717171]'>12 de Enero | 04:00 pm</p>
                        </div>
                        <img className="w-[220px] md:w-[300px]" src={arcoDown} alt="arco" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='sobre w-[280px] md:w-[380px] cursor-pointer' style={{ animation: "pulsar 5s infinite" }} src={sobre} alt="sobre" onClick={invitacion} />
                        <p className='text-[18px] text-[#717171] secondFont font-light mb-6'>LINKS DE AYUDA</p>
                        <div className='flex gap-10'>
                            <div onClick={handleOpenPresentes} className='flex flex-col items-center gap-2 cursor-pointer' >
                                <div className='rounded-full bg-[#86977E] w-[50px] h-[50px] flex justify-center items-center'>
                                    <Gift size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Presentes</p>
                            </div>
                            <div onClick={handleOpenLocal} className='flex flex-col items-center gap-2 cursor-pointer'>
                                <div className='rounded-full bg-[#86977E] w-[50px] h-[50px] flex justify-center items-center'>
                                    <Location size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Local</p>
                            </div>
                            <div onClick={handleOpenAsistencia} className='flex flex-col items-center gap-2 cursor-pointer'>
                                <div className='rounded-full bg-[#86977E] w-[50px] h-[50px] flex justify-center items-center'>
                                    <CalendarTick size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Asistencia</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {
                openModalPresentes &&
                <ModalPresentes open={openModalPresentes} handClose={handleClose} />
            }
            {
                openModalLocal &&
                <ModalLocal open={openModalLocal} handClose={handleClose} />
            }
            {
                openModalAsistencia &&
                <ModalAsistencia open={openModalAsistencia} handClose={handleClose} />
            }
            <ToastContainer theme="success" />
        </div>

    );
};

export default Cart;
