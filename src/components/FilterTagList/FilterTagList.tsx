import {JSX, useMemo} from "react";
import {useAppSelector} from "../../hooks";
import FilterTag from "../FilterTag/FilterTag";
import styles from "./FilterTagList.module.css";
import {FilterCategory, FilterValue} from "../../types/filter-type";

function FilterTagList(): JSX.Element {
  const {filters, theme} = useAppSelector((state) => ({
    filters: state.filters,
    theme: state.theme,
  }));

  const tags = useMemo(() => {
    return Object.entries(filters).flatMap(([filterType, filterGroup]) =>
      Object.entries(filterGroup ?? {})
        .filter(([_, value]) => value)
        .map(([key]) => ({
          tag: key as FilterValue,
          filterType: filterType as FilterCategory,
        }))
    );
  }, [filters]);
  return (
    <div className={styles.tagList}>
      {tags.map(({tag, filterType}) => (
        <FilterTag theme={theme} key={tag} text={tag} filterType={filterType} />
      ))}
    </div>
  );
}

export default FilterTagList;
