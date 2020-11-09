import React from "react";
import styles from "./header.module.css";
const Header = ({ user, onLogout }) => {
  return (
    <div className={styles.header}>
      {user && (
        <a target="_blank" href="/image-maker">
          이미지 생성기
        </a>
      )}
      <h1>LostArk Card Generator</h1>
      {user && (
        <button onClick={onLogout} className={styles.logout}>
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
