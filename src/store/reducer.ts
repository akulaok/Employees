import {createReducer} from "@reduxjs/toolkit";
import {StateType} from "../types/state-type";
import {
  isLoading,
  setActiveFilter,
  setBreadcrumbs,
  setEmploye,
  setEmployeeList,
  setError,
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
  employee: [],
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
  // tags:[],
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
    .addCase(setEmploye, (state, action) => {
      state.selectedEmployee = action.payload;
    })
    .addCase(setEmployeeList, (state, action) => {
      state.employee = action.payload;
    })
    .addCase(setActiveFilter, (state, action) => {
      state.expandedFilter = action.payload;
    })
    .addCase(setUpdateFilters, (state, action) => {
      const {filterType, value} = action.payload;
      const filterState = state.filters[filterType] as Record<FilterValue, boolean>;
      filterState[value] = !filterState[value];
      saveFiltersToLocalStorage(state.filters);
    })
    .addCase(setBreadcrumbs, (state, action) => {
      state.breadcrumbs = action.payload;
    })
    // .addCase(setTags, (state, action) => {
    //   state.tags = action.payload;
    // });
});

export default reducer;
