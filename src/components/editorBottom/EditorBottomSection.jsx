/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import styles from "./styles.module.css";
import { MdDeleteOutline } from "react-icons/md";

const EditorBottomSection = ({ handleEditable, isDeleteRequired = true }) => {
  const handleCancel = () => {
    handleEditable(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.delete_sec}>
        {isDeleteRequired && (
          <button className={styles.delete_btn}>
            <MdDeleteOutline />
            Delete
          </button>
        )}
      </div>
      <div className={styles.side_btn}>
        <button
          onClick={handleCancel}
          className={styles.cancel_btn}
        >
          Cancel
        </button>
        <button className={styles.save_btn}>
          <FaCheck /> Save
        </button>
      </div>
    </div>
  );
};

export default EditorBottomSection;
