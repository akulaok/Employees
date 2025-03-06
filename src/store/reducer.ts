import {createReducer} from "@reduxjs/toolkit";
import {StateType} from "../types/state-type";
import {
  isLoading,
  setActiveFilter,
  setBreadcrumbs,
  setEmployee,
  setEmployeesList,
  setError,
  setUpdateFilters,
  switchTheme,
} from "./action";
import {ThemeType} from "../types/filter-type";
import {initialFilters} from "../consts";

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
  filters: loadFiltersFromLocalStorage(),
  expandedFilter: null,
  theme: (localStorage.getItem("theme") as ThemeType) || "light",
  isLoading: true,
  error: null,
  selectedEmployee: null,
  breadcrumbs: [
    {name: "Главная"},
    {name: "Список сотрудников", url: "/employees"},
  ],
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
    .addCase(setActiveFilter, (state, action) => {
      state.expandedFilter = action.payload;
    })
    .addCase(setUpdateFilters, (state, action) => {
      const {filterType, value} = action.payload;
      const filterState = state.filters[filterType] as Record<string, boolean>;
      filterState[value] = !filterState[value];
      saveFiltersToLocalStorage(state.filters);
    })
    .addCase(setBreadcrumbs, (state, action) => {
      state.breadcrumbs = action.payload;
    });
});

export default reducer;
