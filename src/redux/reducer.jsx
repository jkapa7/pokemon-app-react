import {
  GET_USERS,
  FILTER_BY_TYPE,
  GET_TYPES,
  ORDER_BY_NAME,
  FILTER_CREATED,
  ORDER_BY_ATTACK,
  GET_POKEMON_BY_NAME,
  POST_POKEMON,
  ORDER_BY_SPEED,
  GET_POKEMON_DETAIL,
} from "./actions";

//CREO MI ESTADO INICIAL, CON LAS
//PROPIEDADES QUE VOY A TRABAJAR
const initialState = {
  pokemons: [],
  types: [],
  allPokemons: [],
  detail: [],
};

//EL REDUCER SIEMPRE RECIBE EL ESTADO INICIAL Y LAS ACCIONES, LO
//IDEAL ES QUE LA LOGICA ESTE EN ESTE COMPONENTE Y NO EN LAS ACTIONS
const rootReducer = (state = initialState, action) => {
  const pokemonsToOrder = [
    ...(state.allPokemons.length ? state.allPokemons : state.pokemons),
  ];

  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      // const allPokemons1 = state.allPokemons;
      // const pokemonByName = allPokemons1.filter(
      //   (pokemon) => pokemon.name === action.payload
      // );

      return {
        ...state,
        pokemons: action.payload,
      };

    case POST_POKEMON:
      return {
        ...state,
      };

    //ESTE CASO ES PARA OBTENER LOS TYPOS DE POKEMONES
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    //ME TRAIGO TODOS LOS POKEMONES, ESTAN EN MI ESTADO GLOBAL
    //Y LOS FILTRO PARA MOSTRARLOS A TODOS,
    case FILTER_BY_TYPE:
      const allPokemons = state.allPokemons;

      const typeFiltered =
        action.payload === "all"
          ? allPokemons
          : allPokemons.filter((poke) => poke.types.includes(action.payload));

      return {
        ...state,
        pokemons: typeFiltered.length ? typeFiltered : allPokemons,
      };

    case FILTER_CREATED:
      const myPokemons = state.allPokemons;

      const createdFilter =
        action.payload === "created"
          ? myPokemons.filter((poke) => poke.createdDb)
          : myPokemons.filter((poke) => !poke.createdDb);
      return {
        ...state,
        pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
      };

    case ORDER_BY_SPEED:
      const pokemons = state.allPokemons;
      const filtered = pokemons.filter((pk) => pk.speed >= 60);

      return {
        ...state,
        pokemons: filtered,
      };

    case ORDER_BY_ATTACK:
      const sortedArr =
        action.payload === "attack-asc"
          ? pokemonsToOrder.sort((a, b) => {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : pokemonsToOrder.sort((a, b) => {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedArr,
      };

    case ORDER_BY_NAME:
      const sortedByName =
        action.payload === "asc"
          ? pokemonsToOrder.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : pokemonsToOrder.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: sortedByName,
      };

    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
