import React from "react";
import styles from "./job_image.module.css";
const JobImage = ({ job }) => {
  return (
    <figure className={styles.job_image}>
      <div className={getJobImage(job)}></div>
    </figure>
  );
};
const getJobImage = (job) => {
  switch (job) {
    case "워로드":
      return styles.warload;
    case "버서커":
      return styles.berserker;
    case "디스트로이어":
      return styles.destoryer;
    case "배틀마스터":
      return styles.battlemaster;
    case "인파이터":
      return styles.infighter;
    case "기공사":
      return styles.soulmaster;
    case "창술사":
      return styles.lancer;
    case "데빌헌터":
      return styles.devilhunter;
    case "호크아이":
      return styles.hawkeye;
    case "블래스터":
      return styles.blaster;
    case "스카우터":
      return styles.scouter;
    case "서머너":
      return styles.summor;
    case "바드":
      return styles.bard;
    case "아르카나":
      return styles.arcana;
    case "블레이드":
      return styles.blade;
    case "데모닉":
      return styles.demonic;
    case "리퍼":
      return styles.reaper;
    default:
      return new Error("직업명이 없어서 이미지를 불러오지 못했습니다. " + job);
  }
};
export default JobImage;
