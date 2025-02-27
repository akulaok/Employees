import { store } from "../store";
import { EmployeesListType, EmployeeType } from "./empoyee-type";
import { FiltersType, ThemeType } from "./filter-type";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type StateType = {
  employees: EmployeesListType; 
  filters: FiltersType; 
  theme: ThemeType; 
  isLoading: boolean; 
  error: string | null; 
  selectedEmployee: EmployeeType | null;
}
