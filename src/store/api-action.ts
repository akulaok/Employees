import {AxiosInstance} from "axios";
import {AppDispatch, State} from "../types/state-type";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {isLoading, setEmploye, setEmployeesList, setError} from "./action";
import {Actions, TIMEOUT_SHOW_ERROR} from "../consts";
import {store} from ".";
import {EmployeesListType, EmployeType} from "../types/empoyee-type";
import {EmployeesListParams} from "../types/api-type";

export const clearErrorAction = createAsyncThunk(Actions.clear_error, () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

const buildQueryParams = (params: EmployeesListParams): string => {
  const queryParams = new URLSearchParams({
    Page: String(params.page ?? 1),
    Count: String(params.count ?? 20),
  });

  if (params.position) {
    params.position.forEach((pos) => queryParams.append("Position", pos));
  }
  if (params.stack) {
    params.stack.forEach((tech) => queryParams.append("Stack", tech));
  }
  if (params.gender) {
    params.gender.forEach((g) => queryParams.append("Gender", g));
  }

  return queryParams.toString();
};

export const getEmployeesList = createAsyncThunk<
  void,
  EmployeesListParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Actions.set_employees_list, async (params, {dispatch, extra: api}) => {
  const queryParams = buildQueryParams(params);

  dispatch(isLoading(true));
  const {data} = await api.get<EmployeesListType>(`?${queryParams.toString()}`);
  dispatch(setEmployeesList(data));
  dispatch(isLoading(false));
});

export const getEmployee = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Actions.set_employe, async (employeId, {dispatch, extra: api}) => {
  const {data} = await api.get<EmployeType>(`/${employeId}`);
  dispatch(setEmploye(data));
});
