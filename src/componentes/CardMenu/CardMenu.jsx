import { Link } from "react-router-dom"
import stil from "./CardMenu.module.css"

export default function CardMenu({titulo, Icono, ruta}) {
  return (
    <Link to={ruta} className={stil.containerLink}>
      <Icono className={stil.icon} />
      <span className={stil.titulo}>{titulo}</span>
    </Link>
  );
}
