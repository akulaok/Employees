import {Gender, Position, Technology} from "../consts";
import {store} from "../store";
import {EmployeesListType, EmployeeType} from "./empoyee-type";
import {FilterCategory, ThemeType} from "./filter-type";

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type StateType = {
  employees: EmployeesListType;
  filters: FiltersState;
  expandedFilter: FilterCategory | null;
  theme: ThemeType;
  isLoading: boolean;
  error: string | null;
  selectedEmployee: EmployeeType | null;
  breadcrumbs: {name: string; url?: string}[];
};

export type FiltersState = {
  [FilterCategory.Gender]: Record<Gender, boolean>;
  [FilterCategory.Position]: Record<Position, boolean>;
  [FilterCategory.Technology]: Record<Technology, boolean>;
};
