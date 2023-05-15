import React from "react";
import styles from "../styles/Paginado.module.css";

const Paginado = (props) => {
  const pageNumbers = [];


  for (
    let i = 1;
    i <= Math.ceil(props.allPokemons / props.pokemonsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

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
