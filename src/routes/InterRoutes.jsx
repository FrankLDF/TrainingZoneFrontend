import { Routes, Route } from "react-router-dom"
import PrivateMileware from "./PrivateMidleware"
import Home from "../componentes/pages/HomePage"
import NotFound from "../componentes/pages/NotFound";
import AdminClients from "../componentes/layouts/adminClients/AdminClients";
import AdminAttendance from "../componentes/layouts/adminAttendance/AdminAttendance";
import BackButton from "../componentes/BackButton/BackButton";

export default function InterRoutes() {
  return (
    <div>
      <BackButton/>
      <Routes>
        <Route path="/staff" element={
          <PrivateMileware>
            <Home />
          </PrivateMileware>
        } />
        <Route path="/admin-clients" element={
          <PrivateMileware>
            <AdminClients />
          </PrivateMileware>
        } />
        <Route path="/admin-attendances" element={
          <PrivateMileware>
            <AdminAttendance />
          </PrivateMileware>
        } />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}
