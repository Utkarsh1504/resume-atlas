/* eslint-disable react/prop-types */
import styles from "./headerinfo.module.css";
import { LuEdit } from "react-icons/lu";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import dp from "../../assets/user.png";

const HeaderInfoSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name_container}>
        <div className={styles.name_dummy}>{props.name || "Your Name"}</div>
        <div className={styles.edit_option}>
          <LuEdit className={styles.icons} />
        </div>
      </div>
      <div className={styles.job_title}>{props.jobtitle || "Job title"}</div>
      <div className={styles.info_container}>
        <div className={styles.reachout_info}>
          <div className={styles.reachout_info_elements}>
            <CiMail />
            <div>Email</div>
          </div>
          <div className={styles.reachout_info_elements}>
            <FiPhoneCall />
            <div>Phone</div>
          </div>
          <div className={styles.reachout_info_elements}>
            <CiLocationOn />
            <div>Address</div>
          </div>
        </div>
        <div className={styles.img_filler}>
          <img src={props.imageFiller || dp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfoSection;
