import styles from "./topbar.module.css";
import { TbFileDownload } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";
import HeaderInfoSection from "../headerInfo/HeaderInfoSection";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.static_cont}>
        <div className={styles.resumefile_title}>
          Resume No. 1 <LuEdit />
        </div>
        <button className={`ub ${styles.download_btn}`}>
          Download <TbFileDownload />
        </button>
      </div>
      <div className={`${styles.editor_cards} ${styles.custom_scroll}`}>
        <HeaderInfoSection />
        <div className={styles.add_btn}>
          <button className="ub">
            <AiOutlinePlus className="icons" />
            Add Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
