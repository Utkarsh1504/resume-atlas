/* eslint-disable react/prop-types */
import SocialLinks from "../socialLinks/SocialLinks";
import styles from "./editable-header.module.css";
import { FaCheck } from "react-icons/fa";
import placeholderImg from '../../assets/placeholder.png';

const EditableHeaderInfo = (props) => {
  const links = [
    "Website",
    "Linkedin",
    "Twitter",
    "Github",
    "Medium",
    "Discord",
    "Youtube",
    "Kaggle",
    "Leetcode",
    "gfg",
    "Codeforces",
    "Codechef",
    "Hackerrank",
    "Dev.to",
    "Figma",
    "Google",
    "Hackerearth",
    "Hashnode",
    "StackOverflow",
    "Linktree",
  ];

  return (
    <form className={`${styles.container} ${styles.custom_scroll}`}>
      <div className={styles.form_layout}>
        <div className={styles.input_section}>
          <h2>Edit personal details</h2>
          <div className={styles.label_heading}>Full name</div>
          <input
            className={styles.input_fields}
            type="text"
            placeholder="Enter your first and last name"
          />
          <div className={styles.label_heading}>
            Job title <span className={styles.optional_text}>optional</span>
          </div>
          <input
            className={styles.input_fields}
            type="text"
            placeholder="Enter job title"
          />
        </div>
        <div className={styles.profile_img}>
          <img src={placeholderImg} className={styles.placeholder_img} alt="" />
          <input className={styles.img_input} type="file" />
        </div>
      </div>
      <div className={styles.form_rdetails}>
        <div>
          <div className={styles.label_heading}>
            Email <span>recommended</span>
          </div>
          <input
            className={`${styles.input_fields} ${styles.input_rdetails}`}
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <div className={styles.label_heading}>
            Phone <span>recommended</span>
          </div>
          <input
            className={`${styles.input_fields} ${styles.input_rdetails}`}
            type="phone"
            placeholder="Enter phone"
          />
        </div>
      </div>
      <div className={styles.input_address}>
        <div className={styles.label_heading}>
          Address <span>recommended</span>
        </div>
        <input
          className={`${styles.input_fields} ${styles.input_add}`}
          type="text"
          placeholder="City, Country"
        />
      </div>
      <h2 className={styles.links}>Links</h2>
      <div className={styles.links_layout}>
        {links.map((link, index) => (
          <SocialLinks link={link} key={index} />
        ))}
      </div>
      <div className={styles.form_btn}>
        <button onClick={()=>props.setShowEditable(false)} className={`${styles.cancel_btn}`}>Cancel</button>
        <button className={`${styles.save_btn}`}>
          <FaCheck /> Save
        </button>
      </div>
    </form>
  );
};

export default EditableHeaderInfo;
