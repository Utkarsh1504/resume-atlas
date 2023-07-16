/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styles from "./drop-down.module.css";

const Dropdown = (props) => {
  const dropdownRef = useRef();

  const handleClick = (event) => {
    if (dropdownRef && !dropdownRef.current.contains(event.target)) {
      if (props.onClose) props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  });

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      {props.children}
    </div>
  );
};

export default Dropdown;
