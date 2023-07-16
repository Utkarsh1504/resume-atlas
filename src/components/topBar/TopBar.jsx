/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./topbar.module.css";
import { TbFileDownload } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";

import HeaderInfoSection from "../headerInfo/HeaderInfoSection";
import EditableHeaderInfo from "../editableHeaderInfo/EditableHeaderInfo";
import Modal from "../modal/Modal";
import ResumeContent from "../resumeContent/ResumeContent";
import ColorCustomization from "../colorCustomization/ColorCustomization";
import ContentEditor from "../contentEditor/ContentEditor";
import NameEdit from "../nameEdit/NameEdit";
import CardInfo from "../cardInfo/CardInfo";
import CardInfoEditable from "../cardInfoEditable/CardInfoEditable";

const TopBar = ({ activeComponent, handleTab }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditable, setShowEditable] = useState(false);
  const [nameEdit, setNameEdit] = useState(false);
  const [docTitle, setDocTitle] = useState("Resume no. 1");
  const [showContentEditor, setShowContentEditor] = useState(false);
  const [editableTitle, setEditableTitle] = useState("");
  const [editableIcon, setEditableIcon] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const downloadResume = () => {
    const resumeData = "Resume data or file content goes here.";
    const blob = new Blob([resumeData], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${docTitle}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.container}>
      {showModal && (
        <Modal
          className={styles.resume_content_modal}
          onClose={() => setShowModal(false)}
        >
          <ResumeContent
            getIcon={setEditableIcon}
            getTitle={setEditableTitle}
            setShowModal={setShowModal}
            setShowCard={setShowCard}
          />
        </Modal>
      )}
      <div className={styles.static_cont}>
        {!nameEdit ? (
          <div className={styles.resumefile_title}>
            {docTitle} <LuEdit onClick={() => setNameEdit(true)} />
          </div>
        ) : (
          <NameEdit setDocTitle={setDocTitle} setNameEdit={setNameEdit} />
        )}
        <button
          onClick={downloadResume}
          className={`ub ${styles.download_btn}`}
        >
          Download <TbFileDownload />
        </button>
      </div>
      {activeComponent === "content" && (
        <div className={`${styles.editor_cards} ${styles.custom_scroll}`}>
          {showEditable ? (
            <div>
              <EditableHeaderInfo setShowEditable={setShowEditable} />
            </div>
          ) : (
            <HeaderInfoSection setShowEditable={setShowEditable} />
          )}
          {showCard && <CardInfo title={editableTitle} icon={editableIcon} />}
          <CardInfoEditable />
          {showContentEditor && (
            <ContentEditor handleEditable={setShowContentEditor} />
          )}
          <div className={styles.add_btn}>
            <button onClick={() => setShowModal(true)} className="ub">
              <AiOutlinePlus className="icons" />
              Add Content
            </button>
          </div>
        </div>
      )}
      {activeComponent === "customize" && (
        <ColorCustomization handleTab={handleTab} />
      )}
    </div>
  );
};

export default TopBar;
