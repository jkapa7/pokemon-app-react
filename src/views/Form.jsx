import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/Form.module.css";
import { useSelector } from "react-redux";


import { getTypes, postPokemon } from "../redux/actions";

const validate = (state) => {
  const error = {};

  if (!state.name.length || state.name.length > 15) {
    error.name = "Name must be between 1 and 15 characters!";
  }

  if (!state.image) {
    error.image = "Required image!!";
  }

  if (state.image && !/^http.+.\.(jpg|jpeg|gif|png|webp)$/.test(state.image)) {
    error.image = "Invalid image!";
  }

  if (state.life < 1 || state.life > 255) {
    error.life = "Life must be between 1 and 255!";
  }

  if (state.attack < 1 || state.attack > 255) {
    error.attack = "Attack must be between 1 and 255!";
  }

  if (state.defense < 1 || state.defense > 255) {
    error.defense = "Defense must be between 1 and 255!";
  }

  if (state.speed < 1 || state.speed > 255) {
    error.speed = "Speed must be between 0 and 255!";
  }

  if (state.weight < 1 || state.weight > 255) {
    error.weight = "Weight must be between 0 and 255!";
  }

  if (state.height < 1 || state.height > 255) {
    error.height = "Height must be between 0 and 255!";
  }

  if (state.types.length > 2 || state.types.length < 1) {
    error.types = "You must choose one or two types!";
  }
  return error;
};


const initialState = {
  image: "",
  name: "",
  life: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  types: [],
};
//

const Form = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);

  const [form, setForm] = useState(initialState);

  const [blur, setBlur] = useState({});

  const errors = validate(form);

  const formValid = Object.keys(errors).length === 0;

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleSelect = (event) => {
    if (!form.types.includes(event.target.value)) {
      setForm({
        ...form,
        types: [...form.types, event.target.value],
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      dispatch(postPokemon(form));
      alert("Pokemon created successfully!");
      setForm(initialState);
      history.push("/home");
    }
  };

  const handleDeleteType = (elem) => {
    const filterDelete = form.types.filter((type) => type !== elem);


    setForm({
      ...form,
      types: filterDelete,
    });
  };


  const handleBlur = (event) => {
    setBlur({
      ...blur,
      [event.target.name]: true,
    });
  };


  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
        <h2>¡CREATE YOUR POKEMON!</h2>
        <div className={styles.formBox}>
          <div>
            <label>Name: </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.name && blur.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label>Image: </label>
            <input
              name="image"
              type="text"
              value={form.image}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.image && blur.image && <p>{errors.image}</p>}
          </div>

          <div>
            <label>Life: </label>
            <input
              name="life"
              type="number"
              value={form.life}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.life && blur.life && <p>{errors.life}</p>}
          </div>

          <div>
            <label>Attack: </label>
            <input
              name="attack"
              type="number"
              value={form.attack}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.attack && blur.attack && <p>{errors.attack}</p>}
          </div>

          <div>
            <label>Defense: </label>
            <input
              name="defense"
              type="number"
              value={form.defense}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.defense && blur.defense && <p>{errors.defense}</p>}
          </div>

          <div>
            <label>Speed: </label>
            <input
              name="speed"
              type="number"
              value={form.speed}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.speed && blur.speed && <p>{errors.speed}</p>}
          </div>

          <div>
            <label>Height: </label>
            <input
              name="height"
              type="number"
              value={form.height}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.height && blur.height && <p>{errors.height}</p>}
          </div>

          <div>
            <label>Weight: </label>
            <input
              name="weight"
              type="number"
              value={form.weight}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.weight && blur.weight && <p>{errors.weight}</p>}
          </div>

          <div>
            <label>
              Type:
              <select
                name="types"
                onChange={handleSelect}
                disabled={form.types.length >= 2}
                onBlur={handleBlur}
              >
                <option value="all">All</option>
                {types.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
              {errors.types && blur.types && <p>{errors.types}</p>}
              <ul>
                {form.types.map((type) => (
                  <li key={type} className={styles.listaTypes}>
                    {type}
                    <button
                      className={styles.delete}
                      type="button"
                      onClick={() => handleDeleteType(type)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className={styles.create}
              disabled={!formValid}
            >
              CREATE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
