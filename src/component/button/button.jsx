import React from "react";
import styles from "./button.module.css";
const Button = ({ handleLogin, value }) => (
  <button onClick={handleLogin} className={styles.btn}>
    {value}
  </button>
);

export default Button;
