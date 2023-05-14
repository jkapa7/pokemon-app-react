import React from "react";
import styles from "../styles/Paginado.module.css";

const Paginado = (props) => {
  //CREO UN ARRAY DONDE GUARDARE EL NUMERO DE PAGINAS QUE TENDRA
  const pageNumbers = [];

  //ESTE NUMERO DE PAGINAS ES CALCULADO AL DIVIDR TODOS LOS
  //POKEMONES SOBRE LA CANTIDAD DE POKEMONES POR PAGINA, AMBAS
  //VARIABLES LAS RECIBO POR PROPS Y LAS PASO CUANDO RENDERIZE
  //EL COMPONENTE PAGINADO EN CARDS CONTAINER
  for (
    let i = 1;
    i <= Math.ceil(props.allPokemons / props.pokemonsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  //ESTOY RENDERIZANDO UNA LISTA CON EL NUMERO DE PAGINAS Y UN BOTON
  //PARA CADA UNA QUE EJECURA LA FUNCION PAGINADO, ESTA SETEA LA PAGINA
  //ACTUAL AL NUMERO QUE RECIBE
  return (
    <ul className={styles.list}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => props.paginado(number)}>{number}</button>
          </li>
        ))}
    </ul>
  );
};

export default Paginado;
