import React from "react";
import styles from "./input_box.module.css";
const InputBox = ({ text, name, maxLength }) => {
  return (
    <div className={`${styles.input_group} ${getClassName(name)}`}>
      <input
        type="text"
        name={name}
        id={name}
        required
        maxLength={maxLength || "12"}
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
};
const getClassName = (name) => {
  switch (name) {
    case "characterName":
      return styles.character;
    case "job":
      return styles.job;
    case "server":
      return styles.server;
    case "level":
      return styles.level;
    case "territory":
      return styles.territory;
    case "message":
      return styles.message;
    case "guild":
      return styles.guild;
    default:
      throw new Error("unknown name in input_box" + name);
  }
};
export default InputBox;
