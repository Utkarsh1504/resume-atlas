import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import styles from "./styles.module.css";
import { FiLink } from "react-icons/fi";

const LinkButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.dropdown_cont}>
      <button className={styles.link_btn} onClick={() => setShowDropdown(true)}>
        <FiLink />
        Link
      </button>
      {showDropdown && (
        <Dropdown onClose={() => setShowDropdown(false)}>
          <div className={styles.url_title}>Link URL</div>
          <input
            className={styles.link_input}
            type="url"
            placeholder="Enter Link"
          />
          <div className={styles.btns}>
            <button onClick={() => setShowDropdown(false)}>Cancel</button>
            <button className={styles.save}>Add</button>
          </div>
        </Dropdown>
      )}
    </div>
  );
};

export default LinkButton;
