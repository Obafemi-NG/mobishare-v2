import { FC, useState } from "react";
import styles from "./DashboardCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const DashboardCard: FC = () => {
  const [displayBalance, setDisplayBalance] = useState<boolean>(true);
  const toggleBalanceDisplay = () => {
    setDisplayBalance(!displayBalance);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.top}>
        <p className={styles.balanceText}> Available balance </p>
        <div className={styles.displayControl} onClick={toggleBalanceDisplay}>
          {displayBalance ? (
            <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#ffffff" }} />
          ) : (
            <FontAwesomeIcon icon={faEye} style={{ color: "#ffffff" }} />
          )}
        </div>
      </div>
      <div className={styles.middle}>
        <p className={styles.balance}>{displayBalance ? `$ 0.00` : `****`} </p>
      </div>
      <div className={styles.bottom}>
        <button className={styles.fundBtn}>Fund Wallet</button>
      </div>
    </div>
  );
};

export default DashboardCard;
