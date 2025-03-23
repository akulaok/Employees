import {JSX} from "react";
import styles from "./FilterTag.module.css";
import {FilterCategory, FilterValue, ThemeType} from "../../types/filter-type";
import {useAppDispatch} from "../../hooks";
import {setUpdateFilters} from "../../store/action";

type FilterTagProps = {
  text: string;
  filterType: FilterCategory;
  theme: ThemeType;
};

function FilterTag({text, filterType, theme}: FilterTagProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(setUpdateFilters({filterType, value: text as FilterValue}));
  };

  return (
    <div className={`${styles.tag} ${styles[`${theme}Tag`]}`}>
      <button
        className={`${styles.button} ${styles[`${theme}Button`]}`}
        onClick={handleDelete}
      ></button>
      <span>{text}</span>
    </div>
  );
}

export default FilterTag;
