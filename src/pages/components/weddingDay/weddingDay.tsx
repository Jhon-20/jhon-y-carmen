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
      <div>

        <div>
          {days} days {hours} hours {minutes} minutes {seconds} seconds
        </div>
      </div>
    );
  }
};

const WeddingDay: React.FC<CountdownProps> = ({ targetDate }) => {
  return <Countdown date={targetDate} renderer={renderer} />;
}
export default WeddingDay