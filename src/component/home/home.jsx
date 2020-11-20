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
  const [cards, setCards] = useState([
    {
      id: 1,
      characterName: "맹무",
      job: "Bard",
      server: "Caramine",
      level: "1403.02",
      teamLevel: "192",
      message: "하트 바드세요.",
      theme: "default",
      guild: "봄이왔어요",
      imageName: null,
      imageUrl: null,
    },
  ]);

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
        <Editor cards={cards} />
        <Preview />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
