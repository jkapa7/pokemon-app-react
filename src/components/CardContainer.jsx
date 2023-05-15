import React, { useState, useEffect } from "react";
import Card from "./Card";
import style from "../styles/CardContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../redux/actions";
import Paginado from "./Paginado";

const CardsContainer = (props) => {
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.pokemons);

  const [pokemonsPerPage /*setPokemonsPerPage*/] = useState(12);

  const indexOfLastPokemon = props.currentPage * pokemonsPerPage;

  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    props.setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      <div className={style.container}>
        {currentPokemons?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              pokemon={pokemon}
              image={pokemon.image}
              name={pokemon.name}
              types={pokemon.type}
            />
          );
        })}
      </div>
      <Paginado
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginado={paginado}
      />
    </div>
  );
};

export default CardsContainer;
