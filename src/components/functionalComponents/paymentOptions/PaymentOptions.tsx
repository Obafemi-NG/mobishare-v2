import styles from "./PaymentOptions.module.css";
import visa from "../../../assets/icons/visa.svg";
import discover from "../../../assets/icons/discover.svg";
import skrill from "../../../assets/icons/skrill.svg";
import amex from "../../../assets/icons/amex.svg";
import maestro from "../../../assets/icons/maestro.svg";
// import wu from "../../../assets/icons/wu.svg";
import jcb from "../../../assets/icons/jcb.svg";
import gpay from "../../../assets/icons/gpay.svg";
import applePay from "../../../assets/icons/apple-pay.svg";
import cashapp from "../../../assets/icons/cashapp.svg";
import affirm from "../../../assets/icons/affirm.svg";
import klarna from "../../../assets/icons/klarna.svg";
import clearpay from "../../../assets/icons/clearpay.svg";
import { FC } from "react";

const PaymentOptions: FC = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <p className={styles.text}> Send Money to Kenya using </p>
        <div className={styles.iconsContainer}>
          <img src={visa} alt="visa-icon" className={styles.visaIcon} />
          <img
            src={discover}
            alt="discover-icon"
            className={styles.discoverIcon}
          />
          <img src={skrill} alt="skrill-icon" className={styles.skrillIcon} />
          <img src={amex} alt="amex-icon" className={styles.amexIcon} />
          <img
            src={maestro}
            alt="maestro-icon"
            className={styles.maestroIcon}
          />
          {/* <img src={wu} alt="wu-icon" className={styles.wuIcon} /> */}
          <img src={jcb} alt="jcb-icon" className={styles.jcbIcon} />
          <img src={gpay} alt="gpay-icon" className={styles.gpayIcon} />
          <img
            src={applePay}
            alt="applepay-icon"
            className={styles.applePayIcon}
          />
          <img
            src={cashapp}
            alt="cashapp-icon"
            className={styles.cashAppIcon}
          />
          <img src={affirm} alt="affirm-icon" className={styles.affirmIcon} />
          <img src={klarna} alt="klarna-icon" className={styles.klarnaIcon} />
          <img
            src={clearpay}
            alt="clearpay-icon"
            className={styles.clearPayIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
