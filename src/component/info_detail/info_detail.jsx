import React from "react";
import styles from "./info_detail.module.css";

const InfoDetail = ({ name, value, theme }) => (
  <div className={`${styles.wrapper} ${getTheme(theme)}`}>
    <span className={`${styles.title}`}>{name}</span>
    <span className={styles.description}>{value}</span>
  </div>
);
const getTheme = (theme) => {
  switch (theme) {
    case "Red":
      return styles.red;
    case "Yellow":
      return styles.yellow;
    case "Green":
      return styles.green;
    case "LightBlue":
      return styles.lightBlue;
    case "Pink":
      return styles.pink;
    case "Black":
      return styles.black;
    default:
      return styles.black;
  }
};
export default InfoDetail;
