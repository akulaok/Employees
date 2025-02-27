import {JSX} from "react";
import styles from "./EmployeesListPage.module.css";
import Header from "../../components/Header/Header";

function EmployeesListPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}

export default EmployeesListPage;
