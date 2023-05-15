import React from "react";
import style from "../styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div>
      <article className={style.card}>
        <div className={style.txt}>
          <Link to={`/detail/${pokemon.id}`}>
            <p>{pokemon.name}</p>

            <img alt="pokemon" src={pokemon.image} />

            <p>Types: {pokemon.types}</p>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Card;
