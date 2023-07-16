/* eslint-disable react/prop-types */
import styles from "../inputTypeTwo/style.module.css";
import LinkButton from "../linkButton/LinkButton";

const InputTypeUrl = ({ title, inputIs, type, placeholder}) => {
  return (
    <div className={styles.url_container}>
     <div>
        <div className={styles.label_heading}>
          {title || "Title"} <span>{inputIs || "optional"}</span>
        </div>
        <input
          className={`${styles.input_fields} ${styles.custom_input}`}
          type={type || "text"}
          placeholder={placeholder || "Enter text"}
        />
      </div>
      <div className={styles.link_btn}>
        <LinkButton />
      </div>
    </div>
  );
};

export default InputTypeUrl;
