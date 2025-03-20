import { EmployeType } from "../types/empoyee-type";

export const searchEmployees = (query: string, employees: EmployeType[]) => {
  return employees.filter((employee: EmployeType) =>
    employee.name.toLowerCase().includes(query.toLowerCase())
  );
};
