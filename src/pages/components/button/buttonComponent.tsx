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
        padding: "10px 15px",

        letterSpacing: "-0.5px",
        animation: "pulsar 5s infinite",
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