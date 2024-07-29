import { useForm } from "react-hook-form"
import styles from "./RegisterForm.module.css";
import Swal from "sweetalert2";

import { useContext } from "react";
import ContextData from "../../context/ContextData";
import LoadingComponent from "../Loading/LoadingComponent";

export default function RegisterForm({ setUserPendin }) {
  
  const {loading, setLoading}=useContext(ContextData)

    const {register,handleSubmit,formState: { errors }}= useForm()

  const registerUser = async (data) => {
      setLoading(true)
        const now = new Date();
        const fechaNacimiento = new Date(data.fecha_nacimiento)
        const futureUser = {
          ...data,
          fecha_nacimiento:fechaNacimiento.toISOString(),
          tipo_usuario: 1,
          fecha_registro: now.toISOString(),
          estado: 1,
        };
        
        try {
            const response=await fetch(`${import.meta.env.VITE_SERVER_URL}/v1/users`, {
              method: "POST",
              credentials: "include",
              headers: {
                "content-type": "application/json",
                },
              body:JSON.stringify(futureUser)
            });
            const result = await response.json();
          if (result.error) {
              setLoading(false)
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: result.message,
                });
                return
          }
            setLoading(false)
            setUserPendin(result.user)
        } catch (error) {
            console.log("El error fue: "+error)
        }
    }

  return (
    <>
      {loading && <LoadingComponent />}
      <div className={styles.formContainer}>
        <h2 className="mb-4 text-center text-light">Formulario de Registro</h2>
        <form
          onSubmit={handleSubmit(registerUser)}
          className="needs-validation"
          noValidate
        >
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>
              Nombre
            </label>
            <input
              id="nombre"
              className={`${styles.input} ${
                errors.nombre ? styles.invalidInput : ""
              }`}
              {...register("nombre", { required: "Este campo es obligatorio" })}
            />
            {errors.nombre && (
              <div className={styles.invalidFeedback}>
                {errors.nombre.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="apellido" className={styles.label}>
              Apellido
            </label>
            <input
              id="apellido"
              className={`${styles.input} ${
                errors.apellido ? styles.invalidInput : ""
              }`}
              {...register("apellido", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.apellido && (
              <div className={styles.invalidFeedback}>
                {errors.apellido.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="direccion" className={styles.label}>
              Dirección
            </label>
            <input
              id="direccion"
              className={`${styles.input} ${
                errors.direccion ? styles.invalidInput : ""
              }`}
              {...register("direccion", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.direccion && (
              <div className={styles.invalidFeedback}>
                {errors.direccion.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefono" className={styles.label}>
              Teléfono
            </label>
            <input
              id="telefono"
              className={`${styles.input} ${
                errors.telefono ? styles.invalidInput : ""
              }`}
              {...register("telefono", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.telefono && (
              <div className={styles.invalidFeedback}>
                {errors.telefono.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              className={`${styles.input} ${
                errors.email ? styles.invalidInput : ""
              }`}
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingrese un correo electrónico válido",
                },
              })}
            />
            {errors.email && (
              <div className={styles.invalidFeedback}>
                {errors.email.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="fecha_nacimiento" className={styles.label}>
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fecha_nacimiento"
              className={`${styles.input} ${
                errors.fecha_nacimiento ? styles.invalidInput : ""
              }`}
              {...register("fecha_nacimiento", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.fecha_nacimiento && (
              <div className={styles.invalidFeedback}>
                {errors.fecha_nacimiento.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="usuario" className={styles.label}>
              Usuario
            </label>
            <input
              id="usuario"
              className={`${styles.input} ${
                errors.usuario ? styles.invalidInput : ""
              }`}
              {...register("usuario", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.usuario && (
              <div className={styles.invalidFeedback}>
                {errors.usuario.message}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contrasena" className={styles.label}>
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              className={`${styles.input} ${
                errors.contrasena ? styles.invalidInput : ""
              }`}
              {...register("contrasena", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.contrasena && (
              <div className={styles.invalidFeedback}>
                {errors.contrasena.message}
              </div>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Registrar
          </button>
        </form>
      </div>
    </>
  );
}
