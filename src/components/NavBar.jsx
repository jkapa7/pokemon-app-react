import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.mainContainer}>
      <Link to="/home">
        <p className={styles.txt}>HOME</p>
      </Link>

      <Link to="/create">
        <p className={styles.txt}>CREATE POKEMON</p>
      </Link>

      <Link to="/">
        <p className={styles.txt}>EXIT</p>
      </Link>
    </div>
  );
};

export default NavBar;
