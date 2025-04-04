import {EmployeType} from "../types/empoyee-type";

export const searchEmployees = (query: string, employees: EmployeType[]) => {
  if (!query.trim()) {
    return employees;
  }
  
  const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return employees.filter((employee: EmployeType) => {
    const nameParts = employee.name.toLowerCase().split(/\s+/);
    return queryTerms.some((term) =>
      nameParts.some((part) => part.startsWith(term))
    );
  });
};
