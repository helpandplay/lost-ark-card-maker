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
      <div className={styles.zoom}>
        <label htmlFor="Zoom" className={styles.label}>
          Zoom
        </label>
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
      </div>
      <div className={styles.rotation}>
        <label htmlFor="Rotation" className={styles.label}>
          Rotation
        </label>
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
