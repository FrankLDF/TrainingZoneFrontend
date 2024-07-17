import ContextData from "./ContextData";  // componente contexto 
import { useState } from "react";

export default function ProviderContext({ children }) {
    const [userData, setUserData] = useState(() => {
    // Inicializar estado con los datos de localStorage si existen
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  })
    
    const handleLogin = data => {
      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data)); // Almacenar en localStorage
    }

    const handleLogout = async () => {
       try {
      // Enviar solicitud POST a /logout
      const response = await fetch("http://localhost:5000/v1/auth/logout", {
        method: "POST",
        credentials: "include", // para incluir cookies en la solicitud
      });

           if (response.ok) {
             // Eliminar datos del localStorage
             localStorage.removeItem("userData");
             // Limpiar el estado del contexto
             setUserData(null);
           } else {
        console.error("Error logging out:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
    }

    return (
        <ContextData.Provider value={{userData,handleLogin,handleLogout}}>
            {children}
        </ContextData.Provider>
    )
}