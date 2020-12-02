import React from "react";
import styles from "./info.module.css";
const Info = ({ onSelectFile }) => {
  return (
    <section className={styles.info}>
      <div className={styles.info_detail}>
        <p>이미지를 불러와 원하는 이미지로 잘라내세요!</p>
        <p>잘라낸 이미지를 저장하시면 됩니다 :)</p>
        <br />
        <p>* .png 파일은 배경색이 검정색으로 변환되어 출력됩니다.</p>
        <p>* 모바일에선 정상적으로 작동하지 않을 수도 있습니다.</p>
      </div>
      <hr />
      <div className={styles.filebox}>
        <button className={styles.fileBtn}>Upload Image</button>
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={onSelectFile}
          name="file"
          className={styles.file}
        />
      </div>
    </section>
  );
};

export default Info;
