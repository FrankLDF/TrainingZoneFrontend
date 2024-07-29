import { useContext } from "react";
import ContextData from "../context/ContextData";
import { Navigate } from "react-router-dom";

// funcion midleware para validar si el user esta logueado o no
export default function AdminMidleware({ children }) {
  // extraer info del contexto para saver si es usuarios esta logueado
  const { userData } = useContext(ContextData);
  return userData.tipo_usuario !==2 ? <Navigate to={`/staff/${userData.usuario}`} /> : children;
}
