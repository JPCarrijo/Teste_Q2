import React from "react";

export default function Pagination(props) {
  const pagLink = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.pagina == i ? 'active' : '';

    pagLink.push(<li
      className={`page-item ${active}`}
      key={i}
      onClick={() => props.nextPage(i)}>
      <a
        className="page-link"
        href="#">{i}</a></li>)
  }
  return (
    <div
      className="container">
      <div
        className="row">
        <ul
          className="pagination justify-content-center">
          {props.pagina > 1 ? <li
            className={`page-item`}
            onClick={() => props.nextPage(props.pagina
              - 1)}>
            <a
              className="page-link"
              href="#"> Prev </a></li> : ''}
          {pagLink}
          {props.pagina < props.pages ? <li
            className={`page-item`}
            onClick={() => props.nextPage(props.pagina
              + 1)}>
            <a
              className="page-link"
              href="#"> Next </a></li> : ''}
        </ul>
      </div>
    </div>
  )
}