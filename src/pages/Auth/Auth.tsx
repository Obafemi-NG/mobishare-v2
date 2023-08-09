import { useState } from "react";

// imported style
import styles from "./Auth.module.css";

// Imported components
import SignIn from "../../components/functionalComponents/SignIn/SignIn";
import SignUp from "../../components/functionalComponents/SignUp/SignUp";

// imported assets
import authImage from "../../assets/images/auth-image.png";

import logo from "../../assets/icons/mobipay-logo.svg";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const setToLogin = () => {
    setIsLogin(true);
  };
  const setToSignup = () => {
    setIsLogin(false);
  };
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSection}>
        <div className={styles.leftSectionContent}>
          <img
            src={logo}
            alt="mobipay_logo"
            className={styles.logo}
            onClick={handleBackHome}
          />
          <div className={styles.authCardContainer}>
            <div className={styles.authControlContainer}>
              <p
                className={`${styles.authControl} ${
                  isLogin ? "" : styles.active
                } `}
                onClick={setToSignup}
              >
                Create account
              </p>
              <p
                className={`${styles.authControl} ${
                  isLogin ? styles.active : ""
                } `}
                onClick={setToLogin}
              >
                Login
              </p>
            </div>
            {isLogin && <SignIn />}
            {!isLogin && <SignUp />}
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.authImageContainer}>
          <img src={authImage} alt="img" className={styles.authImage} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
