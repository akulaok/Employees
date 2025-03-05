import {JSX} from "react";
import styles from "./EmployeesListPage.module.css";
import Header from "../../components/Header/Header";
import FilterList from "../../components/FilterList/FilterList";
import {Gender, Position, Technology} from "../../consts";
import {FilterCategory} from "../../types/filter-type";

function EmployeesListPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <div className={styles.pageControls}>
          <h1>Список сотрудников</h1>
          <div className={styles.filtersBox}>
            <FilterList
              filterType={FilterCategory.Position}
              filterOptions={Position}
            />
            <FilterList
              filterType={FilterCategory.Gender}
              filterOptions={Gender}
            />
            <FilterList
              filterType={FilterCategory.Technology}
              filterOptions={Technology}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeesListPage;
