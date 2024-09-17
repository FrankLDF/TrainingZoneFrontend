import { Routes, Route, Navigate } from "react-router-dom";
import HomeOutsite from "../componentes/pages/HomeOutsite";
import LoginPage from "../componentes/pages/LoginPage";
import InterRoutes from "./InterRoutes";
import PublicMidleware from "./PublicMidleware";
import SobreNosotros from "../componentes/SobreNosotros/SobreNosotros";

// Componente de rutas publicas (rutas que pueden ser accedidas sin necesidad de login)
export default function OutRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeOutsite />} />
        <Route path="/about" element={<SobreNosotros />} />
        <Route
          path="/login"
          element={
            <PublicMidleware>
              <LoginPage />
            </PublicMidleware>
          }
        />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/*" element={<InterRoutes />} />
      </Routes>
    </div>
  );
}
