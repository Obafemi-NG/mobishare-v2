import { FC } from "react";
import styles from "./CustomUseRefInput.module.css";

import { InputProps } from "../../../../models/inputModel";

const CustomInput: FC<InputProps> = ({
  inputLabel,
  inputName,
  requiredValue,
  inputType,
  inputRef,
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
          ref={inputRef}
          name={inputName}
          readOnly={readOnly}
        />
      </div>
      <div></div>
    </div>
  );
};

export default CustomInput;
