import { useEffect } from "react";
import { useAppDispatch } from ".";
import { setUpdateFilters } from "../store/action";
import { FilterCategory, FilterValue } from "../types/filter-type";

function useRestoreFiltersFromQuery() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    params.forEach((value, key) => {
      dispatch(setUpdateFilters({ filterType: key as FilterCategory, value: value as FilterValue}));
    });
  }, [dispatch]);
}

export default useRestoreFiltersFromQuery;
