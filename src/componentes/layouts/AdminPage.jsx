import CardMenu from "../CardMenu/CardMenu";
import { FaHome } from "react-icons/fa";

export default function AdminPage() {
  return (
    <div>
      <CardMenu titulo={"Home"} Icono={FaHome} ruta={"#"}/>
    </div>
  )
}
