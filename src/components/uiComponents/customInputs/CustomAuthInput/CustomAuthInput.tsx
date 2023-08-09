import { FC, RefObject, useState } from "react";

// styles
import styles from "./CustomAuthInput.module.css";

// fontawesomeicon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  label: string;
  type: string;
  inputPlaceholder?: string;
  name: string;
  inputRef: RefObject<HTMLInputElement>;
  isRequired: boolean;
  isPassword?: boolean;
};

const CustomInput: FC<Props> = ({
  label,
  type,
  name,
  inputRef,
  isRequired,
  inputPlaceholder,
  isPassword,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handlePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {isPassword ? (
        <div className={styles.passwordInput}>
          <input
            type={isVisible ? "text" : type}
            name={name}
            placeholder={inputPlaceholder}
            ref={inputRef}
            className={styles.password}
            required={isRequired}
          />
          <span onClick={handlePasswordVisibility}>
            {isVisible ? (
              <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#000000" }} />
            ) : (
              <FontAwesomeIcon icon={faEye} style={{ color: "#000000" }} />
            )}
          </span>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          ref={inputRef}
          placeholder={inputPlaceholder}
          className={styles.input}
          required={isRequired}
        />
      )}
    </div>
  );
};

export default CustomInput;
