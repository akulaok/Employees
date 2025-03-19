import { Gender, Position, Technology } from "../consts";

export enum FilterCategory {
  Gender = "Gender",
  Position = "Position",
  Technology = "Technology",
}

export type ThemeType = "light" | "dark";

export type FilterValue = Gender | Position | Technology;

// export const FilterTitles = {
//   [FilterCategory.Gender]: "пол",
//   [FilterCategory.Position]: "должность",
//   [FilterCategory.Technology]: "стек",
// };

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


export type TagsType = { tag: FilterValue; filterType: FilterCategory }[];