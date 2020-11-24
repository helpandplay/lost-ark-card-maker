import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./home.module.css";
const Home = ({ auth }) => {
  const location = useLocation();
  const history = useHistory();
  //Fake data
  const [cardData, setCardData] = useState({});
  const [cards, setCards] = useState([]);
  const getInputData = (data) => {
    const dataKey = Object.keys(data)[0];
    cardData[dataKey] = data[dataKey];
    setCardData(cardData);
    console.log(cardData);
  };
  const onAddCard = (e) => {
    e.preventDefault();
    cardData.id = Date.now();
    // * 나중엔 db에다가도 저장할꺼임.
    setCards([...cards, cardData]);
    setCardData({});
  };
  const onLogout = () => {
    auth.onLogout();
  };
  useEffect(() => {
    //Home으로 접속 시 user정보가 있는 지 판별
    auth.onAuthChange((user) => {
      !user && history.push("/login");
      user &&
        history.push({
          pathname: "/",
          state: { id: user.uid },
        });
    });
  }, [auth, history]);
  return (
    <main className={styles.container}>
      <Header onLogout={onLogout} user={location.state && location.state.id} />
      <section className={styles.card_maker}>
        <Editor getInputData={getInputData} onAddCard={onAddCard} />
        <Preview cards={cards} />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
