import React from "react";
import Button from "../button/button";
import InputBox from "../input_box/input_box";
import styles from "./card_form.module.css";
const CardForm = ({ getInputData, onAddCard }) => {
  const onChangeFile = (e) => {
    console.log("onChange");
  };
  const onDelete = (e) => {
    console.log("onDelete");
  };
  const handleFormChange = (e) => {
    e.preventDefault();
    const data = {};
    data[e.target.name] = e.target.value;
    getInputData(data);
  };
  return (
    <form className={styles.form} onChange={handleFormChange}>
      <fieldset>
        <InputBox
          text="캐릭터 명"
          name="characterName"
          getInputData={getInputData}
        />
        <select name="job" className={`${styles.job} ${styles.select}`}>
          <option value="">직업 명</option>
          <option value="warload">워로드</option>
          <option value="berserker">버서커</option>
          <option value="destroyer">디스트로이어</option>
          <option value="holyknight">홀리나이트</option>
          <option value="battlemaster">배틀마스터</option>
          <option value="infighter">인파이터</option>
          <option value="soulmaster">기공사</option>
          <option value="lancer">창술사</option>
          <option value="devilhunter">데빌헌터</option>
          <option value="hawkeye">호크아이</option>
          <option value="blaster">블래스터</option>
          <option value="scouter">스카우터</option>
          <option value="suommer">서머너</option>
          <option value="bard">바드</option>
          <option value="arcana">아르카나</option>
          <option value="blade">블레이트</option>
          <option value="demonic">데모닉</option>
          <option value="reaper">리퍼</option>
        </select>
        <InputBox text="서버 명" name="server" />
        <InputBox text="길드 명" name="guild" />
        <InputBox text="아이템 레벨" name="level" maxLength="13" />
        <InputBox text="원정대 영지 명" name="territory" />
        <InputBox text="한 줄 소개" name="message" maxLength="50" />
        <ul className={styles.btn_box}>
          <li>
            <select name="theme" className={`${styles.theme} ${styles.select}`}>
              <option value="">원하는 테마를 골라주세요</option>
              <option value="default">default</option>
              <option value="pink">pink</option>
              <option value="orange">orange</option>
            </select>
          </li>
          <li>
            <Button value="No file" onChangeFile={onChangeFile} />
          </li>
          <li>
            <input type="file" name="file" className={styles.file} />
            <Button value="OK" onAddCard={onAddCard} />
          </li>
          <li>
            <Button value="Delete" onDelete={onDelete} />
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default CardForm;
