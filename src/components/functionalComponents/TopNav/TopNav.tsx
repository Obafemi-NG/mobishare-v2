import { FC } from "react";

// imported styles
import styles from "./TopNav.module.css";

// imported fontawesomeicons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const TopNav: FC = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.searchInputContainer}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#565658" }}
        />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="search mobipay"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.notificationContainer}>
          {/* <img src="" alt="" /> */}
          <FontAwesomeIcon icon={faBell} style={{ color: "#0e5ffe" }} />
        </div>
        <div className={styles.accountDetailContainer}>
          {/* <img src="" alt="" /> */}
          <div className={styles.accountImageContainer}>
            <p className={styles.initials}>TS </p>
          </div>
          <div>
            <p className={styles.name}> Tim Simon </p>
            <p className={styles.title}> Super admin </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
