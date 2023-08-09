import { FC } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/mobipay-logo.svg";

const Footer: FC = () => {
  return (
    <div className={styles.footerContainer}>
      {/* <div className={styles.content}> */}
      <div className={styles.footerTop}>
        <div className={styles.mobishare}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.footerTitle}>
            The Mobishare Corporation is a U.S. Delaware Corporation authorized
            to provide financial services to you.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.companyLinks}>
            <ul>
              <li className={styles.linksTitle}> Company</li>
              <li className={styles.link}>
                <Link to="" className={styles.footerLink}>
                  About us
                </Link>
              </li>
              <li className={styles.link}>
                <Link to="" className={styles.footerLink}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.legalLinks}>
            <ul>
              <li className={styles.linksTitle}> Legal </li>
              <li className={styles.link}>
                <Link to="" className={styles.footerLink}>
                  {" "}
                  Privacy Policy
                </Link>
              </li>
              <li className={styles.link}>
                <Link to="" className={styles.footerLink}>
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            {" "}
            Copyright © 2023 Mobishare | All Rights Reserved.
          </p>
        </div>
        <div className={styles.gatewayIcons}>
          {/* <img src={stripe} alt="stripe" /> */}
          {/* <img src={mpesa} alt="mpesa" /> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
