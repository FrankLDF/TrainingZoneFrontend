import nav from './navbar.module.css'
import LogoT from '../../assets/logo.png';

export default function Navbar() {
    return (
    <header className={nav.header}>
        <img src={LogoT} className={nav.logo} alt='logo'/>

        <nav className={nav.navbar}>
            <a href='/'>Inicio de seccion</a>
            <a href='/'>Sobre nosotros</a>
            <a href='/'>Nuestras redes</a>

        </nav>
    </header>
  )
}


