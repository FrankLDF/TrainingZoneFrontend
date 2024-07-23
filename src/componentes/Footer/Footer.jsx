import { MdHistoryToggleOff } from 'react-icons/md';
import './footer.css';

const Footer = () => {
  return (
    <div className='foot'>
      <div className='icon-container'>
        <MdHistoryToggleOff className='history' />
      </div>
      <div className='texto'>
        <h2>¿Quiénes somos?</h2>
        <p>
          En nuestro gimnasio ubicado en la Avenida Imbert, La Vega, República Dominicana, 
          ofrecemos un ambiente de entrenamiento de primera clase respaldado por años de 
          experiencia desde nuestra fundación en Nueva York en 2001 y nuestra expansión a 
          La Vega en 2017 con nuestras tiendas de suplementos Recoveryzone1. Gracias a 
          nuestros esfuerzos, hemos ganado una reputación excepcional por la confianza, 
          seguridad y profesionalismo que brindamos a nuestros clientes.
        </p>
      </div>
    </div>
  );
}

export default Footer;