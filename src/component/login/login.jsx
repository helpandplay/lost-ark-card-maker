import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import LoginMain from "./login-main/login-main";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.login}>
      <Header />
      <section className={styles.login_section}>
        <h1 className={styles.title}>Login</h1>
        <LoginMain />
      </section>
      <Footer />
    </div>
  );
};

export default Login;
