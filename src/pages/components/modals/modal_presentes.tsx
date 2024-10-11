import { Box, Modal } from "@mui/material"
import { Gift, InfoCircle, Location } from "iconsax-react";
import yape from "../../../assets/img/yape.webp";
import NumeroChip from "../chip/numero_chip";
import ButtonComponent from "../button/buttonComponent";
import { Link } from "react-router-dom";
import CloseModal from "../chip/close_modal";

interface ModalPresentesProps {
  open: boolean;
  handClose: () => void;
}
const ModalPresentes: React.FC<ModalPresentesProps> = ({ open, handClose }) => {
  return (

    <Modal
      open={open}
      onClose={handClose}
      className="flex justify-center items-center relative"
    >
      <Box className="m-8 relative outline-none">
        <CloseModal handClose={handClose} />
        <div className="relative rounded-t-lg bg-gradient-to-r from-[#86977E] to-[#495245] p-4">
          <h1 className="secondFont text-white font-semibold text-xl">Presentes</h1>
          <Gift size="62" color="#FFFFFF" className="absolute right-4 bottom-0 top-2 opacity-50" />
        </div>
        <Box className="bg-white rounded-b-lg w-full overflow-y-auto h-[420px] md:h-[auto] lg:w-[450px]">
          <div className="w-full p-4 flex justify-center items-center flex-col gap-4">
            <img src={yape} className="flex justify-center items-center m-auto" alt="Yape" />
            <div className="flex w-full flex-col justify-center items-center gap-4 md:flex-row">
              <div className="flex w-full flex-col justify-center items-center gap-4">
                <h1 className="primaryFont text-3xl">Novio</h1>
                <NumeroChip label={"939945744"} />
              </div>
              <div className="flex w-full flex-col justify-center items-center gap-4">
                <h1 className="primaryFont text-3xl">Novia</h1>
                <NumeroChip label={"900808268"} />
              </div>
            </div>
            <span className="treeFont clr-gray200 text-sm ">
              Para aquellos que deseen obsequiar un regalo físico, hemos habilitado una dirección donde pueden enviarlo. Cualquier gesto será recibido con gratitud y alegría.
            </span>
            <Link to="https://maps.app.goo.gl/CKYCHWhiKDEht3Rn9" target="_blank">
              <ButtonComponent
                text={"MZ.E Lote 93 Barrio 2B - Alto Trujillo"}
                icon={<Location size="20" color="#FFFFFF" />}
                fontSize={"medium"}
                animation={true}
                background={null}
              />
            </Link>
            <div className="flex gap-2 justify-center items-start md-:items-center">
              <InfoCircle size="18" color="#AB7779" />
              <span className="text-[#AB7779] treeFont text-sm ">
                Para mayor información accede a tu invitación
              </span>
            </div>
          </div>
        </Box>
      </Box>



    </Modal>

  )
}
export default ModalPresentes