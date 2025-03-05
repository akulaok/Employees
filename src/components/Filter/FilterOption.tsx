import {JSX, memo} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FilterCategory, FilterValue} from "../../types/filter-type";
import {setUpdateFilters} from "../../store/action";
import styles from "./FilterOption.module.css";


type FilterOptionProps = {
  text: string;
  filterType: FilterCategory;
};

function FilterOption({text, filterType}: FilterOptionProps): JSX.Element {
  const filters = useAppSelector(
    (state) => state.filters[filterType] || ({} as Record<FilterValue, boolean>)
  );
  const dispatch = useAppDispatch();
  const isChecked = !!filters[text as keyof typeof filters];
  const handleCheck = () => {
    dispatch(setUpdateFilters({filterType, value: text as FilterValue}));
  };

  return (
    <label className={styles.option}>
      {text}
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        onChange={handleCheck}
      />
      <span className={styles.checkboxBox}></span>
    </label>
  );
}

export default memo(FilterOption);
