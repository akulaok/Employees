import {JSX, useEffect, useRef} from "react";
import FilterOption from "../Filter/FilterOption";
import styles from "./FilterList.module.css";
import {FilterCategory} from "../../types/filter-type";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setActiveFilter} from "../../store/action";
import FilterHeader from "../FilterHeader/FilterHeader";

type FilterListProps = {
  filterType: FilterCategory;
  filterOptions: Object;
};

function FilterList({filterType, filterOptions}: FilterListProps): JSX.Element {
  const activeFilter = useAppSelector((state) => state.activeFilter);
  const isOpen = activeFilter === filterType;
  const dispatch = useAppDispatch();
  const filterRef = useRef<HTMLFormElement>(null);

  const toggleFilter = () => {
    dispatch(setActiveFilter(isOpen ? null : filterType));
  };

  console.log(filterType);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        dispatch(setActiveFilter(null));
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [isOpen, dispatch]);

  return (
    <form className={styles.filter} ref={filterRef}>
      <FilterHeader text={filterType} isOpen={isOpen} onClick={toggleFilter} />
      {isOpen && (
        <ul className={styles.filtersList}>
          {Object.entries(filterOptions).map(([key, value]) => (
            <FilterOption key={key} text={value} filterType={filterType} />
          ))}
        </ul>
      )}
    </form>
  );
}

export default FilterList;
