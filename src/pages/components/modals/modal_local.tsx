import { Box, Modal } from "@mui/material"
import { InfoCircle, Location } from "iconsax-react"
import { Link } from "react-router-dom"
import ButtonComponent from "../button/buttonComponent"
import local from "../../../assets/img/villa01.jpg";
import CloseModal from "../chip/close_modal";
interface ModalLocalProps {
  open: boolean;
  handClose: () => void;
}
const ModalLocal: React.FC<ModalLocalProps> = ({ open, handClose }) => {
  return (
    <Modal
      open={open}
      onClose={handClose}
      className="flex justify-center items-center relative"
    >
      <Box className="m-8 relative outline-none">
        <CloseModal handClose={handClose} />
        <div className="relative rounded-t-lg bg-gradient-to-r from-[#86977E] to-[#495245] p-4">
          <h1 className="secondFont text-white font-semibold text-xl">Local</h1>
          <Location size="55" color="#FFFFFF" className="absolute right-4 bottom-0 top-2 opacity-50" />
        </div>
        <Box className="bg-white rounded-b-lg w-full overflow-y-auto h-[420px] md:h-[auto] lg:w-[450px]">

          <div className="w-full">
            <img src={local} className="w-full mb-2 h-[180px] object-cover" alt="Villa Bianca Eventos" />
            <div className="p-4 flex justify-center items-center flex-col gap-4">
              <h1 className="primaryFont text-2xl font-bold clr-black">Villa Bianca Eventos</h1>
              <Link to="https://maps.app.goo.gl/hotmDNwbgi8PqoUa8" target="_blank">
                <ButtonComponent
                  text={"Calle Ricardo Palma #20 - Huanchaco"}
                  icon={<Location size="20" color="#FFFFFF" />}
                  fontSize={"medium"}
                  animation={true}
                />
              </Link>
              <p className="text-xs treeFont clr-gray200">*En la zona del Colegio Militar Ramon Castillla</p>
              <div className="flex gap-2  justify-center items-start md:items-center">
                <InfoCircle size="18" color="#AB7779" />
                <span className="text-[#AB7779] treeFont text-sm ">
                  Para mayor información accede a tu invitación
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Box>

    </Modal>
  )
}
export default ModalLocal