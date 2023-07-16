import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./desc.module.css";

const EditorComponent = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const toolbar = [
    ["bold", "italic"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: [] },
    ],
    ["link"],
  ];
  var formats = ["bold", "italic", "list", "bullet", "indent","align", "link"];

  return (
    <div className={styles.editor_container}>
      <div className={styles.title}>Description <span>optional</span></div>
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={{ toolbar }}
        formats={formats}
        placeholder="Add a description text here..."
        className={styles.editor}
      />
    </div>
  );
};

export default EditorComponent;
