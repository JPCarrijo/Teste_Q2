import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../services/api';
import axios from "axios";
import Section from "../Section/Section";
import Pagination from "../Pagination/Pagination";


export default function Container() {

  const [filme, setFilme] = useState([]) // State que recebe dados da Api
  const [total, setTotal] = useState(0)  // State que recebe o total de páginas
  const [pagina, setPagina] = useState(1)  // State que recebe a página desejada

  // Renderiza a página pela primeira vez
  useEffect(() => {
    nextPage()
  }, [])

  // Retorna o total de páginas
  useEffect(() => {
    urlApi.get('')
      .then(response => response.data.total_results)
      .then(response => setTotal(response));
  }, [])

  // Retorna a página selecionada
  const nextPage = async (pageNumber) => {
    await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=${pageNumber}`)
      .then(response => response.data.results)
      .then(response => setFilme(response))
      .then(response => setPagina(pageNumber))

  }

  const numberPages = Math.floor(total / 100); //Constante guarda a quantidade de páginas

  return (
    <>
      <Section
        items={filme} />
      <Pagination
        pages={numberPages}
        nextPage={nextPage}
        pagina={pagina} />
    </>
  )
}