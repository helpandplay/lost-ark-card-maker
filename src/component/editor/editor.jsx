import React from "react";
import CardForm from "../card_form/card_form";
import styles from "./editor.module.css";

const Editor = ({ getInputData, onAddCard }) => {
  return (
    <section className={styles.editor}>
      <ul className={styles.card_form}>
        <CardForm getInputData={getInputData} onAddCard={onAddCard} />
      </ul>
      <button>Add Form</button>
    </section>
  );
};

export default Editor;
