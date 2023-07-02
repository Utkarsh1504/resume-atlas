/* eslint-disable react/prop-types */
import styles from "./social-link.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const SocialLinks = ({ link }) => {
  return (
    <div className={styles.link}>
      <AiOutlinePlus />
      {link}
    </div>
  );
};

export default SocialLinks;
