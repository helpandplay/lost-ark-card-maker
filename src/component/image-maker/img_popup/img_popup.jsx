import React from "react";
import Header from "../../header/header";
import styles from "./img_popup.module.css";
const ImgPopUp = ({ img, onClose }) => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.img_container}>
        <img src={img} alt="잘라낸 이미지" className={styles.img} />
        <p>위의 이미지를 저장하세요</p>
        <div className={styles.btn_container}>
          {onClose && (
            <button
              className={`${styles.popup_close} ${styles.popup_btn}`}
              onClick={onClose}
            >
              닫기
            </button>
          )}
          <a href="/" className={`${styles.popup_goHome} ${styles.popup_btn}`}>
            카드 제작하러 가기
          </a>
        </div>
      </div>
    </>
  );
};

export default ImgPopUp;
