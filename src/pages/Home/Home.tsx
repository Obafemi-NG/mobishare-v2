import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import styles from "./Home.module.css";

// imported assets
import heroImage from "../../assets/images/hero-image.png";
import lightning from "../../assets/icons/lightning.svg";
import heroIcon from "../../assets/icons/hero-icon.svg";

// imported component
import Navbar from "../../components/functionalComponents/Navbar/Navbar";
import ExchangeInput from "../../components/uiComponents/customInputs/ExchangeInput/ExchangeInput";
import SolidButton from "../../components/uiComponents/buttons/SolidButton/SolidButton";
import PaymentOptions from "../../components/functionalComponents/paymentOptions/PaymentOptions";
import HowItWorks from "../../components/functionalComponents/HowItWorks/HowItWorks";
import Faq from "../../components/functionalComponents/FAQ/Faq";
import Footer from "../../components/functionalComponents/Footer/Footer";

// imported utils and hooks
import { fetchFuntion } from "../../utils/fetchFunction";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/reduxHooks";
import {
  setAmountReceived,
  setAmountSent,
  setConversionRate,
  setTransactionFee,
  transactionSelector,
} from "../../redux/slices/transactionSlice";

const Home: FC = () => {
  const [amountValue, setAmountValue] = useState<number>(100);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(e.target.value));
  };

  const dispatch = useAppDispatch();
  const selectedTransaction = useAppSelector(transactionSelector);
  useEffect(() => {
    const fetchRate = async () => {
      let url = "https://b2b.mobishare.org/check_fees";
      // if (selectedMethod === "Mobile Money") {
      //   url = "https://super-remit.mobishare.org/check_fees";
      // }
      const userInput = {
        amount: amountValue,
        subject: "check_fees",
        operation: "Mobile Money",
      };
      const fetchedData = await fetchFuntion("POST", url, userInput);
      dispatch(setAmountReceived(fetchedData.balance));
      dispatch(setAmountSent(fetchedData.balance_usd));
      dispatch(setConversionRate(fetchedData.conversion_rate));
      dispatch(setTransactionFee(fetchedData.fees));
    };
    try {
      fetchRate();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, amountValue]);

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        {/* Hero Section content */}
        <div className={styles.pageContent}>
          <div className={styles.top}>
            <div className={styles.left}>
              <p className={styles.title}>
                {" "}
                Send money to friends and family in Kenya, Fast.{" "}
              </p>
              <p className={styles.subTitle}>
                {" "}
                MobiPay helps you make quick and secure transfers to Kenya{" "}
              </p>
              <div className={styles.exchangeContainer}>
                <p className={styles.rate}>
                  1 USD = KSH {selectedTransaction.conversionRate.toFixed(2)}
                </p>
                <form
                  className={styles.conversionDetails}
                  onSubmit={handleFormSubmission}
                >
                  <div className={styles.inputsContainer}>
                    <ExchangeInput
                      inputLabel="You send"
                      inputName="amountSent"
                      handleOnChange={handleChange}
                      inputValue={amountValue}
                      inputType="text"
                      requiredValue={true}
                      readOnly={false}
                    />
                    <ExchangeInput
                      inputLabel="They receive"
                      inputName="amountReceived"
                      inputValue={selectedTransaction.amountReceived.toFixed(2)}
                      inputType="text"
                      requiredValue={true}
                      readOnly={true}
                    />
                  </div>
                  <SolidButton buttonText="Continue" big={true} />
                  <div className={styles.bottomTextContainer}>
                    <img
                      src={lightning}
                      alt="lightning_svg"
                      className={styles.lightningIcon}
                    />
                    <p className={styles.bottomText}>
                      {" "}
                      Usually arrives in minutes{" "}
                    </p>
                  </div>
                </form>
              </div>
              <img src={heroIcon} alt="hero_icon" className={styles.heroIcon} />
            </div>
            <div className={styles.right}>
              <img
                src={heroImage}
                alt="hero_image"
                className={styles.heroImage}
              />
            </div>
          </div>
          <PaymentOptions />
        </div>
        <HowItWorks />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Home;
