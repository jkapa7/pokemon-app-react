import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getPokemonByName } from "../redux/actions";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonByName(name));
    props.setCurrentPage(1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon..."
        onChange={(event) => handleInputChange(event)}
      ></input>

      <button type="submit" onClick={(event) => handleSubmit(event)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
