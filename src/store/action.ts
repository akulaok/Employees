import { createAction } from "@reduxjs/toolkit";
import { EmployeesListType, EmployeeType } from "../types/empoyee-type";
import { Actions } from "../consts";

export const setEmployeesList = createAction<EmployeesListType>(Actions.set_employees_list);
export const setEmployee = createAction<EmployeeType>(Actions.set_employee);

export const setError = createAction<string | null>(Actions.set_error);
export const isLoading = createAction<boolean>(Actions.set_is_loading);
export const switchTheme = createAction<'light' | 'dark'>(Actions.switch_theme);