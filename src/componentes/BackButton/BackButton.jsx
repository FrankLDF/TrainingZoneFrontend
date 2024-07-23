import stil from "./BackButton.module.css"
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {

    const navigate= useNavigate()
    const regresar = () => {
        navigate(-1)
    }

  return (
    <div className={stil.buttonContainer} onClick={regresar}>
          <IoArrowBack className={stil.icon} />
    </div>
  )
}
