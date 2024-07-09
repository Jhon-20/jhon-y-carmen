import { Box, Modal } from "@mui/material"
import { Gift } from "iconsax-react";
import yape from "../../../assets/img/yape.png";
import NumeroChip from "../chip/numero_chip";
interface ModalPresentesProps {
  open: boolean;
  handClose: () => void;
}
const ModalPresentes: React.FC<ModalPresentesProps> = ({ open, handClose }) => {
  const handleCopy = () => {

  }
  return (

    <Modal
      open={open}
      onClose={handClose}
      className="flex justify-center items-center"
    >

      <Box className="bg-white  m-2 rounded-lg w-full">
        <div className="relative bg-gradient-to-r from-[#86977E] to-[#495245] rounded-t-lg p-4">
          <h1 className="secondFont text-white font-semibold text-xl">Presentes</h1>
          <Gift size="62" color="#FFFFFF" className="absolute right-4 bottom-0 top-2 opacity-50" />
        </div>
        <div className="w-full p-4 flex justify-center items-center flex-col gap-5">
          <img src={yape} className="flex justify-center items-center m-auto" alt="Yape" />

          <div className="flex w-full flex-col justify-center items-center gap-4">
            <h1 className="primaryFont text-2xl">Novio</h1>
            <NumeroChip label={"939945744"} onDelete={handleCopy} />
            <h1 className="primaryFont text-2xl">Novia</h1>
            <NumeroChip label={"900808268"} onDelete={handleCopy} />
            <div>
            </div>
          </div>
        </div>
      </Box>


    </Modal>

  )
}
export default ModalPresentes