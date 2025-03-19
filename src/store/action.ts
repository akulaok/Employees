import {createAction} from "@reduxjs/toolkit";
import {EmployeesListType, EmployeeType} from "../types/empoyee-type";
import {Actions} from "../consts";
import { FilterCategory, FilterValue, TagsType} from "../types/filter-type";

export const setEmployeeList = createAction<EmployeesListType>(
  Actions.set_employee_list
);
export const setEmploye = createAction<EmployeeType>(Actions.set_employe);

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
