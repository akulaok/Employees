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
  set_employee_list = "employee/setList",
  set_employe = "employee/setEmploye",
  set_error = "app/setError",
  set_is_loading = "app/isLoading",
  switch_theme = "app/switchTheme",
  clear_error = "app/clearError",
  set_breadcrumbs = "app/setBreadcrumbs",
  set_active_filter = "filters/setActiveFilter",
  set_filters = "filters/setFilters",
  // set_tags = 'filters/setTags'
}

export const TIMEOUT_SHOW_ERROR = 2000;
