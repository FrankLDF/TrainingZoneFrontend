import { useEffect } from "react";

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
        <a href="/">Inicio de seccion</a>
        <a href="/">Sobre nosotros</a>
        <a href="/">Nuestras redes</a>
      </nav>
    </header>
  );
}
