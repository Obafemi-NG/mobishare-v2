import { FC } from "react";

// imported styles
import styles from "./SideNav.module.css";

// imported assets
import logo from "../../../assets/icons/mobipay-logo.svg";
import logoutSvg from "../../../assets/icons/logout_svg.svg";

// imported external package
import { NavLink } from "react-router-dom";

// imported localData for dashboard links
import { dashboardLinks } from "../../../localData/dashboardLinks";

const SideNav: FC = () => {
  return (
    <div className={styles.componentContainer}>
      <img src={logo} alt="mobipay_logo" className={styles.logo} />
      <ul className={styles.links}>
        {dashboardLinks.map((data) => (
          <li key={data.id} className={styles.linkContainer}>
            {" "}
            <NavLink
              to={data.url}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.link}`
              }
              end
            >
              {" "}
              <img
                src={data.imgUrl}
                alt={data.text}
                className={styles.linkIcon}
              />{" "}
              <p className={styles.linkText}> {data.text} </p>{" "}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
      <div className={styles.logoutContainer}>
        <div className={` ${styles.logout} `}>
          {" "}
          <img
            src={logoutSvg}
            alt="log_out_svg"
            className={styles.linkIcon}
          />{" "}
          <p className={styles.linkText}> Log out </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
