import {createReducer} from "@reduxjs/toolkit";
import {StateType} from "../types/state-type";
import {isLoading, setEmployee, setEmployeesList, setError, switchTheme} from "./action";

const initialState: StateType = {
  employees: [],
  filters: {},
  theme: "light",
  isLoading: true,
  error: null,
  selectedEmployee: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(isLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(switchTheme, (state, action) => {
      state.theme = action.payload;
    })
    .addCase(setEmployee, (state, action) => {
      state.selectedEmployee = action.payload;
    })
    .addCase(setEmployeesList, (state, action) => {
      state.employees = action.payload;
    })
});

export default reducer;
