import Body from "../components/body/Body";
import Header from "../components/header/Header";
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
