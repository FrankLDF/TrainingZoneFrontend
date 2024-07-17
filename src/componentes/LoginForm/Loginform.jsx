import { useState, useContext } from "react";
import ContextData from "../../context/ContextData"  // importa el contexto de la app
import { useNavigate } from "react-router-dom";

import estil from "./LoginForm.module.css"; // importa los estilos
import LogoT from "../../assets/logo.png";  // importan el logo

// importando iconos desde react-icons
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin } = useContext(ContextData);

  const SubmitLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: user,
          contrasena: password,
        }),
        credentials: "include",
      });

      const result = await response.json()
      console.log(result)
      if (result.resultLogin && result.resultLogin.success) {
        // guardar los datos en elcontexto
        handleLogin(result.resultLogin.user);

        // navegar hacia el staff
        navigate("/staff", { replace: true });
      } else {
        console.error(result.message);
        alert(result.message)
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  
  return (
    <div className={estil.wrapper}>
      <form>
        <h1>Login</h1>

        {/* Div que contiene la imagen del logo */}
        <div className={estil.circle_image}>
          <img src={LogoT} alt="Logo" />
        </div>

        <div className={estil.input_box}>
          <input type="text" placeholder="Usuario:" required value={user} onChange={e=>setUser(e.target.value)} />
          <FaUser className={estil.icon} />
        </div>


        <div className={estil.input_box}>
          <input type="password" placeholder="Contraseña:" required value={password} onChange={e=>setPassword(e.target.value)}/>
          <FaLock className={estil.icon} />
        </div>

        <button onClick={SubmitLogin}>Acceder</button>
      </form>
    </div>
  );
};

export default LoginForm;
