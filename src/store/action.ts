import {createAction} from "@reduxjs/toolkit";
import {EmployeesListType, EmployeeType} from "../types/empoyee-type";
import {Actions} from "../consts";
import { FilterCategory, FilterValue} from "../types/filter-type";

export const setEmployeesList = createAction<EmployeesListType>(
  Actions.set_employees_list
);
export const setEmployee = createAction<EmployeeType>(Actions.set_employee);

export const setError = createAction<string | null>(Actions.set_error);
export const isLoading = createAction<boolean>(Actions.set_is_loading);
export const switchTheme = createAction<"light" | "dark">(Actions.switch_theme);
export const setBreadcrumbs = createAction<{name: string; url?: string}[]>(
  Actions.set_breadcrumbs
);
export const setActiveFilter = createAction<FilterCategory | null>(
  Actions.set_active_filter
);
export const setUpdateFilters = createAction<{
  filterType: FilterCategory;
  value: FilterValue;
}>(Actions.set_filters);
