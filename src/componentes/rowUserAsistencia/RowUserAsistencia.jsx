import { useContext } from "react";
import ContextData from "../../context/ContextData";


import stil from "./RowUser.module.css"   // importa los estilos


import { FaUserCircle } from "react-icons/fa";  // importa icono de usuario


import { format, addMinutes } from "date-fns"; // para parcear las fechas


import Swal from "sweetalert2";  // importa libreria de alertas


// Obtener la fecha actual
const now = new Date();

// Formatear la fecha actual
const fecha = format(now, 'yyyy-MM-dd');

// Formatear la fecha y hora actual
const horaEntrada = format(now, 'yyyy-MM-dd HH:mm:ss');

// Sumar 1 hora y 30 minutos a la fecha y hora actual
const horaSalida = format(addMinutes(now, 90), 'yyyy-MM-dd HH:mm:ss');



//   c o m p o n e n t e
function RowUserAsistencia({ nombre, usuario, apellido, id, Icon, handleClick }) {

  const { setLoading } = useContext(ContextData)

  // funcion que conecta al api para generar asistencia
  const saveAttendance = async () => {
    setLoading(true)
    const newAttendance = {
      id_usuario: id,
      fecha: fecha,
      hora_entrada: horaEntrada,
      hora_salida: horaSalida,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/v1/attendances/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newAttendance)
      });

      const result = await response.json();

      if (result.error) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${result.error.message}`,
        });
        return
      }
      setLoading(false)
      Swal.fire({
        icon: "success",
        title: "Listo",
        text: `Asistencia creada`,
      });

      // || corregir update user not present and present

    } catch (error) {
      console.error(error)
      setLoading(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error: ${error.message}`,
      });
    }
  };

  // funcion para que el usuario decida si genera asistencia o no mediante un alerta
  const registerAttendance = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-dark",
        cancelButton: "btn btn-ligth",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Quieres generar una Asistencia?",
        text: `Estas a punto de poner presente a ${nombre} ${apellido} `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, Generar Asistencia",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          saveAttendance()
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado!",
            icon: "error",
          });
        }
      });
  };

  return (
    <div
      className={stil.container}
      onClick={handleClick ? registerAttendance : null}
    >
      <FaUserCircle className={stil.icon} />
      <p className={stil.p}>
        {nombre} {apellido} ({usuario})
      </p>
      <div className={stil.icon2}>{Icon}</div>
    </div>
  );
}

export default RowUserAsistencia
