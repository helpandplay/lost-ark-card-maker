import React from "react";
import InputBox from "../input_box/input_box";
import styles from "./card_form.module.css";
const CardForm = ({ card }) => {
  return (
    <form className={styles.form}>
      <InputBox text="캐릭터 명" name="character" />
      <InputBox text="직업 명" name="job" />
      <InputBox text="서버 명" name="server" />
      <InputBox text="길드 명" name="guild" />
      <InputBox text="아이템 레벨" name="level" />
      <InputBox text="원정대 레벨" name="team_level" />
    </form>
  );
};

export default CardForm;
