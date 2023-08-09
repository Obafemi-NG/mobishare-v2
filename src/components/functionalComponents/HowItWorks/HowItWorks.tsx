import { FC } from "react";
import styles from "./HowItWorks.module.css";

import time from "../../../assets/icons/time.svg";

const HowItWorks: FC = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <p className={styles.title}>How it works</p>
          <p className={styles.subTitle}>
            No hidden fees. No bad exchange rates. No surprises
          </p>
          <div className={styles.dottedContainer}>
            <div className={styles.top}>
              {" "}
              <img src={time} alt="time_icon" />{" "}
              <p className={styles.time}> 5 Minutes </p>{" "}
            </div>
            <p className={styles.subText}>
              Approximate time from start to complete your transfer
            </p>
          </div>
        </div>
        <div className={styles.rightSection}></div>
      </div>
    </div>
  );
};

export default HowItWorks;
