import React from "react";
import CardForm from "../card_form/card_form";
import styles from "./editor.module.css";

const Editor = ({ onAddCard, imageUploader }) => {
  return (
    <section className={styles.editor}>
      <ul className={styles.card_form}>
        <CardForm onAddCard={onAddCard} imageUploader={imageUploader} />
      </ul>
    </section>
  );
};

export default Editor;
