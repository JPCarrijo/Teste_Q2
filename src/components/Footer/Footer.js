import React from "react";

const divStyle = {
  textAlign: 'center',   // Constante de Estilo
  color: 'white'
}
export default function Footer() {
  return (
    <>
      <div
        style={divStyle}>
        <h6
          className="h6">&copy; 2021 Desenvolvido por João Paulo Carrijo </h6>
      </div>
    </>
  )
}