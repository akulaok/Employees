import {createReducer} from "@reduxjs/toolkit";
import {StateType} from "../types/state-type";
import {
  addEmployeesList,
  setActiveFilter,
  setEmploye,
  setEmployeesList,
  setError,
  setFoundEmployeesList,
  setIsEmployeesData,
  setIsLoading,
  setNewPage,
  setUpdateFilters,
  switchTheme,
} from "./action";
import {FilterValue, initialFilters, ThemeType} from "../types/filter-type";

const loadFiltersFromLocalStorage = (): typeof initialFilters => {
  try {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : initialFilters;
  } catch {
    return initialFilters;
  }
};

const saveFiltersToLocalStorage = (filters: typeof initialFilters) => {
  localStorage.setItem("filters", JSON.stringify(filters));
};

const initialState: StateType = {
  employees: [],
  foundEmployees: [],
  filters: loadFiltersFromLocalStorage(),
  expandedFilter: null,
  theme: (localStorage.getItem("theme") as ThemeType) || "light",
  isLoading: true,
  error: null,
  selectedEmploye: null,
  loadedPage: 1,
  isEmployeesData: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(switchTheme, (state, action) => {
      state.theme = action.payload;
    })
    .addCase(setEmploye, (state, action) => {
      state.selectedEmploye = action.payload;
    })
    .addCase(setFoundEmployeesList, (state, action) => {
      state.foundEmployees = action.payload;
    })
    .addCase(setEmployeesList, (state, action) => {
      state.employees = action.payload;
      state.foundEmployees = action.payload;
    })
    .addCase(addEmployeesList, (state, action) => {
      state.employees = [...state.employees, ...action.payload];
      state.foundEmployees = [...state.employees, ...action.payload];
    })
    .addCase(setActiveFilter, (state, action) => {
      state.expandedFilter = action.payload;
    })
    .addCase(setNewPage, (state, action) => {
      state.loadedPage = action.payload;
    })
    .addCase(setIsEmployeesData, (state, action) => {
      state.isEmployeesData = action.payload;
    })
    .addCase(setUpdateFilters, (state, action) => {
      const {filterType, value} = action.payload;
      const filterState = state.filters[filterType] as Record<
        FilterValue,
        boolean
      >;
      filterState[value] = !filterState[value];
      saveFiltersToLocalStorage(state.filters);
    });
});

export default reducer;
