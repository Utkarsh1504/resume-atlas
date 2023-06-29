import styles from "./headerinfo.module.css";

const HeaderInfoSection = () => {
  return <div className={styles.container}>
    <div className={styles.user_name}>Full Name</div>
    <input type="text" placeholder="Enter your first and last name" />
    <div className={styles.btns}>
      <button className={styles.skip_btn}>
        Skip
      </button>
      <button>
        Save
      </button>
    </div>
  </div>;
};

export default HeaderInfoSection;
