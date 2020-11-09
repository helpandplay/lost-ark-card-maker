import React from "react";
import styles from "./login-main.module.css";
const LoginMain = ({ onLogin }) => {
  const handleLogin = (e) => {
    onLogin(e.target.textContent);
  };
  return (
    <ul className={styles.login_main}>
      <li>
        <button onClick={handleLogin} className={styles.social_btn}>
          Google
        </button>
      </li>
      <li>
        <button onClick={handleLogin} className={styles.social_btn}>
          Facebook
        </button>
      </li>
    </ul>
  );
};

export default LoginMain;
