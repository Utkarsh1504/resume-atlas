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
      <div>
        <Editor />
      </div>
      <div>
        <ResumePreview />
      </div>
    </div>
  );
};

export default Resume;
