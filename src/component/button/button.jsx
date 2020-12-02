import React, { memo } from "react";
import styles from "./button.module.css";
const Button = memo(({ onClick, value }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {value}
    </button>
  );
});

export default Button;
