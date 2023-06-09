import React from "react";
import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div>
      <article className={style.card}>
        <div className={style.txt}>
          <h3>{pokemon.name}</h3>
          <Link to={`/detail/${pokemon.id}`}>
            <img alt="pokemon" src={pokemon.image} />
          </Link>
          <h3>Types: {pokemon.types}</h3>
        </div>
      </article>
    </div>
  );
};

export default Card;
