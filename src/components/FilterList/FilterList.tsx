import {JSX, memo, useCallback, useEffect, useMemo, useRef} from "react";
import FilterListOption from "../FilterListOption/FilterListOption";
import styles from "../FilterListBox/FilterListBox.module.css";
import {FilterCategory} from "../../types/filter-type";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setActiveFilter} from "../../store/action";
import FilterListHeader from "../FilterListHeader/FilterListHeader";

type FilterListProps = {
  filterType: FilterCategory;
  filterOptions: Object;
};

function FilterList({filterType, filterOptions}: FilterListProps): JSX.Element {
  const {activeFilter, theme} = useAppSelector((state) => ({
    activeFilter: state.expandedFilter,
    theme: state.theme,
  }));
  const isOpen = activeFilter === filterType;
  const dispatch = useAppDispatch();
  const filterRef = useRef<HTMLFormElement>(null);

  const toggleFilter = useCallback(() => {
    dispatch(setActiveFilter(isOpen ? null : filterType));
  }, [dispatch, isOpen, filterType]);

  const filtersListClasses = useMemo(
    () => `${styles.filtersList} ${styles[`${theme}FiltersList`]}`,
    [theme]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveFilter(null));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, dispatch]);

  return (
    <form className={styles.filter} ref={filterRef}>
      <FilterListHeader
        text={filterType}
        isOpen={isOpen}
        onClick={toggleFilter}
      />
      {isOpen && (
        <ul
          className={filtersListClasses}
        >
          {Object.entries(filterOptions).map(([key, value]) => (
            <FilterListOption
              theme={theme}
              key={key}
              text={value}
              filterType={filterType}
            />
          ))}
        </ul>
      )}
    </form>
  );
}

export default memo(FilterList);
