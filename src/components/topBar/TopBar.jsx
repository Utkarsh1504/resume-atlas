/* eslint-disable react/prop-types */
import styles from "./topbar.module.css";
import { TbFileDownload } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";

import HeaderInfoSection from "../headerInfo/HeaderInfoSection";
import EditableHeaderInfo from "../editableHeaderInfo/EditableHeaderInfo";
import { useState } from "react";
import Modal from "../modal/Modal";
import ResumeContent from "../resumeContent/ResumeContent";
import ColorCustomization from "../colorCustomization/ColorCustomization";

const TopBar = ({activeComponent, handleTab}) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditable, setShowEditable] = useState(false);
  
  
  return (
    <div className={styles.container}>
      {showModal && (
        <Modal
          className={styles.resume_content_modal}
          onClose={() => setShowModal(false)}
        >
          <ResumeContent setShowModal={setShowModal} />
        </Modal>
      )}
      <div className={styles.static_cont}>
        <div className={styles.resumefile_title}>
          Resume No. 1 <LuEdit />
        </div>
        <button className={`ub ${styles.download_btn}`}>
          Download <TbFileDownload />
        </button>
      </div>
      {activeComponent === 'content' && <div className={`${styles.editor_cards} ${styles.custom_scroll}`}>
        {showEditable ? (
          <div>
            <EditableHeaderInfo setShowEditable={setShowEditable} />
          </div>
        ) : (
          <HeaderInfoSection setShowEditable={setShowEditable} />
        )}
        <div className={styles.add_btn}>
          <button onClick={() => setShowModal(true)} className="ub">
            <AiOutlinePlus className="icons" />
            Add Content
          </button>
        </div>
      </div>}
      {activeComponent ==='customize' && <ColorCustomization handleTab={handleTab} />}
    </div>
  );
};

export default TopBar;
