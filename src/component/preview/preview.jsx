import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";
const Preview = ({ cards, onCardDelete, ImageDownload }) => {
  return (
    <section className={styles.preview}>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onCardDelete={onCardDelete}
          ImageDownload={ImageDownload}
        />
      ))}
    </section>
  );
};

export default Preview;
