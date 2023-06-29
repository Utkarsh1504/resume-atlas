/* eslint-disable react/no-unescaped-entities */
import styles from "./body.module.css";
import resumeSvg from "../../assets/resume.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Welcome to <span>Resume Atlas.</span>
        </p>
        <p className={styles.subheading}>
          Unlock a world of opportunities with a professionally crafted resume.
          It's Free.
        </p>
        <button onClick={()=>navigate("/resume")} className={styles.body_btn}>
          <AiOutlinePlus />
          Create Your Resume
        </button>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="" />
      </div>
    </div>
  );
};

export default Body;
