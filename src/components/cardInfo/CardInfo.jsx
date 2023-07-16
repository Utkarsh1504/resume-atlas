/* eslint-disable react/prop-types */
import styles from "./card-info.module.css";
import { FaChevronDown } from "react-icons/fa";

const CardInfo = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card_info}>
        <div className={styles.icon}>{props.icon}</div>
        <div className={styles.title}>{props.title}</div>
      </div>
      <div className={styles.down_arrow}>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default CardInfo;
