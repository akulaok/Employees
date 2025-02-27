export enum AppRoute {
  EmployeesList = "/",
  Employee = "/employee/:id",
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
  set_employee = "employees/setEmployee",
  set_error = "app/setError",
  set_is_loading = "app/isLoading",
  switch_theme = "app/switchTheme",
  clear_error = "app/clearError"
}

export const TIMEOUT_SHOW_ERROR = 2000;
