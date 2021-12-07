import React from "react";
import Logo from '../../img/filmes.jpg'

const logo = {
  borderRadius: '1rem 1rem 1rem 1rem',  // Constante de Estilo
  marginRight: '1vw',
  marginLeft: '2vw'
}

const nomeNav = {
  fontFamily: 'Balsamiq Sans',
  fontStyle: 'italic'
}
export default function Nav() {

  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark">
        <div
          className="container-fluid">
          <a
            className="navbar-brand "
            href="#"
            style={nomeNav}>
            <img
              src={Logo}
              alt="Lançamentos do Ano"
              width="100"
              height="80"
              className="d-inline-block align-text"
              style={logo} />
            Lançamentos de Ano
          </a>
        </div>
      </nav>
    </>
  )
}