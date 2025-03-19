import {JSX} from "react";
import EmpoyeesTableRow from "../EmployeeTableRow/EmpoyeeTableRow";
import styles from "./EmlpoyeeTable.module.css";
import { useEmployees } from "../../hooks/useEmployees";

function EmpoyeesTable(): JSX.Element {
  const { employee } = useEmployees();

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Телефон</th>
            <th>Дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {employee.length ? employee.map((employe) => (
            <EmpoyeesTableRow key={employe.id} employe={employe} />
          )) : 
            <div>упс, тут никого нет </div>
          }
        </tbody>
      </table>
    </div>
  );
}

export default EmpoyeesTable;
