import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "../styles/Detail.module.css";
import { useEffect } from "react";
import { getPokemonDetail } from "../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pokemon = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <article>
          <p className={style.parrafos}>
            <span>Name: </span>
            {pokemon.name}
          </p>

          <img className={style.id} src={pokemon.image} alt="pokemon" />

          <div className={style.parrafos}>
            <p>
              <span>Id: </span>
              {pokemon.id}
            </p>

            <p className={style.parrafos}>
              <span>Life: </span>
              {pokemon.life}
            </p>

            <p className={style.parrafos}>
              <span>Attack: </span>
              {pokemon.attack}
            </p>

            <p className={style.parrafos}>
              <span>Defense: </span>
              {pokemon.defense}
            </p>

            <p className={style.parrafos}>
              <span>Speed: </span>
              {pokemon.speed}
            </p>

            <p className={style.parrafos}>
              <span> Height: </span>
              {pokemon.height}
            </p>

            <p className={style.parrafos}>
              <span>Weight: </span>
              {pokemon.weight}
            </p>

            <p className={style.parrafos}>
              <span>Type: </span>
              {pokemon.types}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Detail;
