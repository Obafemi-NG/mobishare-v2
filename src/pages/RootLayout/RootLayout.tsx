import { FC } from "react";

// imported styles
import styles from "./RootLayout.module.css";

// outlet from react-router-dom
import { Outlet } from "react-router-dom";

// imported components
import SideNav from "../../components/functionalComponents/SideNav/SideNav";
import TopNav from "../../components/functionalComponents/TopNav/TopNav";

const RootLayout: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <SideNav />
      <TopNav />
      <main className={styles.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
