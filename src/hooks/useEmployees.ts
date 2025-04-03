import {useEffect, useCallback, useRef, useMemo} from "react";
import {getEmployeesList} from "../store/api-action";
import {getCurrentFilters} from "../utils/filters";
import {useAppDispatch, useAppSelector} from ".";
import {
  addEmployeesList,
  setIsEmployeesData,
  setIsLoading,
  setEmployeesList,
  setNewPage,
} from "../store/action";
import isEqual from "lodash/isEqual";
import {store} from "../store";

export const useEmployees = () => {
  const dispatch = useAppDispatch();
  const {filters, isEmployeesData, isLoading, employees} = useAppSelector(
    (state) => ({
      filters: state.filters,
      isEmployeesData: state.isEmployeesData,
      isLoading: state.isLoading,
      employees: state.foundEmployees,
    })
  );

  const prevRequestRef = useRef<{
    filters: Record<string, string[] | undefined>;
    page: number;
  } | null>(null);
  const isInitialLoadRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  const currentFilters = useMemo(() => getCurrentFilters(filters), [filters]);

  const abortPreviousRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
  };

  const updateStateBeforeFetch = (currentRequest: {
    filters: Record<string, string[] | undefined>;
    page: number;
  }) => {
    dispatch(setIsLoading(true));
    prevRequestRef.current = currentRequest;
  };

  const fetchAndSetEmployees = useCallback(
    async (page: number, isAddData: boolean) => {
      const currentRequest = {filters: currentFilters, page};
      if (
        prevRequestRef.current &&
        isEqual(prevRequestRef.current, currentRequest)
      )
        return;

      abortPreviousRequest();
      updateStateBeforeFetch(currentRequest);

      try {
        const resultAction = await dispatch(
          getEmployeesList({
            page,
            count: 10,
            ...currentFilters,
            signal: abortControllerRef.current?.signal,
          })
        );

        if (getEmployeesList.fulfilled.match(resultAction)) {
          const data = resultAction.payload;
          dispatch(isAddData ? addEmployeesList(data) : setEmployeesList(data));
          dispatch(setNewPage(page));
          dispatch(setIsEmployeesData(data.length >= 10));
        }
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          dispatch(setIsEmployeesData(false));
        }
        prevRequestRef.current = null;
      } finally {
        dispatch(setIsLoading(false));
      }
    },
    [dispatch, currentFilters]
  );

  const updateEmployeesList = useCallback(() => {
    fetchAndSetEmployees(1, false);
  }, [fetchAndSetEmployees]);

  const loadMore = useCallback(() => {
    const {isEmployeesData, isLoading, loadedPage} = store.getState();
    if (isEmployeesData && !isLoading) {
      fetchAndSetEmployees(loadedPage + 1, true);
    }
  }, [fetchAndSetEmployees]);

  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      updateEmployeesList();
    }
  }, [updateEmployeesList]);

  return {
    employees,
    updateEmployeesList,
    loadMore,
    isLoading,
    hasMoreData: isEmployeesData,
  };
};
