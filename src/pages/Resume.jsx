import SideBar from "../components/sidebar/SideBar";
import styles from "./styles/resume.module.css";
import Editor from "../components/editor/Editor";
import ResumePreview from "../components/resumePreview/ResumePreview";
import { useState } from "react";
import Modal from "../components/modal/Modal";

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeComponent, setActiveComponent] = useState("content");

  const handleTab = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className={styles.container}>
      {showModal && (
        <Modal
          className={styles.resume_modal}
          onClose={() => setShowModal(false)}
        >
          <ResumePreview />
        </Modal>
      )}
      <div className={styles.side_container}>
        <SideBar handleTab={handleTab} />
      </div>
      <div className={styles.editor_section}>
        <Editor activeComponent={activeComponent} handleTab={handleTab} />
      </div>
      <div className={styles.resume_section}>
        <ResumePreview setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Resume;
