import React from "react";
import styles from "./card.module.css";
import InfoDetail from "../info_detail/info_detail";
import JobImage from "../job_image/job_image";
const Card = ({ card }) => {
  const {
    characterName,
    job,
    server,
    guild,
    level,
    territory,
    message,
    imageUrl,
  } = card;
  const DEFAULT_IMAGE = "/images/logo.png";
  //직업에 따라 카드 중앙에 그려지는 클래스 이미지가 바뀜
  return (
    <article className={styles.card}>
      <JobImage job={job} />
      <figure className={styles.profile}>
        <img src={(imageUrl && imageUrl) || DEFAULT_IMAGE} alt="profile" />
      </figure>
      <div className={styles.info}>
        <div className={styles.message}>
          <figure>
            <i className="fas fa-quote-left" />
          </figure>
          <span>{message}</span>
          <figure>
            <i className="fas fa-quote-right" />
          </figure>
        </div>
        <div className={styles.title}>
          <h3 className={styles.characterName}>{characterName}</h3>
          <div className={styles.subtitle}>
            <span>{job}</span>
            <span>{level}</span>
          </div>
        </div>
        <div className={styles.info_detail}>
          <InfoDetail name="서버" value={server} />
          <InfoDetail name="길드" value={guild} />
          <InfoDetail name="영지" value={territory} />
        </div>
      </div>
    </article>
  );
};
export default Card;
