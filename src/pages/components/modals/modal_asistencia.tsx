import { Box, Modal } from "@mui/material"
import { CalendarTick, CloseSquare, InfoCircle, Like1 } from "iconsax-react"
import { Link } from "react-router-dom"
import ButtonComponent from "../button/buttonComponent"
import CloseModal from "../chip/close_modal";

interface ModalAsiistenciaProps {
  open: boolean;
  handClose: () => void;
}
const ModalAsistencia: React.FC<ModalAsiistenciaProps> = ({ open, handClose }) => {
  return (
    <Modal
      open={open}
      onClose={handClose}
      className="flex justify-center items-center "
    >
      <Box className="m-8 relative outline-none">
        <CloseModal handClose={handClose} />
        <div className="relative rounded-t-lg bg-gradient-to-r from-[#86977E] to-[#495245] p-4">
          <h1 className="secondFont text-white font-semibold text-xl">Asistencia</h1>
          <CalendarTick size="55" color="#FFFFFF" className="absolute right-4 bottom-0 top-2 opacity-50" />
        </div>
        <Box className="bg-white rounded-b-lg w-full overflow-y-auto h-[auto] md:h-[auto] lg:w-[450px]">
          <CloseSquare size="24" color="#FFFFFF" onClick={handClose} className="absolute top-40 mt-6" style={{ right: "30px" }} />
          <div className="w-full p-4 flex justify-center items-center flex-col gap-4">
            <h1 className="primaryFont text-3xl font-bold clr-black mt-2">La pasaremos genial!</h1>
            <span className="treeFont clr-gray200 text-sm text-center">
              Te agradecemos que nos confirmes tu asistencia antes del 01 de diciembre. Tu respuesta es muy importante para nosotros.
            </span>
            <div className="flex w-full flex-col justify-center items-center gap-4">
              <div className="flex w-full justify-center items-center gap-4">
                <h1 className="primaryFont text-3xl">Novio</h1>
                <Link to="https://wa.link/zrls3s" target="_blank">
                  <ButtonComponent text={"Confirmar"}
                    icon={<Like1 size="22" className="white" />}
                    fontSize={"medium"}
                    animation={false}
                    background="#ab7779"
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
            <div className="flex gap-2  justify-center items-start md:items-center">
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
export default ModalAsistencia