import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




import ContextData from "../../context/ContextData"; // importa el contexto de la app

import estil from "./LoginForm.module.css"; // importa los estilos
import LogoT from "../../assets/logo.png"; // importa el logo

// importando iconos desde react-icons
import { FaUser, FaLock } from "react-icons/fa";
import LoadingComponent from "../Loading/LoadingComponent";

// componente----
const LoginForm = () => {

  const navigate = useNavigate();
  // extrallendo la funcion que alamacena la informacion en el storage
  const { handleLogin, loading, setLoading } = useContext(ContextData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // funcion para enviar datos al servidor
  const SubmitLogin = async (data) => {
    setLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      // parcear a json la respuesta
      const result = await response.json();
      if (result.resultLogin && result.resultLogin.success) {
        // guardar los datos en elcontexto
        handleLogin(result.resultLogin.user);

        setLoading(false)
        
        // navegar hacia el staff
        navigate("/staff", { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error(result.message);
        setLoading(false)
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${result.message}`,
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      {loading && <LoadingComponent />}
        <div className={`  bg-primari ${estil.wrapper}`}>
        {/* Div que contiene la imagen del logo */}
        <div className={` ${estil.circle_image}`}>
          <img src={LogoT} alt="Logo" />
        </div>

        <form className="bg-secondari" onSubmit={handleSubmit(SubmitLogin)}>
          <h1>Login</h1>

          <div className={estil.input_box}>
            <input
              type="text"
              placeholder="Usuario:"
              {...register("usuario", { required: true })}
            />
            <FaUser className={estil.icon} />
            {errors.usuario?.type === "required" && (
              <p className="text-danger">Este campo es obligatorio</p>
            )}
          </div>

          <div className={estil.input_box}>
            <input
              type="password"
              placeholder="Contraseña:"
              {...register("contrasena", { required: true, minLength: 6 })}
            />
            <FaLock className={estil.icon} />
            {errors.contrasena?.type === "required" && (
              <p className="text-danger">Este campo es obligatorio</p>
            )}
            {errors.contrasena?.type === "minLength" && (
              <p className="text-danger">
                Este campo deve tener mas de 6 caracteres
              </p>
            )}
          </div>

          <button className={estil.button}>Acceder</button>
        </form>
      </div>
      
    </>
  );
};

export default LoginForm;
