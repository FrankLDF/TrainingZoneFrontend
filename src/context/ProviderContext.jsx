import ContextData from "./ContextData";  // componente contexto 
import { useState } from "react";

export default function ProviderContext({ children }) {
    const [userData, setUserData] = useState(null)
    
    const handleLogin = data => {
        setUserData(data)
    }

    const handleLogout = () => {
        setUserData(null)
    }

    return (
        <ContextData.Provider value={{userData,handleLogin,handleLogout}}>
            {children}
        </ContextData.Provider>
    )
}