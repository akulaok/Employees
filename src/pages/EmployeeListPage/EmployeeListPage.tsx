import {JSX, useMemo} from "react";
import styles from "./EmployeeListPage.module.css";
import Header from "../../components/Header/Header";
import ChosenFilters from "../../components/ChosenFilters/ChosenFilters";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {useAppSelector} from "../../hooks";
import EmployeespageControls from "../../components/EmployeePageControls/EmployeePageControls";
import {useMediaQuery} from "react-responsive";
import MobileEmployeespageControls from "../../components/MobileEmployeespageControls/MobileEmployeespageControls";
import EmployeesTable from "../../components/EmployeesTable/EmlpoyeeTable";

function EmployeesListPage(): JSX.Element {
  const theme = useAppSelector((state) => state.theme);
  const isMobile = useMediaQuery({query: "(max-width: 768px)"});
  const PageControls = useMemo(
    () =>
      isMobile ? (
        <MobileEmployeespageControls theme={theme} />
      ) : (
        <EmployeespageControls theme={theme} />
      ),
    [isMobile, theme]
  );
  return (
    <div className={`${styles.page} ${styles[`${theme}Page`]}`}>
      <Header />
      <Breadcrumbs />
      {PageControls}
      <ChosenFilters theme={theme} />
      <EmployeesTable />
    </div>
  );
}

export default EmployeesListPage;
