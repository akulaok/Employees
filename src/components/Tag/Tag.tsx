import {JSX} from "react";
import styles from "./Tag.module.css";
import {FilterCategory, FilterValue} from "../../types/filter-type";
import {useAppDispatch} from "../../hooks";
import {setUpdateFilters} from "../../store/action";

type TagProps = {
  text: string;
  filterType: FilterCategory;
};

function Tag({text, filterType}: TagProps): JSX.Element {
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

export default Tag;
