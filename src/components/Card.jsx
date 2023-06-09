import React from "react";
import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div>
      <article className={style.card}>
        <div className={style.txt}>
          <p>{pokemon.name}</p>
          <Link to={`/detail/${pokemon.id}`}>
            <img alt="pokemon" src={pokemon.image} />
          </Link>
          <p>Types: {pokemon.types}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
