import React from "react";
import styles from "./input_box.module.css";
const InputBox = ({ text, name }) => (
  <div className={`${styles.input_group} ${getClassName(name)}`}>
    <input type="text" name={name} id={name} required />
    <span className={styles.highlight} />
    <span className={styles.bar} />
    <label htmlFor={name}>{text}</label>
  </div>
);
const getClassName = (name) => {
  switch (name) {
    case "character":
      return styles.character;
    case "job":
      return styles.job;
    case "server":
      return styles.server;
    case "level":
      return styles.level;
    case "team_level":
      return styles.team_level;
    case "message":
      return styles.message;
    case "guild":
      return styles.guild;
    default:
      throw new Error("unknown name in input_box" + name);
  }
};
export default InputBox;
