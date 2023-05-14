import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/CardContainer";
import SearchBar from "../components/SearchBar";
import {
  getAllPokemons,
  getTypes,
  pokemonsByCreated,
  filterByType,
  orderByName,
  orderBySpeed,
  orderByAttack,
} from "../redux/actions";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);

  const handleReloadButton = (event) => {
    event.preventDefault();
    dispatch(getAllPokemons());
  };

  const handleFilterByType = (event) => {
    dispatch(filterByType(event.target.value));
    setCurrentPage(1);
  };

  const handleFilterByCreated = (event) => {
    dispatch(pokemonsByCreated(event.target.value));
  };

  const handleOrderByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
  };

  const handleSortAttack = (event) => {
    dispatch(orderByAttack(event.target.value));
    setCurrentPage(1);
  };

  const handleSortSpeed = (event) => {
    dispatch(orderBySpeed(event.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.containerChild}>
          <SearchBar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className={styles.containerChild}>
          <h3>Filter by: </h3>

          <select
            defaultValue={"default"}
            onChange={(event) => handleFilterByCreated(event)}
          >
            <option value="default" disabled>
              Origin
            </option>

            <option value="all">All</option>
            <option value="api">Api</option>
            <option value="created">Created</option>
          </select>

          <select
            defaultValue={"default"}
            onChange={(event) => handleFilterByType(event)}
          >
            <option value="default" disabled>
              Type
            </option>
            <option value="all">All</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.containerChild}>
          <h3>Order by: </h3>

          <select
            defaultValue={"default"}
            onChange={(event) => handleOrderByName(event)}
          >
            <option value="default" disabled>
              Name
            </option>

            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>

          <select
            defaultValue={"default"}
            onChange={(event) => handleSortAttack(event)}
          >
            <option value="default" disabled>
              Attack
            </option>
            <option value="attack-asc">Min - Max</option>
            <option value="attack-desc">Max - Min</option>
          </select>
        </div>

        <select
          defaultValue={"default"}
          onChange={(event) => handleSortSpeed(event)}
        >
          <option value="default" disabled>
            Speed
          </option>
          <option value="attack-asc">60</option>
        </select>

        <button
          id={styles.reload}
          onClick={(event) => {
            handleReloadButton(event);
          }}
        >
          ¡Reload Pokemons!
        </button>
      </div>

      <CardContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
