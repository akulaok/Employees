import { FilterCategory } from "./types/filter-type";

export enum AppRoute {
  EmployeesList = "/",
  Profile = "/employee/:id",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export enum Position {
  Frontend = "Frontend",
  Backend = "Backend",
  Analyst = "Analyst",
  Manager = "Manager",
  Designer = "Designer",
  Fullstack = "Fullstack",
}

export enum Technology {
  CSharp = "CSharp",
  React = "React",
  Java = "Java",
  PHP = "PHP",
  Figma = "Figma",
  Word = "Word",
}

export enum Actions {
  set_employees_list = "employees/setList",
  set_employee = "employees/setEmployee",
  set_error = "app/setError",
  set_is_loading = "app/isLoading",
  switch_theme = "app/switchTheme",
  clear_error = "app/clearError",
  set_breadcrumbs = "app/setBreadcrumbs",
  set_active_filter = "filters/setActiveFilter",
  set_filters = "filters/setFilters",
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const FilterTitles = {
  [FilterCategory.Gender]: "пол",
  [FilterCategory.Position]: "должность",
  [FilterCategory.Technology]: "стек",
};

export const initialFilters = {
  [FilterCategory.Gender]: Object.values(Gender).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<Gender, boolean>),

  [FilterCategory.Position]: Object.values(Position).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<Position, boolean>),

  [FilterCategory.Technology]: Object.values(Technology).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<Technology, boolean>),
};