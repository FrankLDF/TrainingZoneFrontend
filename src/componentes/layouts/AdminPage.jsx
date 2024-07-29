import CardMenu from "../CardMenu/CardMenu";
import { FaUserEdit } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import imgBG from "../../assets/backgrount.jpg"

export default function AdminPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundImage: `url(${imgBG})`,
        backgroundSize: "cover", // Ajusta la imagen para cubrir todo el div
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        backgroundPosition: "center", // Centra la imagen
      }}
    >
      <CardMenu titulo={"Clientes"} Icono={FaUserEdit} ruta={"/admin-clients"} />
      <CardMenu titulo={"Pagos"} Icono={MdPayment} ruta={"#"} />
      <CardMenu titulo={"Comunidades"} Icono={FaUsers} ruta={"#"} />
    </div>
  );
}
