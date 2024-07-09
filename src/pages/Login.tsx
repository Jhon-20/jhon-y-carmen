import arco from "../assets/img/arco.webp";
import arcoDown from "../assets/img/arco_down.webp";
import sobre from "../assets/img/sobre.png";
import background from "../assets/img/fondoDesktop.gif";
import { CalendarTick, Gift, Location } from 'iconsax-react';


const Cart = () => {

    // const navigate = useNavigate();

    // const login = () => {
    //     navigate('/system');
    // };

    return (
        <div className=" w-full min-h-full md:h-screen flex items-center justify-center py-10">
            <img src={background} className='fixed top-0 left-0 w-full min-h-full object-cover' style={{ zIndex: -1 }} alt="" />
            <section>
                <div className="flex items-center flex-col md:flex-row justify-center gap-12 lg:gap-24  lg:py-0">
                    <div className='flex flex-col justify-center items-center'>
                        <img className="w-[220px] md:w-[300px]" src={arco} alt="arco" />
                        <div className='flex flex-col justify-center items-center gap-7 mb-6'>
                            <h1 className='primaryFont text-4xl md:text-5xl text-[#464444]'>Jhon y Carmen</h1>
                            <p className='secondFont text-xl md:text-2xl  font-normal text-[#717171]'>12 de Enero | 04:00 pm</p>
                        </div>
                        <img className="w-[220px] md:w-[300px]" src={arcoDown} alt="arco" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img className='sobre w-[280px] md:w-[380px] cursor-pointer mb-6' src={sobre} alt="sobre" />
                        <p className='text-[18px] text-[#717171] secondFont font-light mb-6'>LINKS DE AYUDA</p>
                        <div className='flex gap-10'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full bg-[#86977E] w-[50px] h-[50px] flex justify-center items-center'>
                                    <Gift size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Presentes</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full bg-[#86977E] w-[50px] h-[50px] flex justify-center items-center'>
                                    <Location size="24" color="#FFFFFF" />
                                </div>
                                <p className='primaryFont text-[#464444] text-center'>Local</p>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='rounded-full bg-[#86977E] w-[50px] h-[50px] flex justify-center items-center'>
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
