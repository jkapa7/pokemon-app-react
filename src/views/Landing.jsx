import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <p>¡WELCOME BACK!</p>

        <p>CLICK START TO ENJOY</p>
        <Link to="/home">
          <button className={styles.button}>START</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
