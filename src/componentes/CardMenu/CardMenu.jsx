import { Link } from "react-router-dom"

export default function CardMenu({titulo, Icono, ruta}) {
  return (
    <Link to={ruta} style={{width:"30%",padding:"20px",borderRadius:"20px", backgroundColor:"#666", color:"#000"}}>
      <Icono/>
      <span>{ titulo}</span>
    </Link>
  )
}
