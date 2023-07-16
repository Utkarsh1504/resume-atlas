/* eslint-disable react/prop-types */
import Description from "../description/Description";
import InputTypeUrl from "../inputTypeUrl/InputTypeUrl";
import InputTypeOne from "../inputTypeOne/InputTypeOne";
import InputTypeTwo from "../inputTypeTwo/InputTypeTwo";
import styles from "./content-editor.module.css";
import Timeline from "../timeline/Timeline";
import EditorBottomSection from "../editorBottom/EditorBottomSection";

const ContentEditor = (props) => {
  
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Create Custom</h2>
        <InputTypeUrl placeholder="Enter title" />
        <InputTypeOne
          title="Subtitle"
          inputIs="optional"
          type="text"
          placeholder="Enter subtitle"
        />
        <InputTypeTwo
          inputTitle1="City"
          inputTitle2="Country"
          placeholder1="Enter City"
          placeholder2="Enter Country"
        />
        <Timeline />
        <Description />
      </div>
      <EditorBottomSection handleEditable={props.handleEditable} />
    </>
  );
};

export default ContentEditor;
