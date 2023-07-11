/* eslint-disable react/prop-types */
import styles from "./social-link.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const SocialLinks = ({ link, onClick }) => {
  return (
    <div className={styles.link} onClick={onClick}>
      <div>
        <AiOutlinePlus />
        {link}
      </div>
    </div>
  );
};

export default SocialLinks;
