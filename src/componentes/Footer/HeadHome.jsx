import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import ContextData from "../../context/ContextData";
import { useContext } from "react";

export default function HeadHome() {
    const { userData, handleLogout } = useContext(ContextData);
  return (
    <div className="d-flex justify-content-between align-items-end bg-primari text-white p-3 w-100 custom-container shadow ">
      <img src={logo} alt="logo del GYM" className="img-fluid w-home-ico" />

      {!userData ? (
        <Link to="/login" className="btn btn-outline-light">
          Iniciar Sesión
        </Link>
      ) : (
        <p className="btn btn-outline-light" onClick={async()=>await handleLogout()}>
          Cerrar Sesión
        </p>
      )}
    </div>
  );
}
