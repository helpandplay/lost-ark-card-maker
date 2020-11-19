import React from "react";
import styles from "./login-main.module.css";
import Button from "../../button/button";
const LoginMain = ({ onLogin }) => {
  const handleLogin = (e) => {
    onLogin(e.target.textContent);
  };
  return (
    <ul className={styles.login_main}>
      <li>
        <Button handleLogin={handleLogin} value="Google" />
      </li>
      <li>
        <Button handleLogin={handleLogin} value="Facebook" />
      </li>
    </ul>
  );
};

export default LoginMain;
