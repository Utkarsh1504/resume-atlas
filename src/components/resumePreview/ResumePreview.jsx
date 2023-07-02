/* eslint-disable react/prop-types */
import styles from "./resumepreview.module.css";

const ResumePreview = (props) => {

  return (
    <div className={styles.container} onClick={props.setShowModal}>
      <div className={styles.header_section}>
        <h1>Utkarsh Mishra</h1>
      </div>
      <div className={styles.info_section}>This is info section.</div>
    </div>
  );
};

export default ResumePreview;
