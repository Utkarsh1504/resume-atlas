import { useState } from "react";
import styles from "./color-custom.module.css";

const ColorCustomization = () => {
  const [activeColor, setActiveColor] = useState("");
  const colors = [
    "",
    "#495963",
    "#547980",
    "#93b7be",
    "#348aa7",
    "#355c7d",
    "#386fa4",
    "#6798c0",
    "#59a5d8",
    "#84d2f6",
    "#432371",
    "#672d50",
    "#c06c84",
    "#c7417b",
    "#f45b69",
    " ",
  ];
  return (
    <div className={`${styles.custom_scroll} ${styles.container}`}>
      <h2 className={styles.title}>Colors</h2>
      <div className={styles.color_type_container}>
        <div className={styles.edit_col}>
          <div className={`${styles.color_box} ${styles.basic_box}`}></div>
          <div className={styles.text}>Basic</div>
        </div>
        <div className={styles.edit_col}>
          <div className={`${styles.color_box} ${styles.advanced_box}`}></div>
          <div className={styles.text}>Advanced</div>
        </div>
        <div className={styles.edit_col}>
          <div className={`${styles.color_box} ${styles.border_box}`}></div>
          <div className={styles.text}>Border</div>
        </div>
      </div>

      <div className={styles.color_type_container}>
        <div className={styles.edit_col}>
          <div className={`${styles.accent_box}`}></div>
          <div className={styles.text}>Accent</div>
        </div>
        <div className={styles.edit_col}>
          <div className={`${styles.accent_box}`}></div>
          <div className={styles.text}>Multicolor</div>
        </div>
        <div className={styles.edit_col}>
          <div className={`${styles.accent_box}`}></div>
          <div className={styles.text}>Image</div>
        </div>
      </div>

      <div className={styles.color_boxes}>
        {colors.map((color, index) => (
          <li
            className={color === activeColor ? `${styles.active}` : ""}
            style={{ backgroundColor: color }}
            key={index}
            onClick={() => setActiveColor(color)}
          />
        ))}
      </div>
      <div className={styles.color_customize}>Apply accent color</div>
      <div className={styles.color_customize_container}>
        <div className={styles.color_customize_box}>
          <div className={styles.color_custom_elem}>
            <input type="checkbox" />
            <label htmlFor="name">Name</label>
          </div>

          <div className={styles.color_custom_elem}>
            <input type="checkbox" />
            <label htmlFor="heading">Heading</label>
          </div>

          <div className={styles.color_custom_elem}>
            <input type="checkbox" />
            <label htmlFor="header-icons">Header icons</label>
          </div>
        </div>
        <div className={styles.color_customize_box}>
          <div className={styles.color_custom_elem}>
            <input type="checkbox" />
            <label htmlFor="dots">Dots/Bars/Bubbles</label>
          </div>

          <div className={styles.color_custom_elem}>
            <input type="checkbox" />
            <label htmlFor="date">Dates</label>
          </div>

          <div className={styles.color_custom_elem}>
            <input type="checkbox" />
            <label htmlFor="link">Link icons</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCustomization;
