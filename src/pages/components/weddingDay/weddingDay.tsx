import Countdown, { CountdownRendererFn, CountdownRenderProps } from 'react-countdown';
interface CountdownProps {
  targetDate: Date;
}
// Función para renderizar el contador
const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if (completed) {
    return <span>¡Felicidades, hoy es el día de tu boda!</span>;
  } else {
    return (


      <div className='flex flex-1 gap-2 justify-center p-4 flex-wrap' >
        <div className='back-primary w-[100px] h-[120px] flex justify-center treeFont font-medium items-center flex-col text-white text-center rounded-lg' style={{ animation: "pulsar 5s infinite" }}><span className='text-md'>{days}</span><span className='text-md'>Días</span></div>
        <div className='back-primary w-[100px] h-[120px] flex justify-center treeFont font-medium items-center flex-col text-white text-center rounded-lg' style={{ animation: "pulsar 5s infinite" }}><span className='text-md'>{hours} </span><span className='text-md'>Horas</span></div>
        <div className='back-primary w-[100px] h-[120px] flex justify-center treeFont font-medium items-center flex-col text-white text-center rounded-lg' style={{ animation: "pulsar 5s infinite" }}><span className='text-md'>{minutes}</span><span className='text-md'>Minutos</span></div>
        <div className='back-primary w-[100px] h-[120px] flex justify-center treeFont font-medium items-center flex-col text-white text-center rounded-lg' style={{ animation: "pulsar 5s infinite" }}><span className='text-md'>{seconds} </span><span className='text-md'>Segundos</span></div>

      </div>

    );
  }
};

const WeddingDay: React.FC<CountdownProps> = ({ targetDate }) => {
  return <Countdown date={targetDate} renderer={renderer} />;
}
export default WeddingDay