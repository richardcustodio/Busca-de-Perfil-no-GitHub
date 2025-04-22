import React from "react";

function ErrorMessage({ message }) {
  if (import.meta.env.DEV) {
    if (typeof message !== "string" || !message) {
      console.error("Prop 'message' inválida: esperava uma string não vazia.");
    }
  }

  return (
    <div className="error-message" role="alert">
      <p>{message}</p>
    </div>
  );
}

export default React.memo(ErrorMessage);
