import axios from "axios";

export const ORDER_BY_SPEED = "RDER_BY_SPEED";
export const GET_USERS = "GET_USERS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE ";
export const GET_TYPES = "GET_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const POST_POKEMON = "POST_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const pokemons = await axios.get("/pokemon");
    dispatch({ type: GET_USERS, payload: pokemons.data });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const types = await axios.get("/types");
    dispatch({ type: GET_TYPES, payload: types.data });
  };
};

export const orderBySpeed = (payload) => {
  return {
    type: ORDER_BY_SPEED,
    payload: payload,
  };
};

export const filterByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload: payload,
  };
};

export const pokemonsByCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload: payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload: payload,
  };
};

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: payload,
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const pokemon = await axios.get(`/pokemon?name=${name}`);

      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon.data,
      });
    } catch (error) {
      alert(`Pokemon with name: ${name} not found`);
    }
  };
};

export const postPokemon = (payload) => {
  return async () => {
    try {
      const response = await axios.post(`/pokemon`, payload);
      return response;
    } catch (error) {
      alert(error);
    }
  };
};

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      const pokemon = await axios.get(`/pokemon/${id}`);

      dispatch({
        type: GET_POKEMON_DETAIL,
        payload: pokemon.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};
