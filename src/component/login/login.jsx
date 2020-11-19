import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import LoginMain from "./login-main/login-main";
import styles from "./login.module.css";

const Login = ({ auth }) => {
  const history = useHistory();
  const onLogin = async (socialType) => {
    const user = await auth.onLogin(socialType);
    history.push({
      pathname: "/",
      state: { id: user.uid },
    });
  };
  return (
    <div className={styles.login}>
      <Header />
      <section className={styles.login_section}>
        <h1 className={styles.title}>Login</h1>
        <LoginMain onLogin={onLogin} />
      </section>
      <Footer />
    </div>
  );
};

export default Login;
