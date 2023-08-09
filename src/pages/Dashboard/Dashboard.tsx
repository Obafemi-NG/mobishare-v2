import { FC } from "react";
import styles from "./Dashboard.module.css";
import DashboardCard from "../../components/uiComponents/cards/DashboardCard/DashboardCard";
import QuickActionCard from "../../components/uiComponents/cards/QuickActionCard/QuickActionCard";

// imported assets

const Dashboard: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <p className={styles.welcomeText}> Welcome Back, Tim </p>
      <div className={styles.cardsContainer}>
        <DashboardCard />
        <div className={styles.righCards}>
          <p className={styles.quickActionTitle}> Quick Actions </p>
          <QuickActionCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
