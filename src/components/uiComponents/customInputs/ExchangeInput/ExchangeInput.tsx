import { FC } from "react";
import styles from "./ExchangeInput.module.css";

import { ExchangeInputProps } from "../../../../models/inputModel";

const ExchangeInput: FC<ExchangeInputProps> = ({
  inputLabel,
  inputName,
  requiredValue,
  inputType,
  inputValue,
  handleOnChange,
  readOnly,
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputPair}>
        <label className={`${styles.label}  `} htmlFor={inputName}>
          {inputLabel}{" "}
          {/* {requiredValue && <span className={styles.asterisk}>*</span>} */}
        </label>
        <input
          className={`${styles.input} ${readOnly && styles.readOnly}`}
          type={inputType}
          required={requiredValue}
          //   ref={inputRef}
          value={inputValue}
          onChange={handleOnChange}
          name={inputName}
          readOnly={readOnly}
        />
      </div>
      <div className={styles.country}>
        <div className={styles.flagContainer}>
          <img
            src={`${
              inputName === "amountSent"
                ? "https://flagcdn.com/us.svg"
                : "https://flagcdn.com/ke.svg"
            }`}
            alt="kenya"
            className={styles.flag}
          />
        </div>
        <p className={styles.countryCode}>
          {" "}
          {inputName === "amountSent" ? "USD" : "KES"}{" "}
        </p>
      </div>
    </div>
  );
};

export default ExchangeInput;
