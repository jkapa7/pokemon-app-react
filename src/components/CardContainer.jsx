import React, { useState, useEffect } from "react";
import Card from "./Card";
import style from "../styles/CardContainer.module.css";
import { useDispatch, useSelector } from "react-redux";

//IMPORTO LA ACTION QUE LE PASARE AL DISPATCH Y SE EJECUTARA
import { getAllPokemons } from "../redux/actions";

//IMPORTO EL COMPONENTE PAGINADO PORQUE ES ACA DONDE LO VOY A RENDERIZAR
import Paginado from "./Paginado";

const CardsContainer = (props) => {
  //EL DISPATCH RECIBE LAS ACTIONS,
  const dispatch = useDispatch();

  //ME SUSCRIBO A LA PROPIEDAD POKEMONS DEL ESTADO GLOBAL
  //AHI ESTAN MIS POKEMONES
  const allPokemons = useSelector((state) => state.pokemons);

  //CREO UN ESTADO LOCAL DE REACT PARA DEFINIR CUANTOS
  //POKEMONS HABRAN POR PAGINA, EN ESTE CASO INDICO QUE 12
  const [pokemonsPerPage /*setPokemonsPerPage*/] = useState(12);

  //CREO UNA VARIABLE CON EL INDEX DEL ULTIMO POKEMON
  //COMO RECIBO EL ESTADO CURRENTPAGE POR PROPS, AL RENDERIZAR EL
  //CARD CONTAINER EN EL HOME SE LO DEBO PASAR
  const indexOfLastPokemon = props.currentPage * pokemonsPerPage;

  //CREO UNA VARIABLE CON EL INDEX DEL PRIMER POKEMON
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  //EL METODO SLICE ME DEVUELVE UNA COPIA DE UN ARRAY
  //DESDE DONDE LE INDIQUE QUE COMIENZE HASTA DONDE LE INDIQUE
  //QUE FINALICE ESTOY GUARDANDO LOS POKEMONES DE CADA PAGINA,
  //ESTA VARIABLE ES LA ENCARGADA DE INDICAR CUALES POKEMONS
  //SE VAN A RENDERIZAR POR PAGINA,
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  //SETEA LA PAGINA ACTUAL AL NUMERO QUE RECIBE, SERA LA FUNCION
  //QUE SE EJECUTE AL TOCAR LOS POTONES QUE CREO PARA EL PAGINADO
  const paginado = (pageNumber) => {
    props.setCurrentPage(pageNumber);
  };

  //CON USEEFFECT() MANEJO EL CICLO DE VIDA DEL COMPONENTE QUIERO
  //QUE CUANDO SE MONTE EL COMPONENTE, SE HAGA EL DISPATCH DE LA
  //ACTION, GETPOKEMONS ME TRAE TODOS LOS POKEMOS
  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  /* RENDERIZO SOLO LOS POKEMONS DE CURRENTPOKEMONS, NO TODOS,
  CURRENTEPOKEMONS SON LOS POKEMONS QUE HAY POR PAGINA*/
  return (
    <div>
      <div className={style.container}>
        {currentPokemons?.map((pokemon) => {
          return (
            <Card
              //LE PASO ID NO PARA MOSTARLO EN LA CARD, SINO PARA
              //PASARLO COMO PARAMS EN LA RUTA DE DETAIL DE CADA CARD
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
