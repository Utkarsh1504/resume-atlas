/* eslint-disable react/prop-types */
import styles from "./modal.module.css";

function Modal(props) {
  const handleModalClick = () => {
    if (props.onClose) props.onClose();
  };
  return (
    <div className={styles.container} onClick={handleModalClick}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modal_container} ${props.className || ""} ${styles.custom_scroll}`}
      >
        {props.children};
      </div>
    </div>
  );
}

export default Modal;
