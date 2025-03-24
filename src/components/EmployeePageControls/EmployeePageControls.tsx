import {JSX} from "react";
import styles from "./EmployeePageControls.module.css";
import {ThemeType} from "../../types/filter-type";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterListBox from "../FilterListBox/FilterListBox";

type EmployeespageControlsProps = {
  theme: ThemeType;
};

function EmployeespageControls({
  theme,
}: EmployeespageControlsProps): JSX.Element {
  return (
    <div className={styles.pageControls}>
      <div className={styles.pageFilters}>
        <h1 className={`${styles.text} ${styles[`${theme}Text`]}`}>
          Список сотрудников
        </h1>
        <FilterListBox />
      </div>
      <SearchBar theme={theme} />
    </div>
  );
}

export default EmployeespageControls;
