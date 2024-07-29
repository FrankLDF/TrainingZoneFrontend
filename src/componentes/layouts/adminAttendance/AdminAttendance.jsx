import AdminNavbar from "../../adminNavbar/AdminNavbar";
import { useContext, useEffect, useState } from "react";
import ContextData from "../../../context/ContextData";
import LoadingComponent from "../../Loading/LoadingComponent";
import RowUserAsistencia from "../../rowUserAsistencia/RowUserAsistencia";

import { FaCalendarCheck } from "react-icons/fa"; // icono de usuarios presentes
import { TfiReload } from "react-icons/tfi"; // iconos de usuarios no presentes

export default function AdminAttendance() {
  const [users, setUsers] = useState([]);
  const [usersPresents, setUsersPresents] = useState([]);
  const [search, setSearch] = useState("");
  const [showPresents, setShowPresents] = useState(false);
  const [error, setError] = useState(null);
  const { loading, setLoading } = useContext(ContextData);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Los meses empiezan desde 0
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const FechaHoy = getCurrentDate();

  // Efecto para obtener usuarios
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/v1/users`,
          {
            method: "GET",
            credentials: "include", // Incluir credenciales (cookies)
          }
        );

        if (!response.ok) {
          setLoading(false);
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLoading(false);
        // Pasar los usuarios tipo cliente al estado
        setUsers(data.filter((user) => user.tipo_usuario == 1));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Efecto para obtener usuarios presentes
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/v1/attendances`,
          {
            method: "GET",
            credentials: "include", // Incluir credenciales (cookies)
          }
        );

        if (!response.ok) {
          setLoading(false);
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLoading(false);
        // Pasar los usuarios tipo cliente al estado
        setUsersPresents(data[FechaHoy] || []);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  // Función para filtrar usuarios no presentes
  const getUsersNotPresent = (users, usersPresents) => {
    const presentIds = usersPresents.map((user) => user.id_usuario);
    return users.filter((user) => !presentIds.includes(user.id_usuario));
  };

  // Estado para almacenar usuarios no presentes
  const [usersNotPresent, setUsersNotPresent] = useState([]);

  // Efecto para cargar usuarios no presentes
  useEffect(() => {
    if (!usersPresents.length || !users.length) {
      return;
    }
    setUsersNotPresent(getUsersNotPresent(users, usersPresents));
  }, [users, usersPresents]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filtrar usuarios según el valor del input de búsqueda
  const filteredUsersNotPresent = usersNotPresent.filter(
    (user) =>
      user.nombre.toLowerCase().includes(search.toLowerCase()) ||
      user.apellido.toLowerCase().includes(search.toLowerCase())
  );

  const filteredUsersPresents = usersPresents.filter(
    (user) =>
      user.nombre.toLowerCase().includes(search.toLowerCase()) ||
      user.apellido.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", backgroundColor: "rgb(33, 32, 32)" }}>
      <AdminNavbar />
      <section style={{ flexGrow: 1, color: "#fff", padding:'15px' }}>
        {loading && <LoadingComponent />}
        {error && <div>Error: {error}</div>}

        <h2 className="text-center mt-3 mb-5">Asistencia!</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems:"center" }}>
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Buscar..."
            className="form-control"
            value={search}
          />
          <button
            className="btn btn-secondary"
            onClick={() => setShowPresents(!showPresents)}
          >
            {showPresents ? "Mostrar No Presentes" : "Ver Presentes"}
          </button>
        </div>

        {search
          ? showPresents
            ? filteredUsersPresents.map((user) => (
                <RowUserAsistencia
                  key={user.id_usuario}
                  nombre={user.nombre}
                  usuario={user.usuario}
                  id={user.id_usuario}
                  apellido={user.apellido}
                  Icon={<FaCalendarCheck />}
                  handleClick={false}
                />
              ))
            : filteredUsersNotPresent.map((user) => (
                <RowUserAsistencia
                  key={user.id_usuario}
                  nombre={user.nombre}
                  usuario={user.usuario}
                  id={user.id_usuario}
                  apellido={user.apellido}
                  Icon={<TfiReload />}
                  handleClick={true}
                />
              ))
          : showPresents
          ? usersPresents.map((user) => (
              <RowUserAsistencia
                key={user.id_usuario}
                nombre={user.nombre}
                usuario={user.usuario}
                id={user.id_usuario}
                apellido={user.apellido}
                Icon={<FaCalendarCheck />}
                handleClick={false}
              />
            ))
          : usersNotPresent.map((user) => (
              <RowUserAsistencia
                key={user.id_usuario}
                nombre={user.nombre}
                usuario={user.usuario}
                id={user.id_usuario}
                apellido={user.apellido}
                Icon={<TfiReload />}
                handleClick={true}
              />
            ))}
      </section>
    </div>
  );
}
