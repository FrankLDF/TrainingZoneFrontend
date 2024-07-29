import stil from "./adminNavbar.module.css"
import { NavLink } from "react-router-dom"
import LogoT from "../../assets/logo.png"
import { RiLogoutBoxLine } from "react-icons/ri";

import { useContext } from "react";
import ContextData from "../../context/ContextData";

export default function AdminNavbar() {

const{handleLogout} = useContext(ContextData)   
  return (
    <nav className={stil.navContainer}>
      <section className={`${stil.sectionContainer} ${stil.imageContainer}`}>
        <img src={LogoT} alt="logo del gym" />
      </section>

      <section className={`${stil.sectionContainer} ${stil.navlinkContiner}`}>
        <NavLink
          className={({ isActive }) => (isActive ? `${stil.active}` : null)}
          to={"/staff"}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${stil.active}` : null)}
          to={"/admin-clients"}
        >
          Clientes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${stil.active}` : null)}
          to={"/admin-register"}
        >
          Registrar
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${stil.active}` : null)}
          to={"/admin-attendances"}
        >
          Asistencia
        </NavLink>
      </section>

      <section onClick={handleLogout} className={`${stil.sectionContainer} ${stil.logoutContiner}`}>
        <RiLogoutBoxLine />
        <span>Salir</span>
      </section>
    </nav>
  );
}
