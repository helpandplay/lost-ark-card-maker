import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <img src="/images/long_logo.png" alt="logo" className={styles.logo} />
    </div>
  );
};

export default Footer;
