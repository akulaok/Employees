export type EmployeeType = {
  id: number;
  name: string;
  photo: string;
  phone: string;
  gender: string;
  position: string;
  stack: string[];
  birthdate: string;
  dateOfEmployment: string;
};

export type EmployeesListType = EmployeeType[];