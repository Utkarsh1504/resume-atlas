/* eslint-disable react/prop-types */
import styles from "../inputTypeTwo/style.module.css";

const InputTypeOne = ({ title, type, titleIs, placeholder }) => {
  return (
    <div className={styles.type1_cont}>
      <div className={styles.label_heading}>
        {title} <span>{titleIs || "optional"}</span>
      </div>
      <input
        className={`${styles.input_fields} ${styles.input_add}`}
        type={type || "text"}
        placeholder={placeholder || "Enter here..."}
      />
    </div>
  );
};

export default InputTypeOne;
