import {JSX} from "react";
import styles from "./MobileEmployeespageControls.module.css";
import {ThemeType} from "../../types/filter-type";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterListBox from "../FilterListBox/FilterListBox";

type MobileEmployeespageControlsProps = {
  theme: ThemeType;
};

function MobileEmployeespageControls({
  theme,
}: MobileEmployeespageControlsProps): JSX.Element {
  return (
      <div className={styles.pageControlsMobile}>
        <h1 className={`${styles.text} ${styles[`${theme}Text`]}`}>
          Список сотрудников
        </h1>
        <SearchBar theme={theme} />
        <FilterListBox />
      </div>
  );
}

export default MobileEmployeespageControls;
