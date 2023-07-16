/* eslint-disable react/prop-types */
import styles from "./sidebar.module.css";
import logo from "../../assets/wizard.svg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = ({ handleTab }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img onClick={() => navigate("/")} src={logo} alt="" />
      </div>
      <div
        className={
          activeItem === "editor"
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
        onClick={() => {
          handleTab("content");
          handleItemClick("editor");
        }}
      >
        <LuFileEdit />
        <p>Editor</p>
      </div>
      <div
        className={
          activeItem === "custom"
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
        onClick={() => {
          handleTab("customize");
          handleItemClick("custom");
        }}
      >
        <MdOutlineDashboardCustomize />
        <p>Customize</p>
      </div>
      <div
        onClick={() => handleItemClick("link")}
        className={
          activeItem === "link"
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
      >
        <FaLink />
        <p>Links</p>
      </div>
    </div>
  );
};

export default SideBar;
