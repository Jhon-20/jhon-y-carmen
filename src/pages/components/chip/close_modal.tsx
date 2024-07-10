import { CloseSquare } from "iconsax-react"

interface CloseModalProps {

  handClose: () => void;
}

const CloseModal: React.FC<CloseModalProps> = ({ handClose }) => {
  return (

    <div className="back-pink hover:bg-[#fae1e1] px-2 py-1 rounded-full absolute top-[-40px] z-10  right-0 flex justify-center items-center gap-1 cursor-pointer" onClick={handClose}>
      <CloseSquare size="18" className="clr-pink600" />
      <span className="treeFont text-xs clr-pink600 font-medium ">Cerrar</span>
    </div>

  )
}
export default CloseModal