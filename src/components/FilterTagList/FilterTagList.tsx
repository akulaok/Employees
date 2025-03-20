import {JSX} from "react";
import { useAppSelector} from "../../hooks";
import FilterTag from "../FilterTag/FilterTag";
import styles from "./FilterTagList.module.css";
import { FilterCategory, FilterValue } from "../../types/filter-type";

function FilterTagList(): JSX.Element {
  const filters = useAppSelector((state) => state.filters);
  const tags = Object.entries(filters).flatMap(([filterType, filterGroup]) => 
    Object.entries(filterGroup ?? {})
      .filter(([_, value]) => value) 
      .map(([key]) => ({ tag: key as FilterValue, filterType: filterType as FilterCategory }))
  );
  return (
    <div className={styles.tagList}>
      {tags.map(({ tag, filterType }) => (
        <FilterTag key={tag} text={tag} filterType={filterType} />
      ))}
    </div>
  );
}

export default FilterTagList;
