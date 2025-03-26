import {JSX, memo, useCallback, useMemo} from "react";
import {EmployeType} from "../../types/empoyee-type";
import {useNavigate} from "react-router-dom";
import {AppRoute} from "../../consts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setEmploye} from "../../store/action";
import {formatDate} from "../../utils/formatDate";
import styles from "./EmployeesTableRow.module.css";

type EmployeesTableRowProps = {
  employe: EmployeType;
};

function EmployeesTableRow({employe}: EmployeesTableRowProps): JSX.Element {
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleRowClick = useCallback(() => {
    dispatch(setEmploye(employe));
    localStorage.setItem("employeId", employe.id.toString());
    navigate(AppRoute.Profile.replace(":id", `${employe.id}`));
  }, [dispatch, employe, navigate]);

  const rowClasses = useMemo(
    () => `${styles.row} ${styles[`${theme}Row`]}`,
    [theme]
  );

  const formattedBirthdate = useMemo(
    () => formatDate(employe.birthdate),
    [employe.birthdate]
  );
  return (
    <tr className={rowClasses} onClick={handleRowClick}>
      <td>{employe.name}</td>
      <td>{employe.position}</td>
      <td>{employe.phone}</td>
      <td>{formattedBirthdate}</td>
    </tr>
  );
}

export default memo(EmployeesTableRow);
