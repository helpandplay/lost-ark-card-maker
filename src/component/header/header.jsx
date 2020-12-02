import React, { memo } from "react";
import styles from "./header.module.css";
const Header = memo(({ user, onLogout }) => {
  return (
    <header className={styles.header}>
      {user && (
        <a
          className={styles.imageGeneratorLink}
          target="_blank"
          href="/image-maker"
        >
          간단 이미지 편집기
        </a>
      )}
      <h1>LostArk Card Generator</h1>
      {user && (
        <button onClick={onLogout} className={styles.logout}>
          Log out
        </button>
      )}
    </header>
  );
});

export default Header;
