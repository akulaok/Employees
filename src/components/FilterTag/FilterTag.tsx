import {JSX} from "react";
import styles from "./FilterTag.module.css";
import {FilterCategory, FilterValue} from "../../types/filter-type";
import {useAppDispatch} from "../../hooks";
import {setUpdateFilters} from "../../store/action";

type FilterTagProps = {
  text: string;
  filterType: FilterCategory;
};

function FilterTag({text, filterType}: FilterTagProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(setUpdateFilters({filterType, value: text as FilterValue}));
  };

  return (
    <div className={styles.tag}>
      <button className={styles.button} onClick={handleDelete}></button>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default FilterTag;
