import { useContext } from "react";
import ContextData from "../../../context/ContextData";

export default function ClientPage() {
    const {userData, handleLogout}=useContext(ContextData)
  return (
    <div>
          <h2>Hola { userData.nombre} has iniciado session como cliente</h2>
      <button onClick={handleLogout}>Serrar la session</button>
    </div>
  );
}
