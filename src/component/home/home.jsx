import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
const Home = ({ auth }) => {
  const location = useLocation();
  const history = useHistory();
  const onLogout = () => {
    auth.onLogout();
  };
  useEffect(() => {
    auth.onAuthChange((user) => {
      !user && history.push("/login");
    });
  }, []);
  console.log(location);
  return (
    <section>
      <Header onLogout={onLogout} user={location.state && location.state.id} />
      <h1>Home</h1>
      <Footer />
    </section>
  );
};

export default Home;
