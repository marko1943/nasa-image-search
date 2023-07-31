import { HTMLInputTypeAttribute } from "react";
import styles from "./CustomInput.module.scss";

type Props = {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ ...inputProps }: Props) => {
  return (
    <div className={styles.InputWrapper}>
      <input className={styles.input} {...inputProps} />
    </div>
  );
};

export default CustomInput;
