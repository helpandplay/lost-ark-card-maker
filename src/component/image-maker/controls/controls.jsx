import React from "react";
import styles from "./controls.module.css";
const Controls = ({
  onZoom,
  onRotation,
  showCroppedImage,
  cancelCroppedImage,
}) => {
  return (
    <div className={styles.controls}>
      <div>
        <input
          type="range"
          name=""
          id="Zoom"
          min="1"
          max="3"
          step="0.1"
          value="1"
          onChange={(e) => onZoom(e.target.value)}
        />
        <label htmlFor="Zoom">Zoom</label>
      </div>
      <div>
        <input
          type="range"
          name=""
          id="Rotation"
          min="0"
          max="360"
          step="1"
          value="0"
          onChange={(e) => onRotation(e.target.value)}
        />
        <label htmlFor="Rotation">Rotation</label>
      </div>
      <button
        className={`${styles.result} ${styles.controlBtn}`}
        onClick={showCroppedImage}
      >
        잘라내기
      </button>
      <button
        className={`${styles.cancel} ${styles.controlBtn}`}
        onClick={cancelCroppedImage}
      >
        취소
      </button>
    </div>
  );
};

export default Controls;
