import React from "react";
import CardForm from "../card_form/card_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <ul className={styles.card_form}>
        {cards.map((card) => (
          <CardForm key={card.id} card={card} />
        ))}
      </ul>
      <button>Add Form</button>
    </section>
  );
};

export default Editor;
