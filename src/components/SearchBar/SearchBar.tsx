import React, {JSX, useState, useEffect, useMemo, useCallback} from "react";
import styles from "./SearchBar.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setFoundEmployeesList} from "../../store/action";
import {searchEmployees} from "../../utils/searchByName";
import {ThemeType} from "../../types/filter-type";

type SearchBarProps = {
  theme: ThemeType;
};

function SearchBar({theme}: SearchBarProps): JSX.Element {
  const dispatch = useAppDispatch();
  const originalEmployees = useAppSelector((state) => state.employees);
  const [searchQuery, setSearchQuery] = useState("");

  const foundEmployees = useMemo(
    () => searchEmployees(searchQuery, originalEmployees),
    [searchQuery, originalEmployees]
  );

  useEffect(() => {
    dispatch(setFoundEmployeesList(foundEmployees));
  }, [foundEmployees, dispatch]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  return (
    <input
      className={`${styles.searchBar} ${styles[`${theme}SearchBar`]}`}
      type="text"
      placeholder="Поиск"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
