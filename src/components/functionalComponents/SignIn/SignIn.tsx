import { FC, FormEvent, useRef } from "react";

// styles
import styles from "./SignIn.module.css";

// components
import CustomInput from "../../uiComponents/customInputs/CustomAuthInput/CustomAuthInput";
import SolidButton from "../../uiComponents/buttons/SolidButton/SolidButton";
// import LowRadiusButton from "../../uiComponents/buttons/lowRadiusButton/LowRadiusButton";

const SignIn: FC = () => {
  const emailAddressRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handlePasswordReset = () => {};
  return (
    <form className={styles.formContainer} onSubmit={handleFormSubmission}>
      <div className={styles.inputsContainer}>
        <CustomInput
          label="Email"
          name="email"
          inputRef={emailAddressRef}
          type="email"
          isRequired={true}
        />
        <CustomInput
          label="Password"
          name="password"
          inputRef={passwordRef}
          type="password"
          isRequired={true}
          isPassword={true}
        />
      </div>
      {/* <div className={styles.bottomSection}> */}
      <SolidButton buttonText="Log in" big={true} />
      <p className={styles.forgotPassword}>
        Forgot Password?{" "}
        <span className={styles.reset} onClick={handlePasswordReset}>
          {" "}
          reset password{" "}
        </span>{" "}
      </p>
      {/* </div> */}
    </form>
  );
};

export default SignIn;
