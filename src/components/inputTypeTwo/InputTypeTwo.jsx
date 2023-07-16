/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const InputTypeTwo = ({
  inputTitle1,
  inputTitle2,
  inputIs,
  placeholder1,
  placeholder2,
  type1,
  type2,
}) => {
  return (
    <div className={styles.form_rdetails}>
      <div>
        <div className={styles.label_heading}>
          {inputTitle1 || "City"} <span>{inputIs || "optional"}</span>
        </div>
        <input
          className={`${styles.input_fields} ${styles.input_rdetails}`}
          type={type1 || "text"}
          placeholder={placeholder1 || "text"}
        />
      </div>
      <div>
        <div className={styles.label_heading}>
          {inputTitle2 || "Country"} <span>{inputIs || "optional"}</span>
        </div>
        <input
          className={`${styles.input_fields} ${styles.input_rdetails}`}
          type={type2 || "text"}
          placeholder={placeholder2 || "text"}
        />
      </div>
    </div>
  );
};

export default InputTypeTwo;
