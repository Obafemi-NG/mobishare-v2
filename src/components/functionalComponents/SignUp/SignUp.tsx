import { FC, useRef } from "react";

// styles
import styles from "./SignUp.module.css";

// imported components
import SolidButton from "../../uiComponents/buttons/SolidButton/SolidButton";
import CustomInput from "../../uiComponents/customInputs/CustomAuthInput/CustomAuthInput";

const SignUp: FC = () => {
  // refs for inputs
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const emailAddressRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  //   funtion to handle form submission
  const handleFormSubmission = () => {};
  return (
    <form className={styles.formContainer} onSubmit={handleFormSubmission}>
      <div className={styles.inputsContainer}>
        <CustomInput
          label="Full Name"
          name="fullName"
          inputRef={nameRef}
          type="text"
          isRequired={true}
        />
        <CustomInput
          label="Email"
          name="email"
          inputRef={emailAddressRef}
          type="email"
          isRequired={true}
        />
        <CustomInput
          label="Phone Number"
          name="phoneNumber"
          inputRef={phoneNumberRef}
          type="text"
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
      <SolidButton buttonText="Create account" big={true} />
      <p className={styles.forgotPassword}>
        By creating an account you agree to our{" "}
        <span className={styles.reset}> Terms of Service </span> and{" "}
        <span className={styles.reset}> Merchant Policy</span>
      </p>
      {/* </div> */}
    </form>
  );
};

export default SignUp;
