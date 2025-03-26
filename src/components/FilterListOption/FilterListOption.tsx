import {JSX, memo, useCallback, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {FilterCategory, FilterValue, ThemeType} from "../../types/filter-type";
import {setUpdateFilters} from "../../store/action";
import styles from "./FilterListOption.module.css";

type FilterListOptionProps<T extends FilterCategory> = {
  text: FilterValue;
  filterType: T;
  theme: ThemeType;
};

function FilterListOption<T extends FilterCategory>({
  text,
  filterType,
  theme,
}: FilterListOptionProps<T>): JSX.Element {
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();
  const isChecked = (filters[filterType] as Record<FilterValue, boolean>)[text];

  const handleCheck = useCallback(() => {
    dispatch(setUpdateFilters({filterType, value: text}));
  }, [dispatch, filterType, text]);

  const checkboxClasses = useMemo(
    () => `${styles.checkboxBox} ${styles[`${theme}CheckboxBox`]}`,
    [theme]
  );

  return (
    <label className={styles.option}>
      {text}
      <input
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        onChange={handleCheck}
      />
      <span className={checkboxClasses}></span>
    </label>
  );
}

export default FilterListOption;
