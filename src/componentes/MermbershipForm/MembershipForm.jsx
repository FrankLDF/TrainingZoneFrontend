import { useForm } from "react-hook-form";
import InfoMembresia from "../infoMembresia/InfoMembresia";
import Swal from "sweetalert2";

import { useContext } from "react";
import ContextData from "../../context/ContextData";

import {
  formattedCurrentDate,
  formattedDatePlus7Days,
  formattedDatePlus15Days,
  formattedDatePlus1Month,
} from "../../utils/fechaFormater";
import LoadingComponent from "../Loading/LoadingComponent";

export default function MembershipForm({ userPendin, setUserPendin }) {
  const { loading, setLoading } = useContext(ContextData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const registerMembership = async (data) => {
    setLoading(true);
    let nextPago = [
      formattedDatePlus1Month,
      formattedDatePlus15Days,
      formattedDatePlus7Days,
    ];
    const futureMembership = {
      tipo_membresia: parseInt(data.tipo_membresia),
      id_usuario: userPendin.id_usuario,
      fecha_inicio: formattedCurrentDate,
      proximo_pago: nextPago[data.tipo_membresia - 1],
      estado: 1,
    };

    try {
      const respons = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/v1/memberships/`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(futureMembership),
        }
      );
      const result = await respons.json();

      if (result.messag) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.messag,
        });
        return;
      }
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Usuario creado con exito!",
        text: `Nombre de Usuario: ${userPendin.usuario}`,

        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      setUserPendin(null);
    } catch (error) {
      console.error(error.messag);
    }
  };

  return (
    <>
      {loading&&<LoadingComponent/>}
      <div
        style={{ backgroundColor: "#333", width: "75%", margin: "15px auto" }}
        className="container p-4 rounded-4"
      >
        <h3 className="text-white text-center">
          Selecciona el tipo de membresía para {userPendin.nombre}{" "}
          {userPendin.apellido}
        </h3>
        <form onSubmit={handleSubmit(registerMembership)}>
          <div className="form-check">
            <input
              className={`form-check-input ${
                errors.tipo_membresia ? "is-invalid" : ""
              }`}
              type="radio"
              id="mensual"
              value="1"
              {...register("tipo_membresia", {
                required: "Este campo es obligatorio",
              })}
            />
            <label className="form-check-label text-white" htmlFor="mensual">
              Mensual
            </label>
          </div>

          <div className="form-check">
            <input
              className={`form-check-input ${
                errors.tipo_membresia ? "is-invalid" : ""
              }`}
              type="radio"
              id="quincenal"
              value="2"
              {...register("tipo_membresia", {
                required: "Este campo es obligatorio",
              })}
            />
            <label className="form-check-label text-white" htmlFor="quincenal">
              Quincenal
            </label>
          </div>

          <div className="form-check">
            <input
              className={`form-check-input ${
                errors.tipo_membresia ? "is-invalid" : ""
              }`}
              type="radio"
              id="semanal"
              value="3"
              {...register("tipo_membresia", {
                required: "Este campo es obligatorio",
              })}
            />
            <label className="form-check-label text-white" htmlFor="semanal">
              Semanal
            </label>
          </div>

          {errors.tipo_membresia && (
            <div className="invalid-feedback d-block">
              {errors.tipo_membresia.message}
            </div>
          )}

          <button
            type="submit"
            style={{ backgroundColor: "#3e0b0b", color: "#fff" }}
            className="btn  mt-3 "
          >
            Completar registro
          </button>
        </form>
        <div>
          {watch("tipo_membresia") && (
            <InfoMembresia id={watch("tipo_membresia")} />
          )}
        </div>
      </div>
    </>
  );
}
