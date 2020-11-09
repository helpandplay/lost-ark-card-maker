import React from "react";
import styles from "./login-main.module.css";
const LoginMain = (props) => {
  return (
    <ul className={styles.login_main}>
      <li>
        <button className={styles.social_btn}>Google</button>
      </li>
      <li>
        <button className={styles.social_btn}>Facebook</button>
      </li>
    </ul>
  );
};

export default LoginMain;
