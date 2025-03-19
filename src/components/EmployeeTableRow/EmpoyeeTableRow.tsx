import {JSX} from "react";
import {EmployeeType} from "../../types/empoyee-type";

type EmployeesTableRowProps = {
  employe: EmployeeType;
};

function EmployeesTableRow({ employe }: EmployeesTableRowProps): JSX.Element {
  return (
    <tr>
      <td>{employe.name}</td>
      <td>{employe.position}</td>
      <td>{employe.phone}</td>
      <td>{employe.birthdate}</td>
    </tr>
  );
}

export default EmployeesTableRow;
