// src/components/UserDetailComponent.js
import React from "react";

const UserDetailComponent = ({ user, onClose }) => {
    if (!user) return null;
    
    console.log(user)
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <button
        onClick={onClose}
        style={{
          marginBottom: "20px",
          background: "#ddd",
          border: "none",
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        Volver
      </button>
      <h2>
        {user.nombre} {user.apellido}
      </h2>
      <p>
        <strong>Correo Electrónico:</strong> {user.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.telefono}
      </p>
      <p>
        <strong>Dirección:</strong> {user.direccion}
      </p>
      {/* Agrega más campos según sea necesario */}
    </div>
  );
};

export default UserDetailComponent;
