/* eslint-disable react/prop-types */
import SocialLinks from "../socialLinks/SocialLinks";
import styles from "./editable-header.module.css";
import placeholderImg from "../../assets/placeholder.png";
import LinkEditable from "../linkEditable/LinkEditable";
import { useState } from "react";
import InputTypeTwo from "../inputTypeTwo/InputTypeTwo";
import InputTypeOne from "../inputTypeOne/InputTypeOne";
import EditorBottomSection from "../editorBottom/EditorBottomSection";

const EditableHeaderInfo = (props) => {
  const [selectedLink, setSelectedLink] = useState([]);
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
  const handleLink = (link) => {
    setSelectedLink([...selectedLink, link]);
  };
  const handleDeleteLink = (link) => {
    const updatedLink = selectedLink.filter(
      (selectedLink) => selectedLink != link
    );
    setSelectedLink(updatedLink);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        className={`${styles.container} ${styles.custom_scroll}`}
        onSubmit={handleSubmit}
      >
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
            <img
              src={placeholderImg}
              className={styles.placeholder_img}
              alt=""
            />
            <input className={styles.img_input} type="file" />
          </div>
        </div>
        <InputTypeTwo
          type1="email"
          type2="phone"
          inputTitle1="Email"
          inputTitle2="Phone"
          inputIs="recommended"
          placeholder1="Enter email"
          placeholder2="Enter phone"
        />
        <InputTypeOne
          title="Address"
          type="text"
          titleIs="recommended"
          placeholder="City, Country"
        />

        <h2 className={styles.links}>Links</h2>
        {selectedLink.length > 0 && (
          <div className={styles.links_container}>
            {selectedLink.map((link, index) => (
              <LinkEditable
                key={index}
                title={link}
                setShowLinkEditable={() => handleDeleteLink(link)}
              />
            ))}
          </div>
        )}
        <div className={styles.links_layout}>
          {links.map((link, index) => (
            <SocialLinks
              link={link}
              key={index}
              onClick={() => handleLink(link)}
            />
          ))}
        </div>
        {/* <div className={styles.form_btn}>
        <button
          onClick={() => props.setShowEditable(false)}
          className={`${styles.cancel_btn}`}
        >
          Cancel
        </button>
        <button className={`${styles.save_btn}`}>
          <FaCheck /> Save
        </button>
      </div> */}
      </form>
      <EditorBottomSection handleEditable={props.setShowEditable} isDeleteRequired={false} />
    </>
  );
};

export default EditableHeaderInfo;
