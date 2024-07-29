// import DataTable, { createTheme } from "react-data-table-component";
// import { useState, useEffect } from "react";

// export default function UserListComponent() {
//   const [dataUser, setDataUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [records, setRecords] = useState(null);

//   // Efecto para hacer el fetch de datos
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_SERVER_URL}/v1/users`,
//           {
//             method: "GET",
//             credentials: "include", // Incluir credenciales (cookies)
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setDataUser(data);
//         setRecords(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   // Evento del input de búsqueda
//   const handleChange = (e) => {
//     const filterRecords = dataUser.filter((record) => {
//       const fullName = `${record.nombre} ${record.apellido}`.toLowerCase();
//       return fullName.includes(e.target.value.toLowerCase());
//     });
//     setRecords(filterRecords);
//   };

//   // Columna para la tabla que muestra los usuarios
//   const columns = [
//     {
//       name: "Nombre",
//       selector: (row) => row.nombre,
//       sortable: true,
//     },
//     {
//       name: "Apellido",
//       selector: (row) => row.apellido,
//     },
//     {
//       name: "Correo Electronico",
//       selector: (row) => row.email,
//     },
//     {
//       name: "Telefono",
//       selector: (row) => row.telefono,
//     },
//     {
//       name: "Direccion",
//       selector: (row) => row.direccion,
//     },
//   ];

//   createTheme(
//     "solarized",
//     {
//       text: {
//         primary: "#fff",
//         secondary: "#999",
//       },
//       background: {
//         default: "",
//       },
//       context: {
//         background: "#cb4b16",
//         text: "#FFFFFF",
//       },
//       divider: {
//         default: "#500000",
//       },
//       action: {
//         button: "rgba(0,0,0,.54)",
//         hover: "rgba(0,0,0,.08)",
//         disabled: "rgba(0,0,0,.12)",
//       },
//     },
//     "dark"
//   );

//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <input
//         style={{
//           margin: "30px",
//           width: "70%",
//           padding: "9px",
//           borderRadius: "10px",
//           border: "none",
//           outline: "none",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//         type="text"
//         placeholder="Buscar..."
//         onChange={handleChange}
//       />
//       <div style={{ width: "90%" }}>
//         {error && <div>Error: {error}</div>}
//         {!dataUser ? (
//           <h2>No se Encontraron usuarios</h2>
//         ) : (
//           <DataTable
//             title="Todos los Clientes"
//             columns={columns}
//             data={records.filter((user) => user.tipo_usuario === 1)}
//             pagination
//             theme="solarized"
//           />
//         )}
//       </div>
//     </div>
//   );
// }


import DataTable, { createTheme } from "react-data-table-component";
import { useState, useEffect } from "react";
import UserDetailComponent from "../DetalleCliente/DetalleCliente"; 
export default function UserListComponent() {
  const [dataUser, setDataUser] = useState(null);
  const [error, setError] = useState(null);
  const [records, setRecords] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); // Estado para el usuario seleccionado

  // Efecto para hacer el fetch de datos
  useEffect(() => {
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
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setDataUser(data);
        setRecords(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Evento del input de búsqueda
  const handleChange = (e) => {
    const filterRecords = dataUser.filter((record) => {
      const fullName = `${record.nombre} ${record.apellido}`.toLowerCase();
      return fullName.includes(e.target.value.toLowerCase());
    });
    setRecords(filterRecords);
  };

  // Manejar el clic en una fila
  const handleRowClick = (row) => {
    setSelectedUser(row);
  };

  // Columna para la tabla que muestra los usuarios
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
    },
    {
      name: "Correo Electronico",
      selector: (row) => row.email,
    },
    {
      name: "Telefono",
      selector: (row) => row.telefono,
    },
    {
      name: "Direccion",
      selector: (row) => row.direccion,
    },
  ];

  createTheme(
    "solarized",
    {
      text: {
        primary: "#fff",
        secondary: "#999",
      },
      background: {
        default: "",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#500000",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "0 0 800px", padding: "20px", overflow: "auto" }}>
        <input
          style={{
            margin: "5px 30px",
            width: "calc(100% - 60px)",
            padding: "9px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          type="text"
          placeholder="Buscar..."
          onChange={handleChange}
        />
        <div>
          {error && <div>Error: {error}</div>}
          {!dataUser ? (
            <h2>No se Encontraron usuarios</h2>
          ) : (
            <DataTable
              title="Todos los Clientes"
              columns={columns}
              data={records.filter((user) => user.tipo_usuario === 1)}
              pagination
              theme="solarized"
              onRowClicked={handleRowClick}
              style={{ height: "calc(100vh - 40px)" }} // Ajusta la altura de la tabla para que no cause scroll horizontal
            />
          )}
        </div>
      </div>
      <div
        style={{
          flex: "1",
          padding: "20px",
          backgroundColor: "rgb(33, 32, 32)",
          // borderLeft: "1px solid #ddd",
        }}
      >
        {selectedUser ? (
          <UserDetailComponent
            user={selectedUser}
            onClose={() => setSelectedUser(null)} // Cerrar el componente de detalles
          />
        ) : (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>Selecciona un usuario para ver detalles</p>
          </div>
        )}
      </div>
    </div>
  );
}
