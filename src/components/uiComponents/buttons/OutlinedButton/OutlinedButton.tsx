import { FC, MouseEventHandler } from "react";
import styles from "./OutlineButton.module.css";

type Props = {
  buttonText: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
  big?: boolean;
};

const OutlinedButton: FC<Props> = ({
  buttonText,
  onClickFunction,
  big,
}: Props) => {
  return (
    <button
      className={`${styles.btn} ${big && styles.bigBtn} `}
      onClick={onClickFunction}
    >
      {buttonText}
    </button>
  );
};

export default OutlinedButton;
