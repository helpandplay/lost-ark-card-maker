import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Button from "../button/button";
import InputBox from "../input_box/input_box";
import styles from "./card_form.module.css";

const CardForm = ({ onAddCard, imageUploader }) => {
  const [cardData, setCardData] = useState({});
  const [file, setFile] = useState(null);
  const formRef = useRef();
  const fileRef = useRef();
  const fileName = file ? file.name : "이미지 파일 선택";

  const setInputData = (name, value) => {
    cardData[name] = value;
    setCardData(cardData);
  };
  const AddImageFile = async () => {
    const uploadResult = await imageUploader.upload(file.data);
    const imageName = uploadResult.original_filename;
    const imageUrl = `${process.env.REACT_APP_CLOULDARY_FACE_CROP_URL}${uploadResult.public_id}.${uploadResult.format}
    `;
    return { ...cardData, imageName: imageName, imageUrl: imageUrl };
  };
  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files[0].size > 2 * 1024 * 1024) {
      alert("파일 크기가 너무 커요. 2MB 아래로 편집해주세요");
      return;
    }
    setFile({ name: e.target.files[0].name, data: e.target.files[0] });
  };
  // const onDelete = (e) => {
  //   console.log("onDelete");
  // };
  const handleKeyUp = (e) => {
    e.preventDefault();
    setInputData(e.target.name, e.target.value);
  };
  const handleOnAdd = async (e) => {
    e.preventDefault();
    if (JSON.stringify(cardData) === JSON.stringify({})) {
      alert("양식을 채워주세요.");
      return;
    }
    const data = file && (await AddImageFile());
    onAddCard(data || cardData);

    setFile(null);
    setCardData({});
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form} onKeyUp={handleKeyUp}>
      <fieldset>
        <InputBox text="캐릭터 명" name="characterName" />
        <select
          name="job"
          className={`${styles.job} ${styles.select}`}
          onChange={handleKeyUp}
        >
          <option value="">직업 명</option>
          <option value="워로드">워로드</option>
          <option value="버서커">버서커</option>
          <option value="디스트로이어">디스트로이어</option>
          <option value="홀리나이트">홀리나이트</option>
          <option value="배틀마스터">배틀마스터</option>
          <option value="인파이터">인파이터</option>
          <option value="기공사">기공사</option>
          <option value="창술사">창술사</option>
          <option value="데빌헌터">데빌헌터</option>
          <option value="호크아이">호크아이</option>
          <option value="블래스터">블래스터</option>
          <option value="스카우터">스카우터</option>
          <option value="서머너">서머너</option>
          <option value="바드">바드</option>
          <option value="아르카나">아르카나</option>
          <option value="블레이드">블레이드</option>
          <option value="데모닉">데모닉</option>
          <option value="리퍼">리퍼</option>
        </select>
        <InputBox text="서버 명" name="server" />
        <InputBox text="길드 명" name="guild" />
        <InputBox text="아이템 레벨" name="level" maxLength="13" />
        <InputBox text="원정대 영지 명" name="territory" />
        <ul className={styles.btn_box}>
          <li>
            <select
              name="theme"
              className={`${styles.theme} ${styles.select}`}
              onChange={handleKeyUp}
            >
              <option value="">원하는 테마를 골라주세요</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Pink">Pink</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="LightBlue">LightBlue</option>
            </select>
          </li>
          <li>
            <input
              ref={fileRef}
              type="file"
              name="file"
              accept="image/*"
              className={styles.file}
              onChange={handleFileChange}
            />
            <Button
              value={fileName}
              onClick={(e) => {
                e.preventDefault();
                fileRef.current.click();
              }}
            />
          </li>
          <li>
            <Button value="저장하기" onClick={handleOnAdd} />
          </li>
          <li>
            <Button
              value="예시 보기"
              onClick={(e) => {
                e.preventDefault();
                alert("준비중입니다 :)");
              }}
            />
          </li>
        </ul>
      </fieldset>
      <div className={styles.info}>
        <p>* 이미지는 자동적으로 얼굴을 인식하여 Crop되어 저장됩니다.</p>
        <p>
          * 얼굴이 너무 작으면 인식이 안될 수도 있습니다. 이미지를 알맞게
          편집해주세요 :)
        </p>
      </div>
    </form>
  );
};

export default CardForm;
