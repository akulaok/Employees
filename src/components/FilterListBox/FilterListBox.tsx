import {JSX} from "react";
import styles from "./FilterListBox.module.css";
import FilterList from "../../components/FilterList/FilterList";
import {Gender, Position, Technology} from "../../consts";
import {FilterCategory} from "../../types/filter-type";

function FilterListBox(): JSX.Element {
  return (
    <div className={styles.filtersBox}>
      <div className={styles.leftFilter}>
        <FilterList
          filterType={FilterCategory.Position}
          filterOptions={Position}
        />
      </div>
      <div className={styles.centerFilter}>
        <FilterList filterType={FilterCategory.Gender} filterOptions={Gender} />
      </div>
      <div className={styles.rightFilter}>
        <FilterList
          filterType={FilterCategory.Technology}
          filterOptions={Technology}
        />
      </div>
    </div>
  );
}

export default FilterListBox;
