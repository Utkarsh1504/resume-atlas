import styles from "./sidebar.module.css";
import logo from "../../assets/wizard.svg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { LuFileEdit } from 'react-icons/lu';
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img onClick={()=>navigate("/")} src={logo} alt="" />
      </div>
      <div className={styles.sidebar_item}>
        <LuFileEdit />
        <p>Editor</p>
      </div>
      <div className={styles.sidebar_item}>
        <MdOutlineDashboardCustomize />
        <p>Customize</p>
      </div>
      <div className={styles.sidebar_item}>
        <FaLink />
        <p>Links</p>
      </div>
    </div>
  );
};

export default SideBar;
