import {JSX} from "react";
import styles from "./EmployeeListPage.module.css";
import Header from "../../components/Header/Header";
import FilterList from "../../components/FilterList/FilterList";
import {Gender, Position, Technology} from "../../consts";
import {FilterCategory} from "../../types/filter-type";
import ChosenFilters from "../../components/ChosenFilters/ChosenFilters";
import EmpoyeesTable from "../../components/EmlpoyeeTable/EmlpoyeeTable";
import SearchBar from "../../components/SearchBar/SearchBar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {useAppSelector} from "../../hooks";

function EmployeesListPage(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={`${styles.page} ${styles[`${theme}Page`]}`}>
      <Header />
      <Breadcrumbs />
      <div className={styles.main}>
        <div className={styles.pageControls}>
          <div className={styles.pageFilters}>
            <h1 className={`${styles.text} ${styles[`${theme}Text`]}`}>
              Список сотрудников
            </h1>
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
          <SearchBar theme={theme} />
        </div>
        <ChosenFilters theme={theme} />
        <EmpoyeesTable />
      </div>
    </div>
  );
}

export default EmployeesListPage;
