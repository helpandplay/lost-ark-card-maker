import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./home.module.css";
import dotenv from "dotenv";
dotenv.config();
const Home = ({ auth, imageUploader, database, ImageDownload }) => {
  const locationState = useLocation().state;
  const history = useHistory();
  const [cards, setCards] = useState([]);
  const onAddCard = (cardData) => {
    const uuid = Date.now();
    cardData.id = uuid;
    database.create(cardData, locationState.id);
    setCards([...cards, cardData]);
  };
  const onCardDelete = (id) => {
    //state 삭제
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
    //db 삭제
    database.delete(locationState.id, id);
  };
  const onLogout = () => {
    auth.onLogout();
  };
  useEffect(() => {
    if (!locationState) {
      return;
    }
    database.read(locationState.id, (values) => {
      // { {}, {} } => [ {}, {} ]
      const valuesKeys = Object.keys(values);
      setCards(Array.from(valuesKeys, (item) => values[item]));
    });
  }, [locationState, database]);
  useEffect(() => {
    auth.onAuthChange((user) => {
      if (!user) {
        history.push("/login");
      } else {
        history.push({
          pathname: "/",
          state: { id: user.uid },
        });
      }
    });
  }, [auth, history]);
  return (
    <main className={styles.container}>
      <Header onLogout={onLogout} user={locationState && locationState.id} />
      <section className={styles.card_maker}>
        <Editor onAddCard={onAddCard} imageUploader={imageUploader} />
        <Preview
          cards={cards}
          onCardDelete={onCardDelete}
          ImageDownload={ImageDownload}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
