import { Routes, Route, Navigate } from "react-router-dom";
import HomeOutsite from "../componentes/pages/HomeOutsite";
import LoginPage from "../componentes/pages/LoginPage";
import NotFound from "../componentes/pages/NotFound";

// Componente de rutas publicas (rutas que pueden ser accedidas sin necesidad de login)
export default function OutRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeOutsite />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
