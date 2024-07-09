
import { Copy, Heart } from "iconsax-react";
interface NumeroChipProps {
  label: String;
  onDelete: () => void;
}
const NumeroChip: React.FC<NumeroChipProps> = ({ label }) => {
  return (
    <div className="bg-[#FBF1F2] rounded-lg w-full p-2 flex justify-between">
      <div className="flex gap-2">
        <Heart size="24" color="#AB7779" variant="Bold" />
        <span className="secondFont text-md">{label}</span>
      </div>
      <Copy size="24" color="#545454" variant="Outline" className="cursor-pointer" />
    </div>



  )
}
export default NumeroChip