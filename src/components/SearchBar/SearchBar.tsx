import React, {JSX, useState, useEffect} from "react";
import styles from "./SearchBar.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setFoundEmployeesList} from "../../store/action";
import {searchEmployees} from "../../utils/searchByName";

function SearchBar(): JSX.Element {
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
      className={styles.searchBar}
      type="text"
      placeholder="Поиск"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
