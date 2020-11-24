import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";
const Preview = ({ cards }) => {
  const temp = {
    id: "324214412455151",
    characterName: "너는내엉덩이나보고있으렴",
    guild: "봄이왔어요어왔이봄",
    server: "카마인인인인",
    job: "배틀마스터",
    level: "1402.33",
    territory: "맹땅에헤딩",
    message: "정보처리기사실기공부해야되는데 그냥 하지 말까? 모르곘다 ㅅㅂㅋㅋ",
  };
  return (
    <section className={styles.preview}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      <Card key={temp.id} card={temp} />
    </section>
  );
};

export default Preview;
