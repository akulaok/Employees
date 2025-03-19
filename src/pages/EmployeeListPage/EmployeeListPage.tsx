import {JSX} from "react";
import styles from "./EmployeeListPage.module.css";
import Header from "../../components/Header/Header";
import FilterList from "../../components/FilterList/FilterList";
import {Gender, Position, Technology} from "../../consts";
import {FilterCategory} from "../../types/filter-type";
import ChosenFilters from "../../components/ChosenFilters/ChosenFilters";
import EmpoyeesTable from "../../components/EmlpoyeeTable/EmlpoyeeTable";

function EmployeeListPage(): JSX.Element {
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
        <ChosenFilters />
        <EmpoyeesTable/>
      </div>
    </div>
  );
}

export default EmployeeListPage;
