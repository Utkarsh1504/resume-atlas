import styles from "./styles/404.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h2>404! Page Not Found</h2>
      <p className={styles.home_back}>
        Back to
        <Link to="/" className={styles.home_link}>
          Home
        </Link>
      </p>
      ;
    </div>
  );
};

export default PageNotFound;
