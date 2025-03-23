import React, {JSX, useState, useEffect} from "react";
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

  useEffect(() => {
    const foundEmployees = searchEmployees(searchQuery, originalEmployees);
    dispatch(setFoundEmployeesList(foundEmployees));
  }, [originalEmployees, searchQuery, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

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
