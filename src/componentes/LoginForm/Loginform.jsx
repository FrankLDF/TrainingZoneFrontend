
import './LoginForm.css';
import { FaUser, FaLock  } from "react-icons/fa";
import LogoT from '../../assets/file_upscayl_4x_realesrgan-x4plus.png';


const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="circle-image">
        <img src={LogoT} alt="Logo" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Usuario:" required />
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña:" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/> Recuerdame</label>
                </div>
                
                <button type="submit">Acceder</button>
            </form>
        </div>
    );
};

export default LoginForm;