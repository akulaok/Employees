export type EmployeesListParams = {
  page: number;
  count: number;
  gender?: 'Male' | 'Female';
  position?: string[];
  stack?: string[];
};