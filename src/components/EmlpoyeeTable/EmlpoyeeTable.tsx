import {JSX} from "react";
import EmpoyeesTableRow from "../EmployeeTableRow/EmpoyeeTableRow";
import styles from "./EmlpoyeeTable.module.css";
import {useEmployees} from "../../hooks/useEmployees";

function EmpoyeesTable(): JSX.Element {
  const {employees} = useEmployees();

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
        {employees.length ? (
          <tbody>
            {employees.map((employe) => (
              <EmpoyeesTableRow key={employe.id} employe={employe} />
            ))}
          </tbody>
        ) : (
          <tfoot>Работники не найдены</tfoot>
        )}
      </table>
    </div>
  );
}

export default EmpoyeesTable;
