/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./name-edit.module.css";
import { FiCheck } from "react-icons/fi";

const NameEdit = (props) => {
  const [inputVal, setInputVal] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.setDocTitle(inputVal);
    props.setNameEdit(false);
    setInputVal("");
  };

  return (
    <form className={styles.name_edit} onSubmit={handleFormSubmit}>
      <input
        className={styles.doc_edit}
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter document title"
      />
      <button type="submit" className={styles.save_btn}>
        <FiCheck />
      </button>
    </form>
  );
};

export default NameEdit;
