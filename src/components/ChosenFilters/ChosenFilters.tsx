import {JSX} from "react";
import styles from "./ChosenFilters.module.css";
import FilterTagList from "../FilterTagList/FilterTagList";
import {useEmployees} from "../../hooks/useEmployees";
import {ThemeType} from "../../types/filter-type";

type ChosenFiltersProps = {
  theme: ThemeType;
};

function ChosenFilters({theme}: ChosenFiltersProps): JSX.Element {
  const {updateEmployeesList} = useEmployees();

  return (
    <div
      className={`${styles.backgroundWrapper} ${
        styles[`${theme}BackgroundWrapper`]
      }`}
    >
      <div className={styles.main}>
        <div className={styles.filtersWrapper}>
          <span className={styles.text}>Выбранные фильтры:</span>
          <FilterTagList />
        </div>
        <button className={styles.button} onClick={updateEmployeesList}>
          Найти
        </button>
      </div>
    </div>
  );
}

export default ChosenFilters;
