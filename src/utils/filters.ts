import {FilterCategory} from "../types/filter-type";
import {FiltersState} from "../types/state-type";

export const extractSelectedFilters = (
  filterGroup: Record<string, boolean>
): string[] => {
  return filterGroup
    ? Object.entries(filterGroup)
        .filter(([_, isSelected]) => isSelected)
        .map(([key]) => key)
    : [];
};

export const getCurrentFilters = (filters: FiltersState) => ({
  gender: extractSelectedFilters(filters[FilterCategory.Gender]),
  position: extractSelectedFilters(filters[FilterCategory.Position]),
  stack: extractSelectedFilters(filters[FilterCategory.Technology]),
});

