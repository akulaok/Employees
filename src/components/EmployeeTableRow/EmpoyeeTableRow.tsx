import {JSX} from "react";
import {EmployeType} from "../../types/empoyee-type";
import {useNavigate} from "react-router-dom";
import {AppRoute} from "../../consts";
import {useAppDispatch} from "../../hooks";
import {setEmploye} from "../../store/action";
import {formatDate} from "../../utils/formatDate";

type EmployeesTableRowProps = {
  employe: EmployeType;
};

function EmployeesTableRow({employe}: EmployeesTableRowProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleRowClick = () => {
    dispatch(setEmploye(employe));
    localStorage.setItem("employeId", employe.id.toString());
    navigate(AppRoute.Profile.replace(":id", `${employe.id}`));
  };

  return (
    <tr onClick={handleRowClick}>
      <td>{employe.name}</td>
      <td>{employe.position}</td>
      <td>{employe.phone}</td>
      <td>{formatDate(employe.birthdate)}</td>
    </tr>
  );
}

export default EmployeesTableRow;
