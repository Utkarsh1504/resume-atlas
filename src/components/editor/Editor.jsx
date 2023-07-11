/* eslint-disable react/prop-types */
import TopBar from "../topBar/TopBar";
import styles from "./editor.module.css";

const Editor = ({activeComponent, handleTab}) => {
  return (
    <div className={styles.editon_section}>
      <TopBar activeComponent={activeComponent} handleTab={handleTab} />
    </div>
  );
};

export default Editor;
