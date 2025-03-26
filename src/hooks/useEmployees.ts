import {useEffect, useCallback, useRef, useMemo} from "react";
import {getEmployeesList} from "../store/api-action";
import {getCurrentFilters} from "../utils/filters";
import {useAppDispatch, useAppSelector} from ".";

export const useEmployees = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const employees = useAppSelector((state) => state.foundEmployees);
  const prevFiltersRef = useRef<Record<string, string[] | undefined>>({});
  const isInitialLoadRef = useRef(true);
  const currentFilters = useMemo(() => getCurrentFilters(filters), [filters]);

  const updateEmployeesList = useCallback(() => {
    if (
      JSON.stringify(currentFilters) !== JSON.stringify(prevFiltersRef.current)
    ) {
      prevFiltersRef.current = currentFilters;
      dispatch(
        getEmployeesList({
          page: 1,
          count: 10,
          ...currentFilters,
        })
      );
    }
  }, [dispatch, filters]);

  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      updateEmployeesList();
    }
  }, [updateEmployeesList]);

  return {employees, updateEmployeesList};
};
