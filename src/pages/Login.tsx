import { useNavigate } from 'react-router-dom';
import arco from "../assets/img/arco.webp";
import arcoDown from "../assets/img/arco_down.webp";
import sobre from "../assets/img/sobre.png";
import { CalendarTick, Gift, Location } from 'iconsax-react';


const Cart = () => {

    // const navigate = useNavigate();

    // const login = () => {
    //     navigate('/system');
    // };

    return (
        <div className=" w-full z-10 py-10">
            <section>
                <div className="flex items-center flex-col md:flex-row justify-center gap-12 lg:gap-24  lg:py-0">
                    <div className='flex flex-col justify-center items-center'>
                        <img className="w-[200px] md:w-[300px]" src={arco} alt="arco" />
                        <div className='flex flex-col gap-5 mb-5'>
                            <h1 className='primaryFont text-3xl md:text-5xl text-[#464444]'>Jhon y Carmen</h1>
                            <p className='secondFont text-lg md:text-2xl  font-normal text-[#717171]'>12 de Enero | 04:00 pm</p>
                        </div>

                        <img className="w-[200px] md:w-[300px]" src={arcoDown} alt="arco" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='sobre w-[240px] md:w-[380px] cursor-pointer mb-6' src={sobre} alt="sobre" />
                        <p className='text-[18px] text-[#717171] secondFont font-light mb-6'>LINKS DE AYUDA</p>
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-2'>
                                <div className='rounded-full bg-[#6E9650] w-[50px] h-[50px] flex justify-center items-center'>
                                    <Gift size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-center text-[#464444]'>Presentes</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='rounded-full bg-[#6E9650] w-[50px] h-[50px] flex justify-center items-center'>
                                    <Location size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Local</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='rounded-full bg-[#6E9650] w-[50px] h-[50px] flex justify-center items-center'>
                                    <CalendarTick size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Asistencia</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
