import { Gender, Position, Technology } from "../consts";

export enum FilterCategory {
  Gender = "Пол",
  Position = "Должность",
  Technology = "Стек технологий",
}

export type ThemeType = "light" | "dark";

export type FilterValue = Gender | Position | Technology;

