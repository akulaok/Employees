import {AxiosInstance} from "axios";
import {AppDispatch, State} from "../types/state-type";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {isLoading, setEmployee, setEmployeesList, setError} from "./action";
import {Actions, TIMEOUT_SHOW_ERROR} from "../consts";
import {store} from ".";
import {EmployeesListType, EmployeeType} from "../types/empoyee-type";
import {EmployeesListParams} from "../types/api-type";

export const clearErrorAction = createAsyncThunk(Actions.clear_error, () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const getEmployeesList = createAsyncThunk<
  void,
  EmployeesListParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  Actions.set_employees_list,
  async ({page, count, gender, position, stack}, {dispatch, extra: api}) => {
    const queryParams = new URLSearchParams({
      Page: String(page),
      Count: String(count),
    });

    if (position) {
      position.forEach((pos) => queryParams.append("Position", pos));
    }
    if (stack) {
      stack.forEach((tech) => queryParams.append("Stack", tech));
    }
    if (gender) {
      queryParams.append("Stack", gender);
    }

    dispatch(isLoading(true));
    const {data} = await api.get<EmployeesListType>(`?${queryParams.toString()}`);
    dispatch(isLoading(false));
    dispatch(setEmployeesList(data));
  }
);

export const getEmployee = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Actions.set_employee, async (employeeId, {dispatch, extra: api}) => {
  const {data} = await api.get<EmployeeType>(`/${employeeId}`);
  dispatch(setEmployee(data));
});
