import { JSX } from "react";
import styles from "./ChosenFilters.module.css";
import FilterTagList from "../FilterTagList/FilterTagList";
import { useEmployees } from "../../hooks/useEmployees";

function ChosenFilters(): JSX.Element {
  const { updateEmployeeList } = useEmployees();

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.main}>
        <div className={styles.filtersWrapper}>
          <span className={styles.text}>Выбранные фильтры:</span>
          <FilterTagList />
        </div>
        <button className={styles.button} onClick={updateEmployeeList}>
          Найти
        </button>
      </div>
    </div>
  );
}

export default ChosenFilters;
