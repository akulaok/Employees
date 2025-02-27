import { Gender, Position, Technology } from "../consts"

export type FiltersType = {
  gender?: Gender;
  position?: Position;
  technology?: Technology[];
}

export type ThemeType = 'light' | 'dark';
