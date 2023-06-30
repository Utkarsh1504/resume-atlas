import styles from "./header.module.css";
import logo from "../../assets/wizard.svg";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} onClick={()=>navigate("/")} />
      <button onClick={()=>navigate("/resume")} className={`${styles.nav_btn} ub`}>
        Try for free <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Header;
