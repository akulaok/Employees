export enum AppRoute {
  EmployeesList = "/employees",
  Profile = "/employees/:id",
}

export const RouteNames: Record<string, string> = {
  [AppRoute.EmployeesList]: "Список сотрудников",
};

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
  add_employees_list = "employees/addList",
  set_employe = "employe/setEmploye",
  set_error = "app/setError",
  set_is_loading = "app/isLoading",
  switch_theme = "app/switchTheme",
  clear_error = "app/clearError",
  set_breadcrumbs = "app/setBreadcrumbs",
  set_active_filter = "filters/setActiveFilter",
  set_filters = "filters/setFilters",
  set_found_employees_list = "employees/setFoundList",
  set_page = "employees/page",
  is_employees_data = "employees/is_data",
}

export const TIMEOUT_SHOW_ERROR = 2000;
