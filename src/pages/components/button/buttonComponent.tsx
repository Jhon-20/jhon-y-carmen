import { Button } from "@mui/material"
interface ButtonComponentProps {
  text: String;
  icon: any;
  fontSize: any;
  background: any;
  animation: boolean
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, icon, fontSize, background, animation }) => {
  return (
    <Button
      startIcon={icon ?? null}
      size={fontSize ?? null}
      sx={{
        background:
          background ?? "#86977E",
        borderRadius: "50px",
        textTransform: "none",
        fontFamily: "Montserrat",
        color: "white",
        fontWeight: "500",
        width: "100%",
        padding: "10px 15px",
        letterSpacing: "-0.5px",
        animation: animation ? "pulsar 5s infinite" : "",
        '&:hover': {
          background: "#6C7B66"
        }
      }}

    >
      {text}
    </Button>
  )
}
export default ButtonComponent