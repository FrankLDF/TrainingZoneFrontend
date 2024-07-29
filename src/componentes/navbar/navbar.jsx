import { useEffect } from "react";
import { Link } from "react-router-dom";

import nav from "./navbar.module.css";
import LogoT from "../../assets/logo.png";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${nav.header}`);
      if (window.scrollY > 50) {
        header.classList.add(nav.scrolled);
      } else {
        header.classList.remove(nav.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={nav.header}>
      <img src={LogoT} className={nav.logo} alt="logo" />

      <nav className={nav.navbar}>
        <Link to={"/staff"}>Inicio de seccion</Link>
        <Link to={"/#"}>Sobre nosotros</Link>
        <Link to={"/#"}>Nuestras redes</Link>
      </nav>
    </header>
  );
}
