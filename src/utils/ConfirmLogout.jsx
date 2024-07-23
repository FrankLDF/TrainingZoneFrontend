// import { useContext } from "react";
// import Swal from "sweetalert2";
// import ContextData from "../../context/ContextData"; // Importar el contexto de la app
// import { Navigate } from "react-router-dom";




// const confirmLogout = () => {
//     const { setUserData } = useContext(ContextData);
//   Swal.fire({
//     title: "¿Estás seguro?",
//     text: "¡Estás a punto de cerrar sesión!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Sí, cerrar sesión",
//     cancelButtonText: "Cancelar",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       handleLogout();
//       Navigate("/login"); // Redirigir al login después de cerrar sesión
//     }
//   });
    
//     return (
//         <>
//         </>
//     )
// };

// export default confirmLogout;
