import SideBar from "../components/sidebar/SideBar";
import styles from "./styles/resume.module.css";
import Editor from "../components/editor/Editor";
import ResumePreview from "../components/resumePreview/ResumePreview";

const Resume = () => {
  return (
    <div className={styles.container}>
      <div>
        <SideBar />
      </div>
      <div className={styles.editor_section}>
        <Editor />
      </div>
      <div>
        <ResumePreview />
      </div>
    </div>
  );
};

export default Resume;
