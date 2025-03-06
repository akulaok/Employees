import { useEffect } from "react";
import { useAppSelector } from ".";


function useSyncFiltersWithQuery() {
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([filterType, filterGroup]) => {
      Object.entries(filterGroup ?? {}).forEach(([key, value]) => {
        if (value) {
          params.append(filterType, key);
        }
      });
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [filters]);
}

export default useSyncFiltersWithQuery;
