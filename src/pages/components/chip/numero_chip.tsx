
import { Copy, Heart } from "iconsax-react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
interface NumeroChipProps {
  label: string;

}
const NumeroChip: React.FC<NumeroChipProps> = ({ label }) => {
  const numberToCopy = label
  const handleCopy = () => {
    // Copiar el número al portapapeles
    navigator.clipboard.writeText(numberToCopy).then(() => {
      // Mostrar un mensaje de confirmación
      toast.success('Número copiado!', toastOptions);
    });
  };
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 1000, // Cierra automáticamente después de 3 segundos
    hideProgressBar: true, // Muestra la barra de progreso
    closeOnClick: true, // Cierra al hacer clic
    pauseOnHover: true, // Pausa el temporizador al pasar el mouse
    draggable: true, // Permite arrastrar la notificación
    progress: undefined,
    style: {
      fontFamily: 'Montserrat',
      letterSpacing: '-0.5px',
      backgroundColor: '#FBF1F2',
      color: '#545454',
      fontSize: '16px',
    },
  };

  return (
    <div className="bg-[#FBF1F2] rounded-lg w-full p-2 flex justify-between">
      <div className="flex gap-2">
        <Heart size="24" color="#AB7779" variant="Bold" />
        <span className="treeFont text-md text-[#545454]">{numberToCopy}</span>
      </div>
      <Copy size="24" color="#545454" variant="Outline" className="cursor-pointer" onClick={handleCopy} />

    </div>
  )
}
export default NumeroChip