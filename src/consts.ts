export enum AppRoute {
  EmployeesList = "/",
  Profile = "/employe/:id",
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
  set_employe = "employe/setEmploye",
  set_error = "app/setError",
  set_is_loading = "app/isLoading",
  switch_theme = "app/switchTheme",
  clear_error = "app/clearError",
  set_breadcrumbs = "app/setBreadcrumbs",
  set_active_filter = "filters/setActiveFilter",
  set_filters = "filters/setFilters",
  set_found_employees_list = "employees/setFoundList",
}

export const TIMEOUT_SHOW_ERROR = 2000;
