import { Routes, Route } from "react-router-dom"
import PrivateMileware from "./PrivateMidleware"
import Home from "../componentes/pages/HomePage"
import NotFound from "../componentes/pages/NotFound";

export default function InterRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/staff" element={
          <PrivateMileware>
            <Home />
          </PrivateMileware>
        } />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}
