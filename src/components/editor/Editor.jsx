import HeaderInfoSection from "../headerInfo/HeaderInfoSection";
import TopBar from "../topBar/TopBar";
import styles from "./editor.module.css";

const Editor = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <HeaderInfoSection />
    </div>
  );
};

export default Editor;
