import { JSX } from "react";
import styles from "./FilterHeader.module.css";

type FilterHeaderProps = {
  text: string;
  isOpen: boolean;
  onClick: () => void;
};

function FilterHeader({ text, isOpen, onClick }: FilterHeaderProps): JSX.Element {
  return (
    <div onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <img
        src={
          isOpen
            ? "/src/general-style/img/arrows/arrow_up.svg"
            : "/src/general-style/img/arrows/arrow_down.svg"
        }
        alt="arrow"
      />
    </div>
  );
}

export default FilterHeader;
