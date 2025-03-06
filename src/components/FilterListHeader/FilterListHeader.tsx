import { JSX } from "react";
import styles from "./FilterListHeader.module.css";

type FilterListHeaderProps = {
  text: string;
  isOpen: boolean;
  onClick: () => void;
};

function FilterListHeader({ text, isOpen, onClick }: FilterListHeaderProps): JSX.Element {
  return (
    <div onClick={onClick}>
      <span className={isOpen ? styles.text_active : styles.text}>{text}</span>
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

export default FilterListHeader;
