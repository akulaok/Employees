import {JSX, memo, useEffect, useRef} from "react";
import EmpoyeesTableRow from "../EmployeeTableRow/EmpoyeeTableRow";
import styles from "./EmlpoyeeTable.module.css";
import {useEmployees} from "../../hooks/useEmployees";

function EmployeesTable(): JSX.Element {
  const {employees, loadMore, hasMoreData} = useEmployees();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {threshold: 1.0}
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

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
          <></>
        )}
      </table>
      {
        <div className={styles.hasMoreData} ref={observerRef}>
          <p>{hasMoreData ? "Загрузка..." : "Больше нет"}</p>
        </div>
      }
    </div>
  );
}

export default memo(EmployeesTable);
