import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => {
  return (
    <footer className={styles.footer}>
      <img src="/images/long_logo.png" alt="logo" className={styles.logo} />
    </footer>
  );
});

export default Footer;
