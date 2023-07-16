/* eslint-disable react/prop-types */
import LinkButton from "../linkButton/LinkButton";
import styles from "./linkeditable.module.css";
import { MdOutlineDelete } from "react-icons/md";

const LinkEditable = ({ title, setShowLinkEditable }) => {
  return (
    <div className={styles.container}>
      <div className={styles.link_title}>
        {title || "Site"} <span>optional</span>
      </div>
      <div className={styles.input_container}>
        <input
          className={styles.input_field}
          type="text"
          placeholder={`Enter ${title || "Site"}`}
        />
        <LinkButton />
        <button
          className={styles.delete_btn}
          onClick={() => setShowLinkEditable(false)}
        >
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default LinkEditable;
