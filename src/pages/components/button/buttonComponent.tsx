import { Button } from "@mui/material"
interface ButtonComponentProps {
  text: String;
  icon: any;
  fontSize: any;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, icon, fontSize }) => {
  return (
    <Button
      startIcon={icon ?? null}
      size={fontSize ?? null}
      sx={{
        background: "#86977E",
        borderRadius: "50px",
        textTransform: "none",
        fontFamily: "Montserrat",
        color: "white",
        fontWeight: "500",
        width: "100%",
        padding: "10px"

      }}

    >
      {text}
    </Button>
  )
}
export default ButtonComponent