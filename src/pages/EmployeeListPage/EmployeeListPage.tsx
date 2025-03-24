import {JSX} from "react";
import styles from "./EmployeeListPage.module.css";
import Header from "../../components/Header/Header";
import ChosenFilters from "../../components/ChosenFilters/ChosenFilters";
import EmpoyeesTable from "../../components/EmlpoyeeTable/EmlpoyeeTable";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {useAppSelector} from "../../hooks";
import EmployeespageControls from "../../components/EmployeePageControls/EmployeePageControls";
import { useMediaQuery } from "react-responsive";
import MobileEmployeespageControls from "../../components/MobileEmployeespageControls/MobileEmployeespageControls";

function EmployeesListPage(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={`${styles.page} ${styles[`${theme}Page`]}`}>
      <Header />
      <Breadcrumbs />
      {isMobile ? <MobileEmployeespageControls theme={theme}/>:<EmployeespageControls theme={theme}/>}
        <ChosenFilters theme={theme} />
        <EmpoyeesTable />
    </div>
  );
}

export default EmployeesListPage;
