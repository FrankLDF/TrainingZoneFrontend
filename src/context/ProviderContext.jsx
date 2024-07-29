import ContextData from "./ContextData"; // componente contexto
import { useState } from "react";

import Swal from "sweetalert2";

export default function ProviderContext({ children }) {
  const [loading, setLoading]=useState(false)
  const [userData, setUserData] = useState(() => {
    // Inicializar estado con los datos de localStorage si existen
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const handleLogin = (data) => {
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data)); // Almacenar en localStorage
  };

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Estás a punto de cerrar sesión!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ccc",
      cancelButtonColor: "#111",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Enviar solicitud POST a /logout
        fetch("http://localhost:5000/v1/auth/logout", {
          method: "POST",
          credentials: "include", // para incluir cookies en la solicitud
        }).then((response) => {
          if (response.ok) {
            // Eliminar datos del localStorage
            localStorage.removeItem("userData");
            // Limpiar el estado del contexto
            setUserData(null);
          } else {
            console.error("Error logging out:", response.statusText);
          }
        }).catch(error => {
          console.error(error)
        })

      }
    });
  };

  return (
    <ContextData.Provider value={{ userData, handleLogin, handleLogout, loading, setLoading }}>
      {children}
    </ContextData.Provider>
  );
}
