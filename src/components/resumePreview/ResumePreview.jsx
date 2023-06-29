import styles from "./resumepreview.module.css";

const ResumePreview = () => {
  return <div className={styles.container}>
    <div className={styles.header_section}>
      <h1>Utkarsh Mishra</h1>
    </div>
    <div className={styles.info_section}>
      This is info section.
    </div>
  </div>;
};

export default ResumePreview;
