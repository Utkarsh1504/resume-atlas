import styles from "./topbar.module.css";
import { TbFileDownload } from "react-icons/tb";
import { LuEdit } from "react-icons/lu";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.resumefile_title}>
        Resume No. 1 <LuEdit />
      </div>
      <button className={styles.download_btn}>
        Download <TbFileDownload />
      </button>
    </div>
  );
};

export default TopBar;
