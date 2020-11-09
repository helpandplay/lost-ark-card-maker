import React from "react";
import styles from "./header.module.css";
const Header = ({ user, onLogout, onClose }) => {
  return (
    <div className={styles.header}>
      {user && (
        <a target="_blank" href="/image-maker">
          이미지 생성기
        </a>
      )}
      <h1>LostArk Card Generator</h1>
      {onClose && (
        <h4 className={styles.popup_info}>아래의 이미지를 저장하세요</h4>
      )}
      {user && (
        <button onClick={onLogout} className={styles.logout}>
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
