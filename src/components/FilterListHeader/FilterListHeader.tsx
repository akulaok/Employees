import { JSX, useMemo } from "react";
import styles from "./FilterListHeader.module.css";

type FilterListHeaderProps = {
  text: string;
  isOpen: boolean;
  onClick: () => void;
};

function FilterListHeader({ text, isOpen, onClick }: FilterListHeaderProps): JSX.Element {
  const arrowIcon = useMemo(
    () => 
      isOpen 
        ? "/src/general-style/img/arrows/arrow_up.svg" 
        : "/src/general-style/img/arrows/arrow_down.svg",
    [isOpen]
  );

  const textClassName = useMemo(
    () => (isOpen ? styles.text_active : styles.text),
    [isOpen]
  );

  return (
    <div onClick={onClick}>
      <span className={textClassName}>{text}</span>
      <img
        src={arrowIcon}
        alt="arrow"
      />
    </div>
  );
}

export default FilterListHeader;
