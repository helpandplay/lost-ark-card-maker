import React from "react";
import styles from "./button.module.css";
const Button = ({ onLogin, onLogout, onChangeFile, value }) => (
  <button onClick={onLogin || onLogout || onChangeFile} className={styles.btn}>
    {value}
  </button>
);

export default Button;
