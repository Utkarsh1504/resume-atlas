import styles from "./header.module.css";
import logo from "../../assets/wizard.svg";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} onClick={()=>navigate("/")} />
      <button onClick={()=>navigate("/resume")} className={`${styles.nav_btn} ub`}>
        Try it <FaAngleRight />
      </button>
    </div>
  );
};

export default Header;
