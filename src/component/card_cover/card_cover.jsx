import React, { memo } from "react";
import styles from "./card_cover.module.css";
const CardCover = memo(({ onIconClick }) => {
  return (
    <ul className={styles.card_cover} onClick={onIconClick}>
      <li>
        <button className={styles.icon} name="delete" title="삭제하기">
          <i className={`fas fa-times ${styles.close}`} />
        </button>
      </li>
      <li>
        <button className={styles.icon} name="download" title="저장하기">
          <i className={`fas fa-download ${styles.download}`} />
        </button>
      </li>
    </ul>
  );
});

export default CardCover;
