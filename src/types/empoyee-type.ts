export type EmployeType = {
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

export type EmployeesListType = EmployeType[];