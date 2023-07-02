import styles from "./topbar.module.css";
import { TbFileDownload } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";

import HeaderInfoSection from "../headerInfo/HeaderInfoSection";
import EditableHeaderInfo from "../editableHeaderInfo/EditableHeaderInfo";
import { useState } from "react";
import Modal from "../modal/Modal";

const TopBar = () => {

  const [showModal, setShowModal] = useState(false);

  const [showEditable, setShowEditable] = useState(false);
  return (
    <div className={styles.container}>
      {
        showModal && (
          <Modal onClose={()=>setShowModal(false)}><h1>Hello This is modal effect</h1></Modal>
        )
      }
      <div className={styles.static_cont}>
        <div className={styles.resumefile_title}>
          Resume No. 1 <LuEdit />
        </div>
        <button className={`ub ${styles.download_btn}`}>
          Download <TbFileDownload />
        </button>
      </div>
      <div className={`${styles.editor_cards} ${styles.custom_scroll}`}>
        {showEditable ? (
          <div>
            <EditableHeaderInfo setShowEditable={setShowEditable} />
          </div>
        ) : (
            <HeaderInfoSection setShowEditable={setShowEditable} />
        )}
        <div className={styles.add_btn}>
          <button onClick={()=>setShowModal(true)} className="ub">
            <AiOutlinePlus className="icons" />
            Add Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
