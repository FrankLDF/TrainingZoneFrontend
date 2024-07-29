
const membresias = [
  {
    id: 1,
    tiempo: "cada 30 días",
    costo: 2000,
  },
  {
    id: 2,
    tiempo: "cada 15 días",
    costo: 1000,
  },
  {
    id: 3,
    tiempo: "cada 7 días",
    costo: 500,
  },
];

export default function InfoMembresia({ id }) {
  // Encuentra la membresía correspondiente al id
  const membresia = membresias.find((membresia) => membresia.id == id);

  // Si no se encuentra una membresía con el id dado, muestra un mensaje alternativo
  if (!membresia) {
    return <div>No se encontró la membresía con el id proporcionado.</div>;
  }

  // Renderiza la información de la membresía encontrada
  return (
    <div className="text-center bg-secondary p-3 w-75 ms-auto me-auto mt-5 rounded text-primari">
      <span className="text-white">Esta a punto de elegir efectuar un pago de : </span>RD$:{membresia.costo} pesos, {membresia.tiempo}.
    </div>
  );
}
