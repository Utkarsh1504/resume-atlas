/* eslint-disable react/prop-types */
import { FaChevronUp } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import styles from "./styles.module.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

const CardInfoEditable = (props) => {
  const [visible, setVisible] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.card_info}>
          <div className={styles.icon}>{props.icon || "@"}</div>
          <div className={styles.title}>{props.title || "title"}</div>
        </div>
        <div className={styles.up_arrow}>
          <FaChevronUp />
        </div>
      </div>
      
      <div className={styles.line}></div>
      <div className={styles.middle}>
        <div>
          <div>
            {props.title || "title"},{" "}
            <span>{props.subtitle || "subtitle"}</span>
          </div>
          <div>
            {props.st_date || "07/2023"} - {props.end_date || "08/2023"} | <span>{props.city || 'city'}, {props.country || "country"}</span>
          </div>
        </div>
        <div>
          {visible ? (
            <MdVisibility onClick={() => setVisible(false)} />
          ) : (
            <MdVisibilityOff onClick={() => setVisible(true)} />
          )}
        </div>
      </div>

      <div className={styles.line}></div>
      <div className={styles.lower}>
        <button>
          <HiOutlinePlus /> {props.title || "title"}
        </button>
      </div>
    </div>
  );
};

export default CardInfoEditable;
