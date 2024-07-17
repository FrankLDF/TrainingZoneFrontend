
import estil from './LoginForm.module.css';
import { FaUser, FaLock  } from "react-icons/fa";
import LogoT from '../../assets/logo.png';


const LoginForm = () => {
    return (
      <div className={estil.wrapper}>
        <form action="">
          <h1>Login</h1>
          <div className={estil.circle_image}>
            <img src={LogoT} alt="Logo" />
          </div>
          <div className={estil.input_box}>
            <input type="text" placeholder="Usuario:" required />
                    <FaUser className={estil.icon} />
          </div>
          <div className={estil.input_box}>
            <input type="password" placeholder="Contraseña:" required />
            <FaLock className={estil.icon} />
          </div>
                <div className={estil.remember_forgot}>
            <label>
              <input type="checkbox" /> Recuerdame
            </label>
          </div>

          <button type="submit">Acceder</button>
        </form>
      </div>
    );
};

export default LoginForm;