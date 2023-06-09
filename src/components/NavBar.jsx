import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.mainContainer}>
      <Link to="/home">
        <h3 className={styles.txt}>HOME</h3>
      </Link>

      <Link to="/create">
        <h3 className={styles.txt}>CREATE POKEMON</h3>
      </Link>

      <Link to="/">
        <h3 className={styles.txt}>EXIT</h3>
      </Link>
    </div>
  );
};

export default NavBar;
