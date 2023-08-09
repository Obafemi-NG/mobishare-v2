import { FC, MouseEvent } from "react";
import styles from "./Navbar.module.css";

import logo from "../../../assets/icons/mobipay-logo.svg";
import OutlinedButton from "../../uiComponents/buttons/OutlinedButton/OutlinedButton";
import SolidButton from "../../uiComponents/buttons/SolidButton/SolidButton";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const handleRegistration = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/auth");
  };
  const handleSignin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/auth");
  };
  return (
    <div className={styles.componentContainer}>
      <div className={styles.left}>
        <img src={logo} alt="mobipay_logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <OutlinedButton
          buttonText="Register"
          onClickFunction={handleRegistration}
        />
        <SolidButton buttonText="Login" onClickFunction={handleSignin} />
      </div>
    </div>
  );
};

export default Navbar;
