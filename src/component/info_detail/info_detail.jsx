import React from "react";
import styles from "./info_detail.module.css";

const InfoDetail = ({ name, value }) => (
  <div className={styles.wrapper}>
    <span className={styles.title}>{name}</span>
    <span className={styles.description}>{value}</span>
  </div>
);

export default InfoDetail;
