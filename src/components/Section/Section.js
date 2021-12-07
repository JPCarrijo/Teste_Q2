import React from "react";

// Variáveis de Estilo
const cardBody = {
  marginTop: '4vh',
  textAlign: 'justify',
  fontFamily: 'Balsamiq Sans'
}

const img = {
  borderRadius: '1rem',
  height: '100%'
}


export default function Image(props) {
  // Função que retorna poster, título, sinopse e data  
  function getLinhas() {

    const arrayRegistros = props.items  //Constante que recebe state

    return arrayRegistros.map((item) =>
      <div
        key={item.id}
        className="container py-3 h-100">
        <div
          className="row d-flex justify-content-center align-items-center h-100">
          <div
            className="col col-xl-10">
            <div
              className="card"
              style={{ borderRadius: '1rem', boxShadow: '10px 12px 15px rgba(3, 1, 0, 0.69)' }}>
              <div
                className="row g-0">
                <div
                  className="col-md-4 col-lg-4 d-md-block">
                  <img
                    src={`http://image.tmdb.org/t/p/w185${item.poster_path}`}
                    alt="card image"
                    className="img-fluid rounded-center" width="100%"
                    style={img} />
                </div>
                <div
                  className="col-md-8">
                  <div
                    className="card-body"
                    style={cardBody}>
                    <h6
                      className="h6"> Nome do Filme: </h6>
                    <h3
                      className="h3 mb-4 text-justify"> {item.title} </h3>
                    <h6
                      className="h6"> Sinopse: </h6>
                    <h5
                      className="h5 mb-4 text-left"> {item.overview} </h5>
                    <h6
                      className="h6"> Data de Lançamento: </h6>
                    <h5
                      className="h5 text-left"> {item.release_date} </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }

  return (
    <div>
      {getLinhas()}
    </div>
  )
}