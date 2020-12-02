import React, { memo, useRef } from "react";
import styles from "./card.module.css";
import InfoDetail from "../info_detail/info_detail";
import JobImage from "../job_image/job_image";
import CardCover from "../card_cover/card_cover";
const Card = memo(({ card, onCardDelete, ImageDownload }) => {
  const {
    id,
    characterName,
    job,
    server,
    guild,
    level,
    territory,
    theme,
    imageUrl,
  } = card;
  const DEFAULT_IMAGE = "/images/logo.png";
  const cardRef = useRef();
  const onCardDownload = () => {
    ImageDownload.download(cardRef.current);
  };
  const onIconClick = (e) => {
    e.target.name === "delete" && onCardDelete(id);
    e.target.name === "download" && onCardDownload();
  };
  return (
    <div className={styles.card_container}>
      <div className={styles.cover}>
        <CardCover onIconClick={onIconClick} />
      </div>
      <article ref={cardRef} className={`${styles.card} ${getTheme(theme)}`}>
        <JobImage job={job} />
        <figure className={styles.profile}>
          <img src={(imageUrl && imageUrl) || DEFAULT_IMAGE} alt="profile" />
        </figure>
        <div className={styles.info}>
          <div className={styles.title}>
            <h3 className={styles.characterName}>{characterName}</h3>
            <div className={styles.subtitle}>
              <span className={styles.job}>{job}</span>
              <span>{level}</span>
            </div>
          </div>
          <div className={styles.info_detail}>
            <InfoDetail name="서버" value={server} theme={theme} />
            <InfoDetail name="길드" value={guild} theme={theme} />
            <InfoDetail name="영지" value={territory} theme={theme} />
          </div>
        </div>
      </article>
    </div>
  );
});
const getTheme = (theme) => {
  switch (theme) {
    case "Red":
      return styles.red;
    case "Yellow":
      return styles.yellow;
    case "Green":
      return styles.green;
    case "LightBlue":
      return styles.lightBlue;
    case "Pink":
      return styles.pink;
    case "Black":
      return styles.black;
    default:
      return styles.black;
  }
};
export default Card;
