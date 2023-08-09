import { FC } from "react";
import styles from "./QuickActionCard.module.css";
import { quickActionData } from "../../../../localData/quickActionData";

const QuickActionCard: FC = () => {
  return (
    <div className={styles.quickCardsContainer}>
      {quickActionData.map((data) => (
        <div className={styles.cardContainer}>
          <div className={styles.iconContainer} key={data.id}>
            <img src={data.icon} alt={data.action} />
          </div>
          <p className={styles.actionText}> {data.action} </p>
        </div>
      ))}
    </div>
  );
};

export default QuickActionCard;
